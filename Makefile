all: js/all.js style/all.css data/all.json

widget-opera.wgt: config-opera.xml index.html js/ style/ images/
	cp -r $^ build; mv build/config-opera.xml build/config.xml;  cd build; zip -R ../$@ "*" ; cd ..

JAVA=/usr/bin/java
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar
SAXON=~/bin/saxon
WWW_ROOT=/home/dom/WWW/2009/cheatsheet

js/all.js: data/all.json js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

js/all-split.js: data/all-split.json js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

js/all-free.js: data/all-split.json  js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/free.js js/start.js
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

data/xpath.xml: data/getXpathFunctions.xsl
	saxon $^ $^ > $@

data/css.xml: data/getCSSProperties.xsl
	saxon $^ $^ > $@

data/svg.xml: data/getSVGInfoset.xsl
	saxon $^ $^ > $@

XML_SOURCES= data/svg.xml data/css.xml data/xpath.xml data/html.xml

data/all.json: $(XML_SOURCES) data/xmltojson.xsl
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)" full=1 > $@

data/all-split.json: $(XML_SOURCES) data/xmltojson.xsl generate-json-keywords
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)"  > $@


data/keywords.json:  $(XML_SOURCES) data/listKeywords.xsl
	$(SAXON) data/listKeywords.xsl data/listKeywords.xsl > $@ 

generate-json-keywords: $(XML_SOURCES) data/generateJSONKeywords.xsl
	@-rm data/json/*.js
	$(SAXON) -ext:on data/generateJSONKeywords.xsl data/generateJSONKeywords.xsl

data/i18n.frag: data/getI18NFragment.xsl
	saxon http://www.w3.org/International/quicktips/ $^ > $@

android: generate-json-keywords android-copy

android-copy: js/all-split.js style/all.css index.html images/*.png style/images/*.png icons/48x.png data/json/
	@-rm android/assets/data/json/*.js
	cp --parents -r -t android/assets/ $^ 
	mv android/assets/js/all-split.js android/assets/all.js
	mv android/assets/icons/48x.png android/res/drawable/icon.png

android-free: android js/all-free.js
	cp js/all-free.js android/assets/js/all.js

www: js/all.js style/all.css index.html images/*.png style/images/*.png icons/*.png cheatsheet.manifest opensearch.xml data/keywords.json
	cp --parent -t $(WWW_ROOT)/