 /* Removes redundant elements from the array */
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
	"CSS":[{"list":cssProperties,"details":cssPropertiesDetails,"name":"CSS Property"}], 
	"HTML":[
	{"list":htmlElements,"details":htmlElementsDetails,"name":"HTML Element"},
	{"list":htmlAttributes,"details":htmlAttributesDetails,"name":"HTML attribute"}],
	"SVG":[{"list":svgAttributes,"details":svgAttributesDetails,"name":"SVG attribute"},	
	{"list":svgElements,"details":svgElementsDetails,"name":"SVG Element"}],
	"XPath":[{"list":xpathFunctions,"details":xpathFunctionsDetails,"name":"XPath functions"}]
};
keywordsMatch = Array();
keywords = Array();
for (var topic in keywordSources) {
for (var i in keywordSources[topic]) {
  source = keywordSources[topic][i];
  for (var j in source["list"]) {
	var keyword = source["list"][j];
	if (!keywordsMatch[keyword]) {
	   keywordsMatch[keyword]={};
	}
	if (!keywordsMatch[keyword][source["name"]]) {
	   keywordsMatch[keyword][source["name"]] = Array();
	}
	for (var k in source["details"][keyword]) {
 	  keywordsMatch[keyword][source["name"]].push(source["details"][keyword][k]);
	}
  }
}
}
jQuery(document).ready(function($) {
  // Tabs
  $('#content').tabs();
  $(".accordion").accordion({active:false,navigation: true,autoHeight:false,collapsible:true});

  $("#search").autocomplete(keywords);
  $("input.source").change(function() {
	keywords = [];
	$("input.source:checked").each(function() {
	  for (var i in keywordSources[$(this).val()]) {
	    keywords = keywords.concat(keywordSources[$(this).val()][i]["list"]);
	  }
	});
	keywords = make_unique(keywords);
	$("#search").setOptions({"data":keywords});
  }).change();
  $("#search").result(function(e,d,f) {	
	var details = keywordsMatch[d];
	$("#details").html("");
	for (var i in details) {
	  $("#details").append("<h2>" + i + " <code>" + d + "</code></h2>");
  	  for (var j in details[i]) {
	   $("#details").append("<dl></dl>");

	   for (var k in details[i][j]) {
	    if (k!="source") {
	     var dt = $("<dt></dt>").appendTo($("#details dl:last"));
	     dt.text(k);
	     var dd = $("<dd></dd>").appendTo($("#details dl:last"));
             dd.text(details[i][j][k]);
            } else {
	     $("#details dl:last").append("<dt><a href='" + details[i][j][k] + "'>source</a></dt>");
	    }
	   }
	  }
        }
  });

});