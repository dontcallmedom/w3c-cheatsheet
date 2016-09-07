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
                "vs": "CSS Values",
                "u": "CSS Unit",
            "ar": "CSS At-rules"},
        "html": {"e": "HTML Element",
             "a": "HTML Attribute"},
        "svg": {"a": "SVG Attribute",
            "p": "SVG Property",
            "e": "SVG Element"},
        "xpath": {"f": "XPath function"},
        "js": {"it": "JavaScript Interface", "a": "JavaScript Interface attribute", "f": "JavaScript Interface operation"}
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
    accordion.accordion('option', 'autoHeight', false);
    // allows all lines to be closed (by clicking on the open line)
    accordion.accordion('option', 'collapsible', true);
};


// sets the changed/new/obsolete marker to a given element based
Cheatsheet.prototype.addChangeMarker = function (element, marker, mode) {
    if (marker){
        element.append(" ");
        var span = $("<span></span>").addClass("attribute").addClass(marker);
        var fullDesc =  marker + " in HTML5";
        if (mode === "full") {
            span.text(fullDesc);
        } else if (mode === "medium") {
            span.text(marker + " in HTML5");
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
    var baseUrl = "http://www.w3.org";


    // Make sure we actually have data
    if (keyword_data === null) {
        return false;
    }


    function internalLink(infoset, type, keyword) {
	return "#inf," + escape(infoset) + "," + escape(type) + "," + escape(keyword);
    }

    var keywords = [];
    // for each matching keyword
    for (var keyword in keyword_data) {
	var keywordData = {contexts:[]};
        // e.g "HTML element"
	keywordData.infoset = this.keywordSources[infoset][propertytype];
	keywordData.keyword = keyword;
        // For each known context of the item
        // (examples of context: the width attribute in HTML
        // varies in model/description depending on the containing element
        for (var contextidx in keyword_data[keyword]) { 
            var context = keyword_data[keyword][contextidx];	    
	    var contextData = {properties:[]};
            if (keyword_data[keyword].length > 1 && context.ct && context.ct.y) {
		var title = {};
                if (context.ct.y === "a") {
                    title.infoset = "With attribute ";
                } else if (context.ct.y === "e") {
                    title.infoset = "In element ";
                } else if (context.ct.y === "it") {
                    title.infoset = "On interface ";
                }
		title.kw = [];
                for (var contextitem = 0; contextitem < context.ct.d.length; contextitem++) {
		    var kw = {name:context.ct.d[contextitem]};
		    if (contextitem === context.ct.d.length -1) {
			kw.last = true;
		    }
		    title.kw.push(kw);
                }
                if (context.h) {
		    title.marker = context.h.p[0].t;
                }
		contextData.title = title;
            } else {
                if (context.h) {
		    keywordData.marker = context.h.p[0].t;
                }
            }
            for (var property in context) {
		var propertyData = {};
		propertyData.values = [];

		var property_container = context[property];
                if (property !== "ct") {
                    var property_values = property_container["p"];
                    if (property_container.u) { // u for URI
                        var propurl = property_container.u;
                        // On domain-less URIs, we assume www.w3.org as the base
                        if (propurl.substring(0, 1) === "/") {
                            propurl = baseUrl + propurl;
                        }
			propertyData.link = propurl;
                    }
		    propertyData.name = dictionary[property];
                    if (property_values && property_values.length > 0) {
			propertyData.inlineDisplay = property_values.length === 1 || property_container.l === "inline";

                        for (var propcontentidx in property_values) {
			    var value = {};
                            var propcontent = property_values[propcontentidx];			    
			    var hasLink = false;
			    var subvalue = {};
                            if (propcontent.u) {
				hasLink = true;
                                var url = propcontent.u;
                                if (url.substring(0, 1) === "/") {
                                    url = baseUrl + url;
                                }
				subvalue.link = url;
				subvalue.name = propcontent.t;
				value.subvalues = [subvalue];
                            } else if (property_container.i && property_container.y) {
				hasLink = true;
				subvalue.internal = true;
				subvalue.link = internalLink(property_container.i, property_container.y, propcontent.t);
				subvalue.name = propcontent.t;
				if (propcontent.h) {
				    subvalue.marker = propcontent.h;
				}
				value.subvalues = [subvalue];
                            }
                            if (propcontent.t instanceof Array) { // t for text
                                if (!hasLink) {
				    value.subvalues = [];
                                    for (var textOrSpanIdx in propcontent.t) {
					var subvalue = {};
                                        var textOrSpan = propcontent.t[textOrSpanIdx];
                                        if (textOrSpan.y && textOrSpan.i && textOrSpan.t) { // span
                                            subvalue.internal = true;
					    subvalue.link = internalLink(textOrSpan.i, textOrSpan.y, textOrSpan.t);
					    subvalue.name = textOrSpan.t;
					    if (textOrSpan.h) {
						subvalue.marker = textOrSpan.h;
					    }
                                        } else {
					    subvalue.name = textOrSpan;
                                        }
					value.subvalues.push(subvalue);
                                    }
                                } else {
				    value.subvalues.push({name:propcontent.t.join("")});
                                }
                            } else if (property === "h") {
				subvalue = {};
				subvalue.name = propcontent.t + " in HTML5";
				subvalue["class"] = propcontent.t;
				value.subvalues = [subvalue];
                            } else if (!hasLink) {
				value.subvalues = [{name:propcontent.t}];
                            }
			    propertyData.values.push(value);
                        }			
                    }


                }
		contextData.properties.push(propertyData);

            }
	    keywordData.contexts.push(contextData);
        }
	keywords.push(keywordData);
    }
    var data = {keywords:keywords};
    var view = $('#details-template').text();
    $("#details").append(Mustache.render(view,data));
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
            this.show_keyword(keyword_data[i][p], i, p);
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
    var keyword_match = keywordsMatch[keyword];
    if (inMemory && keyword_match && (!infoset || (keyword_match[infoset] && keyword_match[infoset][propertytype]))) {
        this.display_keyword_data(keyword_match, infoset, propertytype);
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
    var details = $("#details");
    if (details.data("accordion") && details.data("accordion").element) {
        details.accordion("destroy");
    }
    details.empty();
};

/*
 * Loads the view bound to a search anchor
 */
Cheatsheet.prototype.load_anchor = function (anchor) {
    var search = $("#search");
    if (anchor === null) {
        return false;
    }
    if (/^search,/.test(anchor) ) {
        search.val(unescape(anchor.substring(7)));
        search.get(0).autocompleter.findValue();
        return true;
    }
    // Search anchors look like "#inf,html,e,area"
    // (e standing for element in this case)
    var selector_path = anchor.split(',');
    var infoset = unescape(selector_path[1]);
    var propertytype = unescape(selector_path[2]);
    var keyword = unescape(selector_path.slice(3).join(","));
    if (keyword && infoset && propertytype && this.keywordSources[infoset] && this.keywordSources[infoset][propertytype] && keywordsMatch[keyword] && keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]) {
        this.clearLookUp();
        $(".ac_results").hide();
        search.val("");
        this.load_keyword_data(keyword, infoset, propertytype);
        return true;
    }
    return false;
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
        window.location.hash = ui.tab.hash;
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
        window.location.hash = "#search," + escape(keyword);
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
	// @@@ this is probably unsafe if the list of keywords is not
	// strictly controlled
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
    var search = $("#search");
    search.change(function () {
        var clear_button = $("#details_clear");
        sheet.clearLookUp();
        if (search.val()) {
            if (clear_button.length === 0) {
		$("<a href='#' class='ui-icon-close' id='details_clear' title='Clear search'>x</a>").insertAfter(search).click(function () {
                    sheet.clearLookUp();
                    search.val("").change();
                    return false;
                });
            }
        } else {
            clear_button.remove();
        }
    });

    // if an anchor is set, loads the relevant view
    if (hash) {
        if (/^#inf,/.test(hash) || /^#search,/.test(hash) ) {
            sheet.load_anchor(hash.substring(1));
        }
    }
});
