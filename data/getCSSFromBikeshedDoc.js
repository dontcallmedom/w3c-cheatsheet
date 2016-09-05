const jsdom = require('jsdom');
const baseFetch = require('node-fetch');

function loadSpecification(url) {
    return baseFetch(url).then(response => response.text())
        .then(html => new Promise((resolve, reject) => {
            jsdom.env({
                html: html,
                done: (err, window) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(window);
                }
                ,virtualConsole: jsdom.createVirtualConsole().sendTo(console)
            })
        })
             );
}

function definitionlistToObject(pre) {
    var lines = pre.textContent.split("\n");
    var defs = lines.map(l => l.split(':').map(c => c.trim()))
        .reduce((prev, cur) => {prev[cur[0].toLowerCase()] = cur.slice(1).join(':'); return prev;} , {});
    return defs;

}

function valueToReferences(value) {
    if (value.match(/<<?'/)) {
        return value.replace(/<<?'([^']*)'>>?/g, '<span type="property" infoset="css">$1<\/span>')}
    else {
        return value.replace(/<([^>]*)>/g, '&lt;$1&gt;');
    }
}

loadSpecification(process.argv[2])
    .then(function(w) {
        var metadata = definitionlistToObject(w.document.querySelector('pre.metadata'));
        var relativeTR =  '/' + metadata.tr.split('/').slice(3).join('/');
        console.log("<infosets><infoset technology='css'>");

        var propdefs = w.document.querySelectorAll('pre.propdef')
        for (var i = 0 ; i < propdefs.length; i++) {
            defs = definitionlistToObject(propdefs[i]);
            console.log("<item type='property' name='" + defs.name + "'><context>");
            console.log('<property name="values"><content>'
                        + valueToReferences(defs.value || defs['new values']) + '</content></property>')
            console.log((defs['applies to'] ? '<property name="applies"><content>'
                         + defs['applies to'] + '</content></property>' : '')
                        + '<property name="inherited"><content>'
                        + defs.inherited + '</content></property>'
                        + '<property name="media"><content>'
                        + defs.media + '</content></property>'
                        +' <property name="Specification" link="' + relativeTR + ' #propdef-' + defs.name + '"/>');
            console.log("</context></item>");
        }
        console.log("</infoset></infosets>");
    }).catch(console.error.bind(console));
