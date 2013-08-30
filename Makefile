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

JQUERY=js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js

# concats and minify all the JavaScript used to get the cheat sheet to work
js/all.js: data/all.js $(JQUERY) js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@
	#cat $^ > $@

# gzipped for serving over the Web
js/all.js.gz: js/all.js
	gzip -c $^ > $@

# version where most of the data is split out, and gets loaded through XMLHTTPRequest
js/all-split.js: data/all-split.js $(JQUERY) js/donate.js js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

# version where about/donate screen starts open by default
js/all-free.js: data/all-split.js $(JQUERY) js/free.js js/start.js
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


####################

# HTML Infoset data
# @@@ should also depend on mobilebp.html, i18n.html, qa.html
data/html4.xml: data/getHTMLInfoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@ # RelaxNG validation
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation

# @@@ should also depend on mobilebp.html, i18n.html, qa.html, html4.xml
data/html.xml: data/getHTML5Infoset.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@ # RelaxNG validation
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation


data/xpath.xml: data/getXpathFunctions.xsl
	saxon $^ $^ > $@
	rnv data/schema.rnc $@
	$(SAXON) $@ data/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0)# Schematron validation

# @@@ should also depend on cssselectors.xml
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
	@-rm data/json/*.js
	$(SAXON) -ext:on data/generateJSONKeywords.xsl data/generateJSONKeywords.xsl

GENERIC_FILES=style/all.css index.html images/*.png style/images/*.png 
GZIPPED_FILES=style/all.css.gz js/all.js.gz

# place where the on-line cheatsheet is checked out
# only useful for W3C staff
WWW_ROOT=/home/dom/WWW/2009/cheatsheet

# we update the checksum in the manifest each time one of the referenced
# resources change
cheatsheet.manifest: js/all.js $(GENERIC_FILES) icons/16x.png
	perl -pi -e "s/^# checksum .*$$/# checksum `cat $^|md5sum`/" $@

# update the resources that needs to be updated for on-line cheatsheet
www: js/all.js $(GENERIC_FILES) $(GZIPPED_FILES) icons/*.png cheatsheet.manifest opensearch.xml data/keywords.json
	cp --parent -t $(WWW_ROOT)/ $^
	perl -pi -e "s/style\/all.css/style\/all/" $(WWW_ROOT)/index.html
	perl -pi -e "s/js\/all.js/js\/all/" $(WWW_ROOT)/index.html
	gzip -c $(WWW_ROOT)/index.html > $(WWW_ROOT)/index.html.gz
