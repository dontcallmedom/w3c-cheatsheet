const util = require('./util.js');

function definitionlistToObject(pre) {
    var lines = pre.split("\n");
    var defs = lines.map(l => l.split(':').map(c => c.trim()))
        .reduce((prev, cur) => {prev[cur[0].toLowerCase()] = cur.slice(1).join(':'); return prev;} , {});
    return defs;

}

function valueToReferences(value) {
    var replace = value.replace(/&/g, '&amp;');
    if (value.match(/<<?'/)) {
        replace = replace.replace(/<<?'([^']*)'>>?/g, '<span type="property" infoset="css">$1<\/span>');
    } else if (value.match(/<[^']/)) {
        replace = replace.replace(/<([^>]*)>/g, '<span type="value space" infoset="css">$1</span>');
    }
    return replace;
}

function propContent(name, value) {
    if (value) {
        return '<property name="' + name + '"><content>'
            + value + '</content></property>'
    }
    return '';
}

util.loadSpecification(process.argv[2])
    .then(function(w) {
        var metadata = definitionlistToObject(w.document.querySelector('pre.metadata,div.head dl').textContent);
        if (metadata && metadata.tr) {
            var relativeTR =  '/' + metadata.tr.split('/').slice(3).join('/');
        } else {
            relativeTR = process.argv[2];
        }
        console.log("<infosets><infoset technology='css'>");

        var propdefs = w.document.querySelectorAll('pre.propdef,table.propdef')
        for (var i = 0 ; i < propdefs.length; i++) {
            var pre = propdefs[i];
            var defText;
            // Bikeshed doesn't escape '<' & '>' in the propdefs
            // so getting back the values from the HTML parsing algo
            if (pre.tagName === "PRE") {
                for (var j = 0 ; j < pre.children.length; j++) {
                    var el = pre.children[j];
                    if (el.tagName !== 'A') {
                        pre.replaceChild(w.document.createTextNode(el.tagName.toLowerCase() +'>'), el);
                    }
                }
                defText = pre.textContent;
            } else {
                defText = [].map.call(pre.querySelectorAll("tr"), tr => tr.textContent.replace(/\n/g, "")).join("\n");
            }
            defs = definitionlistToObject(defText);
            var type = 'property';
            if (propdefs[i].classList.contains('partial')) {
                type = 'partialproperty';
            }
            defs.name.split(',').map(n => n.trim()).forEach(n => {
                console.log("<item type='" + type + "' name='" + n + "'><context>");
                console.log('<property name="values"><content>'
                        + valueToReferences(defs.value || defs['new values']) + '</content></property>')
                console.log(propContent('applies', defs['applies to'])
                            + propContent('inherited', defs.inherited)
                            + propContent('media', defs.media)
                            + '<property name="Specification" link="' + relativeTR + '#propdef-' + n + '"/>');
                console.log("</context></item>");
            });
        }
        console.log("</infoset></infosets>");
    }).catch(console.error.bind(console));
