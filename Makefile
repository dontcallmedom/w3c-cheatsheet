all: js/all.js style/all.css

JAVA=/usr/bin/java

# from http://yuilibrary.com/downloads/
# to minify CSS and JavaScript
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar

# wrapper script around SAXON
# can use wrapper from debian/ubuntu libsaxon-java
SAXON=saxon
# require html5parser in the classpath
SAXON_HTML5=/usr/bin/java net.sf.saxon.Transform  -x nu.validator.htmlparser.sax.HtmlParser

JS_LIBS=js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/lib/mustache.js

# HTML5 Markup spec; no longer maintain, so ideally update it from dev.w3.org/cvsweb/html5/markup
HTML5_MARKUP_SPEC=http://www.w3.org/services/tidy?docAddr=http://dev.w3.org/html5/markup/spec.html

# concats and minify all the JavaScript used to get the cheat sheet to work
js/all.js: data/all.js $(JS_LIBS) js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

# gzipped for serving over the Web
js/all.js.gz: js/all.js
	gzip -c $^ > $@

# version where most of the data is split out, and gets loaded through XMLHTTPRequest
js/all-split.js: data/all-split.js $(JS_LIBS) js/start.js
	cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

# minified style sheet
style/all.css: style/style.css
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type css > $@

# gzipped for serving over the Web
style/all.css.gz: style/all.css
	gzip -c $^ > $@


# create an XSLT that does the schematron validation
data/validation/rules.xsl: data/validation/rules.schematron
	$(SAXON)  $^ data/validation/iso_dsdl_include.xsl > data/validation/schematron1.tmp
	$(SAXON) data/validation/schematron1.tmp data/validation/iso_abstract_expand.xsl  > data/validation/schematron2.tmp
	$(SAXON) data/validation/schematron2.tmp data/validation/iso_svrl_for_xslt1.xsl  > $@
	rm data/validation/schematron1.tmp data/validation/schematron2.tmp


####################

# HTML Infoset data
data/html4.xml: data/getHTMLInfoset.xsl data/mobilebp.html data/i18n.html data/qa.html
	saxon $< $< > $@
	rnv data/validation/schema.rnc $@ # RelaxNG validation

data/html.xml: data/getHTML5Infoset.xsl data/html4.xml data/mobilebp.html data/i18n.html data/qa.html
	saxon $< $< spec=$(HTML5_MARKUP_SPEC) > $@
	rnv data/validation/schema.rnc $@ # RelaxNG validation


data/xpath.xml: data/getXpathFunctions.xsl
	saxon $< $< > $@
	rnv data/validation/schema.rnc $@


data/css.xml: data/getCSSProperties.xsl data/cssselectors.xml data/css-flexbox.xml data/css-writing-modes.xml data/css-break.xml data/css-ui.xml data/css-compositing.xml data/css-shapes.xml data/css-text-decor.xml data/css-multicol.xml data/css-images.xml data/css-backgrounds.xml data/css-animations.xml data/css-color.xml data/css-transitions.xml
	saxon $< $< > $@
	rnv data/validation/schema.rnc $@

data/css-flexbox.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-flexbox/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-writing-modes.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-writing-modes-3/Overview.bs  > $@
	rnv data/validation/schema.rnc $@

data/css-multicol.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js  https://drafts.csswg.org/css-multicol/Overview.bs  > $@
	rnv data/validation/schema.rnc $@

data/css-break.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js  https://drafts.csswg.org/css-break/Overview.bs  > $@
	rnv data/validation/schema.rnc $@

data/css-ui.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js  https://drafts.csswg.org/css-ui/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-compositing.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.fxtf.org/compositing-1/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-shapes.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-shapes/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-text-decor.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-text-decor-3/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-images.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-images-3/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-backgrounds.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-backgrounds-3/Overview.src.html > $@
	rnv data/validation/schema.rnc $@

data/css-animations.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-animations-1/Overview.bs > $@
	rnv data/validation/schema.rnc $@

data/css-transitions.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-transitions-1/Overview.bs > $@
	rnv data/validation/schema.rnc $@


data/css-color.xml: data/getCSSFromBikeshedDoc.js
	node data/getCSSFromBikeshedDoc.js https://drafts.csswg.org/css-color-3/Overview.src.html > $@
	rnv data/validation/schema.rnc $@

data/svg.xml: data/getSVGInfoset.xsl 
	saxon $< $< > $@
	rnv data/validation/schema.rnc $@

data/js.idl: data/idl-sources data/extractIdl.js
	for i in `cat $<` ; do node data/extractIdl.js $$i ; done > $@

data/js.widlprocxml: data/js.idl
	widlproc $< > $@

data/js.xml: data/js.widlprocxml data/getDOMInfoset.xsl
	saxon $^ > $@

XML_SOURCES= data/svg.xml data/css.xml data/xpath.xml data/html.xml data/js.xml

clean-data: 
	rm $(XML_SOURCES) data/html4.xml

check-data: $(XML_SOURCES) data/validation/rules.xsl
	$(SAXON) data/svg.xml data/validation/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation
	$(SAXON) data/xpath.xml data/validation/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation
	$(SAXON) data/html.xml data/validation/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation
	$(SAXON) data/css.xml data/validation/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0) # Schematron validation
	$(SAXON) data/svg.xml data/validation/rules.xsl|(grep svrl:text && echo "Schematron validation failed" && exit 1 || exit 0)# Schematron validation


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
cheatsheet.manifest: js/all.js $(GENERIC_FILES) icons/16x.png cheatsheet.manifest.dist
	perl -p -e "s/^# checksum .*$$/# checksum `cat $^|md5sum`/" cheatsheet.manifest.dist > $@

# update the resources that needs to be updated for on-line cheatsheet
www: js/all.js $(GENERIC_FILES) $(GZIPPED_FILES) icons/*.png cheatsheet.manifest opensearch.xml data/keywords.json
	cp --parent -t $(WWW_ROOT)/ $^
	perl -pi -e "s/style\/all.css/style\/all/" $(WWW_ROOT)/index.html
	perl -pi -e "s/js\/all.js/js\/all/" $(WWW_ROOT)/index.html
	gzip -c $(WWW_ROOT)/index.html > $(WWW_ROOT)/index.html.gz
