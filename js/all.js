"use strict";
var sources={};
var dictionary={pt:"Pattern",n:"name",d:"description",i:"Internationalization",ac:"Accessibility techniques",q:"QA Tip",m:"Mobile considerations",el:"Elements",c:"content",pr:"Allowed properties",k:"Allowed children",pa:"parameters",r:"returns",ex:"Example",s:"Syntax",v:"values",ih:"inherited",me:"media",an:"animatable",sp:"Specification",at:"Attributes",ru:"Rules",pe:"percentage",ap:"applies",e:"element",a:"attribute",p:"property",se:"selector",ar:"at-rule",f:"function"};
sources.html={e:{a:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"},{t:"charset"},{t:"coords"},{t:"href"},{t:"hreflang"},{t:"name"},{t:"onblur"},{t:"onfocus"},{t:"rel"},{t:"rev"},{t:"shape"},{t:"tabindex"},{t:"target"},{t:"type"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H30.html",t:"Providing link text that describes the purpose of a link for anchor elements"}]},q:{l:"block",p:[{u:"/QA/Tips/noClickHere",t:"Donʼt use “click here” as link text"}]},sp:{u:"/TR/html401/index/../struct/links.html#edef-A"}}]},abbr:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H28.html",t:"Providing definitions for abbreviations by using the abbr and acronym elements"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-ABBR"}}]},acronym:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H28.html",t:"Providing definitions for abbreviations by using the abbr and acronym elements"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-ACRONYM"}}]},address:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-ADDRESS"}}]},area:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"},{t:"alt"},{t:"coords"},{t:"href"},{t:"nohref"},{t:"onblur"},{t:"onfocus"},{t:"shape"},{t:"tabindex"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H24.html",t:"Providing text alternatives for the area elements of image maps"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#IMAGE_MAPS",t:"Do not use image maps unless you know the device supports them effectively."}]},sp:{u:"/TR/html401/index/../struct/objects.html#edef-AREA"}}]},b:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-B"}}]},base:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"href"},{t:"id"},{t:"target"},{t:"xmlns"},{t:"xmlns:xsi"}]},sp:{u:"/TR/html401/index/../struct/links.html#edef-BASE"}}]},bdo:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},i:{l:"block",p:[{u:"/International/tutorials/bidi-xhtml/",t:""}]},sp:{u:"/TR/html401/index/../struct/dirlang.html#edef-BDO"}}]},big:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-BIG"}}]},blockquote:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"cite"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-BLOCKQUOTE"}}]},body:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"onload"},{t:"onunload"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-BODY"}}]},br:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H48.html",t:"Using ol, ul and dl for lists"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-BR"}}]},button:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"},{t:"disabled"},{t:"name"},{t:"onblur"},{t:"onfocus"},{t:"tabindex"},{t:"type"},{t:"value"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"},{u:"/TR/WCAG20-TECHS/H91.html",t:"Using HTML form controls and links"}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-BUTTON"}}]},caption:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H39.html",t:"Using caption elements to associate data table captions with data tables"},{u:"/TR/WCAG20-TECHS/H73.html",t:"Using the summary attribute of the table element to give an overview of data tables"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-CAPTION"}}]},cite:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-CITE"}}]},code:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-CODE"}}]},col:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"span"},{t:"valign"},{t:"width"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-COL"}}]},colgroup:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"span"},{t:"valign"},{t:"width"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-COLGROUP"}}]},dd:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H40.html",t:"Using definition lists"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-DD"}}]},del:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"cite"},{t:"datetime"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-del"}}]},dfn:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H54.html",t:"Using the dfn element to identify the defining instance of a word"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-DFN"}}]},div:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-DIV"}}]},dl:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H40.html",t:"Using definition lists"},{u:"/TR/WCAG20-TECHS/H48.html",t:"Using ol, ul and dl for lists"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-DL"}}]},dt:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H40.html",t:"Using definition lists"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-DT"}}]},em:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-EM"}}]},fieldset:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H71.html",t:"Providing a description for groups of form controls using fieldset and legend elements"},{u:"/TR/WCAG20-TECHS/H90.html",t:"Indicating required form controls"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-FIELDSET"}}]},form:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accept"},{t:"accept-charset"},{t:"action"},{t:"enctype"},{t:"method"},{t:"onreset"},{t:"onsubmit"},{t:"target"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-FORM"}}]},h1:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/Use_h1_for_Title",t:"Use h1 for top-level heading"},{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H1"}}]},h2:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H2"}}]},h3:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H3"}}]},h4:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H4"}}]},h5:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H5"}}]},h6:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},q:{l:"block",p:[{u:"/QA/Tips/headings",t:"Use headings to structure your document"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-H6"}}]},head:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"dir"},{t:"lang"},{t:"id"},{t:"profile"},{t:"xml:lang"},{t:"xmlns"},{t:"xmlns:xsi"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H25.html",t:"Providing a title using the title element"},{u:"/TR/WCAG20-TECHS/H60.html",t:"Using the link element to link to a glossary"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-HEAD"}}]},hr:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-HR"}}]},html:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"dir"},{t:"lang"},{t:"id"},{t:"version"},{t:"xml:lang"},{t:"xmlns"},{t:"xmlns:xsi"},{t:"xsi:schemaLocation"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H57.html",t:"Using language attributes on the html element"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-HTML"}}]},i:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-I"}}]},img:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"alt"},{t:"height"},{t:"ismap"},{t:"longdesc"},{t:"src"},{t:"usemap"},{t:"width"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H37.html",t:"Using alt attributes on img elements"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#GRAPHICS_FOR_SPACING",t:"Do not use graphics for spacing."},{u:"/TR/mobile-bp/#LARGE_GRAPHICS",t:"Do not use images that cannot be rendered by the device. Avoid large or high resolution images except where critical information would otherwise be lost."},{u:"/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",t:"Provide a text equivalent for every non-text element."},{u:"/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",t:"Specify the size of images in markup, if they have an intrinsic size."},{u:"/TR/mobile-bp/#IMAGES_RESIZING",t:"Resize images at the server, if they have an intrinsic size."}]},q:{l:"block",p:[{u:"/QA/Tips/altAttribute",t:"Use the alt attribute to describe the function of each visual"},{u:"/QA/Tips/png-gif",t:"GIF or PNG?"}]},sp:{u:"/TR/html401/index/../struct/objects.html#edef-IMG"}}]},input:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accept"},{t:"accesskey"},{t:"alt"},{t:"checked"},{t:"disabled"},{t:"inputmode"},{t:"maxlength"},{t:"name"},{t:"onblur"},{t:"onchange"},{t:"onfocus"},{t:"onselect"},{t:"readonly"},{t:"size"},{t:"src"},{t:"tabindex"},{t:"type"},{t:"usemap"},{t:"value"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"},{u:"/TR/WCAG20-TECHS/H36.html",t:"Using alt attributes on images used as submit buttons"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#AVOID_FREE_TEXT",t:"Avoid free text entry where possible."},{u:"/TR/mobile-bp/#PROVIDE_DEFAULTS",t:"Provide pre-selected default values where possible."},{u:"/TR/mobile-bp/#DEFAULT_INPUT_MODE",t:"Specify a default text entry mode, language and/or input format, if the target device is known to support it."},{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-INPUT"}}]},ins:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"cite"},{t:"datetime"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-ins"}}]},kbd:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-KBD"}}]},label:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"},{t:"for"},{t:"onblur"},{t:"onfocus"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"},{u:"/TR/WCAG20-TECHS/H90.html",t:"Indicating required form controls"},{u:"/TR/WCAG20-TECHS/H91.html",t:"Using HTML form controls and links"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-LABEL"}}]},legend:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H71.html",t:"Providing a description for groups of form controls using fieldset and legend elements"},{u:"/TR/WCAG20-TECHS/H90.html",t:"Indicating required form controls"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-LEGEND"}}]},li:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"value"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-LI"}}]},link:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"charset"},{t:"href"},{t:"hreflang"},{t:"media"},{t:"rel"},{t:"rev"},{t:"target"},{t:"type"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H59.html",t:"Using the link element and navigation tools"},{u:"/TR/WCAG20-TECHS/H60.html",t:"Using the link element to link to a glossary"}]},q:{l:"block",p:[{u:"/QA/Tips/use-links",t:"Use <link>s in your document"}]},sp:{u:"/TR/html401/index/../struct/links.html#edef-LINK"}}]},map:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"name"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H50.html",t:"Using structural elements to group links"}]},sp:{u:"/TR/html401/index/../struct/objects.html#edef-MAP"}}]},meta:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"dir"},{t:"lang"},{t:"content"},{t:"http-equiv"},{t:"id"},{t:"name"},{t:"scheme"},{t:"xml:lang"},{t:"xmlns"},{t:"xmlns:xsi"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H76.html",t:"Using meta refresh to create an instant client-side redirect"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#AUTO_REFRESH",t:"Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."},{u:"/TR/mobile-bp/#REDIRECTION",t:"Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]},q:{l:"block",p:[{u:"/QA/Tips/reback",t:"Use standard redirects: don't break the back button!"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-META"}}]},noscript:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#edef-NOSCRIPT"}}]},object:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"archive"},{t:"classid"},{t:"codebase"},{t:"codetype"},{t:"data"},{t:"declare"},{t:"height"},{t:"name"},{t:"standby"},{t:"tabindex"},{t:"type"},{t:"usemap"},{t:"width"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H27.html",t:"Providing text and non-text alternatives for object"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",t:"Provide a text equivalent for every non-text element."},{u:"/TR/mobile-bp/#OBJECTS_OR_SCRIPT",t:"Do not rely on embedded objects or script."}]},sp:{u:"/TR/html401/index/../struct/objects.html#edef-OBJECT"}}]},ol:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"start"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H48.html",t:"Using ol, ul and dl for lists"},{u:"/TR/WCAG20-TECHS/H50.html",t:"Using structural elements to group links"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-OL"}}]},optgroup:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"disabled"},{t:"label"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H85.html",t:"Using OPTGROUP to group OPTION elements inside a SELECT"}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-OPTGROUP"}}]},option:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"disabled"},{t:"label"},{t:"selected"},{t:"value"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H85.html",t:"Using OPTGROUP to group OPTION elements inside a SELECT"}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-OPTION"}}]},p:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-P"}}]},param:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"id"},{t:"name"},{t:"type"},{t:"value"},{t:"valuetype"},{t:"xmlns"},{t:"xmlns:xsi"}]},sp:{u:"/TR/html401/index/../struct/objects.html#edef-PARAM"}}]},pre:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H51.html",t:"Using table markup to present tabular information"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-PRE"}}]},q:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"cite"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-Q"}}]},samp:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-SAMP"}}]},script:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"charset"},{t:"defer"},{t:"id"},{t:"src"},{t:"type"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#edef-SCRIPT"}}]},select:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"disabled"},{t:"multiple"},{t:"name"},{t:"onblur"},{t:"onchange"},{t:"onfocus"},{t:"size"},{t:"tabindex"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H84.html",t:"Using a button with a select element to perform an action"},{u:"/TR/WCAG20-TECHS/H85.html",t:"Using OPTGROUP to group OPTION elements inside a SELECT"},{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#PROVIDE_DEFAULTS",t:"Provide pre-selected default values where possible."},{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-SELECT"}}]},small:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-SMALL"}}]},span:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H56.html",t:"Using the dir attribute on an inline element to resolve problems with nested directional runs"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-SPAN"}}]},strong:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-STRONG"}}]},style:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"dir"},{t:"lang"},{t:"id"},{t:"media"},{t:"title"},{t:"type"},{t:"xml:lang"}]},sp:{u:"/TR/html401/index/../present/styles.html#edef-STYLE"}}]},sub:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-SUB"}}]},sup:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-SUP"}}]},table:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"border"},{t:"cellpadding"},{t:"cellspacing"},{t:"frame"},{t:"rules"},{t:"summary"},{t:"width"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H73.html",t:"Using the summary attribute of the table element to give an overview of data tables"},{u:"/TR/WCAG20-TECHS/H39.html",t:"Using caption elements to associate data table captions with data tables"},{u:"/TR/WCAG20-TECHS/H51.html",t:"Using table markup to present tabular information"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#TABLES_SUPPORT",t:"Do not use tables unless the device is known to support them."},{u:"/TR/mobile-bp/#TABLES_NESTED",t:"Do not use nested tables."},{u:"/TR/mobile-bp/#TABLES_LAYOUT",t:"Do not use tables for layout."},{u:"/TR/mobile-bp/#TABLES_ALTERNATIVES",t:"Where possible, use an alternative to tabular presentation."}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TABLE"}}]},tbody:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"valign"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TBODY"}}]},td:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"abbr"},{t:"align"},{t:"axis"},{t:"char"},{t:"charoff"},{t:"colspan"},{t:"headers"},{t:"rowspan"},{t:"scope"},{t:"valign"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H63.html",t:"Using the scope attribute to associate header cells and data cells in data tables"},{u:"/TR/WCAG20-TECHS/H43.html",t:"Using id and headers attributes to associate data cells with header cells in data tables"},{u:"/TR/WCAG20-TECHS/H51.html",t:"Using table markup to present tabular information"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TD"}}]},textarea:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"accesskey"},{t:"cols"},{t:"disabled"},{t:"inputmode"},{t:"name"},{t:"onblur"},{t:"onchange"},{t:"onfocus"},{t:"onselect"},{t:"readonly"},{t:"rows"},{t:"tabindex"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#AVOID_FREE_TEXT",t:"Avoid free text entry where possible."},{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#edef-TEXTAREA"}}]},tfoot:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"valign"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TFOOT"}}]},th:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"abbr"},{t:"align"},{t:"axis"},{t:"char"},{t:"charoff"},{t:"colspan"},{t:"headers"},{t:"rowspan"},{t:"scope"},{t:"valign"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H63.html",t:"Using the scope attribute to associate header cells and data cells in data tables"},{u:"/TR/WCAG20-TECHS/H43.html",t:"Using id and headers attributes to associate data cells with header cells in data tables"},{u:"/TR/WCAG20-TECHS/H51.html",t:"Using table markup to present tabular information"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TH"}}]},thead:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"valign"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-THEAD"}}]},title:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"dir"},{t:"lang"},{t:"id"},{t:"xml:lang"},{t:"xmlns"},{t:"xmlns:xsi"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H25.html",t:"Providing a title using the title element"},{u:"/TR/WCAG20-TECHS/H64.html",t:"Using the title attribute of the frame and iframe elements"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#PAGE_TITLE",t:"Provide a short but descriptive page title."}]},q:{l:"block",p:[{u:"/QA/Tips/good-titles",t:"<title>: the most important element of a quality Web page"}]},sp:{u:"/TR/html401/index/../struct/global.html#edef-TITLE"}}]},tr:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"},{t:"align"},{t:"char"},{t:"charoff"},{t:"valign"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H51.html",t:"Using table markup to present tabular information"}]},sp:{u:"/TR/html401/index/../struct/tables.html#edef-TR"}}]},tt:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../present/graphics.html#edef-TT"}}]},ul:{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},ac:{u:"/WAI/intro/wcag",l:"block",p:[{u:"/TR/WCAG20-TECHS/H48.html",t:"Using ol, ul and dl for lists"},{u:"/TR/WCAG20-TECHS/H50.html",t:"Using structural elements to group links"}]},q:{l:"block",p:[{u:"/QA/Tips/unordered-lists",t:"Unordered lists: more than just bullets"}]},sp:{u:"/TR/html401/index/../struct/lists.html#edef-UL"}}]},"var":{d:[{at:{y:"a",i:"html",l:"inline",p:[{t:"class"},{t:"id"},{t:"style"},{t:"title"},{t:"xml:lang"},{t:"onclick"},{t:"ondblclick"},{t:"onkeydown"},{t:"onkeypress"},{t:"onkeyup"},{t:"onmousedown"},{t:"onmousemove"},{t:"onmouseout"},{t:"onmouseover"},{t:"onmouseup"},{t:"dir"},{t:"lang"}]},sp:{u:"/TR/html401/index/../struct/text.html#edef-VAR"}}]}},a:{abbr:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"abbreviation for header cell"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-abbr"}}]},"accept-charset":{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"%Charsets;"}]},d:{p:[{t:"list of supported charsets"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-accept-charset"}}]},accept:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"},{t:"input"}]},c:{p:[{t:"%ContentTypes;"}]},d:{p:[{t:"list of MIME types for file upload"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-accept"}}]},accesskey:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"button"},{t:"input"},{t:"label"},{t:"legend"},{t:"textarea"}]},c:{p:[{t:"%Character;"}]},d:{p:[{t:"accessibility key character"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#ACCESS_KEYS",t:"Assign access keys to links in navigational menus and frequently accessed functionality."}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-accesskey"}}]},action:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"server-side form handler"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-action"}}]},align:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"caption"}]},c:{p:[{t:"%CAlign;"}]},d:{p:[{t:"relative to table"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-align-CAPTION"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"},{t:"iframe"},{t:"img"},{t:"input"},{t:"object"}]},c:{p:[{t:"%IAlign;"}]},d:{p:[{t:"vertical or horizontal alignment"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-align-IMG"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"legend"}]},c:{p:[{t:"%LAlign;"}]},d:{p:[{t:"relative to fieldset"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-align-LEGEND"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%TAlign;"}]},d:{p:[{t:"table position relative to window"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-align-TABLE"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"hr"}]},c:{p:[{t:"(left | center | right)"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-align-HR"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"div"},{t:"h1"},{t:"h2"},{t:"h3"},{t:"h4"},{t:"h5"},{t:"h6"},{t:"p"}]},c:{p:[{t:"(left | center | right | justify)"}]},d:{p:[{t:"align, text alignment"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-align"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"col"},{t:"colgroup"},{t:"tbody"},{t:"td"},{t:"tfoot"},{t:"th"},{t:"thead"},{t:"tr"}]},c:{p:[{t:"(left | center | right | justify | char)"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-align-TD"}}]},alink:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"color of selected links"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-alink"}}]},alt:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"short description"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H67.html",t:"Using null alt text and no title attribute on img elements for images that AT should ignore"},{u:"/TR/WCAG20-TECHS/H36.html",t:"Using alt attributes on images used as submit buttons"},{u:"/TR/WCAG20-TECHS/H24.html",t:"Providing text alternatives for the area elements of image maps"},{u:"/TR/WCAG20-TECHS/H37.html",t:"Using alt attributes on img elements"},{u:"/TR/WCAG20-TECHS/H91.html",t:"Using HTML form controls and links"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",t:"Provide a text equivalent for every non-text element."}]},q:{l:"block",p:[{u:"/QA/Tips/altAttribute",t:"Use the alt attribute to describe the function of each visual"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-alt"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"area"},{t:"img"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"short description"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-alt"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"short description"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-alt"}}]},archive:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"comma-separated archive list"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-archive-APPLET"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"space-separated list of URIs"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-archive-OBJECT"}}]},axis:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"comma-separated list of related headers"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-axis"}}]},background:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"texture tile for document background"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-background"}}]},bgcolor:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"background color for cells"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-bgcolor"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"tr"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"background color for row"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-bgcolor"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"cell background color"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-bgcolor"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"document background color"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-bgcolor"}}]},border:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"controls frame width around table"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-border-TABLE"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"img"},{t:"object"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"link border width"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-border-IMG"}}]},cellpadding:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"spacing within cells"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-cellpadding"}}]},cellspacing:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"spacing between cells"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-cellspacing"}}]},"char":{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"col"},{t:"colgroup"},{t:"tbody"},{t:"td"},{t:"tfoot"},{t:"th"},{t:"thead"},{t:"tr"}]},c:{p:[{t:"%Character;"}]},d:{p:[{t:"alignment char, e.g. char=':'"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-char"}}]},charoff:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"col"},{t:"colgroup"},{t:"tbody"},{t:"td"},{t:"tfoot"},{t:"th"},{t:"thead"},{t:"tr"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"offset for alignment char"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-charoff"}}]},charset:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"link"},{t:"script"}]},c:{p:[{t:"%Charset;"}]},d:{p:[{t:"char encoding of linked resource"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-charset"}}]},checked:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"(checked)"}]},d:{p:[{t:"for radio buttons and check boxes"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-checked"}}]},cite:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"blockquote"},{t:"q"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"URI for source document or msg"}]},sp:{u:"/TR/html401/index/../struct/text.html#adef-cite-Q"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"del"},{t:"ins"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"info on reason for change"}]},sp:{u:"/TR/html401/index/../struct/text.html#adef-cite-INS"}}]},"class":{d:[{el:{l:"inline",p:[{t:"all elements but base, basefont, head, html, meta, param, script, style, title"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"space-separated list of classes"}]},q:{l:"block",p:[{u:"/QA/Tips/goodclassnames",t:"Use class with semantics in mind"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-class"}}]},classid:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"identifies an implementation"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-classid"}}]},clear:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"br"}]},c:{p:[{t:"(left | all | right | none)"}]},d:{p:[{t:"control of text flow"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-clear"}}]},code:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"applet class file"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-code"}}]},codebase:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"base URI for classid, data, archive"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-codebase-OBJECT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"optional base URI for applet"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-codebase-APPLET"}}]},codetype:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"content type for code"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-codetype"}}]},color:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"basefont"},{t:"font"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"text color"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-color-FONT"}}]},cols:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frameset"}]},c:{p:[{t:"%MultiLengths;"}]},d:{p:[{t:"list of lengths, default: 100% (1 col)"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-cols-FRAMESET"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"textarea"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-cols-TEXTAREA"}}]},colspan:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"number of cols spanned by cell"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-colspan"}}]},compact:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"dir"},{t:"dl"},{t:"menu"},{t:"ol"},{t:"ul"}]},c:{p:[{t:"(compact)"}]},d:{p:[{t:"reduced interitem spacing"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-compact"}}]},content:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"meta"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"associated information"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H76.html",t:"Using meta refresh to create an instant client-side redirect"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-content"}}]},coords:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"area"}]},c:{p:[{t:"%Coords;"}]},d:{p:[{t:"comma-separated list of lengths"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-coords"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"a"}]},c:{p:[{t:"%Coords;"}]},d:{p:[{t:"for use with client-side image maps"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-coords"}}]},data:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"reference to object's data"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-data"}}]},datetime:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"del"},{t:"ins"}]},c:{p:[{t:"%Datetime;"}]},d:{p:[{t:"date and time of change"}]},sp:{u:"/TR/html401/index/../struct/text.html#adef-datetime"}}]},declare:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"(declare)"}]},d:{p:[{t:"declare but don't instantiate flag"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-declare"}}]},defer:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"script"}]},c:{p:[{t:"(defer)"}]},d:{p:[{t:"UA may defer execution of script"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-defer"}}]},dir:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, frame, frameset, iframe, param, script"}]},c:{p:[{t:"(ltr | rtl)"}]},d:{p:[{t:"direction for weak/neutral text"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H56.html",t:"Using the dir attribute on an inline element to resolve problems with nested directional runs"}]},i:{l:"block",p:[{u:"/International/tutorials/bidi-xhtml/",t:""}]},sp:{u:"/TR/html401/index/../struct/dirlang.html#adef-dir"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"bdo"}]},c:{p:[{t:"(ltr | rtl)"}]},d:{p:[{t:"directionality"}]},sp:{u:"/TR/html401/index/../struct/dirlang.html#adef-dir-BDO"}}]},disabled:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"button"},{t:"input"},{t:"optgroup"},{t:"option"},{t:"select"},{t:"textarea"}]},c:{p:[{t:"(disabled)"}]},d:{p:[{t:"unavailable in this context"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-disabled"}}]},enctype:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-enctype"}}]},face:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"basefont"},{t:"font"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"comma-separated list of font names"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-face-FONT"}}]},"for":{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"label"}]},c:{p:[{t:"IDREF"}]},d:{p:[{t:"matches field ID value"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#CONTROL_LABELLING",t:"Label all form controls appropriately and explicitly associate labels with form controls."}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-for"}}]},frame:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%TFrame;"}]},d:{p:[{t:"which parts of frame to render"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-frame"}}]},frameborder:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"(1 | 0)"}]},d:{p:[{t:"request frame borders?"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-frameborder"}}]},headers:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"IDREFS"}]},d:{p:[{t:"list of id's for header cells"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H43.html",t:"Using id and headers attributes to associate data cells with header cells in data tables"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-headers"}}]},height:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"iframe"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"frame height"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",t:"Specify the size of images in markup, if they have an intrinsic size."},{u:"/TR/mobile-bp/#IMAGES_RESIZING",t:"Resize images at the server, if they have an intrinsic size."}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-height-IFRAME"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"height for cell"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-height-TH"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"img"},{t:"object"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"override height"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-height-IMG"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"initial height"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-height-APPLET"}}]},href:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"link"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"URI for linked resource"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H59.html",t:"Using the link element and navigation tools"},{u:"/TR/WCAG20-TECHS/H60.html",t:"Using the link element to link to a glossary"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-href"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"base"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"URI that acts as base URI"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-href-BASE"}}]},hreflang:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"link"}]},c:{p:[{t:"%LanguageCode;"}]},d:{p:[{t:"language code"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-hreflang"}}]},hspace:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"},{t:"img"},{t:"object"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"horizontal gutter"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-hspace"}}]},"http-equiv":{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"meta"}]},c:{p:[{t:"NAME"}]},d:{p:[{t:"HTTP response header name"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H76.html",t:"Using meta refresh to create an instant client-side redirect"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#AUTO_REFRESH",t:"Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."},{u:"/TR/mobile-bp/#REDIRECTION",t:"Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]},q:{l:"block",p:[{u:"/QA/Tips/reback",t:"Use standard redirects: don't break the back button!"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-http-equiv"}}]},id:{d:[{el:{l:"inline",p:[{t:"all elements but base, head, html, meta, script, style, title"}]},c:{p:[{t:"ID"}]},d:{p:[{t:"document-wide unique id"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H43.html",t:"Using id and headers attributes to associate data cells with header cells in data tables"},{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-id"}}]},ismap:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"img"},{t:"input"}]},c:{p:[{t:"(ismap)"}]},d:{p:[{t:"use server-side image map"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-ismap"}}]},label:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"option"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"for use in hierarchical menus"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-label-OPTION"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"optgroup"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"for use in hierarchical menus"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-label-OPTGROUP"}}]},lang:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, br, frame, frameset, iframe, param, script"}]},c:{p:[{t:"%LanguageCode;"}]},d:{p:[{t:"language code"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H57.html",t:"Using language attributes on the html element"},{u:"/TR/WCAG20-TECHS/H58.html",t:"Using language attributes to identify changes in the human language"}]},i:{l:"block",p:[{u:"/International/tutorials/language-decl/",t:""}]},sp:{u:"/TR/html401/index/../struct/dirlang.html#adef-lang"}}]},language:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"script"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"predefined script language name"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-language"}}]},link:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"color of links"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-link"}}]},longdesc:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"img"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"link to long description (complements alt)"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H45.html",t:"Using longdesc"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-longdesc-IMG"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"link to long description (complements title)"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-longdesc-FRAME"}}]},marginheight:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"margin height in pixels"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-marginheight"}}]},marginwidth:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"margin widths in pixels"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-marginwidth"}}]},maxlength:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"max chars for text fields"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-maxlength"}}]},media:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"style"}]},c:{p:[{t:"%MediaDesc;"}]},d:{p:[{t:"designed for use with these media"}]},sp:{u:"/TR/html401/index/../present/styles.html#adef-media"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"link"}]},c:{p:[{t:"%MediaDesc;"}]},d:{p:[{t:"for rendering on these media"}]},sp:{u:"/TR/html401/index/../present/styles.html#adef-media"}}]},method:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"(GET | POST)"}]},d:{p:[{t:"HTTP method used to submit the form"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-method"}}]},multiple:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"select"}]},c:{p:[{t:"(multiple)"}]},d:{p:[{t:"default is single selection"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-multiple"}}]},name:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"button"},{t:"textarea"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:" "}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H64.html",t:"Using the title attribute of the frame and iframe elements"},{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-name-BUTTON"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"allows applets to find each other"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-name-APPLET"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"select"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"field name"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-name-SELECT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"name of form for scripting"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-name-FORM"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"name of frame for targetting"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-name-FRAME"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"img"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"name of image for scripting"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-name-IMG"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"a"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"named link end"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-name-A"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"},{t:"object"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"submit as part of form"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-name-INPUT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"map"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"for reference by usemap"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-name-MAP"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"param"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"property name"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-name-PARAM"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"meta"}]},c:{p:[{t:"NAME"}]},d:{p:[{t:"metainformation name"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-name-META"}}]},nohref:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"area"}]},c:{p:[{t:"(nohref)"}]},d:{p:[{t:"this region has no action"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-nohref"}}]},noresize:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"}]},c:{p:[{t:"(noresize)"}]},d:{p:[{t:"allow users to resize frames?"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-noresize"}}]},noshade:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"hr"}]},c:{p:[{t:"(noshade)"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-noshade"}}]},nowrap:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"(nowrap)"}]},d:{p:[{t:"suppress word wrap"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-nowrap"}}]},object:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"serialized applet file"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-object"}}]},onblur:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"button"},{t:"input"},{t:"label"},{t:"select"},{t:"textarea"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the element lost the focus"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onblur"}}]},onchange:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"input"},{t:"select"},{t:"textarea"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the element value was changed"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onchange"}}]},onclick:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer button was clicked"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onclick"}}]},ondblclick:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer button was double clicked"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-ondblclick"}}]},onfocus:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"button"},{t:"input"},{t:"label"},{t:"select"},{t:"textarea"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the element got the focus"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onfocus"}}]},onkeydown:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a key was pressed down"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onkeydown"}}]},onkeypress:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a key was pressed and released"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onkeypress"}}]},onkeyup:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a key was released"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onkeyup"}}]},onload:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frameset"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"all the frames have been loaded"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onload"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the document has been loaded"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onload"}}]},onmousedown:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer button was pressed down"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onmousedown"}}]},onmousemove:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer was moved within"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onmousemove"}}]},onmouseout:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer was moved away"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onmouseout"}}]},onmouseover:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer was moved onto"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onmouseover"}}]},onmouseup:{d:[{el:{l:"inline",p:[{t:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"a pointer button was released"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onmouseup"}}]},onreset:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the form was reset"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onreset"}}]},onselect:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"input"},{t:"textarea"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"some text was selected"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onselect"}}]},onsubmit:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"form"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the form was submitted"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onsubmit"}}]},onunload:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frameset"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"all the frames have been removed"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onunload"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Script;"}]},d:{p:[{t:"the document has been removed"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-onunload"}}]},profile:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"head"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"named dictionary of meta info"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-profile"}}]},prompt:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"isindex"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"prompt message"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-prompt"}}]},readonly:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"textarea"}]},c:{p:[{t:"(readonly)"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-readonly"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"(readonly)"}]},d:{p:[{t:"for text and passwd"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-readonly"}}]},rel:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"link"}]},c:{p:[{t:"%LinkTypes;"}]},d:{p:[{t:"forward link types"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H59.html",t:"Using the link element and navigation tools"},{u:"/TR/WCAG20-TECHS/H60.html",t:"Using the link element to link to a glossary"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-rel"}}]},rev:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"link"}]},c:{p:[{t:"%LinkTypes;"}]},d:{p:[{t:"reverse link types"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-rev"}}]},rows:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frameset"}]},c:{p:[{t:"%MultiLengths;"}]},d:{p:[{t:"list of lengths, default: 100% (1 row)"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-rows-FRAMESET"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"textarea"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-rows-TEXTAREA"}}]},rowspan:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"number of rows spanned by cell"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-rowspan"}}]},rules:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%TRules;"}]},d:{p:[{t:"rulings between rows and cols"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-rules"}}]},scheme:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"meta"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"select form of content"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-scheme"}}]},scope:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"%Scope;"}]},d:{p:[{t:"scope covered by header cells"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H63.html",t:"Using the scope attribute to associate header cells and data cells in data tables"},{u:"/TR/WCAG20-TECHS/H43.html",t:"Using id and headers attributes to associate data cells with header cells in data tables"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-scope"}}]},scrolling:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"(yes | no | auto)"}]},d:{p:[{t:"scrollbar or none"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-scrolling"}}]},selected:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"option"}]},c:{p:[{t:"(selected)"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-selected"}}]},shape:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"area"}]},c:{p:[{t:"%Shape;"}]},d:{p:[{t:"controls interpretation of coords"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-shape"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"a"}]},c:{p:[{t:"%Shape;"}]},d:{p:[{t:"for use with client-side image maps"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-shape"}}]},size:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"hr"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-size-HR"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"font"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:'[+|-]nn e.g. size="+1", size="4"'}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-size-FONT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"specific to each type of field"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-size-INPUT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"basefont"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"base font size for FONT elements"}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-size-BASEFONT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"select"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"rows visible"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-size-SELECT"}}]},span:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"col"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"COL attributes affect N columns"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-span-COL"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"colgroup"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"default number of columns in group"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-span-COLGROUP"}}]},src:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"script"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"URI for an external script"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-src-SCRIPT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"for fields with images"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-src"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"frame"},{t:"iframe"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"source of frame content"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-src-FRAME"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"img"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"URI of image to embed"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-src-IMG"}}]},standby:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"message to show while loading"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-standby"}}]},start:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"ol"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"starting sequence number"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-start"}}]},style:{d:[{el:{l:"inline",p:[{t:"all elements but base, basefont, head, html, meta, param, script, style, title"}]},c:{p:[{t:"%StyleSheet;"}]},d:{p:[{t:"associated style info"}]},sp:{u:"/TR/html401/index/../present/styles.html#adef-style"}}]},summary:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"purpose/structure for speech output"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H73.html",t:"Using the summary attribute of the table element to give an overview of data tables"},{u:"/TR/WCAG20-TECHS/H39.html",t:"Using caption elements to associate data table captions with data tables"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-summary"}}]},tabindex:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"button"},{t:"input"},{t:"object"},{t:"select"},{t:"textarea"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"position in tabbing order"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H4.html",t:"Creating a logical tab order through links, form controls, and objects"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#TAB_ORDER",t:"Create a logical order through links, form controls and objects."}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-tabindex"}}]},target:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"area"},{t:"base"},{t:"form"},{t:"link"}]},c:{p:[{t:"%FrameTarget;"}]},d:{p:[{t:"render in this frame"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H83.html",t:"Using the target attribute to open a new window on user request and indicating this in link text"}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#POP_UPS",t:"Do not cause pop-ups or other windows to appear and do not change the current window without informing the user."}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-target"}}]},text:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"document text color"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-text"}}]},title:{d:[{el:{l:"inline",p:[{t:"all elements but base, basefont, head, html, meta, param, script, title"}]},c:{p:[{t:"%Text;"}]},d:{p:[{t:"advisory title"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H64.html",t:"Using the title attribute of the frame and iframe elements"},{u:"/TR/WCAG20-TECHS/H33.html",t:"Supplementing link text with the title attribute"},{u:"/TR/WCAG20-TECHS/H89.html",t:"Using the title attribute to provide context-sensitive help"},{u:"/TR/WCAG20-TECHS/H65.html",t:"Using the title attribute to identify form controls when the label element cannot be used"},{u:"/TR/WCAG20-TECHS/H25.html",t:"Providing a title using the title element"},{u:"/TR/WCAG20-TECHS/H40.html",t:"Using definition lists"},{u:"/TR/WCAG20-TECHS/H91.html",t:"Using HTML form controls and links"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-title"}}]},type:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"a"},{t:"link"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"advisory content type"}]},ac:{u:"/WAI/intro/wcag",p:[{u:"/TR/WCAG20-TECHS/H44.html",t:"Using label elements to associate text labels with form controls"}]},sp:{u:"/TR/html401/index/../struct/links.html#adef-type-A"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"object"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"content type for data"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-type-OBJECT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"param"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"content type for value when valuetype=ref"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-type-PARAM"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"script"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"content type of script language"}]},sp:{u:"/TR/html401/index/../interact/scripts.html#adef-type-SCRIPT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"style"}]},c:{p:[{t:"%ContentType;"}]},d:{p:[{t:"content type of style language"}]},sp:{u:"/TR/html401/index/../present/styles.html#adef-type-STYLE"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"%InputType;"}]},d:{p:[{t:"what kind of widget is needed"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-type-INPUT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"li"}]},c:{p:[{t:"%LIStyle;"}]},d:{p:[{t:"list item style"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-type-LI"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"ol"}]},c:{p:[{t:"%OLStyle;"}]},d:{p:[{t:"numbering style"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-type-OL"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"ul"}]},c:{p:[{t:"%ULStyle;"}]},d:{p:[{t:"bullet style"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-type-UL"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"button"}]},c:{p:[{t:"(button | submit | reset)"}]},d:{p:[{t:"for use as form button"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-type-BUTTON"}}]},usemap:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"img"},{t:"input"},{t:"object"}]},c:{p:[{t:"%URI;"}]},d:{p:[{t:"use client-side image map"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-usemap"}}]},valign:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"col"},{t:"colgroup"},{t:"tbody"},{t:"td"},{t:"tfoot"},{t:"th"},{t:"thead"},{t:"tr"}]},c:{p:[{t:"(top | middle | bottom | baseline)"}]},d:{p:[{t:"vertical alignment in cells"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-valign"}}]},value:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"input"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"Specify for radio buttons and checkboxes"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-value-INPUT"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"option"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"defaults to element content"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-value-OPTION"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"param"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"property value"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-value-PARAM"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"button"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"sent to server when submitted"}]},sp:{u:"/TR/html401/index/../interact/forms.html#adef-value-BUTTON"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"li"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:"reset sequence number"}]},sp:{u:"/TR/html401/index/../struct/lists.html#adef-value-LI"}}]},valuetype:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"param"}]},c:{p:[{t:"(DATA | REF | OBJECT)"}]},d:{p:[{t:"How to interpret value"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-valuetype"}}]},version:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"html"}]},c:{p:[{t:"CDATA"}]},d:{p:[{t:"Constant"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-version"}}]},vlink:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"body"}]},c:{p:[{t:"%Color;"}]},d:{p:[{t:"color of visited links"}]},sp:{u:"/TR/html401/index/../struct/global.html#adef-vlink"}}]},vspace:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"},{t:"img"},{t:"object"}]},c:{p:[{t:"%Pixels;"}]},d:{p:[{t:"vertical gutter"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-vspace"}}]},width:{d:[{el:{y:"e",i:"html",l:"inline",p:[{t:"hr"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:" "}]},m:{l:"block",p:[{u:"/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",t:"Specify the size of images in markup, if they have an intrinsic size."},{u:"/TR/mobile-bp/#IMAGES_RESIZING",t:"Resize images at the server, if they have an intrinsic size."}]},sp:{u:"/TR/html401/index/../present/graphics.html#adef-width-HR"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"iframe"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"frame width"}]},sp:{u:"/TR/html401/index/../present/frames.html#adef-width-IFRAME"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"img"},{t:"object"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"override width"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-width-IMG"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"table"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"table width"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-width-TABLE"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"td"},{t:"th"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"width for cell"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-width-TH"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"applet"}]},c:{p:[{t:"%Length;"}]},d:{p:[{t:"initial width"}]},sp:{u:"/TR/html401/index/../struct/objects.html#adef-width-APPLET"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"col"}]},c:{p:[{t:"%MultiLength;"}]},d:{p:[{t:"column width specification"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-width-COL"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"colgroup"}]},c:{p:[{t:"%MultiLength;"}]},d:{p:[{t:"default width for enclosed COLs"}]},sp:{u:"/TR/html401/index/../struct/tables.html#adef-width-COLGROUP"}},{el:{y:"e",i:"html",l:"inline",p:[{t:"pre"}]},c:{p:[{t:"NUMBER"}]},d:{p:[{t:" "}]},sp:{u:"/TR/html401/index/../struct/text.html#adef-width-PRE"}}]}}};
sources.svg={e:{a:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"target"},{t:"transform"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"The 'a' element may contain any element that its parent may contain"},{t:"except itself.      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/linking.html#AElement"}}]},animate:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"accumulate"},{t:"additive"},{t:"attributeName"},{t:"attributeType"},{t:"begin"},{t:"by"},{t:"calcMode"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"fill"},{t:"from"},{t:"id"},{t:"keySplines"},{t:"keyTimes"},{t:"max"},{t:"min"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"to"},{t:"typeof"},{t:"values"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateElement"}}]},animateColor:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"accumulate"},{t:"additive"},{t:"attributeName"},{t:"attributeType"},{t:"begin"},{t:"by"},{t:"calcMode"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"fill"},{t:"from"},{t:"id"},{t:"keySplines"},{t:"keyTimes"},{t:"max"},{t:"min"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"to"},{t:"typeof"},{t:"values"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateColorElement"}}]},animateMotion:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"accumulate"},{t:"additive"},{t:"begin"},{t:"by"},{t:"calcMode"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"fill"},{t:"from"},{t:"id"},{t:"keyPoints"},{t:"keySplines"},{t:"keyTimes"},{t:"max"},{t:"min"},{t:"origin"},{t:"path"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"rotate"},{t:"systemLanguage"},{t:"to"},{t:"typeof"},{t:"values"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"mpath"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateMotionElement"}}]},animateTransform:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"accumulate"},{t:"additive"},{t:"attributeName"},{t:"attributeType"},{t:"begin"},{t:"by"},{t:"calcMode"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"fill"},{t:"from"},{t:"id"},{t:"keySplines"},{t:"keyTimes"},{t:"max"},{t:"min"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"to"},{t:"type"},{t:"typeof"},{t:"values"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateTransformElement"}}]},animation:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"begin"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"externalResourcesRequired"},{t:"fill"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"initialVisibility"},{t:"max"},{t:"min"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"preserveAspectRatio"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"syncBehavior"},{t:"syncMaster"},{t:"syncTolerance"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AnimationElement"}}]},audio:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"begin"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"externalResourcesRequired"},{t:"fill"},{t:"id"},{t:"max"},{t:"min"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"syncBehavior"},{t:"syncMaster"},{t:"syncTolerance"},{t:"systemLanguage"},{t:"type"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AudioElement"}}]},circle:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"cx"},{t:"cy"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"r"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#CircleElement"}}]},defs:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"foreignObject"},{t:"g"},{t:"handler"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"title"},{t:"use"},{t:"video      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#DefsElement"}}]},desc:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}]},discard:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"begin"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#DiscardElement"}}]},ellipse:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"cx"},{t:"cy"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"rx"},{t:"ry"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#EllipseElement"}}]},font:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"horiz-adv-x"},{t:"horiz-origin-x"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"font-face"},{t:"glyph"},{t:"hkern"},{t:"metadata"},{t:"missing-glyph"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontElement"}}]},"font-face":{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"accent-height"},{t:"alphabetic"},{t:"ascent"},{t:"bbox"},{t:"cap-height"},{t:"class"},{t:"content"},{t:"datatype"},{t:"descent"},{t:"externalResourcesRequired"},{t:"font-family"},{t:"font-stretch"},{t:"font-style"},{t:"font-variant"},{t:"font-weight"},{t:"hanging"},{t:"id"},{t:"ideographic"},{t:"mathematical"},{t:"overline-position"},{t:"overline-thickness"},{t:"panose-1"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"slope"},{t:"stemh"},{t:"stemv"},{t:"strikethrough-position"},{t:"strikethrough-thickness"},{t:"typeof"},{t:"underline-position"},{t:"underline-thickness"},{t:"unicode-range"},{t:"units-per-em"},{t:"widths"},{t:"x-height"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"font-face-src"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceElement"}}]},"font-face-src":{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"font-face-uri"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceSrcElement"}}]},"font-face-uri":{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceUriElement"}}]},foreignObject:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"svg"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/extend.html#ForeignObjectElement"}}]},g:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"foreignObject"},{t:"g"},{t:"handler"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"title"},{t:"use"},{t:"video      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#GElement"}}]},glyph:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"arabic-form"},{t:"class"},{t:"content"},{t:"d"},{t:"datatype"},{t:"glyph-name"},{t:"horiz-adv-x"},{t:"id"},{t:"lang"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"unicode"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#GlyphElement"}}]},handler:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"ev:event"},{t:"externalResourcesRequired"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"type"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>"},{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/script.html#HandlerElement"}}]},hkern:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"g1"},{t:"g2"},{t:"id"},{t:"k"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"u1"},{t:"u2"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#KernElements"}}]},image:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"opacity"},{t:"preserveAspectRatio"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"type"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#ImageElement"}}]},line:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"x1"},{t:"x2"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y1"},{t:"y2"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#LineElement"}}]},linearGradient:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"gradientUnits"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"x1"},{t:"x2"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y1"},{t:"y2"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"metadata"},{t:"set"},{t:"stop"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/painting.html#LinearGradientElement"}}]},listener:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"defaultAction"},{t:"event"},{t:"handler"},{t:"id"},{t:"observer"},{t:"phase"},{t:"propagate"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"target"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/script.html#ListenerElement"}}]},metadata:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/metadata.html#MetadataElement"}}]},"missing-glyph":{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"d"},{t:"datatype"},{t:"horiz-adv-x"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/fonts.html#MissingGlyphElement"}}]},mpath:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#MpathElement"}}]},path:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"d"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"pathLength"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/paths.html#PathElement"}}]},polygon:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"points"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolygonElement"}}]},polyline:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"points"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolylineElement"}}]},prefetch:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"bandwidth"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"mediaCharacterEncoding"},{t:"mediaContentEncodings"},{t:"mediaSize"},{t:"mediaTime"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#PrefetchElement"}}]},radialGradient:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"cx"},{t:"cy"},{t:"datatype"},{t:"gradientUnits"},{t:"id"},{t:"property"},{t:"r"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"metadata"},{t:"set"},{t:"stop"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/painting.html#RadialGradientElement"}}]},rect:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"rx"},{t:"ry"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/shapes.html#RectElement"}}]},script:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"type"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>"},{t:"desc"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/script.html#ScriptElement"}}]},set:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"attributeName"},{t:"attributeType"},{t:"begin"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"fill"},{t:"id"},{t:"max"},{t:"min"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"to"},{t:"typeof"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"desc"},{t:"handler"},{t:"metadata"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/animate.html#SetElement"}}]},solidColor:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/painting.html#SolidColorElement"}}]},stop:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"offset"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/painting.html#StopElement"}}]},svg:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"baseProfile"},{t:"class"},{t:"content"},{t:"contentScriptType"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"playbackOrder"},{t:"preserveAspectRatio"},{t:"property"},{t:"rel"},{t:"resource"},{t:"rev"},{t:"role"},{t:"snapshotTime"},{t:"syncBehaviorDefault"},{t:"syncToleranceDefault"},{t:"timelineBegin"},{t:"typeof"},{t:"version"},{t:"viewBox"},{t:"width"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"zoomAndPan"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"foreignObject"},{t:"g"},{t:"handler"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"title"},{t:"use"},{t:"video      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#SVGElement"}}]},"switch":{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"The 'switch' element may contain any element that its parent may contain.      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#SwitchElement"}}]},tbreak:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"unknown"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/text.html#tbreakElement"}}]},text:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"editable"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"rotate"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"x"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>"},{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title"},{t:"tspan      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/text.html#TextElement"}}]},textArea:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"editable"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>"},{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"title"},{t:"tspan      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/text.html#TextAreaElement"}}]},title:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"id"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"<text>      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}]},tspan:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"typeof"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"The 'tspan' element may contain any element that its parent may contain.      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/text.html#TSpanElement"}}]},use:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"class"},{t:"content"},{t:"datatype"},{t:"externalResourcesRequired"},{t:"focusHighlight"},{t:"focusable"},{t:"id"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"property"},{t:"rel"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"rev"},{t:"role"},{t:"systemLanguage"},{t:"transform"},{t:"typeof"},{t:"x"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{p:[{t:"all"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/struct.html#UseElement"}}]},video:{d:[{at:{y:"a",i:"svg",l:"inline",p:[{t:"about"},{t:"begin"},{t:"class"},{t:"content"},{t:"datatype"},{t:"dur"},{t:"end"},{t:"externalResourcesRequired"},{t:"fill"},{t:"focusHighlight"},{t:"focusable"},{t:"height"},{t:"id"},{t:"initialVisibility"},{t:"max"},{t:"min"},{t:"nav-down"},{t:"nav-down-left"},{t:"nav-down-right"},{t:"nav-left"},{t:"nav-next"},{t:"nav-prev"},{t:"nav-right"},{t:"nav-up"},{t:"nav-up-left"},{t:"nav-up-right"},{t:"overlay"},{t:"preserveAspectRatio"},{t:"property"},{t:"rel"},{t:"repeatCount"},{t:"repeatDur"},{t:"requiredExtensions"},{t:"requiredFeatures"},{t:"requiredFonts"},{t:"requiredFormats"},{t:"resource"},{t:"restart"},{t:"rev"},{t:"role"},{t:"syncBehavior"},{t:"syncMaster"},{t:"syncTolerance"},{t:"systemLanguage"},{t:"transform"},{t:"transformBehavior"},{t:"type"},{t:"typeof"},{t:"width"},{t:"x"},{t:"xlink:actuate"},{t:"xlink:arcrole"},{t:"xlink:href"},{t:"xlink:role"},{t:"xlink:show"},{t:"xlink:title"},{t:"xlink:type"},{t:"xml:base"},{t:"xml:id"},{t:"xml:lang"},{t:"xml:space"},{t:"y"}]},pr:{y:"p",i:"svg",l:"inline",p:[{t:"audio-level"},{t:"buffered-rendering"},{t:"display"},{t:"image-rendering"},{t:"pointer-events"},{t:"shape-rendering"},{t:"text-rendering"},{t:"viewport-fill"},{t:"viewport-fill-opacity"},{t:"visibility"}]},k:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"desc"},{t:"discard"},{t:"handler"},{t:"metadata"},{t:"set"},{t:"switch"},{t:"title      "}]},sp:{u:"/TR/2008/REC-SVGTiny12-20081222/multimedia.html#VideoElement"}}]}},p:{"audio-level":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/multimedia.html#AudioLevelProperty"}}]},"buffered-rendering":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'dynamic' | 'static' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#BufferedRenderingProperty"}}]},color:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<color> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#ColorProperty"}}]},"color-rendering":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#ColorRenderingProperty"}}]},direction:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'ltr' | 'rtl' | 'inherit'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#DirectionProperty"}}]},display:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'inline' | 'block' | 'list-item' | 'run-in' | 'compact' | 'marker' | 'table' | 'inline-table' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-column-group' | 'table-column' | 'table-cell' | 'table-caption' | 'none' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#DisplayProperty"}}]},"display-align":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'before' | 'center' | 'after' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#DisplayAlignProperty"}}]},fill:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<paint> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#FillProperty"}}]},"fill-opacity":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#FillOpacityProperty"}}]},"fill-rule":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'nonzero' | 'evenodd' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#FillRuleProperty"}}]},"font-family":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<font-family-value> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#FontFamilyProperty"}}]},"font-size":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<font-size-value> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#FontSizeProperty"}}]},"font-style":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'normal' | 'italic' | 'oblique' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#FontStyleProperty"}}]},"font-variant":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'normal' | 'small-caps' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#FontVariantProperty"}}]},"font-weight":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#FontWeightProperty"}}]},"image-rendering":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#ImageRenderingProperty"}}]},"line-increment":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | <number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#LineIncrementProperty"}}]},opacity:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#groupOpacity"}}]},"pointer-events":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/interact.html#PointerEventsProperty"}}]},"shape-rendering":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#ShapeRenderingProperty"}}]},"solid-color":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<color> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#SolidColorProperty"}}]},"solid-opacity":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#SolidOpacityProperty"}}]},"stop-color":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<color> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#StopColorProperty"}}]},"stop-opacity":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#StopOpacityProperty"}}]},stroke:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<paint> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeProperty"}}]},"stroke-dasharray":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'none' | <list-of-lengths> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeDasharrayProperty"}}]},"stroke-dashoffset":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<length> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeDashoffsetProperty"}}]},"stroke-linecap":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'butt' | 'round' | 'square' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeLinecapProperty"}}]},"stroke-linejoin":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'miter' | 'round' | 'bevel' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeLinejoinProperty"}}]},"stroke-miterlimit":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeMiterlimitProperty"}}]},"stroke-opacity":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeOpacityProperty"}}]},"stroke-width":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<length> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#StrokeWidthProperty"}}]},"text-align":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'start' | 'center' | 'end' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#TextAlignProperty"}}]},"text-anchor":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'start' | 'middle' | 'end' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/text.html#TextAnchorProperty"}}]},"text-rendering":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#TextRenderingProperty"}}]},"unicode-bidi":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'normal' | 'embed' | 'bidi-override' | 'inherit'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/text.html#UnicodeBidiProperty"}}]},"vector-effect":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'none' | 'non-scaling-stroke' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#NonScalingStroke"}}]},"viewport-fill":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'none' | <color> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#viewport-fill-property"}}]},"viewport-fill-opacity":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"<number> | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/painting.html#viewport-fill-opacity-property"}}]},visibility:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"circle"},{t:"defs"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"line"},{t:"linearGradient"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"radialGradient"},{t:"rect"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"}]},c:{p:[{t:"'visible' | 'hidden' | 'inherit'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"true"}]},sp:{u:"/TR/SVGTiny12/painting.html#VisibilityProperty"}}]}},a:{about:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"accent-height":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},accumulate:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"'none' | 'sum'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},additive:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"'replace' | 'sum'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},alphabetic:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"arabic-form":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"glyph"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},ascent:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},attributeName:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateTransform"},{t:"set"}]},c:{p:[{t:"<QName>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},attributeType:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateTransform"},{t:"set"}]},c:{p:[{t:"'XML' | 'CSS' | 'auto'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},bandwidth:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"prefetch"}]},c:{p:[{t:"<number> | 'auto'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#struct-PrefetchElementBandwidthAttribute"}}]},baseProfile:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'none' | 'tiny' | 'basic' | 'full'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},bbox:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},begin:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},by:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},calcMode:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"'discrete' | 'linear' | 'paced' | 'spline'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"cap-height":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"class":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<XML-NMTOKENS>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},content:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<string>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},contentScriptType:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"<content-type>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},cx:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"circle"},{t:"ellipse"},{t:"radialGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},cy:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"circle"},{t:"ellipse"},{t:"radialGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},d:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"glyph"},{t:"missing-glyph"},{t:"path"}]},c:{p:[{t:"<path-data>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},datatype:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<string>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},defaultAction:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"'perform' | 'cancel'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},descent:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},dur:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},editable:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"text"},{t:"textArea"}]},c:{p:[{t:"'none' | 'simple'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},end:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"ev:event":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"handler"}]},c:{p:[{t:"<XML-NMTOKEN>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},event:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"<XML-NMTOKEN>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},externalResourcesRequired:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"audio"},{t:"font"},{t:"font-face"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"handler"},{t:"image"},{t:"script"},{t:"svg"},{t:"switch"},{t:"use"},{t:"video"}]},c:{p:[{t:"<boolean>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},fill:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"'remove' | 'freeze'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},focusHighlight:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"'auto' | 'none'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},focusable:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"'auto' | <boolean>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"font-family":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"font-stretch":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"font-style":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"font-variant":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"font-weight":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},from:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},g1:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"hkern"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},g2:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"hkern"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"glyph-name":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"glyph"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},gradientUnits:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"linearGradient"},{t:"radialGradient"}]},c:{p:[{t:"'userSpaceOnUse' | 'objectBoundingBox'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},handler:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"<IRI>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},hanging:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},height:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"foreignObject"},{t:"image"},{t:"rect"},{t:"svg"},{t:"video"}]},c:{p:[{t:"<length>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"textArea"}]},c:{p:[{t:"<length> | 'auto'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#text-TextAreaElementHeightAttribute"}}]},"horiz-adv-x":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font"},{t:"glyph"},{t:"missing-glyph"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"horiz-origin-x":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},id:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<ID> | <NCName>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},ideographic:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},initialVisibility:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"video"}]},c:{p:[{t:"'whenStarted' | 'always'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},k:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"hkern"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},keyPoints:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animateMotion"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},keySplines:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},keyTimes:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},lang:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"glyph"}]},c:{p:[{t:"<list-of-language-ids>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#fonts-GlyphElementLangAttribute"}}]},mathematical:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},max:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},mediaCharacterEncoding:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"prefetch"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaCharacterEncodingAttribute"}}]},mediaContentEncodings:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"prefetch"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaContentEncodingsAttribute"}}]},mediaSize:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"prefetch"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaSizeAttribute"}}]},mediaTime:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"prefetch"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaTimeAttribute"}}]},min:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"nav-down":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-down-left":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-down-right":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-left":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-next":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-prev":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-right":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-up":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-up-left":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"nav-up-right":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"svg"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<focus>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},observer:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"<IDREF>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},offset:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"stop"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},origin:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animateMotion"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},overlay:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"video"}]},c:{p:[{t:"'none' | 'top'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#multimedia-VideoElementOverlayAttribute"}}]},"overline-position":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"overline-thickness":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"panose-1":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},path:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animateMotion"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},pathLength:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"path"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},phase:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"'default' | 'capture'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},playbackOrder:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'all' | 'forwardOnly'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},points:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"polygon"},{t:"polyline"}]},c:{p:[{t:"<points-data>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},preserveAspectRatio:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"image"},{t:"svg"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},propagate:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"'continue' | 'stop'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},property:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},r:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"circle"},{t:"radialGradient"}]},c:{p:[{t:"<length>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},rel:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},repeatCount:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},repeatDur:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},requiredExtensions:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-IRIs>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},requiredFeatures:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-IRIs>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},requiredFonts:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-family-names>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},requiredFormats:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-content-types>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},resource:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<string>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},restart:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"set"},{t:"video"}]},c:{p:[{t:"'always' | 'never' | 'whenNotActive'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},rev:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},role:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},rotate:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animateMotion"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"text"}]},c:{p:[{t:"<list-of-numbers>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#text-TextElementRotateAttribute"}}]},rx:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"ellipse"},{t:"rect"}]},c:{p:[{t:"<length>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},ry:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"ellipse"},{t:"rect"}]},c:{p:[{t:"<length>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},slope:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},snapshotTime:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'none' | <Clock-value>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},stemh:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},stemv:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"strikethrough-position":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"strikethrough-thickness":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},syncBehavior:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"audio"},{t:"video"}]},c:{p:[{t:"'canSlip' | 'locked' | 'independent' | 'default'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},syncBehaviorDefault:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'canSlip' | 'locked' | 'independent' | 'inherit'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},syncMaster:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"audio"},{t:"video"}]},c:{p:[{t:"<boolean>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},syncTolerance:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"audio"},{t:"video"}]},c:{p:[{t:"<Clock-value> | 'default'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},syncToleranceDefault:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"<Clock-value> | 'inherit'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},systemLanguage:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"metadata"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"set"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-language-ids>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},target:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"}]},c:{p:[{t:"'_replace' | '_self' | '_parent' | '_top' | '_blank' | <XML-Name>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#linking-AElementTargetAttribute"}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"listener"}]},c:{p:[{t:"<IDREF>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},timelineBegin:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'onLoad' | 'onStart'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},to:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"set"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},transform:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animation"},{t:"circle"},{t:"ellipse"},{t:"foreignObject"},{t:"g"},{t:"image"},{t:"line"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"rect"},{t:"switch"},{t:"text"},{t:"textArea"},{t:"use"},{t:"video"}]},c:{p:[{t:"<transform> | 'none'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},transformBehavior:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"video"}]},c:{p:[{t:"'geometric' | 'pinned' | 'pinned90' | 'pinned180' | 'pinned270'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},type:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"handler"},{t:"script"}]},c:{p:[{t:"<content-type>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"audio"},{t:"image"},{t:"video"}]},c:{p:[{t:"<content-type>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"animateTransform"}]},c:{p:[{t:"'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#animate-AnimateTransformElementTypeAttribute"}}]},"typeof":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<list-of-strings>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},u1:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"hkern"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},u2:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"hkern"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"underline-position":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"underline-thickness":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},unicode:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"glyph"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#fonts-GlyphElementUnicodeAttribute"}}]},"unicode-range":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"units-per-em":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},values:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},version:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'1.0' | '1.1' | '1.2'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},viewBox:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},width:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"foreignObject"},{t:"image"},{t:"rect"},{t:"svg"},{t:"video"}]},c:{p:[{t:"<length>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"textArea"}]},c:{p:[{t:"<length> | 'auto'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#text-TextAreaElementWidthAttribute"}}]},widths:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},x:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"foreignObject"},{t:"image"},{t:"rect"},{t:"textArea"},{t:"use"},{t:"video"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"text"}]},c:{p:[{t:"<list-of-coordinates>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#text-TextElementXAttribute"}}]},"x-height":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"font-face"}]},c:{p:[{t:"<number>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},x1:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"line"},{t:"linearGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},x2:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"line"},{t:"linearGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"xlink:actuate":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"'onLoad'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"}]},c:{p:[{t:"'onRequest'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"xlink:arcrole":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"<IRI>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xlink:href":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"<IRI>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"xlink:role":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"<IRI>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xlink:show":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"discard"},{t:"font-face-uri"},{t:"handler"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"}]},c:{p:[{t:"'other'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"audio"},{t:"foreignObject"},{t:"image"},{t:"use"},{t:"video"}]},c:{p:[{t:"'embed'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"}]},c:{p:[{t:"'new' | 'replace'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]},"xlink:title":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"<text>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xlink:type":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"discard"},{t:"font-face-uri"},{t:"foreignObject"},{t:"handler"},{t:"image"},{t:"mpath"},{t:"prefetch"},{t:"script"},{t:"set"},{t:"use"},{t:"video"}]},c:{p:[{t:"'simple'"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},"xml:base":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<IRI>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xml:id":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<NCName>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xml:lang":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"handler"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"script"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"<language-id>"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},"xml:space":{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"a"},{t:"animate"},{t:"animateColor"},{t:"animateMotion"},{t:"animateTransform"},{t:"animation"},{t:"audio"},{t:"circle"},{t:"defs"},{t:"desc"},{t:"discard"},{t:"ellipse"},{t:"font"},{t:"font-face"},{t:"font-face-src"},{t:"font-face-uri"},{t:"foreignObject"},{t:"g"},{t:"glyph"},{t:"hkern"},{t:"image"},{t:"line"},{t:"linearGradient"},{t:"listener"},{t:"metadata"},{t:"missing-glyph"},{t:"mpath"},{t:"path"},{t:"polygon"},{t:"polyline"},{t:"prefetch"},{t:"radialGradient"},{t:"rect"},{t:"set"},{t:"solidColor"},{t:"stop"},{t:"svg"},{t:"switch"},{t:"tbreak"},{t:"text"},{t:"textArea"},{t:"title"},{t:"tspan"},{t:"use"},{t:"video"}]},c:{p:[{t:"'default' | 'preserve'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"handler"},{t:"script"}]},c:{p:[{t:"'preserve'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]}}]},y:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"animation"},{t:"foreignObject"},{t:"image"},{t:"rect"},{t:"textArea"},{t:"use"},{t:"video"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}},{el:{y:"e",i:"svg",l:"inline",p:[{t:"text"}]},c:{p:[{t:"<list-of-coordinates>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#text-TextElementYAttribute"}}]},y1:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"line"},{t:"linearGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},y2:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"line"},{t:"linearGradient"}]},c:{p:[{t:"<coordinate>"}]},an:{p:[{t:"true"}]},ih:{p:[{t:"false"}]}}]},zoomAndPan:{d:[{el:{y:"e",i:"svg",l:"inline",p:[{t:"svg"}]},c:{p:[{t:"'disable' | 'magnify'"}]},an:{p:[{t:"false"}]},ih:{p:[{t:"false"}]},sp:{u:"/TR/SVGTiny12/single-page.html#"}}]}}};
sources.css={p:{azimuth:{d:[{v:{p:[{t:"<angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-azimuth"}}]},"background-attachment":{d:[{v:{p:[{t:"scroll | fixed | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background-attachment"}}]},"background-color":{d:[{v:{p:[{t:"<color> | transparent | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background-color"}}]},"background-image":{d:[{v:{p:[{t:"<uri> | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background-image"}}]},"background-position":{d:[{v:{p:[{t:"[ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to the size of the box itself"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background-position"}}]},"background-repeat":{d:[{v:{p:[{t:"repeat | repeat-x | repeat-y | no-repeat | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background-repeat"}}]},background:{d:[{v:{p:[{t:"['background-color' || 'background-image' || 'background-repeat' || 'background-attachment' || 'background-position'] | inherit"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"allowed on 'background-position'"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-background"}}]},"border-collapse":{d:[{v:{p:[{t:"collapse | separate | inherit"}]},ap:{p:[{t:"'table' and 'inline-table' elements"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/tables.html#propdef-border-collapse"}}]},"border-color":{d:[{v:{p:[{t:"[ <color> | transparent ]{1,4} | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-color"}}]},"border-spacing":{d:[{v:{p:[{t:"<length> <length>? | inherit"}]},ap:{p:[{t:"'table' and 'inline-table' elements "}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/tables.html#propdef-border-spacing"}}]},"border-style":{d:[{v:{p:[{t:"<border-style>{1,4} | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-style"}}]},"border-top":{d:[{v:{p:[{t:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-top"}}]},"border-right":{d:[{v:{p:[{t:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-right"}}]},"border-bottom":{d:[{v:{p:[{t:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-bottom"}}]},"border-left":{d:[{v:{p:[{t:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-left"}}]},"border-top-color":{d:[{v:{p:[{t:"<color> | transparent | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-top-color"}}]},"border-right-color":{d:[{v:{p:[{t:"<color> | transparent | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-right-color"}}]},"border-bottom-color":{d:[{v:{p:[{t:"<color> | transparent | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-bottom-color"}}]},"border-left-color":{d:[{v:{p:[{t:"<color> | transparent | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-left-color"}}]},"border-top-style":{d:[{v:{p:[{t:"<border-style> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-top-style"}}]},"border-right-style":{d:[{v:{p:[{t:"<border-style> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-right-style"}}]},"border-bottom-style":{d:[{v:{p:[{t:"<border-style> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-bottom-style"}}]},"border-left-style":{d:[{v:{p:[{t:"<border-style> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-left-style"}}]},"border-top-width":{d:[{v:{p:[{t:"<border-width> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-top-width"}}]},"border-right-width":{d:[{v:{p:[{t:"<border-width> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-right-width"}}]},"border-bottom-width":{d:[{v:{p:[{t:"<border-width> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-bottom-width"}}]},"border-left-width":{d:[{v:{p:[{t:"<border-width> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-left-width"}}]},"border-width":{d:[{v:{p:[{t:"<border-width>{1,4} | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border-width"}}]},border:{d:[{v:{p:[{t:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-border"}}]},bottom:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"positioned elements"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to height of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-bottom"}}]},"caption-side":{d:[{v:{p:[{t:"top | bottom | inherit"}]},ap:{p:[{t:"'table-caption' elements"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/tables.html#propdef-caption-side"}}]},clear:{d:[{v:{p:[{t:"none | left | right | both | inherit"}]},ap:{p:[{t:"block-level elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-clear"}}]},clip:{d:[{v:{p:[{t:"<shape> | auto | inherit"}]},ap:{p:[{t:"absolutely positioned elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visufx.html#propdef-clip"}}]},color:{d:[{v:{p:[{t:"<color> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/colors.html#propdef-color"}}]},content:{d:[{v:{p:[{t:"normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit"}]},ap:{p:[{t:":before and :after pseudo-elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"all"}]},sp:{u:"/TR/CSS2/generate.html#propdef-content"}}]},"counter-increment":{d:[{v:{p:[{t:"[ <identifier> <integer>? ]+ | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"all"}]},sp:{u:"/TR/CSS2/generate.html#propdef-counter-increment"}}]},"counter-reset":{d:[{v:{p:[{t:"[ <identifier> <integer>? ]+ | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"all"}]},sp:{u:"/TR/CSS2/generate.html#propdef-counter-reset"}}]},"cue-after":{d:[{v:{p:[{t:"<uri> | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-cue-after"}}]},"cue-before":{d:[{v:{p:[{t:"<uri> | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-cue-before"}}]},cue:{d:[{v:{p:[{t:"[ 'cue-before' || 'cue-after' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-cue"}}]},cursor:{d:[{v:{p:[{t:"[ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual, interactive"}]},sp:{u:"/TR/CSS2/ui.html#propdef-cursor"}}]},direction:{d:[{v:{p:[{t:"ltr | rtl | inherit"}]},ap:{p:[{t:"all elements, but see prose"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-direction"}}]},display:{d:[{v:{p:[{t:"inline | block | list-item | run-in | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"all"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-display"}}]},elevation:{d:[{v:{p:[{t:"<angle> | below | level | above | higher | lower | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-elevation"}}]},"empty-cells":{d:[{v:{p:[{t:"show | hide | inherit"}]},ap:{p:[{t:"'table-cell' elements"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/tables.html#propdef-empty-cells"}}]},"float":{d:[{v:{p:[{t:"left | right | none | inherit"}]},ap:{p:[{t:"all, but see 9.7"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-float"}}]},"font-family":{d:[{v:{p:[{t:"[[ <family-name> | <generic-family> ] [, <family-name>| <generic-family>]* ] | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font-family"}}]},"font-size":{d:[{v:{p:[{t:"<absolute-size> | <relative-size> | <length> | <percentage> | inherit"}]},ih:{p:[{t:"yes"}]},pe:{p:[{t:"refer to parent element's font size"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font-size"}}]},"font-style":{d:[{v:{p:[{t:"normal | italic | oblique | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font-style"}}]},"font-variant":{d:[{v:{p:[{t:"normal | small-caps | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font-variant"}}]},"font-weight":{d:[{v:{p:[{t:"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font-weight"}}]},font:{d:[{v:{p:[{t:"[ [ 'font-style' || 'font-variant' || 'font-weight' ]? 'font-size' [ / 'line-height' ]? 'font-family' ] | caption | icon | menu | message-box | small-caption | status-bar | inherit"}]},ih:{p:[{t:"yes"}]},pe:{p:[{t:"see individual properties"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/fonts.html#propdef-font"}}]},height:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table columns, and column groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see prose"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-height"}}]},left:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"positioned elements"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-left"}}]},"letter-spacing":{d:[{v:{p:[{t:"normal | <length> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-letter-spacing"}}]},"line-height":{d:[{v:{p:[{t:"normal | <number> | <length> | <percentage> | inherit"}]},ih:{p:[{t:"yes"}]},pe:{p:[{t:"refer to the font size of the element itself"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-line-height"}}]},"list-style-image":{d:[{v:{p:[{t:"<uri> | none | inherit"}]},ap:{p:[{t:"elements with 'display: list-item'"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/generate.html#propdef-list-style-image"}}]},"list-style-position":{d:[{v:{p:[{t:"inside | outside | inherit"}]},ap:{p:[{t:"elements with 'display: list-item'"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/generate.html#propdef-list-style-position"}}]},"list-style-type":{d:[{v:{p:[{t:"disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit"}]},ap:{p:[{t:"elements with 'display: list-item'"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/generate.html#propdef-list-style-type"}}]},"list-style":{d:[{v:{p:[{t:"[ 'list-style-type' || 'list-style-position' || 'list-style-image' ] | inherit"}]},ap:{p:[{t:"elements with 'display: list-item'"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/generate.html#propdef-list-style"}}]},"margin-right":{d:[{v:{p:[{t:"<margin-width> | inherit"}]},ap:{p:[{t:"all elements except elements with table display types other than table-caption, table and inline-table"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-margin-right"}}]},"margin-left":{d:[{v:{p:[{t:"<margin-width> | inherit"}]},ap:{p:[{t:"all elements except elements with table display types other than table-caption, table and inline-table"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-margin-left"}}]},"margin-top":{d:[{v:{p:[{t:"<margin-width> | inherit"}]},ap:{p:[{t:"all elements except elements with table display types other than table-caption, table and inline-table"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-margin-top"}}]},"margin-bottom":{d:[{v:{p:[{t:"<margin-width> | inherit"}]},ap:{p:[{t:"all elements except elements with table display types other than table-caption, table and inline-table"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-margin-bottom"}}]},margin:{d:[{v:{p:[{t:"<margin-width>{1,4} | inherit"}]},ap:{p:[{t:"all elements except elements with table display types other than table-caption, table and inline-table"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-margin"}}]},"max-height":{d:[{v:{p:[{t:"<length> | <percentage> | none | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table columns, and column groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see prose"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-max-height"}}]},"max-width":{d:[{v:{p:[{t:"<length> | <percentage> | none | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table rows, and row groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-max-width"}}]},"min-height":{d:[{v:{p:[{t:"<length> | <percentage> | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table columns, and column groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see prose"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-min-height"}}]},"min-width":{d:[{v:{p:[{t:"<length> | <percentage> | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table rows, and row groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-min-width"}}]},orphans:{d:[{v:{p:[{t:"<integer> | inherit"}]},ap:{p:[{t:"block-level elements"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual, paged"}]},sp:{u:"/TR/CSS2/page.html#propdef-orphans"}}]},"outline-color":{d:[{v:{p:[{t:"<color> | invert | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, interactive"}]},sp:{u:"/TR/CSS2/ui.html#propdef-outline-color"}}]},"outline-style":{d:[{v:{p:[{t:"<border-style> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, interactive"}]},sp:{u:"/TR/CSS2/ui.html#propdef-outline-style"}}]},"outline-width":{d:[{v:{p:[{t:"<border-width> | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, interactive"}]},sp:{u:"/TR/CSS2/ui.html#propdef-outline-width"}}]},outline:{d:[{v:{p:[{t:"[ 'outline-color' || 'outline-style' || 'outline-width' ] | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, interactive"}]},sp:{u:"/TR/CSS2/ui.html#propdef-outline"}}]},overflow:{d:[{v:{p:[{t:"visible | hidden | scroll | auto | inherit"}]},ap:{p:[{t:"non-replaced block-level elements, table cells, and inline-block elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visufx.html#propdef-overflow"}}]},"padding-top":{d:[{v:{p:[{t:"<padding-width> | inherit"}]},ap:{p:[{t:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-padding-top"}}]},"padding-right":{d:[{v:{p:[{t:"<padding-width> | inherit"}]},ap:{p:[{t:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-padding-right"}}]},"padding-bottom":{d:[{v:{p:[{t:"<padding-width> | inherit"}]},ap:{p:[{t:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-padding-bottom"}}]},"padding-left":{d:[{v:{p:[{t:"<padding-width> | inherit"}]},ap:{p:[{t:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-padding-left"}}]},padding:{d:[{v:{p:[{t:"<padding-width>{1,4} | inherit"}]},ap:{p:[{t:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/box.html#propdef-padding"}}]},"page-break-after":{d:[{v:{p:[{t:"auto | always | avoid | left | right | inherit"}]},ap:{p:[{t:"block-level elements (but see text)"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, paged"}]},sp:{u:"/TR/CSS2/page.html#propdef-page-break-after"}}]},"page-break-before":{d:[{v:{p:[{t:"auto | always | avoid | left | right | inherit"}]},ap:{p:[{t:"block-level elements (but see text)"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, paged"}]},sp:{u:"/TR/CSS2/page.html#propdef-page-break-before"}}]},"page-break-inside":{d:[{v:{p:[{t:"avoid | auto | inherit"}]},ap:{p:[{t:"block-level elements (but see text)"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual, paged"}]},sp:{u:"/TR/CSS2/page.html#propdef-page-break-inside"}}]},"pause-after":{d:[{v:{p:[{t:"<time> | <percentage> | inherit"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see prose"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-pause-after"}}]},"pause-before":{d:[{v:{p:[{t:"<time> | <percentage> | inherit"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see prose"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-pause-before"}}]},pause:{d:[{v:{p:[{t:"[ [<time> | <percentage>]{1,2} ] | inherit"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"see descriptions of 'pause-before' and 'pause-after'"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-pause"}}]},"pitch-range":{d:[{v:{p:[{t:"<number> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-pitch-range"}}]},pitch:{d:[{v:{p:[{t:"<frequency> | x-low | low | medium | high | x-high | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-pitch"}}]},"play-during":{d:[{v:{p:[{t:"<uri> [ mix || repeat ]? | auto | none | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-play-during"}}]},position:{d:[{v:{p:[{t:"static | relative | absolute | fixed | inherit"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-position"}}]},quotes:{d:[{v:{p:[{t:"[<string> <string>]+ | none | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/generate.html#propdef-quotes"}}]},richness:{d:[{v:{p:[{t:"<number> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-richness"}}]},right:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"positioned elements"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-right"}}]},"speak-header":{d:[{v:{p:[{t:"once | always | inherit"}]},ap:{p:[{t:"elements that have table header information"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-speak-header"}}]},"speak-numeral":{d:[{v:{p:[{t:"digits | continuous | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-speak-numeral"}}]},"speak-punctuation":{d:[{v:{p:[{t:"code | none | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-speak-punctuation"}}]},speak:{d:[{v:{p:[{t:"normal | none | spell-out | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-speak"}}]},"speech-rate":{d:[{v:{p:[{t:"<number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-speech-rate"}}]},stress:{d:[{v:{p:[{t:"<number> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-stress"}}]},"table-layout":{d:[{v:{p:[{t:"auto | fixed | inherit"}]},ap:{p:[{t:"'table' and 'inline-table' elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/tables.html#propdef-table-layout"}}]},"text-align":{d:[{v:{p:[{t:"left | right | center | justify | inherit"}]},ap:{p:[{t:"block-level elements, table cells and inline blocks"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-text-align"}}]},"text-decoration":{d:[{v:{p:[{t:"none | [ underline || overline || line-through || blink ] | inherit"}]},ih:{p:[{t:"no (see prose)"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-text-decoration"}}]},"text-indent":{d:[{v:{p:[{t:"<length> | <percentage> | inherit"}]},ap:{p:[{t:"block-level elements, table cells and inline blocks"}]},ih:{p:[{t:"yes"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-text-indent"}}]},"text-transform":{d:[{v:{p:[{t:"capitalize | uppercase | lowercase | none | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-text-transform"}}]},top:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"positioned elements"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to height of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-top"}}]},"unicode-bidi":{d:[{v:{p:[{t:"normal | embed | bidi-override | inherit"}]},ap:{p:[{t:"all elements, but see prose"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-unicode-bidi"}}]},"vertical-align":{d:[{v:{p:[{t:"baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit"}]},ap:{p:[{t:"inline-level and 'table-cell' elements"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to the 'line-height' of the element itself"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-vertical-align"}}]},visibility:{d:[{v:{p:[{t:"visible | hidden | collapse | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visufx.html#propdef-visibility"}}]},"voice-family":{d:[{v:{p:[{t:"[[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-voice-family"}}]},volume:{d:[{v:{p:[{t:"<number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit"}]},ih:{p:[{t:"yes"}]},pe:{p:[{t:"refer to inherited value"}]},me:{p:[{t:"aural"}]},sp:{u:"/TR/CSS2/aural.html#propdef-volume"}}]},"white-space":{d:[{v:{p:[{t:"normal | pre | nowrap | pre-wrap | pre-line | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-white-space"}}]},widows:{d:[{v:{p:[{t:"<integer> | inherit"}]},ap:{p:[{t:"block-level elements"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual, paged"}]},sp:{u:"/TR/CSS2/page.html#propdef-widows"}}]},width:{d:[{v:{p:[{t:"<length> | <percentage> | auto | inherit"}]},ap:{p:[{t:"all elements but non-replaced inline elements, table rows, and row groups"}]},ih:{p:[{t:"no"}]},pe:{p:[{t:"refer to width of containing block"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visudet.html#propdef-width"}}]},"word-spacing":{d:[{v:{p:[{t:"normal | <length> | inherit"}]},ih:{p:[{t:"yes"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/text.html#propdef-word-spacing"}}]},"z-index":{d:[{v:{p:[{t:"auto | <integer> | inherit"}]},ap:{p:[{t:"positioned elements"}]},ih:{p:[{t:"no"}]},me:{p:[{t:"visual"}]},sp:{u:"/TR/CSS2/visuren.html#propdef-z-index"}}]}},se:{selectors:{d:[{pt:{y:"se",i:"css",p:[{t:"*"}]},n:{p:[{t:"Universal selector"}]},d:{p:[{t:"Matches any element"}]}},{pt:{p:[{t:"E"}]},n:{p:[{t:"Type selector"}]},d:{p:[{t:"Matches any E element (i.e., an element of type E)"}]}},{pt:{p:[{t:"E F"}]},n:{p:[{t:"Descendant selector"}]},d:{p:[{t:"Matches any F element that is a descendant of an E element"}]}},{pt:{p:[{t:"E > F"}]},n:{p:[{t:"Child selector"}]},d:{p:[{t:"Matches any F element that is a child of an E element"}]}},{pt:{p:[{t:"E + F"}]},n:{p:[{t:"Adjacent selector"}]},d:{p:[{t:"Matches any F element immediately preceded by a sibling element E"}]}},{pt:{p:[{t:"#myid"}]},n:{p:[{t:"ID selector"}]},d:{p:[{t:'Matches any element with ID equal to "myid".'}]}},{pt:{p:[{t:".warning"}]},n:{p:[{t:"Class selector"}]},d:{p:[{t:["In HTML, matches any element whose ",{y:"a",i:"html",t:"class"},' attribute is a list of space-separated values, one of which is exactly equal to "warning"']}]}},{pt:{p:[{t:"E[foo]"}]},n:{p:[{t:"Attribute selector"}]},d:{p:[{t:'Matches any E element with the "foo" attribute set (whatever the value)'}]}},{pt:{p:[{t:'E[foo="warning"]'}]},n:{p:[{t:"Attribute selector"}]},d:{p:[{t:'Matches any E element whose "foo" attribute value is exactly equal to "warning"'}]}},{pt:{p:[{t:'E[foo~="warning"]'}]},n:{p:[{t:"Attribute selector"}]},d:{p:[{t:'Matches any E element whose "foo" attribute value is a list of space-separated values, one of which is exactly equal to "warning"'}]}},{pt:{p:[{t:"E[lang|=en]"}]},n:{p:[{t:"Attribute selector"}]},d:{p:[{t:'Matches any E element whose "lang" attribute has a hyphen-separated list of values beginning (from the left) with "en"'}]}},{pt:{p:[{t:["E",{y:"se",i:"css",t:":first-child"},"                "]}]}},{pt:{p:[{t:["E",{y:"se",i:"css",t:":link"},"                "]}]}},{pt:{p:[{t:["E",{y:"se",i:"css",t:":visited"},"                "]}]}},{pt:{p:[{t:["E",{y:"se",i:"css",t:":active"}," | E",{y:"se",i:"css",t:":hover"}," | E",{y:"se",i:"css",t:":focus"},"                "]}]}},{pt:{p:[{t:["E",{y:"se",i:"css",t:":lang()"},"                "]}]}}]},"*":{d:[{n:{p:[{t:"Universal selector"}]},d:{p:[{t:"matches the name of any element type"}]}}]},":lang()":{d:[{pt:{p:[{t:"E:lang(c)"}]},n:{p:[{t:"lang() pseudo-class"}]},d:{p:[{t:"Matches element E if it is in (human) language c (the document language specifies how language is determined)"}]},i:{p:[{t:' link="http://www.w3.org/International/questions/qa-css-lang">Styling using the lang attribute'}]}}]},":first-child":{d:[{pt:{p:[{t:"E:first-child"}]},n:{p:[{t:"first-child pseudo-class"}]},d:{p:[{t:"Matches element E when E is the first child of its parent"}]}}]},":link":{d:[{pt:{p:[{t:"E:link"}]},n:{p:[{t:"link pseudo-class"}]},d:{p:[{t:"Matches element E if E is the source anchor of a hyperlink of which the target is not yet visited"}]}}]},visited:{d:[{pt:{p:[{t:"E:visited"}]},n:{p:[{t:"link pseudo-class"}]},d:{p:[{t:"Matches element E if E is the source anchor of a hyperlink of which the target is already visited"}]}}]},":active":{d:[{pt:{p:[{t:"E:active"}]},n:{p:[{t:"dynamic pseudo-class"}]},d:{p:[{t:"Matches E when E is activated by the user"}]}}]},":hover":{d:[{pt:{p:[{t:"E:hover"}]},n:{p:[{t:"dynamic pseudo-class"}]},d:{p:[{t:"Matches E while the user designates an element (with some pointing device), but does not activate it"}]}}]},":focus":{d:[{pt:{p:[{t:"E:focus"}]},n:{p:[{t:"dynamic pseudo-class"}]},d:{p:[{t:"Matches E while while it has the focus"}]}}]},":lang()":{d:[{pt:{p:[{t:"E:lang(c)"}]},n:{p:[{t:"lang() pseudo-class"}]},d:{p:[{t:"Matches element E if it is in (human) language c (the document markup language specifies how the human language is determined)"}]},i:{p:[{u:"/International/questions/qa-css-lang",t:"Styling using the lang attribute"}]}}]}},ar:{"at-rules":{d:[{ru:{y:"ar",i:"css",l:"block",p:[{t:"@media"},{t:"@import"},{t:"@page"},{t:"@charset"}]}}]},"@import":{d:[{n:{p:[{t:"@import"}]},d:{p:[{t:"The @import rule allows to import style rules from other style sheets. Any @import rules must precede all other rules (except @charset)"}]},s:{p:[{t:"The @import keyword must be followed by the URI of the style sheet to include. A string is also allowed; it will be interpreted as if it had url(...) around it. Media-dependent import can be specified with comma-separated media types after the URI."}]},ex:{p:[{t:'@import url("mystyle.css) screen'}]}}]},"@page":{d:[{d:{p:[{t:'An @page rule consists of the keyword "@page", followed by an optional page selector, followed by a block of declarations. The declarations in an @page rule are said to be in the page context and are useful to write CSS rules for paged media (e.g. for printing on paper).'}]},ex:{p:[{t:"@page {margin: 3cm;}"}]}}]},"@media":{d:[{d:{p:[{t:"An @media rule specifies the target media types (separated by commas) of a set of statements (delimited by curly braces)"}]},v:{p:[{t:"all, braille, embossed, handheld, print, projection, screen, speech, tty, tv"}]}}]},"@charset":{d:[{d:{p:[{t:"The @charset rule defines the encoding used in a linked style sheet. An @charset rule must be placed at the very beginning of the style sheet, preceded by no characters, and the name of the encoding should follow in quotes."}]},ex:{p:[{t:'@charset "ISO-8859-1"'}]},i:{p:[{u:"/International/questions/qa-css-charset",t:"CSS character encoding declarations"}]}}]}}};
sources.xpath={f:{"node-name":{d:[{pa:{p:[{t:"$arg as node()?"}]},r:{p:[{t:"xs:QName?"}]},sp:{u:"/TR/xpath-functions/#func-node-name"}}]},nilled:{d:[{pa:{p:[{t:"$arg as node()?"}]},r:{p:[{t:"xs:boolean?"}]},sp:{u:"/TR/xpath-functions/#func-nilled"}}]},string:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-string"}}]},data:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-data"}}]},"base-uri":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-base-uri"}}]},"document-uri":{d:[{pa:{p:[{t:"$arg as node()?"}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-document-uri"}}]},abs:{d:[{pa:{p:[{t:"$arg as numeric?"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-abs"}}]},ceiling:{d:[{pa:{p:[{t:"$arg as numeric?"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-ceiling"}}]},floor:{d:[{pa:{p:[{t:"$arg as numeric?"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-floor"}}]},round:{d:[{pa:{p:[{t:"$arg as numeric?"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-round"}}]},"round-half-to-even":{d:[{pa:{p:[{t:"$arg as numeric?"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-round-half-to-even"}}]},"codepoints-to-string":{d:[{pa:{p:[{t:"$arg as xs:integer*"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-codepoints-to-string"}}]},"string-to-codepoints":{d:[{pa:{p:[{t:"$arg as xs:string?"}]},r:{p:[{t:"xs:integer*"}]},sp:{u:"/TR/xpath-functions/#func-string-to-codepoints"}}]},compare:{d:[{pa:{p:[{t:"$comparand1 as xs:string?, $comparand2 as xs:string?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-compare"}}]},"codepoint-equal":{d:[{pa:{p:[{t:"$comparand1 as xs:string?,$comparand2 as xs:string?"}]},r:{p:[{t:"xs:boolean?"}]},sp:{u:"/TR/xpath-functions/#func-codepoint-equal"}}]},concat:{d:[{pa:{p:[{t:"$arg1 as xs:anyAtomicType?,$arg2 as xs:anyAtomicType?,..."}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-concat"}}]},"string-join":{d:[{pa:{p:[{t:"$arg1 as xs:string*, $arg2 as xs:string"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-string-join"}}]},substring:{d:[{pa:{p:[{t:"$sourceString as xs:string?,$startingLoc as xs:double"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-substring"}}]},"string-length":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:integer"}]},sp:{u:"/TR/xpath-functions/#func-string-length"}}]},"normalize-space":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-normalize-space"}}]},"normalize-unicode":{d:[{pa:{p:[{t:"$arg as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-normalize-unicode"}}]},"upper-case":{d:[{pa:{p:[{t:"$arg as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-upper-case"}}]},"lower-case":{d:[{pa:{p:[{t:"$arg as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-lower-case"}}]},translate:{d:[{pa:{p:[{t:"$arg as xs:string?,$mapString as xs:string,$transString as xs:string"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-translate"}}]},"encode-for-uri":{d:[{pa:{p:[{t:"$uri-part as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-encode-for-uri"}}]},"iri-to-uri":{d:[{pa:{p:[{t:"$iri as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-iri-to-uri"}}]},"escape-html-uri":{d:[{pa:{p:[{t:"$uri as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-escape-html-uri"}}]},contains:{d:[{pa:{p:[{t:"$arg1 as xs:string?, $arg2 as xs:string?"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-contains"}}]},"starts-with":{d:[{pa:{p:[{t:"$arg1 as xs:string?, $arg2 as xs:string?"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-starts-with"}}]},"ends-with":{d:[{pa:{p:[{t:"$arg1 as xs:string?, $arg2 as xs:string?"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-ends-with"}}]},"substring-before":{d:[{pa:{p:[{t:"$arg1 as xs:string?, $arg2 as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-substring-before"}}]},"substring-after":{d:[{pa:{p:[{t:"$arg1 as xs:string?, $arg2 as xs:string?"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-substring-after"}}]},matches:{d:[{pa:{p:[{t:"$input as xs:string?, $pattern as xs:string"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-matches"}}]},replace:{d:[{pa:{p:[{t:"$input as xs:string?,$pattern as xs:string,$replacement as xs:string"}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-replace"}}]},tokenize:{d:[{pa:{p:[{t:"$input as xs:string?, $pattern as xs:string"}]},r:{p:[{t:"xs:string*"}]},sp:{u:"/TR/xpath-functions/#func-tokenize"}}]},"resolve-uri":{d:[{pa:{p:[{t:"$relative as xs:string?"}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-resolve-uri"}}]},"true":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-true"}}]},"false":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-false"}}]},not:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-not"}}]},"years-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-years-from-duration"}}]},"months-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-months-from-duration"}}]},"days-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-days-from-duration"}}]},"hours-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-hours-from-duration"}}]},"minutes-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-minutes-from-duration"}}]},"seconds-from-duration":{d:[{pa:{p:[{t:"$arg as xs:duration?"}]},r:{p:[{t:"xs:decimal?"}]},sp:{u:"/TR/xpath-functions/#func-seconds-from-duration"}}]},"year-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-year-from-dateTime"}}]},"month-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-month-from-dateTime"}}]},"day-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-day-from-dateTime"}}]},"hours-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-hours-from-dateTime"}}]},"minutes-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-minutes-from-dateTime"}}]},"seconds-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:decimal?"}]},sp:{u:"/TR/xpath-functions/#func-seconds-from-dateTime"}}]},"timezone-from-dateTime":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:dayTimeDuration?"}]},sp:{u:"/TR/xpath-functions/#func-timezone-from-dateTime"}}]},"year-from-date":{d:[{pa:{p:[{t:"$arg as xs:date?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-year-from-date"}}]},"month-from-date":{d:[{pa:{p:[{t:"$arg as xs:date?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-month-from-date"}}]},"day-from-date":{d:[{pa:{p:[{t:"$arg as xs:date?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-day-from-date"}}]},"timezone-from-date":{d:[{pa:{p:[{t:"$arg as xs:date?"}]},r:{p:[{t:"xs:dayTimeDuration?"}]},sp:{u:"/TR/xpath-functions/#func-timezone-from-date"}}]},"hours-from-time":{d:[{pa:{p:[{t:"$arg as xs:time?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-hours-from-time"}}]},"minutes-from-time":{d:[{pa:{p:[{t:"$arg as xs:time?"}]},r:{p:[{t:"xs:integer?"}]},sp:{u:"/TR/xpath-functions/#func-minutes-from-time"}}]},"seconds-from-time":{d:[{pa:{p:[{t:"$arg as xs:time?"}]},r:{p:[{t:"xs:decimal?"}]},sp:{u:"/TR/xpath-functions/#func-seconds-from-time"}}]},"timezone-from-time":{d:[{pa:{p:[{t:"$arg as xs:time?"}]},r:{p:[{t:"xs:dayTimeDuration?"}]},sp:{u:"/TR/xpath-functions/#func-timezone-from-time"}}]},"adjust-dateTime-to-timezone":{d:[{pa:{p:[{t:"$arg as xs:dateTime?"}]},r:{p:[{t:"xs:dateTime?"}]},sp:{u:"/TR/xpath-functions/#func-adjust-dateTime-to-timezone"}}]},"adjust-date-to-timezone":{d:[{pa:{p:[{t:"$arg as xs:date?"}]},r:{p:[{t:"xs:date?"}]},sp:{u:"/TR/xpath-functions/#func-adjust-date-to-timezone"}}]},"adjust-time-to-timezone":{d:[{pa:{p:[{t:"$arg as xs:time?"}]},r:{p:[{t:"xs:time?"}]},sp:{u:"/TR/xpath-functions/#func-adjust-time-to-timezone"}}]},"resolve-QName":{d:[{pa:{p:[{t:"$qname as xs:string?, $element as element()"}]},r:{p:[{t:"xs:QName?"}]},sp:{u:"/TR/xpath-functions/#func-resolve-QName"}}]},QName:{d:[{pa:{p:[{t:"$paramURI as xs:string?, $paramQName as xs:string"}]},r:{p:[{t:"xs:QName"}]},sp:{u:"/TR/xpath-functions/#func-QName"}}]},"prefix-from-QName":{d:[{pa:{p:[{t:"$arg as xs:QName?"}]},r:{p:[{t:"xs:NCName?"}]},sp:{u:"/TR/xpath-functions/#func-prefix-from-QName"}}]},"local-name-from-QName":{d:[{pa:{p:[{t:"$arg as xs:QName?"}]},r:{p:[{t:"xs:NCName?"}]},sp:{u:"/TR/xpath-functions/#func-local-name-from-QName"}}]},"namespace-uri-from-QName":{d:[{pa:{p:[{t:"$arg as xs:QName?"}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-namespace-uri-from-QName"}}]},"namespace-uri-for-prefix":{d:[{pa:{p:[{t:"$prefix as xs:string?,$element as element()"}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-namespace-uri-for-prefix"}}]},"in-scope-prefixes":{d:[{pa:{p:[{t:"$element as element()"}]},r:{p:[{t:"xs:string*"}]},sp:{u:"/TR/xpath-functions/#func-in-scope-prefixes"}}]},name:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-name"}}]},"local-name":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-local-name"}}]},"namespace-uri":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:anyURI"}]},sp:{u:"/TR/xpath-functions/#func-namespace-uri"}}]},number:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:double"}]},sp:{u:"/TR/xpath-functions/#func-number"}}]},lang:{d:[{pa:{p:[{t:"$testlang as xs:string?"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-lang"}}]},root:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"node()"}]},sp:{u:"/TR/xpath-functions/#func-root"}}]},"boolean":{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-boolean"}}]},"index-of":{d:[{pa:{p:[{t:"$seqParam as xs:anyAtomicType*,$srchParam as xs:anyAtomicType"}]},r:{p:[{t:"xs:integer*"}]},sp:{u:"/TR/xpath-functions/#func-index-of"}}]},empty:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-empty"}}]},exists:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-exists"}}]},"distinct-values":{d:[{pa:{p:[{t:"$arg as xs:anyAtomicType*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-distinct-values"}}]},"insert-before":{d:[{pa:{p:[{t:"$target as item()*,$position as xs:integer,$inserts as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-insert-before"}}]},remove:{d:[{pa:{p:[{t:"$target as item()*, $position as xs:integer"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-remove"}}]},reverse:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-reverse"}}]},subsequence:{d:[{pa:{p:[{t:"$sourceSeq as item()*, $startingLoc as xs:double"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-subsequence"}}]},unordered:{d:[{pa:{p:[{t:"$sourceSeq as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-unordered"}}]},"zero-or-one":{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-zero-or-one"}}]},"one-or-more":{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-one-or-more"}}]},"exactly-one":{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-exactly-one"}}]},"deep-equal":{d:[{pa:{p:[{t:"$parameter1 as item()*, $parameter2 as item()*"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-deep-equal"}}]},count:{d:[{pa:{p:[{t:"$arg as item()*"}]},r:{p:[{t:"xs:integer"}]},sp:{u:"/TR/xpath-functions/#func-count"}}]},avg:{d:[{pa:{p:[{t:"$arg as xs:anyAtomicType*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-avg"}}]},max:{d:[{pa:{p:[{t:"$arg as xs:anyAtomicType*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-max"}}]},min:{d:[{pa:{p:[{t:"$arg as xs:anyAtomicType*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-min"}}]},sum:{d:[{pa:{p:[{t:"$arg as xs:anyAtomicType*"}]},r:{p:[{t:""}]},sp:{u:"/TR/xpath-functions/#func-sum"}}]},id:{d:[{pa:{p:[{t:"$arg as xs:string*"}]},r:{p:[{t:"element()*"}]},sp:{u:"/TR/xpath-functions/#func-id"}}]},idref:{d:[{pa:{p:[{t:"$arg as xs:string*"}]},r:{p:[{t:"node()*"}]},sp:{u:"/TR/xpath-functions/#func-idref"}}]},doc:{d:[{pa:{p:[{t:"$uri as xs:string?"}]},r:{p:[{t:"document-node()?"}]},sp:{u:"/TR/xpath-functions/#func-doc"}}]},"doc-available":{d:[{pa:{p:[{t:"$uri as xs:string?"}]},r:{p:[{t:"xs:boolean"}]},sp:{u:"/TR/xpath-functions/#func-doc-available"}}]},collection:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"node()*"}]},sp:{u:"/TR/xpath-functions/#func-collection"}}]},position:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:integer"}]},sp:{u:"/TR/xpath-functions/#func-position"}}]},last:{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:integer"}]},sp:{u:"/TR/xpath-functions/#func-last"}}]},"current-dateTime":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:dateTime"}]},sp:{u:"/TR/xpath-functions/#func-current-dateTime"}}]},"current-date":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:date"}]},sp:{u:"/TR/xpath-functions/#func-current-date"}}]},"current-time":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:time"}]},sp:{u:"/TR/xpath-functions/#func-current-time"}}]},"implicit-timezone":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:dayTimeDuration"}]},sp:{u:"/TR/xpath-functions/#func-implicit-timezone"}}]},"default-collation":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:string"}]},sp:{u:"/TR/xpath-functions/#func-default-collation"}}]},"static-base-uri":{d:[{pa:{p:[{t:""}]},r:{p:[{t:"xs:anyURI?"}]},sp:{u:"/TR/xpath-functions/#func-static-base-uri"}}]}}};
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var window=this,undefined,_jQuery=window.jQuery,_$=window.$,jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context)
},quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,isSimple=/^.[^:#\[\.,]*$/;
jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;
if(selector.nodeType){this[0]=selector;
this.length=1;
this.context=selector;
return this
}if(typeof selector==="string"){var match=quickExpr.exec(selector);
if(match&&(match[1]||!context)){if(match[1]){selector=jQuery.clean([match[1]],context)
}else{var elem=document.getElementById(match[3]);
if(elem&&elem.id!=match[3]){return jQuery().find(selector)
}var ret=jQuery(elem||[]);
ret.context=document;
ret.selector=selector;
return ret
}}else{return jQuery(context).find(selector)
}}else{if(jQuery.isFunction(selector)){return jQuery(document).ready(selector)
}}if(selector.selector&&selector.context){this.selector=selector.selector;
this.context=selector.context
}return this.setArray(jQuery.isArray(selector)?selector:jQuery.makeArray(selector))
},selector:"",jquery:"1.3.2",size:function(){return this.length
},get:function(num){return num===undefined?Array.prototype.slice.call(this):this[num]
},pushStack:function(elems,name,selector){var ret=jQuery(elems);
ret.prevObject=this;
ret.context=this.context;
if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector
}else{if(name){ret.selector=this.selector+"."+name+"("+selector+")"
}}return ret
},setArray:function(elems){this.length=0;
Array.prototype.push.apply(this,elems);
return this
},each:function(callback,args){return jQuery.each(this,callback,args)
},index:function(elem){return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this)
},attr:function(name,value,type){var options=name;
if(typeof name==="string"){if(value===undefined){return this[0]&&jQuery[type||"attr"](this[0],name)
}else{options={};
options[name]=value
}}return this.each(function(i){for(name in options){jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name))
}})
},css:function(key,value){if((key=="width"||key=="height")&&parseFloat(value)<0){value=undefined
}return this.attr(key,value,"curCSS")
},text:function(text){if(typeof text!=="object"&&text!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text))
}var ret="";
jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8){ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this])
}})
});
return ret
},wrapAll:function(html){if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).clone();
if(this[0].parentNode){wrap.insertBefore(this[0])
}wrap.map(function(){var elem=this;
while(elem.firstChild){elem=elem.firstChild
}return elem
}).append(this)
}return this
},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html)
})
},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html)
})
},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType==1){this.appendChild(elem)
}})
},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType==1){this.insertBefore(elem,this.firstChild)
}})
},before:function(){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this)
})
},after:function(){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling)
})
},end:function(){return this.prevObject||jQuery([])
},push:[].push,sort:[].sort,splice:[].splice,find:function(selector){if(this.length===1){var ret=this.pushStack([],"find",selector);
ret.length=0;
jQuery.find(selector,this[0],ret);
return ret
}else{return this.pushStack(jQuery.unique(jQuery.map(this,function(elem){return jQuery.find(selector,elem)
})),"find",selector)
}},clone:function(events){var ret=this.map(function(){if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){var html=this.outerHTML;
if(!html){var div=this.ownerDocument.createElement("div");
div.appendChild(this.cloneNode(true));
html=div.innerHTML
}return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]
}else{return this.cloneNode(true)
}});
if(events===true){var orig=this.find("*").andSelf(),i=0;
ret.find("*").andSelf().each(function(){if(this.nodeName!==orig[i].nodeName){return 
}var events=jQuery.data(orig[i],"events");
for(var type in events){for(var handler in events[type]){jQuery.event.add(this,type,events[type][handler],events[type][handler].data)
}}i++
})
}return ret
},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i)
})||jQuery.multiFilter(selector,jQuery.grep(this,function(elem){return elem.nodeType===1
})),"filter",selector)
},closest:function(selector){var pos=jQuery.expr.match.POS.test(selector)?jQuery(selector):null,closer=0;
return this.map(function(){var cur=this;
while(cur&&cur.ownerDocument){if(pos?pos.index(cur)>-1:jQuery(cur).is(selector)){jQuery.data(cur,"closest",closer);
return cur
}cur=cur.parentNode;
closer++
}})
},not:function(selector){if(typeof selector==="string"){if(isSimple.test(selector)){return this.pushStack(jQuery.multiFilter(selector,this,true),"not",selector)
}else{selector=jQuery.multiFilter(selector,this)
}}var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;
return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector
})
},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector==="string"?jQuery(selector):jQuery.makeArray(selector))))
},is:function(selector){return !!selector&&jQuery.multiFilter(selector,this).length>0
},hasClass:function(selector){return !!selector&&this.is("."+selector)
},val:function(value){if(value===undefined){var elem=this[0];
if(elem){if(jQuery.nodeName(elem,"option")){return(elem.attributes.value||{}).specified?elem.value:elem.text
}if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";
if(index<0){return null
}for(var i=one?index:0,max=one?index+1:options.length;
i<max;
i++){var option=options[i];
if(option.selected){value=jQuery(option).val();
if(one){return value
}values.push(value)
}}return values
}return(elem.value||"").replace(/\r/g,"")
}return undefined
}if(typeof value==="number"){value+=""
}return this.each(function(){if(this.nodeType!=1){return 
}if(jQuery.isArray(value)&&/radio|checkbox/.test(this.type)){this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0)
}else{if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);
jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0)
});
if(!values.length){this.selectedIndex=-1
}}else{this.value=value
}}})
},html:function(value){return value===undefined?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(value)
},replaceWith:function(value){return this.after(value).remove()
},eq:function(i){return this.slice(i,+i+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},andSelf:function(){return this.add(this.prevObject)
},domManip:function(args,table,callback){if(this[0]){var fragment=(this[0].ownerDocument||this[0]).createDocumentFragment(),scripts=jQuery.clean(args,(this[0].ownerDocument||this[0]),fragment),first=fragment.firstChild;
if(first){for(var i=0,l=this.length;
i<l;
i++){callback.call(root(this[i],first),this.length>1||i>0?fragment.cloneNode(true):fragment)
}}if(scripts){jQuery.each(scripts,evalScript)
}}return this;
function root(elem,cur){return table&&jQuery.nodeName(elem,"table")&&jQuery.nodeName(cur,"tr")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem
}}};
jQuery.fn.init.prototype=jQuery.fn;
function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"})
}else{jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"")
}if(elem.parentNode){elem.parentNode.removeChild(elem)
}}function now(){return +new Date
}jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;
if(typeof target==="boolean"){deep=target;
target=arguments[1]||{};
i=2
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(length==i){target=this;
--i
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(var name in options){var src=target[name],copy=options[name];
if(target===copy){continue
}if(deep&&copy&&typeof copy==="object"&&!copy.nodeType){target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
var exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{},toString=Object.prototype.toString;
jQuery.extend({noConflict:function(deep){window.$=_$;
if(deep){window.jQuery=_jQuery
}return jQuery
},isFunction:function(obj){return toString.call(obj)==="[object Function]"
},isArray:function(obj){return toString.call(obj)==="[object Array]"
},isXMLDoc:function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&jQuery.isXMLDoc(elem.ownerDocument)
},globalEval:function(data){if(data&&/\S/.test(data)){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");
script.type="text/javascript";
if(jQuery.support.scriptEval){script.appendChild(document.createTextNode(data))
}else{script.text=data
}head.insertBefore(script,head.firstChild);
head.removeChild(script)
}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase()
},each:function(object,callback,args){var name,i=0,length=object.length;
if(args){if(length===undefined){for(name in object){if(callback.apply(object[name],args)===false){break
}}}else{for(;
i<length;
){if(callback.apply(object[i++],args)===false){break
}}}}else{if(length===undefined){for(name in object){if(callback.call(object[name],name,object[name])===false){break
}}}else{for(var value=object[0];
i<length&&callback.call(value,i,value)!==false;
value=object[++i]){}}}return object
},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value)){value=value.call(elem,i)
}return typeof value==="number"&&type=="curCSS"&&!exclude.test(name)?value+"px":value
},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className)){elem.className+=(elem.className?" ":"")+className
}})
},remove:function(elem,classNames){if(elem.nodeType==1){elem.className=classNames!==undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return !jQuery.className.has(classNames,className)
}).join(" "):""
}},has:function(elem,className){return elem&&jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1
}},swap:function(elem,options,callback){var old={};
for(var name in options){old[name]=elem.style[name];
elem.style[name]=options[name]
}callback.call(elem);
for(var name in options){elem.style[name]=old[name]
}},css:function(elem,name,force,extra){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];
function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;
if(extra==="border"){return 
}jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0
}if(extra==="margin"){val+=parseFloat(jQuery.curCSS(elem,"margin"+this,true))||0
}else{val-=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0
}})
}if(elem.offsetWidth!==0){getWH()
}else{jQuery.swap(elem,props,getWH)
}return Math.max(0,Math.round(val))
}return jQuery.curCSS(elem,name,force)
},curCSS:function(elem,name,force){var ret,style=elem.style;
if(name=="opacity"&&!jQuery.support.opacity){ret=jQuery.attr(style,"opacity");
return ret==""?"1":ret
}if(name.match(/float/i)){name=styleFloat
}if(!force&&style&&style[name]){ret=style[name]
}else{if(defaultView.getComputedStyle){if(name.match(/float/i)){name="float"
}name=name.replace(/([A-Z])/g,"-$1").toLowerCase();
var computedStyle=defaultView.getComputedStyle(elem,null);
if(computedStyle){ret=computedStyle.getPropertyValue(name)
}if(name=="opacity"&&ret==""){ret="1"
}}else{if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase()
});
ret=elem.currentStyle[name]||elem.currentStyle[camelCase];
if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
style.left=ret||0;
ret=style.pixelLeft+"px";
style.left=left;
elem.runtimeStyle.left=rsLeft
}}}}return ret
},clean:function(elems,context,fragment){context=context||document;
if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document
}if(!fragment&&elems.length===1&&typeof elems[0]==="string"){var match=/^<(\w+)\s*\/?>$/.exec(elems[0]);
if(match){return[context.createElement(match[1])]
}}var ret=[],scripts=[],div=context.createElement("div");
jQuery.each(elems,function(i,elem){if(typeof elem==="number"){elem+=""
}if(!elem){return 
}if(typeof elem==="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">"
});
var tags=elem.replace(/^\s+/,"").substring(0,10).toLowerCase();
var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!jQuery.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];
div.innerHTML=wrap[1]+elem+wrap[2];
while(wrap[0]--){div=div.lastChild
}if(!jQuery.support.tbody){var hasBody=/<tbody/i.test(elem),tbody=!tags.indexOf("<table")&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&!hasBody?div.childNodes:[];
for(var j=tbody.length-1;
j>=0;
--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j])
}}}if(!jQuery.support.leadingWhitespace&&/^\s/.test(elem)){div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild)
}elem=jQuery.makeArray(div.childNodes)
}if(elem.nodeType){ret.push(elem)
}else{ret=jQuery.merge(ret,elem)
}});
if(fragment){for(var i=0;
ret[i];
i++){if(jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i])
}else{if(ret[i].nodeType===1){ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))))
}fragment.appendChild(ret[i])
}}return scripts
}return ret
},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8){return undefined
}var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined;
name=notxml&&jQuery.props[name]||name;
if(elem.tagName){var special=/href|src|style/.test(name);
if(name=="selected"&&elem.parentNode){elem.parentNode.selectedIndex
}if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode){throw"type property can't be changed"
}elem[name]=value
}if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){return elem.getAttributeNode(name).nodeValue
}if(name=="tabIndex"){var attributeNode=elem.getAttributeNode("tabIndex");
return attributeNode&&attributeNode.specified?attributeNode.value:elem.nodeName.match(/(button|input|object|select|textarea)/i)?0:elem.nodeName.match(/^(a|area)$/i)&&elem.href?0:undefined
}return elem[name]
}if(!jQuery.support.style&&notxml&&name=="style"){return jQuery.attr(elem.style,"cssText",value)
}if(set){elem.setAttribute(name,""+value)
}var attr=!jQuery.support.hrefNormalized&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);
return attr===null?undefined:attr
}if(!jQuery.support.opacity&&name=="opacity"){if(set){elem.zoom=1;
elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(value)+""=="NaN"?"":"alpha(opacity="+value*100+")")
}return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+"":""
}name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase()
});
if(set){elem[name]=value
}return elem[name]
},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"")
},makeArray:function(array){var ret=[];
if(array!=null){var i=array.length;
if(i==null||typeof array==="string"||jQuery.isFunction(array)||array.setInterval){ret[0]=array
}else{while(i){ret[--i]=array[i]
}}}return ret
},inArray:function(elem,array){for(var i=0,length=array.length;
i<length;
i++){if(array[i]===elem){return i
}}return -1
},merge:function(first,second){var i=0,elem,pos=first.length;
if(!jQuery.support.getAll){while((elem=second[i++])!=null){if(elem.nodeType!=8){first[pos++]=elem
}}}else{while((elem=second[i++])!=null){first[pos++]=elem
}}return first
},unique:function(array){var ret=[],done={};
try{for(var i=0,length=array.length;
i<length;
i++){var id=jQuery.data(array[i]);
if(!done[id]){done[id]=true;
ret.push(array[i])
}}}catch(e){ret=array
}return ret
},grep:function(elems,callback,inv){var ret=[];
for(var i=0,length=elems.length;
i<length;
i++){if(!inv!=!callback(elems[i],i)){ret.push(elems[i])
}}return ret
},map:function(elems,callback){var ret=[];
for(var i=0,length=elems.length;
i<length;
i++){var value=callback(elems[i],i);
if(value!=null){ret[ret.length]=value
}}return ret.concat.apply([],ret)
}});
var userAgent=navigator.userAgent.toLowerCase();
jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};
jQuery.each({parent:function(elem){return elem.parentNode
},parents:function(elem){return jQuery.dir(elem,"parentNode")
},next:function(elem){return jQuery.nth(elem,2,"nextSibling")
},prev:function(elem){return jQuery.nth(elem,2,"previousSibling")
},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")
},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")
},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem)
},children:function(elem){return jQuery.sibling(elem.firstChild)
},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes)
}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);
if(selector&&typeof selector=="string"){ret=jQuery.multiFilter(selector,ret)
}return this.pushStack(jQuery.unique(ret),name,selector)
}
});
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector);
for(var i=0,l=insert.length;
i<l;
i++){var elems=(i>0?this.clone(true):this).get();
jQuery.fn[original].apply(jQuery(insert[i]),elems);
ret=ret.concat(elems)
}return this.pushStack(ret,name,selector)
}
});
jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");
if(this.nodeType==1){this.removeAttribute(name)
}},addClass:function(classNames){jQuery.className.add(this,classNames)
},removeClass:function(classNames){jQuery.className.remove(this,classNames)
},toggleClass:function(classNames,state){if(typeof state!=="boolean"){state=!jQuery.className.has(this,classNames)
}jQuery.className[state?"add":"remove"](this,classNames)
},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).length){jQuery("*",this).add([this]).each(function(){jQuery.event.remove(this);
jQuery.removeData(this)
});
if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){jQuery(this).children().remove();
while(this.firstChild){this.removeChild(this.firstChild)
}}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments)
}
});
function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0
}var expando="jQuery"+now(),uuid=0,windowData={};
jQuery.extend({cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;
var id=elem[expando];
if(!id){id=elem[expando]=++uuid
}if(name&&!jQuery.cache[id]){jQuery.cache[id]={}
}if(data!==undefined){jQuery.cache[id][name]=data
}return name?jQuery.cache[id][name]:id
},removeData:function(elem,name){elem=elem==window?windowData:elem;
var id=elem[expando];
if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];
name="";
for(name in jQuery.cache[id]){break
}if(!name){jQuery.removeData(elem)
}}}else{try{delete elem[expando]
}catch(e){if(elem.removeAttribute){elem.removeAttribute(expando)
}}delete jQuery.cache[id]
}},queue:function(elem,type,data){if(elem){type=(type||"fx")+"queue";
var q=jQuery.data(elem,type);
if(!q||jQuery.isArray(data)){q=jQuery.data(elem,type,jQuery.makeArray(data))
}else{if(data){q.push(data)
}}}return q
},dequeue:function(elem,type){var queue=jQuery.queue(elem,type),fn=queue.shift();
if(!type||type==="fx"){fn=queue[0]
}if(fn!==undefined){fn.call(elem)
}}});
jQuery.fn.extend({data:function(key,value){var parts=key.split(".");
parts[1]=parts[1]?"."+parts[1]:"";
if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);
if(data===undefined&&this.length){data=jQuery.data(this[0],key)
}return data===undefined&&parts[1]?this.data(parts[0]):data
}else{return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value)
})
}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)
})
},queue:function(type,data){if(typeof type!=="string"){data=type;
type="fx"
}if(data===undefined){return jQuery.queue(this[0],type)
}return this.each(function(){var queue=jQuery.queue(this,type,data);
if(type=="fx"&&queue.length==1){queue[0].call(this)
}})
},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)
})
}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,done=0,toString=Object.prototype.toString;
var Sizzle=function(selector,context,results,seed){results=results||[];
context=context||document;
if(context.nodeType!==1&&context.nodeType!==9){return[]
}if(!selector||typeof selector!=="string"){return results
}var parts=[],m,set,checkSet,check,mode,extra,prune=true;
chunker.lastIndex=0;
while((m=chunker.exec(selector))!==null){parts.push(m[1]);
if(m[2]){extra=RegExp.rightContext;
break
}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context)
}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);
while(parts.length){selector=parts.shift();
if(Expr.relative[selector]){selector+=parts.shift()
}set=posProcess(selector,set)
}}}else{var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&context.parentNode?context.parentNode:context,isXML(context));
set=Sizzle.filter(ret.expr,ret.set);
if(parts.length>0){checkSet=makeArray(set)
}else{prune=false
}while(parts.length){var cur=parts.pop(),pop=cur;
if(!Expr.relative[cur]){cur=""
}else{pop=parts.pop()
}if(pop==null){pop=context
}Expr.relative[cur](checkSet,pop,isXML(context))
}}if(!checkSet){checkSet=set
}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector)
}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)
}else{if(context.nodeType===1){for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i])
}}}else{for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])
}}}}}else{makeArray(checkSet,results)
}if(extra){Sizzle(extra,context,results,seed);
if(sortOrder){hasDuplicate=false;
results.sort(sortOrder);
if(hasDuplicate){for(var i=1;
i<results.length;
i++){if(results[i]===results[i-1]){results.splice(i--,1)
}}}}}return results
};
Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)
};
Sizzle.find=function(expr,context,isXML){var set,match;
if(!expr){return[]
}for(var i=0,l=Expr.order.length;
i<l;
i++){var type=Expr.order[i],match;
if((match=Expr.match[type].exec(expr))){var left=RegExp.leftContext;
if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){expr=expr.replace(Expr.match[type],"");
break
}}}}if(!set){set=context.getElementsByTagName("*")
}return{set:set,expr:expr}
};
Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);
while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;
anyFound=false;
if(curLoop==result){result=[]
}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){anyFound=found=true
}else{if(match===true){continue
}}}if(match){for(var i=0;
(item=curLoop[i])!=null;
i++){if(item){found=filter(item,match,i,curLoop);
var pass=not^!!found;
if(inplace&&found!=null){if(pass){anyFound=true
}else{curLoop[i]=false
}}else{if(pass){result.push(item);
anyFound=true
}}}}}if(found!==undefined){if(!inplace){curLoop=result
}expr=expr.replace(Expr.match[type],"");
if(!anyFound){return[]
}break
}}}if(expr==old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr
}else{break
}}old=expr
}return curLoop
};
var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")
}},relative:{"+":function(checkSet,part,isXML){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;
if(isTag&&!isXML){part=part.toUpperCase()
}for(var i=0,l=checkSet.length,elem;
i<l;
i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName===part?elem||false:elem===part
}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)
}},">":function(checkSet,part,isXML){var isPartStr=typeof part==="string";
if(isPartStr&&!/\W/.test(part)){part=isXML?part:part.toUpperCase();
for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){var parent=elem.parentNode;
checkSet[i]=parent.nodeName===part?parent:false
}}}else{for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part
}}if(isPartStr){Sizzle.filter(part,checkSet,true)
}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(!part.match(/\W/)){var nodeCheck=part=isXML?part:part.toUpperCase();
checkFn=dirNodeCheck
}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)
},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!part.match(/\W/)){var nodeCheck=part=isXML?part:part.toUpperCase();
checkFn=dirNodeCheck
}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)
}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?[m]:[]
}},NAME:function(match,context,isXML){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;
i<l;
i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])
}}return ret.length===0?null:ret
}},TAG:function(match,context){return context.getElementsByTagName(match[1])
}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";
if(isXML){return match
}for(var i=0,elem;
(elem=curLoop[i])!=null;
i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").indexOf(match)>=0)){if(!inplace){result.push(elem)
}}else{if(inplace){curLoop[i]=false
}}}}return false
},ID:function(match){return match[1].replace(/\\/g,"")
},TAG:function(match,curLoop){for(var i=0;
curLoop[i]===false;
i++){}return curLoop[i]&&isXML(curLoop[i])?match[1]:match[1].toUpperCase()
},CHILD:function(match){if(match[1]=="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]=="even"&&"2n"||match[2]=="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0
}match[0]=done++;
return match
},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");
if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]
}if(match[2]==="~="){match[4]=" "+match[4]+" "
}return match
},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if(match[3].match(chunker).length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)
}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){result.push.apply(result,ret)
}return false
}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true
}}return match
},POS:function(match){match.unshift(true);
return match
}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){return elem.checked===true
},selected:function(elem){elem.parentNode.selectedIndex;
return elem.selected===true
},parent:function(elem){return !!elem.firstChild
},empty:function(elem){return !elem.firstChild
},has:function(elem,i,match){return !!Sizzle(match[3],elem).length
},header:function(elem){return/h\d/i.test(elem.nodeName)
},text:function(elem){return"text"===elem.type
},radio:function(elem){return"radio"===elem.type
},checkbox:function(elem){return"checkbox"===elem.type
},file:function(elem){return"file"===elem.type
},password:function(elem){return"password"===elem.type
},submit:function(elem){return"submit"===elem.type
},image:function(elem){return"image"===elem.type
},reset:function(elem){return"reset"===elem.type
},button:function(elem){return"button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON"
},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName)
}},setFilters:{first:function(elem,i){return i===0
},last:function(elem,i,match,array){return i===array.length-1
},even:function(elem,i){return i%2===0
},odd:function(elem,i){return i%2===1
},lt:function(elem,i,match){return i<match[3]-0
},gt:function(elem,i,match){return i>match[3]-0
},nth:function(elem,i,match){return match[3]-0==i
},eq:function(elem,i,match){return match[3]-0==i
}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];
if(filter){return filter(elem,i,match,array)
}else{if(name==="contains"){return(elem.textContent||elem.innerText||"").indexOf(match[3])>=0
}else{if(name==="not"){var not=match[3];
for(var i=0,l=not.length;
i<l;
i++){if(not[i]===elem){return false
}}return true
}}}},CHILD:function(elem,match){var type=match[1],node=elem;
switch(type){case"only":case"first":while(node=node.previousSibling){if(node.nodeType===1){return false
}}if(type=="first"){return true
}node=elem;
case"last":while(node=node.nextSibling){if(node.nodeType===1){return false
}}return true;
case"nth":var first=match[2],last=match[3];
if(first==1&&last==0){return true
}var doneName=match[0],parent=elem.parentNode;
if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;
for(node=parent.firstChild;
node;
node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count
}}parent.sizcache=doneName
}var diff=elem.nodeIndex-last;
if(first==0){return diff==0
}else{return(diff%first==0&&diff/first>=0)
}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match
},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName===match
},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1
},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!=check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false
},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];
if(filter){return filter(elem,i,match,array)
}}}};
var origPOS=Expr.match.POS;
for(var type in Expr.match){Expr.match[type]=RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source)
}var makeArray=function(array,results){array=Array.prototype.slice.call(array);
if(results){results.push.apply(results,array);
return results
}return array
};
try{Array.prototype.slice.call(document.documentElement.childNodes)
}catch(e){makeArray=function(array,results){var ret=results||[];
if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)
}else{if(typeof array.length==="number"){for(var i=0,l=array.length;
i<l;
i++){ret.push(array[i])
}}else{for(var i=0;
array[i];
i++){ret.push(array[i])
}}}return ret
}
}var sortOrder;
if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){var ret=a.sourceIndex-b.sourceIndex;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if(document.createRange){sortOrder=function(a,b){var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();
aRange.selectNode(a);
aRange.collapse(true);
bRange.selectNode(b);
bRange.collapse(true);
var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);
if(ret===0){hasDuplicate=true
}return ret
}
}}}(function(){var form=document.createElement("form"),id="script"+(new Date).getTime();
form.innerHTML="<input name='"+id+"'/>";
var root=document.documentElement;
root.insertBefore(form,root.firstChild);
if(!!document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]
}};
Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match
}
}root.removeChild(form)
})();
(function(){var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){var tmp=[];
for(var i=0;
results[i];
i++){if(results[i].nodeType===1){tmp.push(results[i])
}}results=tmp
}return results
}
}div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)
}
}})();
if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return 
}Sizzle=function(query,context,extra,seed){context=context||document;
if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra)
}catch(e){}}return oldSizzle(query,context,extra,seed)
};
Sizzle.find=oldSizzle.find;
Sizzle.filter=oldSizzle.filter;
Sizzle.selectors=oldSizzle.selectors;
Sizzle.matches=oldSizzle.matches
})()
}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(div.getElementsByClassName("e").length===0){return 
}div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){return 
}Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])
}}
})()
}function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;
for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;
elem.sizset=i
}elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(elem.nodeName===cur){match=elem;
break
}elem=elem[dir]
}checkSet[i]=match
}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;
for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;
elem.sizset=i
}elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(typeof cur!=="string"){if(elem===cur){match=true;
break
}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;
break
}}}elem=elem[dir]
}checkSet[i]=match
}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16
}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)
};
var isXML=function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&isXML(elem.ownerDocument)
};
var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")
}selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;
i<l;
i++){Sizzle(selector,root[i],tmpSet)
}return Sizzle.filter(later,tmpSet)
};
jQuery.find=Sizzle;
jQuery.filter=Sizzle.filter;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.filters;
Sizzle.selectors.filters.hidden=function(elem){return elem.offsetWidth===0||elem.offsetHeight===0
};
Sizzle.selectors.filters.visible=function(elem){return elem.offsetWidth>0||elem.offsetHeight>0
};
Sizzle.selectors.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem
}).length
};
jQuery.multiFilter=function(expr,elems,not){if(not){expr=":not("+expr+")"
}return Sizzle.matches(expr,elems)
};
jQuery.dir=function(elem,dir){var matched=[],cur=elem[dir];
while(cur&&cur!=document){if(cur.nodeType==1){matched.push(cur)
}cur=cur[dir]
}return matched
};
jQuery.nth=function(cur,result,dir,elem){result=result||1;
var num=0;
for(;
cur;
cur=cur[dir]){if(cur.nodeType==1&&++num==result){break
}}return cur
};
jQuery.sibling=function(n,elem){var r=[];
for(;
n;
n=n.nextSibling){if(n.nodeType==1&&n!=elem){r.push(n)
}}return r
};
return ;
window.Sizzle=Sizzle
})();
jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8){return 
}if(elem.setInterval&&elem!=window){elem=window
}if(!handler.guid){handler.guid=this.guid++
}if(data!==undefined){var fn=handler;
handler=this.proxy(fn);
handler.data=data
}var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){return typeof jQuery!=="undefined"&&!jQuery.event.triggered?jQuery.event.handle.apply(arguments.callee.elem,arguments):undefined
});
handle.elem=elem;
jQuery.each(types.split(/\s+/),function(index,type){var namespaces=type.split(".");
type=namespaces.shift();
handler.type=namespaces.slice().sort().join(".");
var handlers=events[type];
if(jQuery.event.specialAll[type]){jQuery.event.specialAll[type].setup.call(elem,data,namespaces)
}if(!handlers){handlers=events[type]={};
if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem,data,namespaces)===false){if(elem.addEventListener){elem.addEventListener(type,handle,false)
}else{if(elem.attachEvent){elem.attachEvent("on"+type,handle)
}}}}handlers[handler.guid]=handler;
jQuery.event.global[type]=true
});
elem=null
},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8){return 
}var events=jQuery.data(elem,"events"),ret,index;
if(events){if(types===undefined||(typeof types==="string"&&types.charAt(0)==".")){for(var type in events){this.remove(elem,type+(types||""))
}}else{if(types.type){handler=types.handler;
types=types.type
}jQuery.each(types.split(/\s+/),function(index,type){var namespaces=type.split(".");
type=namespaces.shift();
var namespace=RegExp("(^|\\.)"+namespaces.slice().sort().join(".*\\.")+"(\\.|$)");
if(events[type]){if(handler){delete events[type][handler.guid]
}else{for(var handle in events[type]){if(namespace.test(events[type][handle].type)){delete events[type][handle]
}}}if(jQuery.event.specialAll[type]){jQuery.event.specialAll[type].teardown.call(elem,namespaces)
}for(ret in events[type]){break
}if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem,namespaces)===false){if(elem.removeEventListener){elem.removeEventListener(type,jQuery.data(elem,"handle"),false)
}else{if(elem.detachEvent){elem.detachEvent("on"+type,jQuery.data(elem,"handle"))
}}}ret=null;
delete events[type]
}}})
}for(ret in events){break
}if(!ret){var handle=jQuery.data(elem,"handle");
if(handle){handle.elem=null
}jQuery.removeData(elem,"events");
jQuery.removeData(elem,"handle")
}}},trigger:function(event,data,elem,bubbling){var type=event.type||event;
if(!bubbling){event=typeof event==="object"?event[expando]?event:jQuery.extend(jQuery.Event(type),event):jQuery.Event(type);
if(type.indexOf("!")>=0){event.type=type=type.slice(0,-1);
event.exclusive=true
}if(!elem){event.stopPropagation();
if(this.global[type]){jQuery.each(jQuery.cache,function(){if(this.events&&this.events[type]){jQuery.event.trigger(event,data,this.handle.elem)
}})
}}if(!elem||elem.nodeType==3||elem.nodeType==8){return undefined
}event.result=undefined;
event.target=elem;
data=jQuery.makeArray(data);
data.unshift(event)
}event.currentTarget=elem;
var handle=jQuery.data(elem,"handle");
if(handle){handle.apply(elem,data)
}if((!elem[type]||(jQuery.nodeName(elem,"a")&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false){event.result=false
}if(!bubbling&&elem[type]&&!event.isDefaultPrevented()&&!(jQuery.nodeName(elem,"a")&&type=="click")){this.triggered=true;
try{elem[type]()
}catch(e){}}this.triggered=false;
if(!event.isPropagationStopped()){var parent=elem.parentNode||elem.ownerDocument;
if(parent){jQuery.event.trigger(event,data,parent,true)
}}},handle:function(event){var all,handlers;
event=arguments[0]=jQuery.event.fix(event||window.event);
event.currentTarget=this;
var namespaces=event.type.split(".");
event.type=namespaces.shift();
all=!namespaces.length&&!event.exclusive;
var namespace=RegExp("(^|\\.)"+namespaces.slice().sort().join(".*\\.")+"(\\.|$)");
handlers=(jQuery.data(this,"events")||{})[event.type];
for(var j in handlers){var handler=handlers[j];
if(all||namespace.test(handler.type)){event.handler=handler;
event.data=handler.data;
var ret=handler.apply(this,arguments);
if(ret!==undefined){event.result=ret;
if(ret===false){event.preventDefault();
event.stopPropagation()
}}if(event.isImmediatePropagationStopped()){break
}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[expando]){return event
}var originalEvent=event;
event=jQuery.Event(originalEvent);
for(var i=this.props.length,prop;
i;
){prop=this.props[--i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=event.srcElement||document
}if(event.target.nodeType==3){event.target=event.target.parentNode
}if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement
}if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;
event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);
event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0)
}if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode)){event.which=event.charCode||event.keyCode
}if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey
}if(!event.which&&event.button){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)))
}return event
},proxy:function(fn,proxy){proxy=proxy||function(){return fn.apply(this,arguments)
};
proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;
return proxy
},special:{ready:{setup:bindReady,teardown:function(){}}},specialAll:{live:{setup:function(selector,namespaces){jQuery.event.add(this,namespaces[0],liveHandler)
},teardown:function(namespaces){if(namespaces.length){var remove=0,name=RegExp("(^|\\.)"+namespaces[0]+"(\\.|$)");
jQuery.each((jQuery.data(this,"events").live||{}),function(){if(name.test(this.type)){remove++
}});
if(remove<1){jQuery.event.remove(this,namespaces[0],liveHandler)
}}}}}};
jQuery.Event=function(src){if(!this.preventDefault){return new jQuery.Event(src)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type
}else{this.type=src
}this.timeStamp=now();
this[expando]=true
};
function returnFalse(){return false
}function returnTrue(){return true
}jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;
var e=this.originalEvent;
if(!e){return 
}if(e.preventDefault){e.preventDefault()
}e.returnValue=false
},stopPropagation:function(){this.isPropagationStopped=returnTrue;
var e=this.originalEvent;
if(!e){return 
}if(e.stopPropagation){e.stopPropagation()
}e.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;
this.stopPropagation()
},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};
var withinElement=function(event){var parent=event.relatedTarget;
while(parent&&parent!=this){try{parent=parent.parentNode
}catch(e){parent=this
}}if(parent!=this){event.type=event.data;
jQuery.event.handle.apply(this,arguments)
}};
jQuery.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(orig,fix){jQuery.event.special[fix]={setup:function(){jQuery.event.add(this,orig,withinElement,fix)
},teardown:function(){jQuery.event.remove(this,orig,withinElement)
}}
});
jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data)
})
},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);
return(fn||data).apply(this,arguments)
});
return this.each(function(){jQuery.event.add(this,type,one,fn&&data)
})
},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn)
})
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){if(this[0]){var event=jQuery.Event(type);
event.preventDefault();
event.stopPropagation();
jQuery.event.trigger(event,data,this[0]);
return event.result
}},toggle:function(fn){var args=arguments,i=1;
while(i<args.length){jQuery.event.proxy(fn,args[i++])
}return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;
event.preventDefault();
return args[this.lastToggle++].apply(this,arguments)||false
}))
},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut)
},ready:function(fn){bindReady();
if(jQuery.isReady){fn.call(document,jQuery)
}else{jQuery.readyList.push(fn)
}return this
},live:function(type,fn){var proxy=jQuery.event.proxy(fn);
proxy.guid+=this.selector+type;
jQuery(document).bind(liveConvert(type,this.selector),this.selector,proxy);
return this
},die:function(type,fn){jQuery(document).unbind(liveConvert(type,this.selector),fn?{guid:fn.guid+this.selector+type}:null);
return this
}});
function liveHandler(event){var check=RegExp("(^|\\.)"+event.type+"(\\.|$)"),stop=true,elems=[];
jQuery.each(jQuery.data(this,"events").live||[],function(i,fn){if(check.test(fn.type)){var elem=jQuery(event.target).closest(fn.data)[0];
if(elem){elems.push({elem:elem,fn:fn})
}}});
elems.sort(function(a,b){return jQuery.data(a.elem,"closest")-jQuery.data(b.elem,"closest")
});
jQuery.each(elems,function(){if(this.fn.call(this.elem,event,this.fn.data)===false){return(stop=false)
}});
return stop
}function liveConvert(type,selector){return["live",type,selector.replace(/\./g,"`").replace(/ /g,"|")].join(".")
}jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;
if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document,jQuery)
});
jQuery.readyList=null
}jQuery(document).triggerHandler("ready")
}}});
var readyBound=false;
function bindReady(){if(readyBound){return 
}readyBound=true;
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);
jQuery.ready()
},false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);
jQuery.ready()
}});
if(document.documentElement.doScroll&&window==window.top){(function(){if(jQuery.isReady){return 
}try{document.documentElement.doScroll("left")
}catch(error){setTimeout(arguments.callee,0);
return 
}jQuery.ready()
})()
}}}jQuery.event.add(window,"load",jQuery.ready)
}jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name)
}
});
jQuery(window).bind("unload",function(){for(var id in jQuery.cache){if(id!=1&&jQuery.cache[id].handle){jQuery.event.remove(jQuery.cache[id].handle.elem)
}}});
(function(){jQuery.support={};
var root=document.documentElement,script=document.createElement("script"),div=document.createElement("div"),id="script"+(new Date).getTime();
div.style.display="none";
div.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];
if(!all||!all.length||!a){return 
}jQuery.support={leadingWhitespace:div.firstChild.nodeType==3,tbody:!div.getElementsByTagName("tbody").length,objectAll:!!div.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:a.style.opacity==="0.5",cssFloat:!!a.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};
script.type="text/javascript";
try{script.appendChild(document.createTextNode("window."+id+"=1;"))
}catch(e){}root.insertBefore(script,root.firstChild);
if(window[id]){jQuery.support.scriptEval=true;
delete window[id]
}root.removeChild(script);
if(div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){jQuery.support.noCloneEvent=false;
div.detachEvent("onclick",arguments.callee)
});
div.cloneNode(true).fireEvent("onclick")
}jQuery(function(){var div=document.createElement("div");
div.style.width=div.style.paddingLeft="1px";
document.body.appendChild(div);
jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;
document.body.removeChild(div).style.display="none"
})
})();
var styleFloat=jQuery.support.cssFloat?"cssFloat":"styleFloat";
jQuery.props={"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};
jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!=="string"){return this._load(url)
}var off=url.indexOf(" ");
if(off>=0){var selector=url.slice(off,url.length);
url=url.slice(0,off)
}var type="GET";
if(params){if(jQuery.isFunction(params)){callback=params;
params=null
}else{if(typeof params==="object"){params=jQuery.param(params);
type="POST"
}}}var self=this;
jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified"){self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText)
}if(callback){self.each(callback,[res.responseText,status,res])
}}});
return this
},serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val}
}):{name:elem.name,value:val}
}).get()
}});
jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f)
}
});
var jsc=now();
jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;
data=null
}return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type})
},getScript:function(url,callback){return jQuery.get(url,null,callback,"script")
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;
data={}
}return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type})
},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));
var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data)
}if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre)){s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?"
}}else{if(!s.data||!s.data.match(jsre)){s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?"
}}s.dataType="json"
}if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;
if(s.data){s.data=(s.data+"").replace(jsre,"="+jsonp+"$1")
}s.url=s.url.replace(jsre,"="+jsonp+"$1");
s.dataType="script";
window[jsonp]=function(tmp){data=tmp;
success();
complete();
window[jsonp]=undefined;
try{delete window[jsonp]
}catch(e){}if(head){head.removeChild(script)
}}
}if(s.dataType=="script"&&s.cache==null){s.cache=false
}if(s.cache===false&&type=="GET"){var ts=now();
var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");
s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"")
}if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;
s.data=null
}if(s.global&&!jQuery.active++){jQuery.event.trigger("ajaxStart")
}var parts=/^(\w+:)?\/\/([^\/?#]+)/.exec(s.url);
if(s.dataType=="script"&&type=="GET"&&parts&&(parts[1]&&parts[1]!=location.protocol||parts[2]!=location.host)){var head=document.getElementsByTagName("head")[0];
var script=document.createElement("script");
script.src=s.url;
if(s.scriptCharset){script.charset=s.scriptCharset
}if(!jsonp){var done=false;
script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;
success();
complete();
script.onload=script.onreadystatechange=null;
head.removeChild(script)
}}
}head.appendChild(script);
return undefined
}var requestDone=false;
var xhr=s.xhr();
if(s.username){xhr.open(type,s.url,s.async,s.username,s.password)
}else{xhr.open(type,s.url,s.async)
}try{if(s.data){xhr.setRequestHeader("Content-Type",s.contentType)
}if(s.ifModified){xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT")
}xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default)
}catch(e){}if(s.beforeSend&&s.beforeSend(xhr,s)===false){if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop")
}xhr.abort();
return false
}if(s.global){jQuery.event.trigger("ajaxSend",[xhr,s])
}var onreadystatechange=function(isTimeout){if(xhr.readyState==0){if(ival){clearInterval(ival);
ival=null;
if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop")
}}}else{if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;
if(ival){clearInterval(ival);
ival=null
}status=isTimeout=="timeout"?"timeout":!jQuery.httpSuccess(xhr)?"error":s.ifModified&&jQuery.httpNotModified(xhr,s.url)?"notmodified":"success";
if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s)
}catch(e){status="parsererror"
}}if(status=="success"){var modRes;
try{modRes=xhr.getResponseHeader("Last-Modified")
}catch(e){}if(s.ifModified&&modRes){jQuery.lastModified[s.url]=modRes
}if(!jsonp){success()
}}else{jQuery.handleError(s,xhr,status)
}complete();
if(isTimeout){xhr.abort()
}if(s.async){xhr=null
}}}};
if(s.async){var ival=setInterval(onreadystatechange,13);
if(s.timeout>0){setTimeout(function(){if(xhr&&!requestDone){onreadystatechange("timeout")
}},s.timeout)
}}try{xhr.send(s.data)
}catch(e){jQuery.handleError(s,xhr,null,e)
}if(!s.async){onreadystatechange()
}function success(){if(s.success){s.success(data,status)
}if(s.global){jQuery.event.trigger("ajaxSuccess",[xhr,s])
}}function complete(){if(s.complete){s.complete(xhr,status)
}if(s.global){jQuery.event.trigger("ajaxComplete",[xhr,s])
}if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop")
}}return xhr
},handleError:function(s,xhr,status,e){if(s.error){s.error(xhr,status,e)
}if(s.global){jQuery.event.trigger("ajaxError",[xhr,s,e])
}},active:0,httpSuccess:function(xhr){try{return !xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223
}catch(e){}return false
},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");
return xhr.status==304||xhrRes==jQuery.lastModified[url]
}catch(e){}return false
},httpData:function(xhr,type,s){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.tagName=="parsererror"){throw"parsererror"
}if(s&&s.dataFilter){data=s.dataFilter(data,type)
}if(typeof data==="string"){if(type=="script"){jQuery.globalEval(data)
}if(type=="json"){data=window["eval"]("("+data+")")
}}return data
},param:function(a){var s=[];
function add(key,value){s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
}if(jQuery.isArray(a)||a.jquery){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(var j in a){if(jQuery.isArray(a[j])){jQuery.each(a[j],function(){add(j,this)
})
}else{add(j,jQuery.isFunction(a[j])?a[j]():a[j])
}}}return s.join("&").replace(/%20/g,"+")
}});
var elemdisplay={},timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
function genFx(type,num){var obj={};
jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type
});
return obj
}jQuery.fn.extend({show:function(speed,callback){if(speed){return this.animate(genFx("show",3),speed,callback)
}else{for(var i=0,l=this.length;
i<l;
i++){var old=jQuery.data(this[i],"olddisplay");
this[i].style.display=old||"";
if(jQuery.css(this[i],"display")==="none"){var tagName=this[i].tagName,display;
if(elemdisplay[tagName]){display=elemdisplay[tagName]
}else{var elem=jQuery("<"+tagName+" />").appendTo("body");
display=elem.css("display");
if(display==="none"){display="block"
}elem.remove();
elemdisplay[tagName]=display
}jQuery.data(this[i],"olddisplay",display)
}}for(var i=0,l=this.length;
i<l;
i++){this[i].style.display=jQuery.data(this[i],"olddisplay")||""
}return this
}},hide:function(speed,callback){if(speed){return this.animate(genFx("hide",3),speed,callback)
}else{for(var i=0,l=this.length;
i<l;
i++){var old=jQuery.data(this[i],"olddisplay");
if(!old&&old!=="none"){jQuery.data(this[i],"olddisplay",jQuery.css(this[i],"display"))
}}for(var i=0,l=this.length;
i<l;
i++){this[i].style.display="none"
}return this
}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){var bool=typeof fn==="boolean";
return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn==null||bool?this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");
jQuery(this)[state?"show":"hide"]()
}):this.animate(genFx("toggle",3),fn,fn2)
},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback)
},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);
return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,hidden=this.nodeType==1&&jQuery(this).is(":hidden"),self=this;
for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden){return opt.complete.call(this)
}if((p=="height"||p=="width")&&this.style){opt.display=jQuery.css(this,"display");
opt.overflow=this.style.overflow
}}if(opt.overflow!=null){this.style.overflow="hidden"
}opt.curAnim=jQuery.extend({},prop);
jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);
if(/toggle|show|hide/.test(val)){e[val=="toggle"?hidden?"show":"hide":val](prop)
}else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;
if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";
if(unit!="px"){self.style[name]=(end||1)+unit;
start=((end||1)/e.cur(true))*start;
self.style[name]=start+unit
}if(parts[1]){end=((parts[1]=="-="?-1:1)*end)+start
}e.custom(start,end,unit)
}else{e.custom(start,val,"")
}}});
return true
})
},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;
if(clearQueue){this.queue([])
}this.each(function(){for(var i=timers.length-1;
i>=0;
i--){if(timers[i].elem==this){if(gotoEnd){timers[i](true)
}timers.splice(i,1)
}}});
if(!gotoEnd){this.dequeue()
}return this
}});
jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(name,props){jQuery.fn[name]=function(speed,callback){return this.animate(props,speed,callback)
}
});
jQuery.extend({speed:function(speed,easing,fn){var opt=typeof speed==="object"?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:jQuery.fx.speeds[opt.duration]||jQuery.fx.speeds._default;
opt.old=opt.complete;
opt.complete=function(){if(opt.queue!==false){jQuery(this).dequeue()
}if(jQuery.isFunction(opt.old)){opt.old.call(this)
}};
return opt
},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p
},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum
}},timers:[],fx:function(elem,options,prop){this.options=options;
this.elem=elem;
this.prop=prop;
if(!options.orig){options.orig={}
}}});
jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);
if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(force){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var r=parseFloat(jQuery.css(this.elem,this.prop,force));
return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0
},custom:function(from,to,unit){this.startTime=now();
this.start=from;
this.end=to;
this.unit=unit||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var self=this;
function t(gotoEnd){return self.step(gotoEnd)
}t.elem=this.elem;
if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(function(){var timers=jQuery.timers;
for(var i=0;
i<timers.length;
i++){if(!timers[i]()){timers.splice(i--,1)
}}if(!timers.length){clearInterval(timerId);
timerId=undefined
}},13)
}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);
this.options.show=true;
this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());
jQuery(this.elem).show()
},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(gotoEnd){var t=now();
if(gotoEnd||t>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var done=true;
for(var i in this.options.curAnim){if(this.options.curAnim[i]!==true){done=false
}}if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
this.elem.style.display=this.options.display;
if(jQuery.css(this.elem,"display")=="none"){this.elem.style.display="block"
}}if(this.options.hide){jQuery(this.elem).hide()
}if(this.options.hide||this.options.show){for(var p in this.options.curAnim){jQuery.attr(this.elem.style,p,this.options.orig[p])
}}this.options.complete.call(this.elem)
}return false
}else{var n=t-this.startTime;
this.state=n/this.options.duration;
this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now)
},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=fx.now+fx.unit
}else{fx.elem[fx.prop]=fx.now
}}}});
if(document.documentElement.getBoundingClientRect){jQuery.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return jQuery.offset.bodyOffset(this[0])
}var box=this[0].getBoundingClientRect(),doc=this[0].ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||jQuery.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(self.pageXOffset||jQuery.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;
return{top:top,left:left}
}
}else{jQuery.fn.offset=function(){if(!this[0]){return{top:0,left:0}
}if(this[0]===this[0].ownerDocument.body){return jQuery.offset.bodyOffset(this[0])
}jQuery.offset.initialized||jQuery.offset.initialize();
var elem=this[0],offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView.getComputedStyle(elem,null),top=elem.offsetTop,left=elem.offsetLeft;
while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){computedStyle=defaultView.getComputedStyle(elem,null);
top-=elem.scrollTop,left-=elem.scrollLeft;
if(elem===offsetParent){top+=elem.offsetTop,left+=elem.offsetLeft;
if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.tagName))){top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0
}prevOffsetParent=offsetParent,offsetParent=elem.offsetParent
}if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0
}prevComputedStyle=computedStyle
}if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop,left+=body.offsetLeft
}if(prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop),left+=Math.max(docElem.scrollLeft,body.scrollLeft)
}return{top:top,left:left}
}
}jQuery.offset={initialize:function(){if(this.initialized){return 
}var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,rules,prop,bodyMarginTop=body.style.marginTop,html='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
rules={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};
for(prop in rules){container.style[prop]=rules[prop]
}container.innerHTML=html;
body.insertBefore(container,body.firstChild);
innerDiv=container.firstChild,checkDiv=innerDiv.firstChild,td=innerDiv.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(checkDiv.offsetTop!==5);
this.doesAddBorderForTableAndCells=(td.offsetTop===5);
innerDiv.style.overflow="hidden",innerDiv.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);
body.style.marginTop="1px";
this.doesNotIncludeMarginInBodyOffset=(body.offsetTop===0);
body.style.marginTop=bodyMarginTop;
body.removeChild(container);
this.initialized=true
},bodyOffset:function(body){jQuery.offset.initialized||jQuery.offset.initialize();
var top=body.offsetTop,left=body.offsetLeft;
if(jQuery.offset.doesNotIncludeMarginInBodyOffset){top+=parseInt(jQuery.curCSS(body,"marginTop",true),10)||0,left+=parseInt(jQuery.curCSS(body,"marginLeft",true),10)||0
}return{top:top,left:left}
}};
jQuery.fn.extend({position:function(){var left=0,top=0,results;
if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();
offset.top-=num(this,"marginTop");
offset.left-=num(this,"marginLeft");
parentOffset.top+=num(offsetParent,"borderTopWidth");
parentOffset.left+=num(offsetParent,"borderLeftWidth");
results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}
}return results
},offsetParent:function(){var offsetParent=this[0].offsetParent||document.body;
while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,"position")=="static")){offsetParent=offsetParent.offsetParent
}return jQuery(offsetParent)
}});
jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;
jQuery.fn[method]=function(val){if(!this[0]){return null
}return val!==undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val
}):this[0]==window||this[0]==document?self[i?"pageYOffset":"pageXOffset"]||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method]
}
});
jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom",lower=name.toLowerCase();
jQuery.fn["inner"+name]=function(){return this[0]?jQuery.css(this[0],lower,false,"padding"):null
};
jQuery.fn["outer"+name]=function(margin){return this[0]?jQuery.css(this[0],lower,false,margin?"margin":"border"):null
};
var type=name.toLowerCase();
jQuery.fn[type]=function(size){return this[0]==window?document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(document.documentElement["client"+name],document.body["scroll"+name],document.documentElement["scroll"+name],document.body["offset"+name],document.documentElement["offset"+name]):size===undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,typeof size==="string"?size:size+"px")
}
})
})();
jQuery.ui||(function(G){var A=G.fn.remove,F=G.browser.mozilla&&(parseFloat(G.browser.version)<1.9);
G.ui={version:"1.7.2",plugin:{add:function(L,K,N){var J=G.ui[L].prototype;
for(var M in N){J.plugins[M]=J.plugins[M]||[];
J.plugins[M].push([K,N[M]])
}},call:function(M,K,L){var N=M.plugins[K];
if(!N||!M.element[0].parentNode){return 
}for(var J=0;
J<N.length;
J++){if(M.options[N[J][0]]){N[J][1].apply(M.element,L)
}}}},contains:function(J,K){return document.compareDocumentPosition?J.compareDocumentPosition(K)&16:J!==K&&J.contains(K)
},hasScroll:function(J,L){if(G(J).css("overflow")=="hidden"){return false
}var M=(L&&L=="left")?"scrollLeft":"scrollTop",K=false;
if(J[M]>0){return true
}J[M]=1;
K=(J[M]>0);
J[M]=0;
return K
},isOverAxis:function(K,L,J){return(K>L)&&(K<(L+J))
},isOver:function(N,L,O,J,M,K){return G.ui.isOverAxis(N,O,M)&&G.ui.isOverAxis(L,J,K)
},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};
if(F){var D=G.attr,E=G.fn.removeAttr,B="http://www.w3.org/2005/07/aaa",I=/^aria-/,H=/^wairole:/;
G.attr=function(L,M,K){var J=K!==undefined;
return(M=="role"?(J?D.call(this,L,M,"wairole:"+K):(D.apply(this,arguments)||"").replace(H,"")):(I.test(M)?(J?L.setAttributeNS(B,M.replace(I,"aaa:"),K):D.call(this,L,M.replace(I,"aaa:"))):D.apply(this,arguments)))
};
G.fn.removeAttr=function(J){return(I.test(J)?this.each(function(){this.removeAttributeNS(B,J.replace(I,""))
}):E.call(this,J))
}
}G.fn.extend({remove:function(){G("*",this).add(this).each(function(){G(this).triggerHandler("remove")
});
return A.apply(this,arguments)
},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")
},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false
})
},scrollParent:function(){var J;
if((G.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(G.curCSS(this,"position",1))&&(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))
}).eq(0)
}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(G.curCSS(this,"overflow",1)+G.curCSS(this,"overflow-y",1)+G.curCSS(this,"overflow-x",1))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!J.length?G(document):J
}});
G.extend(G.expr[":"],{data:function(J,K,L){return !!G.data(J,L[3])
},focusable:function(K){var J=K.nodeName.toLowerCase(),L=G.attr(K,"tabindex");
return(/input|select|textarea|button|object/.test(J)?!K.disabled:"a"==J||"area"==J?K.href||!isNaN(L):!isNaN(L))&&!G(K)["area"==J?"parents":"closest"](":hidden").length
},tabbable:function(J){var K=G.attr(J,"tabindex");
return(isNaN(K)||K>=0)&&G(J).is(":focusable")
}});
function C(J,O,N,K){function L(P){var Q=G[J][O][P]||[];
return(typeof Q=="string"?Q.split(/,?\s+/):Q)
}var M=L("getter");
if(K.length==1&&typeof K[0]=="string"){M=M.concat(L("getterSetter"))
}return(G.inArray(N,M)!=-1)
}G.widget=function(K,L){var J=K.split(".")[0];
K=K.split(".")[1];
G.fn[K]=function(N){var P=(typeof N=="string"),O=Array.prototype.slice.call(arguments,1);
if(P&&N.substring(0,1)=="_"){return this
}if(P&&C(J,K,N,O)){var M=G.data(this[0],K);
return(M?M[N].apply(M,O):undefined)
}return this.each(function(){var Q=G.data(this,K);
(!Q&&!P&&G.data(this,K,new G[J][K](this,N))._init());
(Q&&P&&G.isFunction(Q[N])&&Q[N].apply(Q,O))
})
};
G[J]=G[J]||{};
G[J][K]=function(N,O){var M=this;
this.namespace=J;
this.widgetName=K;
this.widgetEventPrefix=G[J][K].eventPrefix||K;
this.widgetBaseClass=J+"-"+K;
this.options=G.extend({},G.widget.defaults,G[J][K].defaults,G.metadata&&G.metadata.get(N)[K],O);
this.element=G(N).bind("setData."+K,function(Q,R,P){if(Q.target==N){return M._setData(R,P)
}}).bind("getData."+K,function(P,Q){if(P.target==N){return M._getData(Q)
}}).bind("remove",function(){return M.destroy()
})
};
G[J][K].prototype=G.extend({},G.widget.prototype,L);
G[J][K].getterSetter="option"
};
G.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")
},option:function(K,J){var L=K,M=this;
if(typeof K=="string"){if(J===undefined){return this._getData(K)
}L={};
L[K]=J
}G.each(L,function(O,N){M._setData(O,N)
})
},_getData:function(J){return this.options[J]
},_setData:function(K,J){this.options[K]=J;
if(K=="disabled"){this.element[J?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",J)
}},enable:function(){this._setData("disabled",false)
},disable:function(){this._setData("disabled",true)
},_trigger:function(K,J,P){var N=this.options[K],M=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);
J=G.Event(J);
J.type=M;
if(J.originalEvent){for(var L=G.event.props.length,O;
L;
){O=G.event.props[--L];
J[O]=J.originalEvent[O]
}}this.element.trigger(J,P);
return !(G.isFunction(N)&&N.call(this.element[0],J,P)===false||J.isDefaultPrevented())
}};
G.widget.defaults={disabled:false};
G.ui.mouse={_mouseInit:function(){var J=this;
this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)
}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;
K.stopImmediatePropagation();
return false
}});
if(G.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");
this.element.attr("unselectable","on")
}this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
(G.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))
},_mouseDown:function(K){K.originalEvent=K.originalEvent||{};
if(K.originalEvent.mouseHandled){return 
}(this._mouseStarted&&this._mouseUp(K));
this._mouseDownEvent=K;
var L=this,J=(K.which==1),M=(typeof this.options.cancel=="string"?G(K.target).parents().add(K.target).filter(this.options.cancel).length:false);
if(!J||M||!this._mouseCapture(K)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){L.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(K)&&this._mouseDelayMet(K)){this._mouseStarted=(this._mouseStart(K)!==false);
if(!this._mouseStarted){K.preventDefault();
return true
}}this._mouseMoveDelegate=function(N){return L._mouseMove(N)
};
this._mouseUpDelegate=function(N){return L._mouseUp(N)
};
G(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
(G.browser.safari||K.preventDefault());
K.originalEvent.mouseHandled=true;
return true
},_mouseMove:function(J){if(G.browser.msie&&!J.button){return this._mouseUp(J)
}if(this._mouseStarted){this._mouseDrag(J);
return J.preventDefault()
}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);
(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))
}return !this._mouseStarted
},_mouseUp:function(J){G(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
this._preventClickEvent=(J.target==this._mouseDownEvent.target);
this._mouseStop(J)
}return false
},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)
},_mouseDelayMet:function(J){return this.mouseDelayMet
},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true
}};
G.ui.mouse.defaults={cancel:null,distance:1,delay:0}
})(jQuery);
(function(A){A.widget("ui.accordion",{_init:function(){var C=this.options,B=this;
this.running=0;
if(C.collapsible==A.ui.accordion.defaults.collapsible&&C.alwaysOpen!=A.ui.accordion.defaults.alwaysOpen){C.collapsible=!C.alwaysOpen
}if(C.navigation){var D=this.element.find("a").filter(C.navigationFilter);
if(D.length){if(D.filter(C.header).length){this.active=D
}else{this.active=D.parent().parent().prev();
D.addClass("ui-accordion-content-active")
}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");
if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")
}this.headers=this.element.find(C.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){A(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){A(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){A(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){A(this).removeClass("ui-state-focus")
});
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
this.active=this._findActive(this.active||C.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
this.active.next().addClass("ui-accordion-content-active");
A("<span/>").addClass("ui-icon "+C.icons.header).prependTo(this.headers);
this.active.find(".ui-icon").toggleClass(C.icons.header).toggleClass(C.icons.headerSelected);
if(A.browser.msie){this.element.find("a").css("zoom","1")
}this.resize();
this.element.attr("role","tablist");
this.headers.attr("role","tab").bind("keydown",function(E){return B._keydown(E)
}).next().attr("role","tabpanel");
this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")
}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")
}if(!A.browser.safari){this.headers.find("a").attr("tabIndex","-1")
}if(C.event){this.headers.bind((C.event)+".accordion",function(E){return B._clickHandler.call(B,E,this)
})
}},destroy:function(){var C=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");
this.headers.find("a").removeAttr("tabindex");
this.headers.children(".ui-icon").remove();
var B=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");
if(C.autoHeight||C.fillHeight){B.css("height","")
}},_setData:function(B,C){if(B=="alwaysOpen"){B="collapsible";
C=!C
}A.widget.prototype._setData.apply(this,arguments)
},_keydown:function(E){var C=this.options,D=A.ui.keyCode;
if(C.disabled||E.altKey||E.ctrlKey){return 
}var F=this.headers.length;
var B=this.headers.index(E.target);
var G=false;
switch(E.keyCode){case D.RIGHT:case D.DOWN:G=this.headers[(B+1)%F];
break;
case D.LEFT:case D.UP:G=this.headers[(B-1+F)%F];
break;
case D.SPACE:case D.ENTER:return this._clickHandler({target:E.target},E.target)
}if(G){A(E.target).attr("tabIndex","-1");
A(G).attr("tabIndex","0");
G.focus();
return false
}return true
},resize:function(){var C=this.options,D;
if(C.fillSpace){if(A.browser.msie){var B=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}D=this.element.parent().height();
if(A.browser.msie){this.element.parent().css("overflow",B)
}this.headers.each(function(){D-=A(this).outerHeight()
});
var E=0;
this.headers.next().each(function(){E=Math.max(E,A(this).innerHeight()-A(this).height())
}).height(Math.max(0,D-E)).css("overflow","auto")
}else{if(C.autoHeight){D=0;
this.headers.next().each(function(){D=Math.max(D,A(this).outerHeight())
}).height(D)
}}},activate:function(B){var C=this._findActive(B)[0];
this._clickHandler({target:C},C)
},_findActive:function(B){return B?typeof B=="number"?this.headers.filter(":eq("+B+")"):this.headers.not(this.headers.not(B)):B===false?A([]):this.headers.filter(":eq(0)")
},_clickHandler:function(J,F){var H=this.options;
if(H.disabled){return false
}if(!J.target&&H.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(H.icons.headerSelected).addClass(H.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var D=this.active.next(),G={options:H,newHeader:A([]),oldHeader:H.active,newContent:A([]),oldContent:D},I=(this.active=A([]));
this._toggle(I,D,G);
return false
}var E=A(J.currentTarget||F);
var C=E[0]==this.active[0];
if(this.running||(!H.collapsible&&C)){return false
}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(H.icons.headerSelected).addClass(H.icons.header);
this.active.next().addClass("ui-accordion-content-active");
if(!C){E.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(H.icons.header).addClass(H.icons.headerSelected);
E.next().addClass("ui-accordion-content-active")
}var I=E.next(),D=this.active.next(),G={options:H,newHeader:C&&H.collapsible?A([]):E,oldHeader:this.active,newContent:C&&H.collapsible?A([]):I.find("> *"),oldContent:D.find("> *")},B=this.headers.index(this.active[0])>this.headers.index(E[0]);
this.active=C?A([]):E;
this._toggle(I,D,G,C,B);
return false
},_toggle:function(M,F,H,E,D){var K=this.options,B=this;
this.toShow=M;
this.toHide=F;
this.data=H;
var L=function(){if(!B){return 
}return B._completed.apply(B,arguments)
};
this._trigger("changestart",null,this.data);
this.running=F.size()===0?M.size():F.size();
if(K.animated){var I={};
if(K.collapsible&&E){I={toShow:A([]),toHide:F,complete:L,down:D,autoHeight:K.autoHeight||K.fillSpace}
}else{I={toShow:M,toHide:F,complete:L,down:D,autoHeight:K.autoHeight||K.fillSpace}
}if(!K.proxied){K.proxied=K.animated
}if(!K.proxiedDuration){K.proxiedDuration=K.duration
}K.animated=A.isFunction(K.proxied)?K.proxied(I):K.proxied;
K.duration=A.isFunction(K.proxiedDuration)?K.proxiedDuration(I):K.proxiedDuration;
var C=A.ui.accordion.animations,J=K.duration,G=K.animated;
if(!C[G]){C[G]=function(N){this.slide(N,{easing:G,duration:J||700})
}
}C[G](I)
}else{if(K.collapsible&&E){M.toggle()
}else{F.hide();
M.show()
}L(true)
}F.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();
M.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()
},_completed:function(B){var C=this.options;
this.running=B?0:--this.running;
if(this.running){return 
}if(C.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})
}this._trigger("change",null,this.data)
}});
A.extend(A.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()
}},animations:{slide:function(B,D){B=A.extend({easing:"swing",duration:300},B,D);
if(!B.toHide.size()){B.toShow.animate({height:"show"},B);
return 
}if(!B.toShow.size()){B.toHide.animate({height:"hide"},B);
return 
}var I=B.toShow.css("overflow"),E,H={},F={},G=["height","paddingTop","paddingBottom"],J;
var C=B.toShow;
J=C[0].style.width;
C.width(parseInt(C.parent().width(),10)-parseInt(C.css("paddingLeft"),10)-parseInt(C.css("paddingRight"),10)-(parseInt(C.css("borderLeftWidth"),10)||0)-(parseInt(C.css("borderRightWidth"),10)||0));
A.each(G,function(M,K){F[K]="hide";
var L=(""+A.css(B.toShow[0],K)).match(/^([\d+-.]+)(.*)$/);
H[K]={value:L[1],unit:L[2]||"px"}
});
B.toShow.css({height:0,overflow:"hidden"}).show();
B.toHide.filter(":hidden").each(B.complete).end().filter(":visible").animate(F,{step:function(L,K){if(K.prop=="height"){E=(K.now-K.start)/(K.end-K.start)
}B.toShow[0].style[K.prop]=(E*H[K.prop].value)+H[K.prop].unit
},duration:B.duration,easing:B.easing,complete:function(){if(!B.autoHeight){B.toShow.css("height","")
}B.toShow.css("width",J);
B.toShow.css({overflow:I});
B.complete()
}})
},bounceslide:function(B){this.slide(B,{easing:B.down?"easeOutBounce":"swing",duration:B.down?1000:200})
},easeslide:function(B){this.slide(B,{easing:"easeinout",duration:700})
}}})
})(jQuery);
(function(A){A.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable
}this._tabify(true)
},_setData:function(B,C){if(B=="selected"){if(this.options.collapsible&&C==this.options.selected){return 
}this.select(C)
}else{this.options[B]=C;
if(B=="deselectable"){this.options.collapsible=C
}this._tabify()
}},_tabId:function(B){return B.title&&B.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+A.data(B)
},_sanitizeSelector:function(B){return B.replace(/:/g,"\\:")
},_cookie:function(){var B=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+A.data(this.list[0]));
return A.cookie.apply(null,[B].concat(A.makeArray(arguments)))
},_ui:function(C,B){return{tab:C,panel:B,index:this.anchors.index(C)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var B=A(this);
B.html(B.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(C){this.list=this.element.children("ul:first");
this.lis=A("li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return A("a",this)[0]
});
this.panels=A([]);
var B=this,L=this.options;
var M=/^#.+/;
this.anchors.each(function(S,U){var T=A(U).attr("href");
var R=T.split("#")[0],Q;
if(R&&(R===location.toString().split("#")[0]||(Q=A("base")[0])&&R===Q.href)){T=U.hash;
U.href=T
}if(M.test(T)){B.panels=B.panels.add(B._sanitizeSelector(T))
}else{if(T!="#"){A.data(U,"href.tabs",T);
A.data(U,"load.tabs",T.replace(/#.*$/,""));
var O=B._tabId(U);
U.href="#"+O;
var P=A("#"+O);
if(!P.length){P=A(L.panelTemplate).attr("id",O).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(B.panels[S-1]||B.list);
P.data("destroy.tabs",true)
}B.panels=B.panels.add(P)
}else{L.disabled.push(S)
}}});
if(C){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(L.selected===undefined){if(location.hash){this.anchors.each(function(O,P){if(P.hash==location.hash){L.selected=O;
return false
}})
}if(typeof L.selected!="number"&&L.cookie){L.selected=parseInt(B._cookie(),10)
}if(typeof L.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){L.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}L.selected=L.selected||0
}else{if(L.selected===null){L.selected=-1
}}L.selected=((L.selected>=0&&this.anchors[L.selected])||L.selected<0)?L.selected:0;
L.disabled=A.unique(L.disabled.concat(A.map(this.lis.filter(".ui-state-disabled"),function(O,P){return B.lis.index(O)
}))).sort();
if(A.inArray(L.selected,L.disabled)!=-1){L.disabled.splice(A.inArray(L.selected,L.disabled),1)
}this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(L.selected>=0&&this.anchors.length){this.panels.eq(L.selected).removeClass("ui-tabs-hide");
this.lis.eq(L.selected).addClass("ui-tabs-selected ui-state-active");
B.element.queue("tabs",function(){B._trigger("show",null,B._ui(B.anchors[L.selected],B.panels[L.selected]))
});
this.load(L.selected)
}A(window).bind("unload",function(){B.lis.add(B.anchors).unbind(".tabs");
B.lis=B.anchors=B.panels=null
})
}else{L.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[L.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(L.cookie){this._cookie(L.selected,L.cookie)
}for(var I=0,D;
(D=this.lis[I]);
I++){A(D)[A.inArray(I,L.disabled)!=-1&&!A(D).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}if(L.cache===false){this.anchors.removeData("cache.tabs")
}this.lis.add(this.anchors).unbind(".tabs");
if(L.event!="mouseover"){var J=function(P,O){if(O.is(":not(.ui-state-disabled)")){O.addClass("ui-state-"+P)
}};
var G=function(P,O){O.removeClass("ui-state-"+P)
};
this.lis.bind("mouseover.tabs",function(){J("hover",A(this))
});
this.lis.bind("mouseout.tabs",function(){G("hover",A(this))
});
this.anchors.bind("focus.tabs",function(){J("focus",A(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){G("focus",A(this).closest("li"))
})
}var N,H;
if(L.fx){if(A.isArray(L.fx)){N=L.fx[0];
H=L.fx[1]
}else{N=H=L.fx
}}function K(O,P){O.css({display:""});
if(A.browser.msie&&P.opacity){O[0].style.removeAttribute("filter")
}}var F=H?function(O,P){A(O).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
P.hide().removeClass("ui-tabs-hide").animate(H,H.duration||"normal",function(){K(P,H);
B._trigger("show",null,B._ui(O,P[0]))
})
}:function(O,P){A(O).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
P.removeClass("ui-tabs-hide");
B._trigger("show",null,B._ui(O,P[0]))
};
var E=N?function(P,O){O.animate(N,N.duration||"normal",function(){B.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
O.addClass("ui-tabs-hide");
K(O,N);
B.element.dequeue("tabs")
})
}:function(Q,O,P){B.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
O.addClass("ui-tabs-hide");
B.element.dequeue("tabs")
};
this.anchors.bind(L.event+".tabs",function(){var R=this,P=A(this).closest("li"),O=B.panels.filter(":not(.ui-tabs-hide)"),Q=A(B._sanitizeSelector(this.hash));
if((P.hasClass("ui-tabs-selected")&&!L.collapsible)||P.hasClass("ui-state-disabled")||P.hasClass("ui-state-processing")||B._trigger("select",null,B._ui(this,Q[0]))===false){this.blur();
return false
}L.selected=B.anchors.index(this);
B.abort();
if(L.collapsible){if(P.hasClass("ui-tabs-selected")){L.selected=-1;
if(L.cookie){B._cookie(L.selected,L.cookie)
}B.element.queue("tabs",function(){E(R,O)
}).dequeue("tabs");
this.blur();
return false
}else{if(!O.length){if(L.cookie){B._cookie(L.selected,L.cookie)
}B.element.queue("tabs",function(){F(R,Q)
});
B.load(B.anchors.index(this));
this.blur();
return false
}}}if(L.cookie){B._cookie(L.selected,L.cookie)
}if(Q.length){if(O.length){B.element.queue("tabs",function(){E(R,O)
})
}B.element.queue("tabs",function(){F(R,Q)
});
B.load(B.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}if(A.browser.msie){this.blur()
}});
this.anchors.bind("click.tabs",function(){return false
})
},destroy:function(){var B=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var D=A.data(this,"href.tabs");
if(D){this.href=D
}var C=A(this).unbind(".tabs");
A.each(["href","load","cache"],function(F,E){C.removeData(E+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){if(A.data(this,"destroy.tabs")){A(this).remove()
}else{A(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))
}});
if(B.cookie){this._cookie(null,B.cookie)
}},add:function(G,H,I){if(I===undefined){I=this.anchors.length
}var B=this,E=this.options,C=A(E.tabTemplate.replace(/#\{href\}/g,G).replace(/#\{label\}/g,H)),D=!G.indexOf("#")?G.replace("#",""):this._tabId(A("a",C)[0]);
C.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var F=A("#"+D);
if(!F.length){F=A(E.panelTemplate).attr("id",D).data("destroy.tabs",true)
}F.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(I>=this.lis.length){C.appendTo(this.list);
F.appendTo(this.list[0].parentNode)
}else{C.insertBefore(this.lis[I]);
F.insertBefore(this.panels[I])
}E.disabled=A.map(E.disabled,function(J,K){return J>=I?++J:J
});
this._tabify();
if(this.anchors.length==1){C.addClass("ui-tabs-selected ui-state-active");
F.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){B._trigger("show",null,B._ui(B.anchors[0],B.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[I],this.panels[I]))
},remove:function(B){var D=this.options,C=this.lis.eq(B).remove(),E=this.panels.eq(B).remove();
if(C.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(B+(B+1<this.anchors.length?1:-1))
}D.disabled=A.map(A.grep(D.disabled,function(F,G){return F!=B
}),function(F,G){return F>=B?--F:F
});
this._tabify();
this._trigger("remove",null,this._ui(C.find("a")[0],E[0]))
},enable:function(B){var C=this.options;
if(A.inArray(B,C.disabled)==-1){return 
}this.lis.eq(B).removeClass("ui-state-disabled");
C.disabled=A.grep(C.disabled,function(D,E){return D!=B
});
this._trigger("enable",null,this._ui(this.anchors[B],this.panels[B]))
},disable:function(D){var B=this,C=this.options;
if(D!=C.selected){this.lis.eq(D).addClass("ui-state-disabled");
C.disabled.push(D);
C.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[D],this.panels[D]))
}},select:function(B){if(typeof B=="string"){B=this.anchors.index(this.anchors.filter("[href$="+B+"]"))
}else{if(B===null){B=-1
}}if(B==-1&&this.options.collapsible){B=this.options.selected
}this.anchors.eq(B).trigger(this.options.event+".tabs")
},load:function(E){var G=this,C=this.options,B=this.anchors.eq(E)[0],F=A.data(B,"load.tabs");
this.abort();
if(!F||this.element.queue("tabs").length!==0&&A.data(B,"cache.tabs")){this.element.dequeue("tabs");
return 
}this.lis.eq(E).addClass("ui-state-processing");
if(C.spinner){var D=A("span",B);
D.data("label.tabs",D.html()).html(C.spinner)
}this.xhr=A.ajax(A.extend({},C.ajaxOptions,{url:F,success:function(I,J){A(G._sanitizeSelector(B.hash)).html(I);
G._cleanup();
if(C.cache){A.data(B,"cache.tabs",true)
}G._trigger("load",null,G._ui(G.anchors[E],G.panels[E]));
try{C.ajaxOptions.success(I,J)
}catch(H){}G.element.dequeue("tabs")
}}))
},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup()
},url:function(C,B){this.anchors.eq(C).removeData("cache.tabs").data("load.tabs",B)
},length:function(){return this.anchors.length
}});
A.extend(A.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});
A.extend(A.ui.tabs.prototype,{rotation:null,rotate:function(F,D){var B=this,C=this.options;
var G=B._rotate||(B._rotate=function(H){clearTimeout(B.rotation);
B.rotation=setTimeout(function(){var I=C.selected;
B.select(++I<B.anchors.length?I:0)
},F);
if(H){H.stopPropagation()
}});
var E=B._unrotate||(B._unrotate=!D?function(H){if(H.clientX){B.rotate(null)
}}:function(H){t=C.selected;
G()
});
if(F){this.element.bind("tabsshow",G);
this.anchors.bind(C.event+".tabs",E);
G()
}else{clearTimeout(B.rotation);
this.element.unbind("tabsshow",G);
this.anchors.unbind(C.event+".tabs",E);
delete this._rotate;
delete this._unrotate
}}})
})(jQuery);
jQuery.effects||(function(D){D.effects={version:"1.7.2",save:function(G,F){for(var H=0;
H<F.length;
H++){if(F[H]!==null){G.data("ec.storage."+F[H],G[0].style[F[H]])
}}},restore:function(G,F){for(var H=0;
H<F.length;
H++){if(F[H]!==null){G.css(F[H],G.data("ec.storage."+F[H]))
}}},setMode:function(G,F){if(F=="toggle"){F=G.is(":hidden")?"show":"hide"
}return F
},getBaseline:function(H,G){var F,I;
switch(H[0]){case"top":F=0;
break;
case"middle":F=0.5;
break;
case"bottom":F=1;
break;
default:F=H[0]/G.height
}switch(H[1]){case"left":I=0;
break;
case"center":I=0.5;
break;
case"right":I=1;
break;
default:I=H[1]/G.width
}return{x:I,y:F}
},createWrapper:function(J){if(J.parent().is(".ui-effects-wrapper")){return J.parent()
}var I={width:J.outerWidth(true),height:J.outerHeight(true),"float":J.css("float")};
J.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');
var F=J.parent();
if(J.css("position")=="static"){F.css({position:"relative"});
J.css({position:"relative"})
}else{var G=J.css("top");
if(isNaN(parseInt(G,10))){G="auto"
}var H=J.css("left");
if(isNaN(parseInt(H,10))){H="auto"
}F.css({position:J.css("position"),top:G,left:H,zIndex:J.css("z-index")}).show();
J.css({position:"relative",top:0,left:0})
}F.css(I);
return F
},removeWrapper:function(F){if(F.parent().is(".ui-effects-wrapper")){return F.parent().replaceWith(F)
}return F
},setTransition:function(H,F,I,G){G=G||{};
D.each(F,function(J,K){unit=H.cssUnit(K);
if(unit[0]>0){G[K]=unit[0]*I+unit[1]
}});
return G
},animateClass:function(I,H,F,G){var K=(typeof F=="function"?F:(G?G:null));
var J=(typeof F=="string"?F:null);
return this.each(function(){var O={};
var Q=D(this);
var P=Q.attr("style")||"";
if(typeof P=="object"){P=P.cssText
}if(I.toggle){Q.hasClass(I.toggle)?I.remove=I.toggle:I.add=I.toggle
}var M=D.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));
if(I.add){Q.addClass(I.add)
}if(I.remove){Q.removeClass(I.remove)
}var L=D.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));
if(I.add){Q.removeClass(I.add)
}if(I.remove){Q.addClass(I.remove)
}for(var N in L){if(typeof L[N]!="function"&&L[N]&&N.indexOf("Moz")==-1&&N.indexOf("length")==-1&&L[N]!=M[N]&&(N.match(/color/i)||(!N.match(/color/i)&&!isNaN(parseInt(L[N],10))))&&(M.position!="static"||(M.position=="static"&&!N.match(/left|top|bottom|right/)))){O[N]=L[N]
}}Q.animate(O,H,J,function(){if(typeof D(this).attr("style")=="object"){D(this).attr("style")["cssText"]="";
D(this).attr("style")["cssText"]=P
}else{D(this).attr("style",P)
}if(I.add){D(this).addClass(I.add)
}if(I.remove){D(this).removeClass(I.remove)
}if(K){K.apply(this,arguments)
}})
})
}};
function E(I,J){var G=I[1]&&I[1].constructor==Object?I[1]:{};
if(J){G.mode=J
}var H=I[1]&&I[1].constructor!=Object?I[1]:(G.duration?G.duration:I[2]);
H=D.fx.off?0:typeof H==="number"?H:D.fx.speeds[H]||D.fx.speeds._default;
var F=G.callback||(D.isFunction(I[1])&&I[1])||(D.isFunction(I[2])&&I[2])||(D.isFunction(I[3])&&I[3]);
return[I[0],G,H,F]
}D.fn.extend({_show:D.fn.show,_hide:D.fn.hide,__toggle:D.fn.toggle,_addClass:D.fn.addClass,_removeClass:D.fn.removeClass,_toggleClass:D.fn.toggleClass,effect:function(H,I,G,F){return D.effects[H]?D.effects[H].call(this,{method:H,options:I||{},duration:G,callback:F}):null
},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)
}else{return this.effect.apply(this,E(arguments,"show"))
}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)
}else{return this.effect.apply(this,E(arguments,"hide"))
}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(D.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)
}else{return this.effect.apply(this,E(arguments,"toggle"))
}},addClass:function(H,I,F,G){return I?D.effects.animateClass.apply(this,[{add:H},I,F,G]):this._addClass(H)
},removeClass:function(H,I,F,G){return I?D.effects.animateClass.apply(this,[{remove:H},I,F,G]):this._removeClass(H)
},toggleClass:function(H,I,F,G){return((typeof I!=="boolean")&&I)?D.effects.animateClass.apply(this,[{toggle:H},I,F,G]):this._toggleClass(H,I)
},morph:function(J,H,I,F,G){return D.effects.animateClass.apply(this,[{add:H,remove:J},I,F,G])
},switchClass:function(){return this.morph.apply(this,arguments)
},cssUnit:function(H){var G=this.css(H),F=[];
D.each(["em","px","%","pt"],function(J,I){if(G.indexOf(I)>0){F=[parseFloat(G),I]
}});
return F
}});
D.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,G){D.fx.step[G]=function(H){if(H.state==0){H.start=C(H.elem,G);
H.end=A(H.end)
}H.elem.style[G]="rgb("+[Math.max(Math.min(parseInt((H.pos*(H.end[0]-H.start[0]))+H.start[0],10),255),0),Math.max(Math.min(parseInt((H.pos*(H.end[1]-H.start[1]))+H.start[1],10),255),0),Math.max(Math.min(parseInt((H.pos*(H.end[2]-H.start[2]))+H.start[2],10),255),0)].join(",")+")"
}
});
function A(F){var G;
if(F&&F.constructor==Array&&F.length==3){return F
}if(G=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return[parseInt(G[1],10),parseInt(G[2],10),parseInt(G[3],10)]
}if(G=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return[parseFloat(G[1])*2.55,parseFloat(G[2])*2.55,parseFloat(G[3])*2.55]
}if(G=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return[parseInt(G[1],16),parseInt(G[2],16),parseInt(G[3],16)]
}if(G=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return[parseInt(G[1]+G[1],16),parseInt(G[2]+G[2],16),parseInt(G[3]+G[3],16)]
}if(G=/rgba\(0, 0, 0, 0\)/.exec(F)){return B.transparent
}return B[D.trim(F).toLowerCase()]
}function C(F,H){var G;
do{G=D.curCSS(F,H);
if(G!=""&&G!="transparent"||D.nodeName(F,"body")){break
}H="backgroundColor"
}while(F=F.parentNode);
return A(G)
}var B={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};
D.easing.jswing=D.easing.swing;
D.extend(D.easing,{def:"easeOutQuad",swing:function(I,H,J,F,G){return D.easing[D.easing.def](I,H,J,F,G)
},easeInQuad:function(I,H,J,F,G){return F*(H/=G)*H+J
},easeOutQuad:function(I,H,J,F,G){return -F*(H/=G)*(H-2)+J
},easeInOutQuad:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H+J
}return -F/2*((--H)*(H-2)-1)+J
},easeInCubic:function(I,H,J,F,G){return F*(H/=G)*H*H+J
},easeOutCubic:function(I,H,J,F,G){return F*((H=H/G-1)*H*H+1)+J
},easeInOutCubic:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H+J
}return F/2*((H-=2)*H*H+2)+J
},easeInQuart:function(I,H,J,F,G){return F*(H/=G)*H*H*H+J
},easeOutQuart:function(I,H,J,F,G){return -F*((H=H/G-1)*H*H*H-1)+J
},easeInOutQuart:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H*H+J
}return -F/2*((H-=2)*H*H*H-2)+J
},easeInQuint:function(I,H,J,F,G){return F*(H/=G)*H*H*H*H+J
},easeOutQuint:function(I,H,J,F,G){return F*((H=H/G-1)*H*H*H*H+1)+J
},easeInOutQuint:function(I,H,J,F,G){if((H/=G/2)<1){return F/2*H*H*H*H*H+J
}return F/2*((H-=2)*H*H*H*H+2)+J
},easeInSine:function(I,H,J,F,G){return -F*Math.cos(H/G*(Math.PI/2))+F+J
},easeOutSine:function(I,H,J,F,G){return F*Math.sin(H/G*(Math.PI/2))+J
},easeInOutSine:function(I,H,J,F,G){return -F/2*(Math.cos(Math.PI*H/G)-1)+J
},easeInExpo:function(I,H,J,F,G){return(H==0)?J:F*Math.pow(2,10*(H/G-1))+J
},easeOutExpo:function(I,H,J,F,G){return(H==G)?J+F:F*(-Math.pow(2,-10*H/G)+1)+J
},easeInOutExpo:function(I,H,J,F,G){if(H==0){return J
}if(H==G){return J+F
}if((H/=G/2)<1){return F/2*Math.pow(2,10*(H-1))+J
}return F/2*(-Math.pow(2,-10*--H)+2)+J
},easeInCirc:function(I,H,J,F,G){return -F*(Math.sqrt(1-(H/=G)*H)-1)+J
},easeOutCirc:function(I,H,J,F,G){return F*Math.sqrt(1-(H=H/G-1)*H)+J
},easeInOutCirc:function(I,H,J,F,G){if((H/=G/2)<1){return -F/2*(Math.sqrt(1-H*H)-1)+J
}return F/2*(Math.sqrt(1-(H-=2)*H)+1)+J
},easeInElastic:function(L,J,M,F,G){var I=1.70158;
var H=0;
var K=F;
if(J==0){return M
}if((J/=G)==1){return M+F
}if(!H){H=G*0.3
}if(K<Math.abs(F)){K=F;
var I=H/4
}else{var I=H/(2*Math.PI)*Math.asin(F/K)
}return -(K*Math.pow(2,10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H))+M
},easeOutElastic:function(L,J,M,F,G){var I=1.70158;
var H=0;
var K=F;
if(J==0){return M
}if((J/=G)==1){return M+F
}if(!H){H=G*0.3
}if(K<Math.abs(F)){K=F;
var I=H/4
}else{var I=H/(2*Math.PI)*Math.asin(F/K)
}return K*Math.pow(2,-10*J)*Math.sin((J*G-I)*(2*Math.PI)/H)+F+M
},easeInOutElastic:function(L,J,M,F,G){var I=1.70158;
var H=0;
var K=F;
if(J==0){return M
}if((J/=G/2)==2){return M+F
}if(!H){H=G*(0.3*1.5)
}if(K<Math.abs(F)){K=F;
var I=H/4
}else{var I=H/(2*Math.PI)*Math.asin(F/K)
}if(J<1){return -0.5*(K*Math.pow(2,10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H))+M
}return K*Math.pow(2,-10*(J-=1))*Math.sin((J*G-I)*(2*Math.PI)/H)*0.5+F+M
},easeInBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158
}return F*(I/=G)*I*((H+1)*I-H)+K
},easeOutBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158
}return F*((I=I/G-1)*I*((H+1)*I+H)+1)+K
},easeInOutBack:function(J,I,K,F,G,H){if(H==undefined){H=1.70158
}if((I/=G/2)<1){return F/2*(I*I*(((H*=(1.525))+1)*I-H))+K
}return F/2*((I-=2)*I*(((H*=(1.525))+1)*I+H)+2)+K
},easeInBounce:function(I,H,J,F,G){return F-D.easing.easeOutBounce(I,G-H,0,F,G)+J
},easeOutBounce:function(I,H,J,F,G){if((H/=G)<(1/2.75)){return F*(7.5625*H*H)+J
}else{if(H<(2/2.75)){return F*(7.5625*(H-=(1.5/2.75))*H+0.75)+J
}else{if(H<(2.5/2.75)){return F*(7.5625*(H-=(2.25/2.75))*H+0.9375)+J
}else{return F*(7.5625*(H-=(2.625/2.75))*H+0.984375)+J
}}}},easeInOutBounce:function(I,H,J,F,G){if(H<G/2){return D.easing.easeInBounce(I,H*2,0,F,G)*0.5+J
}return D.easing.easeOutBounce(I,H*2-G,0,F,G)*0.5+F*0.5+J
}})
})(jQuery);
(function(A){A.effects.slide=function(B){return this.queue(function(){var H=A(this),I=["position","top","left"];
var D=A.effects.setMode(H,B.options.mode||"show");
var E=B.options.direction||"left";
A.effects.save(H,I);
H.show();
A.effects.createWrapper(H).css({overflow:"hidden"});
var G=(E=="up"||E=="down")?"top":"left";
var J=(E=="up"||E=="left")?"pos":"neg";
var C=B.options.distance||(G=="top"?H.outerHeight({margin:true}):H.outerWidth({margin:true}));
if(D=="show"){H.css(G,J=="pos"?-C:C)
}var F={};
F[G]=(D=="show"?(J=="pos"?"+=":"-="):(J=="pos"?"-=":"+="))+C;
H.animate(F,{queue:false,duration:B.duration,easing:B.options.easing,complete:function(){if(D=="hide"){H.hide()
}A.effects.restore(H,I);
A.effects.removeWrapper(H);
if(B.callback){B.callback.apply(this,arguments)
}H.dequeue()
}})
})
}
})(jQuery);
var initialized=false;
$.extend($.ui.tabs.prototype,{paging:function(D){var L={tabsPerPage:0,nextButton:"&#187;",prevButton:"&#171;",follow:false,cycle:false};
L=jQuery.extend(L,D);
var N=this,F=false,Q,P,J,E,H,M,K,C=null,I=$(window).height(),U=$(window).width();
function R(){E=0,Q=0,M=0,P=0,K=new Array(),H=new Array(),selectedTabWidths=new Array();
J=$(N.element).width();
$li=$("<li></li>").addClass("ui-tabs-paging-next");
$a=$('<a href="#"></a>').click(function(){G("next");
return false
}).html(L.nextButton);
$li.append($a);
N.lis.eq(N.length()-1).after($li);
P=$li.outerWidth({margin:true});
$li=$("<li></li>").addClass("ui-tabs-paging-prev");
$a=$('<a href="#"></a>').click(function(){G("prev");
return false
}).html(L.prevButton);
$li.append($a);
N.lis.eq(0).before($li);
P+=$li.outerWidth({margin:true});
N.lis.each(function(Z){if(Z==N.options.selected){selectedTabWidths[Z]=$(this).outerWidth({margin:true});
H[Z]=N.lis.eq(Z).removeClass("ui-tabs-selected").outerWidth({margin:true});
N.lis.eq(Z).addClass("ui-tabs-selected");
E+=selectedTabWidths[Z]
}else{H[Z]=$(this).outerWidth({margin:true});
selectedTabWidths[Z]=N.lis.eq(Z).addClass("ui-tabs-selected").outerWidth({margin:true});
N.lis.eq(Z).removeClass("ui-tabs-selected");
E+=H[Z]
}});
if(E>J){var V=0,W=0,Y=0;
for(var X=0;
X<H.length;
X++){if(W==0||selectedTabWidths[X]-H[X]>Y){Y=(selectedTabWidths[X]-H[X])
}if(K[V]==null){K[V]={start:X}
}else{if((X>0&&(X%L.tabsPerPage)==0)||(H[X]+W+P+12)>J){if((W+Y)>M){M=(W+Y)
}V++;
K[V]={start:X};
W=0
}}K[V].end=X+1;
W+=H[X];
if(X==N.options.selected){Q=V
}}if((W+Y)>M){M=(W+Y)
}N.lis.hide().slice(K[Q].start,K[Q].end).show();
if(Q==(K.length-1)&&!L.cycle){A("next")
}if(Q==0&&!L.cycle){A("prev")
}buttonPadding=J-M-P-($.browser.msie?8:0)-10;
if(buttonPadding>0){$(".ui-tabs-paging-next",N.element).css({paddingRight:buttonPadding+"px"})
}F=true
}else{S()
}$(window).bind("resize",T)
}function G(W){Q=Q+(W=="prev"?-1:1);
if(W=="prev"&&Q<0&&L.cycle){Q=K.length-1
}else{if((W=="prev"&&Q<0)||(W=="next"&&Q>=K.length)){Q=0
}}var X=K[Q].start;
var V=K[Q].end;
N.lis.hide().slice(K[Q].start,K[Q].end).show();
if(W=="prev"){O("next");
if(L.follow&&(N.options.selected<X||N.options.selected>(V-1))){N.select(V-1)
}if(!L.cycle&&X<=0){A("prev")
}}else{O("prev");
if(L.follow&&(N.options.selected<X||N.options.selected>(V-1))){N.select(X)
}if(!L.cycle&&V>=N.length()){A("next")
}}}function A(V){$(".ui-tabs-paging-"+V,N.element).addClass("ui-tabs-paging-disabled")
}function O(V){$(".ui-tabs-paging-"+V,N.element).removeClass("ui-tabs-paging-disabled")
}function T(){if(C){clearTimeout(C)
}if(I!=$(window).height()||U!=$(window).width()){C=setTimeout(B,100)
}}function B(){I=$(window).height();
U=$(window).width();
S();
R()
}function S(){$(".ui-tabs-paging-next",N.element).remove();
$(".ui-tabs-paging-prev",N.element).remove();
N.lis.show();
F=false;
$(window).unbind("resize",T)
}R();
$.extend($.ui.tabs.prototype,{pagingAdd:function(X,W,V){if(F){S();
this.add(X,W,V);
R()
}else{this.add(X,W,V)
}},pagingRemove:function(V){if(F){S();
this.remove(V);
R()
}else{this.remove(V)
}},pagingDestroy:function(){S()
}})
}});
jQuery.autocomplete=function(D,T){var O=this;
var X=$(D).attr("autocomplete","off");
if(T.inputClass){X.addClass(T.inputClass)
}var P=document.createElement("div");
var I=$(P);
I.hide().addClass(T.resultsClass).css("position","absolute");
I.focus(function(){K=true
});
I.blur(function(){K=false;
C()
});
if(T.width>0){I.css("width",T.width)
}$("body").append(P);
D.autocompleter=O;
var g=null;
var W="";
var h=-1;
var J={};
var a=false;
var K=false;
var A=null;
function L(){J={};
J.data={};
J.length=0
}L();
if(T.data!=null){var R="",q={},M=[];
if(typeof T.url!="string"){T.cacheLength=1
}for(var o=0;
o<T.data.length;
o++){M=((typeof T.data[o]=="string")?[T.data[o]]:T.data[o]);
if(M[0].length>0){var r=M[0].split("",1);
if(T.matchContains){r=M[0].split("")
}for(var n in r){sChar=r[n].toLowerCase();
if(!q[sChar]){q[sChar]=[]
}q[sChar].push(M)
}}}for(var m in q){T.cacheLength++;
E(m,q[m])
}}X.keydown(function(i){A=i.keyCode;
switch(i.keyCode){case 38:i.preventDefault();
c(-1);
break;
case 40:i.preventDefault();
c(1);
break;
case 9:case 13:if(e()){X.get(0).blur();
i.preventDefault()
}break;
default:h=-1;
if(g){clearTimeout(g)
}g=setTimeout(function(){S()
},T.delay);
break
}}).focus(function(){K=true
}).blur(function(){K=false
});
U();
function S(){if(A==46||(A>8&&A<32)){return I.hide()
}var i=X.val();
if(i==W){return 
}W=i;
if(i.length>=T.minChars){X.addClass(T.loadingClass);
b(i)
}else{X.removeClass(T.loadingClass);
I.hide()
}}function c(j){var i=$("li",P);
if(!i){return 
}h+=j;
if(h<0){h=0
}else{if(h>=i.size()){h=i.size()-1
}}i.removeClass("ac_over");
$(i[h]).addClass("ac_over")
}function e(){var i=$("li.ac_over",P)[0];
if(!i){var j=$("li",P);
if(T.selectOnly){if(j.length==1){i=j[0]
}}else{if(T.selectFirst){i=j[0]
}}}if(i){Q(i);
return true
}else{return false
}}function Q(i){if(!i){i=document.createElement("li");
i.extra=[];
i.selectValue=""
}var j=$.trim(i.selectValue?i.selectValue:i.innerHTML);
D.lastSelected=j;
W=j;
I.html("");
X.val(j);
U();
if(T.onItemSelect){setTimeout(function(){T.onItemSelect(i)
},1)
}}function B(u,j){var s=X.get(0);
if(s.createTextRange){var i=s.createTextRange();
i.collapse(true);
i.moveStart("character",u);
i.moveEnd("character",j);
i.select()
}else{if(s.setSelectionRange){s.setSelectionRange(u,j)
}else{if(s.selectionStart){s.selectionStart=u;
s.selectionEnd=j
}}}s.focus()
}function V(i){if(A!=8){X.val(X.val()+i.substring(W.length));
B(W.length,i.length)
}}function d(){var j=Y(D);
var i=(T.width>0)?T.width:X.width();
I.css({width:parseInt(i)+"px",top:(j.y+D.offsetHeight)+"px",left:j.x+"px"}).show()
}function C(){if(g){clearTimeout(g)
}g=setTimeout(U,200)
}function U(){if(g){clearTimeout(g)
}X.removeClass(T.loadingClass);
if(I.is(":visible")){I.hide()
}if(T.mustMatch){var i=X.val();
if(i!=D.lastSelected){Q(null)
}}}function G(j,i){if(i){X.removeClass(T.loadingClass);
P.innerHTML="";
if(!K||i.length==0){return U()
}if($.browser.msie){I.append(document.createElement("iframe"))
}P.appendChild(l(i,j));
if(T.autoFill&&(X.val().toLowerCase()==j.toLowerCase())){V(i[0][0])
}d()
}else{U()
}}function F(v){if(!v){return null
}var j=[];
var u=v.split(T.lineSeparator);
for(var s=0;
s<u.length;
s++){var w=$.trim(u[s]);
if(w){j[j.length]=w.split(T.cellSeparator)
}}return j
}function l(w,s){var z=document.createElement("ul");
var y=w.length;
if((T.maxItemsToShow>0)&&(T.maxItemsToShow<y)){y=T.maxItemsToShow
}for(var x=0;
x<y;
x++){var AB=w[x];
if(!AB){continue
}var AA=document.createElement("li");
if(T.formatItem){AA.innerHTML=T.formatItem(AB,x,y);
AA.selectValue=AB[0]
}else{var AC=AB[0];
AC=AC.substring(0,AC.indexOf(s))+"<strong>"+s+"</strong>"+AC.substring(AC.indexOf(s)+s.length);
AA.innerHTML=AC;
AA.selectValue=AB[0]
}var u=null;
if(AB.length>1){u=[];
for(var v=1;
v<AB.length;
v++){u[u.length]=AB[v]
}}AA.extra=u;
z.appendChild(AA);
$(AA).hover(function(){$("li",z).removeClass("ac_over");
$(this).addClass("ac_over");
h=$("li",z).indexOf($(this).get(0))
},function(){$(this).removeClass("ac_over")
}).click(function(i){i.preventDefault();
i.stopPropagation();
Q(this)
})
}return z
}function b(j){if(!T.matchCase){j=j.toLowerCase()
}var i=T.cacheLength?p(j):null;
if(i){G(j,i)
}else{if((typeof T.url=="string")&&(T.url.length>0)){$.get(N(j),function(s){s=F(s);
E(j,s);
G(j,s)
})
}else{X.removeClass(T.loadingClass)
}}}function N(u){var j=T.url+"?q="+encodeURI(u);
for(var s in T.extraParams){j+="&"+s+"="+encodeURI(T.extraParams[s])
}return j
}function p(s){if(!s){return null
}if(J.data[s]){return J.data[s]
}if(T.matchSubset){for(var y=s.length-1;
y>=T.minChars;
y--){var AA=s.substr(0,y);
var z=J.data[AA];
if(z){var AB=[];
var v=[];
for(var w=0;
w<z.length;
w++){var AC=z[w];
var u=AC[0];
if(H(u,s)){AB[AB.length]=AC
}else{if(T.matchContains&&Z(u,s)){v[v.length]=AC
}}}return AB.concat(v)
}}}return null
}function H(j,i){return Z(j,i,true)
}function Z(w,v,j){if(j===null){j=!T.matchContains
}if(!T.matchCase){w=w.toLowerCase()
}var u=w.indexOf(v);
if(u==-1){return false
}return u==0||!j
}this.flushCache=function(){L()
};
this.setExtraParams=function(i){T.extraParams=i
};
this.findValue=function(){var j=X.val();
if(!T.matchCase){j=j.toLowerCase()
}var i=T.cacheLength?p(j):null;
if(i){f(j,i)
}else{if((typeof T.url=="string")&&(T.url.length>0)){$.get(N(j),function(s){s=F(s);
E(j,s);
f(j,s)
})
}else{f(j,null)
}}};
function f(z,y){if(y){X.removeClass(T.loadingClass)
}var w=(y)?y.length:0;
var u=null;
for(var x=0;
x<w;
x++){var AA=y[x];
if(AA[0].toLowerCase()==z.toLowerCase()){u=document.createElement("li");
if(T.formatItem){u.innerHTML=T.formatItem(AA,x,w);
u.selectValue=AA[0]
}else{u.innerHTML=AA[0];
u.selectValue=AA[0]
}var s=null;
if(AA.length>1){s=[];
for(var v=1;
v<AA.length;
v++){s[s.length]=AA[v]
}}u.extra=s
}}if(T.onFindValue){setTimeout(function(){T.onFindValue(u)
},1)
}}function E(j,i){if(!i||!j||!T.cacheLength){return 
}if(!J.length||J.length>T.cacheLength){L();
J.length++
}else{if(!J[j]){J.length++
}}J.data[j]=i
}function Y(j){var s=j.offsetLeft||0;
var i=j.offsetTop||0;
while(j=j.offsetParent){s+=j.offsetLeft;
i+=j.offsetTop
}return{x:s,y:i}
}};
jQuery.fn.autocomplete=function(B,A,C){A=A||{};
A.url=B;
A.data=((typeof C=="object")&&(C.constructor==Array))?C:null;
A.inputClass=A.inputClass||"ac_input";
A.resultsClass=A.resultsClass||"ac_results";
A.lineSeparator=A.lineSeparator||"\n";
A.cellSeparator=A.cellSeparator||"|";
A.minChars=A.minChars||1;
A.delay=A.delay||400;
A.matchCase=A.matchCase||0;
A.matchSubset=A.matchSubset||1;
A.matchContains=A.matchContains||0;
A.cacheLength=A.cacheLength||1;
A.mustMatch=A.mustMatch||0;
A.extraParams=A.extraParams||{};
A.loadingClass=A.loadingClass||"ac_loading";
A.selectFirst=A.selectFirst||false;
A.selectOnly=A.selectOnly||false;
A.maxItemsToShow=A.maxItemsToShow||-1;
A.autoFill=A.autoFill||false;
A.width=parseInt(A.width,10)||0;
this.each(function(){var D=this;
new jQuery.autocomplete(D,A)
});
return this
};
jQuery.fn.autocompleteArray=function(B,A){return this.autocomplete(null,A,B)
};
jQuery.fn.indexOf=function(B){for(var A=0;
A<this.length;
A++){if(this[A]==B){return A
}}return -1
};
var make_unique=function(A){var B=[];
A.sort();
for(var C in A){if(C>0&&A[C]!==A[C-1]){B[B.length]=A[C]
}}return B
};
var hashHistory=[];
var keywordSources={css:{p:"CSS Property",se:"CSS Selector",ar:"CSS At-rules"},html:{e:"HTML Element",a:"HTML Attribute"},svg:{a:"SVG Attribute",e:"SVG Element"},xpath:{f:"XPath function"}};
var keywordsMatch={};
var keywords=[];
for(var infoset in keywordSources){for(var propertytype in keywordSources[infoset]){var source=sources[infoset][propertytype];
for(var keyword in source){var synonym=source[keyword].syn;
if(!keywordsMatch[keyword]){keywordsMatch[keyword]={};
keywords.push(keyword);
if(synonym){keywordsMatch[synonym]={};
keywords.push(synonym)
}}if(!keywordsMatch[keyword][infoset]){keywordsMatch[keyword][infoset]={}
}if(!keywordsMatch[keyword][infoset][propertytype]){keywordsMatch[keyword][infoset][propertytype]=[]
}if(synonym&&!keywordsMatch[synonym][infoset]){keywordsMatch[synonym][infoset]={}
}if(synonym&&!keywordsMatch[synonym][infoset][propertytype]){keywordsMatch[synonym][infoset][propertytype]=[]
}for(var k in source[keyword]["d"]){keywordsMatch[keyword][infoset][propertytype].push(source[keyword]["d"][k]);
if(synonym){keywordsMatch[synonym][infoset][propertytype].push(source[keyword]["d"][k])
}}}}}function makeReplacingAccordion(A){A.css("position","relative");
A.accordion("option","navigation",true);
A.accordion("option","autoHeight","false");
A.accordion("option","collapsible",true)
}function clearLookUp(){if($("#details").accordion){$("#details").accordion("destroy")
}$("#details").html("")
}jQuery(document).ready(function(E){E("#content").tabs();
E("#content").tabs("paging");
E("#content").bind("tabsshow",function(F,G){window.location.hash=G.tab.hash
});
E(".accordion").accordion({header:"div >h3",active:false,autoHeight:false});
makeReplacingAccordion(E(".accordion"));
keywords=make_unique(keywords);
function D(b,O,S){if(b===null){return false
}var L=keywordSources[O][S];
var V=E("<div></div>").appendTo(E("#details"));
V.append("<h2>"+L+" <code>"+b+"</code></h2><div></div>");
var H=E("div",V);
for(var U in keywordsMatch[b][O][S]){var I=keywordsMatch[b][O][S][U];
var Z=E("<dl></dl>").appendTo(H);
for(var P in I){var W=E("<dt></dt>").appendTo(Z);
var T=W;
if(I[P].u){var M=I[P].u;
if(M.substring(0,1)==="/"){M="http://www.w3.org"+M
}T=E("<a href='"+M+"'></a>").appendTo(W)
}T.text(dictionary[P]);
if(I[P]["p"]&&I[P]["p"].length>0){var F=true;
if(I[P]["p"].length===1||I[P].l==="inline"){F=false
}var a=E("<dd></dd>").appendTo(Z);
var X=a;
if(F){if(I[P].l==="block"){X=E("<ul></ul>").appendTo(X)
}}for(var Q in I[P]["p"]){var J=false;
var G=X;
var K=I[P]["p"][Q];
if(F){G=E("<li></li>").appendTo(G)
}else{G=E("<span></span>").appendTo(G)
}if(K.u){var N=K.u;
if(N.substring(0,1)==="/"){N="http://www.w3.org"+N
}G=E("<a href='"+N+"'></a>").appendTo(G);
J=true
}else{if(I[P].i&&I[P].y){G=E("<a href='#inf,"+escape(I[P].i)+","+escape(I[P].y)+","+escape(K.t)+"' class='internal'></a>").appendTo(G);
J=true
}}if(K.t instanceof Array){if(!J){var R="";
for(var Y in K.t){textOrSpan=K.t[Y];
if(textOrSpan.y&&textOrSpan.i&&textOrSpan.t){R=R+"<a href='#inf,"+escape(textOrSpan.i)+","+escape(textOrSpan.y)+","+escape(textOrSpan.t)+"' class='internal'>"+textOrSpan.t+"</a>"
}else{R=R+textOrSpan
}}G.append(R)
}else{G.text(K.t.join(""))
}}else{G.text(K.t)
}if(!F&&Q<I[P]["p"].length-1){X.append(", ")
}}}}}return true
}function B(){if(hashHistory.length>0){E("#details").append("<p><a class='internal back' href='"+hashHistory[hashHistory.length-1]+"' onclick='hashHistory.pop();return true;'>back</a>")
}}function C(H){if(H===null){return false
}if(H.substring(0,7)==="search,"){E("#search").val(H.substring(7));
E("#search").get(0).autocompleter.findValue();
return true
}var F=H.split(",");
var I=unescape(F[1]);
var J=unescape(F[2]);
var G=unescape(F.slice(3).join(","));
if(G&&I&&J&&keywordSources[I]&&keywordSources[I][J]&&keywordsMatch[G]&&keywordsMatch[G][I]&&keywordsMatch[G][I][J]){clearLookUp();
E("#search").val("");
if(D(G,I,J)){E("#details").accordion({header:"div>h2",autoHeight:false});
return true
}}return false
}function A(I){if(I===null){return 
}var G=I.selectValue;
window.location.hash="#search,"+escape(G);
clearLookUp();
var F=0;
for(var H in keywordsMatch[G]){for(var J in keywordsMatch[G][H]){F=F+1;
D(G,H,J)
}}if(F===1){E("#details").accordion({header:"div>h2",autoHeight:false})
}else{E("#details").accordion({header:"div>h2",autoHeight:false,active:false})
}makeReplacingAccordion(E("#details"))
}E("a.internal").live("click",function(){if(C(E(this).attr("href").split("#")[1])&&!E(this).hasClass("back")){hashHistory.push(window.location.hash);
B()
}});
E("#search").autocompleteArray(keywords,{onItemSelect:A,onFindValue:A,autoFill:false,selectFirst:true,delay:40,maxItemsToShow:10,matchContains:true,matchSubset:true});
E("#search").change(function(){clearLookUp();
if(E("#search").val()){if(!E("#details_clear").length){E("#search").after("<a href='#' class='ui-icon ui-icon-close' id='details_clear'></a>");
E("#details_clear").click(function(){clearLookUp();
E("#search").val("").change()
})
}}else{E("#details_clear").replaceWith("")
}});
if(window.location.hash){if(window.location.hash.substring(0,5)==="#inf,"||window.location.hash.substring(0,8)==="#search,"){C(window.location.hash.substring(1))
}}});