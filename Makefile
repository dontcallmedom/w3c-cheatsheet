all: js/all.js style/all.css

JAVA=/usr/bin/java
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar
SAXON=~/bin/saxon
WWW_ROOT=/home/dom/WWW/2009/cheatsheet

js/all.js: data/all.js js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

js/all-split.js: data/all-split.js js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

js/all-free.js: data/all-split.js  js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/free.js js/start.js
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@


style/all.css: style/style.css
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type css > $@


# get the compact RelaxNG html5 schemas from http://syntax.whattf.org/relaxng/
# and turned into them .rng in data/html5schemas
data/html5schemas/xhtml5.rnc:
	wget --no-parent --recursive --level=1 --timestamping --no-directories --directory-prefix=data/html5schemas/ http://syntax.whattf.org/relaxng/ -A "*.rnc" 

HTML5_RELAXNG_XML := $(patsubst data/html5schemas/%.rnc,data/html5schemas/%.rng,$(wildcard data/html5schemas/*.rnc))


data/html5schemas/%.rng: data/html5schemas/%.rnc
	trang $^ $@

data/full-html5-schema.rng: $(HTML5_RELAXNG_XML) data/makeSelfContainedHTML5Schema.xsl
	saxon data/html5schemas/xhtml5.rng data/makeSelfContainedHTML5Schema.xsl > $@

data/full-html5-schema-expanded.rng: data/full-html5-schema.rng data/expandSchemaTree.xsl
	saxon $^ > $@


data/html.xml: data/getHTMLInfoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@

data/xpath.xml: data/getXpathFunctions.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@

data/css.xml: data/getCSSProperties.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@

data/svg.xml: data/getSVGInfoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@

XML_SOURCES= data/svg.xml data/css.xml data/xpath.xml data/html.xml

data/all.js: $(XML_SOURCES) data/xmltojson.xsl
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)" full=1 > $@

data/all-split.js: $(XML_SOURCES) data/xmltojson.xsl generate-json-keywords
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)"  > $@


data/keywords.json:  $(XML_SOURCES) data/listKeywords.xsl
	$(SAXON) data/listKeywords.xsl data/listKeywords.xsl > $@ 

generate-json-keywords: $(XML_SOURCES) data/generateJSONKeywords.xsl
	@-rm data/keywords/*.json
	$(SAXON) -ext:on data/generateJSONKeywords.xsl data/generateJSONKeywords.xsl

GENERIC_FILES=style/all.css index.html images/*.png style/images/*.png 

android: js/all-split.js $(GENERIC_FILES) icons/48x.png data/keywords/
	@-rm android/assets/data/keywords/*.json
	cp --parents -r -t android/assets/ $^ 
	mv android/assets/js/all-split.js android/assets/js/all.js
	mv android/assets/icons/48x.png android/res/drawable/icon.png

android-free: android js/all-free.js
	cp js/all-free.js android/assets/js/all.js

widget-opera.wgt: config-opera.xml js/all-split.js $(GENERIC_FILES) icons/48x.png data/keywords/
	@-rm build/data/keywords/*.json
	cp --parents -r -t build/ $^ 
	mv build/config-opera.xml build/config.xml
	cd build
	zip -R ../$@ "*" ; cd ..


www: js/all.js $(GENERIC_FILES) icons/*.png cheatsheet.manifest opensearch.xml data/keywords.json
	cp --parent -t $(WWW_ROOT)/