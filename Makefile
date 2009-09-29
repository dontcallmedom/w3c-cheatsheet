all: js/all.js style/all.css data/all.json

widget-opera.wgt: config-opera.xml index.html js/ style/ data/ images/
	cp -r $^ build; mv build/config-opera.xml build/config.xml; cd build; zip -R ../$@ "*" ; cd ..

JAVA=/usr/bin/java
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar
SAXON=~/bin/saxon

js/all.js: data/packed.json  js/lib/jquery.js js/lib/jquery-ui.js js/lib/jquery.autocomplete.js js/start.js
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@

style/all.css: style/jquery.autocomplete.css  style/jquery-ui.css  style/thickbox.css style/style.css
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type css > $@

data/xpath.json: data/getXpathFunctions.xsl
	saxon data/getXpathFunctions.xsl data/getXpathFunctions.xsl > $@

data/css.json: data/getCSSProperties.xsl
	saxon data/getCSSProperties.xsl data/getCSSProperties.xsl > $@

data/svg.json: data/getSVGInfoset.xsl
	saxon data/getSVGInfoset.xsl data/getSVGInfoset.xsl > $@

data/html.json: data/getHTMLInfoset.xsl
	saxon data/getHTMLInfoset.xsl data/getHTMLInfoset.xsl > $@

data/all.json: data/html.json data/svg.json data/css.json data/xpath.json 
	cat $^ > $@