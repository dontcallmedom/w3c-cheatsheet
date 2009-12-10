all: js/all.js style/all.css data/all.json

widget-opera.wgt: config-opera.xml index.html js/ style/ data/ images/
	cp -r $^ build; mv build/config-opera.xml build/config.xml; cd build; zip -R ../$@ "*" ; cd ..

JAVA=/usr/bin/java
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar
SAXON=~/bin/saxon

js/all.js: data/all.json  js/lib/jquery.js js/lib/jquery-ui.js js/lib/ui.tabs.paging.js js/lib/jquery.autocomplete.js js/start.js
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

style/all.css: style/jquery.autocomplete.css  style/jquery-ui.css  style/style.css
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type css > $@


# get the compact RelaxNG html5 schemas from http://syntax.whattf.org/relaxng/
# and turned into them .rng in data/html5schemas
data/html5schemas/xhtml5.rnc:
	wget --no-parent --recursive --level=1 --timestamping --no-directories --directory-prefix=data/html5schemas/ http://syntax.whattf.org/relaxng/ -A "*.rnc" 

data/html5schemas/%.rng: data/html5schemas/%.rnc
	trang $^ > $@

data/full-html5-schema.rng: data/html5schemas/*.rng data/makeSelfContainedHTMLSchema.xsl
	saxon data/html5schemas/xhtml5.rng data/makeSelfContainedHTMLSchema.xsl > $@

data/html.xml: data/getHTMLInfoset.xsl
	saxon $^ $^ > $@

data/xpath.xml: data/getXpathFunctions.xsl
	saxon $^ $^ > $@

data/css.xml: data/getCSSProperties.xsl
	saxon $^ $^ > $@


data/svg.xml: data/getSVGInfoset.xsl
	saxon $^ $^ > $@


data/%.json: data/%.xml data/xmltojson.xsl
	$(SAXON)  $^  > $@

data/init.json: data/xmltojson.xsl data/makeInit.xsl
	$(SAXON) $^> $@


data/all.json: data/init.json data/html.json data/svg.json data/css.json data/xpath.json
	cat $^ > $@

data/i18n.frag: data/getI18NFragment.xsl
	saxon http://www.w3.org/International/quicktips/ $^ > $@

android: js/all.js style/all.css index.html images/*.png style/images/*.png
	cp --parents -t android/assets/ $^ 