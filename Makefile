all: js/all.js style/all.css

JAVA=/usr/bin/java

# from http://yuilibrary.com/downloads/
# to minify CSS and JavaScript
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar

# wrapper script around SAXON
# can use wrapper from debian/ubuntu libsaxon-java
SAXON=/home/dom/bin/saxon


# directory where the schematron implementation in XSLT1
# is available
# http://www.schematron.com/implementation.html
XSLT_SCHEMATRON_BUILDER_PATH=/home/dom/data/2010/01

# concats and minify all the JavaScript used to get the cheat sheet to work
js/all.js: data/all.js js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@
	#cat $^ > $@

# gzipped for serving over the Web
js/all.js.gz: js/all.js
	gzip -c $^ > $@

# version where most of the data is split out, and gets loaded through XMLHTTPRequest
js/all-split.js: data/all-split.js js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

# version where about/donate screen starts open by default
js/all-free.js: data/all-split.js  js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/free.js js/start.js
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

# minified style sheet
style/all.css: style/style.css
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type css > $@

# gzipped for serving over the Web
style/all.css.gz: style/all.css
	gzip -c $^ > $@


# create an XSLT that does the schematron validation
data/rules.xsl: data/rules.schematron
	$(SAXON)  $^ $(XSLT_SCHEMATRON_BUILDER_PATH)/iso_dsdl_include.xsl > data/schematron1.tmp
	$(SAXON) data/schematron1.tmp $(XSLT_SCHEMATRON_BUILDER_PATH)/iso_abstract_expand.xsl  > data/schematron2.tmp
	$(SAXON) data/schematron2.tmp $(XSLT_SCHEMATRON_BUILDER_PATH)/iso_svrl_for_xslt1.xsl  > $@
	rm data/schematron1.tmp data/schematron2.tmp

#####################
# HTML5 data
# not ready for production yet

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

                   #
####################

# HTML Infoset data
data/html.xml: data/getHTMLInfoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@ # RelaxNG validation
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation

data/xpath.xml: data/getXpathFunctions.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0)# Schematron validation

data/css.xml: data/getCSSProperties.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation

data/svg.xml: data/getSVGInfoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation

XML_SOURCES= data/svg.xml data/css.xml data/xpath.xml data/html.xml

# data as big Javascript associative array
data/all.js: $(XML_SOURCES) data/xmltojson.xsl
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)" full=1 > $@

# data as small array, with ref for XMLHTTPRequest loading
data/all-split.js: $(XML_SOURCES) data/xmltojson.xsl generate-json-keywords
	$(SAXON) data/xmltojson.xsl data/xmltojson.xsl filenamesSources="$(XML_SOURCES)"  > $@

# list of recognized keywords, used for OpenSearch autosuggestion
data/keywords.json:  $(XML_SOURCES) data/listKeywords.xsl
	$(SAXON) data/listKeywords.xsl data/listKeywords.xsl > $@ 

# one file per keyword, to be loaded through XMLHTTPRequest (in -split mode)
generate-json-keywords: $(XML_SOURCES) data/generateJSONKeywords.xsl
	@-rm data/keywords/*.json
	$(SAXON) -ext:on data/generateJSONKeywords.xsl data/generateJSONKeywords.xsl

GENERIC_FILES=style/all.css index.html images/*.png style/images/*.png 
GZIPPED_FILES=style/all.css.gz js/all.js.gz index.html.gz

# set up the files in android build space
android: js/all-split.js $(GENERIC_FILES) icons/48x.png data/keywords/
	@-rm android/assets/data/keywords/*.json
	cp --parents -r -t android/assets/ $^ 
	mv android/assets/js/all-split.js android/assets/js/all.js
	mv android/assets/icons/48x.png android/res/drawable/icon.png

# set up the files in android build space (for free app)
android-free: android js/all-free.js
	cp js/all-free.js android/assets/js/all.js

# builds opera widget
widget-opera.wgt: config-opera.xml js/all-split.js $(GENERIC_FILES) icons/48x.png data/keywords/
	@-rm build/data/keywords/*.json
	cp --parents -r -t build/ $^ 
	mv build/config-opera.xml build/config.xml
	cd build
	zip -R ../$@ "*" ; cd ..


# place where the on-line cheatsheet is checked out
# only useful for W3C staff
WWW_ROOT=/home/dom/WWW/2009/cheatsheet

index.html.gz: index.html
	gzip -c $^ > $@

# update the resources that needs to be updated for on-line cheatsheet
www: js/all.js $(GENERIC_FILES) $(GZIPPED_FILES) icons/*.png cheatsheet.manifest opensearch.xml data/keywords.json
	cp --parent -t $(WWW_ROOT)/ $^
