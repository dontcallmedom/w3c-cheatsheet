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
        "CSS": [{"list": [], "details": sources["css"]["property"], "name": "CSS Property"},
               {"list": [], "details": sources["css"]["selector"], "name": "CSS Selector"},
               {"list": [], "details": sources["css"]["at-rule"], "name": "CSS At-rules"}], 
        "HTML": [
            {"list": [], "details": sources["html"]["element"], "name": "HTML Element"},
            {"list": [], "details": sources["html"]["attribute"], "name": "HTML attribute"}
        ],
        "SVG": [{"list": [], "details": sources["svg"]["attribute"], "name": "SVG attribute"},  
                {"list": [], "details": sources["svg"]["element"], "name": "SVG Element"}],
        "XPath": [{"list": [], "details": sources["xpath"]["function"], "name": "XPath functions"}]
};

var keywordsMatch = {};
var keywords = [];
for (var topic in keywordSources) {
    for (var i in keywordSources[topic]) {
        var source = keywordSources[topic][i];
        for (var keyword in source["details"]) {
            source["list"].push(keyword);
            if (!keywordsMatch[keyword]) {
                keywordsMatch[keyword] = {};
            }
            if (!keywordsMatch[keyword][source["name"]]) {
                keywordsMatch[keyword][source["name"]] = [];
            }
            for (var k in source["details"][keyword]) {		
                keywordsMatch[keyword][source["name"]].push(source["details"][keyword][k]);
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

    keywords = [];

    for (var topic in keywordSources) {
        for (var i  in keywordSources[topic]) {
            keywords = keywords.concat(keywordSources[topic][i]["list"]);
        }
    }
    keywords = make_unique(keywords);
    //$("#search").setOptions({"data":keywords});

    function show_result(item) {
        if (item === null) {
            return;
        }
        var keyword = item.selectValue;
        var details = keywordsMatch[keyword];
        clearLookUp();
        var detailsLength = 0;
        for (var infosetname in details) {
            if (details.hasOwnProperty(infosetname)) {
                detailsLength = detailsLength + 1;
                var div = $("<div></div>").appendTo($("#details"));
                div.append("<h2>" + infosetname + " <code>" + keyword + "</code></h2><div></div>");
                var div2 = $("div", div);
                for (var contextidx in details[infosetname]) {
                    var context = details[infosetname][contextidx];
                    var dl = $("<dl></dl>").appendTo(div2);
                    for (var property in context) {
                        var dt = $("<dt></dt>").appendTo(dl);
                        var container = dt;
                        if (context[property].url) {
                            container = $("<a href='" + context[property].url + "'></a>").appendTo(dt);
                        }
                        container.text(property);
                        if (context[property]["properties"] && context[property]["properties"].length > 0) {
                            var displayAsList = true;
                            if (context[property]["properties"].length === 1 || context[property].list === "inline") {
                                displayAsList = false;
                            }
                            var dd = $("<dd></dd>").appendTo(dl);
                            var listcontainer = dd;
                            if (displayAsList) {
                                if (context[property].list === "block") {
                                    listcontainer = $("<ul></ul>").appendTo(listcontainer);
                                }
                            }
                            for (var propcontentidx in context[property]["properties"]) {
                                var itemcontainer = listcontainer;
                                var propcontent = context[property]["properties"][propcontentidx];
                                if (displayAsList) {
                                    itemcontainer = $("<li></li>").appendTo(itemcontainer);
                                } else {
                                    itemcontainer = $("<span></span>").appendTo(itemcontainer);
                                }
                                if (propcontent.url) {
                                    itemcontainer = $("<a href='" + propcontent.url + "'></a>").appendTo(itemcontainer);
                                }
                                itemcontainer.text(propcontent.title);
                                if (!displayAsList && propcontentidx < context[property]["properties"].length - 1) {
                                    itemcontainer.text(itemcontainer.text() + ", ");
                                }
                            }
                        }
                    }
                }
            }
        }
        if (detailsLength === 1) {
            $("#details").accordion({header: 'div>h2', autoHeight: false});
        } else {
            $("#details").accordion({header: 'div>h2', autoHeight: false, active: false});
        }
        makeReplacingAccordion($("#details"));
    }
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
});
