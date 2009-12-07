"use strict";
var sources={};
sources.html={element:{a:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"},{title:"charset"},{title:"coords"},{title:"href"},{title:"hreflang"},{title:"name"},{title:"onblur"},{title:"onfocus"},{title:"rel"},{title:"rev"},{title:"shape"},{title:"tabindex"},{title:"target"},{title:"type"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#edef-A"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H30.html",title:"Providing link text that describes the purpose of a link for anchor elements"}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/noClickHere",title:"Donʼt use “click here” as link text"}]}}],abbr:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-ABBR"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H28.html",title:"Providing definitions for abbreviations by using the abbr and acronym elements"}]}}],acronym:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-ACRONYM"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H28.html",title:"Providing definitions for abbreviations by using the abbr and acronym elements"}]}}],address:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-ADDRESS"}}],area:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"},{title:"alt"},{title:"coords"},{title:"href"},{title:"nohref"},{title:"onblur"},{title:"onfocus"},{title:"shape"},{title:"tabindex"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#edef-AREA"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H24.html",title:"Providing text alternatives for the area elements of image maps"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#IMAGE_MAPS",title:"Do not use image maps unless you know the device supports them effectively."}]}}],b:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-B"}}],base:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"href"},{title:"id"},{title:"target"},{title:"xmlns"},{title:"xmlns:xsi"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#edef-BASE"}}],bdo:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/dirlang.html#edef-BDO"},Internationalization:{list:"block",properties:[{url:"http://www.w3.org/International/tutorials/bidi-xhtml/",title:""}]}}],big:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-BIG"}}],blockquote:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"cite"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-BLOCKQUOTE"}}],body:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"onload"},{title:"onunload"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-BODY"}}],br:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-BR"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H48.html",title:"Using ol, ul and dl for lists"}]}}],button:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"},{title:"disabled"},{title:"name"},{title:"onblur"},{title:"onfocus"},{title:"tabindex"},{title:"type"},{title:"value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-BUTTON"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H91.html",title:"Using HTML form controls and links"}]}}],caption:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-CAPTION"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H39.html",title:"Using caption elements to associate data table captions with data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H73.html",title:"Using the summary attribute of the table element to give an overview of data tables"}]}}],cite:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-CITE"}}],code:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-CODE"}}],col:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"span"},{title:"valign"},{title:"width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-COL"}}],colgroup:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"span"},{title:"valign"},{title:"width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-COLGROUP"}}],dd:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-DD"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H40.html",title:"Using definition lists"}]}}],del:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"cite"},{title:"datetime"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-del"}}],dfn:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-DFN"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H54.html",title:"Using the dfn element to identify the defining instance of a word"}]}}],div:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-DIV"}}],dl:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-DL"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H40.html",title:"Using definition lists"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H48.html",title:"Using ol, ul and dl for lists"}]}}],dt:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-DT"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H40.html",title:"Using definition lists"}]}}],em:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-EM"}}],fieldset:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-FIELDSET"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H71.html",title:"Providing a description for groups of form controls using fieldset and legend elements"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H90.html",title:"Indicating required form controls"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],form:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accept"},{title:"accept-charset"},{title:"action"},{title:"enctype"},{title:"method"},{title:"onreset"},{title:"onsubmit"},{title:"target"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-FORM"},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],h1:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H1"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/Use_h1_for_Title",title:"Use h1 for top-level heading"},{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],h2:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H2"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],h3:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H3"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],h4:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H4"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],h5:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H5"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],h6:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-H6"},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/headings",title:"Use headings to structure your document"}]}}],head:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"lang"},{title:"id"},{title:"profile"},{title:"xml:lang"},{title:"xmlns"},{title:"xmlns:xsi"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-HEAD"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H25.html",title:"Providing a title using the title element"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H60.html",title:"Using the link element to link to a glossary"}]}}],hr:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-HR"}}],html:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"lang"},{title:"id"},{title:"version"},{title:"xml:lang"},{title:"xmlns"},{title:"xmlns:xsi"},{title:"xsi:schemaLocation"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-HTML"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H57.html",title:"Using language attributes on the html element"}]}}],i:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-I"}}],img:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"alt"},{title:"height"},{title:"ismap"},{title:"longdesc"},{title:"src"},{title:"usemap"},{title:"width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#edef-IMG"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H37.html",title:"Using alt attributes on img elements"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#GRAPHICS_FOR_SPACING",title:"Do not use graphics for spacing."},{url:"http://www.w3.org/TR/mobile-bp/#LARGE_GRAPHICS",title:"Do not use images that cannot be rendered by the device. Avoid large or high resolution images except where critical information would otherwise be lost."},{url:"http://www.w3.org/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",title:"Provide a text equivalent for every non-text element."},{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",title:"Specify the size of images in markup, if they have an intrinsic size."},{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_RESIZING",title:"Resize images at the server, if they have an intrinsic size."}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/altAttribute",title:"Use the alt attribute to describe the function of each visual"},{url:"http://www.w3.org/QA/Tips/png-gif",title:"GIF or PNG?"}]}}],input:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accept"},{title:"accesskey"},{title:"alt"},{title:"checked"},{title:"disabled"},{title:"inputmode"},{title:"maxlength"},{title:"name"},{title:"onblur"},{title:"onchange"},{title:"onfocus"},{title:"onselect"},{title:"readonly"},{title:"size"},{title:"src"},{title:"tabindex"},{title:"type"},{title:"usemap"},{title:"value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-INPUT"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H36.html",title:"Using alt attributes on images used as submit buttons"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#AVOID_FREE_TEXT",title:"Avoid free text entry where possible."},{url:"http://www.w3.org/TR/mobile-bp/#PROVIDE_DEFAULTS",title:"Provide pre-selected default values where possible."},{url:"http://www.w3.org/TR/mobile-bp/#DEFAULT_INPUT_MODE",title:"Specify a default text entry mode, language and/or input format, if the target device is known to support it."},{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],ins:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"cite"},{title:"datetime"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-ins"}}],kbd:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-KBD"}}],label:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"},{title:"for"},{title:"onblur"},{title:"onfocus"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-LABEL"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H90.html",title:"Indicating required form controls"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H91.html",title:"Using HTML form controls and links"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],legend:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-LEGEND"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H71.html",title:"Providing a description for groups of form controls using fieldset and legend elements"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H90.html",title:"Indicating required form controls"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],li:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-LI"}}],link:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"charset"},{title:"href"},{title:"hreflang"},{title:"media"},{title:"rel"},{title:"rev"},{title:"target"},{title:"type"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#edef-LINK"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H59.html",title:"Using the link element and navigation tools"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H60.html",title:"Using the link element to link to a glossary"}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/use-links",title:"Use <link>s in your document"}]}}],map:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#edef-MAP"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H50.html",title:"Using structural elements to group links"}]}}],meta:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"lang"},{title:"content"},{title:"http-equiv"},{title:"id"},{title:"name"},{title:"scheme"},{title:"xml:lang"},{title:"xmlns"},{title:"xmlns:xsi"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-META"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H76.html",title:"Using meta refresh to create an instant client-side redirect"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#AUTO_REFRESH",title:"Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."},{url:"http://www.w3.org/TR/mobile-bp/#REDIRECTION",title:"Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/reback",title:"Use standard redirects: don't break the back button!"}]}}],noscript:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#edef-NOSCRIPT"}}],object:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"archive"},{title:"classid"},{title:"codebase"},{title:"codetype"},{title:"data"},{title:"declare"},{title:"height"},{title:"name"},{title:"standby"},{title:"tabindex"},{title:"type"},{title:"usemap"},{title:"width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#edef-OBJECT"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H27.html",title:"Providing text and non-text alternatives for object"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",title:"Provide a text equivalent for every non-text element."},{url:"http://www.w3.org/TR/mobile-bp/#OBJECTS_OR_SCRIPT",title:"Do not rely on embedded objects or script."}]}}],ol:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"start"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-OL"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H48.html",title:"Using ol, ul and dl for lists"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H50.html",title:"Using structural elements to group links"}]}}],optgroup:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"disabled"},{title:"label"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-OPTGROUP"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H85.html",title:"Using OPTGROUP to group OPTION elements inside a SELECT"}]}}],option:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"disabled"},{title:"label"},{title:"selected"},{title:"value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-OPTION"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H85.html",title:"Using OPTGROUP to group OPTION elements inside a SELECT"}]}}],p:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-P"}}],param:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"id"},{title:"name"},{title:"type"},{title:"value"},{title:"valuetype"},{title:"xmlns"},{title:"xmlns:xsi"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#edef-PARAM"}}],pre:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-PRE"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H51.html",title:"Using table markup to present tabular information"}]}}],q:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"cite"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-Q"}}],samp:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-SAMP"}}],script:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"charset"},{title:"defer"},{title:"id"},{title:"src"},{title:"type"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#edef-SCRIPT"}}],select:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"disabled"},{title:"multiple"},{title:"name"},{title:"onblur"},{title:"onchange"},{title:"onfocus"},{title:"size"},{title:"tabindex"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-SELECT"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H84.html",title:"Using a button with a select element to perform an action"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H85.html",title:"Using OPTGROUP to group OPTION elements inside a SELECT"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#PROVIDE_DEFAULTS",title:"Provide pre-selected default values where possible."},{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],small:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-SMALL"}}],span:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-SPAN"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H56.html",title:"Using the dir attribute on an inline element to resolve problems with nested directional runs"}]}}],strong:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-STRONG"}}],style:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"lang"},{title:"id"},{title:"media"},{title:"title"},{title:"type"},{title:"xml:lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/styles.html#edef-STYLE"}}],sub:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-SUB"}}],sup:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-SUP"}}],table:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"border"},{title:"cellpadding"},{title:"cellspacing"},{title:"frame"},{title:"rules"},{title:"summary"},{title:"width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TABLE"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H39.html",title:"Using caption elements to associate data table captions with data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H51.html",title:"Using table markup to present tabular information"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H73.html",title:"Using the summary attribute of the table element to give an overview of data tables"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#TABLES_SUPPORT",title:"Do not use tables unless the device is known to support them."},{url:"http://www.w3.org/TR/mobile-bp/#TABLES_NESTED",title:"Do not use nested tables."},{url:"http://www.w3.org/TR/mobile-bp/#TABLES_LAYOUT",title:"Do not use tables for layout."},{url:"http://www.w3.org/TR/mobile-bp/#TABLES_ALTERNATIVES",title:"Where possible, use an alternative to tabular presentation."}]}}],tbody:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TBODY"}}],td:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"abbr"},{title:"align"},{title:"axis"},{title:"char"},{title:"charoff"},{title:"colspan"},{title:"headers"},{title:"rowspan"},{title:"scope"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TD"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H43.html",title:"Using id and headers attributes to associate data cells with header cells in data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H51.html",title:"Using table markup to present tabular information"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H63.html",title:"Using the scope attribute to associate header cells and data cells in data tables"}]}}],textarea:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"accesskey"},{title:"cols"},{title:"disabled"},{title:"inputmode"},{title:"name"},{title:"onblur"},{title:"onchange"},{title:"onfocus"},{title:"onselect"},{title:"readonly"},{title:"rows"},{title:"tabindex"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#edef-TEXTAREA"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#AVOID_FREE_TEXT",title:"Avoid free text entry where possible."},{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]}}],tfoot:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TFOOT"}}],th:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"abbr"},{title:"align"},{title:"axis"},{title:"char"},{title:"charoff"},{title:"colspan"},{title:"headers"},{title:"rowspan"},{title:"scope"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TH"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H43.html",title:"Using id and headers attributes to associate data cells with header cells in data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H51.html",title:"Using table markup to present tabular information"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H63.html",title:"Using the scope attribute to associate header cells and data cells in data tables"}]}}],thead:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-THEAD"}}],title:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"lang"},{title:"id"},{title:"xml:lang"},{title:"xmlns"},{title:"xmlns:xsi"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#edef-TITLE"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H25.html",title:"Providing a title using the title element"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H64.html",title:"Using the title attribute of the frame and iframe elements"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#PAGE_TITLE",title:"Provide a short but descriptive page title."}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/good-titles",title:"<title>: the most important element of a quality Web page"}]}}],tr:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"},{title:"align"},{title:"char"},{title:"charoff"},{title:"valign"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#edef-TR"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H51.html",title:"Using table markup to present tabular information"}]}}],tt:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#edef-TT"}}],ul:[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#edef-UL"},"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",list:"block",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H48.html",title:"Using ol, ul and dl for lists"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H50.html",title:"Using structural elements to group links"}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/unordered-lists",title:"Unordered lists: more than just bullets"}]}}],"var":[{Attributes:{type:"attribute",infoset:"html",list:"inline",properties:[{title:"class"},{title:"id"},{title:"style"},{title:"title"},{title:"xml:lang"},{title:"onclick"},{title:"ondblclick"},{title:"onkeydown"},{title:"onkeypress"},{title:"onkeyup"},{title:"onmousedown"},{title:"onmousemove"},{title:"onmouseout"},{title:"onmouseover"},{title:"onmouseup"},{title:"dir"},{title:"lang"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#edef-VAR"}}]},attribute:{abbr:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"abbreviation for header cell"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-abbr"}}],"accept-charset":[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"%Charsets;"}]},description:{properties:[{title:"list of supported charsets"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-accept-charset"}}],accept:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"},{title:"input"}]},content:{properties:[{title:"%ContentTypes;"}]},description:{properties:[{title:"list of MIME types for file upload"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-accept"}}],accesskey:[{"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#ACCESS_KEYS",title:"Assign access keys to links in navigational menus and frequently accessed functionality."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"button"},{title:"input"},{title:"label"},{title:"legend"},{title:"textarea"}]},content:{properties:[{title:"%Character;"}]},description:{properties:[{title:"accessibility key character"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-accesskey"}}],action:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"server-side form handler"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-action"}}],align:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"caption"}]},content:{properties:[{title:"%CAlign;"}]},description:{properties:[{title:"relative to table"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-align-CAPTION"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"},{title:"iframe"},{title:"img"},{title:"input"},{title:"object"}]},content:{properties:[{title:"%IAlign;"}]},description:{properties:[{title:"vertical or horizontal alignment"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-align-IMG"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"legend"}]},content:{properties:[{title:"%LAlign;"}]},description:{properties:[{title:"relative to fieldset"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-align-LEGEND"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%TAlign;"}]},description:{properties:[{title:"table position relative to window"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-align-TABLE"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"hr"}]},content:{properties:[{title:"(left | center | right)"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-align-HR"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"div"},{title:"h1"},{title:"h2"},{title:"h3"},{title:"h4"},{title:"h5"},{title:"h6"},{title:"p"}]},content:{properties:[{title:"(left | center | right | justify)"}]},description:{properties:[{title:"align, text alignment"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-align"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"},{title:"colgroup"},{title:"tbody"},{title:"td"},{title:"tfoot"},{title:"th"},{title:"thead"},{title:"tr"}]},content:{properties:[{title:"(left | center | right | justify | char)"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-align-TD"}}],alink:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"color of selected links"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-alink"}}],alt:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H24.html",title:"Providing text alternatives for the area elements of image maps"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H36.html",title:"Using alt attributes on images used as submit buttons"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H37.html",title:"Using alt attributes on img elements"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H67.html",title:"Using null alt text and no title attribute on img elements for images that AT should ignore"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H91.html",title:"Using HTML form controls and links"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#NON-TEXT_ALTERNATIVES",title:"Provide a text equivalent for every non-text element."}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/altAttribute",title:"Use the alt attribute to describe the function of each visual"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"short description"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-alt"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"area"},{title:"img"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"short description"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-alt"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"short description"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-alt"}}],archive:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"comma-separated archive list"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-archive-APPLET"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"space-separated list of URIs"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-archive-OBJECT"}}],axis:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"comma-separated list of related headers"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-axis"}}],background:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"texture tile for document background"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-background"}}],bgcolor:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"background color for cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-bgcolor"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"tr"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"background color for row"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-bgcolor"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"cell background color"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-bgcolor"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"document background color"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-bgcolor"}}],border:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"controls frame width around table"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-border-TABLE"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"},{title:"object"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"link border width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-border-IMG"}}],cellpadding:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"spacing within cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-cellpadding"}}],cellspacing:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"spacing between cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-cellspacing"}}],"char":[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"},{title:"colgroup"},{title:"tbody"},{title:"td"},{title:"tfoot"},{title:"th"},{title:"thead"},{title:"tr"}]},content:{properties:[{title:"%Character;"}]},description:{properties:[{title:"alignment char, e.g. char=':'"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-char"}}],charoff:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"},{title:"colgroup"},{title:"tbody"},{title:"td"},{title:"tfoot"},{title:"th"},{title:"thead"},{title:"tr"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"offset for alignment char"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-charoff"}}],charset:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"link"},{title:"script"}]},content:{properties:[{title:"%Charset;"}]},description:{properties:[{title:"char encoding of linked resource"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-charset"}}],checked:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"(checked)"}]},description:{properties:[{title:"for radio buttons and check boxes"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-checked"}}],cite:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"blockquote"},{title:"q"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"URI for source document or msg"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#adef-cite-Q"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"del"},{title:"ins"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"info on reason for change"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#adef-cite-INS"}}],"class":[{"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/goodclassnames",title:"Use class with semantics in mind"}]},Elements:{list:"inline",properties:[{title:"all elements but base, basefont, head, html, meta, param, script, style, title"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"space-separated list of classes"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-class"}}],classid:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"identifies an implementation"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-classid"}}],clear:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"br"}]},content:{properties:[{title:"(left | all | right | none)"}]},description:{properties:[{title:"control of text flow"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-clear"}}],code:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"applet class file"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-code"}}],codebase:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"base URI for classid, data, archive"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-codebase-OBJECT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"optional base URI for applet"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-codebase-APPLET"}}],codetype:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"content type for code"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-codetype"}}],color:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"basefont"},{title:"font"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"text color"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-color-FONT"}}],cols:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frameset"}]},content:{properties:[{title:"%MultiLengths;"}]},description:{properties:[{title:"list of lengths, default: 100% (1 col)"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-cols-FRAMESET"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"textarea"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-cols-TEXTAREA"}}],colspan:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"number of cols spanned by cell"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-colspan"}}],compact:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"dir"},{title:"dl"},{title:"menu"},{title:"ol"},{title:"ul"}]},content:{properties:[{title:"(compact)"}]},description:{properties:[{title:"reduced interitem spacing"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-compact"}}],content:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H76.html",title:"Using meta refresh to create an instant client-side redirect"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"meta"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"associated information"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-content"}}],coords:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"area"}]},content:{properties:[{title:"%Coords;"}]},description:{properties:[{title:"comma-separated list of lengths"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-coords"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"%Coords;"}]},description:{properties:[{title:"for use with client-side image maps"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-coords"}}],data:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"reference to object's data"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-data"}}],datetime:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"del"},{title:"ins"}]},content:{properties:[{title:"%Datetime;"}]},description:{properties:[{title:"date and time of change"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#adef-datetime"}}],declare:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"(declare)"}]},description:{properties:[{title:"declare but don't instantiate flag"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-declare"}}],defer:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"script"}]},content:{properties:[{title:"(defer)"}]},description:{properties:[{title:"UA may defer execution of script"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-defer"}}],dir:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H56.html",title:"Using the dir attribute on an inline element to resolve problems with nested directional runs"}]},Internationalization:{list:"block",properties:[{url:"http://www.w3.org/International/tutorials/bidi-xhtml/",title:""}]},Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, frame, frameset, iframe, param, script"}]},content:{properties:[{title:"(ltr | rtl)"}]},description:{properties:[{title:"direction for weak/neutral text"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/dirlang.html#adef-dir"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"bdo"}]},content:{properties:[{title:"(ltr | rtl)"}]},description:{properties:[{title:"directionality"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/dirlang.html#adef-dir-BDO"}}],disabled:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"button"},{title:"input"},{title:"optgroup"},{title:"option"},{title:"select"},{title:"textarea"}]},content:{properties:[{title:"(disabled)"}]},description:{properties:[{title:"unavailable in this context"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-disabled"}}],enctype:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-enctype"}}],face:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"basefont"},{title:"font"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"comma-separated list of font names"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-face-FONT"}}],"for":[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#CONTROL_LABELLING",title:"Label all form controls appropriately and explicitly associate labels with form controls."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"label"}]},content:{properties:[{title:"IDREF"}]},description:{properties:[{title:"matches field ID value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-for"}}],frame:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%TFrame;"}]},description:{properties:[{title:"which parts of frame to render"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-frame"}}],frameborder:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"(1 | 0)"}]},description:{properties:[{title:"request frame borders?"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-frameborder"}}],headers:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H43.html",title:"Using id and headers attributes to associate data cells with header cells in data tables"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"IDREFS"}]},description:{properties:[{title:"list of id's for header cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-headers"}}],height:[{"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",title:"Specify the size of images in markup, if they have an intrinsic size."},{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_RESIZING",title:"Resize images at the server, if they have an intrinsic size."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"iframe"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"frame height"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-height-IFRAME"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"height for cell"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-height-TH"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"},{title:"object"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"override height"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-height-IMG"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"initial height"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-height-APPLET"}}],href:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H59.html",title:"Using the link element and navigation tools"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H60.html",title:"Using the link element to link to a glossary"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"link"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"URI for linked resource"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-href"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"base"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"URI that acts as base URI"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-href-BASE"}}],hreflang:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"link"}]},content:{properties:[{title:"%LanguageCode;"}]},description:{properties:[{title:"language code"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-hreflang"}}],hspace:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"},{title:"img"},{title:"object"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"horizontal gutter"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-hspace"}}],"http-equiv":[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H76.html",title:"Using meta refresh to create an instant client-side redirect"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#AUTO_REFRESH",title:"Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."},{url:"http://www.w3.org/TR/mobile-bp/#REDIRECTION",title:"Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]},"QA Tip":{list:"block",properties:[{url:"http://www.w3.org/QA/Tips/reback",title:"Use standard redirects: don't break the back button!"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"meta"}]},content:{properties:[{title:"NAME"}]},description:{properties:[{title:"HTTP response header name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-http-equiv"}}],id:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H43.html",title:"Using id and headers attributes to associate data cells with header cells in data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},Elements:{list:"inline",properties:[{title:"all elements but base, head, html, meta, script, style, title"}]},content:{properties:[{title:"ID"}]},description:{properties:[{title:"document-wide unique id"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-id"}}],ismap:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"},{title:"input"}]},content:{properties:[{title:"(ismap)"}]},description:{properties:[{title:"use server-side image map"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-ismap"}}],label:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"option"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"for use in hierarchical menus"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-label-OPTION"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"optgroup"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"for use in hierarchical menus"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-label-OPTGROUP"}}],lang:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H57.html",title:"Using language attributes on the html element"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H58.html",title:"Using language attributes to identify changes in the human language"}]},Internationalization:{list:"block",properties:[{url:"http://www.w3.org/International/tutorials/language-decl/",title:""}]},Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, br, frame, frameset, iframe, param, script"}]},content:{properties:[{title:"%LanguageCode;"}]},description:{properties:[{title:"language code"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/dirlang.html#adef-lang"}}],language:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"script"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"predefined script language name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-language"}}],link:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"color of links"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-link"}}],longdesc:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H45.html",title:"Using longdesc"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"link to long description (complements alt)"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-longdesc-IMG"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"link to long description (complements title)"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-longdesc-FRAME"}}],marginheight:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"margin height in pixels"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-marginheight"}}],marginwidth:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"margin widths in pixels"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-marginwidth"}}],maxlength:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"max chars for text fields"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-maxlength"}}],media:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"style"}]},content:{properties:[{title:"%MediaDesc;"}]},description:{properties:[{title:"designed for use with these media"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/styles.html#adef-media"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"link"}]},content:{properties:[{title:"%MediaDesc;"}]},description:{properties:[{title:"for rendering on these media"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/styles.html#adef-media"}}],method:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"(GET | POST)"}]},description:{properties:[{title:"HTTP method used to submit the form"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-method"}}],multiple:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"select"}]},content:{properties:[{title:"(multiple)"}]},description:{properties:[{title:"default is single selection"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-multiple"}}],name:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H64.html",title:"Using the title attribute of the frame and iframe elements"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"button"},{title:"textarea"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-name-BUTTON"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"allows applets to find each other"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-name-APPLET"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"select"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"field name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-name-SELECT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"name of form for scripting"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-name-FORM"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"name of frame for targetting"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-name-FRAME"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"name of image for scripting"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-name-IMG"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"named link end"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-name-A"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"},{title:"object"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"submit as part of form"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-name-INPUT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"map"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"for reference by usemap"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-name-MAP"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"param"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"property name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-name-PARAM"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"meta"}]},content:{properties:[{title:"NAME"}]},description:{properties:[{title:"metainformation name"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-name-META"}}],nohref:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"area"}]},content:{properties:[{title:"(nohref)"}]},description:{properties:[{title:"this region has no action"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-nohref"}}],noresize:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"}]},content:{properties:[{title:"(noresize)"}]},description:{properties:[{title:"allow users to resize frames?"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-noresize"}}],noshade:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"hr"}]},content:{properties:[{title:"(noshade)"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-noshade"}}],nowrap:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"(nowrap)"}]},description:{properties:[{title:"suppress word wrap"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-nowrap"}}],object:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"serialized applet file"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-object"}}],onblur:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"button"},{title:"input"},{title:"label"},{title:"select"},{title:"textarea"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the element lost the focus"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onblur"}}],onchange:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"},{title:"select"},{title:"textarea"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the element value was changed"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onchange"}}],onclick:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer button was clicked"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onclick"}}],ondblclick:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer button was double clicked"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-ondblclick"}}],onfocus:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"button"},{title:"input"},{title:"label"},{title:"select"},{title:"textarea"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the element got the focus"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onfocus"}}],onkeydown:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a key was pressed down"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onkeydown"}}],onkeypress:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a key was pressed and released"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onkeypress"}}],onkeyup:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a key was released"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onkeyup"}}],onload:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frameset"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"all the frames have been loaded"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onload"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the document has been loaded"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onload"}}],onmousedown:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer button was pressed down"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onmousedown"}}],onmousemove:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer was moved within"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onmousemove"}}],onmouseout:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer was moved away"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onmouseout"}}],onmouseover:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer was moved onto"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onmouseover"}}],onmouseup:[{Elements:{list:"inline",properties:[{title:"all elements but applet, base, basefont, bdo, br, font, frame, frameset, head, html, iframe, isindex, meta, param, script, style, title"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"a pointer button was released"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onmouseup"}}],onreset:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the form was reset"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onreset"}}],onselect:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"},{title:"textarea"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"some text was selected"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onselect"}}],onsubmit:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"form"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the form was submitted"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onsubmit"}}],onunload:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frameset"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"all the frames have been removed"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onunload"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Script;"}]},description:{properties:[{title:"the document has been removed"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-onunload"}}],profile:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"head"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"named dictionary of meta info"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-profile"}}],prompt:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"isindex"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"prompt message"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-prompt"}}],readonly:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"textarea"}]},content:{properties:[{title:"(readonly)"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-readonly"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"(readonly)"}]},description:{properties:[{title:"for text and passwd"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-readonly"}}],rel:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H59.html",title:"Using the link element and navigation tools"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H60.html",title:"Using the link element to link to a glossary"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"link"}]},content:{properties:[{title:"%LinkTypes;"}]},description:{properties:[{title:"forward link types"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-rel"}}],rev:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"link"}]},content:{properties:[{title:"%LinkTypes;"}]},description:{properties:[{title:"reverse link types"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-rev"}}],rows:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frameset"}]},content:{properties:[{title:"%MultiLengths;"}]},description:{properties:[{title:"list of lengths, default: 100% (1 row)"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-rows-FRAMESET"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"textarea"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-rows-TEXTAREA"}}],rowspan:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"number of rows spanned by cell"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-rowspan"}}],rules:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%TRules;"}]},description:{properties:[{title:"rulings between rows and cols"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-rules"}}],scheme:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"meta"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"select form of content"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-scheme"}}],scope:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H43.html",title:"Using id and headers attributes to associate data cells with header cells in data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H63.html",title:"Using the scope attribute to associate header cells and data cells in data tables"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"%Scope;"}]},description:{properties:[{title:"scope covered by header cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-scope"}}],scrolling:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"(yes | no | auto)"}]},description:{properties:[{title:"scrollbar or none"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-scrolling"}}],selected:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"option"}]},content:{properties:[{title:"(selected)"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-selected"}}],shape:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"area"}]},content:{properties:[{title:"%Shape;"}]},description:{properties:[{title:"controls interpretation of coords"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-shape"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"%Shape;"}]},description:{properties:[{title:"for use with client-side image maps"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-shape"}}],size:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"hr"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-size-HR"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"font"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:'[+|-]nn e.g. size="+1", size="4"'}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-size-FONT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"specific to each type of field"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-size-INPUT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"basefont"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"base font size for FONT elements"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-size-BASEFONT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"select"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"rows visible"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-size-SELECT"}}],span:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"COL attributes affect N columns"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-span-COL"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"colgroup"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"default number of columns in group"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-span-COLGROUP"}}],src:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"script"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"URI for an external script"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-src-SCRIPT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"for fields with images"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-src"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"frame"},{title:"iframe"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"source of frame content"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-src-FRAME"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"URI of image to embed"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-src-IMG"}}],standby:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"message to show while loading"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-standby"}}],start:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"ol"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"starting sequence number"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-start"}}],style:[{Elements:{list:"inline",properties:[{title:"all elements but base, basefont, head, html, meta, param, script, style, title"}]},content:{properties:[{title:"%StyleSheet;"}]},description:{properties:[{title:"associated style info"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/styles.html#adef-style"}}],summary:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H39.html",title:"Using caption elements to associate data table captions with data tables"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H73.html",title:"Using the summary attribute of the table element to give an overview of data tables"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"purpose/structure for speech output"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-summary"}}],tabindex:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H4.html",title:"Creating a logical tab order through links, form controls, and objects"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#TAB_ORDER",title:"Create a logical order through links, form controls and objects."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"button"},{title:"input"},{title:"object"},{title:"select"},{title:"textarea"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"position in tabbing order"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-tabindex"}}],target:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H83.html",title:"Using the target attribute to open a new window on user request and indicating this in link text"}]},"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#POP_UPS",title:"Do not cause pop-ups or other windows to appear and do not change the current window without informing the user."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"area"},{title:"base"},{title:"form"},{title:"link"}]},content:{properties:[{title:"%FrameTarget;"}]},description:{properties:[{title:"render in this frame"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-target"}}],text:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"document text color"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-text"}}],title:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H25.html",title:"Providing a title using the title element"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H33.html",title:"Supplementing link text with the title attribute"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H40.html",title:"Using definition lists"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H64.html",title:"Using the title attribute of the frame and iframe elements"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H65.html",title:"Using the title attribute to identify form controls when the label element cannot be used"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H89.html",title:"Using the title attribute to provide context-sensitive help"},{url:"http://www.w3.org/TR/WCAG20-TECHS/H91.html",title:"Using HTML form controls and links"}]},Elements:{list:"inline",properties:[{title:"all elements but base, basefont, head, html, meta, param, script, title"}]},content:{properties:[{title:"%Text;"}]},description:{properties:[{title:"advisory title"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-title"}}],type:[{"Accessibility techniques":{url:"http://www.w3.org/WAI/intro/wcag",properties:[{url:"http://www.w3.org/TR/WCAG20-TECHS/H44.html",title:"Using label elements to associate text labels with form controls"}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"a"},{title:"link"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"advisory content type"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/links.html#adef-type-A"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"object"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"content type for data"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-type-OBJECT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"param"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"content type for value when valuetype=ref"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-type-PARAM"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"script"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"content type of script language"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/scripts.html#adef-type-SCRIPT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"style"}]},content:{properties:[{title:"%ContentType;"}]},description:{properties:[{title:"content type of style language"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/styles.html#adef-type-STYLE"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"%InputType;"}]},description:{properties:[{title:"what kind of widget is needed"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-type-INPUT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"li"}]},content:{properties:[{title:"%LIStyle;"}]},description:{properties:[{title:"list item style"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-type-LI"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"ol"}]},content:{properties:[{title:"%OLStyle;"}]},description:{properties:[{title:"numbering style"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-type-OL"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"ul"}]},content:{properties:[{title:"%ULStyle;"}]},description:{properties:[{title:"bullet style"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-type-UL"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"button"}]},content:{properties:[{title:"(button | submit | reset)"}]},description:{properties:[{title:"for use as form button"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-type-BUTTON"}}],usemap:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"},{title:"input"},{title:"object"}]},content:{properties:[{title:"%URI;"}]},description:{properties:[{title:"use client-side image map"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-usemap"}}],valign:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"},{title:"colgroup"},{title:"tbody"},{title:"td"},{title:"tfoot"},{title:"th"},{title:"thead"},{title:"tr"}]},content:{properties:[{title:"(top | middle | bottom | baseline)"}]},description:{properties:[{title:"vertical alignment in cells"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-valign"}}],value:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"input"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"Specify for radio buttons and checkboxes"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-value-INPUT"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"option"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"defaults to element content"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-value-OPTION"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"param"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"property value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-value-PARAM"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"button"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"sent to server when submitted"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../interact/forms.html#adef-value-BUTTON"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"li"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:"reset sequence number"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/lists.html#adef-value-LI"}}],valuetype:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"param"}]},content:{properties:[{title:"(DATA | REF | OBJECT)"}]},description:{properties:[{title:"How to interpret value"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-valuetype"}}],version:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"html"}]},content:{properties:[{title:"CDATA"}]},description:{properties:[{title:"Constant"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-version"}}],vlink:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"body"}]},content:{properties:[{title:"%Color;"}]},description:{properties:[{title:"color of visited links"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/global.html#adef-vlink"}}],vspace:[{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"},{title:"img"},{title:"object"}]},content:{properties:[{title:"%Pixels;"}]},description:{properties:[{title:"vertical gutter"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-vspace"}}],width:[{"Mobile considerations":{list:"block",properties:[{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_SPECIFY_SIZE",title:"Specify the size of images in markup, if they have an intrinsic size."},{url:"http://www.w3.org/TR/mobile-bp/#IMAGES_RESIZING",title:"Resize images at the server, if they have an intrinsic size."}]},Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"hr"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/graphics.html#adef-width-HR"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"iframe"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"frame width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../present/frames.html#adef-width-IFRAME"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"img"},{title:"object"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"override width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-width-IMG"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"table"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"table width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-width-TABLE"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"td"},{title:"th"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"width for cell"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-width-TH"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"applet"}]},content:{properties:[{title:"%Length;"}]},description:{properties:[{title:"initial width"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/objects.html#adef-width-APPLET"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"col"}]},content:{properties:[{title:"%MultiLength;"}]},description:{properties:[{title:"column width specification"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-width-COL"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"colgroup"}]},content:{properties:[{title:"%MultiLength;"}]},description:{properties:[{title:"default width for enclosed COLs"}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/tables.html#adef-width-COLGROUP"}},{Elements:{type:"element",infoset:"html",list:"inline",properties:[{title:"pre"}]},content:{properties:[{title:"NUMBER"}]},description:{properties:[{title:" "}]},Specification:{url:"http://www.w3.org/TR/1999/REC-html401-19991224/index/../struct/text.html#adef-width-PRE"}}]}};
sources.svg={element:{a:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"target"},{title:"transform"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"The 'a' element may contain any element that its parent may contain"},{title:" except itself.      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/linking.html#AElement"}}],animate:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"accumulate"},{title:"additive"},{title:"attributeName"},{title:"attributeType"},{title:"begin"},{title:"by"},{title:"calcMode"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"fill"},{title:"from"},{title:"id"},{title:"keySplines"},{title:"keyTimes"},{title:"max"},{title:"min"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"to"},{title:"typeof"},{title:"values"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateElement"}}],animateColor:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"accumulate"},{title:"additive"},{title:"attributeName"},{title:"attributeType"},{title:"begin"},{title:"by"},{title:"calcMode"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"fill"},{title:"from"},{title:"id"},{title:"keySplines"},{title:"keyTimes"},{title:"max"},{title:"min"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"to"},{title:"typeof"},{title:"values"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateColorElement"}}],animateMotion:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"accumulate"},{title:"additive"},{title:"begin"},{title:"by"},{title:"calcMode"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"fill"},{title:"from"},{title:"id"},{title:"keyPoints"},{title:"keySplines"},{title:"keyTimes"},{title:"max"},{title:"min"},{title:"origin"},{title:"path"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"rotate"},{title:"systemLanguage"},{title:"to"},{title:"typeof"},{title:"values"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" mpath"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateMotionElement"}}],animateTransform:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"accumulate"},{title:"additive"},{title:"attributeName"},{title:"attributeType"},{title:"begin"},{title:"by"},{title:"calcMode"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"fill"},{title:"from"},{title:"id"},{title:"keySplines"},{title:"keyTimes"},{title:"max"},{title:"min"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"to"},{title:"type"},{title:"typeof"},{title:"values"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateTransformElement"}}],animation:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"begin"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"externalResourcesRequired"},{title:"fill"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"initialVisibility"},{title:"max"},{title:"min"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"preserveAspectRatio"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"syncBehavior"},{title:"syncMaster"},{title:"syncTolerance"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AnimationElement"}}],audio:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"begin"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"externalResourcesRequired"},{title:"fill"},{title:"id"},{title:"max"},{title:"min"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"syncBehavior"},{title:"syncMaster"},{title:"syncTolerance"},{title:"systemLanguage"},{title:"type"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AudioElement"}}],circle:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"cx"},{title:"cy"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"r"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#CircleElement"}}],defs:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"a"},{title:" animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" animation"},{title:" audio"},{title:" circle"},{title:" defs"},{title:" desc"},{title:" discard"},{title:" ellipse"},{title:" font"},{title:" font-face"},{title:" foreignObject"},{title:" g"},{title:" handler"},{title:" image"},{title:" line"},{title:" linearGradient"},{title:" listener"},{title:" metadata"},{title:" path"},{title:" polygon"},{title:" polyline"},{title:" prefetch"},{title:" radialGradient"},{title:" rect"},{title:" script"},{title:" set"},{title:" solidColor"},{title:" switch"},{title:" text"},{title:" textArea"},{title:" title"},{title:" use"},{title:" video      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#DefsElement"}}],desc:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}],discard:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"begin"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#DiscardElement"}}],ellipse:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"cx"},{title:"cy"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"rx"},{title:"ry"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#EllipseElement"}}],font:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"horiz-adv-x"},{title:"horiz-origin-x"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" font-face"},{title:" glyph"},{title:" hkern"},{title:" metadata"},{title:" missing-glyph"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontElement"}}],"font-face":[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"accent-height"},{title:"alphabetic"},{title:"ascent"},{title:"bbox"},{title:"cap-height"},{title:"class"},{title:"content"},{title:"datatype"},{title:"descent"},{title:"externalResourcesRequired"},{title:"font-family"},{title:"font-stretch"},{title:"font-style"},{title:"font-variant"},{title:"font-weight"},{title:"hanging"},{title:"id"},{title:"ideographic"},{title:"mathematical"},{title:"overline-position"},{title:"overline-thickness"},{title:"panose-1"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"slope"},{title:"stemh"},{title:"stemv"},{title:"strikethrough-position"},{title:"strikethrough-thickness"},{title:"typeof"},{title:"underline-position"},{title:"underline-thickness"},{title:"unicode-range"},{title:"units-per-em"},{title:"widths"},{title:"x-height"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" font-face-src"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceElement"}}],"font-face-src":[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" font-face-uri"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceSrcElement"}}],"font-face-uri":[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceUriElement"}}],foreignObject:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" svg"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/extend.html#ForeignObjectElement"}}],g:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"a"},{title:" animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" animation"},{title:" audio"},{title:" circle"},{title:" defs"},{title:" desc"},{title:" discard"},{title:" ellipse"},{title:" font"},{title:" font-face"},{title:" foreignObject"},{title:" g"},{title:" handler"},{title:" image"},{title:" line"},{title:" linearGradient"},{title:" listener"},{title:" metadata"},{title:" path"},{title:" polygon"},{title:" polyline"},{title:" prefetch"},{title:" radialGradient"},{title:" rect"},{title:" script"},{title:" set"},{title:" solidColor"},{title:" switch"},{title:" text"},{title:" textArea"},{title:" title"},{title:" use"},{title:" video      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#GElement"}}],glyph:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"arabic-form"},{title:"class"},{title:"content"},{title:"d"},{title:"datatype"},{title:"glyph-name"},{title:"horiz-adv-x"},{title:"id"},{title:"lang"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"unicode"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#GlyphElement"}}],handler:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"ev:event"},{title:"externalResourcesRequired"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"type"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>"},{title:" desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/script.html#HandlerElement"}}],hkern:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"g1"},{title:"g2"},{title:"id"},{title:"k"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"u1"},{title:"u2"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#KernElements"}}],image:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"opacity"},{title:"preserveAspectRatio"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"type"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#ImageElement"}}],line:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"x1"},{title:"x2"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y1"},{title:"y2"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#LineElement"}}],linearGradient:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"gradientUnits"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"x1"},{title:"x2"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y1"},{title:"y2"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" metadata"},{title:" set"},{title:" stop"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#LinearGradientElement"}}],listener:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"defaultAction"},{title:"event"},{title:"handler"},{title:"id"},{title:"observer"},{title:"phase"},{title:"propagate"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"target"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/script.html#ListenerElement"}}],metadata:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/metadata.html#MetadataElement"}}],"missing-glyph":[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"d"},{title:"datatype"},{title:"horiz-adv-x"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/fonts.html#MissingGlyphElement"}}],mpath:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#MpathElement"}}],path:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"d"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"pathLength"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/paths.html#PathElement"}}],polygon:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"points"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolygonElement"}}],polyline:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"points"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolylineElement"}}],prefetch:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"bandwidth"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"mediaCharacterEncoding"},{title:"mediaContentEncodings"},{title:"mediaSize"},{title:"mediaTime"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#PrefetchElement"}}],radialGradient:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"cx"},{title:"cy"},{title:"datatype"},{title:"gradientUnits"},{title:"id"},{title:"property"},{title:"r"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" metadata"},{title:" set"},{title:" stop"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#RadialGradientElement"}}],rect:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"rx"},{title:"ry"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/shapes.html#RectElement"}}],script:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"type"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>"},{title:" desc"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/script.html#ScriptElement"}}],set:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"attributeName"},{title:"attributeType"},{title:"begin"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"fill"},{title:"id"},{title:"max"},{title:"min"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"to"},{title:"typeof"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"desc"},{title:" handler"},{title:" metadata"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/animate.html#SetElement"}}],solidColor:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#SolidColorElement"}}],stop:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"offset"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StopElement"}}],svg:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"baseProfile"},{title:"class"},{title:"content"},{title:"contentScriptType"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"playbackOrder"},{title:"preserveAspectRatio"},{title:"property"},{title:"rel"},{title:"resource"},{title:"rev"},{title:"role"},{title:"snapshotTime"},{title:"syncBehaviorDefault"},{title:"syncToleranceDefault"},{title:"timelineBegin"},{title:"typeof"},{title:"version"},{title:"viewBox"},{title:"width"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"zoomAndPan"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"a"},{title:" animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" animation"},{title:" audio"},{title:" circle"},{title:" defs"},{title:" desc"},{title:" discard"},{title:" ellipse"},{title:" font"},{title:" font-face"},{title:" foreignObject"},{title:" g"},{title:" handler"},{title:" image"},{title:" line"},{title:" linearGradient"},{title:" listener"},{title:" metadata"},{title:" path"},{title:" polygon"},{title:" polyline"},{title:" prefetch"},{title:" radialGradient"},{title:" rect"},{title:" script"},{title:" set"},{title:" solidColor"},{title:" switch"},{title:" text"},{title:" textArea"},{title:" title"},{title:" use"},{title:" video      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#SVGElement"}}],"switch":[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"The 'switch' element may contain any element that its parent may contain.      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#SwitchElement"}}],tbreak:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"unknown"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#tbreakElement"}}],text:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"editable"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"rotate"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"x"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>"},{title:" a"},{title:" animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title"},{title:" tspan      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#TextElement"}}],textArea:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"editable"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>"},{title:" a"},{title:" animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" tbreak"},{title:" title"},{title:" tspan      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#TextAreaElement"}}],title:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"id"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"<text>      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}],tspan:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"typeof"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"The 'tspan' element may contain any element that its parent may contain.      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#TSpanElement"}}],use:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"class"},{title:"content"},{title:"datatype"},{title:"externalResourcesRequired"},{title:"focusHighlight"},{title:"focusable"},{title:"id"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"property"},{title:"rel"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"rev"},{title:"role"},{title:"systemLanguage"},{title:"transform"},{title:"typeof"},{title:"x"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{properties:[{title:"all"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/struct.html#UseElement"}}],video:[{Attributes:{type:"attribute",infoset:"svg",list:"inline",properties:[{title:"about"},{title:"begin"},{title:"class"},{title:"content"},{title:"datatype"},{title:"dur"},{title:"end"},{title:"externalResourcesRequired"},{title:"fill"},{title:"focusHighlight"},{title:"focusable"},{title:"height"},{title:"id"},{title:"initialVisibility"},{title:"max"},{title:"min"},{title:"nav-down"},{title:"nav-down-left"},{title:"nav-down-right"},{title:"nav-left"},{title:"nav-next"},{title:"nav-prev"},{title:"nav-right"},{title:"nav-up"},{title:"nav-up-left"},{title:"nav-up-right"},{title:"overlay"},{title:"preserveAspectRatio"},{title:"property"},{title:"rel"},{title:"repeatCount"},{title:"repeatDur"},{title:"requiredExtensions"},{title:"requiredFeatures"},{title:"requiredFonts"},{title:"requiredFormats"},{title:"resource"},{title:"restart"},{title:"rev"},{title:"role"},{title:"syncBehavior"},{title:"syncMaster"},{title:"syncTolerance"},{title:"systemLanguage"},{title:"transform"},{title:"transformBehavior"},{title:"type"},{title:"typeof"},{title:"width"},{title:"x"},{title:"xlink:actuate"},{title:"xlink:arcrole"},{title:"xlink:href"},{title:"xlink:role"},{title:"xlink:show"},{title:"xlink:title"},{title:"xlink:type"},{title:"xml:base"},{title:"xml:id"},{title:"xml:lang"},{title:"xml:space"},{title:"y"}]},"Allowed properties":{infoset:"svg",list:"inline",properties:[{title:"audio-level"},{title:"buffered-rendering"},{title:"display"},{title:"image-rendering"},{title:"pointer-events"},{title:"shape-rendering"},{title:"text-rendering"},{title:"viewport-fill"},{title:"viewport-fill-opacity"},{title:"visibility"}]},"Allowed children":{infoset:"svg",list:"inline",properties:[{title:"animate"},{title:" animateColor"},{title:" animateMotion"},{title:" animateTransform"},{title:" desc"},{title:" discard"},{title:" handler"},{title:" metadata"},{title:" set"},{title:" switch"},{title:" title      "}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/multimedia.html#VideoElement"}}]},property:{"audio-level":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AudioLevelProperty"}}],"buffered-rendering":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'dynamic' | 'static' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#BufferedRenderingProperty"}}],color:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<color> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#ColorProperty"}}],"color-rendering":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#ColorRenderingProperty"}}],direction:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'ltr' | 'rtl' | 'inherit'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#DirectionProperty"}}],display:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'inline' | 'block' | 'list-item' | 'run-in' | 'compact' | 'marker' | 'table' | 'inline-table' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-column-group' | 'table-column' | 'table-cell' | 'table-caption' | 'none' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#DisplayProperty"}}],"display-align":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'before' | 'center' | 'after' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#DisplayAlignProperty"}}],fill:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<paint> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#FillProperty"}}],"fill-opacity":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#FillOpacityProperty"}}],"fill-rule":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'nonzero' | 'evenodd' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#FillRuleProperty"}}],"font-family":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<font-family-value> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#FontFamilyProperty"}}],"font-size":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<font-size-value> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#FontSizeProperty"}}],"font-style":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'normal' | 'italic' | 'oblique' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#FontStyleProperty"}}],"font-variant":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'normal' | 'small-caps' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#FontVariantProperty"}}],"font-weight":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#FontWeightProperty"}}],"image-rendering":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#ImageRenderingProperty"}}],"line-increment":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | <number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#LineIncrementProperty"}}],opacity:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#groupOpacity"}}],"pointer-events":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/interact.html#PointerEventsProperty"}}],"shape-rendering":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#ShapeRenderingProperty"}}],"solid-color":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<color> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#SolidColorProperty"}}],"solid-opacity":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#SolidOpacityProperty"}}],"stop-color":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<color> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StopColorProperty"}}],"stop-opacity":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StopOpacityProperty"}}],stroke:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<paint> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeProperty"}}],"stroke-dasharray":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'none' | <list-of-lengths> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeDasharrayProperty"}}],"stroke-dashoffset":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<length> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeDashoffsetProperty"}}],"stroke-linecap":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'butt' | 'round' | 'square' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeLinecapProperty"}}],"stroke-linejoin":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'miter' | 'round' | 'bevel' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeLinejoinProperty"}}],"stroke-miterlimit":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeMiterlimitProperty"}}],"stroke-opacity":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeOpacityProperty"}}],"stroke-width":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<length> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#StrokeWidthProperty"}}],"text-align":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'start' | 'center' | 'end' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#TextAlignProperty"}}],"text-anchor":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'start' | 'middle' | 'end' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#TextAnchorProperty"}}],"text-rendering":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#TextRenderingProperty"}}],"unicode-bidi":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'normal' | 'embed' | 'bidi-override' | 'inherit'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/text.html#UnicodeBidiProperty"}}],"vector-effect":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'none' | 'non-scaling-stroke' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#NonScalingStroke"}}],"viewport-fill":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'none' | <color> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#viewport-fill-property"}}],"viewport-fill-opacity":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"<number> | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#viewport-fill-opacity-property"}}],visibility:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"circle"},{title:"defs"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"line"},{title:"linearGradient"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"radialGradient"},{title:"rect"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"}]},content:{properties:[{title:"'visible' | 'hidden' | 'inherit'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"true"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/painting.html#VisibilityProperty"}}]},attribute:{about:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"accent-height":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],accumulate:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"'none' | 'sum'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],additive:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"'replace' | 'sum'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],alphabetic:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"arabic-form":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"glyph"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],ascent:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],attributeName:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateTransform"},{title:"set"}]},content:{properties:[{title:"<QName>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],attributeType:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateTransform"},{title:"set"}]},content:{properties:[{title:"'XML' | 'CSS' | 'auto'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],bandwidth:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"prefetch"}]},content:{properties:[{title:"<number> | 'auto'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#struct-PrefetchElementBandwidthAttribute"}}],baseProfile:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'none' | 'tiny' | 'basic' | 'full'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],bbox:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],begin:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],by:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],calcMode:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"'discrete' | 'linear' | 'paced' | 'spline'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"cap-height":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"class":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<XML-NMTOKENS>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],content:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<string>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],contentScriptType:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"<content-type>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],cx:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"circle"},{title:"ellipse"},{title:"radialGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],cy:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"circle"},{title:"ellipse"},{title:"radialGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],d:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"glyph"},{title:"missing-glyph"},{title:"path"}]},content:{properties:[{title:"<path-data>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],datatype:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<string>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],defaultAction:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"'perform' | 'cancel'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],descent:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],dur:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],editable:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"text"},{title:"textArea"}]},content:{properties:[{title:"'none' | 'simple'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],end:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"ev:event":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"handler"}]},content:{properties:[{title:"<XML-NMTOKEN>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],event:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"<XML-NMTOKEN>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],externalResourcesRequired:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"audio"},{title:"font"},{title:"font-face"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"handler"},{title:"image"},{title:"script"},{title:"svg"},{title:"switch"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<boolean>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],fill:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"'remove' | 'freeze'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],focusHighlight:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'auto' | 'none'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],focusable:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'auto' | <boolean>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"font-family":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"font-stretch":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"font-style":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"font-variant":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"font-weight":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],from:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],g1:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"hkern"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],g2:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"hkern"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"glyph-name":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"glyph"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],gradientUnits:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"linearGradient"},{title:"radialGradient"}]},content:{properties:[{title:"'userSpaceOnUse' | 'objectBoundingBox'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],handler:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"<IRI>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],hanging:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],height:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"foreignObject"},{title:"image"},{title:"rect"},{title:"svg"},{title:"video"}]},content:{properties:[{title:"<length>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"textArea"}]},content:{properties:[{title:"<length> | 'auto'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#text-TextAreaElementHeightAttribute"}}],"horiz-adv-x":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font"},{title:"glyph"},{title:"missing-glyph"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"horiz-origin-x":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],id:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<ID> | <NCName>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],ideographic:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],initialVisibility:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"video"}]},content:{properties:[{title:"'whenStarted' | 'always'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],k:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"hkern"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],keyPoints:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animateMotion"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],keySplines:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],keyTimes:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],lang:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"glyph"}]},content:{properties:[{title:"<list-of-language-ids>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#fonts-GlyphElementLangAttribute"}}],mathematical:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],max:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],mediaCharacterEncoding:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"prefetch"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#struct-PrefetchElementMediaCharacterEncodingAttribute"}}],mediaContentEncodings:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"prefetch"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#struct-PrefetchElementMediaContentEncodingsAttribute"}}],mediaSize:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"prefetch"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#struct-PrefetchElementMediaSizeAttribute"}}],mediaTime:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"prefetch"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#struct-PrefetchElementMediaTimeAttribute"}}],min:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"nav-down":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-down-left":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-down-right":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-left":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-next":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-prev":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-right":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-up":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-up-left":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"nav-up-right":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"svg"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<focus>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],observer:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"<IDREF>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],offset:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"stop"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],origin:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animateMotion"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],overlay:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"video"}]},content:{properties:[{title:"'none' | 'top'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#multimedia-VideoElementOverlayAttribute"}}],"overline-position":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"overline-thickness":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"panose-1":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],path:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animateMotion"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],pathLength:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"path"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],phase:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"'default' | 'capture'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],playbackOrder:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'all' | 'forwardOnly'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],points:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"polygon"},{title:"polyline"}]},content:{properties:[{title:"<points-data>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],preserveAspectRatio:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"image"},{title:"svg"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],propagate:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"'continue' | 'stop'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],property:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],r:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"circle"},{title:"radialGradient"}]},content:{properties:[{title:"<length>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],rel:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],repeatCount:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],repeatDur:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],requiredExtensions:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"metadata"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"set"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-IRIs>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],requiredFeatures:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"metadata"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"set"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-IRIs>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],requiredFonts:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"metadata"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"set"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-family-names>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],requiredFormats:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"metadata"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"set"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-content-types>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],resource:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<string>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],restart:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"set"},{title:"video"}]},content:{properties:[{title:"'always' | 'never' | 'whenNotActive'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],rev:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],role:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],rotate:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animateMotion"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"text"}]},content:{properties:[{title:"<list-of-numbers>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#text-TextElementRotateAttribute"}}],rx:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"ellipse"},{title:"rect"}]},content:{properties:[{title:"<length>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],ry:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"ellipse"},{title:"rect"}]},content:{properties:[{title:"<length>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],slope:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],snapshotTime:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'none' | <Clock-value>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],stemh:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],stemv:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"strikethrough-position":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"strikethrough-thickness":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],syncBehavior:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"audio"},{title:"video"}]},content:{properties:[{title:"'canSlip' | 'locked' | 'independent' | 'default'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],syncBehaviorDefault:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'canSlip' | 'locked' | 'independent' | 'inherit'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],syncMaster:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"audio"},{title:"video"}]},content:{properties:[{title:"<boolean>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],syncTolerance:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"audio"},{title:"video"}]},content:{properties:[{title:"<Clock-value> | 'default'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],syncToleranceDefault:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"<Clock-value> | 'inherit'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],systemLanguage:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"metadata"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"set"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-language-ids>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],target:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"'_replace' | '_self' | '_parent' | '_top' | '_blank' | <XML-Name>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#linking-AElementTargetAttribute"}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"listener"}]},content:{properties:[{title:"<IDREF>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],timelineBegin:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'onLoad' | 'onStart'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],to:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"set"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],transform:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animation"},{title:"circle"},{title:"ellipse"},{title:"foreignObject"},{title:"g"},{title:"image"},{title:"line"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"rect"},{title:"switch"},{title:"text"},{title:"textArea"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<transform> | 'none'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],transformBehavior:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"video"}]},content:{properties:[{title:"'geometric' | 'pinned' | 'pinned90' | 'pinned180' | 'pinned270'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],type:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"handler"},{title:"script"}]},content:{properties:[{title:"<content-type>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"audio"},{title:"image"},{title:"video"}]},content:{properties:[{title:"<content-type>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animateTransform"}]},content:{properties:[{title:"'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#animate-AnimateTransformElementTypeAttribute"}}],"typeof":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<list-of-strings>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],u1:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"hkern"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],u2:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"hkern"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"underline-position":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"underline-thickness":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],unicode:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"glyph"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#fonts-GlyphElementUnicodeAttribute"}}],"unicode-range":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"units-per-em":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],values:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],version:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'1.0' | '1.1' | '1.2'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],viewBox:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],width:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"foreignObject"},{title:"image"},{title:"rect"},{title:"svg"},{title:"video"}]},content:{properties:[{title:"<length>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"textArea"}]},content:{properties:[{title:"<length> | 'auto'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#text-TextAreaElementWidthAttribute"}}],widths:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],x:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"foreignObject"},{title:"image"},{title:"rect"},{title:"textArea"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"text"}]},content:{properties:[{title:"<list-of-coordinates>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#text-TextElementXAttribute"}}],"x-height":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"font-face"}]},content:{properties:[{title:"<number>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],x1:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"line"},{title:"linearGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],x2:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"line"},{title:"linearGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"xlink:actuate":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'onLoad'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"'onRequest'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"xlink:arcrole":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<IRI>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xlink:href":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<IRI>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"xlink:role":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<IRI>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xlink:show":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"discard"},{title:"font-face-uri"},{title:"handler"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"}]},content:{properties:[{title:"'other'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"audio"},{title:"foreignObject"},{title:"image"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'embed'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"}]},content:{properties:[{title:"'new' | 'replace'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}],"xlink:title":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<text>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xlink:type":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"discard"},{title:"font-face-uri"},{title:"foreignObject"},{title:"handler"},{title:"image"},{title:"mpath"},{title:"prefetch"},{title:"script"},{title:"set"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'simple'"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],"xml:base":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<IRI>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xml:id":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<NCName>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xml:lang":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"handler"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"script"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<language-id>"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],"xml:space":[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"a"},{title:"animate"},{title:"animateColor"},{title:"animateMotion"},{title:"animateTransform"},{title:"animation"},{title:"audio"},{title:"circle"},{title:"defs"},{title:"desc"},{title:"discard"},{title:"ellipse"},{title:"font"},{title:"font-face"},{title:"font-face-src"},{title:"font-face-uri"},{title:"foreignObject"},{title:"g"},{title:"glyph"},{title:"hkern"},{title:"image"},{title:"line"},{title:"linearGradient"},{title:"listener"},{title:"metadata"},{title:"missing-glyph"},{title:"mpath"},{title:"path"},{title:"polygon"},{title:"polyline"},{title:"prefetch"},{title:"radialGradient"},{title:"rect"},{title:"set"},{title:"solidColor"},{title:"stop"},{title:"svg"},{title:"switch"},{title:"tbreak"},{title:"text"},{title:"textArea"},{title:"title"},{title:"tspan"},{title:"use"},{title:"video"}]},content:{properties:[{title:"'default' | 'preserve'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"handler"},{title:"script"}]},content:{properties:[{title:"'preserve'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]}}],y:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"animation"},{title:"foreignObject"},{title:"image"},{title:"rect"},{title:"textArea"},{title:"use"},{title:"video"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}},{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"text"}]},content:{properties:[{title:"<list-of-coordinates>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#text-TextElementYAttribute"}}],y1:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"line"},{title:"linearGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],y2:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"line"},{title:"linearGradient"}]},content:{properties:[{title:"<coordinate>"}]},animatable:{properties:[{title:"true"}]},inherited:{properties:[{title:"false"}]}}],zoomAndPan:[{Elements:{type:"element",infoset:"svg",list:"inline",properties:[{title:"svg"}]},content:{properties:[{title:"'disable' | 'magnify'"}]},animatable:{properties:[{title:"false"}]},inherited:{properties:[{title:"false"}]},Specification:{url:"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#"}}]}};
sources.css={property:{azimuth:[{values:{properties:[{title:"<angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-azimuth"}}],"background-attachment":[{values:{properties:[{title:"scroll | fixed | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background-attachment"}}],"background-color":[{values:{properties:[{title:"<color> | transparent | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background-color"}}],"background-image":[{values:{properties:[{title:"<uri> | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background-image"}}],"background-position":[{values:{properties:[{title:"[ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to the size of the box itself"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background-position"}}],"background-repeat":[{values:{properties:[{title:"repeat | repeat-x | repeat-y | no-repeat | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background-repeat"}}],background:[{values:{properties:[{title:"['background-color' || 'background-image' || 'background-repeat' || 'background-attachment' || 'background-position'] | inherit"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"allowed on 'background-position'"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-background"}}],"border-collapse":[{values:{properties:[{title:"collapse | separate | inherit"}]},applies:{properties:[{title:"'table' and 'inline-table' elements"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/tables.html#propdef-border-collapse"}}],"border-color":[{values:{properties:[{title:"[ <color> | transparent ]{1,4} | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-color"}}],"border-spacing":[{values:{properties:[{title:"<length> <length>? | inherit"}]},applies:{properties:[{title:"'table' and 'inline-table' elements "}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/tables.html#propdef-border-spacing"}}],"border-style":[{values:{properties:[{title:"<border-style>{1,4} | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-style"}}],"border-top":[{values:{properties:[{title:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-top"}}],"border-right":[{values:{properties:[{title:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-right"}}],"border-bottom":[{values:{properties:[{title:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-bottom"}}],"border-left":[{values:{properties:[{title:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-left"}}],"border-top-color":[{values:{properties:[{title:"<color> | transparent | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-top-color"}}],"border-right-color":[{values:{properties:[{title:"<color> | transparent | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-right-color"}}],"border-bottom-color":[{values:{properties:[{title:"<color> | transparent | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-bottom-color"}}],"border-left-color":[{values:{properties:[{title:"<color> | transparent | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-left-color"}}],"border-top-style":[{values:{properties:[{title:"<border-style> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-top-style"}}],"border-right-style":[{values:{properties:[{title:"<border-style> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-right-style"}}],"border-bottom-style":[{values:{properties:[{title:"<border-style> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-bottom-style"}}],"border-left-style":[{values:{properties:[{title:"<border-style> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-left-style"}}],"border-top-width":[{values:{properties:[{title:"<border-width> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-top-width"}}],"border-right-width":[{values:{properties:[{title:"<border-width> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-right-width"}}],"border-bottom-width":[{values:{properties:[{title:"<border-width> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-bottom-width"}}],"border-left-width":[{values:{properties:[{title:"<border-width> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-left-width"}}],"border-width":[{values:{properties:[{title:"<border-width>{1,4} | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border-width"}}],border:[{values:{properties:[{title:"[ <border-width> || <border-style> || 'border-top-color' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-border"}}],bottom:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"positioned elements"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to height of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-bottom"}}],"caption-side":[{values:{properties:[{title:"top | bottom | inherit"}]},applies:{properties:[{title:"'table-caption' elements"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/tables.html#propdef-caption-side"}}],clear:[{values:{properties:[{title:"none | left | right | both | inherit"}]},applies:{properties:[{title:"block-level elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-clear"}}],clip:[{values:{properties:[{title:"<shape> | auto | inherit"}]},applies:{properties:[{title:"absolutely positioned elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visufx.html#propdef-clip"}}],color:[{values:{properties:[{title:"<color> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/colors.html#propdef-color"}}],content:[{values:{properties:[{title:"normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit"}]},applies:{properties:[{title:":before and :after pseudo-elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"all"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-content"}}],"counter-increment":[{values:{properties:[{title:"[ <identifier> <integer>? ]+ | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"all"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-counter-increment"}}],"counter-reset":[{values:{properties:[{title:"[ <identifier> <integer>? ]+ | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"all"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-counter-reset"}}],"cue-after":[{values:{properties:[{title:"<uri> | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-cue-after"}}],"cue-before":[{values:{properties:[{title:"<uri> | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-cue-before"}}],cue:[{values:{properties:[{title:"[ 'cue-before' || 'cue-after' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-cue"}}],cursor:[{values:{properties:[{title:"[ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual, interactive"}]},Specification:{url:"http://www.w3.org/TR/CSS2/ui.html#propdef-cursor"}}],direction:[{values:{properties:[{title:"ltr | rtl | inherit"}]},applies:{properties:[{title:"all elements, but see prose"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-direction"}}],display:[{values:{properties:[{title:"inline | block | list-item | run-in | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"all"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-display"}}],elevation:[{values:{properties:[{title:"<angle> | below | level | above | higher | lower | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-elevation"}}],"empty-cells":[{values:{properties:[{title:"show | hide | inherit"}]},applies:{properties:[{title:"'table-cell' elements"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/tables.html#propdef-empty-cells"}}],"float":[{values:{properties:[{title:"left | right | none | inherit"}]},applies:{properties:[{title:"all, but see 9.7"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-float"}}],"font-family":[{values:{properties:[{title:"[[ <family-name> | <generic-family> ] [, <family-name>| <generic-family>]* ] | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font-family"}}],"font-size":[{values:{properties:[{title:"<absolute-size> | <relative-size> | <length> | <percentage> | inherit"}]},inherited:{properties:[{title:"yes"}]},percentage:{properties:[{title:"refer to parent element's font size"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font-size"}}],"font-style":[{values:{properties:[{title:"normal | italic | oblique | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font-style"}}],"font-variant":[{values:{properties:[{title:"normal | small-caps | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font-variant"}}],"font-weight":[{values:{properties:[{title:"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font-weight"}}],font:[{values:{properties:[{title:"[ [ 'font-style' || 'font-variant' || 'font-weight' ]? 'font-size' [ / 'line-height' ]? 'font-family' ] | caption | icon | menu | message-box | small-caption | status-bar | inherit"}]},inherited:{properties:[{title:"yes"}]},percentage:{properties:[{title:"see individual properties"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/fonts.html#propdef-font"}}],height:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table columns, and column groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see prose"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-height"}}],left:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"positioned elements"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-left"}}],"letter-spacing":[{values:{properties:[{title:"normal | <length> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-letter-spacing"}}],"line-height":[{values:{properties:[{title:"normal | <number> | <length> | <percentage> | inherit"}]},inherited:{properties:[{title:"yes"}]},percentage:{properties:[{title:"refer to the font size of the element itself"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-line-height"}}],"list-style-image":[{values:{properties:[{title:"<uri> | none | inherit"}]},applies:{properties:[{title:"elements with 'display: list-item'"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-list-style-image"}}],"list-style-position":[{values:{properties:[{title:"inside | outside | inherit"}]},applies:{properties:[{title:"elements with 'display: list-item'"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-list-style-position"}}],"list-style-type":[{values:{properties:[{title:"disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit"}]},applies:{properties:[{title:"elements with 'display: list-item'"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-list-style-type"}}],"list-style":[{values:{properties:[{title:"[ 'list-style-type' || 'list-style-position' || 'list-style-image' ] | inherit"}]},applies:{properties:[{title:"elements with 'display: list-item'"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-list-style"}}],"margin-right":[{values:{properties:[{title:"<margin-width> | inherit"}]},applies:{properties:[{title:"all elements except elements with table display types other than table-caption, table and inline-table"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-margin-right"}}],"margin-left":[{values:{properties:[{title:"<margin-width> | inherit"}]},applies:{properties:[{title:"all elements except elements with table display types other than table-caption, table and inline-table"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-margin-left"}}],"margin-top":[{values:{properties:[{title:"<margin-width> | inherit"}]},applies:{properties:[{title:"all elements except elements with table display types other than table-caption, table and inline-table"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-margin-top"}}],"margin-bottom":[{values:{properties:[{title:"<margin-width> | inherit"}]},applies:{properties:[{title:"all elements except elements with table display types other than table-caption, table and inline-table"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-margin-bottom"}}],margin:[{values:{properties:[{title:"<margin-width>{1,4} | inherit"}]},applies:{properties:[{title:"all elements except elements with table display types other than table-caption, table and inline-table"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-margin"}}],"max-height":[{values:{properties:[{title:"<length> | <percentage> | none | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table columns, and column groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see prose"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-max-height"}}],"max-width":[{values:{properties:[{title:"<length> | <percentage> | none | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table rows, and row groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-max-width"}}],"min-height":[{values:{properties:[{title:"<length> | <percentage> | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table columns, and column groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see prose"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-min-height"}}],"min-width":[{values:{properties:[{title:"<length> | <percentage> | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table rows, and row groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-min-width"}}],orphans:[{values:{properties:[{title:"<integer> | inherit"}]},applies:{properties:[{title:"block-level elements"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual, paged"}]},Specification:{url:"http://www.w3.org/TR/CSS2/page.html#propdef-orphans"}}],"outline-color":[{values:{properties:[{title:"<color> | invert | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, interactive"}]},Specification:{url:"http://www.w3.org/TR/CSS2/ui.html#propdef-outline-color"}}],"outline-style":[{values:{properties:[{title:"<border-style> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, interactive"}]},Specification:{url:"http://www.w3.org/TR/CSS2/ui.html#propdef-outline-style"}}],"outline-width":[{values:{properties:[{title:"<border-width> | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, interactive"}]},Specification:{url:"http://www.w3.org/TR/CSS2/ui.html#propdef-outline-width"}}],outline:[{values:{properties:[{title:"[ 'outline-color' || 'outline-style' || 'outline-width' ] | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, interactive"}]},Specification:{url:"http://www.w3.org/TR/CSS2/ui.html#propdef-outline"}}],overflow:[{values:{properties:[{title:"visible | hidden | scroll | auto | inherit"}]},applies:{properties:[{title:"non-replaced block-level elements, table cells, and inline-block elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visufx.html#propdef-overflow"}}],"padding-top":[{values:{properties:[{title:"<padding-width> | inherit"}]},applies:{properties:[{title:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-padding-top"}}],"padding-right":[{values:{properties:[{title:"<padding-width> | inherit"}]},applies:{properties:[{title:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-padding-right"}}],"padding-bottom":[{values:{properties:[{title:"<padding-width> | inherit"}]},applies:{properties:[{title:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-padding-bottom"}}],"padding-left":[{values:{properties:[{title:"<padding-width> | inherit"}]},applies:{properties:[{title:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-padding-left"}}],padding:[{values:{properties:[{title:"<padding-width>{1,4} | inherit"}]},applies:{properties:[{title:"all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/box.html#propdef-padding"}}],"page-break-after":[{values:{properties:[{title:"auto | always | avoid | left | right | inherit"}]},applies:{properties:[{title:"block-level elements (but see text)"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, paged"}]},Specification:{url:"http://www.w3.org/TR/CSS2/page.html#propdef-page-break-after"}}],"page-break-before":[{values:{properties:[{title:"auto | always | avoid | left | right | inherit"}]},applies:{properties:[{title:"block-level elements (but see text)"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, paged"}]},Specification:{url:"http://www.w3.org/TR/CSS2/page.html#propdef-page-break-before"}}],"page-break-inside":[{values:{properties:[{title:"avoid | auto | inherit"}]},applies:{properties:[{title:"block-level elements (but see text)"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual, paged"}]},Specification:{url:"http://www.w3.org/TR/CSS2/page.html#propdef-page-break-inside"}}],"pause-after":[{values:{properties:[{title:"<time> | <percentage> | inherit"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see prose"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-pause-after"}}],"pause-before":[{values:{properties:[{title:"<time> | <percentage> | inherit"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see prose"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-pause-before"}}],pause:[{values:{properties:[{title:"[ [<time> | <percentage>]{1,2} ] | inherit"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"see descriptions of 'pause-before' and 'pause-after'"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-pause"}}],"pitch-range":[{values:{properties:[{title:"<number> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-pitch-range"}}],pitch:[{values:{properties:[{title:"<frequency> | x-low | low | medium | high | x-high | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-pitch"}}],"play-during":[{values:{properties:[{title:"<uri> [ mix || repeat ]? | auto | none | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-play-during"}}],position:[{values:{properties:[{title:"static | relative | absolute | fixed | inherit"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-position"}}],quotes:[{values:{properties:[{title:"[<string> <string>]+ | none | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/generate.html#propdef-quotes"}}],richness:[{values:{properties:[{title:"<number> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-richness"}}],right:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"positioned elements"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-right"}}],"speak-header":[{values:{properties:[{title:"once | always | inherit"}]},applies:{properties:[{title:"elements that have table header information"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-speak-header"}}],"speak-numeral":[{values:{properties:[{title:"digits | continuous | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-speak-numeral"}}],"speak-punctuation":[{values:{properties:[{title:"code | none | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-speak-punctuation"}}],speak:[{values:{properties:[{title:"normal | none | spell-out | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-speak"}}],"speech-rate":[{values:{properties:[{title:"<number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-speech-rate"}}],stress:[{values:{properties:[{title:"<number> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-stress"}}],"table-layout":[{values:{properties:[{title:"auto | fixed | inherit"}]},applies:{properties:[{title:"'table' and 'inline-table' elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/tables.html#propdef-table-layout"}}],"text-align":[{values:{properties:[{title:"left | right | center | justify | inherit"}]},applies:{properties:[{title:"block-level elements, table cells and inline blocks"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-text-align"}}],"text-decoration":[{values:{properties:[{title:"none | [ underline || overline || line-through || blink ] | inherit"}]},inherited:{properties:[{title:"no (see prose)"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-text-decoration"}}],"text-indent":[{values:{properties:[{title:"<length> | <percentage> | inherit"}]},applies:{properties:[{title:"block-level elements, table cells and inline blocks"}]},inherited:{properties:[{title:"yes"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-text-indent"}}],"text-transform":[{values:{properties:[{title:"capitalize | uppercase | lowercase | none | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-text-transform"}}],top:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"positioned elements"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to height of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-top"}}],"unicode-bidi":[{values:{properties:[{title:"normal | embed | bidi-override | inherit"}]},applies:{properties:[{title:"all elements, but see prose"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-unicode-bidi"}}],"vertical-align":[{values:{properties:[{title:"baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit"}]},applies:{properties:[{title:"inline-level and 'table-cell' elements"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to the 'line-height' of the element itself"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align"}}],visibility:[{values:{properties:[{title:"visible | hidden | collapse | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visufx.html#propdef-visibility"}}],"voice-family":[{values:{properties:[{title:"[[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-voice-family"}}],volume:[{values:{properties:[{title:"<number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit"}]},inherited:{properties:[{title:"yes"}]},percentage:{properties:[{title:"refer to inherited value"}]},media:{properties:[{title:"aural"}]},Specification:{url:"http://www.w3.org/TR/CSS2/aural.html#propdef-volume"}}],"white-space":[{values:{properties:[{title:"normal | pre | nowrap | pre-wrap | pre-line | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-white-space"}}],widows:[{values:{properties:[{title:"<integer> | inherit"}]},applies:{properties:[{title:"block-level elements"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual, paged"}]},Specification:{url:"http://www.w3.org/TR/CSS2/page.html#propdef-widows"}}],width:[{values:{properties:[{title:"<length> | <percentage> | auto | inherit"}]},applies:{properties:[{title:"all elements but non-replaced inline elements, table rows, and row groups"}]},inherited:{properties:[{title:"no"}]},percentage:{properties:[{title:"refer to width of containing block"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visudet.html#propdef-width"}}],"word-spacing":[{values:{properties:[{title:"normal | <length> | inherit"}]},inherited:{properties:[{title:"yes"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/text.html#propdef-word-spacing"}}],"z-index":[{values:{properties:[{title:"auto | <integer> | inherit"}]},applies:{properties:[{title:"positioned elements"}]},inherited:{properties:[{title:"no"}]},media:{properties:[{title:"visual"}]},Specification:{url:"http://www.w3.org/TR/CSS2/visuren.html#propdef-z-index"}}]},selector:{selectors:[{Pattern:{type:"selector",infoset:"css",properties:[{title:"*"}]},name:{properties:[{title:"Universal selector"}]},description:{properties:[{title:"Matches any element"}]}},{Pattern:{properties:[{title:"E"}]},name:{properties:[{title:"Type selector"}]},description:{properties:[{title:"Matches any E element (i.e., an element of type E)"}]}},{Pattern:{properties:[{title:"E F"}]},name:{properties:[{title:"Descendant selector"}]},description:{properties:[{title:"Matches any F element that is a descendant of an E element"}]}},{Pattern:{properties:[{title:"E > F"}]},name:{properties:[{title:"Child selector"}]},description:{properties:[{title:"Matches any F element that is a child of an E element"}]}},{Pattern:{properties:[{title:"E:first-child"}]},name:{properties:[{title:"first-child pseudo-class"}]},description:{properties:[{title:"Matches element E when E is the first child of its parent"}]}},{Pattern:{properties:[{title:"E:link"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is not yet visited"}]}},{Pattern:{properties:[{title:"E:visited"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is already visited"}]}},{Pattern:{properties:[{title:"E:active | E:hover | E:focus"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E during certain user actions"}]}},{Pattern:{properties:[{title:"E:lang(c)"}]},name:{properties:[{title:"lang() pseudo-class"}]},description:{properties:[{title:"Matches element of type E if it is in (human) language c"}]}},{Pattern:{properties:[{title:"E + F"}]},name:{properties:[{title:"Adjacent selector"}]},description:{properties:[{title:"Matches any F element immediately preceded by a sibling element E"}]}},{Pattern:{properties:[{title:"E[foo]"}]},name:{properties:[{title:"Attribute selector"}]},description:{properties:[{title:'Matches any E element with the "foo" attribute set (whatever the value)'}]}},{Pattern:{properties:[{title:'E[foo="warning"]'}]},name:{properties:[{title:"Attribute selector"}]},description:{properties:[{title:'Matches any E element whose "foo" attribute value is exactly equal to "warning"'}]}},{Pattern:{properties:[{title:'E[foo~="warning"]'}]},name:{properties:[{title:"Attribute selector"}]},description:{properties:[{title:'Matches any E element whose "foo" attribute value is a list of space-separated values, one of which is exactly equal to "warning"'}]}},{Pattern:{properties:[{title:"E[lang|=en]"}]},name:{properties:[{title:"Attribute selector"}]},description:{properties:[{title:'Matches any E element whose "lang" attribute has a hyphen-separated list of values beginning (from the left) with "en"'}]}},{Pattern:{properties:[{title:".warning"}]},name:{properties:[{title:"Class selector"}]},description:{properties:[{title:'In HTML, matches any element whose class attribute is a list of space-separated values, one of which is exactly equal to "warning"'}]}},{Pattern:{properties:[{title:"#myid"}]},name:{properties:[{title:"ID selector"}]},description:{properties:[{title:'Matches any element with ID equal to "myid".'}]}}],"*":[{name:{properties:[{title:"Universal selector"}]},description:{properties:[{title:"matches the name of any element type"}]}}],"lang()":[{Pattern:{properties:[{title:"E:lang(c)"}]},name:{properties:[{title:"lang() pseudo-class"}]},description:{properties:[{title:"Matches element E if it is in (human) language c (the document language specifies how language is determined)"}]},Internationalization:{properties:[{title:' link="http://www.w3.org/International/questions/qa-css-lang">Styling using the lang attribute'}]}}],"first-child":[{Pattern:{properties:[{title:"E:first-child"}]},name:{properties:[{title:"first-child pseudo-class"}]},description:{properties:[{title:"Matches element E when E is the first child of its parent"}]}}],link:[{Pattern:{properties:[{title:"E:link"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is not yet visited"}]}}],visited:[{Pattern:{properties:[{title:"E:visited"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is already visited"}]}}],active:[{Pattern:{properties:[{title:"E:active"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E when E is activated by the user"}]}}],hover:[{Pattern:{properties:[{title:"E:hover"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E while the user designates an element (with some pointing device), but does not activate it"}]}}],focus:[{Pattern:{properties:[{title:"E:focus"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E while while it has the focus"}]}}],"lang()":[{Pattern:{properties:[{title:"E:lang(c)"}]},name:{properties:[{title:"lang() pseudo-class"}]},description:{properties:[{title:"Matches element E if it is in (human) language c (the document markup language specifies how the human language is determined)"}]},Internationalization:{properties:[{url:"http://www.w3.org/International/questions/qa-css-lang",title:"Styling using the lang attribute"}]}}],":first-child":[{Pattern:{properties:[{title:"E:first-child"}]},name:{properties:[{title:"first-child pseudo-class"}]},description:{properties:[{title:"Matches element E when E is the first child of its parent"}]}}],":link":[{Pattern:{properties:[{title:"E:link"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is not yet visited"}]}}],":visited":[{Pattern:{properties:[{title:"E:visited"}]},name:{properties:[{title:"link pseudo-class"}]},description:{properties:[{title:"Matches element E if E is the source anchor of a hyperlink of which the target is already visited"}]}}],":active":[{Pattern:{properties:[{title:"E:active"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E when E is activated by the user"}]}}],":hover":[{Pattern:{properties:[{title:"E:hover"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E while the user designates an element (with some pointing device), but does not activate it"}]}}],":focus":[{Pattern:{properties:[{title:"E:focus"}]},name:{properties:[{title:"dynamic pseudo-class"}]},description:{properties:[{title:"Matches E while while it has the focus"}]}}],":lang()":[{Pattern:{properties:[{title:"E:lang(c)"}]},name:{properties:[{title:"lang() pseudo-class"}]},description:{properties:[{title:"Matches element E if it is in (human) language c (the document markup language specifies how the human language is determined)"}]},Internationalization:{properties:[{url:"http://www.w3.org/International/questions/qa-css-lang",title:"Styling using the lang attribute"}]}}]},"at-rule":{"at-rules":[{Rules:{type:"at-rule",infoset:"css",list:"block",properties:[{title:"@media"},{title:"@import"},{title:"@page"},{title:"@charset"}]}}],"@import":[{name:{properties:[{title:"@import"}]},description:{properties:[{title:"The @import rule allows to import style rules from other style sheets. Any @import rules must precede all other rules (except @charset)"}]},Syntax:{properties:[{title:"The @import keyword must be followed by the URI of the style sheet to include. A string is also allowed; it will be interpreted as if it had url(...) around it. Media-dependent import can be specified with comma-separated media types after the URI."}]},Example:{properties:[{title:'@import url("mystyle.css) screen'}]}}],"@page":[{name:{properties:[{title:"@page"}]},description:{properties:[{title:'An @page rule consists of the keyword "@page", followed by an optional page selector, followed by a block of declarations. The declarations in an @page rule are said to be in the page context and are useful to write CSS rules for paged media (e.g. for printing on paper).'}]},Example:{properties:[{title:"@page {margin: 3cm;}"}]}}],"@media":[{name:{properties:[{title:"@media"}]},description:{properties:[{title:"An @media rule specifies the target media types (separated by commas) of a set of statements (delimited by curly braces)"}]},values:{properties:[{title:"all, braille, embossed, handheld, print, projection, screen, speech, tty, tv"}]}}],"@charset":[{name:{properties:[{title:"@charset"}]},description:{properties:[{title:"The @charset rule defines the encoding used in a linked style sheet. An @charset rule must be placed at the very beginning of the style sheet, preceded by no characters, and the name of the encoding should follow in quotes."}]},Example:{properties:[{title:'@charset "ISO-8859-1"'}]},Internationalization:{properties:[{url:"http://www.w3.org/International/questions/qa-css-charset",title:"CSS character encoding declarations"}]}}],"import":[{name:{properties:[{title:"@import"}]},description:{properties:[{title:"The @import rule allows to import style rules from other style sheets. Any @import rules must precede all other rules (except @charset)"}]},Syntax:{properties:[{title:"The @import keyword must be followed by the URI of the style sheet to include. A string is also allowed; it will be interpreted as if it had url(...) around it. Media-dependent import can be specified with comma-separated media types after the URI."}]},Example:{properties:[{title:'@import url("mystyle.css) screen'}]}}],page:[{name:{properties:[{title:"@page"}]},description:{properties:[{title:'An @page rule consists of the keyword "@page", followed by an optional page selector, followed by a block of declarations. The declarations in an @page rule are said to be in the page context and are useful to write CSS rules for paged media (e.g. for printing on paper).'}]},Example:{properties:[{title:"@page {margin: 3cm;}"}]}}],media:[{name:{properties:[{title:"@media"}]},description:{properties:[{title:"An @media rule specifies the target media types (separated by commas) of a set of statements (delimited by curly braces)"}]},values:{properties:[{title:"all, braille, embossed, handheld, print, projection, screen, speech, tty, tv"}]}}],charset:[{name:{properties:[{title:"@charset"}]},description:{properties:[{title:"The @charset rule defines the encoding used in a linked style sheet. An @charset rule must be placed at the very beginning of the style sheet, preceded by no characters, and the name of the encoding should follow in quotes."}]},Example:{properties:[{title:'@charset "ISO-8859-1"'}]},Internationalization:{properties:[{url:"http://www.w3.org/International/questions/qa-css-charset",title:"CSS character encoding declarations"}]}}]}};
sources.xpath={"function":{"node-name":[{parameters:{properties:[{title:"$arg as node()?"}]},returns:{properties:[{title:"xs:QName?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-node-name"}}],nilled:[{parameters:{properties:[{title:"$arg as node()?"}]},returns:{properties:[{title:"xs:boolean?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-nilled"}}],string:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-string"}}],data:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-data"}}],"base-uri":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-base-uri"}}],"document-uri":[{parameters:{properties:[{title:"$arg as node()?"}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-document-uri"}}],abs:[{parameters:{properties:[{title:"$arg as numeric?"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-abs"}}],ceiling:[{parameters:{properties:[{title:"$arg as numeric?"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-ceiling"}}],floor:[{parameters:{properties:[{title:"$arg as numeric?"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-floor"}}],round:[{parameters:{properties:[{title:"$arg as numeric?"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-round"}}],"round-half-to-even":[{parameters:{properties:[{title:"$arg as numeric?"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-round-half-to-even"}}],"codepoints-to-string":[{parameters:{properties:[{title:"$arg as xs:integer*"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-codepoints-to-string"}}],"string-to-codepoints":[{parameters:{properties:[{title:"$arg as xs:string?"}]},returns:{properties:[{title:"xs:integer*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-string-to-codepoints"}}],compare:[{parameters:{properties:[{title:"$comparand1 as xs:string?, $comparand2 as xs:string?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-compare"}}],"codepoint-equal":[{parameters:{properties:[{title:"$comparand1 as xs:string?,$comparand2 as xs:string?"}]},returns:{properties:[{title:"xs:boolean?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-codepoint-equal"}}],concat:[{parameters:{properties:[{title:"$arg1 as xs:anyAtomicType?,$arg2 as xs:anyAtomicType?,..."}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-concat"}}],"string-join":[{parameters:{properties:[{title:"$arg1 as xs:string*, $arg2 as xs:string"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-string-join"}}],substring:[{parameters:{properties:[{title:"$sourceString as xs:string?,$startingLoc as xs:double"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-substring"}}],"string-length":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:integer"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-string-length"}}],"normalize-space":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-normalize-space"}}],"normalize-unicode":[{parameters:{properties:[{title:"$arg as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-normalize-unicode"}}],"upper-case":[{parameters:{properties:[{title:"$arg as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-upper-case"}}],"lower-case":[{parameters:{properties:[{title:"$arg as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-lower-case"}}],translate:[{parameters:{properties:[{title:"$arg as xs:string?,$mapString as xs:string,$transString as xs:string"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-translate"}}],"encode-for-uri":[{parameters:{properties:[{title:"$uri-part as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-encode-for-uri"}}],"iri-to-uri":[{parameters:{properties:[{title:"$iri as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-iri-to-uri"}}],"escape-html-uri":[{parameters:{properties:[{title:"$uri as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-escape-html-uri"}}],contains:[{parameters:{properties:[{title:"$arg1 as xs:string?, $arg2 as xs:string?"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-contains"}}],"starts-with":[{parameters:{properties:[{title:"$arg1 as xs:string?, $arg2 as xs:string?"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-starts-with"}}],"ends-with":[{parameters:{properties:[{title:"$arg1 as xs:string?, $arg2 as xs:string?"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-ends-with"}}],"substring-before":[{parameters:{properties:[{title:"$arg1 as xs:string?, $arg2 as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-substring-before"}}],"substring-after":[{parameters:{properties:[{title:"$arg1 as xs:string?, $arg2 as xs:string?"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-substring-after"}}],matches:[{parameters:{properties:[{title:"$input as xs:string?, $pattern as xs:string"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-matches"}}],replace:[{parameters:{properties:[{title:"$input as xs:string?,$pattern as xs:string,$replacement as xs:string"}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-replace"}}],tokenize:[{parameters:{properties:[{title:"$input as xs:string?, $pattern as xs:string"}]},returns:{properties:[{title:"xs:string*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-tokenize"}}],"resolve-uri":[{parameters:{properties:[{title:"$relative as xs:string?"}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-resolve-uri"}}],"true":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-true"}}],"false":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-false"}}],not:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-not"}}],"years-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-years-from-duration"}}],"months-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-months-from-duration"}}],"days-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-days-from-duration"}}],"hours-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-hours-from-duration"}}],"minutes-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-minutes-from-duration"}}],"seconds-from-duration":[{parameters:{properties:[{title:"$arg as xs:duration?"}]},returns:{properties:[{title:"xs:decimal?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-seconds-from-duration"}}],"year-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-year-from-dateTime"}}],"month-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-month-from-dateTime"}}],"day-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-day-from-dateTime"}}],"hours-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-hours-from-dateTime"}}],"minutes-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-minutes-from-dateTime"}}],"seconds-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:decimal?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-seconds-from-dateTime"}}],"timezone-from-dateTime":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:dayTimeDuration?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-timezone-from-dateTime"}}],"year-from-date":[{parameters:{properties:[{title:"$arg as xs:date?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-year-from-date"}}],"month-from-date":[{parameters:{properties:[{title:"$arg as xs:date?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-month-from-date"}}],"day-from-date":[{parameters:{properties:[{title:"$arg as xs:date?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-day-from-date"}}],"timezone-from-date":[{parameters:{properties:[{title:"$arg as xs:date?"}]},returns:{properties:[{title:"xs:dayTimeDuration?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-timezone-from-date"}}],"hours-from-time":[{parameters:{properties:[{title:"$arg as xs:time?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-hours-from-time"}}],"minutes-from-time":[{parameters:{properties:[{title:"$arg as xs:time?"}]},returns:{properties:[{title:"xs:integer?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-minutes-from-time"}}],"seconds-from-time":[{parameters:{properties:[{title:"$arg as xs:time?"}]},returns:{properties:[{title:"xs:decimal?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-seconds-from-time"}}],"timezone-from-time":[{parameters:{properties:[{title:"$arg as xs:time?"}]},returns:{properties:[{title:"xs:dayTimeDuration?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-timezone-from-time"}}],"adjust-dateTime-to-timezone":[{parameters:{properties:[{title:"$arg as xs:dateTime?"}]},returns:{properties:[{title:"xs:dateTime?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-adjust-dateTime-to-timezone"}}],"adjust-date-to-timezone":[{parameters:{properties:[{title:"$arg as xs:date?"}]},returns:{properties:[{title:"xs:date?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-adjust-date-to-timezone"}}],"adjust-time-to-timezone":[{parameters:{properties:[{title:"$arg as xs:time?"}]},returns:{properties:[{title:"xs:time?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-adjust-time-to-timezone"}}],"resolve-QName":[{parameters:{properties:[{title:"$qname as xs:string?, $element as element()"}]},returns:{properties:[{title:"xs:QName?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-resolve-QName"}}],QName:[{parameters:{properties:[{title:"$paramURI as xs:string?, $paramQName as xs:string"}]},returns:{properties:[{title:"xs:QName"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-QName"}}],"prefix-from-QName":[{parameters:{properties:[{title:"$arg as xs:QName?"}]},returns:{properties:[{title:"xs:NCName?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-prefix-from-QName"}}],"local-name-from-QName":[{parameters:{properties:[{title:"$arg as xs:QName?"}]},returns:{properties:[{title:"xs:NCName?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-local-name-from-QName"}}],"namespace-uri-from-QName":[{parameters:{properties:[{title:"$arg as xs:QName?"}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-namespace-uri-from-QName"}}],"namespace-uri-for-prefix":[{parameters:{properties:[{title:"$prefix as xs:string?,$element as element()"}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-namespace-uri-for-prefix"}}],"in-scope-prefixes":[{parameters:{properties:[{title:"$element as element()"}]},returns:{properties:[{title:"xs:string*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-in-scope-prefixes"}}],name:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-name"}}],"local-name":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-local-name"}}],"namespace-uri":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:anyURI"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-namespace-uri"}}],number:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:double"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-number"}}],lang:[{parameters:{properties:[{title:"$testlang as xs:string?"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-lang"}}],root:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"node()"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-root"}}],"boolean":[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-boolean"}}],"index-of":[{parameters:{properties:[{title:"$seqParam as xs:anyAtomicType*,$srchParam as xs:anyAtomicType"}]},returns:{properties:[{title:"xs:integer*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-index-of"}}],empty:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-empty"}}],exists:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-exists"}}],"distinct-values":[{parameters:{properties:[{title:"$arg as xs:anyAtomicType*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-distinct-values"}}],"insert-before":[{parameters:{properties:[{title:"$target as item()*,$position as xs:integer,$inserts as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-insert-before"}}],remove:[{parameters:{properties:[{title:"$target as item()*, $position as xs:integer"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-remove"}}],reverse:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-reverse"}}],subsequence:[{parameters:{properties:[{title:"$sourceSeq as item()*, $startingLoc as xs:double"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-subsequence"}}],unordered:[{parameters:{properties:[{title:"$sourceSeq as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-unordered"}}],"zero-or-one":[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-zero-or-one"}}],"one-or-more":[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-one-or-more"}}],"exactly-one":[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-exactly-one"}}],"deep-equal":[{parameters:{properties:[{title:"$parameter1 as item()*, $parameter2 as item()*"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-deep-equal"}}],count:[{parameters:{properties:[{title:"$arg as item()*"}]},returns:{properties:[{title:"xs:integer"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-count"}}],avg:[{parameters:{properties:[{title:"$arg as xs:anyAtomicType*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-avg"}}],max:[{parameters:{properties:[{title:"$arg as xs:anyAtomicType*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-max"}}],min:[{parameters:{properties:[{title:"$arg as xs:anyAtomicType*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-min"}}],sum:[{parameters:{properties:[{title:"$arg as xs:anyAtomicType*"}]},returns:{properties:[{title:""}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-sum"}}],id:[{parameters:{properties:[{title:"$arg as xs:string*"}]},returns:{properties:[{title:"element()*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-id"}}],idref:[{parameters:{properties:[{title:"$arg as xs:string*"}]},returns:{properties:[{title:"node()*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-idref"}}],doc:[{parameters:{properties:[{title:"$uri as xs:string?"}]},returns:{properties:[{title:"document-node()?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-doc"}}],"doc-available":[{parameters:{properties:[{title:"$uri as xs:string?"}]},returns:{properties:[{title:"xs:boolean"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-doc-available"}}],collection:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"node()*"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-collection"}}],position:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:integer"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-position"}}],last:[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:integer"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-last"}}],"current-dateTime":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:dateTime"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-current-dateTime"}}],"current-date":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:date"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-current-date"}}],"current-time":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:time"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-current-time"}}],"implicit-timezone":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:dayTimeDuration"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-implicit-timezone"}}],"default-collation":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:string"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-default-collation"}}],"static-base-uri":[{parameters:{properties:[{title:""}]},returns:{properties:[{title:"xs:anyURI?"}]},Specification:{url:"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#func-static-base-uri"}}]}};
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
jQuery.autocomplete=function(D,S){var N=this;
var W=$(D).attr("autocomplete","off");
if(S.inputClass){W.addClass(S.inputClass)
}var O=document.createElement("div");
var H=$(O);
H.hide().addClass(S.resultsClass).css("position","absolute");
H.focus(function(){J=true
});
H.blur(function(){J=false;
C()
});
if(S.width>0){H.css("width",S.width)
}$("body").append(O);
D.autocompleter=N;
var f=null;
var V="";
var g=-1;
var I={};
var Y=false;
var J=false;
var A=null;
function K(){I={};
I.data={};
I.length=0
}K();
if(S.data!=null){var Q="",n={},L=[];
if(typeof S.url!="string"){S.cacheLength=1
}for(var l=0;
l<S.data.length;
l++){L=((typeof S.data[l]=="string")?[S.data[l]]:S.data[l]);
if(L[0].length>0){Q=L[0].substring(0,1).toLowerCase();
if(!n[Q]){n[Q]=[]
}n[Q].push(L)
}}for(var j in n){S.cacheLength++;
E(j,n[j])
}}W.keydown(function(i){A=i.keyCode;
switch(i.keyCode){case 38:i.preventDefault();
b(-1);
break;
case 40:i.preventDefault();
b(1);
break;
case 9:case 13:if(d()){W.get(0).blur();
i.preventDefault()
}break;
default:g=-1;
if(f){clearTimeout(f)
}f=setTimeout(function(){R()
},S.delay);
break
}}).focus(function(){J=true
}).blur(function(){J=false
});
T();
function R(){if(A==46||(A>8&&A<32)){return H.hide()
}var i=W.val();
if(i==V){return 
}V=i;
if(i.length>=S.minChars){W.addClass(S.loadingClass);
a(i)
}else{W.removeClass(S.loadingClass);
H.hide()
}}function b(o){var i=$("li",O);
if(!i){return 
}g+=o;
if(g<0){g=0
}else{if(g>=i.size()){g=i.size()-1
}}i.removeClass("ac_over");
$(i[g]).addClass("ac_over")
}function d(){var i=$("li.ac_over",O)[0];
if(!i){var o=$("li",O);
if(S.selectOnly){if(o.length==1){i=o[0]
}}else{if(S.selectFirst){i=o[0]
}}}if(i){P(i);
return true
}else{return false
}}function P(i){if(!i){i=document.createElement("li");
i.extra=[];
i.selectValue=""
}var o=$.trim(i.selectValue?i.selectValue:i.innerHTML);
D.lastSelected=o;
V=o;
H.html("");
W.val(o);
T();
if(S.onItemSelect){setTimeout(function(){S.onItemSelect(i)
},1)
}}function B(q,o){var p=W.get(0);
if(p.createTextRange){var i=p.createTextRange();
i.collapse(true);
i.moveStart("character",q);
i.moveEnd("character",o);
i.select()
}else{if(p.setSelectionRange){p.setSelectionRange(q,o)
}else{if(p.selectionStart){p.selectionStart=q;
p.selectionEnd=o
}}}p.focus()
}function U(i){if(A!=8){W.val(W.val()+i.substring(V.length));
B(V.length,i.length)
}}function c(){var o=X(D);
var i=(S.width>0)?S.width:W.width();
H.css({width:parseInt(i)+"px",top:(o.y+D.offsetHeight)+"px",left:o.x+"px"}).show()
}function C(){if(f){clearTimeout(f)
}f=setTimeout(T,200)
}function T(){if(f){clearTimeout(f)
}W.removeClass(S.loadingClass);
if(H.is(":visible")){H.hide()
}if(S.mustMatch){var i=W.val();
if(i!=D.lastSelected){P(null)
}}}function G(o,i){if(i){W.removeClass(S.loadingClass);
O.innerHTML="";
if(!J||i.length==0){return T()
}if($.browser.msie){H.append(document.createElement("iframe"))
}O.appendChild(h(i));
if(S.autoFill&&(W.val().toLowerCase()==o.toLowerCase())){U(i[0][0])
}c()
}else{T()
}}function F(r){if(!r){return null
}var o=[];
var q=r.split(S.lineSeparator);
for(var p=0;
p<q.length;
p++){var s=$.trim(q[p]);
if(s){o[o.length]=s.split(S.cellSeparator)
}}return o
}function h(v){var u=document.createElement("ul");
var r=v.length;
if((S.maxItemsToShow>0)&&(S.maxItemsToShow<r)){r=S.maxItemsToShow
}for(var s=0;
s<r;
s++){var w=v[s];
if(!w){continue
}var p=document.createElement("li");
if(S.formatItem){p.innerHTML=S.formatItem(w,s,r);
p.selectValue=w[0]
}else{p.innerHTML=w[0];
p.selectValue=w[0]
}var o=null;
if(w.length>1){o=[];
for(var q=1;
q<w.length;
q++){o[o.length]=w[q]
}}p.extra=o;
u.appendChild(p);
$(p).hover(function(){$("li",u).removeClass("ac_over");
$(this).addClass("ac_over");
g=$("li",u).indexOf($(this).get(0))
},function(){$(this).removeClass("ac_over")
}).click(function(i){i.preventDefault();
i.stopPropagation();
P(this)
})
}return u
}function a(o){if(!S.matchCase){o=o.toLowerCase()
}var i=S.cacheLength?m(o):null;
if(i){G(o,i)
}else{if((typeof S.url=="string")&&(S.url.length>0)){$.get(M(o),function(p){p=F(p);
E(o,p);
G(o,p)
})
}else{W.removeClass(S.loadingClass)
}}}function M(r){var o=S.url+"?q="+encodeURI(r);
for(var p in S.extraParams){o+="&"+p+"="+encodeURI(S.extraParams[p])
}return o
}function m(w){if(!w){return null
}if(I.data[w]){return I.data[w]
}if(S.matchSubset){for(var u=w.length-1;
u>=S.minChars;
u--){var p=w.substr(0,u);
var y=I.data[p];
if(y){var v=[];
for(var r=0;
r<y.length;
r++){var o=y[r];
var s=o[0];
if(Z(s,w)){v[v.length]=o
}}return v
}}}return null
}function Z(q,p){if(!S.matchCase){q=q.toLowerCase()
}var o=q.indexOf(p);
if(o==-1){return false
}return o==0||S.matchContains
}this.flushCache=function(){K()
};
this.setExtraParams=function(i){S.extraParams=i
};
this.findValue=function(){var o=W.val();
if(!S.matchCase){o=o.toLowerCase()
}var i=S.cacheLength?m(o):null;
if(i){e(o,i)
}else{if((typeof S.url=="string")&&(S.url.length>0)){$.get(M(o),function(p){p=F(p);
E(o,p);
e(o,p)
})
}else{e(o,null)
}}};
function e(w,v){if(v){W.removeClass(S.loadingClass)
}var s=(v)?v.length:0;
var p=null;
for(var u=0;
u<s;
u++){var x=v[u];
if(x[0].toLowerCase()==w.toLowerCase()){p=document.createElement("li");
if(S.formatItem){p.innerHTML=S.formatItem(x,u,s);
p.selectValue=x[0]
}else{p.innerHTML=x[0];
p.selectValue=x[0]
}var o=null;
if(x.length>1){o=[];
for(var r=1;
r<x.length;
r++){o[o.length]=x[r]
}}p.extra=o
}}if(S.onFindValue){setTimeout(function(){S.onFindValue(p)
},1)
}}function E(o,i){if(!i||!o||!S.cacheLength){return 
}if(!I.length||I.length>S.cacheLength){K();
I.length++
}else{if(!I[o]){I.length++
}}I.data[o]=i
}function X(o){var p=o.offsetLeft||0;
var i=o.offsetTop||0;
while(o=o.offsetParent){p+=o.offsetLeft;
i+=o.offsetTop
}return{x:p,y:i}
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
var keywordSources={css:{property:"CSS Property",selector:"CSS Selector","at-rule":"CSS At-rules"},html:{element:"HTML Element",attribute:"HTML Attribute"},svg:{attribute:"SVG Attribute",element:"SVG Element"},xpath:{"function":"XPath function"}};
var keywordsMatch={};
var keywords=[];
for(var infoset in keywordSources){for(var propertytype in keywordSources[infoset]){var source=sources[infoset][propertytype];
for(var keyword in source){if(!keywordsMatch[keyword]){keywordsMatch[keyword]={};
keywords.push(keyword)
}if(!keywordsMatch[keyword][infoset]){keywordsMatch[keyword][infoset]={}
}if(!keywordsMatch[keyword][infoset][propertytype]){keywordsMatch[keyword][infoset][propertytype]=[]
}for(var k in source[keyword]){keywordsMatch[keyword][infoset][propertytype].push(source[keyword][k])
}}}}function makeReplacingAccordion(A){A.css("position","relative");
A.accordion("option","navigation",true);
A.accordion("option","autoHeight","false");
A.accordion("option","collapsible",true)
}function clearLookUp(){if($("#details").accordion){$("#details").accordion("destroy")
}$("#details").html("")
}jQuery(document).ready(function(D){D("#content").tabs();
D("#content").tabs("paging");
D("#content").bind("tabsshow",function(E,F){window.location.hash=F.tab.hash
});
D(".accordion").accordion({header:"div >h3",active:false,autoHeight:false});
makeReplacingAccordion(D(".accordion"));
keywords=make_unique(keywords);
function C(V,K,N){if(V===null){return false
}var J=keywordSources[K][N];
var Q=D("<div></div>").appendTo(D("#details"));
Q.append("<h2>"+J+" <code>"+V+"</code></h2><div></div>");
var G=D("div",Q);
for(var P in keywordsMatch[V][K][N]){var H=keywordsMatch[V][K][N][P];
var T=D("<dl></dl>").appendTo(G);
for(var L in H){var R=D("<dt></dt>").appendTo(T);
var O=R;
if(H[L].url){O=D("<a href='"+H[L].url+"'></a>").appendTo(R)
}O.text(L);
if(H[L]["properties"]&&H[L]["properties"].length>0){var E=true;
if(H[L]["properties"].length===1||H[L].list==="inline"){E=false
}var U=D("<dd></dd>").appendTo(T);
var S=U;
if(E){if(H[L].list==="block"){S=D("<ul></ul>").appendTo(S)
}}for(var M in H[L]["properties"]){var F=S;
var I=H[L]["properties"][M];
if(E){F=D("<li></li>").appendTo(F)
}else{F=D("<span></span>").appendTo(F)
}if(I.url){F=D("<a href='"+I.url+"'></a>").appendTo(F)
}else{if(H[L].infoset&&H[L].type){F=D("<a href='#inf,"+H[L].infoset+","+escape(H[L].type)+","+escape(I.title)+"' class='internal'></a>").appendTo(F)
}}F.text(I.title);
if(!E&&M<H[L]["properties"].length-1){S.append(", ")
}}}}}return true
}function B(G){var H=false;
var I=false;
var F=false;
if(G!==null){var E=G.split(",");
H=unescape(E[1]);
I=unescape(E[2]);
F=unescape(E.slice(3).join(","));
if(F&&H&&I&&keywordSources[H]&&keywordSources[H][I]&&keywordsMatch[F]&&keywordsMatch[F][H]&&keywordsMatch[F][H][I]){clearLookUp();
D("#search").val("");
if(C(F,H,I)){D("#details").accordion({header:"div>h2",autoHeight:false});
return true
}}}return false
}function A(I,F){if(I===null){return 
}var G=I.selectValue;
clearLookUp();
var E=0;
for(var H in keywordsMatch[G]){for(var J in keywordsMatch[G][H]){E=E+1;
C(G,H,J)
}}if(E===1){D("#details").accordion({header:"div>h2",autoHeight:false})
}else{D("#details").accordion({header:"div>h2",autoHeight:false,active:false})
}makeReplacingAccordion(D("#details"))
}D("a.internal").live("click",function(){return B(D(this).attr("href").split("#")[1])
});
D("#search").autocompleteArray(keywords,{onItemSelect:A,onFindValue:A,autoFill:false,selectFirst:true,delay:40,maxItemsToShow:10});
D("#search").change(function(){clearLookUp();
if(D("#search").val()){if(!D("#details_clear").length){D("#search").after("<a href='#' class='ui-icon ui-icon-close' id='details_clear'></a>");
D("#details_clear").click(function(){clearLookUp();
D("#search").val("").change()
})
}}else{D("#details_clear").replaceWith("")
}});
if(window.location.hash&&window.location.hash.substring(0,5)==="#inf-"){B(window.location.hash.substring(1))
}});