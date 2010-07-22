// encapsulates a semi-random set of functions that used to be in global scope
// @@@ needs cleaning up
var Cheatsheet = function () {
    /* to keep track of views the user click through
     * e.g. when clicking on "href" attribute in element "a"
     */
    this.hashHistory = [];

    /* Putting names on the various items we know about
     * Could/should probably come from data directly
     */
    this.keywordSources = {
        "css": {"p": "CSS Property",
            "se": "CSS Selector",
            "ar": "CSS At-rules"},
        "html": {"e": "HTML Element",
             "a": "HTML Attribute"},
        "svg": {"a": "SVG Attribute",
            "p": "SVG Property",
            "e": "SVG Element"},
        "xpath": {"f": "XPath function"}
    };
};

/*
 * Makes a JQuery accordeon with the properties we want
 */
Cheatsheet.prototype.makeReplacingAccordion = function (accordion) {
    accordion.css("position", "relative");
    // update the hash when hitting an element with an id
    accordion.accordion('option', 'navigation', true);
    // take as much/as little vertical space as needed
    accordion.accordion('option', 'autoHeight', 'false');
    // allows all lines to be closed (by clicking on the open line)
    accordion.accordion('option', 'collapsible', true);
};


// sets the changed/new/obsolete marker to a given element based
Cheatsheet.prototype.addChangeMarker = function (element, marker, mode) {
    if (marker){
        element.append(" ");
        var span = $("<span></span>").addClass("attribute").addClass(marker);
        var fullDesc = "proposed as " + marker + " in HTML5 (not yet a standard)";
        if (mode === "full") {
            span.text(fullDesc);
        } else if (mode === "medium") {
            span.text(marker + " in draft of HTML5");
            span.attr("title",fullDesc);
        } else {
            span.text(marker);
            span.attr("title",fullDesc);
        }
        span.appendTo(element);
    }
};

/*
 * Takes the collected data and displays them in an accordion view
 */
Cheatsheet.prototype.show_keyword = function (keyword_data, infoset, propertytype) {
    var self = this,
        baseUrl = "http://www.w3.org";


    // Make sure we actually have data
    if (keyword_data[infoset][propertytype] === null) {
        return false;
    }


    function addInternalLink(infoset, type, keyword, marker) {
        var link = $("<a class='internal'></a>").attr("href", "#inf," + escape(infoset) + "," + escape(type) + "," + escape(keyword));
        link.text(keyword);
        if (marker) {
            self.addChangeMarker(link, marker, "short");
        }
        return link;
    }

    // for each matching keyword
    for (var keyword in keyword_data[infoset][propertytype]) {
        // e.g "HTML element"
        var infosetname = this.keywordSources[infoset][propertytype];
        var div = $("<div></div>").addClass("context");
        // e.g. <h2>HTML element <code>a</code></h2>
        var keywordtitle = $("<h2></h2>").text(infosetname + " ");
        $("<code></code>").text(keyword).appendTo(keywordtitle);
        keywordtitle.appendTo(div);
        var div2 = $("<div></div>").appendTo(div);
        // For each known context of the item
        // (examples of context: the width attribute in HTML
        // varies in model/description depending on the containing element
        for (var contextidx in keyword_data[infoset][propertytype][keyword]["d"]) { // I think the ["d"] part can be get ridden of, provided xmltojson.xsl is updated
            var context = keyword_data[infoset][propertytype][keyword]["d"][contextidx];
            var contextdiv = $("<div></div>");
            if (keyword_data[infoset][propertytype][keyword]["d"].length > 1 && context.ct && context.ct.y) {
                var contexttitle = $("<h3></h3>");
                if (context.ct.y === "a") {
                    contexttitle.text("With attribute ");
                } else if (context.ct.y === "e") {
                    contexttitle.text("In element ");
                }
                for (var contextitem in context.ct.d) {
                    $("<code></code>").text(context.ct.d[contextitem]).appendTo(contexttitle);
                    if (contextitem < context.ct.d.length - 1) {
                        contexttitle.append(", ");
                    }
                }
                if (context.h) {
                    self.addChangeMarker(contexttitle, context.h.p[0].t, "medium");
                }
                contexttitle.appendTo(contextdiv);
            } else {
                if (context.h) {
                    self.addChangeMarker(keywordtitle, context.h.p[0].t, "medium");
                }
            }
            var dl = $("<dl></dl>");
            for (var property in context) {
		var property_container = context[property];
                if (property !== "ct") {
                    var dt = $("<dt></dt>").appendTo(dl),
                        container = dt,
			property_data = property_container["p"];
                    if (property_container.u) { // u for URI
                        var propurl = property_container.u;
                        // On domain-less URIs, we assume www.w3.org as the base
                        if (propurl.substring(0, 1) === "/") {
                            propurl = baseUrl + propurl;
                        }
                        container = $("<a></a>").attr("href", propurl).appendTo(dt);
                    }
                    container.text(dictionary[property]);
                    // p for properties (i.e. all the detailed data about the item)
                    if (property_data && property_data.length > 0) {
                        var displayAsList = true;
                        if (property_data.length === 1 || property_container.l === "inline") { // l for list, i.e. list mode
                            displayAsList = false;
                        }
                        var listcontainer = $("<dd></dd>");
                        if (displayAsList) {
                            if (property_container.l === "block") {
                                listcontainer = $("<ul></ul>").appendTo(listcontainer);
                            }
                        }
                        for (var propcontentidx in property_data) {
                            var hasLink = false,
                                itemcontainer = listcontainer,
                                propcontent = property_data[propcontentidx];
                            if (displayAsList) {
                                itemcontainer = $("<li></li>").appendTo(itemcontainer);
                            } else {
                                itemcontainer = $("<span></span>").appendTo(itemcontainer);
                            }
                            if (propcontent.u) {
                                var url = propcontent.u;
                                if (url.substring(0, 1) === "/") {
                                    url = baseUrl + url;
                                }
                                itemcontainer = $("<a></a>").attr("href", url).appendTo(itemcontainer);
                                itemcontainer.text(propcontent.t);
                                hasLink = true;
                            } else if (property_container.i && property_container.y) {
                                var internalProperty = addInternalLink(property_container.i, property_container.y, propcontent.t, propcontent.h);
                                itemcontainer = internalProperty.appendTo(itemcontainer);
                                hasLink = true;
                            }
                            if (propcontent.t instanceof Array) { // t for text
                                if (!hasLink) {
                                    for (var textOrSpanIdx in propcontent.t) {
                                        var textOrSpan = propcontent.t[textOrSpanIdx];
                                        if (textOrSpan.y && textOrSpan.i && textOrSpan.t) { // span
                                            var internalLink = addInternalLink(textOrSpan.i, textOrSpan.y, textOrSpan.t, textOrSpan.h);
                                            internalLink.appendTo(itemcontainer);
                                        } else {
                                            // JQuery seems to lack a method to append pure text; doing manual DOM operations
                                            var t = document.createTextNode(textOrSpan);
                                            itemcontainer.get(0).appendChild(t);
                                        }
                                    }
                                } else {
                                    itemcontainer.text(propcontent.t.join(""));
                                }
                            } else if (property === "h") {
                                // special casing HTML5
                                // @@@ probably need to be generalized for others techs
                                self.addChangeMarker(itemcontainer, propcontent.t, "full");

                            } else if (!hasLink) {
                                itemcontainer.text(propcontent.t);
                            }
                            if (!displayAsList && propcontentidx < property_data.length - 1) { //white space between dd span list
                                listcontainer.append(" ");
                            }
                        }
                        listcontainer.appendTo(dl);
                    }
                }
            }
            dl.appendTo(contextdiv);
            contextdiv.appendTo(div2);
        }
        div.appendTo($("#details"));
    }
};

