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

function display_keyword_data(keyword_data, infoset, propertytype) {
    if (infoset && propertytype) {
      var restricted_keyword_data = {};
      restricted_keyword_data[infoset] = {};
      restricted_keyword_data[infoset][propertytype] = keyword_data[infoset][propertytype];
      keyword_data = restricted_keyword_data;
    }
    var multiple = -1;
    for (var i in keyword_data) {
      for (var p in keyword_data[i]) {
	show_keyword(keyword_data, i, p);
	multiple = multiple + 1;
      }
    }
    if (multiple < 1) {
      $("#details").accordion({header: 'div>h2', autoHeight: false});
    } else {
      $("#details").accordion({header: 'div>h2', autoHeight: false, active: false});
    }

    makeReplacingAccordion($("#details"));
}

function load_keyword_data(keyword, infoset, propertytype) {
  if (keywordsMatch[keyword] && (!infoset || (keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]))) {
    display_keyword_data(keywordsMatch[keyword], infoset, propertytype);
  } else {
    $.getJSON("data/json/" + escape(keyword).toLowerCase() + ".js", function(keyword_data) { display_keyword_data(keyword_data,infoset, propertytype); });
  }
}

function show_keyword(keyword_data, infoset, propertytype) {
  if (keyword_data[infoset][propertytype] === null) {
    return false;
  }
  for (var keyword in keyword_data[infoset][propertytype]) {
	var infosetname = keywordSources[infoset][propertytype];
        var div = $("<div></div>").addClass("context");
        $("<code></code>").text(keyword).appendTo($("<h2></h2>").text(infosetname + " ").appendTo(div));
              var div2 = $("<div></div>").appendTo(div);
        for (var contextidx in keyword_data[infoset][propertytype][keyword]["d"]) {
            var context = keyword_data[infoset][propertytype][keyword]["d"][contextidx];
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
    }
  return true;
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
            if (load_keyword_data(keyword, infoset, propertytype)) {
                return true;
            }
        }
        return false;
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

function setCookie(c_name, value, expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie=c_name+ "=" + escape(value) +
	((expiredays === null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(c_name) {
    if (document.cookie.length>0) {
	c_start = document.cookie.indexOf(c_name + "=");
	if (c_start!==-1) {
	    c_start = c_start + c_name.length + 1;
	    c_end = document.cookie.indexOf(";", c_start);
	    if (c_end === -1) c_end = document.cookie.length;
	    return unescape(document.cookie.substring(c_start, c_end));
	}
    }
    return "";
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
    $("body").css("display","block");
    //$("#search").setOptions({"data":keywords});
    if (getCookie("alreadyLaunched") === "" && startWithDonate) {
	show_about();
	setCookie("alreadyLaunched","true",2000);
    }

    $("#openabout").click(show_about);

    function hide_about() {
	$("#about").css("display","none");
	return false;
    }

    function show_about() {
	if ($("#about").css("display") === "block") {
	    hide_about();
	} else {
	    $("#about").css("display", "block");
	    $("#closeabout").click(hide_about);
	    $("#closeabout2").click(hide_about);
	}
	return false;
    }


    function addBackLink() {
        if (hashHistory.length > 0) {
	    $("<a class='internal back' onclick='hashHistory.pop();return true;'></a>").attr("href",hashHistory[hashHistory.length - 1]).text("back").appendTo($("<p></p>")).appendTo($("#details"));
        }

    }




    function show_result(item) {
        if (item === null) {
            return;
        }
        var keyword = item.selectValue;
        window.location.hash = "#search," + escape(keyword);
        clearLookUp();
        load_keyword_data(keyword);
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
                $("#search").after("<a href='#' class='ui-icon-close' id='details_clear' title='Clear search'>x</a>");
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
