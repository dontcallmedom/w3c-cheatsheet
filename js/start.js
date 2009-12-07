/* Removes redundant elements from an array */
var make_unique = function (b) {
    var a = [];
    b.sort();
    for (var i in b) {
        if (i > 0 && b[i] !== b[i - 1]) {
            a[a.length] = b[i];
        }
    }
    return a;
};

var keywordSources = {
    "css": {"p": "CSS Property",
            "se": "CSS Selector",
            "ar": "CSS At-rules"},
    "html": {"e": "HTML Element",
             "a": "HTML Attribute"},
    "svg": {"a": "SVG Attribute",
            "e": "SVG Element"},
    "xpath": {"f": "XPath function"}
};

var keywordsMatch = {};
var keywords = [];
for (var infoset in keywordSources) {
    for (var propertytype in keywordSources[infoset]) {
        var source = sources[infoset][propertytype];
        for (var keyword in source) {
            if (!keywordsMatch[keyword]) {
                keywordsMatch[keyword] = {};
                keywords.push(keyword);
                if (source[keyword].synonym) {
                    keyword.push(source[keyword].synonym);
                }
            }
            if (!keywordsMatch[keyword][infoset]) {
                keywordsMatch[keyword][infoset] = {};
            }
            if (!keywordsMatch[keyword][infoset][propertytype]) {
                keywordsMatch[keyword][infoset][propertytype] = [];
            }
            for (var k in source[keyword]["d"]) {            
                keywordsMatch[keyword][infoset][propertytype].push(source[keyword]["d"][k]);
                if (source[keyword].synonym) {
                    keywordsMatch[source[keyword].synonym][infoset][propertytype].push(source[keyword]["d"][k]);
                }
            }       
        }
    }
}

function makeReplacingAccordion(accordion) {
    accordion.css("position", "relative");
    accordion.accordion('option', 'navigation', true);
    accordion.accordion('option', 'autoHeight', 'false');
    accordion.accordion('option', 'collapsible', true);
}

function clearLookUp() {
    if ($("#details").accordion) {
        $("#details").accordion("destroy");
    }
    $("#details").html("");    
}

jQuery(document).ready(function ($) {
  // Tabs
  //$('#content').css("overflow","hidden");
  //$('#content').css("height","480px");
    $('#content').tabs();
    $('#content').tabs('paging');
    $('#content').bind("tabsshow", function (event, ui) { 
        window.location.hash = ui.tab.hash;
    });

    $(".accordion").accordion({header: 'div >h3', active: false, autoHeight: false});
    makeReplacingAccordion($(".accordion"));

    keywords = make_unique(keywords);
    //$("#search").setOptions({"data":keywords});

    function show_keyword(keyword, infoset, propertytype) {
        if (keyword === null) {
            return false;
        }
        var infosetname = keywordSources[infoset][propertytype];
        var div = $("<div></div>").appendTo($("#details"));
        div.append("<h2>" + infosetname + " <code>" + keyword + "</code></h2><div></div>");
        var div2 = $("div", div);
        for (var contextidx in keywordsMatch[keyword][infoset][propertytype]) {
            var context = keywordsMatch[keyword][infoset][propertytype][contextidx];
            var dl = $("<dl></dl>").appendTo(div2);
            for (var property in context) {
                var dt = $("<dt></dt>").appendTo(dl);
                var container = dt;
                if (context[property].u) {
                    var propurl = context[property].u;
                    if (propurl.substring(0, 1) === "/") {
                        propurl = "http://www.w3.org" + propurl;
                    }
                    container = $("<a href='" + propurl + "'></a>").appendTo(dt);
                }
                container.text(dictionary[property]);
                if (context[property]["p"] && context[property]["p"].length > 0) {
                    var displayAsList = true;
                    if (context[property]["p"].length === 1 || context[property].l === "inline") {
                        displayAsList = false;
                    }
                    var dd = $("<dd></dd>").appendTo(dl);
                    var listcontainer = dd;
                    if (displayAsList) {
                        if (context[property].l === "block") {
                            listcontainer = $("<ul></ul>").appendTo(listcontainer);
                        }
                    }
                    for (var propcontentidx in context[property]["p"]) {
                        var itemcontainer = listcontainer;
                        var propcontent = context[property]["p"][propcontentidx];
                        if (displayAsList) {
                            itemcontainer = $("<li></li>").appendTo(itemcontainer);
                        } else {
                            itemcontainer = $("<span></span>").appendTo(itemcontainer);
                        }
                        if (propcontent.u) {
                            var url = propcontent.u;
                            if (url.substring(0, 1) === "/") {
                                url = "http://www.w3.org" + url;
                            }
                            itemcontainer = $("<a href='" + url + "'></a>").appendTo(itemcontainer);
                        } else if (context[property].i && context[property].y) {
                            itemcontainer = $("<a href='#inf," + context[property].i + "," + escape(context[property].y) + "," + escape(propcontent.t) + "' class='internal'></a>").appendTo(itemcontainer);
                        }
                        itemcontainer.text(propcontent.t);
                        if (!displayAsList && propcontentidx < context[property]["p"].length - 1) {
                            listcontainer.append(", ");
                        }
                    }
                }
            }
        }
        return true;    
    }

    function load_anchor(anchor) {
        if (anchor === null) {
            return false;
        }
        var selector_path = anchor.split(',');
        var infoset = unescape(selector_path[1]);
        var propertytype = unescape(selector_path[2]);
        var keyword = unescape(selector_path.slice(3).join(","));
        if (keyword && infoset && propertytype && keywordSources[infoset] && keywordSources[infoset][propertytype] && keywordsMatch[keyword] && keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]
            ) {
            clearLookUp();
            $("#search").val("");
            if (show_keyword(keyword, infoset, propertytype)) {
                $("#details").accordion({header: 'div>h2', autoHeight: false});
                return true;
            }
        }
        return false;
    }



    function show_result(item) {
        if (item === null) {
            return;
        }
        var keyword = item.selectValue;
	window.location.hash = "#search," + escape(keyword);
        clearLookUp();
        var detailsLength = 0;
        for (var infoset in keywordsMatch[keyword]) {
            for (var propertytype in keywordsMatch[keyword][infoset]) {
                detailsLength = detailsLength + 1;
                show_keyword(keyword, infoset, propertytype);
            }
        }
        if (detailsLength === 1) {
            $("#details").accordion({header: 'div>h2', autoHeight: false});
        } else {
            $("#details").accordion({header: 'div>h2', autoHeight: false, active: false});
        }
        makeReplacingAccordion($("#details"));
    }

    $("a.internal").live("click",
        function ()  { 
            return load_anchor($(this).attr("href").split("#")[1]); 
        }
    );


    $("#search").autocompleteArray(keywords, {onItemSelect: show_result, onFindValue: show_result, autoFill: false, selectFirst: true, delay: 40, maxItemsToShow: 10});
    $("#search").change(function () {
        clearLookUp();
        if ($("#search").val()) {
            if (!$("#details_clear").length) {
                $("#search").after("<a href='#' class='ui-icon ui-icon-close' id='details_clear'></a>");
                $("#details_clear").click(function () {
                    clearLookUp();
                    $("#search").val("").change();
                });
            }
        } else {
            $("#details_clear").replaceWith("");
        }
    });
    if (window.location.hash) {
	if (window.location.hash.substring(0, 5) === '#inf,') {
            load_anchor(window.location.hash.substring(1));
	} else if (window.location.hash.substring(0, 8) === '#search,') {
	    $("#search").val(window.location.hash.substring(8));
	    $("#search").get(0).autocompleter.findValue();
	}
    }
});
