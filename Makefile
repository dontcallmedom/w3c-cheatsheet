widget-opera.wgt: config-opera.xml index.html js/ style/ data/ images/
	cp -r $^ build; mv build/config-opera.xml build/config.xml; cd build; zip -R ../$@ "*" ; cd ..

JAVA=/usr/bin/java
YUICOMPRESSOR=/usr/local/yuicompressor/build/yuicompressor.jar

js/all.js: data/*.json  js/lib/jquery.js js/lib/jquery-ui.js js/lib/jquery.autocomplete.js js/start.js
	 cat $^ | $(JAVA) -jar $(YUICOMPRESSOR)  --type js --line-break 0 > $@