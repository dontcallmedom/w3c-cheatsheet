var watchId;
/* Removes redundant elements from an array */
make_unique = function(b)
 {
     var a=[],i;
     b.sort();
     for(i=0;i<b.length;i++)
     {
         if(b[i]!==b[i+1])
         {
             a[a.length]=b[i];
         }
     }
     return a;
 }

keywordSources = {
	"CSS":[{"list":[],"details":sources["css"]["property"],"name":"CSS Property"},
	       {"list":[],"details":sources["css"]["selector"],"name":"CSS Selector"},
	       {"list":[],"details":sources["css"]["at-rule"],"name":"CSS At-rules"}], 
	"HTML":[
	{"list":[],"details":sources["html"]["element"],"name":"HTML Element"},
	{"list":[],"details":sources["html"]["attribute"],"name":"HTML attribute"}],
	"SVG":[{"list":[],"details":sources["svg"]["attribute"],"name":"SVG attribute"},	
	{"list":[],"details":sources["svg"]["element"],"name":"SVG Element"}],
	"XPath":[{"list":[],"details":sources["xpath"]["function"],"name":"XPath functions"}]
};
keywordsMatch = {};
keywords = [];
for (var topic in keywordSources) {
for (var i in keywordSources[topic]) {
  source = keywordSources[topic][i];
  for (var keyword in source["details"]) {
	source["list"].push(keyword);
	if (!keywordsMatch[keyword]) {
	   keywordsMatch[keyword]={};
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
  accordion.css("position","relative");
  accordion.accordion('option','navigation', true);
  accordion.accordion('option','autoHeight','false');
  accordion.accordion('option','collapsible',true);
/*
  accordion.accordion('option','animated',false);
  accordion.bind('accordionchangestart', function() {
if ($(".ui-state-active",accordion).length) {
   $(".ui-state-default",accordion).parent().css("z-index","-1");
   $(".ui-state-default",accordion).parent().css("position","relative");
   $(".ui-state-active",accordion).parent().css("z-index",1);
   $(".ui-state-active",accordion).parent().css("position","absolute");
   $(".ui-state-active",accordion).parent().animate({top:0})
 } else {
   $(".ui-state-default",accordion).parent().css("z-index","0")
   $(".ui-state-default",accordion).parent().css("position","relative");
   $(".ui-state-default",accordion).parent().animate({top:"auto"})
 }
});*/
}

function clearLookUp() {
    if ($("#details").accordion) {
	$("#details").accordion("destroy");
    }
    $("#details").html("");    
}

jQuery(document).ready(function($) {
  // Tabs
  //$('#content').css("overflow","hidden");
  //$('#content').css("height","480px");
  $('#content').tabs();
  $('#content').tabs('paging' );
  $('#content').bind("tabsshow", function(event, ui) { 
    window.location.hash = ui.tab.hash;
  })

  $(".accordion").accordion({header:'div >h3',active:false,autoHeight:false});
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
	if (item==null) {
	  return;
	}
	var d = item.selectValue;
	var details = keywordsMatch[d];
	clearLookUp();
	var detailsLength = 0;
	for (var i in details) {
	    if (details.hasOwnProperty(i)) {
		detailsLength++;
		div = $("<div></div>").appendTo($("#details"));
		div.append("<h2>" + i + " <code>" + d + "</code></h2><div></div>");
		div2 = $("div",div);
		for (var j in details[i]) {
		    var dl = $("<dl></dl>").appendTo(div2);

		    for (var k in details[i][j]) {
			if (k!="source") {
			    var dt = $("<dt></dt>").appendTo(dl);
			    var container = dt;
			    if (k=="Accessibility techniques") {
				var a = $("<a href='http://www.w3.org/WAI/intro/wcag'></a>").appendTo(dt);
				container = a;
			    }
			    container.text(k);
			    var dd = $("<dd></dd>").appendTo(dl);
			    if (details[i][j][k] instanceof Array) {
				var ul = $("<ul></ul>").appendTo(dd);
				for (l in details[i][j][k]) {
				    link = details[i][j][k][l]
					var li = $("<li></li>").appendTo(ul);
				    var a = $("<a></a>").appendTo(li);
				    a.attr("href",link.link);
				    a.text(link.title);
				}
			    } else {
				dd.text(details[i][j][k]);
			    }
			} else {
			    dl.append("<dt><a href='" + details[i][j][k] + "'>source</a></dt>");
			}
		    }
		}
	    }
        }
	if (detailsLength==1) {
		$("#details").accordion({header:'div>h2',autoHeight:false});
	} else {
		$("#details").accordion({header:'div>h2',autoHeight:false,active:false});
	}
	makeReplacingAccordion($("#details"));
  }
  $("#search").autocompleteArray(keywords,{onItemSelect:show_result,onFindValue:show_result,autoFill:false,selectFirst:true,delay:40,maxItemsToShow:10});
  $("#search").change(function() {
	  clearLookUp();
	  if ($("#search").val()) {
	      if (!$("#details_clear").length) {
		  $("#search").after("<a href='#' class='ui-icon ui-icon-close' id='details_clear'></a>");
		  $("#details_clear").click(function() {
			  clearLookUp();
			  $("#search").val("").change();
		      });
	      }
	  } else {
	      $("#details_clear").replaceWith("");
	  }
      });

});