/*
 * wraps up the per keyword html and puts it into a proper accordion
 */
Cheatsheet.prototype.display_keyword_data = function (keyword_data, infoset, propertytype) {
    if (infoset && propertytype) {
        var restricted_keyword_data = {};
        restricted_keyword_data[infoset] = {};
        restricted_keyword_data[infoset][propertytype] = keyword_data[infoset][propertytype];
        keyword_data = restricted_keyword_data;
    }
    var multiple = -1;
    for (var i in keyword_data) {
        for (var p in keyword_data[i]) {
            this.show_keyword(keyword_data, i, p);
            multiple = multiple + 1;
        }
    }
    if (multiple < 1) {
        $("#details").accordion({header: 'div>h2', autoHeight: false});
    } else {
        $("#details").accordion({header: 'div>h2', autoHeight: false, active: false});
    }
    this.makeReplacingAccordion($("#details"));
};

/*
 * Gets the data from memory if available, or through JSON calls otherwise
 * and get it displayed
 */
Cheatsheet.prototype.load_keyword_data = function (keyword, infoset, propertytype) {
    if (inMemory && keywordsMatch[keyword] && (!infoset || (keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]))) {
        this.display_keyword_data(keywordsMatch[keyword], infoset, propertytype);
    } else {
        var cheatsheet = this;
        $.getJSON("data/json/" + escape(keyword.replace(/ /g,"%20")).toLowerCase() + ".js", function (keyword_data) {
            cheatsheet.display_keyword_data(keyword_data, infoset, propertytype);
        });
    }
};

/*
 * Clear the search box and search results
 */
Cheatsheet.prototype.clearLookUp = function () {
    if ($("#details").accordion) {
        $("#details").accordion("destroy");
    }
    $("#details").html("");
};

/*
 * Loads the view bound to a search anchor
 */
