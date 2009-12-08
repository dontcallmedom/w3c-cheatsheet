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

var hashHistory = [];

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
            var synonym = source[keyword].syn;
            if (!keywordsMatch[keyword]) {
                keywordsMatch[keyword] = {};
                keywords.push(keyword);
                if (synonym) {
                    keywordsMatch[synonym] = {}
                    keywords.push(synonym);
                }
            }
            if (!keywordsMatch[keyword][infoset]) {
                keywordsMatch[keyword][infoset] = {};
            }
            if (!keywordsMatch[keyword][infoset][propertytype]) {
                keywordsMatch[keyword][infoset][propertytype] = [];
            }
            if (synonym && !keywordsMatch[synonym][infoset]) {
                keywordsMatch[synonym][infoset] = {};
            }
            if (synonym && !keywordsMatch[synonym][infoset][propertytype]) {
                keywordsMatch[synonym][infoset][propertytype] = [];
            }

            for (var k in source[keyword]["d"]) {            
                keywordsMatch[keyword][infoset][propertytype].push(source[keyword]["d"][k]);
                if (synonym) {
                    keywordsMatch[synonym][infoset][propertytype].push(source[keyword]["d"][k]);
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
        var div = $("<div></div>");
        $("<code></code>").text(keyword).appendTo($("<h2></h2>").text(infosetname + " ").appendTo(div));
        var div2 = $("<div></div>").appendTo(div);
        for (var contextidx in keywordsMatch[keyword][infoset][propertytype]) {
            var context = keywordsMatch[keyword][infoset][propertytype][contextidx];
            var dl = $("<dl></dl>");
            for (var property in context) {
                var dt = $("<dt></dt>").appendTo(dl);
                var container = dt;
                if (context[property].u) {
                    var propurl = context[property].u;
                    if (propurl.substring(0, 1) === "/") {
                        propurl = "http://www.w3.org" + propurl;
                    }
                    container = $("<a></a>").attr("href", propurl).appendTo(dt);
                }
                container.text(dictionary[property]);
                if (context[property]["p"] && context[property]["p"].length > 0) {
                    var displayAsList = true;
                    if (context[property]["p"].length === 1 || context[property].l === "inline") {
                        displayAsList = false;
                    }
                    var listcontainer = $("<dd></dd>");
                    if (displayAsList) {
                        if (context[property].l === "block") {
                            listcontainer = $("<ul></ul>").appendTo(listcontainer);
                        }
                    }
                    for (var propcontentidx in context[property]["p"]) {
                        var hasLink = false;
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
                            itemcontainer = $("<a></a>").attr("href", url).appendTo(itemcontainer);
                            hasLink = true;
                        } else if (context[property].i && context[property].y) {
                            itemcontainer = $("<a class='internal'></a>").attr("href", "#inf," + escape(context[property].i) + "," + escape(context[property].y) + "," + escape(propcontent.t))
                                .appendTo(itemcontainer);
                            hasLink = true;
                        }
                        if (propcontent.t instanceof Array) {
                            if (!hasLink) {
                                for (var textOrSpanIdx in propcontent.t) {
                                    var textOrSpan = propcontent.t[textOrSpanIdx];
                                    if (textOrSpan.y && textOrSpan.i && textOrSpan.t) { // span
                                        $("<a class='internal'></a>").attr("href", "#inf," + escape(textOrSpan.i) + "," + escape(textOrSpan.y) + "," + escape(textOrSpan.t)).text(textOrSpan.t).appendTo(itemcontainer);
                                    } else {
                                        // JQuery seems to lack a method to append pure text; doing manual DOM operations
                                        var t = document.createTextNode(textOrSpan);
                                        itemcontainer.get(0).appendChild(t);
                                    }
                                }
                            } else {
                                itemcontainer.text(propcontent.t.join(""));
                            }
                        } else {
                            itemcontainer.text(propcontent.t);
                        }
                        if (!displayAsList && propcontentidx < context[property]["p"].length - 1) {
                            listcontainer.append(", ");
                        }
                    }
                    listcontainer.appendTo(dl);
                }
            }
            dl.appendTo(div2);
        }
        div.appendTo($("#details"));
        return true;    
    }

    function addBackLink() {
        if (hashHistory.length > 0) {
	    $("<a class='internal back' onclick='hashHistory.pop();return true;'></a>").attr("href",hashHistory[hashHistory.length - 1]).text("back").appendTo($("<p></p>")).appendTo($("#details"));
        }

    }

    function load_anchor(anchor) {
        if (anchor === null) {
            return false;
        }
        if (anchor.substring(0, 7) === "search,") {
            $("#search").val(anchor.substring(7));
            $("#search").get(0).autocompleter.findValue();
            return true;
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
        if (load_anchor($(this).attr("href").split("#")[1]) && !$(this).hasClass('back')) {
            hashHistory.push(window.location.hash);
            addBackLink();
        }
    }
    );


    $("#search").autocompleteArray(keywords, {onItemSelect: show_result, onFindValue: show_result, autoFill: false, selectFirst: true, delay: 40, maxItemsToShow: 10, matchContains: true, matchSubset: true});
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
        if (window.location.hash.substring(0, 5) === '#inf,' || window.location.hash.substring(0, 8) === '#search,') {
            load_anchor(window.location.hash.substring(1));
        }
    }
});