Cheatsheet.prototype.load_anchor = function (anchor) {
    if (anchor === null) {
        return false;
    }
    if (anchor.substring(0, 7) === "search,") {
        $("#search").val(anchor.substring(7));
        $("#search").get(0).autocompleter.findValue();
        return true;
    }
    // Search anchors look like "#search,inf,html,e,area"
    // (e standing for element in this case)
    var selector_path = anchor.split(',');
    var infoset = unescape(selector_path[1]);
    var propertytype = unescape(selector_path[2]);
    var keyword = unescape(selector_path.slice(3).join(","));
    if (keyword && infoset && propertytype && this.keywordSources[infoset] && this.keywordSources[infoset][propertytype] && keywordsMatch[keyword] && keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]) {
        this.clearLookUp();
        $(".ac_results").hide();
        $("#search").val("");
        if (this.load_keyword_data(keyword, infoset, propertytype)) {
            return true;
        }
    }
    return false;
};

/*
 * Simple wrapper for setting cookies
 */
Cheatsheet.prototype.setCookie = function (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString());
};

/*
 * Simple wrapper for reading cookies
 */
Cheatsheet.prototype.getCookie = function (c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};


var cheatsheet = new Cheatsheet();

/*
 * This defines what happens when the page has finished loading
 */
jQuery(document).ready(function ($) {
    // We create the tabs
    var sheet = cheatsheet, content = $('#content'), hash = window.location.hash;
    content.tabs();
    content.tabs('paging', {'nextButton':'', 'prevButton':''});
    content.bind("tabsselect", function () {
        $(".ac_results").hide();
    });
    content.bind("tabsshow", function (event, ui) {
        hash = ui.tab.hash;
    });

    // The elements with class 'accordion' are turned into an accordion
    $(".accordion").accordion({header: 'div >h3', active: false, autoHeight: false});
    sheet.makeReplacingAccordion($(".accordion"));

    $("body").css("display", "block");

    // When/if we support external keywords sources
    // this is where to load them up
    // $("#search").setOptions({"data":keywords});


    // show/hide the "about" screen
    function toggle_about() {
        var about = $("#about");
        if (about.css("display") === "block") {
            // when already opened, we hide it
            about.css("display", "none");
        } else {
            about.css("display", "block");
        }
        return false;
    }

    $("#openabout, #closeabout, #closeabout2").click(toggle_about);

    // Add a back link when navigating through keyword views
    function addBackLink() {
        if (sheet.hashHistory.length > 0) {
            $("<a class='internal back' onclick='cheatsheet.hashHistory.pop();return true;'></a>")
                .attr("href", sheet.hashHistory[sheet.hashHistory.length - 1])
                .text("back")
                .appendTo($("<p></p>"))
                .appendTo($("#details"));
        }

    }

    // Function called when an item is seleted in search box/autocompletion list
    function show_result(item) {
        if (item === null) {
            return;
        }
        var keyword = item.selectValue;
        hash = "#search," + escape(keyword);
        sheet.clearLookUp();
        sheet.load_keyword_data(keyword);
    }

    // We keep track of internal links for managing back link
    $("a.internal").live("click",
        function ()  {
        sheet.load_anchor($(this).attr("href").split("#")[1]);
        if (!$(this).hasClass('back')) {
            sheet.hashHistory.push(window.location.hash);
        }
        addBackLink();
    }
    );

    function formatItem(row, i, num, q) {
        var line = row[0],
            highlightIdx = line.toLowerCase().indexOf(q),
            tag = keywordsTags[row[0]];
        line = line.substring(0, highlightIdx) + "<strong>" + line.substring(highlightIdx, highlightIdx + q.length) + "</strong>" + line.substring(highlightIdx + q.length);
        if (tag) {
            var jLine = $("<span></span>").html(line);
            sheet.addChangeMarker(jLine, tag, "medium");
            line = jLine.html();
        }
        return line;
    }

    // Completing the search box with autocompletion
    $("#search").autocompleteArray(keywords,
        {onItemSelect: show_result, // what to do when finding a match
         onFindValue: show_result,
         autoFill: false, // don't try to auto-fill the box as this fails on mobile with virtual keyboard
         selectFirst: true, // pre-select first item
         delay: 40,
         maxItemsToShow: 10,
         matchContains: true,
         matchSubset: true, // also matches when matching only a substring
         formatItem: formatItem
         }
    );

    // When a search term is entered/selected
    // add a "clear" button
    var search = $("#search"),
        clear_button = $("#details_clear");
    search.change(function () {
        sheet.clearLookUp();

        if (search.val()) {
            if (!clear_button.length) {
                search.after("<a href='#' class='ui-icon-close' id='details_clear' title='Clear search'>x</a>");
                clear_button.click(function () {
                    sheet.clearLookUp();
                    search.val("").change();
                });
            }
        } else {
            clear_button.replaceWith("");
        }
    });

    // if an anchor is set, loads the relevant view
    if (hash) {
        if (hash.substring(0, 5) === '#inf,' || hash.substring(0, 8) === '#search,') {
            sheet.load_anchor(hash.substring(1));
        }
    }
});
