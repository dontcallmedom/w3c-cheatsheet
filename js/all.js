"use strict";
// y: type, i: infoset, u: url, t: title, p: properties
var dictionary = {
    "pt": "Pattern",
    "n": "name",
    "d": "description",
    "i": "Internationalization",
    "ac": "Accessibility techniques",
    "q": "QA Tip",
    "m": "Mobile considerations",
    "el": "Elements",
    "c": "content",
    "pr": "Allowed properties",
    "k": "Allowed children",
    "pa": "parameters",
    "r": "returns",
    "ex": "Example",
    "s": "Syntax",
    "v": "values",
    "ih": "inherited",
    "me": "media",
    "an": "animatable",
    "sp": "Specification",
    "at": "Attributes",
    "ru": "Rules",
    "pe": "percentage",
    "ap": "applies",
    "e": "element",
    "a": "attribute",
    "p": "property",
    "se": "selector",
    "ar": "at-rule",
    "f": "function"
};
var keywords = [
    "*", 
    ":active", 
    ":first-child", 
    ":focus", 
    ":hover", 
    ":lang()", 
    ":link", 
    ":visited", 
    "@charset", 
    "@import", 
    "@media", 
    "@page", 
    "QName", 
    "a", 
    "abbr", 
    "about", 
    "abs", 
    "accent-height", 
    "accept", 
    "accept-charset", 
    "accesskey", 
    "accumulate", 
    "acronym", 
    "action", 
    "additive", 
    "address", 
    "adjust-date-to-timezone", 
    "adjust-dateTime-to-timezone", 
    "adjust-time-to-timezone", 
    "align", 
    "alphabetic", 
    "alt", 
    "animate", 
    "animateColor", 
    "animateMotion", 
    "animateTransform", 
    "animation", 
    "arabic-form", 
    "archive", 
    "area", 
    "ascent", 
    "at-rules", 
    "attributeName", 
    "attributeType", 
    "audio", 
    "audio-level", 
    "avg", 
    "axis", 
    "azimuth", 
    "b", 
    "background", 
    "background-attachment", 
    "background-color", 
    "background-image", 
    "background-position", 
    "background-repeat", 
    "bandwidth", 
    "base", 
    "base-uri", 
    "baseProfile", 
    "bbox", 
    "bdo", 
    "begin", 
    "big", 
    "blockquote", 
    "body", 
    "boolean", 
    "border", 
    "border-bottom", 
    "border-bottom-color", 
    "border-bottom-style", 
    "border-bottom-width", 
    "border-collapse", 
    "border-color", 
    "border-left", 
    "border-left-color", 
    "border-left-style", 
    "border-left-width", 
    "border-right", 
    "border-right-color", 
    "border-right-style", 
    "border-right-width", 
    "border-spacing", 
    "border-style", 
    "border-top", 
    "border-top-color", 
    "border-top-style", 
    "border-top-width", 
    "border-width", 
    "bottom", 
    "br", 
    "buffered-rendering", 
    "button", 
    "by", 
    "calcMode", 
    "cap-height", 
    "caption", 
    "caption-side", 
    "ceiling", 
    "cellpadding", 
    "cellspacing", 
    "char", 
    "charoff", 
    "charset", 
    "checked", 
    "circle", 
    "cite", 
    "class", 
    "classid", 
    "clear", 
    "clip", 
    "code", 
    "codebase", 
    "codepoint-equal", 
    "codepoints-to-string", 
    "codetype", 
    "col", 
    "colgroup", 
    "collection", 
    "color", 
    "color-rendering", 
    "cols", 
    "colspan", 
    "compare", 
    "concat", 
    "contains", 
    "content", 
    "contentScriptType", 
    "coords", 
    "count", 
    "counter-increment", 
    "counter-reset", 
    "cue", 
    "cue-after", 
    "cue-before", 
    "current-date", 
    "current-dateTime", 
    "current-time", 
    "cursor", 
    "cx", 
    "cy", 
    "d", 
    "data", 
    "datatype", 
    "datetime", 
    "day-from-date", 
    "day-from-dateTime", 
    "days-from-duration", 
    "dd", 
    "declare", 
    "deep-equal", 
    "default-collation", 
    "defaultAction", 
    "defer", 
    "defs", 
    "del", 
    "desc", 
    "descent", 
    "dfn", 
    "dir", 
    "direction", 
    "disabled", 
    "discard", 
    "display", 
    "display-align", 
    "distinct-values", 
    "div", 
    "dl", 
    "doc", 
    "doc-available", 
    "document-uri", 
    "dt", 
    "dur", 
    "editable", 
    "elevation", 
    "ellipse", 
    "em", 
    "empty", 
    "empty-cells", 
    "encode-for-uri", 
    "enctype", 
    "end", 
    "ends-with", 
    "escape-html-uri", 
    "ev:event", 
    "event", 
    "exactly-one", 
    "exists", 
    "externalResourcesRequired", 
    "false", 
    "fieldset", 
    "fill", 
    "fill-opacity", 
    "fill-rule", 
    "float", 
    "floor", 
    "focusHighlight", 
    "focusable", 
    "font", 
    "font-face", 
    "font-face-src", 
    "font-face-uri", 
    "font-family", 
    "font-size", 
    "font-stretch", 
    "font-style", 
    "font-variant", 
    "font-weight", 
    "for", 
    "foreignObject", 
    "form", 
    "frame", 
    "from", 
    "g", 
    "g1", 
    "g2", 
    "glyph", 
    "glyph-name", 
    "gradientUnits", 
    "h1", 
    "h2", 
    "h3", 
    "h4", 
    "h5", 
    "h6", 
    "handler", 
    "hanging", 
    "head", 
    "headers", 
    "height", 
    "hkern", 
    "horiz-adv-x", 
    "horiz-origin-x", 
    "hours-from-dateTime", 
    "hours-from-duration", 
    "hours-from-time", 
    "hr", 
    "href", 
    "hreflang", 
    "html", 
    "http-equiv", 
    "i", 
    "id", 
    "ideographic", 
    "idref", 
    "image", 
    "image-rendering", 
    "img", 
    "implicit-timezone", 
    "in-scope-prefixes", 
    "index-of", 
    "initialVisibility", 
    "input", 
    "ins", 
    "insert-before", 
    "iri-to-uri", 
    "ismap", 
    "k", 
    "kbd", 
    "keyPoints", 
    "keySplines", 
    "keyTimes", 
    "label", 
    "lang", 
    "last", 
    "left", 
    "legend", 
    "letter-spacing", 
    "li", 
    "line", 
    "line-height", 
    "line-increment", 
    "linearGradient", 
    "link", 
    "list-style", 
    "list-style-image", 
    "list-style-position", 
    "list-style-type", 
    "listener", 
    "local-name", 
    "local-name-from-QName", 
    "longdesc", 
    "lower-case", 
    "map", 
    "margin", 
    "margin-bottom", 
    "margin-left", 
    "margin-right", 
    "margin-top", 
    "matches", 
    "mathematical", 
    "max", 
    "max-height", 
    "max-width", 
    "maxlength", 
    "media", 
    "mediaCharacterEncoding", 
    "mediaContentEncodings", 
    "mediaSize", 
    "mediaTime", 
    "meta", 
    "metadata", 
    "method", 
    "min", 
    "min-height", 
    "min-width", 
    "minutes-from-dateTime", 
    "minutes-from-duration", 
    "minutes-from-time", 
    "missing-glyph", 
    "month-from-date", 
    "month-from-dateTime", 
    "months-from-duration", 
    "mpath", 
    "multiple", 
    "name", 
    "namespace-uri", 
    "namespace-uri-for-prefix", 
    "namespace-uri-from-QName", 
    "nav-down", 
    "nav-down-left", 
    "nav-down-right", 
    "nav-left", 
    "nav-next", 
    "nav-prev", 
    "nav-right", 
    "nav-up", 
    "nav-up-left", 
    "nav-up-right", 
    "nilled", 
    "node-name", 
    "nohref", 
    "normalize-space", 
    "normalize-unicode", 
    "noscript", 
    "not", 
    "number", 
    "object", 
    "observer", 
    "offset", 
    "ol", 
    "onblur", 
    "onchange", 
    "onclick", 
    "ondblclick", 
    "one-or-more", 
    "onfocus", 
    "onkeydown", 
    "onkeypress", 
    "onkeyup", 
    "onload", 
    "onmousedown", 
    "onmousemove", 
    "onmouseout", 
    "onmouseover", 
    "onmouseup", 
    "onreset", 
    "onselect", 
    "onsubmit", 
    "onunload", 
    "opacity", 
    "optgroup", 
    "option", 
    "origin", 
    "orphans", 
    "outline", 
    "outline-color", 
    "outline-style", 
    "outline-width", 
    "overflow", 
    "overlay", 
    "overline-position", 
    "overline-thickness", 
    "p", 
    "padding", 
    "padding-bottom", 
    "padding-left", 
    "padding-right", 
    "padding-top", 
    "page-break-after", 
    "page-break-before", 
    "page-break-inside", 
    "panose-1", 
    "param", 
    "path", 
    "pathLength", 
    "pause", 
    "pause-after", 
    "pause-before", 
    "phase", 
    "pitch", 
    "pitch-range", 
    "play-during", 
    "playbackOrder", 
    "pointer-events", 
    "points", 
    "polygon", 
    "polyline", 
    "position", 
    "pre", 
    "prefetch", 
    "prefix-from-QName", 
    "preserveAspectRatio", 
    "profile", 
    "propagate", 
    "property", 
    "q", 
    "quotes", 
    "r", 
    "radialGradient", 
    "readonly", 
    "rect", 
    "rel", 
    "remove", 
    "repeatCount", 
    "repeatDur", 
    "replace", 
    "requiredExtensions", 
    "requiredFeatures", 
    "requiredFonts", 
    "requiredFormats", 
    "resolve-QName", 
    "resolve-uri", 
    "resource", 
    "restart", 
    "rev", 
    "reverse", 
    "richness", 
    "right", 
    "role", 
    "root", 
    "rotate", 
    "round", 
    "round-half-to-even", 
    "rows", 
    "rowspan", 
    "rules", 
    "rx", 
    "ry", 
    "samp", 
    "scheme", 
    "scope", 
    "script", 
    "seconds-from-dateTime", 
    "seconds-from-duration", 
    "seconds-from-time", 
    "select", 
    "selected", 
    "selectors", 
    "set", 
    "shape", 
    "shape-rendering", 
    "size", 
    "slope", 
    "small", 
    "snapshotTime", 
    "solid-color", 
    "solid-opacity", 
    "solidColor", 
    "span", 
    "speak", 
    "speak-header", 
    "speak-numeral", 
    "speak-punctuation", 
    "speech-rate", 
    "src", 
    "standby", 
    "starts-with", 
    "static-base-uri", 
    "stemh", 
    "stemv", 
    "stop", 
    "stop-color", 
    "stop-opacity", 
    "stress", 
    "strikethrough-position", 
    "strikethrough-thickness", 
    "string", 
    "string-join", 
    "string-length", 
    "string-to-codepoints", 
    "stroke", 
    "stroke-dasharray", 
    "stroke-dashoffset", 
    "stroke-linecap", 
    "stroke-linejoin", 
    "stroke-miterlimit", 
    "stroke-opacity", 
    "stroke-width", 
    "strong", 
    "style", 
    "sub", 
    "subsequence", 
    "substring", 
    "substring-after", 
    "substring-before", 
    "sum", 
    "summary", 
    "sup", 
    "svg", 
    "switch", 
    "syncBehavior", 
    "syncBehaviorDefault", 
    "syncMaster", 
    "syncTolerance", 
    "syncToleranceDefault", 
    "systemLanguage", 
    "tabindex", 
    "table", 
    "table-layout", 
    "target", 
    "tbody", 
    "tbreak", 
    "td", 
    "text", 
    "text-align", 
    "text-anchor", 
    "text-decoration", 
    "text-indent", 
    "text-rendering", 
    "text-transform", 
    "textArea", 
    "textarea", 
    "tfoot", 
    "th", 
    "thead", 
    "timelineBegin", 
    "timezone-from-date", 
    "timezone-from-dateTime", 
    "timezone-from-time", 
    "title", 
    "to", 
    "tokenize", 
    "top", 
    "tr", 
    "transform", 
    "transformBehavior", 
    "translate", 
    "true", 
    "tspan", 
    "tt", 
    "type", 
    "typeof", 
    "u1", 
    "u2", 
    "ul", 
    "underline-position", 
    "underline-thickness", 
    "unicode", 
    "unicode-bidi", 
    "unicode-range", 
    "units-per-em", 
    "unordered", 
    "upper-case", 
    "use", 
    "usemap", 
    "valign", 
    "value", 
    "values", 
    "valuetype", 
    "var", 
    "vector-effect", 
    "version", 
    "vertical-align", 
    "video", 
    "viewBox", 
    "viewport-fill", 
    "viewport-fill-opacity", 
    "visibility", 
    "voice-family", 
    "volume", 
    "white-space", 
    "widows", 
    "width", 
    "widths", 
    "word-spacing", 
    "x", 
    "x-height", 
    "x1", 
    "x2", 
    "xlink:actuate", 
    "xlink:arcrole", 
    "xlink:href", 
    "xlink:role", 
    "xlink:show", 
    "xlink:title", 
    "xlink:type", 
    "xml:base", 
    "xml:id", 
    "xml:lang", 
    "xml:space", 
    "y", 
    "y1", 
    "y2", 
    "year-from-date", 
    "year-from-dateTime", 
    "years-from-duration", 
    "z-index", 
    "zero-or-one", 
    "zoomAndPan"
];
var inMemory = true;
var keywordsMatch = {
    "*": {
        "css": {
            se: {
                "*": {d: [{n: {p: [{t: "Universal selector"}]}, d: {p: [{t: "matches the name of any element type"}]}}
                ]}
            }
        }

    }, 
    ":active": {
        "css": {
            se: {
                ":active": {d: [{pt: {p: [{t: "E:active"}]}, n: {p: [{t: "dynamic pseudo-class"}]}, d: {p: [{t: "Matches E when E is activated by the user"}]}}
                ]}
            }
        }

    }, 
    ":first-child": {
        "css": {
            se: {
                ":first-child": {d: [{pt: {p: [{t: "E:first-child"}]}, n: {p: [{t: "first-child pseudo-class"}]}, d: {p: [{t: "Matches element E when E is the first child of its parent"}]}}
                ]}
            }
        }

    }, 
    ":focus": {
        "css": {
            se: {
                ":focus": {d: [{pt: {p: [{t: "E:focus"}]}, n: {p: [{t: "dynamic pseudo-class"}]}, d: {p: [{t: "Matches E while while it has the focus"}]}}
                ]}
            }
        }

    }, 
    ":hover": {
        "css": {
            se: {
                ":hover": {d: [{pt: {p: [{t: "E:hover"}]}, n: {p: [{t: "dynamic pseudo-class"}]}, d: {p: [{t: "Matches E while the user designates an element (with some pointing device), but does not activate it"}]}}
                ]}
            }
        }

    }, 
    ":lang()": {
        "css": {
            se: {
                ":lang()": {d: [{pt: {p: [{t: "E:lang(c)"}]}, n: {p: [{t: "lang() pseudo-class"}]}, d: {p: [{t: "Matches element E if it is in (human) language c (the document language specifies how language is determined)"}]}, i: {p: [{t: " link=\"http://www.w3.org/International/questions/qa-css-lang\">Styling using the lang attribute"}]}}
                ]}, 
                ":lang()": {d: [{pt: {p: [{t: "E:lang(c)"}]}, n: {p: [{t: "lang() pseudo-class"}]}, d: {p: [{t: "Matches element E if it is in (human) language c (the document markup language specifies how the human language is determined)"}]}, i: {p: [{u: "/International/questions/qa-css-lang", t: "Styling using the lang attribute"}]}}
                ]}
            }
        }

    }, 
    ":link": {
        "css": {
            se: {
                ":link": {d: [{pt: {p: [{t: "E:link"}]}, n: {p: [{t: "link pseudo-class"}]}, d: {p: [{t: "Matches element E if E is the source anchor of a hyperlink of which the target is not yet visited"}]}}
                ]}
            }
        }

    }, 
    ":visited": {
        "css": {
            se: {
                ":visited": {d: [{pt: {p: [{t: "E:visited"}]}, n: {p: [{t: "link pseudo-class"}]}, d: {p: [{t: "Matches element E if E is the source anchor of a hyperlink of which the target is already visited"}]}}
                ]}
            }
        }

    }, 
    "@charset": {
        "css": {
            ar: {
                "@charset": {d: [{d: {p: [{t: "The @charset rule defines the encoding used in a linked style sheet. An @charset rule must be placed at the very beginning of the style sheet, preceded by no characters, and the name of the encoding should follow in quotes."}]}, ex: {p: [{t: "@charset \"ISO-8859-1\""}]}, i: {p: [{u: "/International/questions/qa-css-charset", t: "CSS character encoding declarations"}]}}
                ]}
            }
        }

    }, 
    "@import": {
        "css": {
            ar: {
                "@import": {d: [{n: {p: [{t: "@import"}]}, d: {p: [{t: "The @import rule allows to import style rules from other style sheets. Any @import rules must precede all other rules (except @charset)"}]}, s: {p: [{t: "The @import keyword must be followed by the URI of the style sheet to include. A string is also allowed; it will be interpreted as if it had url(...) around it. Media-dependent import can be specified with comma-separated media types after the URI."}]}, ex: {p: [{t: "@import url(\"mystyle.css) screen"}]}}
                ]}
            }
        }

    }, 
    "@media": {
        "css": {
            ar: {
                "@media": {d: [{d: {p: [{t: "An @media rule specifies the target media types (separated by commas) of a set of statements (delimited by curly braces)"}]}, v: {p: [{t: "all, braille, embossed, handheld, print, projection, screen, speech, tty, tv"}]}}
                ]}
            }
        }

    }, 
    "@page": {
        "css": {
            ar: {
                "@page": {d: [{d: {p: [{t: "An @page rule consists of the keyword \"@page\", followed by an optional page selector, followed by a block of declarations. The declarations in an @page rule are said to be in the page context and are useful to write CSS rules for paged media (e.g. for printing on paper)."}]}, ex: {p: [{t: "@page {margin: 3cm;}"}]}}
                ]}
            }
        }

    }, 
    "QName": {
        "xpath": {
            f: {
                "QName": {d: [{d: {p: [{t: "Returns an xs:QName with the namespace URI given in $paramURI. If $paramURI is the zero-length string or the empty sequence, it represents \"no namespace\"; in this case, if the value of $paramQName contains a colon (:), an error is raised [err:FOCA0002]. The prefix (or absence of a prefix) in $paramQName is retained in the returned xs:QName value. The local name in the result is taken from the local part of $paramQName."}]}, sp: {u: "/TR/xpath-functions/#func-QName"}, pa: {p: [{t: "$paramURI as xs:string?, $paramQName as xs:string"}]}, r: {p: [{t: "xs:QName"}]}}
                ]}
            }
        }

    }, 
    "a": {
        "svg": {
            e: {
                "a": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "target"}, {t: "transform"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: "The 'a' element may contain any element that its parent may contain, except itself.      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/linking.html#AElement"}}
                ]}
            }
        }
, 
        "html": {
            e: {
                "a": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "charset"}, {t: "class"}, {t: "coords"}, {t: "dir"}, {t: "href"}, {t: "hreflang"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "onblur"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "rel"}, {t: "rev"}, {t: "shape"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "type"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "anchor"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H30.html", t: "Providing link text that describes the purpose of a link for anchor elements"}]}, q: {l: "block", p: [{u: "/QA/Tips/noClickHere", t: "Donʼt use “click here” as link text"}]}, sp: {u: "/TR/html401/index/../struct/links.html#edef-A"}}
                ]}
            }
        }

    }, 
    "abbr": {
        "html": {
            e: {
                "abbr": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "abbreviated form (e.g., WWW, HTTP, etc.)"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H28.html", t: "Providing definitions for abbreviations by using the abbr and acronym elements"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-ABBR"}}
                ]}
            }, 
            a: {
                "abbr": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "abbreviation for header cell"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-abbr"}}
                ]}
            }
        }

    }, 
    "about": {
        "svg": {
            a: {
                "about": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "abs": {
        "xpath": {
            f: {
                "abs": {d: [{d: {p: [{t: "Returns the absolute value of $arg. If $arg is negative returns -$arg otherwise returns $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type."}]}, sp: {u: "/TR/xpath-functions/#func-abs"}, pa: {p: [{t: "$arg as numeric?"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "accent-height": {
        "svg": {
            a: {
                "accent-height": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "accept": {
        "html": {
            a: {
                "accept": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}, {t: "input"}]}, c: {p: [{t: "%ContentTypes;"}]}, d: {p: [{t: "list of MIME types for file upload"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-accept"}}
                ]}
            }
        }

    }, 
    "accept-charset": {
        "html": {
            a: {
                "accept-charset": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "%Charsets;"}]}, d: {p: [{t: "list of supported charsets"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-accept-charset"}}
                ]}
            }
        }

    }, 
    "accesskey": {
        "html": {
            a: {
                "accesskey": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "area"}, {t: "button"}, {t: "input"}, {t: "label"}, {t: "legend"}, {t: "textarea"}]}, c: {p: [{t: "%Character;"}]}, d: {p: [{t: "accessibility key character"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#ACCESS_KEYS", t: "Assign access keys to links in navigational menus and frequently accessed functionality."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-accesskey"}}
                ]}
            }
        }

    }, 
    "accumulate": {
        "svg": {
            a: {
                "accumulate": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "'none' | 'sum'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "acronym": {
        "html": {
            e: {
                "acronym": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: " "}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H28.html", t: "Providing definitions for abbreviations by using the abbr and acronym elements"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-ACRONYM"}}
                ]}
            }
        }

    }, 
    "action": {
        "html": {
            a: {
                "action": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "server-side form handler"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-action"}}
                ]}
            }
        }

    }, 
    "additive": {
        "svg": {
            a: {
                "additive": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "'replace' | 'sum'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "address": {
        "html": {
            e: {
                "address": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "information on author"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-ADDRESS"}}
                ]}
            }
        }

    }, 
    "adjust-date-to-timezone": {
        "xpath": {
            f: {
                "adjust-date-to-timezone": {d: [{d: {p: [{t: "Adjusts an xs:date value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:date without a timezone. Otherwise, returns an xs:date with a timezone. For purposes of timezone adjustment, an xs:date is treated as an xs:dateTime with time 00:00:00."}]}, sp: {u: "/TR/xpath-functions/#func-adjust-date-to-timezone"}, pa: {p: [{t: "$arg as xs:date?"}]}, r: {p: [{t: "xs:date?"}]}}
                ]}
            }
        }

    }, 
    "adjust-dateTime-to-timezone": {
        "xpath": {
            f: {
                "adjust-dateTime-to-timezone": {d: [{d: {p: [{t: "Adjusts an xs:dateTime value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:dateTime without a timezone. Otherwise, returns an xs:dateTime with a timezone."}]}, sp: {u: "/TR/xpath-functions/#func-adjust-dateTime-to-timezone"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:dateTime?"}]}}
                ]}
            }
        }

    }, 
    "adjust-time-to-timezone": {
        "xpath": {
            f: {
                "adjust-time-to-timezone": {d: [{d: {p: [{t: "Adjusts an xs:time value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:time without a timezone. Otherwise, returns an xs:time with a timezone."}]}, sp: {u: "/TR/xpath-functions/#func-adjust-time-to-timezone"}, pa: {p: [{t: "$arg as xs:time?"}]}, r: {p: [{t: "xs:time?"}]}}
                ]}
            }
        }

    }, 
    "align": {
        "html": {
            a: {
                "align": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "col"}, {t: "colgroup"}, {t: "tbody"}, {t: "td"}, {t: "tfoot"}, {t: "th"}, {t: "thead"}, {t: "tr"}]}, c: {p: [{t: "(left | center | right | justify | char)"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-align-TD"}}
                ]}
            }
        }

    }, 
    "alphabetic": {
        "svg": {
            a: {
                "alphabetic": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "alt": {
        "html": {
            a: {
                "alt": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "area"}, {t: "img"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "short description"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H67.html", t: "Using null alt text and no title attribute on img elements for images that AT should ignore"}, {u: "/TR/WCAG20-TECHS/H36.html", t: "Using alt attributes on images used as submit buttons"}, {u: "/TR/WCAG20-TECHS/H24.html", t: "Providing text alternatives for the area elements of image maps"}, {u: "/TR/WCAG20-TECHS/H37.html", t: "Using alt attributes on img elements"}, {u: "/TR/WCAG20-TECHS/H91.html", t: "Using HTML form controls and links"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#NON-TEXT_ALTERNATIVES", t: "Provide a text equivalent for every non-text element."}]}, q: {l: "block", p: [{u: "/QA/Tips/altAttribute", t: "Use the alt attribute to describe the function of each visual"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-alt"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "short description"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-alt"}}
                ]}
            }
        }

    }, 
    "animate": {
        "svg": {
            e: {
                "animate": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "accumulate"}, {t: "additive"}, {t: "attributeName"}, {t: "attributeType"}, {t: "begin"}, {t: "by"}, {t: "calcMode"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "fill"}, {t: "from"}, {t: "id"}, {t: "keySplines"}, {t: "keyTimes"}, {t: "max"}, {t: "min"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "to"}, {t: "typeof"}, {t: "values"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateElement"}}
                ]}
            }
        }

    }, 
    "animateColor": {
        "svg": {
            e: {
                "animateColor": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "accumulate"}, {t: "additive"}, {t: "attributeName"}, {t: "attributeType"}, {t: "begin"}, {t: "by"}, {t: "calcMode"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "fill"}, {t: "from"}, {t: "id"}, {t: "keySplines"}, {t: "keyTimes"}, {t: "max"}, {t: "min"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "to"}, {t: "typeof"}, {t: "values"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateColorElement"}}
                ]}
            }
        }

    }, 
    "animateMotion": {
        "svg": {
            e: {
                "animateMotion": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "accumulate"}, {t: "additive"}, {t: "begin"}, {t: "by"}, {t: "calcMode"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "fill"}, {t: "from"}, {t: "id"}, {t: "keyPoints"}, {t: "keySplines"}, {t: "keyTimes"}, {t: "max"}, {t: "min"}, {t: "origin"}, {t: "path"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "rotate"}, {t: "systemLanguage"}, {t: "to"}, {t: "typeof"}, {t: "values"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "mpath"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateMotionElement"}}
                ]}
            }
        }

    }, 
    "animateTransform": {
        "svg": {
            e: {
                "animateTransform": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "accumulate"}, {t: "additive"}, {t: "attributeName"}, {t: "attributeType"}, {t: "begin"}, {t: "by"}, {t: "calcMode"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "fill"}, {t: "from"}, {t: "id"}, {t: "keySplines"}, {t: "keyTimes"}, {t: "max"}, {t: "min"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "to"}, {t: "type"}, {t: "typeof"}, {t: "values"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#AnimateTransformElement"}}
                ]}
            }
        }

    }, 
    "animation": {
        "svg": {
            e: {
                "animation": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "begin"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "externalResourcesRequired"}, {t: "fill"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "initialVisibility"}, {t: "max"}, {t: "min"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "preserveAspectRatio"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "syncBehavior"}, {t: "syncMaster"}, {t: "syncTolerance"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AnimationElement"}}
                ]}
            }
        }

    }, 
    "arabic-form": {
        "svg": {
            a: {
                "arabic-form": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "glyph"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "archive": {
        "html": {
            a: {
                "archive": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "space-separated list of URIs"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-archive-OBJECT"}}
                ]}
            }
        }

    }, 
    "area": {
        "html": {
            e: {
                "area": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "alt"}, {t: "class"}, {t: "coords"}, {t: "dir"}, {t: "href"}, {t: "id"}, {t: "lang"}, {t: "nohref"}, {t: "onblur"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "shape"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "xml:lang"}]}, d: {p: [{t: "client-side image map area"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H24.html", t: "Providing text alternatives for the area elements of image maps"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#IMAGE_MAPS", t: "Do not use image maps unless you know the device supports them effectively."}]}, sp: {u: "/TR/html401/index/../struct/objects.html#edef-AREA"}}
                ]}
            }
        }

    }, 
    "ascent": {
        "svg": {
            a: {
                "ascent": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "at-rules": {
        "css": {
            ar: {
                "at-rules": {d: [{ru: {y: "ar", i: "css", l: "block", p: [{t: "@media"}, {t: "@import"}, {t: "@page"}, {t: "@charset"}]}}
                ]}
            }
        }

    }, 
    "attributeName": {
        "svg": {
            a: {
                "attributeName": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateTransform"}, {t: "set"}]}, c: {p: [{t: "<QName>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "attributeType": {
        "svg": {
            a: {
                "attributeType": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateTransform"}, {t: "set"}]}, c: {p: [{t: "'XML' | 'CSS' | 'auto'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "audio": {
        "svg": {
            e: {
                "audio": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "begin"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "externalResourcesRequired"}, {t: "fill"}, {t: "id"}, {t: "max"}, {t: "min"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "syncBehavior"}, {t: "syncMaster"}, {t: "syncTolerance"}, {t: "systemLanguage"}, {t: "type"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/multimedia.html#AudioElement"}}
                ]}
            }
        }

    }, 
    "audio-level": {
        "svg": {
            p: {
                "audio-level": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/multimedia.html#AudioLevelProperty"}}
                ]}
            }
        }

    }, 
    "avg": {
        "xpath": {
            f: {
                "avg": {d: [{d: {p: [{t: "Returns the average of the values in the input sequence $arg, that is, the sum of the values divided by the number of values."}]}, sp: {u: "/TR/xpath-functions/#func-avg"}, pa: {p: [{t: "$arg as xs:anyAtomicType*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "axis": {
        "html": {
            a: {
                "axis": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "comma-separated list of related headers"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-axis"}}
                ]}
            }
        }

    }, 
    "azimuth": {
        "css": {
            p: {
                "azimuth": {d: [{v: {p: [{t: "<angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-azimuth"}}
                ]}
            }
        }

    }, 
    "b": {
        "html": {
            e: {
                "b": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "bold text style"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-B"}}
                ]}
            }
        }

    }, 
    "background": {
        "css": {
            p: {
                "background": {d: [{v: {p: [{t: ["[", {y: "p", i: "css", t: "background-color"}, " || ", {y: "p", i: "css", t: "background-image"}, " || ", {y: "p", i: "css", t: "background-repeat"}, " || ", {y: "p", i: "css", t: "background-attachment"}, " || ", {y: "p", i: "css", t: "background-position"}, "] | inherit"]}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "allowed on 'background-position'"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background"}}
                ]}
            }
        }

    }, 
    "background-attachment": {
        "css": {
            p: {
                "background-attachment": {d: [{v: {p: [{t: "scroll | fixed | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background-attachment"}}
                ]}
            }
        }

    }, 
    "background-color": {
        "css": {
            p: {
                "background-color": {d: [{v: {p: [{t: "<color> | transparent | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background-color"}}
                ]}
            }
        }

    }, 
    "background-image": {
        "css": {
            p: {
                "background-image": {d: [{v: {p: [{t: "<uri> | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background-image"}}
                ]}
            }
        }

    }, 
    "background-position": {
        "css": {
            p: {
                "background-position": {d: [{v: {p: [{t: "[ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to the size of the box itself"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background-position"}}
                ]}
            }
        }

    }, 
    "background-repeat": {
        "css": {
            p: {
                "background-repeat": {d: [{v: {p: [{t: "repeat | repeat-x | repeat-y | no-repeat | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-background-repeat"}}
                ]}
            }
        }

    }, 
    "bandwidth": {
        "svg": {
            a: {
                "bandwidth": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "prefetch"}]}, c: {p: [{t: "<number> | 'auto'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#struct-PrefetchElementBandwidthAttribute"}}
                ]}
            }
        }

    }, 
    "base": {
        "html": {
            e: {
                "base": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "href"}, {t: "id"}]}, d: {p: [{t: "document base URI"}]}, sp: {u: "/TR/html401/index/../struct/links.html#edef-BASE"}}
                ]}
            }
        }

    }, 
    "base-uri": {
        "xpath": {
            f: {
                "base-uri": {d: [{d: {p: [{t: "Returns the value of the base-uri URI property for $arg as defined by the accessor function dm:base-uri() for that kind of node in Section 5.2 base-uri AccessorDM. If $arg is not specified, the behavior is identical to calling the function with the context item (.) as argument. The following errors may be raised: if the context item is undefined [err:XPDY0002]XP; if the context item is not a node [err:XPTY0004]XP."}]}, sp: {u: "/TR/xpath-functions/#func-base-uri"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "baseProfile": {
        "svg": {
            a: {
                "baseProfile": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'none' | 'tiny' | 'basic' | 'full'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "bbox": {
        "svg": {
            a: {
                "bbox": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "bdo": {
        "html": {
            e: {
                "bdo": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "I18N BiDi over-ride"}]}, i: {l: "block", p: [{u: "/International/tutorials/bidi-xhtml/", t: "Creating HTML Pages in Arabic, Hebrew and Other Right-to-left Scripts"}]}, sp: {u: "/TR/html401/index/../struct/dirlang.html#edef-BDO"}}
                ]}
            }
        }

    }, 
    "begin": {
        "svg": {
            a: {
                "begin": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "big": {
        "html": {
            e: {
                "big": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "large text style"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-BIG"}}
                ]}
            }
        }

    }, 
    "blockquote": {
        "html": {
            e: {
                "blockquote": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "cite"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "address"}, {t: "blockquote"}, {t: "del"}, {t: "div"}, {t: "dl"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "ins"}, {t: "noscript"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "script"}, {t: "table"}, {t: "ul"}]}, d: {p: [{t: "long quotation"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-BLOCKQUOTE"}}
                ]}
            }
        }

    }, 
    "body": {
        "html": {
            e: {
                "body": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onload"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "onunload"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "address"}, {t: "blockquote"}, {t: "del"}, {t: "div"}, {t: "dl"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "ins"}, {t: "noscript"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "script"}, {t: "table"}, {t: "ul"}]}, d: {p: [{t: "document body"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-BODY"}}
                ]}
            }
        }

    }, 
    "boolean": {
        "xpath": {
            f: {
                "boolean": {d: [{d: {p: [{t: "Computes the effective boolean value of the sequence $arg. See Section 2.4.3 Effective Boolean ValueXP"}]}, sp: {u: "/TR/xpath-functions/#func-boolean"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "border": {
        "css": {
            p: {
                "border": {d: [{v: {p: [{t: ["[ <border-width> || <border-style> || ", {y: "p", i: "css", t: "border-top-color"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border"}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "border": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%Pixels;"}]}, d: {p: [{t: "controls frame width around table"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-border-TABLE"}}
                ]}
            }
        }

    }, 
    "border-bottom": {
        "css": {
            p: {
                "border-bottom": {d: [{v: {p: [{t: ["[ <border-width> || <border-style> || ", {y: "p", i: "css", t: "border-top-color"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-bottom"}}
                ]}
            }
        }

    }, 
    "border-bottom-color": {
        "css": {
            p: {
                "border-bottom-color": {d: [{v: {p: [{t: "<color> | transparent | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-bottom-color"}}
                ]}
            }
        }

    }, 
    "border-bottom-style": {
        "css": {
            p: {
                "border-bottom-style": {d: [{v: {p: [{t: "<border-style> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-bottom-style"}}
                ]}
            }
        }

    }, 
    "border-bottom-width": {
        "css": {
            p: {
                "border-bottom-width": {d: [{v: {p: [{t: "<border-width> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-bottom-width"}}
                ]}
            }
        }

    }, 
    "border-collapse": {
        "css": {
            p: {
                "border-collapse": {d: [{v: {p: [{t: "collapse | separate | inherit"}]}, ap: {p: [{t: "'table' and 'inline-table' elements"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/tables.html#propdef-border-collapse"}}
                ]}
            }
        }

    }, 
    "border-color": {
        "css": {
            p: {
                "border-color": {d: [{v: {p: [{t: "[ <color> | transparent ]{1,4} | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-color"}}
                ]}
            }
        }

    }, 
    "border-left": {
        "css": {
            p: {
                "border-left": {d: [{v: {p: [{t: ["[ <border-width> || <border-style> || ", {y: "p", i: "css", t: "border-top-color"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-left"}}
                ]}
            }
        }

    }, 
    "border-left-color": {
        "css": {
            p: {
                "border-left-color": {d: [{v: {p: [{t: "<color> | transparent | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-left-color"}}
                ]}
            }
        }

    }, 
    "border-left-style": {
        "css": {
            p: {
                "border-left-style": {d: [{v: {p: [{t: "<border-style> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-left-style"}}
                ]}
            }
        }

    }, 
    "border-left-width": {
        "css": {
            p: {
                "border-left-width": {d: [{v: {p: [{t: "<border-width> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-left-width"}}
                ]}
            }
        }

    }, 
    "border-right": {
        "css": {
            p: {
                "border-right": {d: [{v: {p: [{t: ["[ <border-width> || <border-style> || ", {y: "p", i: "css", t: "border-top-color"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-right"}}
                ]}
            }
        }

    }, 
    "border-right-color": {
        "css": {
            p: {
                "border-right-color": {d: [{v: {p: [{t: "<color> | transparent | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-right-color"}}
                ]}
            }
        }

    }, 
    "border-right-style": {
        "css": {
            p: {
                "border-right-style": {d: [{v: {p: [{t: "<border-style> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-right-style"}}
                ]}
            }
        }

    }, 
    "border-right-width": {
        "css": {
            p: {
                "border-right-width": {d: [{v: {p: [{t: "<border-width> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-right-width"}}
                ]}
            }
        }

    }, 
    "border-spacing": {
        "css": {
            p: {
                "border-spacing": {d: [{v: {p: [{t: "<length> <length>? | inherit"}]}, ap: {p: [{t: "'table' and 'inline-table' elements "}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/tables.html#propdef-border-spacing"}}
                ]}
            }
        }

    }, 
    "border-style": {
        "css": {
            p: {
                "border-style": {d: [{v: {p: [{t: "<border-style>{1,4} | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-style"}}
                ]}
            }
        }

    }, 
    "border-top": {
        "css": {
            p: {
                "border-top": {d: [{v: {p: [{t: ["[ <border-width> || <border-style> || ", {y: "p", i: "css", t: "border-top-color"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-top"}}
                ]}
            }
        }

    }, 
    "border-top-color": {
        "css": {
            p: {
                "border-top-color": {d: [{v: {p: [{t: "<color> | transparent | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-top-color"}}
                ]}
            }
        }

    }, 
    "border-top-style": {
        "css": {
            p: {
                "border-top-style": {d: [{v: {p: [{t: "<border-style> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-top-style"}}
                ]}
            }
        }

    }, 
    "border-top-width": {
        "css": {
            p: {
                "border-top-width": {d: [{v: {p: [{t: "<border-width> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-top-width"}}
                ]}
            }
        }

    }, 
    "border-width": {
        "css": {
            p: {
                "border-width": {d: [{v: {p: [{t: "<border-width>{1,4} | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-border-width"}}
                ]}
            }
        }

    }, 
    "bottom": {
        "css": {
            p: {
                "bottom": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "positioned elements"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to height of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-bottom"}}
                ]}
            }
        }

    }, 
    "br": {
        "html": {
            e: {
                "br": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "id"}, {t: "style"}, {t: "title"}]}, d: {p: [{t: "forced line break"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H48.html", t: "Using ol, ul and dl for lists"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-BR"}}
                ]}
            }
        }

    }, 
    "buffered-rendering": {
        "svg": {
            p: {
                "buffered-rendering": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'dynamic' | 'static' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#BufferedRenderingProperty"}}
                ]}
            }
        }

    }, 
    "button": {
        "html": {
            e: {
                "button": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "class"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "onblur"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "type"}, {t: "value"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "ins"}, {t: "kbd"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "push button"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}, {u: "/TR/WCAG20-TECHS/H91.html", t: "Using HTML form controls and links"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-BUTTON"}}
                ]}
            }
        }

    }, 
    "by": {
        "svg": {
            a: {
                "by": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "calcMode": {
        "svg": {
            a: {
                "calcMode": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "'discrete' | 'linear' | 'paced' | 'spline'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "cap-height": {
        "svg": {
            a: {
                "cap-height": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "caption": {
        "html": {
            e: {
                "caption": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "table caption"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H39.html", t: "Using caption elements to associate data table captions with data tables"}, {u: "/TR/WCAG20-TECHS/H73.html", t: "Using the summary attribute of the table element to give an overview of data tables"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-CAPTION"}}
                ]}
            }
        }

    }, 
    "caption-side": {
        "css": {
            p: {
                "caption-side": {d: [{v: {p: [{t: "top | bottom | inherit"}]}, ap: {p: [{t: "'table-caption' elements"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/tables.html#propdef-caption-side"}}
                ]}
            }
        }

    }, 
    "ceiling": {
        "xpath": {
            f: {
                "ceiling": {d: [{d: {p: [{t: "Returns the smallest (closest to negative infinity) number with no fractional part that is not less than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type."}]}, sp: {u: "/TR/xpath-functions/#func-ceiling"}, pa: {p: [{t: "$arg as numeric?"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "cellpadding": {
        "html": {
            a: {
                "cellpadding": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "spacing within cells"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-cellpadding"}}
                ]}
            }
        }

    }, 
    "cellspacing": {
        "html": {
            a: {
                "cellspacing": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "spacing between cells"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-cellspacing"}}
                ]}
            }
        }

    }, 
    "char": {
        "html": {
            a: {
                "char": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "col"}, {t: "colgroup"}, {t: "tbody"}, {t: "td"}, {t: "tfoot"}, {t: "th"}, {t: "thead"}, {t: "tr"}]}, c: {p: [{t: "%Character;"}]}, d: {p: [{t: "alignment char, e.g. char=':'"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-char"}}
                ]}
            }
        }

    }, 
    "charoff": {
        "html": {
            a: {
                "charoff": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "col"}, {t: "colgroup"}, {t: "tbody"}, {t: "td"}, {t: "tfoot"}, {t: "th"}, {t: "thead"}, {t: "tr"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "offset for alignment char"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-charoff"}}
                ]}
            }
        }

    }, 
    "charset": {
        "html": {
            a: {
                "charset": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "link"}, {t: "script"}]}, c: {p: [{t: "%Charset;"}]}, d: {p: [{t: "char encoding of linked resource"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-charset"}}
                ]}
            }
        }

    }, 
    "checked": {
        "html": {
            a: {
                "checked": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "(checked)"}]}, d: {p: [{t: "for radio buttons and check boxes"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-checked"}}
                ]}
            }
        }

    }, 
    "circle": {
        "svg": {
            e: {
                "circle": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "cx"}, {t: "cy"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "r"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#CircleElement"}}
                ]}
            }
        }

    }, 
    "cite": {
        "html": {
            e: {
                "cite": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "citation"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-CITE"}}
                ]}
            }, 
            a: {
                "cite": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "blockquote"}, {t: "q"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "URI for source document or msg"}]}, sp: {u: "/TR/html401/index/../struct/text.html#adef-cite-Q"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "del"}, {t: "ins"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "info on reason for change"}]}, sp: {u: "/TR/html401/index/../struct/text.html#adef-cite-INS"}}
                ]}
            }
        }

    }, 
    "class": {
        "svg": {
            a: {
                "class": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<XML-NMTOKENS>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "class": {d: [{el: {l: "inline", p: [{t: ["All elements but ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "space-separated list of classes"}]}, q: {l: "block", p: [{u: "/QA/Tips/goodclassnames", t: "Use class with semantics in mind"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-class"}}
                ]}
            }
        }

    }, 
    "classid": {
        "html": {
            a: {
                "classid": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "identifies an implementation"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-classid"}}
                ]}
            }
        }

    }, 
    "clear": {
        "css": {
            p: {
                "clear": {d: [{v: {p: [{t: "none | left | right | both | inherit"}]}, ap: {p: [{t: "block-level elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-clear"}}
                ]}
            }
        }

    }, 
    "clip": {
        "css": {
            p: {
                "clip": {d: [{v: {p: [{t: "<shape> | auto | inherit"}]}, ap: {p: [{t: "absolutely positioned elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visufx.html#propdef-clip"}}
                ]}
            }
        }

    }, 
    "code": {
        "html": {
            e: {
                "code": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "computer code fragment"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-CODE"}}
                ]}
            }
        }

    }, 
    "codebase": {
        "html": {
            a: {
                "codebase": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "base URI for classid, data, archive"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-codebase-OBJECT"}}
                ]}
            }
        }

    }, 
    "codepoint-equal": {
        "xpath": {
            f: {
                "codepoint-equal": {d: [{d: {p: [{t: "Returns true or false depending on whether the value of $comparand1 is equal to the value of $comparand2, according to the Unicode code point collation (http://www.w3.org/2005/xpath-functions/collation/codepoint)."}]}, sp: {u: "/TR/xpath-functions/#func-codepoint-equal"}, pa: {p: [{t: "$comparand1 as xs:string?,$comparand2 as xs:string?"}]}, r: {p: [{t: "xs:boolean?"}]}}
                ]}
            }
        }

    }, 
    "codepoints-to-string": {
        "xpath": {
            f: {
                "codepoints-to-string": {d: [{d: {p: [{t: "Creates an xs:string from a sequence of [The Unicode Standard] code points. Returns the zero-length string if $arg is the empty sequence. If any of the code points in $arg is not a legal XML character, an error is raised [err:FOCH0001]."}]}, sp: {u: "/TR/xpath-functions/#func-codepoints-to-string"}, pa: {p: [{t: "$arg as xs:integer*"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "codetype": {
        "html": {
            a: {
                "codetype": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "content type for code"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-codetype"}}
                ]}
            }
        }

    }, 
    "col": {
        "html": {
            e: {
                "col": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "span"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "width"}, {t: "xml:lang"}]}, d: {p: [{t: "table column"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-COL"}}
                ]}
            }
        }

    }, 
    "colgroup": {
        "html": {
            e: {
                "colgroup": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "span"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "width"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "col"}]}, d: {p: [{t: "table column group"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-COLGROUP"}}
                ]}
            }
        }

    }, 
    "collection": {
        "xpath": {
            f: {
                "collection": {d: [{d: {p: [{t: "This function takes an xs:string as argument and returns a sequence of nodes obtained by interpreting $arg as an xs:anyURI and resolving it according to the mapping specified in Available collections described in Section C.2 Dynamic Context ComponentsXP. If Available collections provides a mapping from this string to a sequence of nodes, the function returns that sequence. If Available collections maps the string to an empty sequence, then the function returns an empty sequence. If Available collections provides no mapping for the string, an error is raised [err:FODC0004]. If $arg is not specified, the function returns the sequence of the nodes in the default collection in the dynamic context. See Section C.2 Dynamic Context ComponentsXP. If the value of the default collection is undefined an error is raised [err:FODC0002]."}]}, sp: {u: "/TR/xpath-functions/#func-collection"}, pa: {p: [{t: ""}]}, r: {p: [{t: "node()*"}]}}
                ]}
            }
        }

    }, 
    "color": {
        "svg": {
            p: {
                "color": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<color> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#ColorProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "color": {d: [{v: {p: [{t: "<color> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/colors.html#propdef-color"}}
                ]}
            }
        }

    }, 
    "color-rendering": {
        "svg": {
            p: {
                "color-rendering": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#ColorRenderingProperty"}}
                ]}
            }
        }

    }, 
    "cols": {
        "html": {
            a: {
                "cols": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "textarea"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-cols-TEXTAREA"}}
                ]}
            }
        }

    }, 
    "colspan": {
        "html": {
            a: {
                "colspan": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "number of cols spanned by cell"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-colspan"}}
                ]}
            }
        }

    }, 
    "compare": {
        "xpath": {
            f: {
                "compare": {d: [{d: {p: [{t: "Returns -1, 0, or 1, depending on whether the value of the $comparand1 is respectively less than, equal to, or greater than the value of $comparand2, according to the rules of the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-compare"}, pa: {p: [{t: "$comparand1 as xs:string?, $comparand2 as xs:string?"}]}, r: {p: [{t: "xs:integer?"}]}}, {pa: {p: [{t: "$comparand1 as xs:string?,$comparand2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "concat": {
        "xpath": {
            f: {
                "concat": {d: [{d: {p: [{t: "Accepts two or more xs:anyAtomicType arguments and casts them to xs:string. Returns the xs:string that is the concatenation of the values of its arguments after conversion. If any of the arguments is the empty sequence, the argument is treated as the zero-length string."}]}, sp: {u: "/TR/xpath-functions/#func-concat"}, pa: {p: [{t: "$arg1 as xs:anyAtomicType?,$arg2 as xs:anyAtomicType?,..."}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "contains": {
        "xpath": {
            f: {
                "contains": {d: [{d: {p: [{t: "Returns an xs:boolean indicating whether or not the value of $arg1 contains (at the beginning, at the end, or anywhere within) at least one sequence of collation units that provides a minimal match to the collation units in the value of $arg2, according to the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-contains"}, pa: {p: [{t: "$arg1 as xs:string?, $arg2 as xs:string?"}]}, r: {p: [{t: "xs:boolean"}]}}, {pa: {p: [{t: "$arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "content": {
        "svg": {
            a: {
                "content": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<string>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "content": {d: [{v: {p: [{t: "normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit"}]}, ap: {p: [{t: ":before and :after pseudo-elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "all"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-content"}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "content": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "meta"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "associated information"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H76.html", t: "Using meta refresh to create an instant client-side redirect"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-content"}}
                ]}
            }
        }

    }, 
    "contentScriptType": {
        "svg": {
            a: {
                "contentScriptType": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "<content-type>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "coords": {
        "html": {
            a: {
                "coords": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "area"}]}, c: {p: [{t: "%Coords;"}]}, d: {p: [{t: "comma-separated list of lengths"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-coords"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "%Coords;"}]}, d: {p: [{t: "for use with client-side image maps"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-coords"}}
                ]}
            }
        }

    }, 
    "count": {
        "xpath": {
            f: {
                "count": {d: [{d: {p: [{t: "Returns the number of items in the value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-count"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: "xs:integer"}]}}
                ]}
            }
        }

    }, 
    "counter-increment": {
        "css": {
            p: {
                "counter-increment": {d: [{v: {p: [{t: "[ <identifier> <integer>? ]+ | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "all"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-counter-increment"}}
                ]}
            }
        }

    }, 
    "counter-reset": {
        "css": {
            p: {
                "counter-reset": {d: [{v: {p: [{t: "[ <identifier> <integer>? ]+ | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "all"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-counter-reset"}}
                ]}
            }
        }

    }, 
    "cue": {
        "css": {
            p: {
                "cue": {d: [{v: {p: [{t: ["[ ", {y: "p", i: "css", t: "cue-before"}, " || ", {y: "p", i: "css", t: "cue-after"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-cue"}}
                ]}
            }
        }

    }, 
    "cue-after": {
        "css": {
            p: {
                "cue-after": {d: [{v: {p: [{t: "<uri> | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-cue-after"}}
                ]}
            }
        }

    }, 
    "cue-before": {
        "css": {
            p: {
                "cue-before": {d: [{v: {p: [{t: "<uri> | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-cue-before"}}
                ]}
            }
        }

    }, 
    "current-date": {
        "xpath": {
            f: {
                "current-date": {d: [{d: {p: [{t: "Returns xs:date(fn:current-dateTime()). This is an xs:date (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-date() is executed. This function is ·stable·. The precise instant during the query or transformation represented by the value of fn:current-date() is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-current-date"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:date"}]}}
                ]}
            }
        }

    }, 
    "current-dateTime": {
        "xpath": {
            f: {
                "current-dateTime": {d: [{d: {p: [{t: "Returns the current dateTime (with timezone) from the dynamic context. (See Section C.2 Dynamic Context ComponentsXP.) This is an xs:dateTime that is current at some time during the evaluation of a query or transformation in which fn:current-dateTime() is executed. This function is ·stable·. The precise instant during the query or transformation represented by the value of fn:current-dateTime() is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-current-dateTime"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:dateTime"}]}}
                ]}
            }
        }

    }, 
    "current-time": {
        "xpath": {
            f: {
                "current-time": {d: [{d: {p: [{t: "Returns xs:time(fn:current-dateTime()). This is an xs:time (with timezone) that is current at some time during the evaluation of a query or transformation in which fn:current-time() is executed. This function is ·stable·. The precise instant during the query or transformation represented by the value of fn:current-time() is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-current-time"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:time"}]}}
                ]}
            }
        }

    }, 
    "cursor": {
        "css": {
            p: {
                "cursor": {d: [{v: {p: [{t: "[ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual, interactive"}]}, sp: {u: "/TR/CSS2/ui.html#propdef-cursor"}}
                ]}
            }
        }

    }, 
    "cx": {
        "svg": {
            a: {
                "cx": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "circle"}, {t: "ellipse"}, {t: "radialGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "cy": {
        "svg": {
            a: {
                "cy": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "circle"}, {t: "ellipse"}, {t: "radialGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "d": {
        "svg": {
            a: {
                "d": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "glyph"}, {t: "missing-glyph"}, {t: "path"}]}, c: {p: [{t: "<path-data>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "data": {
        "xpath": {
            f: {
                "data": {d: [{d: {p: [{t: "fn:data takes a sequence of items and returns a sequence of atomic values."}]}, sp: {u: "/TR/xpath-functions/#func-data"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "data": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "reference to object's data"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-data"}}
                ]}
            }
        }

    }, 
    "datatype": {
        "svg": {
            a: {
                "datatype": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<string>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "datetime": {
        "html": {
            a: {
                "datetime": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "del"}, {t: "ins"}]}, c: {p: [{t: "%Datetime;"}]}, d: {p: [{t: "date and time of change"}]}, sp: {u: "/TR/html401/index/../struct/text.html#adef-datetime"}}
                ]}
            }
        }

    }, 
    "day-from-date": {
        "xpath": {
            f: {
                "day-from-date": {d: [{d: {p: [{t: "Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-day-from-date"}, pa: {p: [{t: "$arg as xs:date?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "day-from-dateTime": {
        "xpath": {
            f: {
                "day-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-day-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "days-from-duration": {
        "xpath": {
            f: {
                "days-from-duration": {d: [{d: {p: [{t: "Returns an xs:integer representing the days component in the value of $arg. The result is obtained by casting $arg to an xs:dayTimeDuration (see 17.1.4 Casting to duration types) and then computing the days component as described in 10.3.2.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-days-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "dd": {
        "html": {
            e: {
                "dd": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "definition description"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H40.html", t: "Using definition lists"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-DD"}}
                ]}
            }
        }

    }, 
    "declare": {
        "html": {
            a: {
                "declare": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "(declare)"}]}, d: {p: [{t: "declare but don't instantiate flag"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-declare"}}
                ]}
            }
        }

    }, 
    "deep-equal": {
        "xpath": {
            f: {
                "deep-equal": {d: [{d: {p: [{t: "This function assesses whether two sequences are deep-equal to each other. To be deep-equal, they must contain items that are pairwise deep-equal; and for two items to be deep-equal, they must either be atomic values that compare equal, or nodes of the same kind, with the same name, whose children are deep-equal. This is defined in more detail below. The $collation argument identifies a collation which is used at all levels of recursion when strings are compared (but not when names are compared), according to the rules in 7.3.1 Collations."}]}, sp: {u: "/TR/xpath-functions/#func-deep-equal"}, pa: {p: [{t: "$parameter1 as item()*, $parameter2 as item()*"}]}, r: {p: [{t: "xs:boolean"}]}}, {pa: {p: [{t: "$parameter1 as item()*,$parameter2 as item()*,$collation as string"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "default-collation": {
        "xpath": {
            f: {
                "default-collation": {d: [{d: {p: [{t: "Returns the value of the default collation property from the static context. Components of the static context are discussed in Section C.1 Static Context ComponentsXP."}]}, sp: {u: "/TR/xpath-functions/#func-default-collation"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "defaultAction": {
        "svg": {
            a: {
                "defaultAction": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "'perform' | 'cancel'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "defer": {
        "html": {
            a: {
                "defer": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "script"}]}, c: {p: [{t: "(defer)"}]}, d: {p: [{t: "UA may defer execution of script"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-defer"}}
                ]}
            }
        }

    }, 
    "defs": {
        "svg": {
            e: {
                "defs": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "a"}, ", ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "animation"}, ", ", {y: "e", i: "svg", t: "audio"}, ", ", {y: "e", i: "svg", t: "circle"}, ", ", {y: "e", i: "svg", t: "defs"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "ellipse"}, ", ", {y: "e", i: "svg", t: "font"}, ", ", {y: "e", i: "svg", t: "font-face"}, ", ", {y: "e", i: "svg", t: "foreignObject"}, ", ", {y: "e", i: "svg", t: "g"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "image"}, ", ", {y: "e", i: "svg", t: "line"}, ", ", {y: "e", i: "svg", t: "linearGradient"}, ", ", {y: "e", i: "svg", t: "listener"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "path"}, ", ", {y: "e", i: "svg", t: "polygon"}, ", ", {y: "e", i: "svg", t: "polyline"}, ", ", {y: "e", i: "svg", t: "prefetch"}, ", ", {y: "e", i: "svg", t: "radialGradient"}, ", ", {y: "e", i: "svg", t: "rect"}, ", ", {y: "e", i: "svg", t: "script"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "solidColor"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "text"}, ", ", {y: "e", i: "svg", t: "textArea"}, ", ", {y: "e", i: "svg", t: "title"}, ", ", {y: "e", i: "svg", t: "use"}, ", ", {y: "e", i: "svg", t: "video"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#DefsElement"}}
                ]}
            }
        }

    }, 
    "del": {
        "html": {
            e: {
                "del": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "cite"}, {t: "class"}, {t: "datetime"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "deleted text"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-del"}}
                ]}
            }
        }

    }, 
    "desc": {
        "svg": {
            e: {
                "desc": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: "<text>      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}
                ]}
            }
        }

    }, 
    "descent": {
        "svg": {
            a: {
                "descent": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "dfn": {
        "html": {
            e: {
                "dfn": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "instance definition"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H54.html", t: "Using the dfn element to identify the defining instance of a word"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-DFN"}}
                ]}
            }
        }

    }, 
    "dir": {
        "html": {
            a: {
                "dir": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, "                "]}]}, c: {p: [{t: "(ltr | rtl)"}]}, d: {p: [{t: "direction for weak/neutral text"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H56.html", t: "Using the dir attribute on an inline element to resolve problems with nested directional runs"}]}, i: {l: "block", p: [{u: "/International/tutorials/bidi-xhtml/", t: "Creating HTML Pages in Arabic, Hebrew and Other Right-to-left Scripts"}]}, sp: {u: "/TR/html401/index/../struct/dirlang.html#adef-dir"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "bdo"}]}, c: {p: [{t: "(ltr | rtl)"}]}, d: {p: [{t: "directionality"}]}, sp: {u: "/TR/html401/index/../struct/dirlang.html#adef-dir-BDO"}}
                ]}
            }
        }

    }, 
    "direction": {
        "svg": {
            p: {
                "direction": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'ltr' | 'rtl' | 'inherit'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#DirectionProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "direction": {d: [{v: {p: [{t: "ltr | rtl | inherit"}]}, ap: {p: [{t: "all elements, but see prose"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-direction"}}
                ]}
            }
        }

    }, 
    "disabled": {
        "html": {
            a: {
                "disabled": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "button"}, {t: "input"}, {t: "optgroup"}, {t: "option"}, {t: "select"}, {t: "textarea"}]}, c: {p: [{t: "(disabled)"}]}, d: {p: [{t: "unavailable in this context"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-disabled"}}
                ]}
            }
        }

    }, 
    "discard": {
        "svg": {
            e: {
                "discard": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "begin"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#DiscardElement"}}
                ]}
            }
        }

    }, 
    "display": {
        "svg": {
            p: {
                "display": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'inline' | 'block' | 'list-item' | 'run-in' | 'compact' | 'marker' | 'table' | 'inline-table' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-column-group' | 'table-column' | 'table-cell' | 'table-caption' | 'none' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#DisplayProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "display": {d: [{v: {p: [{t: "inline | block | list-item | run-in | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "all"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-display"}}
                ]}
            }
        }

    }, 
    "display-align": {
        "svg": {
            p: {
                "display-align": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'before' | 'center' | 'after' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#DisplayAlignProperty"}}
                ]}
            }
        }

    }, 
    "distinct-values": {
        "xpath": {
            f: {
                "distinct-values": {d: [{d: {p: [{t: "Returns the sequence that results from removing from $arg all but one of a set of values that are eq to one other. Values of type xs:untypedAtomic are compared as if they were of type xs:string. Values that cannot be compared, i.e. the eq operator is not defined for their types, are considered to be distinct. The order in which the sequence of values is returned is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-distinct-values"}, pa: {p: [{t: "$arg as xs:anyAtomicType*"}]}, r: {p: [{t: ""}]}}, {pa: {p: [{t: "$arg as xs:anyAtomicType*,$collation as xs:string"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "div": {
        "html": {
            e: {
                "div": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "generic language/style container"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-DIV"}}
                ]}
            }
        }

    }, 
    "dl": {
        "html": {
            e: {
                "dl": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "dd"}, {t: "dt"}]}, d: {p: [{t: "definition list"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H40.html", t: "Using definition lists"}, {u: "/TR/WCAG20-TECHS/H48.html", t: "Using ol, ul and dl for lists"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-DL"}}
                ]}
            }
        }

    }, 
    "doc": {
        "xpath": {
            f: {
                "doc": {d: [{d: {p: [{t: "Retrieves a document using an xs:anyURI, which may include a fragment identifier, supplied as an xs:string. If $uri is not a valid xs:anyURI, an error is raised [err:FODC0005]. If it is a relative URI Reference, it is resolved relative to the value of the base URI property from the static context. The resulting absolute URI Reference is promoted to an xs:string. If the Available documents discussed in Section 2.1.2 Dynamic ContextXP provides a mapping from this string to a document node, the function returns that document node. If the Available documents provides no mapping for the string, an error is raised [err:FODC0005]."}]}, sp: {u: "/TR/xpath-functions/#func-doc"}, pa: {p: [{t: "$uri as xs:string?"}]}, r: {p: [{t: "document-node()?"}]}}
                ]}
            }
        }

    }, 
    "doc-available": {
        "xpath": {
            f: {
                "doc-available": {d: [{d: {p: [{t: "If fn:doc($uri) returns a document node, this function returns true. If $uri is not a valid xs:anyURI, an error is raised [err:FODC0005]. Otherwise, this function returns false."}]}, sp: {u: "/TR/xpath-functions/#func-doc-available"}, pa: {p: [{t: "$uri as xs:string?"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "document-uri": {
        "xpath": {
            f: {
                "document-uri": {d: [{d: {p: [{t: "Returns the value of the document-uri property for $arg as defined by the dm:document-uri accessor function defined in Section 6.1.2 AccessorsDM."}]}, sp: {u: "/TR/xpath-functions/#func-document-uri"}, pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "dt": {
        "html": {
            e: {
                "dt": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "definition term"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H40.html", t: "Using definition lists"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-DT"}}
                ]}
            }
        }

    }, 
    "dur": {
        "svg": {
            a: {
                "dur": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "editable": {
        "svg": {
            a: {
                "editable": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "text"}, {t: "textArea"}]}, c: {p: [{t: "'none' | 'simple'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "elevation": {
        "css": {
            p: {
                "elevation": {d: [{v: {p: [{t: "<angle> | below | level | above | higher | lower | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-elevation"}}
                ]}
            }
        }

    }, 
    "ellipse": {
        "svg": {
            e: {
                "ellipse": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "cx"}, {t: "cy"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "rx"}, {t: "ry"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#EllipseElement"}}
                ]}
            }
        }

    }, 
    "em": {
        "html": {
            e: {
                "em": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "emphasis"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-EM"}}
                ]}
            }
        }

    }, 
    "empty": {
        "xpath": {
            f: {
                "empty": {d: [{d: {p: [{t: "If the value of $arg is the empty sequence, the function returns true; otherwise, the function returns false."}]}, sp: {u: "/TR/xpath-functions/#func-empty"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "empty-cells": {
        "css": {
            p: {
                "empty-cells": {d: [{v: {p: [{t: "show | hide | inherit"}]}, ap: {p: [{t: "'table-cell' elements"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/tables.html#propdef-empty-cells"}}
                ]}
            }
        }

    }, 
    "encode-for-uri": {
        "xpath": {
            f: {
                "encode-for-uri": {d: [{d: {p: [{t: "This function encodes reserved characters in an xs:string that is intended to be used in the path segment of a URI. It is invertible but not idempotent. This function applies the URI escaping rules defined in section 2 of [RFC 3986] to the xs:string supplied as $uri-part. The effect of the function is to escape reserved characters. Each such character in the string is replaced with its percent-encoded form as described in [RFC 3986]."}]}, sp: {u: "/TR/xpath-functions/#func-encode-for-uri"}, pa: {p: [{t: "$uri-part as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "enctype": {
        "html": {
            a: {
                "enctype": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-enctype"}}
                ]}
            }
        }

    }, 
    "end": {
        "svg": {
            a: {
                "end": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "ends-with": {
        "xpath": {
            f: {
                "ends-with": {d: [{d: {p: [{t: "Returns an xs:boolean indicating whether or not the value of $arg1 ends with a sequence of collation units that provides a minimal match to the collation units of $arg2 according to the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-ends-with"}, pa: {p: [{t: "$arg1 as xs:string?, $arg2 as xs:string?"}]}, r: {p: [{t: "xs:boolean"}]}}, {pa: {p: [{t: "$arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "escape-html-uri": {
        "xpath": {
            f: {
                "escape-html-uri": {d: [{d: {p: [{t: "This function escapes all characters except printable characters of the US-ASCII coded character set, specifically the octets ranging from 32 to 126 (decimal). The effect of the function is to escape a URI in the manner html user agents handle attribute values that expect URIs. Each character in $uri to be escaped is replaced by an escape sequence, which is formed by encoding the character as a sequence of octets in UTF-8, and then representing each of these octets in the form %HH, where HH is the hexadecimal representation of the octet. This function must always generate hexadecimal values using the upper-case letters A-F."}]}, sp: {u: "/TR/xpath-functions/#func-escape-html-uri"}, pa: {p: [{t: "$uri as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "ev:event": {
        "svg": {
            a: {
                "ev:event": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "handler"}]}, c: {p: [{t: "<XML-NMTOKEN>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "event": {
        "svg": {
            a: {
                "event": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "<XML-NMTOKEN>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "exactly-one": {
        "xpath": {
            f: {
                "exactly-one": {d: [{d: {p: [{t: "Returns $arg if it contains exactly one item. Otherwise, raises an error [err:FORG0005]."}]}, sp: {u: "/TR/xpath-functions/#func-exactly-one"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "exists": {
        "xpath": {
            f: {
                "exists": {d: [{d: {p: [{t: "If the value of $arg is not the empty sequence, the function returns true; otherwise, the function returns false."}]}, sp: {u: "/TR/xpath-functions/#func-exists"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "externalResourcesRequired": {
        "svg": {
            a: {
                "externalResourcesRequired": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "audio"}, {t: "font"}, {t: "font-face"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "handler"}, {t: "image"}, {t: "script"}, {t: "svg"}, {t: "switch"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<boolean>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "false": {
        "xpath": {
            f: {
                "false": {d: [{d: {p: [{t: "Returns the xs:boolean value false. Equivalent to xs:boolean(\"0\")."}]}, sp: {u: "/TR/xpath-functions/#func-false"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "fieldset": {
        "html": {
            e: {
                "fieldset": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "legend"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "form control group"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H71.html", t: "Providing a description for groups of form controls using fieldset and legend elements"}, {u: "/TR/WCAG20-TECHS/H90.html", t: "Indicating required form controls"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-FIELDSET"}}
                ]}
            }
        }

    }, 
    "fill": {
        "svg": {
            p: {
                "fill": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<paint> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#FillProperty"}}
                ]}
            }, 
            a: {
                "fill": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "'remove' | 'freeze'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "fill-opacity": {
        "svg": {
            p: {
                "fill-opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#FillOpacityProperty"}}
                ]}
            }
        }

    }, 
    "fill-rule": {
        "svg": {
            p: {
                "fill-rule": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'nonzero' | 'evenodd' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#FillRuleProperty"}}
                ]}
            }
        }

    }, 
    "float": {
        "css": {
            p: {
                "float": {d: [{v: {p: [{t: "left | right | none | inherit"}]}, ap: {p: [{t: "all, but see 9.7"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-float"}}
                ]}
            }
        }

    }, 
    "floor": {
        "xpath": {
            f: {
                "floor": {d: [{d: {p: [{t: "Returns the largest (closest to positive infinity) number with no fractional part that is not greater than the value of $arg. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type."}]}, sp: {u: "/TR/xpath-functions/#func-floor"}, pa: {p: [{t: "$arg as numeric?"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "focusHighlight": {
        "svg": {
            a: {
                "focusHighlight": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'auto' | 'none'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "focusable": {
        "svg": {
            a: {
                "focusable": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'auto' | <boolean>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "font": {
        "svg": {
            e: {
                "font": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "horiz-adv-x"}, {t: "horiz-origin-x"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "font-face"}, ", ", {y: "e", i: "svg", t: "glyph"}, ", ", {y: "e", i: "svg", t: "hkern"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "missing-glyph"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontElement"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font": {d: [{v: {p: [{t: ["[ [ ", {y: "p", i: "css", t: "font-style"}, " || ", {y: "p", i: "css", t: "font-variant"}, " || ", {y: "p", i: "css", t: "font-weight"}, " ]? ", {y: "p", i: "css", t: "font-size"}, " [ / ", {y: "p", i: "css", t: "line-height"}, " ]? ", {y: "p", i: "css", t: "font-family"}, " ] | caption | icon | menu | message-box | small-caption | status-bar | inherit"]}]}, ih: {p: [{t: "yes"}]}, pe: {p: [{t: "see individual properties"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font"}}
                ]}
            }
        }

    }, 
    "font-face": {
        "svg": {
            e: {
                "font-face": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "accent-height"}, {t: "alphabetic"}, {t: "ascent"}, {t: "bbox"}, {t: "cap-height"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "descent"}, {t: "externalResourcesRequired"}, {t: "font-family"}, {t: "font-stretch"}, {t: "font-style"}, {t: "font-variant"}, {t: "font-weight"}, {t: "hanging"}, {t: "id"}, {t: "ideographic"}, {t: "mathematical"}, {t: "overline-position"}, {t: "overline-thickness"}, {t: "panose-1"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "slope"}, {t: "stemh"}, {t: "stemv"}, {t: "strikethrough-position"}, {t: "strikethrough-thickness"}, {t: "typeof"}, {t: "underline-position"}, {t: "underline-thickness"}, {t: "unicode-range"}, {t: "units-per-em"}, {t: "widths"}, {t: "x-height"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "font-face-src"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceElement"}}
                ]}
            }
        }

    }, 
    "font-face-src": {
        "svg": {
            e: {
                "font-face-src": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "font-face-uri"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceSrcElement"}}
                ]}
            }
        }

    }, 
    "font-face-uri": {
        "svg": {
            e: {
                "font-face-uri": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#FontFaceUriElement"}}
                ]}
            }
        }

    }, 
    "font-family": {
        "svg": {
            p: {
                "font-family": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<font-family-value> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#FontFamilyProperty"}}
                ]}
            }, 
            a: {
                "font-family": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font-family": {d: [{v: {p: [{t: "[[ <family-name> | <generic-family> ] [, <family-name>| <generic-family>]* ] | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font-family"}}
                ]}
            }
        }

    }, 
    "font-size": {
        "svg": {
            p: {
                "font-size": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<font-size-value> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#FontSizeProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font-size": {d: [{v: {p: [{t: "<absolute-size> | <relative-size> | <length> | <percentage> | inherit"}]}, ih: {p: [{t: "yes"}]}, pe: {p: [{t: "refer to parent element's font size"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font-size"}}
                ]}
            }
        }

    }, 
    "font-stretch": {
        "svg": {
            a: {
                "font-stretch": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "font-style": {
        "svg": {
            p: {
                "font-style": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'normal' | 'italic' | 'oblique' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#FontStyleProperty"}}
                ]}
            }, 
            a: {
                "font-style": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font-style": {d: [{v: {p: [{t: "normal | italic | oblique | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font-style"}}
                ]}
            }
        }

    }, 
    "font-variant": {
        "svg": {
            p: {
                "font-variant": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'normal' | 'small-caps' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#FontVariantProperty"}}
                ]}
            }, 
            a: {
                "font-variant": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font-variant": {d: [{v: {p: [{t: "normal | small-caps | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font-variant"}}
                ]}
            }
        }

    }, 
    "font-weight": {
        "svg": {
            p: {
                "font-weight": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#FontWeightProperty"}}
                ]}
            }, 
            a: {
                "font-weight": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "font-weight": {d: [{v: {p: [{t: "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/fonts.html#propdef-font-weight"}}
                ]}
            }
        }

    }, 
    "for": {
        "html": {
            a: {
                "for": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "label"}]}, c: {p: [{t: "IDREF"}]}, d: {p: [{t: "matches field ID value"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-for"}}
                ]}
            }
        }

    }, 
    "foreignObject": {
        "svg": {
            e: {
                "foreignObject": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "svg"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/extend.html#ForeignObjectElement"}}
                ]}
            }
        }

    }, 
    "form": {
        "html": {
            e: {
                "form": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accept"}, {t: "accept-charset"}, {t: "action"}, {t: "class"}, {t: "dir"}, {t: "enctype"}, {t: "id"}, {t: "lang"}, {t: "method"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "onreset"}, {t: "onsubmit"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "address"}, {t: "blockquote"}, {t: "del"}, {t: "div"}, {t: "dl"}, {t: "fieldset"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "ins"}, {t: "noscript"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "script"}, {t: "table"}, {t: "ul"}]}, d: {p: [{t: "interactive form"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-FORM"}}
                ]}
            }
        }

    }, 
    "frame": {
        "html": {
            a: {
                "frame": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%TFrame;"}]}, d: {p: [{t: "which parts of frame to render"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-frame"}}
                ]}
            }
        }

    }, 
    "from": {
        "svg": {
            a: {
                "from": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "g": {
        "svg": {
            e: {
                "g": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "a"}, ", ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "animation"}, ", ", {y: "e", i: "svg", t: "audio"}, ", ", {y: "e", i: "svg", t: "circle"}, ", ", {y: "e", i: "svg", t: "defs"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "ellipse"}, ", ", {y: "e", i: "svg", t: "font"}, ", ", {y: "e", i: "svg", t: "font-face"}, ", ", {y: "e", i: "svg", t: "foreignObject"}, ", ", {y: "e", i: "svg", t: "g"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "image"}, ", ", {y: "e", i: "svg", t: "line"}, ", ", {y: "e", i: "svg", t: "linearGradient"}, ", ", {y: "e", i: "svg", t: "listener"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "path"}, ", ", {y: "e", i: "svg", t: "polygon"}, ", ", {y: "e", i: "svg", t: "polyline"}, ", ", {y: "e", i: "svg", t: "prefetch"}, ", ", {y: "e", i: "svg", t: "radialGradient"}, ", ", {y: "e", i: "svg", t: "rect"}, ", ", {y: "e", i: "svg", t: "script"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "solidColor"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "text"}, ", ", {y: "e", i: "svg", t: "textArea"}, ", ", {y: "e", i: "svg", t: "title"}, ", ", {y: "e", i: "svg", t: "use"}, ", ", {y: "e", i: "svg", t: "video"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#GElement"}}
                ]}
            }
        }

    }, 
    "g1": {
        "svg": {
            a: {
                "g1": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "hkern"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "g2": {
        "svg": {
            a: {
                "g2": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "hkern"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "glyph": {
        "svg": {
            e: {
                "glyph": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "arabic-form"}, {t: "class"}, {t: "content"}, {t: "d"}, {t: "datatype"}, {t: "glyph-name"}, {t: "horiz-adv-x"}, {t: "id"}, {t: "lang"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "unicode"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#GlyphElement"}}
                ]}
            }
        }

    }, 
    "glyph-name": {
        "svg": {
            a: {
                "glyph-name": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "glyph"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "gradientUnits": {
        "svg": {
            a: {
                "gradientUnits": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "linearGradient"}, {t: "radialGradient"}]}, c: {p: [{t: "'userSpaceOnUse' | 'objectBoundingBox'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "h1": {
        "html": {
            e: {
                "h1": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/Use_h1_for_Title", t: "Use h1 for top-level heading"}, {u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H1"}}
                ]}
            }
        }

    }, 
    "h2": {
        "html": {
            e: {
                "h2": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H2"}}
                ]}
            }
        }

    }, 
    "h3": {
        "html": {
            e: {
                "h3": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H3"}}
                ]}
            }
        }

    }, 
    "h4": {
        "html": {
            e: {
                "h4": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H4"}}
                ]}
            }
        }

    }, 
    "h5": {
        "html": {
            e: {
                "h5": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H5"}}
                ]}
            }
        }

    }, 
    "h6": {
        "html": {
            e: {
                "h6": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "heading"}]}, q: {l: "block", p: [{u: "/QA/Tips/headings", t: "Use headings to structure your document"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-H6"}}
                ]}
            }
        }

    }, 
    "handler": {
        "svg": {
            e: {
                "handler": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "ev:event"}, {t: "externalResourcesRequired"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "type"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["<text>, ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/script.html#HandlerElement"}}
                ]}
            }, 
            a: {
                "handler": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "<IRI>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "hanging": {
        "svg": {
            a: {
                "hanging": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "head": {
        "html": {
            e: {
                "head": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "dir"}, {t: "id"}, {t: "lang"}, {t: "profile"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "base"}, {t: "link"}, {t: "meta"}, {t: "object"}, {t: "script"}, {t: "style"}, {t: "title"}]}, d: {p: [{t: "document head"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H25.html", t: "Providing a title using the title element"}, {u: "/TR/WCAG20-TECHS/H60.html", t: "Using the link element to link to a glossary"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-HEAD"}}
                ]}
            }
        }

    }, 
    "headers": {
        "html": {
            a: {
                "headers": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "IDREFS"}]}, d: {p: [{t: "list of id's for header cells"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H43.html", t: "Using id and headers attributes to associate data cells with header cells in data tables"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-headers"}}
                ]}
            }
        }

    }, 
    "height": {
        "svg": {
            a: {
                "height": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "foreignObject"}, {t: "image"}, {t: "rect"}, {t: "svg"}, {t: "video"}]}, c: {p: [{t: "<length>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "textArea"}]}, c: {p: [{t: "<length> | 'auto'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#text-TextAreaElementHeightAttribute"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "height": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table columns, and column groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see prose"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-height"}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "height": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "img"}, {t: "object"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "override height"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#IMAGES_SPECIFY_SIZE", t: "Specify the size of images in markup, if they have an intrinsic size."}, {u: "/TR/mobile-bp/#IMAGES_RESIZING", t: "Resize images at the server, if they have an intrinsic size."}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-height-IMG"}}
                ]}
            }
        }

    }, 
    "hkern": {
        "svg": {
            e: {
                "hkern": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "g1"}, {t: "g2"}, {t: "id"}, {t: "k"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "u1"}, {t: "u2"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#KernElements"}}
                ]}
            }
        }

    }, 
    "horiz-adv-x": {
        "svg": {
            a: {
                "horiz-adv-x": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font"}, {t: "glyph"}, {t: "missing-glyph"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "horiz-origin-x": {
        "svg": {
            a: {
                "horiz-origin-x": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "hours-from-dateTime": {
        "xpath": {
            f: {
                "hours-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:integer between 0 and 23, both inclusive, representing the hours component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-hours-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "hours-from-duration": {
        "xpath": {
            f: {
                "hours-from-duration": {d: [{d: {p: [{t: "Returns an xs:integer representing the hours component in the value of $arg. The result is obtained by casting $arg to an xs:dayTimeDuration (see 17.1.4 Casting to duration types) and then computing the hours component as described in 10.3.2.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-hours-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "hours-from-time": {
        "xpath": {
            f: {
                "hours-from-time": {d: [{d: {p: [{t: "Returns an xs:integer between 0 and 23, both inclusive, representing the value of the hours component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-hours-from-time"}, pa: {p: [{t: "$arg as xs:time?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "hr": {
        "html": {
            e: {
                "hr": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, d: {p: [{t: "horizontal rule"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-HR"}}
                ]}
            }
        }

    }, 
    "href": {
        "html": {
            a: {
                "href": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "area"}, {t: "link"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "URI for linked resource"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H59.html", t: "Using the link element and navigation tools"}, {u: "/TR/WCAG20-TECHS/H60.html", t: "Using the link element to link to a glossary"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-href"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "base"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "URI that acts as base URI"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-href-BASE"}}
                ]}
            }
        }

    }, 
    "hreflang": {
        "html": {
            a: {
                "hreflang": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "link"}]}, c: {p: [{t: "%LanguageCode;"}]}, d: {p: [{t: "language code"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-hreflang"}}
                ]}
            }
        }

    }, 
    "html": {
        "html": {
            e: {
                "html": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "dir"}, {t: "id"}, {t: "lang"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "body"}, {t: "head"}]}, d: {p: [{t: "document root element"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H57.html", t: "Using language attributes on the html element"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-HTML"}}
                ]}
            }
        }

    }, 
    "http-equiv": {
        "html": {
            a: {
                "http-equiv": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "meta"}]}, c: {p: [{t: "NAME"}]}, d: {p: [{t: "HTTP response header name"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H76.html", t: "Using meta refresh to create an instant client-side redirect"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#AUTO_REFRESH", t: "Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."}, {u: "/TR/mobile-bp/#REDIRECTION", t: "Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]}, q: {l: "block", p: [{u: "/QA/Tips/reback", t: "Use standard redirects: don't break the back button!"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-http-equiv"}}
                ]}
            }
        }

    }, 
    "i": {
        "html": {
            e: {
                "i": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "italic text style"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-I"}}
                ]}
            }
        }

    }, 
    "id": {
        "svg": {
            a: {
                "id": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<ID> | <NCName>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "xpath": {
            f: {
                "id": {d: [{d: {p: [{t: "Returns the sequence of element nodes that have an ID value matching the value of one or more of the IDREF values supplied in $arg ."}]}, sp: {u: "/TR/xpath-functions/#func-id"}, pa: {p: [{t: "$arg as xs:string*"}]}, r: {p: [{t: "element()*"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "id": {d: [{el: {l: "inline", p: [{t: ["All elements but ", {y: "e", i: "html", t: "base"}, ", ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "ID"}]}, d: {p: [{t: "document-wide unique id"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H43.html", t: "Using id and headers attributes to associate data cells with header cells in data tables"}, {u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-id"}}
                ]}
            }
        }

    }, 
    "ideographic": {
        "svg": {
            a: {
                "ideographic": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "idref": {
        "xpath": {
            f: {
                "idref": {d: [{d: {p: [{t: "Returns the sequence of element or attribute nodes with an IDREF value matching the value of one or more of the ID values supplied in $arg."}]}, sp: {u: "/TR/xpath-functions/#func-idref"}, pa: {p: [{t: "$arg as xs:string*"}]}, r: {p: [{t: "node()*"}]}}
                ]}
            }
        }

    }, 
    "image": {
        "svg": {
            e: {
                "image": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "preserveAspectRatio"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "type"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}, {t: "opacity"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#ImageElement"}}
                ]}
            }
        }

    }, 
    "image-rendering": {
        "svg": {
            p: {
                "image-rendering": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#ImageRenderingProperty"}}
                ]}
            }
        }

    }, 
    "img": {
        "html": {
            e: {
                "img": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "alt"}, {t: "class"}, {t: "dir"}, {t: "height"}, {t: "id"}, {t: "ismap"}, {t: "lang"}, {t: "longdesc"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "src"}, {t: "style"}, {t: "title"}, {t: "usemap"}, {t: "width"}, {t: "xml:lang"}]}, d: {p: [{t: "Embedded image"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H37.html", t: "Using alt attributes on img elements"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#GRAPHICS_FOR_SPACING", t: "Do not use graphics for spacing."}, {u: "/TR/mobile-bp/#LARGE_GRAPHICS", t: "Do not use images that cannot be rendered by the device. Avoid large or high resolution images except where critical information would otherwise be lost."}, {u: "/TR/mobile-bp/#NON-TEXT_ALTERNATIVES", t: "Provide a text equivalent for every non-text element."}, {u: "/TR/mobile-bp/#IMAGES_SPECIFY_SIZE", t: "Specify the size of images in markup, if they have an intrinsic size."}, {u: "/TR/mobile-bp/#IMAGES_RESIZING", t: "Resize images at the server, if they have an intrinsic size."}]}, q: {l: "block", p: [{u: "/QA/Tips/altAttribute", t: "Use the alt attribute to describe the function of each visual"}, {u: "/QA/Tips/png-gif", t: "GIF or PNG?"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#edef-IMG"}}
                ]}
            }
        }

    }, 
    "implicit-timezone": {
        "xpath": {
            f: {
                "implicit-timezone": {d: [{d: {p: [{t: "Returns the value of the implicit timezone property from the dynamic context. Components of the dynamic context are discussed in Section C.2 Dynamic Context ComponentsXP."}]}, sp: {u: "/TR/xpath-functions/#func-implicit-timezone"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:dayTimeDuration"}]}}
                ]}
            }
        }

    }, 
    "in-scope-prefixes": {
        "xpath": {
            f: {
                "in-scope-prefixes": {d: [{d: {p: [{t: "Returns the prefixes of the in-scope namespaces for $element. For namespaces that have a prefix, it returns the prefix as an xs:NCName. For the default namespace, which has no prefix, it returns the zero-length string."}]}, sp: {u: "/TR/xpath-functions/#func-in-scope-prefixes"}, pa: {p: [{t: "$element as element()"}]}, r: {p: [{t: "xs:string*"}]}}
                ]}
            }
        }

    }, 
    "index-of": {
        "xpath": {
            f: {
                "index-of": {d: [{d: {p: [{t: "Returns a sequence of positive integers giving the positions within the sequence $seqParam of items that are equal to $srchParam."}]}, sp: {u: "/TR/xpath-functions/#func-index-of"}, pa: {p: [{t: "$seqParam as xs:anyAtomicType*,$srchParam as xs:anyAtomicType"}]}, r: {p: [{t: "xs:integer*"}]}}, {pa: {p: [{t: "$seqParam as xs:anyAtomicType*,$srchParam as xs:anyAtomicType,$collation as xs:string"}]}, r: {p: [{t: "xs:integer*"}]}}
                ]}
            }
        }

    }, 
    "initialVisibility": {
        "svg": {
            a: {
                "initialVisibility": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "video"}]}, c: {p: [{t: "'whenStarted' | 'always'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "input": {
        "html": {
            e: {
                "input": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accept"}, {t: "accesskey"}, {t: "alt"}, {t: "checked"}, {t: "class"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "lang"}, {t: "maxlength"}, {t: "name"}, {t: "onblur"}, {t: "onchange"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "onselect"}, {t: "readonly"}, {t: "size"}, {t: "src"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "type"}, {t: "usemap"}, {t: "value"}, {t: "xml:lang"}]}, d: {p: [{t: "form control"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}, {u: "/TR/WCAG20-TECHS/H36.html", t: "Using alt attributes on images used as submit buttons"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#AVOID_FREE_TEXT", t: "Avoid free text entry where possible."}, {u: "/TR/mobile-bp/#PROVIDE_DEFAULTS", t: "Provide pre-selected default values where possible."}, {u: "/TR/mobile-bp/#DEFAULT_INPUT_MODE", t: "Specify a default text entry mode, language and/or input format, if the target device is known to support it."}, {u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-INPUT"}}
                ]}
            }
        }

    }, 
    "ins": {
        "html": {
            e: {
                "ins": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "cite"}, {t: "class"}, {t: "datetime"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "inserted text"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-ins"}}
                ]}
            }
        }

    }, 
    "insert-before": {
        "xpath": {
            f: {
                "insert-before": {d: [{d: {p: [{t: "Returns a new sequence constructed from the value of $target with the value of $inserts inserted at the position specified by the value of $position. (The value of $target is not affected by the sequence construction.)"}]}, sp: {u: "/TR/xpath-functions/#func-insert-before"}, pa: {p: [{t: "$target as item()*,$position as xs:integer,$inserts as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "iri-to-uri": {
        "xpath": {
            f: {
                "iri-to-uri": {d: [{d: {p: [{t: "This function converts an xs:string containing an IRI into a URI according to the rules spelled out in Section 3.1 of [RFC 3987]. It is idempotent but not invertible."}]}, sp: {u: "/TR/xpath-functions/#func-iri-to-uri"}, pa: {p: [{t: "$iri as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "ismap": {
        "html": {
            a: {
                "ismap": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "img"}, {t: "input"}]}, c: {p: [{t: "(ismap)"}]}, d: {p: [{t: "use server-side image map"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-ismap"}}
                ]}
            }
        }

    }, 
    "k": {
        "svg": {
            a: {
                "k": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "hkern"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "kbd": {
        "html": {
            e: {
                "kbd": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "text to be entered by the user"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-KBD"}}
                ]}
            }
        }

    }, 
    "keyPoints": {
        "svg": {
            a: {
                "keyPoints": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animateMotion"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "keySplines": {
        "svg": {
            a: {
                "keySplines": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "keyTimes": {
        "svg": {
            a: {
                "keyTimes": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "label": {
        "html": {
            e: {
                "label": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "class"}, {t: "dir"}, {t: "for"}, {t: "id"}, {t: "lang"}, {t: "onblur"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "form field label text"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}, {u: "/TR/WCAG20-TECHS/H90.html", t: "Indicating required form controls"}, {u: "/TR/WCAG20-TECHS/H91.html", t: "Using HTML form controls and links"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-LABEL"}}
                ]}
            }, 
            a: {
                "label": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "option"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "for use in hierarchical menus"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-label-OPTION"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "optgroup"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "for use in hierarchical menus"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-label-OPTGROUP"}}
                ]}
            }
        }

    }, 
    "lang": {
        "svg": {
            a: {
                "lang": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "glyph"}]}, c: {p: [{t: "<list-of-language-ids>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#fonts-GlyphElementLangAttribute"}}
                ]}
            }
        }
, 
        "xpath": {
            f: {
                "lang": {d: [{d: {p: [{t: "This function tests whether the language of $node, or the context item if the second argument is omitted, as specified by xml:lang attributes is the same as, or is a sublanguage of, the language specified by $testlang. The behavior of the function if the second argument is omitted is exactly the same as if the context item (.) had been passed as the second argument. The language of the argument node, or the context item if the second argument is omitted, is determined by the value of the xml:lang attribute on the node, or, if the node has no such attribute, by the value of the xml:lang attribute on the nearest ancestor of the node that has an xml:lang attribute. If there is no such ancestor, then the function returns false"}]}, sp: {u: "/TR/xpath-functions/#func-lang"}, pa: {p: [{t: "$testlang as xs:string?"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "lang": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, "                "]}]}, c: {p: [{t: "%LanguageCode;"}]}, d: {p: [{t: "language code"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H57.html", t: "Using language attributes on the html element"}, {u: "/TR/WCAG20-TECHS/H58.html", t: "Using language attributes to identify changes in the human language"}]}, i: {l: "block", p: [{u: "/International/tutorials/language-decl/", t: "Declaring Language in XHTML and HTML"}]}, sp: {u: "/TR/html401/index/../struct/dirlang.html#adef-lang"}}
                ]}
            }
        }

    }, 
    "last": {
        "xpath": {
            f: {
                "last": {d: [{d: {p: [{t: "Returns the context size from the dynamic context. (See Section C.2 Dynamic Context ComponentsXP.) If the context item is undefined, an error is raised: [err:XPDY0002]XP."}]}, sp: {u: "/TR/xpath-functions/#func-last"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:integer"}]}}
                ]}
            }
        }

    }, 
    "left": {
        "css": {
            p: {
                "left": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "positioned elements"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-left"}}
                ]}
            }
        }

    }, 
    "legend": {
        "html": {
            e: {
                "legend": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "fieldset legend"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H71.html", t: "Providing a description for groups of form controls using fieldset and legend elements"}, {u: "/TR/WCAG20-TECHS/H90.html", t: "Indicating required form controls"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-LEGEND"}}
                ]}
            }
        }

    }, 
    "letter-spacing": {
        "css": {
            p: {
                "letter-spacing": {d: [{v: {p: [{t: "normal | <length> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-letter-spacing"}}
                ]}
            }
        }

    }, 
    "li": {
        "html": {
            e: {
                "li": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "list item"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-LI"}}
                ]}
            }
        }

    }, 
    "line": {
        "svg": {
            e: {
                "line": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "x1"}, {t: "x2"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y1"}, {t: "y2"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#LineElement"}}
                ]}
            }
        }

    }, 
    "line-height": {
        "css": {
            p: {
                "line-height": {d: [{v: {p: [{t: "normal | <number> | <length> | <percentage> | inherit"}]}, ih: {p: [{t: "yes"}]}, pe: {p: [{t: "refer to the font size of the element itself"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-line-height"}}
                ]}
            }
        }

    }, 
    "line-increment": {
        "svg": {
            p: {
                "line-increment": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | <number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#LineIncrementProperty"}}
                ]}
            }
        }

    }, 
    "linearGradient": {
        "svg": {
            e: {
                "linearGradient": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "gradientUnits"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "x1"}, {t: "x2"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y1"}, {t: "y2"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "stop"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/painting.html#LinearGradientElement"}}
                ]}
            }
        }

    }, 
    "link": {
        "html": {
            e: {
                "link": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "charset"}, {t: "class"}, {t: "dir"}, {t: "href"}, {t: "hreflang"}, {t: "id"}, {t: "lang"}, {t: "media"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "rel"}, {t: "rev"}, {t: "style"}, {t: "title"}, {t: "type"}, {t: "xml:lang"}]}, d: {p: [{t: "a media-independent link"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H59.html", t: "Using the link element and navigation tools"}, {u: "/TR/WCAG20-TECHS/H60.html", t: "Using the link element to link to a glossary"}]}, q: {l: "block", p: [{u: "/QA/Tips/use-links", t: "Use <link>s in your document"}]}, sp: {u: "/TR/html401/index/../struct/links.html#edef-LINK"}}
                ]}
            }
        }

    }, 
    "list-style": {
        "css": {
            p: {
                "list-style": {d: [{v: {p: [{t: ["[ ", {y: "p", i: "css", t: "list-style-type"}, " || ", {y: "p", i: "css", t: "list-style-position"}, " || ", {y: "p", i: "css", t: "list-style-image"}, " ] | inherit"]}]}, ap: {p: [{t: "elements with 'display: list-item'"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-list-style"}}
                ]}
            }
        }

    }, 
    "list-style-image": {
        "css": {
            p: {
                "list-style-image": {d: [{v: {p: [{t: "<uri> | none | inherit"}]}, ap: {p: [{t: "elements with 'display: list-item'"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-list-style-image"}}
                ]}
            }
        }

    }, 
    "list-style-position": {
        "css": {
            p: {
                "list-style-position": {d: [{v: {p: [{t: "inside | outside | inherit"}]}, ap: {p: [{t: "elements with 'display: list-item'"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-list-style-position"}}
                ]}
            }
        }

    }, 
    "list-style-type": {
        "css": {
            p: {
                "list-style-type": {d: [{v: {p: [{t: "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit"}]}, ap: {p: [{t: "elements with 'display: list-item'"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-list-style-type"}}
                ]}
            }
        }

    }, 
    "listener": {
        "svg": {
            e: {
                "listener": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "defaultAction"}, {t: "event"}, {t: "handler"}, {t: "id"}, {t: "observer"}, {t: "phase"}, {t: "propagate"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "target"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: "      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/script.html#ListenerElement"}}
                ]}
            }
        }

    }, 
    "local-name": {
        "xpath": {
            f: {
                "local-name": {d: [{d: {p: [{t: "Returns the local part of the name of $arg as an xs:string that will either be the zero-length string or will have the lexical form of an xs:NCName."}]}, sp: {u: "/TR/xpath-functions/#func-local-name"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "local-name-from-QName": {
        "xpath": {
            f: {
                "local-name-from-QName": {d: [{d: {p: [{t: "Returns an xs:NCName representing the local part of $arg. If $arg is the empty sequence, returns the empty sequence."}]}, sp: {u: "/TR/xpath-functions/#func-local-name-from-QName"}, pa: {p: [{t: "$arg as xs:QName?"}]}, r: {p: [{t: "xs:NCName?"}]}}
                ]}
            }
        }

    }, 
    "longdesc": {
        "html": {
            a: {
                "longdesc": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "img"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "link to long description (complements alt)"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H45.html", t: "Using longdesc"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-longdesc-IMG"}}
                ]}
            }
        }

    }, 
    "lower-case": {
        "xpath": {
            f: {
                "lower-case": {d: [{d: {p: [{t: "Returns the value of $arg after translating every character to its lower-case correspondent as defined in the appropriate case mappings section in the Unicode standard [The Unicode Standard]. For versions of Unicode beginning with the 2.1.8 update, only locale-insensitive case mappings should be applied. Beginning with version 3.2.0 (and likely future versions) of Unicode, precise mappings are described in default case operations, which are full case mappings in the absence of tailoring for particular languages and environments. Every upper-case character that does not have a lower-case correspondent, as well as every lower-case character, is included in the returned value in its original form."}]}, sp: {u: "/TR/xpath-functions/#func-lower-case"}, pa: {p: [{t: "$arg as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "map": {
        "html": {
            e: {
                "map": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "address"}, {t: "area"}, {t: "blockquote"}, {t: "del"}, {t: "div"}, {t: "dl"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "ins"}, {t: "noscript"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "script"}, {t: "table"}, {t: "ul"}]}, d: {p: [{t: "client-side image map"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H50.html", t: "Using structural elements to group links"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#edef-MAP"}}
                ]}
            }
        }

    }, 
    "margin": {
        "css": {
            p: {
                "margin": {d: [{v: {p: [{t: "<margin-width>{1,4} | inherit"}]}, ap: {p: [{t: "all elements except elements with table display types other than table-caption, table and inline-table"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-margin"}}
                ]}
            }
        }

    }, 
    "margin-bottom": {
        "css": {
            p: {
                "margin-bottom": {d: [{v: {p: [{t: "<margin-width> | inherit"}]}, ap: {p: [{t: "all elements except elements with table display types other than table-caption, table and inline-table"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-margin-bottom"}}
                ]}
            }
        }

    }, 
    "margin-left": {
        "css": {
            p: {
                "margin-left": {d: [{v: {p: [{t: "<margin-width> | inherit"}]}, ap: {p: [{t: "all elements except elements with table display types other than table-caption, table and inline-table"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-margin-left"}}
                ]}
            }
        }

    }, 
    "margin-right": {
        "css": {
            p: {
                "margin-right": {d: [{v: {p: [{t: "<margin-width> | inherit"}]}, ap: {p: [{t: "all elements except elements with table display types other than table-caption, table and inline-table"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-margin-right"}}
                ]}
            }
        }

    }, 
    "margin-top": {
        "css": {
            p: {
                "margin-top": {d: [{v: {p: [{t: "<margin-width> | inherit"}]}, ap: {p: [{t: "all elements except elements with table display types other than table-caption, table and inline-table"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-margin-top"}}
                ]}
            }
        }

    }, 
    "matches": {
        "xpath": {
            f: {
                "matches": {d: [{d: {p: [{t: "The function returns true if $input matches the regular expression supplied as $pattern as influenced by the value of $flags, if present; otherwise, it returns false."}]}, sp: {u: "/TR/xpath-functions/#func-matches"}, pa: {p: [{t: "$input as xs:string?, $pattern as xs:string"}]}, r: {p: [{t: "xs:boolean"}]}}, {pa: {p: [{t: "$input as xs:string?,$pattern as xs:string,$flags as xs:string"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "mathematical": {
        "svg": {
            a: {
                "mathematical": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "max": {
        "svg": {
            a: {
                "max": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "xpath": {
            f: {
                "max": {d: [{d: {p: [{t: "Selects an item from the input sequence $arg whose value is greater than or equal to the value of every other item in the input sequence. If there are two or more such items, then the specific item whose value is returned is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-max"}, pa: {p: [{t: "$arg as xs:anyAtomicType*"}]}, r: {p: [{t: ""}]}}, {pa: {p: [{t: "$arg as xs:anyAtomicType*, $collation as string"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "max-height": {
        "css": {
            p: {
                "max-height": {d: [{v: {p: [{t: "<length> | <percentage> | none | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table columns, and column groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see prose"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-max-height"}}
                ]}
            }
        }

    }, 
    "max-width": {
        "css": {
            p: {
                "max-width": {d: [{v: {p: [{t: "<length> | <percentage> | none | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table rows, and row groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-max-width"}}
                ]}
            }
        }

    }, 
    "maxlength": {
        "html": {
            a: {
                "maxlength": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "max chars for text fields"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-maxlength"}}
                ]}
            }
        }

    }, 
    "media": {
        "html": {
            a: {
                "media": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "style"}]}, c: {p: [{t: "%MediaDesc;"}]}, d: {p: [{t: "designed for use with these media"}]}, sp: {u: "/TR/html401/index/../present/styles.html#adef-media"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "link"}]}, c: {p: [{t: "%MediaDesc;"}]}, d: {p: [{t: "for rendering on these media"}]}, sp: {u: "/TR/html401/index/../present/styles.html#adef-media"}}
                ]}
            }
        }

    }, 
    "mediaCharacterEncoding": {
        "svg": {
            a: {
                "mediaCharacterEncoding": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "prefetch"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaCharacterEncodingAttribute"}}
                ]}
            }
        }

    }, 
    "mediaContentEncodings": {
        "svg": {
            a: {
                "mediaContentEncodings": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "prefetch"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaContentEncodingsAttribute"}}
                ]}
            }
        }

    }, 
    "mediaSize": {
        "svg": {
            a: {
                "mediaSize": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "prefetch"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaSizeAttribute"}}
                ]}
            }
        }

    }, 
    "mediaTime": {
        "svg": {
            a: {
                "mediaTime": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "prefetch"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#struct-PrefetchElementMediaTimeAttribute"}}
                ]}
            }
        }

    }, 
    "meta": {
        "html": {
            e: {
                "meta": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "content"}, {t: "dir"}, {t: "http-equiv"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "scheme"}, {t: "xml:lang"}]}, d: {p: [{t: "generic metainformation"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H76.html", t: "Using meta refresh to create an instant client-side redirect"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#AUTO_REFRESH", t: "Do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it."}, {u: "/TR/mobile-bp/#REDIRECTION", t: "Do not use markup to redirect pages automatically. Instead, configure the server to perform redirects by means of HTTP 3xx codes."}]}, q: {l: "block", p: [{u: "/QA/Tips/reback", t: "Use standard redirects: don't break the back button!"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-META"}}
                ]}
            }
        }

    }, 
    "metadata": {
        "svg": {
            e: {
                "metadata": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: "<text>      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/metadata.html#MetadataElement"}}
                ]}
            }
        }

    }, 
    "method": {
        "html": {
            a: {
                "method": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "(GET | POST)"}]}, d: {p: [{t: "HTTP method used to submit the form"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-method"}}
                ]}
            }
        }

    }, 
    "min": {
        "svg": {
            a: {
                "min": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "xpath": {
            f: {
                "min": {d: [{d: {p: [{t: "selects an item from the input sequence $arg whose value is less than or equal to the value of every other item in the input sequence. If there are two or more such items, then the specific item whose value is returned is ·implementation dependent·."}]}, sp: {u: "/TR/xpath-functions/#func-min"}, pa: {p: [{t: "$arg as xs:anyAtomicType*"}]}, r: {p: [{t: ""}]}}, {pa: {p: [{t: "$arg as xs:anyAtomicType*, $collation as string"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "min-height": {
        "css": {
            p: {
                "min-height": {d: [{v: {p: [{t: "<length> | <percentage> | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table columns, and column groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see prose"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-min-height"}}
                ]}
            }
        }

    }, 
    "min-width": {
        "css": {
            p: {
                "min-width": {d: [{v: {p: [{t: "<length> | <percentage> | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table rows, and row groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-min-width"}}
                ]}
            }
        }

    }, 
    "minutes-from-dateTime": {
        "xpath": {
            f: {
                "minutes-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:integer value between 0 and 59, both inclusive, representing the minute component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-minutes-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "minutes-from-duration": {
        "xpath": {
            f: {
                "minutes-from-duration": {d: [{d: {p: [{t: "Returns an xs:integer representing the minutes component in the value of $arg. The result is obtained by casting $arg to an xs:dayTimeDuration (see 17.1.4 Casting to duration types) and then computing the minutes component as described in 10.3.2.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-minutes-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "minutes-from-time": {
        "xpath": {
            f: {
                "minutes-from-time": {d: [{d: {p: [{t: "Returns an xs:integer value between 0 and 59, both inclusive, representing the value of the minutes component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-minutes-from-time"}, pa: {p: [{t: "$arg as xs:time?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "missing-glyph": {
        "svg": {
            e: {
                "missing-glyph": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "d"}, {t: "datatype"}, {t: "horiz-adv-x"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/fonts.html#MissingGlyphElement"}}
                ]}
            }
        }

    }, 
    "month-from-date": {
        "xpath": {
            f: {
                "month-from-date": {d: [{d: {p: [{t: "Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-month-from-date"}, pa: {p: [{t: "$arg as xs:date?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "month-from-dateTime": {
        "xpath": {
            f: {
                "month-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-month-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "months-from-duration": {
        "xpath": {
            f: {
                "months-from-duration": {d: [{d: {p: [{t: "Returns an xs:integer representing the months component in the value of $arg. The result is obtained by casting $arg to an xs:yearMonthDuration (see 17.1.4 Casting to duration types) and then computing the months component as described in 10.3.1.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-months-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "mpath": {
        "svg": {
            e: {
                "mpath": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#MpathElement"}}
                ]}
            }
        }

    }, 
    "multiple": {
        "html": {
            a: {
                "multiple": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "select"}]}, c: {p: [{t: "(multiple)"}]}, d: {p: [{t: "default is single selection"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-multiple"}}
                ]}
            }
        }

    }, 
    "name": {
        "xpath": {
            f: {
                "name": {d: [{d: {p: [{t: "Returns the name of a node, as an xs:string that is either the zero-length string, or has the lexical form of an xs:QName."}]}, sp: {u: "/TR/xpath-functions/#func-name"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "name": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "button"}, {t: "textarea"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: " "}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H64.html", t: "Using the title attribute of the frame and iframe elements"}, {u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-name-BUTTON"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "select"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "field name"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-name-SELECT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "name of form for scripting"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-name-FORM"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "img"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "name of image for scripting"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-name-IMG"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "named link end"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-name-A"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "input"}, {t: "object"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "submit as part of form"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-name-INPUT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "map"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "for reference by usemap"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-name-MAP"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "param"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "property name"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-name-PARAM"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "meta"}]}, c: {p: [{t: "NAME"}]}, d: {p: [{t: "metainformation name"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-name-META"}}
                ]}
            }
        }

    }, 
    "namespace-uri": {
        "xpath": {
            f: {
                "namespace-uri": {d: [{d: {p: [{t: "Returns the namespace URI of the xs:QName of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-namespace-uri"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:anyURI"}]}}, {pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:anyURI"}]}}
                ]}
            }
        }

    }, 
    "namespace-uri-for-prefix": {
        "xpath": {
            f: {
                "namespace-uri-for-prefix": {d: [{d: {p: [{t: "Returns the namespace URI of one of the in-scope namespaces for $element, identified by its namespace prefix."}]}, sp: {u: "/TR/xpath-functions/#func-namespace-uri-for-prefix"}, pa: {p: [{t: "$prefix as xs:string?,$element as element()"}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "namespace-uri-from-QName": {
        "xpath": {
            f: {
                "namespace-uri-from-QName": {d: [{d: {p: [{t: "Returns the namespace URI for $arg as an xs:string. If $arg is the empty sequence, the empty sequence is returned. If $arg is in no namespace, the zero-length string is returned."}]}, sp: {u: "/TR/xpath-functions/#func-namespace-uri-from-QName"}, pa: {p: [{t: "$arg as xs:QName?"}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "nav-down": {
        "svg": {
            a: {
                "nav-down": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-down-left": {
        "svg": {
            a: {
                "nav-down-left": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-down-right": {
        "svg": {
            a: {
                "nav-down-right": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-left": {
        "svg": {
            a: {
                "nav-left": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-next": {
        "svg": {
            a: {
                "nav-next": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-prev": {
        "svg": {
            a: {
                "nav-prev": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-right": {
        "svg": {
            a: {
                "nav-right": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-up": {
        "svg": {
            a: {
                "nav-up": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-up-left": {
        "svg": {
            a: {
                "nav-up-left": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nav-up-right": {
        "svg": {
            a: {
                "nav-up-right": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<focus>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "nilled": {
        "xpath": {
            f: {
                "nilled": {d: [{d: {p: [{t: "Returns an xs:boolean indicating whether the argument node is \"nilled\". If the argument is not an element node, returns the empty sequence. If the argument is the empty sequence, returns the empty sequence."}]}, sp: {u: "/TR/xpath-functions/#func-nilled"}, pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:boolean?"}]}}
                ]}
            }
        }

    }, 
    "node-name": {
        "xpath": {
            f: {
                "node-name": {d: [{d: {p: [{t: "Returns an expanded-QName for node kinds that can have names. For other kinds of nodes it returns the empty sequence. If $arg is the empty sequence, the empty sequence is returned."}]}, sp: {u: "/TR/xpath-functions/#func-node-name"}, pa: {p: [{t: "$arg as node()?"}]}, r: {p: [{t: "xs:QName?"}]}}
                ]}
            }
        }

    }, 
    "nohref": {
        "html": {
            a: {
                "nohref": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "area"}]}, c: {p: [{t: "(nohref)"}]}, d: {p: [{t: "this region has no action"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-nohref"}}
                ]}
            }
        }

    }, 
    "normalize-space": {
        "xpath": {
            f: {
                "normalize-space": {d: [{d: {p: [{t: "Returns the value of $arg with whitespace normalized by stripping leading and trailing whitespace and replacing sequences of one or more than one whitespace character with a single space, #x20."}]}, sp: {u: "/TR/xpath-functions/#func-normalize-space"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "normalize-unicode": {
        "xpath": {
            f: {
                "normalize-unicode": {d: [{d: {p: [{t: "Returns the value of $arg normalized according to the normalization criteria for a normalization form identified by the value of $normalizationForm. The effective value of the $normalizationForm is computed by removing leading and trailing blanks, if present, and converting to upper case."}]}, sp: {u: "/TR/xpath-functions/#func-normalize-unicode"}, pa: {p: [{t: "$arg as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg as xs:string?,$normalizationForm as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "noscript": {
        "html": {
            e: {
                "noscript": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "address"}, {t: "blockquote"}, {t: "del"}, {t: "div"}, {t: "dl"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "ins"}, {t: "noscript"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "script"}, {t: "table"}, {t: "ul"}]}, d: {p: [{t: "alternate content container for non script-based rendering"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#edef-NOSCRIPT"}}
                ]}
            }
        }

    }, 
    "not": {
        "xpath": {
            f: {
                "not": {d: [{d: {p: [{t: "$arg is first reduced to an effective boolean value by applying the fn:boolean() function. Returns true if the effective boolean value is false, and false if the effective boolean value is true."}]}, sp: {u: "/TR/xpath-functions/#func-not"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "number": {
        "xpath": {
            f: {
                "number": {d: [{d: {p: [{t: "Returns the value indicated by $arg or, if $arg is not specified, the context item after atomization, converted to an xs:double"}]}, sp: {u: "/TR/xpath-functions/#func-number"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:double"}]}}, {pa: {p: [{t: "$arg as xs:anyAtomicType?"}]}, r: {p: [{t: "xs:double"}]}}
                ]}
            }
        }

    }, 
    "object": {
        "html": {
            e: {
                "object": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "archive"}, {t: "class"}, {t: "classid"}, {t: "codebase"}, {t: "codetype"}, {t: "data"}, {t: "declare"}, {t: "dir"}, {t: "height"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "standby"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "type"}, {t: "usemap"}, {t: "width"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "param"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "generic embedded object"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H27.html", t: "Providing text and non-text alternatives for object"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#NON-TEXT_ALTERNATIVES", t: "Provide a text equivalent for every non-text element."}, {u: "/TR/mobile-bp/#OBJECTS_OR_SCRIPT", t: "Do not rely on embedded objects or script."}]}, sp: {u: "/TR/html401/index/../struct/objects.html#edef-OBJECT"}}
                ]}
            }
        }

    }, 
    "observer": {
        "svg": {
            a: {
                "observer": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "<IDREF>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "offset": {
        "svg": {
            a: {
                "offset": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "stop"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "ol": {
        "html": {
            e: {
                "ol": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "li"}]}, d: {p: [{t: "ordered list"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H48.html", t: "Using ol, ul and dl for lists"}, {u: "/TR/WCAG20-TECHS/H50.html", t: "Using structural elements to group links"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-OL"}}
                ]}
            }
        }

    }, 
    "onblur": {
        "html": {
            a: {
                "onblur": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "area"}, {t: "button"}, {t: "input"}, {t: "label"}, {t: "select"}, {t: "textarea"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the element lost the focus"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onblur"}}
                ]}
            }
        }

    }, 
    "onchange": {
        "html": {
            a: {
                "onchange": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}, {t: "select"}, {t: "textarea"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the element value was changed"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onchange"}}
                ]}
            }
        }

    }, 
    "onclick": {
        "html": {
            a: {
                "onclick": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer button was clicked"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onclick"}}
                ]}
            }
        }

    }, 
    "ondblclick": {
        "html": {
            a: {
                "ondblclick": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer button was double clicked"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-ondblclick"}}
                ]}
            }
        }

    }, 
    "one-or-more": {
        "xpath": {
            f: {
                "one-or-more": {d: [{d: {p: [{t: "Returns $arg if it contains one or more items. Otherwise, raises an error [err:FORG0004]."}]}, sp: {u: "/TR/xpath-functions/#func-one-or-more"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "onfocus": {
        "html": {
            a: {
                "onfocus": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "area"}, {t: "button"}, {t: "input"}, {t: "label"}, {t: "select"}, {t: "textarea"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the element got the focus"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onfocus"}}
                ]}
            }
        }

    }, 
    "onkeydown": {
        "html": {
            a: {
                "onkeydown": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a key was pressed down"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onkeydown"}}
                ]}
            }
        }

    }, 
    "onkeypress": {
        "html": {
            a: {
                "onkeypress": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a key was pressed and released"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onkeypress"}}
                ]}
            }
        }

    }, 
    "onkeyup": {
        "html": {
            a: {
                "onkeyup": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a key was released"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onkeyup"}}
                ]}
            }
        }

    }, 
    "onload": {
        "html": {
            a: {
                "onload": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "body"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the document has been loaded"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onload"}}
                ]}
            }
        }

    }, 
    "onmousedown": {
        "html": {
            a: {
                "onmousedown": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer button was pressed down"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onmousedown"}}
                ]}
            }
        }

    }, 
    "onmousemove": {
        "html": {
            a: {
                "onmousemove": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer was moved within"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onmousemove"}}
                ]}
            }
        }

    }, 
    "onmouseout": {
        "html": {
            a: {
                "onmouseout": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer was moved away"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onmouseout"}}
                ]}
            }
        }

    }, 
    "onmouseover": {
        "html": {
            a: {
                "onmouseover": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer was moved onto"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onmouseover"}}
                ]}
            }
        }

    }, 
    "onmouseup": {
        "html": {
            a: {
                "onmouseup": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "bdo"}, ", ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", , , ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "a pointer button was released"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onmouseup"}}
                ]}
            }
        }

    }, 
    "onreset": {
        "html": {
            a: {
                "onreset": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the form was reset"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onreset"}}
                ]}
            }
        }

    }, 
    "onselect": {
        "html": {
            a: {
                "onselect": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}, {t: "textarea"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "some text was selected"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onselect"}}
                ]}
            }
        }

    }, 
    "onsubmit": {
        "html": {
            a: {
                "onsubmit": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "form"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the form was submitted"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onsubmit"}}
                ]}
            }
        }

    }, 
    "onunload": {
        "html": {
            a: {
                "onunload": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "body"}]}, c: {p: [{t: "%Script;"}]}, d: {p: [{t: "the document has been removed"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-onunload"}}
                ]}
            }
        }

    }, 
    "opacity": {
        "svg": {
            p: {
                "opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#groupOpacity"}}
                ]}
            }
        }

    }, 
    "optgroup": {
        "html": {
            e: {
                "optgroup": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "label"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "option"}]}, d: {p: [{t: "option group"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H85.html", t: "Using OPTGROUP to group OPTION elements inside a SELECT"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-OPTGROUP"}}
                ]}
            }
        }

    }, 
    "option": {
        "html": {
            e: {
                "option": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "label"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "selected"}, {t: "style"}, {t: "title"}, {t: "value"}, {t: "xml:lang"}]}, d: {p: [{t: "selectable choice"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H85.html", t: "Using OPTGROUP to group OPTION elements inside a SELECT"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-OPTION"}}
                ]}
            }
        }

    }, 
    "origin": {
        "svg": {
            a: {
                "origin": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animateMotion"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "orphans": {
        "css": {
            p: {
                "orphans": {d: [{v: {p: [{t: "<integer> | inherit"}]}, ap: {p: [{t: "block-level elements"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual, paged"}]}, sp: {u: "/TR/CSS2/page.html#propdef-orphans"}}
                ]}
            }
        }

    }, 
    "outline": {
        "css": {
            p: {
                "outline": {d: [{v: {p: [{t: ["[ ", {y: "p", i: "css", t: "outline-color"}, " || ", {y: "p", i: "css", t: "outline-style"}, " || ", {y: "p", i: "css", t: "outline-width"}, " ] | inherit"]}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, interactive"}]}, sp: {u: "/TR/CSS2/ui.html#propdef-outline"}}
                ]}
            }
        }

    }, 
    "outline-color": {
        "css": {
            p: {
                "outline-color": {d: [{v: {p: [{t: "<color> | invert | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, interactive"}]}, sp: {u: "/TR/CSS2/ui.html#propdef-outline-color"}}
                ]}
            }
        }

    }, 
    "outline-style": {
        "css": {
            p: {
                "outline-style": {d: [{v: {p: [{t: "<border-style> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, interactive"}]}, sp: {u: "/TR/CSS2/ui.html#propdef-outline-style"}}
                ]}
            }
        }

    }, 
    "outline-width": {
        "css": {
            p: {
                "outline-width": {d: [{v: {p: [{t: "<border-width> | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, interactive"}]}, sp: {u: "/TR/CSS2/ui.html#propdef-outline-width"}}
                ]}
            }
        }

    }, 
    "overflow": {
        "css": {
            p: {
                "overflow": {d: [{v: {p: [{t: "visible | hidden | scroll | auto | inherit"}]}, ap: {p: [{t: "non-replaced block-level elements, table cells, and inline-block elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visufx.html#propdef-overflow"}}
                ]}
            }
        }

    }, 
    "overlay": {
        "svg": {
            a: {
                "overlay": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "video"}]}, c: {p: [{t: "'none' | 'top'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#multimedia-VideoElementOverlayAttribute"}}
                ]}
            }
        }

    }, 
    "overline-position": {
        "svg": {
            a: {
                "overline-position": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "overline-thickness": {
        "svg": {
            a: {
                "overline-thickness": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "p": {
        "html": {
            e: {
                "p": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "paragraph"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-P"}}
                ]}
            }
        }

    }, 
    "padding": {
        "css": {
            p: {
                "padding": {d: [{v: {p: [{t: "<padding-width>{1,4} | inherit"}]}, ap: {p: [{t: "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-padding"}}
                ]}
            }
        }

    }, 
    "padding-bottom": {
        "css": {
            p: {
                "padding-bottom": {d: [{v: {p: [{t: "<padding-width> | inherit"}]}, ap: {p: [{t: "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-padding-bottom"}}
                ]}
            }
        }

    }, 
    "padding-left": {
        "css": {
            p: {
                "padding-left": {d: [{v: {p: [{t: "<padding-width> | inherit"}]}, ap: {p: [{t: "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-padding-left"}}
                ]}
            }
        }

    }, 
    "padding-right": {
        "css": {
            p: {
                "padding-right": {d: [{v: {p: [{t: "<padding-width> | inherit"}]}, ap: {p: [{t: "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-padding-right"}}
                ]}
            }
        }

    }, 
    "padding-top": {
        "css": {
            p: {
                "padding-top": {d: [{v: {p: [{t: "<padding-width> | inherit"}]}, ap: {p: [{t: "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/box.html#propdef-padding-top"}}
                ]}
            }
        }

    }, 
    "page-break-after": {
        "css": {
            p: {
                "page-break-after": {d: [{v: {p: [{t: "auto | always | avoid | left | right | inherit"}]}, ap: {p: [{t: "block-level elements (but see text)"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, paged"}]}, sp: {u: "/TR/CSS2/page.html#propdef-page-break-after"}}
                ]}
            }
        }

    }, 
    "page-break-before": {
        "css": {
            p: {
                "page-break-before": {d: [{v: {p: [{t: "auto | always | avoid | left | right | inherit"}]}, ap: {p: [{t: "block-level elements (but see text)"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, paged"}]}, sp: {u: "/TR/CSS2/page.html#propdef-page-break-before"}}
                ]}
            }
        }

    }, 
    "page-break-inside": {
        "css": {
            p: {
                "page-break-inside": {d: [{v: {p: [{t: "avoid | auto | inherit"}]}, ap: {p: [{t: "block-level elements (but see text)"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual, paged"}]}, sp: {u: "/TR/CSS2/page.html#propdef-page-break-inside"}}
                ]}
            }
        }

    }, 
    "panose-1": {
        "svg": {
            a: {
                "panose-1": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "param": {
        "html": {
            e: {
                "param": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "id"}, {t: "name"}, {t: "type"}, {t: "value"}, {t: "valuetype"}]}, d: {p: [{t: "named property value"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#edef-PARAM"}}
                ]}
            }
        }

    }, 
    "path": {
        "svg": {
            e: {
                "path": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "d"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "pathLength"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/paths.html#PathElement"}}
                ]}
            }, 
            a: {
                "path": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animateMotion"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "pathLength": {
        "svg": {
            a: {
                "pathLength": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "path"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "pause": {
        "css": {
            p: {
                "pause": {d: [{v: {p: [{t: "[ [<time> | <percentage>]{1,2} ] | inherit"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see descriptions of 'pause-before' and 'pause-after'"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-pause"}}
                ]}
            }
        }

    }, 
    "pause-after": {
        "css": {
            p: {
                "pause-after": {d: [{v: {p: [{t: "<time> | <percentage> | inherit"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see prose"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-pause-after"}}
                ]}
            }
        }

    }, 
    "pause-before": {
        "css": {
            p: {
                "pause-before": {d: [{v: {p: [{t: "<time> | <percentage> | inherit"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "see prose"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-pause-before"}}
                ]}
            }
        }

    }, 
    "phase": {
        "svg": {
            a: {
                "phase": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "'default' | 'capture'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "pitch": {
        "css": {
            p: {
                "pitch": {d: [{v: {p: [{t: "<frequency> | x-low | low | medium | high | x-high | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-pitch"}}
                ]}
            }
        }

    }, 
    "pitch-range": {
        "css": {
            p: {
                "pitch-range": {d: [{v: {p: [{t: "<number> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-pitch-range"}}
                ]}
            }
        }

    }, 
    "play-during": {
        "css": {
            p: {
                "play-during": {d: [{v: {p: [{t: "<uri> [ mix || repeat ]? | auto | none | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-play-during"}}
                ]}
            }
        }

    }, 
    "playbackOrder": {
        "svg": {
            a: {
                "playbackOrder": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'all' | 'forwardOnly'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "pointer-events": {
        "svg": {
            p: {
                "pointer-events": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/interact.html#PointerEventsProperty"}}
                ]}
            }
        }

    }, 
    "points": {
        "svg": {
            a: {
                "points": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "polygon"}, {t: "polyline"}]}, c: {p: [{t: "<points-data>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "polygon": {
        "svg": {
            e: {
                "polygon": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "points"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolygonElement"}}
                ]}
            }
        }

    }, 
    "polyline": {
        "svg": {
            e: {
                "polyline": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "points"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#PolylineElement"}}
                ]}
            }
        }

    }, 
    "position": {
        "css": {
            p: {
                "position": {d: [{v: {p: [{t: "static | relative | absolute | fixed | inherit"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-position"}}
                ]}
            }
        }
, 
        "xpath": {
            f: {
                "position": {d: [{d: {p: [{t: "Returns the context position from the dynamic context. (See Section C.2 Dynamic Context ComponentsXP.) If the context item is undefined, an error is raised: [err:XPDY0002]XP."}]}, sp: {u: "/TR/xpath-functions/#func-position"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:integer"}]}}
                ]}
            }
        }

    }, 
    "pre": {
        "html": {
            e: {
                "pre": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "preformatted text"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H51.html", t: "Using table markup to present tabular information"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-PRE"}}
                ]}
            }
        }

    }, 
    "prefetch": {
        "svg": {
            e: {
                "prefetch": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "bandwidth"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "mediaCharacterEncoding"}, {t: "mediaContentEncodings"}, {t: "mediaSize"}, {t: "mediaTime"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#PrefetchElement"}}
                ]}
            }
        }

    }, 
    "prefix-from-QName": {
        "xpath": {
            f: {
                "prefix-from-QName": {d: [{d: {p: [{t: "Returns an xs:NCName representing the prefix of $arg. The empty sequence is returned if $arg is the empty sequence or if the value of $arg contains no prefix."}]}, sp: {u: "/TR/xpath-functions/#func-prefix-from-QName"}, pa: {p: [{t: "$arg as xs:QName?"}]}, r: {p: [{t: "xs:NCName?"}]}}
                ]}
            }
        }

    }, 
    "preserveAspectRatio": {
        "svg": {
            a: {
                "preserveAspectRatio": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "image"}, {t: "svg"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "profile": {
        "html": {
            a: {
                "profile": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "head"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "named dictionary of meta info"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-profile"}}
                ]}
            }
        }

    }, 
    "propagate": {
        "svg": {
            a: {
                "propagate": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "'continue' | 'stop'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "property": {
        "svg": {
            a: {
                "property": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "q": {
        "html": {
            e: {
                "q": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "cite"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "short inline quotation"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-Q"}}
                ]}
            }
        }

    }, 
    "quotes": {
        "css": {
            p: {
                "quotes": {d: [{v: {p: [{t: "[<string> <string>]+ | none | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/generate.html#propdef-quotes"}}
                ]}
            }
        }

    }, 
    "r": {
        "svg": {
            a: {
                "r": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "circle"}, {t: "radialGradient"}]}, c: {p: [{t: "<length>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "radialGradient": {
        "svg": {
            e: {
                "radialGradient": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "cx"}, {t: "cy"}, {t: "datatype"}, {t: "gradientUnits"}, {t: "id"}, {t: "property"}, {t: "r"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "stop"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/painting.html#RadialGradientElement"}}
                ]}
            }
        }

    }, 
    "readonly": {
        "html": {
            a: {
                "readonly": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "textarea"}]}, c: {p: [{t: "(readonly)"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-readonly"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "(readonly)"}]}, d: {p: [{t: "for text and passwd"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-readonly"}}
                ]}
            }
        }

    }, 
    "rect": {
        "svg": {
            e: {
                "rect": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "rx"}, {t: "ry"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/shapes.html#RectElement"}}
                ]}
            }
        }

    }, 
    "rel": {
        "svg": {
            a: {
                "rel": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "rel": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "link"}]}, c: {p: [{t: "%LinkTypes;"}]}, d: {p: [{t: "forward link types"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H59.html", t: "Using the link element and navigation tools"}, {u: "/TR/WCAG20-TECHS/H60.html", t: "Using the link element to link to a glossary"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-rel"}}
                ]}
            }
        }

    }, 
    "remove": {
        "xpath": {
            f: {
                "remove": {d: [{d: {p: [{t: "Returns a new sequence constructed from the value of $target with the item at the position specified by the value of $position removed."}]}, sp: {u: "/TR/xpath-functions/#func-remove"}, pa: {p: [{t: "$target as item()*, $position as xs:integer"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "repeatCount": {
        "svg": {
            a: {
                "repeatCount": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "repeatDur": {
        "svg": {
            a: {
                "repeatDur": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "replace": {
        "xpath": {
            f: {
                "replace": {d: [{d: {p: [{t: "The function returns the xs:string that is obtained by replacing each non-overlapping substring of $input that matches the given $pattern with an occurrence of the $replacement string."}]}, sp: {u: "/TR/xpath-functions/#func-replace"}, pa: {p: [{t: "$input as xs:string?,$pattern as xs:string,$replacement as xs:string"}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$input as xs:string?,$pattern as xs:string,$replacement as xs:string,$flags as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "requiredExtensions": {
        "svg": {
            a: {
                "requiredExtensions": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "metadata"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "set"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-IRIs>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "requiredFeatures": {
        "svg": {
            a: {
                "requiredFeatures": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "metadata"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "set"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-IRIs>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "requiredFonts": {
        "svg": {
            a: {
                "requiredFonts": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "metadata"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "set"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-family-names>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "requiredFormats": {
        "svg": {
            a: {
                "requiredFormats": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "metadata"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "set"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-content-types>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "resolve-QName": {
        "xpath": {
            f: {
                "resolve-QName": {d: [{d: {p: [{t: "Returns an xs:QName value (that is, an expanded-QName) by taking an xs:string that has the lexical form of an xs:QName (a string in the form \"prefix:local-name\" or \"local-name\") and resolving it using the in-scope namespaces for a given element."}]}, sp: {u: "/TR/xpath-functions/#func-resolve-QName"}, pa: {p: [{t: "$qname as xs:string?, $element as element()"}]}, r: {p: [{t: "xs:QName?"}]}}
                ]}
            }
        }

    }, 
    "resolve-uri": {
        "xpath": {
            f: {
                "resolve-uri": {d: [{d: {p: [{t: "The purpose of this function is to enable a relative URI to be resolved against an absolute URI."}]}, sp: {u: "/TR/xpath-functions/#func-resolve-uri"}, pa: {p: [{t: "$relative as xs:string?"}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "resource": {
        "svg": {
            a: {
                "resource": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<string>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "restart": {
        "svg": {
            a: {
                "restart": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "set"}, {t: "video"}]}, c: {p: [{t: "'always' | 'never' | 'whenNotActive'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "rev": {
        "svg": {
            a: {
                "rev": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "rev": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "link"}]}, c: {p: [{t: "%LinkTypes;"}]}, d: {p: [{t: "reverse link types"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-rev"}}
                ]}
            }
        }

    }, 
    "reverse": {
        "xpath": {
            f: {
                "reverse": {d: [{d: {p: [{t: "Reverses the order of items in a sequence. If $arg is the empty sequence, the empty sequence is returned."}]}, sp: {u: "/TR/xpath-functions/#func-reverse"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "richness": {
        "css": {
            p: {
                "richness": {d: [{v: {p: [{t: "<number> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-richness"}}
                ]}
            }
        }

    }, 
    "right": {
        "css": {
            p: {
                "right": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "positioned elements"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-right"}}
                ]}
            }
        }

    }, 
    "role": {
        "svg": {
            a: {
                "role": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "root": {
        "xpath": {
            f: {
                "root": {d: [{d: {p: [{t: "Returns the root of the tree to which $arg belongs. This will usually, but not necessarily, be a document node."}]}, sp: {u: "/TR/xpath-functions/#func-root"}, pa: {p: [{t: ""}]}, r: {p: [{t: "node()"}]}}
                ]}
            }
        }

    }, 
    "rotate": {
        "svg": {
            a: {
                "rotate": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animateMotion"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "text"}]}, c: {p: [{t: "<list-of-numbers>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#text-TextElementRotateAttribute"}}
                ]}
            }
        }

    }, 
    "round": {
        "xpath": {
            f: {
                "round": {d: [{d: {p: [{t: "Returns the number with no fractional part that is closest to the argument. If there are two such numbers, then the one that is closest to positive infinity is returned. If type of $arg is one of the four numeric types xs:float, xs:double, xs:decimal or xs:integer the type of the result is the same as the type of $arg. If the type of $arg is a type derived from one of the numeric types, the result is an instance of the base numeric type."}]}, sp: {u: "/TR/xpath-functions/#func-round"}, pa: {p: [{t: "$arg as numeric?"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "round-half-to-even": {
        "xpath": {
            f: {
                "round-half-to-even": {d: [{d: {p: [{t: "The value returned is the nearest (that is, numerically closest) value to $arg that is a multiple of ten to the power of minus $precision. If two such values are equally near (e.g. if the fractional part in $arg is exactly .500...), the function returns the one whose least significant digit is even."}]}, sp: {u: "/TR/xpath-functions/#func-round-half-to-even"}, pa: {p: [{t: "$arg as numeric?"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "rows": {
        "html": {
            a: {
                "rows": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "textarea"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-rows-TEXTAREA"}}
                ]}
            }
        }

    }, 
    "rowspan": {
        "html": {
            a: {
                "rowspan": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "number of rows spanned by cell"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-rowspan"}}
                ]}
            }
        }

    }, 
    "rules": {
        "html": {
            a: {
                "rules": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%TRules;"}]}, d: {p: [{t: "rulings between rows and cols"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-rules"}}
                ]}
            }
        }

    }, 
    "rx": {
        "svg": {
            a: {
                "rx": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "ellipse"}, {t: "rect"}]}, c: {p: [{t: "<length>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "ry": {
        "svg": {
            a: {
                "ry": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "ellipse"}, {t: "rect"}]}, c: {p: [{t: "<length>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "samp": {
        "html": {
            e: {
                "samp": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "sample program output, scripts, etc."}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-SAMP"}}
                ]}
            }
        }

    }, 
    "scheme": {
        "html": {
            a: {
                "scheme": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "meta"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "select form of content"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-scheme"}}
                ]}
            }
        }

    }, 
    "scope": {
        "html": {
            a: {
                "scope": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, c: {p: [{t: "%Scope;"}]}, d: {p: [{t: "scope covered by header cells"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H63.html", t: "Using the scope attribute to associate header cells and data cells in data tables"}, {u: "/TR/WCAG20-TECHS/H43.html", t: "Using id and headers attributes to associate data cells with header cells in data tables"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-scope"}}
                ]}
            }
        }

    }, 
    "script": {
        "svg": {
            e: {
                "script": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "type"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["<text>, ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/script.html#ScriptElement"}}
                ]}
            }
        }
, 
        "html": {
            e: {
                "script": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "charset"}, {t: "defer"}, {t: "id"}, {t: "src"}, {t: "type"}]}, d: {p: [{t: "script statements"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#edef-SCRIPT"}}
                ]}
            }
        }

    }, 
    "seconds-from-dateTime": {
        "xpath": {
            f: {
                "seconds-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:decimal value greater than or equal to zero and less than 60, representing the seconds and fractional seconds in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-seconds-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:decimal?"}]}}
                ]}
            }
        }

    }, 
    "seconds-from-duration": {
        "xpath": {
            f: {
                "seconds-from-duration": {d: [{d: {p: [{t: "Returns an xs:decimal representing the seconds component in the value of $arg. The result is obtained by casting $arg to an xs:dayTimeDuration (see 17.1.4 Casting to duration types) and then computing the seconds component as described in 10.3.2.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-seconds-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:decimal?"}]}}
                ]}
            }
        }

    }, 
    "seconds-from-time": {
        "xpath": {
            f: {
                "seconds-from-time": {d: [{d: {p: [{t: "Returns an xs:decimal value greater than or equal to zero and less than 60, representing the seconds and fractional seconds in the localized value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-seconds-from-time"}, pa: {p: [{t: "$arg as xs:time?"}]}, r: {p: [{t: "xs:decimal?"}]}}
                ]}
            }
        }

    }, 
    "select": {
        "html": {
            e: {
                "select": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "lang"}, {t: "multiple"}, {t: "name"}, {t: "onblur"}, {t: "onchange"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "size"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "optgroup"}, {t: "option"}]}, d: {p: [{t: "option selector"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H84.html", t: "Using a button with a select element to perform an action"}, {u: "/TR/WCAG20-TECHS/H85.html", t: "Using OPTGROUP to group OPTION elements inside a SELECT"}, {u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#PROVIDE_DEFAULTS", t: "Provide pre-selected default values where possible."}, {u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-SELECT"}}
                ]}
            }
        }

    }, 
    "selected": {
        "html": {
            a: {
                "selected": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "option"}]}, c: {p: [{t: "(selected)"}]}, d: {p: [{t: " "}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-selected"}}
                ]}
            }
        }

    }, 
    "selectors": {
        "css": {
            se: {
                "selectors": {d: [{pt: {y: "se", i: "css", p: [{t: "*"}]}, n: {p: [{t: "Universal selector"}]}, d: {p: [{t: "Matches any element"}]}}, {pt: {p: [{t: "E"}]}, n: {p: [{t: "Type selector"}]}, d: {p: [{t: "Matches any E element (i.e., an element of type E)"}]}}, {pt: {p: [{t: "E F"}]}, n: {p: [{t: "Descendant selector"}]}, d: {p: [{t: "Matches any F element that is a descendant of an E element"}]}}, {pt: {p: [{t: "E > F"}]}, n: {p: [{t: "Child selector"}]}, d: {p: [{t: "Matches any F element that is a child of an E element"}]}}, {pt: {p: [{t: "E + F"}]}, n: {p: [{t: "Adjacent selector"}]}, d: {p: [{t: "Matches any F element immediately preceded by a sibling element E"}]}}, {pt: {p: [{t: "#myid"}]}, n: {p: [{t: "ID selector"}]}, d: {p: [{t: "Matches any element with ID equal to \"myid\"."}]}}, {pt: {p: [{t: ".warning"}]}, n: {p: [{t: "Class selector"}]}, d: {p: [{t: ["In HTML, matches any element whose ", {y: "a", i: "html", t: "class"}, " attribute is a list of space-separated values, one of which is exactly equal to \"warning\""]}]}}, {pt: {p: [{t: "E[foo]"}]}, n: {p: [{t: "Attribute selector"}]}, d: {p: [{t: "Matches any E element with the \"foo\" attribute set (whatever the value)"}]}}, {pt: {p: [{t: "E[foo=\"warning\"]"}]}, n: {p: [{t: "Attribute selector"}]}, d: {p: [{t: "Matches any E element whose \"foo\" attribute value is exactly equal to \"warning\""}]}}, {pt: {p: [{t: "E[foo~=\"warning\"]"}]}, n: {p: [{t: "Attribute selector"}]}, d: {p: [{t: "Matches any E element whose \"foo\" attribute value is a list of space-separated values, one of which is exactly equal to \"warning\""}]}}, {pt: {p: [{t: "E[lang|=en]"}]}, n: {p: [{t: "Attribute selector"}]}, d: {p: [{t: "Matches any E element whose \"lang\" attribute has a hyphen-separated list of values beginning (from the left) with \"en\""}]}}, {pt: {p: [{t: ["E", {y: "se", i: "css", t: ":first-child"}, "                "]}]}}, {pt: {p: [{t: ["E", {y: "se", i: "css", t: ":link"}, "                "]}]}}, {pt: {p: [{t: ["E", {y: "se", i: "css", t: ":visited"}, "                "]}]}}, {pt: {p: [{t: ["E", {y: "se", i: "css", t: ":active"}, " | E", {y: "se", i: "css", t: ":hover"}, " | E", {y: "se", i: "css", t: ":focus"}, "                "]}]}}, {pt: {p: [{t: ["E", {y: "se", i: "css", t: ":lang()"}, "                "]}]}}
                ]}
            }
        }

    }, 
    "set": {
        "svg": {
            e: {
                "set": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "attributeName"}, {t: "attributeType"}, {t: "begin"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "fill"}, {t: "id"}, {t: "max"}, {t: "min"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "to"}, {t: "typeof"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/animate.html#SetElement"}}
                ]}
            }
        }

    }, 
    "shape": {
        "html": {
            a: {
                "shape": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "area"}]}, c: {p: [{t: "%Shape;"}]}, d: {p: [{t: "controls interpretation of coords"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-shape"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "%Shape;"}]}, d: {p: [{t: "for use with client-side image maps"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-shape"}}
                ]}
            }
        }

    }, 
    "shape-rendering": {
        "svg": {
            p: {
                "shape-rendering": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#ShapeRenderingProperty"}}
                ]}
            }
        }

    }, 
    "size": {
        "html": {
            a: {
                "size": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "specific to each type of field"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-size-INPUT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "select"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "rows visible"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-size-SELECT"}}
                ]}
            }
        }

    }, 
    "slope": {
        "svg": {
            a: {
                "slope": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "small": {
        "html": {
            e: {
                "small": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "small text style"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-SMALL"}}
                ]}
            }
        }

    }, 
    "snapshotTime": {
        "svg": {
            a: {
                "snapshotTime": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'none' | <Clock-value>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "solid-color": {
        "svg": {
            p: {
                "solid-color": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<color> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#SolidColorProperty"}}
                ]}
            }
        }

    }, 
    "solid-opacity": {
        "svg": {
            p: {
                "solid-opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#SolidOpacityProperty"}}
                ]}
            }
        }

    }, 
    "solidColor": {
        "svg": {
            e: {
                "solidColor": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/painting.html#SolidColorElement"}}
                ]}
            }
        }

    }, 
    "span": {
        "html": {
            e: {
                "span": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "generic language/style container"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H56.html", t: "Using the dir attribute on an inline element to resolve problems with nested directional runs"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-SPAN"}}
                ]}
            }, 
            a: {
                "span": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "col"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "COL attributes affect N columns"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-span-COL"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "colgroup"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "default number of columns in group"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-span-COLGROUP"}}
                ]}
            }
        }

    }, 
    "speak": {
        "css": {
            p: {
                "speak": {d: [{v: {p: [{t: "normal | none | spell-out | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-speak"}}
                ]}
            }
        }

    }, 
    "speak-header": {
        "css": {
            p: {
                "speak-header": {d: [{v: {p: [{t: "once | always | inherit"}]}, ap: {p: [{t: "elements that have table header information"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-speak-header"}}
                ]}
            }
        }

    }, 
    "speak-numeral": {
        "css": {
            p: {
                "speak-numeral": {d: [{v: {p: [{t: "digits | continuous | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-speak-numeral"}}
                ]}
            }
        }

    }, 
    "speak-punctuation": {
        "css": {
            p: {
                "speak-punctuation": {d: [{v: {p: [{t: "code | none | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-speak-punctuation"}}
                ]}
            }
        }

    }, 
    "speech-rate": {
        "css": {
            p: {
                "speech-rate": {d: [{v: {p: [{t: "<number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-speech-rate"}}
                ]}
            }
        }

    }, 
    "src": {
        "html": {
            a: {
                "src": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "script"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "URI for an external script"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-src-SCRIPT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "for fields with images"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-src"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "img"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "URI of image to embed"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-src-IMG"}}
                ]}
            }
        }

    }, 
    "standby": {
        "html": {
            a: {
                "standby": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "message to show while loading"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-standby"}}
                ]}
            }
        }

    }, 
    "starts-with": {
        "xpath": {
            f: {
                "starts-with": {d: [{d: {p: [{t: "Returns an xs:boolean indicating whether or not the value of $arg1 starts with a sequence of collation units that provides a minimal match to the collation units of $arg2 according to the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-starts-with"}, pa: {p: [{t: "$arg1 as xs:string?, $arg2 as xs:string?"}]}, r: {p: [{t: "xs:boolean"}]}}, {pa: {p: [{t: "$arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "static-base-uri": {
        "xpath": {
            f: {
                "static-base-uri": {d: [{d: {p: [{t: "Returns the value of the Base URI property from the static context. If the Base URI property is undefined, the empty sequence is returned. Components of the static context are discussed in Section C.1 Static Context ComponentsXP ."}]}, sp: {u: "/TR/xpath-functions/#func-static-base-uri"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:anyURI?"}]}}
                ]}
            }
        }

    }, 
    "stemh": {
        "svg": {
            a: {
                "stemh": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "stemv": {
        "svg": {
            a: {
                "stemv": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "stop": {
        "svg": {
            e: {
                "stop": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "offset"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/painting.html#StopElement"}}
                ]}
            }
        }

    }, 
    "stop-color": {
        "svg": {
            p: {
                "stop-color": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<color> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StopColorProperty"}}
                ]}
            }
        }

    }, 
    "stop-opacity": {
        "svg": {
            p: {
                "stop-opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StopOpacityProperty"}}
                ]}
            }
        }

    }, 
    "stress": {
        "css": {
            p: {
                "stress": {d: [{v: {p: [{t: "<number> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-stress"}}
                ]}
            }
        }

    }, 
    "strikethrough-position": {
        "svg": {
            a: {
                "strikethrough-position": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "strikethrough-thickness": {
        "svg": {
            a: {
                "strikethrough-thickness": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "string": {
        "xpath": {
            f: {
                "string": {d: [{d: {p: [{t: "Returns the value of $arg represented as a xs:string. If no argument is supplied, the context item (.) is used as the default argument. The behavior of the function if the argument is omitted is exactly the same as if the context item had been passed as the argument."}]}, sp: {u: "/TR/xpath-functions/#func-string"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg as item()?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "string-join": {
        "xpath": {
            f: {
                "string-join": {d: [{d: {p: [{t: "Returns a xs:string created by concatenating the members of the $arg1 sequence using $arg2 as a separator. If the value of $arg2 is the zero-length string, then the members of $arg1 are concatenated without a separator."}]}, sp: {u: "/TR/xpath-functions/#func-string-join"}, pa: {p: [{t: "$arg1 as xs:string*, $arg2 as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "string-length": {
        "xpath": {
            f: {
                "string-length": {d: [{d: {p: [{t: "Returns an xs:integer equal to the length in characters of the value of $arg."}]}, sp: {u: "/TR/xpath-functions/#func-string-length"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:integer"}]}}
                ]}
            }
        }

    }, 
    "string-to-codepoints": {
        "xpath": {
            f: {
                "string-to-codepoints": {d: [{d: {p: [{t: "Returns the sequence of [The Unicode Standard] code points that constitute an xs:string. If $arg is a zero-length string or the empty sequence, the empty sequence is returned."}]}, sp: {u: "/TR/xpath-functions/#func-string-to-codepoints"}, pa: {p: [{t: "$arg as xs:string?"}]}, r: {p: [{t: "xs:integer*"}]}}
                ]}
            }
        }

    }, 
    "stroke": {
        "svg": {
            p: {
                "stroke": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<paint> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeProperty"}}
                ]}
            }
        }

    }, 
    "stroke-dasharray": {
        "svg": {
            p: {
                "stroke-dasharray": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'none' | <list-of-lengths> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeDasharrayProperty"}}
                ]}
            }
        }

    }, 
    "stroke-dashoffset": {
        "svg": {
            p: {
                "stroke-dashoffset": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<length> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeDashoffsetProperty"}}
                ]}
            }
        }

    }, 
    "stroke-linecap": {
        "svg": {
            p: {
                "stroke-linecap": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'butt' | 'round' | 'square' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeLinecapProperty"}}
                ]}
            }
        }

    }, 
    "stroke-linejoin": {
        "svg": {
            p: {
                "stroke-linejoin": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'miter' | 'round' | 'bevel' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeLinejoinProperty"}}
                ]}
            }
        }

    }, 
    "stroke-miterlimit": {
        "svg": {
            p: {
                "stroke-miterlimit": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeMiterlimitProperty"}}
                ]}
            }
        }

    }, 
    "stroke-opacity": {
        "svg": {
            p: {
                "stroke-opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeOpacityProperty"}}
                ]}
            }
        }

    }, 
    "stroke-width": {
        "svg": {
            p: {
                "stroke-width": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<length> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#StrokeWidthProperty"}}
                ]}
            }
        }

    }, 
    "strong": {
        "html": {
            e: {
                "strong": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "strong emphasis"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-STRONG"}}
                ]}
            }
        }

    }, 
    "style": {
        "html": {
            e: {
                "style": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "dir"}, {t: "id"}, {t: "lang"}, {t: "media"}, {t: "title"}, {t: "type"}, {t: "xml:lang"}]}, d: {p: [{t: "style info"}]}, sp: {u: "/TR/html401/index/../present/styles.html#edef-STYLE"}}
                ]}
            }, 
            a: {
                "style": {d: [{el: {l: "inline", p: [{t: ["All elements but ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "style"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%StyleSheet;"}]}, d: {p: [{t: "associated style info"}]}, sp: {u: "/TR/html401/index/../present/styles.html#adef-style"}}
                ]}
            }
        }

    }, 
    "sub": {
        "html": {
            e: {
                "sub": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "subscript"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-SUB"}}
                ]}
            }
        }

    }, 
    "subsequence": {
        "xpath": {
            f: {
                "subsequence": {d: [{d: {p: [{t: "Returns the contiguous sequence of items in the value of $sourceSeq beginning at the position indicated by the value of $startingLoc and continuing for the number of items indicated by the value of $length."}]}, sp: {u: "/TR/xpath-functions/#func-subsequence"}, pa: {p: [{t: "$sourceSeq as item()*, $startingLoc as xs:double"}]}, r: {p: [{t: ""}]}}, {pa: {p: [{t: "$sourceSeq as item()*,$startingLoc as xs:double,$length as xs:double"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "substring": {
        "xpath": {
            f: {
                "substring": {d: [{d: {p: [{t: "Returns the portion of the value of $sourceString beginning at the position indicated by the value of $startingLoc and continuing for the number of characters indicated by the value of $length. The characters returned do not extend beyond $sourceString. If $startingLoc is zero or negative, only those characters in positions greater than zero are returned."}]}, sp: {u: "/TR/xpath-functions/#func-substring"}, pa: {p: [{t: "$sourceString as xs:string?,$startingLoc as xs:double"}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$sourceString as xs:string?,$startingLoc as xs:double,$length as xs:double"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "substring-after": {
        "xpath": {
            f: {
                "substring-after": {d: [{d: {p: [{t: "Returns the substring of the value of $arg1 that follows in the value of $arg1 the first occurrence of a sequence of collation units that provides a minimal match to the collation units of $arg2 according to the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-substring-after"}, pa: {p: [{t: "$arg1 as xs:string?, $arg2 as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "substring-before": {
        "xpath": {
            f: {
                "substring-before": {d: [{d: {p: [{t: "Returns the substring of the value of $arg1 that precedes in the value of $arg1 the first occurrence of a sequence of collation units that provides a minimal match to the collation units of $arg2 according to the collation that is used."}]}, sp: {u: "/TR/xpath-functions/#func-substring-before"}, pa: {p: [{t: "$arg1 as xs:string?, $arg2 as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}, {pa: {p: [{t: "$arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "sum": {
        "xpath": {
            f: {
                "sum": {d: [{d: {p: [{t: "Returns a value obtained by adding together the values in $arg. If $zero is not specified, then the value returned for an empty sequence is the xs:integer value 0. If $zero is specified, then the value returned for an empty sequence is $zero."}]}, sp: {u: "/TR/xpath-functions/#func-sum"}, pa: {p: [{t: "$arg as xs:anyAtomicType*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "summary": {
        "html": {
            a: {
                "summary": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "purpose/structure for speech output"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H73.html", t: "Using the summary attribute of the table element to give an overview of data tables"}, {u: "/TR/WCAG20-TECHS/H39.html", t: "Using caption elements to associate data table captions with data tables"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-summary"}}
                ]}
            }
        }

    }, 
    "sup": {
        "html": {
            e: {
                "sup": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "superscript"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-SUP"}}
                ]}
            }
        }

    }, 
    "svg": {
        "svg": {
            e: {
                "svg": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "baseProfile"}, {t: "class"}, {t: "content"}, {t: "contentScriptType"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "playbackOrder"}, {t: "preserveAspectRatio"}, {t: "property"}, {t: "rel"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "snapshotTime"}, {t: "syncBehaviorDefault"}, {t: "syncToleranceDefault"}, {t: "timelineBegin"}, {t: "typeof"}, {t: "version"}, {t: "viewBox"}, {t: "width"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "zoomAndPan"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "a"}, ", ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "animation"}, ", ", {y: "e", i: "svg", t: "audio"}, ", ", {y: "e", i: "svg", t: "circle"}, ", ", {y: "e", i: "svg", t: "defs"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "ellipse"}, ", ", {y: "e", i: "svg", t: "font"}, ", ", {y: "e", i: "svg", t: "font-face"}, ", ", {y: "e", i: "svg", t: "foreignObject"}, ", ", {y: "e", i: "svg", t: "g"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "image"}, ", ", {y: "e", i: "svg", t: "line"}, ", ", {y: "e", i: "svg", t: "linearGradient"}, ", ", {y: "e", i: "svg", t: "listener"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "path"}, ", ", {y: "e", i: "svg", t: "polygon"}, ", ", {y: "e", i: "svg", t: "polyline"}, ", ", {y: "e", i: "svg", t: "prefetch"}, ", ", {y: "e", i: "svg", t: "radialGradient"}, ", ", {y: "e", i: "svg", t: "rect"}, ", ", {y: "e", i: "svg", t: "script"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "solidColor"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "text"}, ", ", {y: "e", i: "svg", t: "textArea"}, ", ", {y: "e", i: "svg", t: "title"}, ", ", {y: "e", i: "svg", t: "use"}, ", ", {y: "e", i: "svg", t: "video"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#SVGElement"}}
                ]}
            }
        }

    }, 
    "switch": {
        "svg": {
            e: {
                "switch": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: "The 'switch' element may contain any element that its parent may contain.      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#SwitchElement"}}
                ]}
            }
        }

    }, 
    "syncBehavior": {
        "svg": {
            a: {
                "syncBehavior": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "audio"}, {t: "video"}]}, c: {p: [{t: "'canSlip' | 'locked' | 'independent' | 'default'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "syncBehaviorDefault": {
        "svg": {
            a: {
                "syncBehaviorDefault": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'canSlip' | 'locked' | 'independent' | 'inherit'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "syncMaster": {
        "svg": {
            a: {
                "syncMaster": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "audio"}, {t: "video"}]}, c: {p: [{t: "<boolean>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "syncTolerance": {
        "svg": {
            a: {
                "syncTolerance": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "audio"}, {t: "video"}]}, c: {p: [{t: "<Clock-value> | 'default'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "syncToleranceDefault": {
        "svg": {
            a: {
                "syncToleranceDefault": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "<Clock-value> | 'inherit'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "systemLanguage": {
        "svg": {
            a: {
                "systemLanguage": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "metadata"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "set"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-language-ids>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "tabindex": {
        "html": {
            a: {
                "tabindex": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "area"}, {t: "button"}, {t: "input"}, {t: "object"}, {t: "select"}, {t: "textarea"}]}, c: {p: [{t: "NUMBER"}]}, d: {p: [{t: "position in tabbing order"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H4.html", t: "Creating a logical tab order through links, form controls, and objects"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#TAB_ORDER", t: "Create a logical order through links, form controls and objects."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-tabindex"}}
                ]}
            }
        }

    }, 
    "table": {
        "html": {
            e: {
                "table": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "border"}, {t: "cellpadding"}, {t: "cellspacing"}, {t: "class"}, {t: "dir"}, {t: "frame"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "rules"}, {t: "style"}, {t: "summary"}, {t: "title"}, {t: "width"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "caption"}, {t: "col"}, {t: "colgroup"}, {t: "tbody"}, {t: "tfoot"}, {t: "thead"}, {t: "tr"}]}, d: {p: [{t: " "}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H73.html", t: "Using the summary attribute of the table element to give an overview of data tables"}, {u: "/TR/WCAG20-TECHS/H39.html", t: "Using caption elements to associate data table captions with data tables"}, {u: "/TR/WCAG20-TECHS/H51.html", t: "Using table markup to present tabular information"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#TABLES_SUPPORT", t: "Do not use tables unless the device is known to support them."}, {u: "/TR/mobile-bp/#TABLES_NESTED", t: "Do not use nested tables."}, {u: "/TR/mobile-bp/#TABLES_LAYOUT", t: "Do not use tables for layout."}, {u: "/TR/mobile-bp/#TABLES_ALTERNATIVES", t: "Where possible, use an alternative to tabular presentation."}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TABLE"}}
                ]}
            }
        }

    }, 
    "table-layout": {
        "css": {
            p: {
                "table-layout": {d: [{v: {p: [{t: "auto | fixed | inherit"}]}, ap: {p: [{t: "'table' and 'inline-table' elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/tables.html#propdef-table-layout"}}
                ]}
            }
        }

    }, 
    "target": {
        "svg": {
            a: {
                "target": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "'_replace' | '_self' | '_parent' | '_top' | '_blank' | <XML-Name>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#linking-AElementTargetAttribute"}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "listener"}]}, c: {p: [{t: "<IDREF>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "tbody": {
        "html": {
            e: {
                "tbody": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "tr"}]}, d: {p: [{t: "table body"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TBODY"}}
                ]}
            }
        }

    }, 
    "tbreak": {
        "svg": {
            e: {
                "tbreak": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "None"}]}, k: {l: "inline", p: [{t: "      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/text.html#tbreakElement"}}
                ]}
            }
        }

    }, 
    "td": {
        "html": {
            e: {
                "td": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "abbr"}, {t: "align"}, {t: "axis"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "colspan"}, {t: "dir"}, {t: "headers"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "rowspan"}, {t: "scope"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "table data cell"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H63.html", t: "Using the scope attribute to associate header cells and data cells in data tables"}, {u: "/TR/WCAG20-TECHS/H43.html", t: "Using id and headers attributes to associate data cells with header cells in data tables"}, {u: "/TR/WCAG20-TECHS/H51.html", t: "Using table markup to present tabular information"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TD"}}
                ]}
            }
        }

    }, 
    "text": {
        "svg": {
            e: {
                "text": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "editable"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "rotate"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "x"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["<text>, ", {y: "e", i: "svg", t: "a"}, ", ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, ", ", {y: "e", i: "svg", t: "tspan"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/text.html#TextElement"}}
                ]}
            }
        }

    }, 
    "text-align": {
        "svg": {
            p: {
                "text-align": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'start' | 'center' | 'end' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#TextAlignProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "text-align": {d: [{v: {p: [{t: "left | right | center | justify | inherit"}]}, ap: {p: [{t: "block-level elements, table cells and inline blocks"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-text-align"}}
                ]}
            }
        }

    }, 
    "text-anchor": {
        "svg": {
            p: {
                "text-anchor": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'start' | 'middle' | 'end' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/text.html#TextAnchorProperty"}}
                ]}
            }
        }

    }, 
    "text-decoration": {
        "css": {
            p: {
                "text-decoration": {d: [{v: {p: [{t: "none | [ underline || overline || line-through || blink ] | inherit"}]}, ih: {p: [{t: "no (see prose)"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-text-decoration"}}
                ]}
            }
        }

    }, 
    "text-indent": {
        "css": {
            p: {
                "text-indent": {d: [{v: {p: [{t: "<length> | <percentage> | inherit"}]}, ap: {p: [{t: "block-level elements, table cells and inline blocks"}]}, ih: {p: [{t: "yes"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-text-indent"}}
                ]}
            }
        }

    }, 
    "text-rendering": {
        "svg": {
            p: {
                "text-rendering": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#TextRenderingProperty"}}
                ]}
            }
        }

    }, 
    "text-transform": {
        "css": {
            p: {
                "text-transform": {d: [{v: {p: [{t: "capitalize | uppercase | lowercase | none | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-text-transform"}}
                ]}
            }
        }

    }, 
    "textArea": {
        "svg": {
            e: {
                "textArea": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "editable"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["<text>, ", {y: "e", i: "svg", t: "a"}, ", ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "tbreak"}, ", ", {y: "e", i: "svg", t: "title"}, ", ", {y: "e", i: "svg", t: "tspan"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/text.html#TextAreaElement"}}
                ]}
            }
        }

    }, 
    "textarea": {
        "html": {
            e: {
                "textarea": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "accesskey"}, {t: "class"}, {t: "cols"}, {t: "dir"}, {t: "disabled"}, {t: "id"}, {t: "lang"}, {t: "name"}, {t: "onblur"}, {t: "onchange"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onfocus"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "onselect"}, {t: "readonly"}, {t: "rows"}, {t: "style"}, {t: "tabindex"}, {t: "title"}, {t: "xml:lang"}]}, d: {p: [{t: "multi-line text field"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#AVOID_FREE_TEXT", t: "Avoid free text entry where possible."}, {u: "/TR/mobile-bp/#CONTROL_LABELLING", t: "Label all form controls appropriately and explicitly associate labels with form controls."}]}, sp: {u: "/TR/html401/index/../interact/forms.html#edef-TEXTAREA"}}
                ]}
            }
        }

    }, 
    "tfoot": {
        "html": {
            e: {
                "tfoot": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "tr"}]}, d: {p: [{t: "table footer"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TFOOT"}}
                ]}
            }
        }

    }, 
    "th": {
        "html": {
            e: {
                "th": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "abbr"}, {t: "align"}, {t: "axis"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "colspan"}, {t: "dir"}, {t: "headers"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "rowspan"}, {t: "scope"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "address"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "blockquote"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "div"}, {t: "dl"}, {t: "em"}, {t: "fieldset"}, {t: "form"}, {t: "h1"}, {t: "h2"}, {t: "h3"}, {t: "h4"}, {t: "h5"}, {t: "h6"}, {t: "hr"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "noscript"}, {t: "object"}, {t: "ol"}, {t: "p"}, {t: "pre"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "table"}, {t: "textarea"}, {t: "tt"}, {t: "ul"}, {t: "var"}]}, d: {p: [{t: "table header cell"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H63.html", t: "Using the scope attribute to associate header cells and data cells in data tables"}, {u: "/TR/WCAG20-TECHS/H43.html", t: "Using id and headers attributes to associate data cells with header cells in data tables"}, {u: "/TR/WCAG20-TECHS/H51.html", t: "Using table markup to present tabular information"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TH"}}
                ]}
            }
        }

    }, 
    "thead": {
        "html": {
            e: {
                "thead": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "tr"}]}, d: {p: [{t: "table header"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-THEAD"}}
                ]}
            }
        }

    }, 
    "timelineBegin": {
        "svg": {
            a: {
                "timelineBegin": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'onLoad' | 'onStart'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "timezone-from-date": {
        "xpath": {
            f: {
                "timezone-from-date": {d: [{d: {p: [{t: "Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence."}]}, sp: {u: "/TR/xpath-functions/#func-timezone-from-date"}, pa: {p: [{t: "$arg as xs:date?"}]}, r: {p: [{t: "xs:dayTimeDuration?"}]}}
                ]}
            }
        }

    }, 
    "timezone-from-dateTime": {
        "xpath": {
            f: {
                "timezone-from-dateTime": {d: [{d: {p: [{t: "Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence."}]}, sp: {u: "/TR/xpath-functions/#func-timezone-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:dayTimeDuration?"}]}}
                ]}
            }
        }

    }, 
    "timezone-from-time": {
        "xpath": {
            f: {
                "timezone-from-time": {d: [{d: {p: [{t: "Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence."}]}, sp: {u: "/TR/xpath-functions/#func-timezone-from-time"}, pa: {p: [{t: "$arg as xs:time?"}]}, r: {p: [{t: "xs:dayTimeDuration?"}]}}
                ]}
            }
        }

    }, 
    "title": {
        "svg": {
            e: {
                "title": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "id"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: "<text>      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#TitleAndDescriptionElements"}}
                ]}
            }
        }
, 
        "html": {
            e: {
                "title": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "dir"}, {t: "id"}, {t: "lang"}, {t: "xml:lang"}]}, d: {p: [{t: "document title"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H25.html", t: "Providing a title using the title element"}, {u: "/TR/WCAG20-TECHS/H64.html", t: "Using the title attribute of the frame and iframe elements"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#PAGE_TITLE", t: "Provide a short but descriptive page title."}]}, q: {l: "block", p: [{u: "/QA/Tips/good-titles", t: "<title>: the most important element of a quality Web page"}]}, sp: {u: "/TR/html401/index/../struct/global.html#edef-TITLE"}}
                ]}
            }, 
            a: {
                "title": {d: [{el: {l: "inline", p: [{t: ["All elements but ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "head"}, ", ", {y: "e", i: "html", t: "html"}, ", ", {y: "e", i: "html", t: "meta"}, ", ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, ", ", {y: "e", i: "html", t: "title"}, "                "]}]}, c: {p: [{t: "%Text;"}]}, d: {p: [{t: "advisory title"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H64.html", t: "Using the title attribute of the frame and iframe elements"}, {u: "/TR/WCAG20-TECHS/H33.html", t: "Supplementing link text with the title attribute"}, {u: "/TR/WCAG20-TECHS/H89.html", t: "Using the title attribute to provide context-sensitive help"}, {u: "/TR/WCAG20-TECHS/H65.html", t: "Using the title attribute to identify form controls when the label element cannot be used"}, {u: "/TR/WCAG20-TECHS/H25.html", t: "Providing a title using the title element"}, {u: "/TR/WCAG20-TECHS/H40.html", t: "Using definition lists"}, {u: "/TR/WCAG20-TECHS/H91.html", t: "Using HTML form controls and links"}]}, sp: {u: "/TR/html401/index/../struct/global.html#adef-title"}}
                ]}
            }
        }

    }, 
    "to": {
        "svg": {
            a: {
                "to": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "set"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "tokenize": {
        "xpath": {
            f: {
                "tokenize": {d: [{d: {p: [{t: "This function breaks the $input string into a sequence of strings, treating any substring that matches $pattern as a separator. The separators themselves are not returned."}]}, sp: {u: "/TR/xpath-functions/#func-tokenize"}, pa: {p: [{t: "$input as xs:string?, $pattern as xs:string"}]}, r: {p: [{t: "xs:string*"}]}}, {pa: {p: [{t: "$input as xs:string?,$pattern as xs:string,$flags as xs:string"}]}, r: {p: [{t: "xs:string*"}]}}
                ]}
            }
        }

    }, 
    "top": {
        "css": {
            p: {
                "top": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "positioned elements"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to height of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-top"}}
                ]}
            }
        }

    }, 
    "tr": {
        "html": {
            e: {
                "tr": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "align"}, {t: "char"}, {t: "charoff"}, {t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "valign"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "td"}, {t: "th"}]}, d: {p: [{t: "table row"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H51.html", t: "Using table markup to present tabular information"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#edef-TR"}}
                ]}
            }
        }

    }, 
    "transform": {
        "svg": {
            a: {
                "transform": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animation"}, {t: "circle"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "image"}, {t: "line"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "rect"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<transform> | 'none'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "transformBehavior": {
        "svg": {
            a: {
                "transformBehavior": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "video"}]}, c: {p: [{t: "'geometric' | 'pinned' | 'pinned90' | 'pinned180' | 'pinned270'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "translate": {
        "xpath": {
            f: {
                "translate": {d: [{d: {p: [{t: "Returns the value of $arg modified so that every character in the value of $arg that occurs at some position N in the value of $mapString has been replaced by the character that occurs at position N in the value of $transString."}]}, sp: {u: "/TR/xpath-functions/#func-translate"}, pa: {p: [{t: "$arg as xs:string?,$mapString as xs:string,$transString as xs:string"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "true": {
        "xpath": {
            f: {
                "true": {d: [{d: {p: [{t: "Returns the xs:boolean value true. Equivalent to xs:boolean(\"1\")."}]}, sp: {u: "/TR/xpath-functions/#func-true"}, pa: {p: [{t: ""}]}, r: {p: [{t: "xs:boolean"}]}}
                ]}
            }
        }

    }, 
    "tspan": {
        "svg": {
            e: {
                "tspan": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "typeof"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: "The 'tspan' element may contain any element that its parent may contain.      "}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/text.html#TSpanElement"}}
                ]}
            }
        }

    }, 
    "tt": {
        "html": {
            e: {
                "tt": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "teletype or monospaced text style"}]}, sp: {u: "/TR/html401/index/../present/graphics.html#edef-TT"}}
                ]}
            }
        }

    }, 
    "type": {
        "svg": {
            a: {
                "type": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "handler"}, {t: "script"}]}, c: {p: [{t: "<content-type>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "audio"}, {t: "image"}, {t: "video"}]}, c: {p: [{t: "<content-type>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "animateTransform"}]}, c: {p: [{t: "'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#animate-AnimateTransformElementTypeAttribute"}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "type": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "link"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "advisory content type"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H44.html", t: "Using label elements to associate text labels with form controls"}]}, sp: {u: "/TR/html401/index/../struct/links.html#adef-type-A"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "object"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "content type for data"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-type-OBJECT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "param"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "content type for value when valuetype=ref"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-type-PARAM"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "script"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "content type of script language"}]}, sp: {u: "/TR/html401/index/../interact/scripts.html#adef-type-SCRIPT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "style"}]}, c: {p: [{t: "%ContentType;"}]}, d: {p: [{t: "content type of style language"}]}, sp: {u: "/TR/html401/index/../present/styles.html#adef-type-STYLE"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "%InputType;"}]}, d: {p: [{t: "what kind of widget is needed"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-type-INPUT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "button"}]}, c: {p: [{t: "(button | submit | reset)"}]}, d: {p: [{t: "for use as form button"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-type-BUTTON"}}
                ]}
            }
        }

    }, 
    "typeof": {
        "svg": {
            a: {
                "typeof": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<list-of-strings>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "u1": {
        "svg": {
            a: {
                "u1": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "hkern"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "u2": {
        "svg": {
            a: {
                "u2": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "hkern"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "ul": {
        "html": {
            e: {
                "ul": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "li"}]}, d: {p: [{t: "unordered list"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H48.html", t: "Using ol, ul and dl for lists"}, {u: "/TR/WCAG20-TECHS/H50.html", t: "Using structural elements to group links"}]}, q: {l: "block", p: [{u: "/QA/Tips/unordered-lists", t: "Unordered lists: more than just bullets"}]}, sp: {u: "/TR/html401/index/../struct/lists.html#edef-UL"}}
                ]}
            }
        }

    }, 
    "underline-position": {
        "svg": {
            a: {
                "underline-position": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "underline-thickness": {
        "svg": {
            a: {
                "underline-thickness": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "unicode": {
        "svg": {
            a: {
                "unicode": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "glyph"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#fonts-GlyphElementUnicodeAttribute"}}
                ]}
            }
        }

    }, 
    "unicode-bidi": {
        "svg": {
            p: {
                "unicode-bidi": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'normal' | 'embed' | 'bidi-override' | 'inherit'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/text.html#UnicodeBidiProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "unicode-bidi": {d: [{v: {p: [{t: "normal | embed | bidi-override | inherit"}]}, ap: {p: [{t: "all elements, but see prose"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-unicode-bidi"}}
                ]}
            }
        }

    }, 
    "unicode-range": {
        "svg": {
            a: {
                "unicode-range": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "units-per-em": {
        "svg": {
            a: {
                "units-per-em": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "unordered": {
        "xpath": {
            f: {
                "unordered": {d: [{d: {p: [{t: "Returns the items of $sourceSeq in an ·implementation dependent· order."}]}, sp: {u: "/TR/xpath-functions/#func-unordered"}, pa: {p: [{t: "$sourceSeq as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "upper-case": {
        "xpath": {
            f: {
                "upper-case": {d: [{d: {p: [{t: "Returns the value of $arg after translating every character to its upper-case correspondent as defined in the appropriate case mappings section in the Unicode standard [The Unicode Standard]. For versions of Unicode beginning with the 2.1.8 update, only locale-insensitive case mappings should be applied. Beginning with version 3.2.0 (and likely future versions) of Unicode, precise mappings are described in default case operations, which are full case mappings in the absence of tailoring for particular languages and environments. Every lower-case character that does not have an upper-case correspondent, as well as every upper-case character, is included in the returned value in its original form."}]}, sp: {u: "/TR/xpath-functions/#func-upper-case"}, pa: {p: [{t: "$arg as xs:string?"}]}, r: {p: [{t: "xs:string"}]}}
                ]}
            }
        }

    }, 
    "use": {
        "svg": {
            e: {
                "use": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "externalResourcesRequired"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "id"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "property"}, {t: "rel"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "rev"}, {t: "role"}, {t: "systemLanguage"}, {t: "transform"}, {t: "typeof"}, {t: "x"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {p: [{t: "all"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/struct.html#UseElement"}}
                ]}
            }
        }

    }, 
    "usemap": {
        "html": {
            a: {
                "usemap": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "img"}, {t: "input"}, {t: "object"}]}, c: {p: [{t: "%URI;"}]}, d: {p: [{t: "use client-side image map"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-usemap"}}
                ]}
            }
        }

    }, 
    "valign": {
        "html": {
            a: {
                "valign": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "col"}, {t: "colgroup"}, {t: "tbody"}, {t: "td"}, {t: "tfoot"}, {t: "th"}, {t: "thead"}, {t: "tr"}]}, c: {p: [{t: "(top | middle | bottom | baseline)"}]}, d: {p: [{t: "vertical alignment in cells"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-valign"}}
                ]}
            }
        }

    }, 
    "value": {
        "html": {
            a: {
                "value": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "input"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "Specify for radio buttons and checkboxes"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-value-INPUT"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "option"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "defaults to element content"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-value-OPTION"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "param"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "property value"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-value-PARAM"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "button"}]}, c: {p: [{t: "CDATA"}]}, d: {p: [{t: "sent to server when submitted"}]}, sp: {u: "/TR/html401/index/../interact/forms.html#adef-value-BUTTON"}}
                ]}
            }
        }

    }, 
    "values": {
        "svg": {
            a: {
                "values": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "valuetype": {
        "html": {
            a: {
                "valuetype": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "param"}]}, c: {p: [{t: "(DATA | REF | OBJECT)"}]}, d: {p: [{t: "How to interpret value"}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-valuetype"}}
                ]}
            }
        }

    }, 
    "var": {
        "html": {
            e: {
                "var": {d: [{at: {y: "a", i: "html", l: "inline", p: [{t: "class"}, {t: "dir"}, {t: "id"}, {t: "lang"}, {t: "onclick"}, {t: "ondblclick"}, {t: "onkeydown"}, {t: "onkeypress"}, {t: "onkeyup"}, {t: "onmousedown"}, {t: "onmousemove"}, {t: "onmouseout"}, {t: "onmouseover"}, {t: "onmouseup"}, {t: "style"}, {t: "title"}, {t: "xml:lang"}]}, k: {y: "e", i: "html", l: "inline", p: [{t: "a"}, {t: "abbr"}, {t: "acronym"}, {t: "b"}, {t: "bdo"}, {t: "big"}, {t: "br"}, {t: "button"}, {t: "cite"}, {t: "code"}, {t: "del"}, {t: "dfn"}, {t: "em"}, {t: "i"}, {t: "img"}, {t: "input"}, {t: "ins"}, {t: "kbd"}, {t: "label"}, {t: "map"}, {t: "object"}, {t: "q"}, {t: "samp"}, {t: "script"}, {t: "select"}, {t: "small"}, {t: "span"}, {t: "strong"}, {t: "sub"}, {t: "sup"}, {t: "textarea"}, {t: "tt"}, {t: "var"}]}, d: {p: [{t: "instance of a variable or program argument"}]}, sp: {u: "/TR/html401/index/../struct/text.html#edef-VAR"}}
                ]}
            }
        }

    }, 
    "vector-effect": {
        "svg": {
            p: {
                "vector-effect": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'none' | 'non-scaling-stroke' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#NonScalingStroke"}}
                ]}
            }
        }

    }, 
    "version": {
        "svg": {
            a: {
                "version": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'1.0' | '1.1' | '1.2'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "vertical-align": {
        "css": {
            p: {
                "vertical-align": {d: [{v: {p: [{t: "baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit"}]}, ap: {p: [{t: "inline-level and 'table-cell' elements"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to the 'line-height' of the element itself"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-vertical-align"}}
                ]}
            }
        }

    }, 
    "video": {
        "svg": {
            e: {
                "video": {d: [{at: {y: "a", i: "svg", l: "inline", p: [{t: "about"}, {t: "begin"}, {t: "class"}, {t: "content"}, {t: "datatype"}, {t: "dur"}, {t: "end"}, {t: "externalResourcesRequired"}, {t: "fill"}, {t: "focusHighlight"}, {t: "focusable"}, {t: "height"}, {t: "id"}, {t: "initialVisibility"}, {t: "max"}, {t: "min"}, {t: "nav-down"}, {t: "nav-down-left"}, {t: "nav-down-right"}, {t: "nav-left"}, {t: "nav-next"}, {t: "nav-prev"}, {t: "nav-right"}, {t: "nav-up"}, {t: "nav-up-left"}, {t: "nav-up-right"}, {t: "overlay"}, {t: "preserveAspectRatio"}, {t: "property"}, {t: "rel"}, {t: "repeatCount"}, {t: "repeatDur"}, {t: "requiredExtensions"}, {t: "requiredFeatures"}, {t: "requiredFonts"}, {t: "requiredFormats"}, {t: "resource"}, {t: "restart"}, {t: "rev"}, {t: "role"}, {t: "syncBehavior"}, {t: "syncMaster"}, {t: "syncTolerance"}, {t: "systemLanguage"}, {t: "transform"}, {t: "transformBehavior"}, {t: "type"}, {t: "typeof"}, {t: "width"}, {t: "x"}, {t: "xlink:actuate"}, {t: "xlink:arcrole"}, {t: "xlink:href"}, {t: "xlink:role"}, {t: "xlink:show"}, {t: "xlink:title"}, {t: "xlink:type"}, {t: "xml:base"}, {t: "xml:id"}, {t: "xml:lang"}, {t: "xml:space"}, {t: "y"}]}, pr: {y: "p", i: "svg", l: "inline", p: [{t: "audio-level"}, {t: "buffered-rendering"}, {t: "display"}, {t: "image-rendering"}, {t: "pointer-events"}, {t: "shape-rendering"}, {t: "text-rendering"}, {t: "viewport-fill"}, {t: "viewport-fill-opacity"}, {t: "visibility"}]}, k: {l: "inline", p: [{t: ["                   ", {y: "e", i: "svg", t: "animate"}, ", ", {y: "e", i: "svg", t: "animateColor"}, ", ", {y: "e", i: "svg", t: "animateMotion"}, ", ", {y: "e", i: "svg", t: "animateTransform"}, ", ", {y: "e", i: "svg", t: "desc"}, ", ", {y: "e", i: "svg", t: "discard"}, ", ", {y: "e", i: "svg", t: "handler"}, ", ", {y: "e", i: "svg", t: "metadata"}, ", ", {y: "e", i: "svg", t: "set"}, ", ", {y: "e", i: "svg", t: "switch"}, ", ", {y: "e", i: "svg", t: "title"}, "                      "]}]}, sp: {u: "/TR/2008/REC-SVGTiny12-20081222/multimedia.html#VideoElement"}}
                ]}
            }
        }

    }, 
    "viewBox": {
        "svg": {
            a: {
                "viewBox": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "viewport-fill": {
        "svg": {
            p: {
                "viewport-fill": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'none' | <color> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#viewport-fill-property"}}
                ]}
            }
        }

    }, 
    "viewport-fill-opacity": {
        "svg": {
            p: {
                "viewport-fill-opacity": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "<number> | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/painting.html#viewport-fill-opacity-property"}}
                ]}
            }
        }

    }, 
    "visibility": {
        "svg": {
            p: {
                "visibility": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "circle"}, {t: "defs"}, {t: "ellipse"}, {t: "foreignObject"}, {t: "g"}, {t: "line"}, {t: "linearGradient"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "radialGradient"}, {t: "rect"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "text"}, {t: "textArea"}, {t: "tspan"}, {t: "use"}]}, c: {p: [{t: "'visible' | 'hidden' | 'inherit'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "true"}]}, sp: {u: "/TR/SVGTiny12/painting.html#VisibilityProperty"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "visibility": {d: [{v: {p: [{t: "visible | hidden | collapse | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visufx.html#propdef-visibility"}}
                ]}
            }
        }

    }, 
    "voice-family": {
        "css": {
            p: {
                "voice-family": {d: [{v: {p: [{t: "[[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-voice-family"}}
                ]}
            }
        }

    }, 
    "volume": {
        "css": {
            p: {
                "volume": {d: [{v: {p: [{t: "<number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit"}]}, ih: {p: [{t: "yes"}]}, pe: {p: [{t: "refer to inherited value"}]}, me: {p: [{t: "aural"}]}, sp: {u: "/TR/CSS2/aural.html#propdef-volume"}}
                ]}
            }
        }

    }, 
    "white-space": {
        "css": {
            p: {
                "white-space": {d: [{v: {p: [{t: "normal | pre | nowrap | pre-wrap | pre-line | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-white-space"}}
                ]}
            }
        }

    }, 
    "widows": {
        "css": {
            p: {
                "widows": {d: [{v: {p: [{t: "<integer> | inherit"}]}, ap: {p: [{t: "block-level elements"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual, paged"}]}, sp: {u: "/TR/CSS2/page.html#propdef-widows"}}
                ]}
            }
        }

    }, 
    "width": {
        "svg": {
            a: {
                "width": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "foreignObject"}, {t: "image"}, {t: "rect"}, {t: "svg"}, {t: "video"}]}, c: {p: [{t: "<length>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "textArea"}]}, c: {p: [{t: "<length> | 'auto'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#text-TextAreaElementWidthAttribute"}}
                ]}
            }
        }
, 
        "css": {
            p: {
                "width": {d: [{v: {p: [{t: "<length> | <percentage> | auto | inherit"}]}, ap: {p: [{t: "all elements but non-replaced inline elements, table rows, and row groups"}]}, ih: {p: [{t: "no"}]}, pe: {p: [{t: "refer to width of containing block"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visudet.html#propdef-width"}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "width": {d: [{el: {y: "e", i: "html", l: "inline", p: [{t: "img"}, {t: "object"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "override width"}]}, m: {l: "block", p: [{u: "/TR/mobile-bp/#IMAGES_SPECIFY_SIZE", t: "Specify the size of images in markup, if they have an intrinsic size."}, {u: "/TR/mobile-bp/#IMAGES_RESIZING", t: "Resize images at the server, if they have an intrinsic size."}]}, sp: {u: "/TR/html401/index/../struct/objects.html#adef-width-IMG"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "table"}]}, c: {p: [{t: "%Length;"}]}, d: {p: [{t: "table width"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-width-TABLE"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "col"}]}, c: {p: [{t: "%MultiLength;"}]}, d: {p: [{t: "column width specification"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-width-COL"}}, {el: {y: "e", i: "html", l: "inline", p: [{t: "colgroup"}]}, c: {p: [{t: "%MultiLength;"}]}, d: {p: [{t: "default width for enclosed COLs"}]}, sp: {u: "/TR/html401/index/../struct/tables.html#adef-width-COLGROUP"}}
                ]}
            }
        }

    }, 
    "widths": {
        "svg": {
            a: {
                "widths": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "word-spacing": {
        "css": {
            p: {
                "word-spacing": {d: [{v: {p: [{t: "normal | <length> | inherit"}]}, ih: {p: [{t: "yes"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/text.html#propdef-word-spacing"}}
                ]}
            }
        }

    }, 
    "x": {
        "svg": {
            a: {
                "x": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "foreignObject"}, {t: "image"}, {t: "rect"}, {t: "textArea"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "text"}]}, c: {p: [{t: "<list-of-coordinates>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#text-TextElementXAttribute"}}
                ]}
            }
        }

    }, 
    "x-height": {
        "svg": {
            a: {
                "x-height": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "font-face"}]}, c: {p: [{t: "<number>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "x1": {
        "svg": {
            a: {
                "x1": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "line"}, {t: "linearGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "x2": {
        "svg": {
            a: {
                "x2": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "line"}, {t: "linearGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xlink:actuate": {
        "svg": {
            a: {
                "xlink:actuate": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'onLoad'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "'onRequest'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "xlink:arcrole": {
        "svg": {
            a: {
                "xlink:arcrole": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<IRI>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xlink:href": {
        "svg": {
            a: {
                "xlink:href": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<IRI>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xlink:role": {
        "svg": {
            a: {
                "xlink:role": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<IRI>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xlink:show": {
        "svg": {
            a: {
                "xlink:show": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "discard"}, {t: "font-face-uri"}, {t: "handler"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}]}, c: {p: [{t: "'other'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "audio"}, {t: "foreignObject"}, {t: "image"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'embed'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}]}, c: {p: [{t: "'new' | 'replace'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }, 
    "xlink:title": {
        "svg": {
            a: {
                "xlink:title": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<text>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xlink:type": {
        "svg": {
            a: {
                "xlink:type": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "discard"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "handler"}, {t: "image"}, {t: "mpath"}, {t: "prefetch"}, {t: "script"}, {t: "set"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'simple'"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xml:base": {
        "svg": {
            a: {
                "xml:base": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<IRI>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xml:id": {
        "svg": {
            a: {
                "xml:id": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<NCName>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "xml:lang": {
        "svg": {
            a: {
                "xml:lang": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "handler"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "script"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<language-id>"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }
, 
        "html": {
            a: {
                "xml:lang": {d: [{el: {l: "inline", p: [{t: ["All elements but , ", {y: "e", i: "html", t: "base"}, ", , ", {y: "e", i: "html", t: "br"}, ", , , , ", {y: "e", i: "html", t: "param"}, ", ", {y: "e", i: "html", t: "script"}, "                "]}]}, c: {p: [{t: "%LanguageCode;"}]}, d: {p: [{t: "language code"}]}, ac: {l: "block", p: [{u: "/TR/WCAG20-TECHS/H57.html", t: "Using language attributes on the html element"}, {u: "/TR/WCAG20-TECHS/H58.html", t: "Using language attributes to identify changes in the human language"}]}, i: {l: "block", p: [{u: "/International/tutorials/language-decl/", t: "Declaring Language in XHTML and HTML"}]}, sp: {u: "/TR/2002/REC-xhtml1-20020801/#C_7"}}
                ]}
            }
        }

    }, 
    "xml:space": {
        "svg": {
            a: {
                "xml:space": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "a"}, {t: "animate"}, {t: "animateColor"}, {t: "animateMotion"}, {t: "animateTransform"}, {t: "animation"}, {t: "audio"}, {t: "circle"}, {t: "defs"}, {t: "desc"}, {t: "discard"}, {t: "ellipse"}, {t: "font"}, {t: "font-face"}, {t: "font-face-src"}, {t: "font-face-uri"}, {t: "foreignObject"}, {t: "g"}, {t: "glyph"}, {t: "hkern"}, {t: "image"}, {t: "line"}, {t: "linearGradient"}, {t: "listener"}, {t: "metadata"}, {t: "missing-glyph"}, {t: "mpath"}, {t: "path"}, {t: "polygon"}, {t: "polyline"}, {t: "prefetch"}, {t: "radialGradient"}, {t: "rect"}, {t: "set"}, {t: "solidColor"}, {t: "stop"}, {t: "svg"}, {t: "switch"}, {t: "tbreak"}, {t: "text"}, {t: "textArea"}, {t: "title"}, {t: "tspan"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "'default' | 'preserve'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "handler"}, {t: "script"}]}, c: {p: [{t: "'preserve'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "y": {
        "svg": {
            a: {
                "y": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "animation"}, {t: "foreignObject"}, {t: "image"}, {t: "rect"}, {t: "textArea"}, {t: "use"}, {t: "video"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}, {el: {y: "e", i: "svg", l: "inline", p: [{t: "text"}]}, c: {p: [{t: "<list-of-coordinates>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#text-TextElementYAttribute"}}
                ]}
            }
        }

    }, 
    "y1": {
        "svg": {
            a: {
                "y1": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "line"}, {t: "linearGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "y2": {
        "svg": {
            a: {
                "y2": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "line"}, {t: "linearGradient"}]}, c: {p: [{t: "<coordinate>"}]}, an: {p: [{t: "true"}]}, ih: {p: [{t: "false"}]}}
                ]}
            }
        }

    }, 
    "year-from-date": {
        "xpath": {
            f: {
                "year-from-date": {d: [{d: {p: [{t: "Returns an xs:integer representing the year in the localized value of $arg. The value may be negative."}]}, sp: {u: "/TR/xpath-functions/#func-year-from-date"}, pa: {p: [{t: "$arg as xs:date?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "year-from-dateTime": {
        "xpath": {
            f: {
                "year-from-dateTime": {d: [{d: {p: [{t: "Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative."}]}, sp: {u: "/TR/xpath-functions/#func-year-from-dateTime"}, pa: {p: [{t: "$arg as xs:dateTime?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "years-from-duration": {
        "xpath": {
            f: {
                "years-from-duration": {d: [{d: {p: [{t: "Returns an xs:integer representing the years component in the value of $arg. The result is obtained by casting $arg to an xs:yearMonthDuration (see 17.1.4 Casting to duration types) and then computing the years component as described in 10.3.1.3 Canonical representation."}]}, sp: {u: "/TR/xpath-functions/#func-years-from-duration"}, pa: {p: [{t: "$arg as xs:duration?"}]}, r: {p: [{t: "xs:integer?"}]}}
                ]}
            }
        }

    }, 
    "z-index": {
        "css": {
            p: {
                "z-index": {d: [{v: {p: [{t: "auto | <integer> | inherit"}]}, ap: {p: [{t: "positioned elements"}]}, ih: {p: [{t: "no"}]}, me: {p: [{t: "visual"}]}, sp: {u: "/TR/CSS2/visuren.html#propdef-z-index"}}
                ]}
            }
        }

    }, 
    "zero-or-one": {
        "xpath": {
            f: {
                "zero-or-one": {d: [{d: {p: [{t: "Returns $arg if it contains zero or one items. Otherwise, raises an error [err:FORG0003]."}]}, sp: {u: "/TR/xpath-functions/#func-zero-or-one"}, pa: {p: [{t: "$arg as item()*"}]}, r: {p: [{t: ""}]}}
                ]}
            }
        }

    }, 
    "zoomAndPan": {
        "svg": {
            a: {
                "zoomAndPan": {d: [{el: {y: "e", i: "svg", l: "inline", p: [{t: "svg"}]}, c: {p: [{t: "'disable' | 'magnify'"}]}, an: {p: [{t: "false"}]}, ih: {p: [{t: "false"}]}, sp: {u: "/TR/SVGTiny12/single-page.html#"}}
                ]}
            }
        }

    }
};/*!
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
(function(){

var 
	// Will speed up references to window, and allows munging its name.
	window = this,
	// Will speed up references to undefined, and allows munging its name.
	undefined,
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$,

	jQuery = window.jQuery = window.$ = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},

	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
	// Is it a simple selector
	isSimple = /^.[^:#\[\.,]*$/;

jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		// Make sure that a selection was provided
		selector = selector || document;

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this[0] = selector;
			this.length = 1;
			this.context = selector;
			return this;
		}
		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			var match = quickExpr.exec( selector );

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] )
					selector = jQuery.clean( [ match[1] ], context );

				// HANDLE: $("#id")
				else {
					var elem = document.getElementById( match[3] );

					// Handle the case where IE and Opera return items
					// by name instead of ID
					if ( elem && elem.id != match[3] )
						return jQuery().find( selector );

					// Otherwise, we inject the element directly into the jQuery object
					var ret = jQuery( elem || [] );
					ret.context = document;
					ret.selector = selector;
					return ret;
				}

			// HANDLE: $(expr, [context])
			// (which is just equivalent to: $(content).find(expr)
			} else
				return jQuery( context ).find( selector );

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) )
			return jQuery( document ).ready( selector );

		// Make sure that old selector state is passed along
		if ( selector.selector && selector.context ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return this.setArray(jQuery.isArray( selector ) ?
			selector :
			jQuery.makeArray(selector));
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.3.2",

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num === undefined ?

			// Return a 'clean' array
			Array.prototype.slice.call( this ) :

			// Return just the object
			this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = jQuery( elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" )
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		else if ( name )
			ret.selector = this.selector + "." + name + "(" + selector + ")";

		// Return the newly-formed element set
		return ret;
	},

	// Force the current matched set of elements to become
	// the specified array of elements (destroying the stack in the process)
	// You should use pushStack() in order to do this, but maintain the stack
	setArray: function( elems ) {
		// Resetting the length to 0, then using the native Array push
		// is a super-fast way to populate an object with array-like properties
		this.length = 0;
		Array.prototype.push.apply( this, elems );

		return this;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {
		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem && elem.jquery ? elem[0] : elem
		, this );
	},

	attr: function( name, value, type ) {
		var options = name;

		// Look for the case where we're accessing a style value
		if ( typeof name === "string" )
			if ( value === undefined )
				return this[0] && jQuery[ type || "attr" ]( this[0], name );

			else {
				options = {};
				options[ name ] = value;
			}

		// Check to see if we're setting style values
		return this.each(function(i){
			// Set all the styles
			for ( name in options )
				jQuery.attr(
					type ?
						this.style :
						this,
					name, jQuery.prop( this, options[ name ], type, i, name )
				);
		});
	},

	css: function( key, value ) {
		// ignore negative width and height values
		if ( (key == 'width' || key == 'height') && parseFloat(value) < 0 )
			value = undefined;
		return this.attr( key, value, "curCSS" );
	},

	text: function( text ) {
		if ( typeof text !== "object" && text != null )
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );

		var ret = "";

		jQuery.each( text || this, function(){
			jQuery.each( this.childNodes, function(){
				if ( this.nodeType != 8 )
					ret += this.nodeType != 1 ?
						this.nodeValue :
						jQuery.fn.text( [ this ] );
			});
		});

		return ret;
	},

	wrapAll: function( html ) {
		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).clone();

			if ( this[0].parentNode )
				wrap.insertBefore( this[0] );

			wrap.map(function(){
				var elem = this;

				while ( elem.firstChild )
					elem = elem.firstChild;

				return elem;
			}).append(this);
		}

		return this;
	},

	wrapInner: function( html ) {
		return this.each(function(){
			jQuery( this ).contents().wrapAll( html );
		});
	},

	wrap: function( html ) {
		return this.each(function(){
			jQuery( this ).wrapAll( html );
		});
	},

	append: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.appendChild( elem );
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.insertBefore( elem, this.firstChild );
		});
	},

	before: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this );
		});
	},

	after: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this.nextSibling );
		});
	},

	end: function() {
		return this.prevObject || jQuery( [] );
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: [].push,
	sort: [].sort,
	splice: [].splice,

	find: function( selector ) {
		if ( this.length === 1 ) {
			var ret = this.pushStack( [], "find", selector );
			ret.length = 0;
			jQuery.find( selector, this[0], ret );
			return ret;
		} else {
			return this.pushStack( jQuery.unique(jQuery.map(this, function(elem){
				return jQuery.find( selector, elem );
			})), "find", selector );
		}
	},

	clone: function( events ) {
		// Do the clone
		var ret = this.map(function(){
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
				// IE copies events bound via attachEvent when
				// using cloneNode. Calling detachEvent on the
				// clone will also remove the events from the orignal
				// In order to get around this, we use innerHTML.
				// Unfortunately, this means some modifications to
				// attributes in IE that are actually only stored
				// as properties will not be copied (such as the
				// the name attribute on an input).
				var html = this.outerHTML;
				if ( !html ) {
					var div = this.ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}

				return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0];
			} else
				return this.cloneNode(true);
		});

		// Copy the events from the original to the clone
		if ( events === true ) {
			var orig = this.find("*").andSelf(), i = 0;

			ret.find("*").andSelf().each(function(){
				if ( this.nodeName !== orig[i].nodeName )
					return;

				var events = jQuery.data( orig[i], "events" );

				for ( var type in events ) {
					for ( var handler in events[ type ] ) {
						jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
					}
				}

				i++;
			});
		}

		// Return the cloned set
		return ret;
	},

	filter: function( selector ) {
		return this.pushStack(
			jQuery.isFunction( selector ) &&
			jQuery.grep(this, function(elem, i){
				return selector.call( elem, i );
			}) ||

			jQuery.multiFilter( selector, jQuery.grep(this, function(elem){
				return elem.nodeType === 1;
			}) ), "filter", selector );
	},

	closest: function( selector ) {
		var pos = jQuery.expr.match.POS.test( selector ) ? jQuery(selector) : null,
			closer = 0;

		return this.map(function(){
			var cur = this;
			while ( cur && cur.ownerDocument ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selector) ) {
					jQuery.data(cur, "closest", closer);
					return cur;
				}
				cur = cur.parentNode;
				closer++;
			}
		});
	},

	not: function( selector ) {
		if ( typeof selector === "string" )
			// test special case where just one selector is passed in
			if ( isSimple.test( selector ) )
				return this.pushStack( jQuery.multiFilter( selector, this, true ), "not", selector );
			else
				selector = jQuery.multiFilter( selector, this );

		var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
		return this.filter(function() {
			return isArrayLike ? jQuery.inArray( this, selector ) < 0 : this != selector;
		});
	},

	add: function( selector ) {
		return this.pushStack( jQuery.unique( jQuery.merge(
			this.get(),
			typeof selector === "string" ?
				jQuery( selector ) :
				jQuery.makeArray( selector )
		)));
	},

	is: function( selector ) {
		return !!selector && jQuery.multiFilter( selector, this ).length > 0;
	},

	hasClass: function( selector ) {
		return !!selector && this.is( "." + selector );
	},

	val: function( value ) {
		if ( value === undefined ) {			
			var elem = this[0];

			if ( elem ) {
				if( jQuery.nodeName( elem, 'option' ) )
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				
				// We need to handle select boxes special
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type == "select-one";

					// Nothing was selected
					if ( index < 0 )
						return null;

					// Loop through all the selected options
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];

						if ( option.selected ) {
							// Get the specifc value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if ( one )
								return value;

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;				
				}

				// Everything else, we just grab the value
				return (elem.value || "").replace(/\r/g, "");

			}

			return undefined;
		}

		if ( typeof value === "number" )
			value += '';

		return this.each(function(){
			if ( this.nodeType != 1 )
				return;

			if ( jQuery.isArray(value) && /radio|checkbox/.test( this.type ) )
				this.checked = (jQuery.inArray(this.value, value) >= 0 ||
					jQuery.inArray(this.name, value) >= 0);

			else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(value);

				jQuery( "option", this ).each(function(){
					this.selected = (jQuery.inArray( this.value, values ) >= 0 ||
						jQuery.inArray( this.text, values ) >= 0);
				});

				if ( !values.length )
					this.selectedIndex = -1;

			} else
				this.value = value;
		});
	},

	html: function( value ) {
		return value === undefined ?
			(this[0] ?
				this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") :
				null) :
			this.empty().append( value );
	},

	replaceWith: function( value ) {
		return this.after( value ).remove();
	},

	eq: function( i ) {
		return this.slice( i, +i + 1 );
	},

	slice: function() {
		return this.pushStack( Array.prototype.slice.apply( this, arguments ),
			"slice", Array.prototype.slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function(elem, i){
			return callback.call( elem, i, elem );
		}));
	},

	andSelf: function() {
		return this.add( this.prevObject );
	},

	domManip: function( args, table, callback ) {
		if ( this[0] ) {
			var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(),
				scripts = jQuery.clean( args, (this[0].ownerDocument || this[0]), fragment ),
				first = fragment.firstChild;

			if ( first )
				for ( var i = 0, l = this.length; i < l; i++ )
					callback.call( root(this[i], first), this.length > 1 || i > 0 ?
							fragment.cloneNode(true) : fragment );
		
			if ( scripts )
				jQuery.each( scripts, evalScript );
		}

		return this;
		
		function root( elem, cur ) {
			return table && jQuery.nodeName(elem, "table") && jQuery.nodeName(cur, "tr") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

function evalScript( i, elem ) {
	if ( elem.src )
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});

	else
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );

	if ( elem.parentNode )
		elem.parentNode.removeChild( elem );
}

function now(){
	return +new Date;
}

jQuery.extend = jQuery.fn.extend = function() {
	// copy reference to target object
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) )
		target = {};

	// extend jQuery itself if only one argument is passed
	if ( length == i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ )
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null )
			// Extend the base object
			for ( var name in options ) {
				var src = target[ name ], copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy )
					continue;

				// Recurse if we're merging object values
				if ( deep && copy && typeof copy === "object" && !copy.nodeType )
					target[ name ] = jQuery.extend( deep, 
						// Never move original objects, clone them
						src || ( copy.length != null ? [ ] : { } )
					, copy );

				// Don't bring in undefined values
				else if ( copy !== undefined )
					target[ name ] = copy;

			}

	// Return the modified object
	return target;
};

// exclude the following css properties to add px
var	exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	// cache defaultView
	defaultView = document.defaultView || {},
	toString = Object.prototype.toString;

jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;

		if ( deep )
			window.jQuery = _jQuery;

		return jQuery;
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},

	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},

	// check if an element is in a (or is an) XML document
	isXMLDoc: function( elem ) {
		return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
			!!elem.ownerDocument && jQuery.isXMLDoc( elem.ownerDocument );
	},

	// Evalulates a script in a global context
	globalEval: function( data ) {
		if ( data && /\S/.test(data) ) {
			// Inspired by code by Andrea Giammarchi
			// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");

			script.type = "text/javascript";
			if ( jQuery.support.scriptEval )
				script.appendChild( document.createTextNode( data ) );
			else
				script.text = data;

			// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
			// This arises when a base node is used (#2709).
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0, length = object.length;

		if ( args ) {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.apply( object[ name ], args ) === false )
						break;
			} else
				for ( ; i < length; )
					if ( callback.apply( object[ i++ ], args ) === false )
						break;

		// A special, fast, case for the most common use of each
		} else {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.call( object[ name ], name, object[ name ] ) === false )
						break;
			} else
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ){}
		}

		return object;
	},

	prop: function( elem, value, type, i, name ) {
		// Handle executable functions
		if ( jQuery.isFunction( value ) )
			value = value.call( elem, i );

		// Handle passing in a number to a CSS property
		return typeof value === "number" && type == "curCSS" && !exclude.test( name ) ?
			value + "px" :
			value;
	},

	className: {
		// internal only, use addClass("class")
		add: function( elem, classNames ) {
			jQuery.each((classNames || "").split(/\s+/), function(i, className){
				if ( elem.nodeType == 1 && !jQuery.className.has( elem.className, className ) )
					elem.className += (elem.className ? " " : "") + className;
			});
		},

		// internal only, use removeClass("class")
		remove: function( elem, classNames ) {
			if (elem.nodeType == 1)
				elem.className = classNames !== undefined ?
					jQuery.grep(elem.className.split(/\s+/), function(className){
						return !jQuery.className.has( classNames, className );
					}).join(" ") :
					"";
		},

		// internal only, use hasClass("class")
		has: function( elem, className ) {
			return elem && jQuery.inArray( className, (elem.className || elem).toString().split(/\s+/) ) > -1;
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};
		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( var name in options )
			elem.style[ name ] = old[ name ];
	},

	css: function( elem, name, force, extra ) {
		if ( name == "width" || name == "height" ) {
			var val, props = { position: "absolute", visibility: "hidden", display:"block" }, which = name == "width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ];

			function getWH() {
				val = name == "width" ? elem.offsetWidth : elem.offsetHeight;

				if ( extra === "border" )
					return;

				jQuery.each( which, function() {
					if ( !extra )
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					if ( extra === "margin" )
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					else
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
				});
			}

			if ( elem.offsetWidth !== 0 )
				getWH();
			else
				jQuery.swap( elem, props, getWH );

			return Math.max(0, Math.round(val));
		}

		return jQuery.curCSS( elem, name, force );
	},

	curCSS: function( elem, name, force ) {
		var ret, style = elem.style;

		// We need to handle opacity special in IE
		if ( name == "opacity" && !jQuery.support.opacity ) {
			ret = jQuery.attr( style, "opacity" );

			return ret == "" ?
				"1" :
				ret;
		}

		// Make sure we're using the right name for getting the float value
		if ( name.match( /float/i ) )
			name = styleFloat;

		if ( !force && style && style[ name ] )
			ret = style[ name ];

		else if ( defaultView.getComputedStyle ) {

			// Only "float" is needed here
			if ( name.match( /float/i ) )
				name = "float";

			name = name.replace( /([A-Z])/g, "-$1" ).toLowerCase();

			var computedStyle = defaultView.getComputedStyle( elem, null );

			if ( computedStyle )
				ret = computedStyle.getPropertyValue( name );

			// We should always get a number back from opacity
			if ( name == "opacity" && ret == "" )
				ret = "1";

		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(/\-(\w)/g, function(all, letter){
				return letter.toUpperCase();
			});

			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			if ( !/^\d+(px)?$/i.test( ret ) && /^\d/.test( ret ) ) {
				// Remember the original values
				var left = style.left, rsLeft = elem.runtimeStyle.left;

				// Put in the new values to get a computed value out
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = ret || 0;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret;
	},

	clean: function( elems, context, fragment ) {
		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" )
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;

		// If a single string is passed in and it's a single tag
		// just do a createElement and skip the rest
		if ( !fragment && elems.length === 1 && typeof elems[0] === "string" ) {
			var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
			if ( match )
				return [ context.createElement( match[1] ) ];
		}

		var ret = [], scripts = [], div = context.createElement("div");

		jQuery.each(elems, function(i, elem){
			if ( typeof elem === "number" )
				elem += '';

			if ( !elem )
				return;

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				// Fix "XHTML"-style tags in all browsers
				elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
					return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ?
						all :
						front + "></" + tag + ">";
				});

				// Trim whitespace, otherwise indexOf won't work as expected
				var tags = elem.replace(/^\s+/, "").substring(0, 10).toLowerCase();

				var wrap =
					// option or optgroup
					!tags.indexOf("<opt") &&
					[ 1, "<select multiple='multiple'>", "</select>" ] ||

					!tags.indexOf("<leg") &&
					[ 1, "<fieldset>", "</fieldset>" ] ||

					tags.match(/^<(thead|tbody|tfoot|colg|cap)/) &&
					[ 1, "<table>", "</table>" ] ||

					!tags.indexOf("<tr") &&
					[ 2, "<table><tbody>", "</tbody></table>" ] ||

				 	// <thead> matched above
					(!tags.indexOf("<td") || !tags.indexOf("<th")) &&
					[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ] ||

					!tags.indexOf("<col") &&
					[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ] ||

					// IE can't serialize <link> and <script> tags normally
					!jQuery.support.htmlSerialize &&
					[ 1, "div<div>", "</div>" ] ||

					[ 0, "", "" ];

				// Go to html and back, then peel off extra wrappers
				div.innerHTML = wrap[1] + elem + wrap[2];

				// Move to the right depth
				while ( wrap[0]-- )
					div = div.lastChild;

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !jQuery.support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					var hasBody = /<tbody/i.test(elem),
						tbody = !tags.indexOf("<table") && !hasBody ?
							div.firstChild && div.firstChild.childNodes :

						// String was a bare <thead> or <tfoot>
						wrap[1] == "<table>" && !hasBody ?
							div.childNodes :
							[];

					for ( var j = tbody.length - 1; j >= 0 ; --j )
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length )
							tbody[ j ].parentNode.removeChild( tbody[ j ] );

					}

				// IE completely kills leading whitespace when innerHTML is used
				if ( !jQuery.support.leadingWhitespace && /^\s/.test( elem ) )
					div.insertBefore( context.createTextNode( elem.match(/^\s*/)[0] ), div.firstChild );
				
				elem = jQuery.makeArray( div.childNodes );
			}

			if ( elem.nodeType )
				ret.push( elem );
			else
				ret = jQuery.merge( ret, elem );

		});

		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 )
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					fragment.appendChild( ret[i] );
				}
			}
			
			return scripts;
		}

		return ret;
	},

	attr: function( elem, name, value ) {
		// don't set attributes on text and comment nodes
		if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
			return undefined;

		var notxml = !jQuery.isXMLDoc( elem ),
			// Whether we are setting (or getting)
			set = value !== undefined;

		// Try to normalize/fix the name
		name = notxml && jQuery.props[ name ] || name;

		// Only do all the following if this is a node (faster for style)
		// IE elem.getAttribute passes even for style
		if ( elem.tagName ) {

			// These attributes require special treatment
			var special = /href|src|style/.test( name );

			// Safari mis-reports the default selected property of a hidden option
			// Accessing the parent's selectedIndex property fixes it
			if ( name == "selected" && elem.parentNode )
				elem.parentNode.selectedIndex;

			// If applicable, access the attribute via the DOM 0 way
			if ( name in elem && notxml && !special ) {
				if ( set ){
					// We can't allow the type property to be changed (since it causes problems in IE)
					if ( name == "type" && jQuery.nodeName( elem, "input" ) && elem.parentNode )
						throw "type property can't be changed";

					elem[ name ] = value;
				}

				// browsers index elements by id/name on forms, give priority to attributes.
				if( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) )
					return elem.getAttributeNode( name ).nodeValue;

				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				if ( name == "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );
					return attributeNode && attributeNode.specified
						? attributeNode.value
						: elem.nodeName.match(/(button|input|object|select|textarea)/i)
							? 0
							: elem.nodeName.match(/^(a|area)$/i) && elem.href
								? 0
								: undefined;
				}

				return elem[ name ];
			}

			if ( !jQuery.support.style && notxml &&  name == "style" )
				return jQuery.attr( elem.style, "cssText", value );

			if ( set )
				// convert the value to a string (all browsers do this but IE) see #1070
				elem.setAttribute( name, "" + value );

			var attr = !jQuery.support.hrefNormalized && notxml && special
					// Some attributes require a special call on IE
					? elem.getAttribute( name, 2 )
					: elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return attr === null ? undefined : attr;
		}

		// elem is actually elem.style ... set the style

		// IE uses filters for opacity
		if ( !jQuery.support.opacity && name == "opacity" ) {
			if ( set ) {
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				elem.zoom = 1;

				// Set the alpha filter to set the opacity
				elem.filter = (elem.filter || "").replace( /alpha\([^)]*\)/, "" ) +
					(parseInt( value ) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
			}

			return elem.filter && elem.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( elem.filter.match(/opacity=([^)]*)/)[1] ) / 100) + '':
				"";
		}

		name = name.replace(/-([a-z])/ig, function(all, letter){
			return letter.toUpperCase();
		});

		if ( set )
			elem[ name ] = value;

		return elem[ name ];
	},

	trim: function( text ) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	},

	makeArray: function( array ) {
		var ret = [];

		if( array != null ){
			var i = array.length;
			// The window, strings (and functions) also have 'length'
			if( i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval )
				ret[0] = array;
			else
				while( i )
					ret[--i] = array[i];
		}

		return ret;
	},

	inArray: function( elem, array ) {
		for ( var i = 0, length = array.length; i < length; i++ )
		// Use === because on IE, window == document
			if ( array[ i ] === elem )
				return i;

		return -1;
	},

	merge: function( first, second ) {
		// We have to loop this way because IE & Opera overwrite the length
		// expando of getElementsByTagName
		var i = 0, elem, pos = first.length;
		// Also, we need to make sure that the correct elements are being returned
		// (IE returns comment nodes in a '*' query)
		if ( !jQuery.support.getAll ) {
			while ( (elem = second[ i++ ]) != null )
				if ( elem.nodeType != 8 )
					first[ pos++ ] = elem;

		} else
			while ( (elem = second[ i++ ]) != null )
				first[ pos++ ] = elem;

		return first;
	},

	unique: function( array ) {
		var ret = [], done = {};

		try {

			for ( var i = 0, length = array.length; i < length; i++ ) {
				var id = jQuery.data( array[ i ] );

				if ( !done[ id ] ) {
					done[ id ] = true;
					ret.push( array[ i ] );
				}
			}

		} catch( e ) {
			ret = array;
		}

		return ret;
	},

	grep: function( elems, callback, inv ) {
		var ret = [];

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ )
			if ( !inv != !callback( elems[ i ], i ) )
				ret.push( elems[ i ] );

		return ret;
	},

	map: function( elems, callback ) {
		var ret = [];

		// Go through the array, translating each of the items to their
		// new value (or values).
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			var value = callback( elems[ i ], i );

			if ( value != null )
				ret[ ret.length ] = value;
		}

		return ret.concat.apply( [], ret );
	}
});

// Use of jQuery.browser is deprecated.
// It's included for backwards compatibility and plugins,
// although they should work to migrate away.

var userAgent = navigator.userAgent.toLowerCase();

// Figure out what browser is being used
jQuery.browser = {
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	safari: /webkit/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

jQuery.each({
	parent: function(elem){return elem.parentNode;},
	parents: function(elem){return jQuery.dir(elem,"parentNode");},
	next: function(elem){return jQuery.nth(elem,2,"nextSibling");},
	prev: function(elem){return jQuery.nth(elem,2,"previousSibling");},
	nextAll: function(elem){return jQuery.dir(elem,"nextSibling");},
	prevAll: function(elem){return jQuery.dir(elem,"previousSibling");},
	siblings: function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},
	children: function(elem){return jQuery.sibling(elem.firstChild);},
	contents: function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}
}, function(name, fn){
	jQuery.fn[ name ] = function( selector ) {
		var ret = jQuery.map( this, fn );

		if ( selector && typeof selector == "string" )
			ret = jQuery.multiFilter( selector, ret );

		return this.pushStack( jQuery.unique( ret ), name, selector );
	};
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function(name, original){
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector );

		for ( var i = 0, l = insert.length; i < l; i++ ) {
			var elems = (i > 0 ? this.clone(true) : this).get();
			jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
			ret = ret.concat( elems );
		}

		return this.pushStack( ret, name, selector );
	};
});

jQuery.each({
	removeAttr: function( name ) {
		jQuery.attr( this, name, "" );
		if (this.nodeType == 1)
			this.removeAttribute( name );
	},

	addClass: function( classNames ) {
		jQuery.className.add( this, classNames );
	},

	removeClass: function( classNames ) {
		jQuery.className.remove( this, classNames );
	},

	toggleClass: function( classNames, state ) {
		if( typeof state !== "boolean" )
			state = !jQuery.className.has( this, classNames );
		jQuery.className[ state ? "add" : "remove" ]( this, classNames );
	},

	remove: function( selector ) {
		if ( !selector || jQuery.filter( selector, [ this ] ).length ) {
			// Prevent memory leaks
			jQuery( "*", this ).add([this]).each(function(){
				jQuery.event.remove(this);
				jQuery.removeData(this);
			});
			if (this.parentNode)
				this.parentNode.removeChild( this );
		}
	},

	empty: function() {
		// Remove element nodes and prevent memory leaks
		jQuery(this).children().remove();

		// Remove any remaining nodes
		while ( this.firstChild )
			this.removeChild( this.firstChild );
	}
}, function(name, fn){
	jQuery.fn[ name ] = function(){
		return this.each( fn, arguments );
	};
});

// Helper function used by the dimensions and offset modules
function num(elem, prop) {
	return elem[0] && parseInt( jQuery.curCSS(elem[0], prop, true), 10 ) || 0;
}
var expando = "jQuery" + now(), uuid = 0, windowData = {};

jQuery.extend({
	cache: {},

	data: function( elem, name, data ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// Compute a unique ID for the element
		if ( !id )
			id = elem[ expando ] = ++uuid;

		// Only generate the data cache if we're
		// trying to access or manipulate it
		if ( name && !jQuery.cache[ id ] )
			jQuery.cache[ id ] = {};

		// Prevent overriding the named cache with undefined values
		if ( data !== undefined )
			jQuery.cache[ id ][ name ] = data;

		// Return the named cache data, or the ID for the element
		return name ?
			jQuery.cache[ id ][ name ] :
			id;
	},

	removeData: function( elem, name ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// If we want to remove a specific section of the element's data
		if ( name ) {
			if ( jQuery.cache[ id ] ) {
				// Remove the section of cache data
				delete jQuery.cache[ id ][ name ];

				// If we've removed all the data, remove the element's cache
				name = "";

				for ( name in jQuery.cache[ id ] )
					break;

				if ( !name )
					jQuery.removeData( elem );
			}

		// Otherwise, we want to remove all of the element's data
		} else {
			// Clean up the element expando
			try {
				delete elem[ expando ];
			} catch(e){
				// IE has trouble directly removing the expando
				// but it's ok with using removeAttribute
				if ( elem.removeAttribute )
					elem.removeAttribute( expando );
			}

			// Completely remove the data cache
			delete jQuery.cache[ id ];
		}
	},
	queue: function( elem, type, data ) {
		if ( elem ){
	
			type = (type || "fx") + "queue";
	
			var q = jQuery.data( elem, type );
	
			if ( !q || jQuery.isArray(data) )
				q = jQuery.data( elem, type, jQuery.makeArray(data) );
			else if( data )
				q.push( data );
	
		}
		return q;
	},

	dequeue: function( elem, type ){
		var queue = jQuery.queue( elem, type ),
			fn = queue.shift();
		
		if( !type || type === "fx" )
			fn = queue[0];
			
		if( fn !== undefined )
			fn.call(elem);
	}
});

jQuery.fn.extend({
	data: function( key, value ){
		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			if ( data === undefined && this.length )
				data = jQuery.data( this[0], key );

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function(){
				jQuery.data( this, key, value );
			});
	},

	removeData: function( key ){
		return this.each(function(){
			jQuery.removeData( this, key );
		});
	},
	queue: function(type, data){
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined )
			return jQuery.queue( this[0], type );

		return this.each(function(){
			var queue = jQuery.queue( this, type, data );
			
			 if( type == "fx" && queue.length == 1 )
				queue[0].call(this);
		});
	},
	dequeue: function(type){
		return this.each(function(){
			jQuery.dequeue( this, type );
		});
	}
});/*!
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
	done = 0,
	toString = Object.prototype.toString;

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 )
		return [];
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true;
	
	// Reset the position of the chunker regexp (start from head)
	chunker.lastIndex = 0;
	
	while ( (m = chunker.exec(selector)) !== null ) {
		parts.push( m[1] );
		
		if ( m[2] ) {
			extra = RegExp.rightContext;
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		var ret = seed ?
			{ expr: parts.pop(), set: makeArray(seed) } :
			Sizzle.find( parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context, isXML(context) );
		set = Sizzle.filter( ret.expr, ret.set );

		if ( parts.length > 0 ) {
			checkSet = makeArray(set);
		} else {
			prune = false;
		}

		while ( parts.length ) {
			var cur = parts.pop(), pop = cur;

			if ( !Expr.relative[ cur ] ) {
				cur = "";
			} else {
				pop = parts.pop();
			}

			if ( pop == null ) {
				pop = context;
			}

			Expr.relative[ cur ]( checkSet, pop, isXML(context) );
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, context, results, seed );

		if ( sortOrder ) {
			hasDuplicate = false;
			results.sort(sortOrder);

			if ( hasDuplicate ) {
				for ( var i = 1; i < results.length; i++ ) {
					if ( results[i] === results[i-1] ) {
						results.splice(i--, 1);
					}
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		
		if ( (match = Expr.match[ type ].exec( expr )) ) {
			var left = RegExp.leftContext;

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( match[3].match(chunker).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while (node = node.previousSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while (node = node.nextSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 
						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
try {
	Array.prototype.slice.call( document.documentElement.childNodes );

// Provide a fallback method if it does not work
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.selectNode(a);
		aRange.collapse(true);
		bRange.selectNode(b);
		bRange.collapse(true);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("form"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<input name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	// Safari can't handle uppercase or unicode characters when
	// in quirks mode.
	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}
	
	Sizzle = function(query, context, extra, seed){
		context = context || document;

		// Only use querySelectorAll on non-XML documents
		// (ID selectors don't work in non-HTML documents)
		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}
		
		return oldSizzle(query, context, extra, seed);
	};

	Sizzle.find = oldSizzle.find;
	Sizzle.filter = oldSizzle.filter;
	Sizzle.selectors = oldSizzle.selectors;
	Sizzle.matches = oldSizzle.matches;
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	if ( div.getElementsByClassName("e").length === 0 )
		return;

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && isXML( elem.ownerDocument );
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
jQuery.find = Sizzle;
jQuery.filter = Sizzle.filter;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;

Sizzle.selectors.filters.hidden = function(elem){
	return elem.offsetWidth === 0 || elem.offsetHeight === 0;
};

Sizzle.selectors.filters.visible = function(elem){
	return elem.offsetWidth > 0 || elem.offsetHeight > 0;
};

Sizzle.selectors.filters.animated = function(elem){
	return jQuery.grep(jQuery.timers, function(fn){
		return elem === fn.elem;
	}).length;
};

jQuery.multiFilter = function( expr, elems, not ) {
	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return Sizzle.matches(expr, elems);
};

jQuery.dir = function( elem, dir ){
	var matched = [], cur = elem[dir];
	while ( cur && cur != document ) {
		if ( cur.nodeType == 1 )
			matched.push( cur );
		cur = cur[dir];
	}
	return matched;
};

jQuery.nth = function(cur, result, dir, elem){
	result = result || 1;
	var num = 0;

	for ( ; cur; cur = cur[dir] )
		if ( cur.nodeType == 1 && ++num == result )
			break;

	return cur;
};

jQuery.sibling = function(n, elem){
	var r = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType == 1 && n != elem )
			r.push( n );
	}

	return r;
};

return;

window.Sizzle = Sizzle;

})();
/*
 * A number of helper functions used for managing events.
 * Many of the ideas behind this code originated from
 * Dean Edwards' addEvent library.
 */
jQuery.event = {

	// Bind an event to an element
	// Original by Dean Edwards
	add: function(elem, types, handler, data) {
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		// For whatever reason, IE has trouble passing the window object
		// around, causing it to be cloned in the process
		if ( elem.setInterval && elem != window )
			elem = window;

		// Make sure that the function being executed has a unique ID
		if ( !handler.guid )
			handler.guid = this.guid++;

		// if data is passed, bind to handler
		if ( data !== undefined ) {
			// Create temporary function pointer to original handler
			var fn = handler;

			// Create unique handler function, wrapped around original handler
			handler = this.proxy( fn );

			// Store data in unique handler
			handler.data = data;
		}

		// Init the element's event structure
		var events = jQuery.data(elem, "events") || jQuery.data(elem, "events", {}),
			handle = jQuery.data(elem, "handle") || jQuery.data(elem, "handle", function(){
				// Handle the second event of a trigger and when
				// an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply(arguments.callee.elem, arguments) :
					undefined;
			});
		// Add elem as a property of the handle function
		// This is to prevent a memory leak with non-native
		// event in IE.
		handle.elem = elem;

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		jQuery.each(types.split(/\s+/), function(index, type) {
			// Namespaced event handlers
			var namespaces = type.split(".");
			type = namespaces.shift();
			handler.type = namespaces.slice().sort().join(".");

			// Get the current list of functions bound to this event
			var handlers = events[type];
			
			if ( jQuery.event.specialAll[type] )
				jQuery.event.specialAll[type].setup.call(elem, data, namespaces);

			// Init the event handler queue
			if (!handlers) {
				handlers = events[type] = {};

				// Check for a special event handler
				// Only use addEventListener/attachEvent if the special
				// events handler returns false
				if ( !jQuery.event.special[type] || jQuery.event.special[type].setup.call(elem, data, namespaces) === false ) {
					// Bind the global event handler to the element
					if (elem.addEventListener)
						elem.addEventListener(type, handle, false);
					else if (elem.attachEvent)
						elem.attachEvent("on" + type, handle);
				}
			}

			// Add the function to the element's handler list
			handlers[handler.guid] = handler;

			// Keep track of which events have been used, for global triggering
			jQuery.event.global[type] = true;
		});

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	guid: 1,
	global: {},

	// Detach an event or set of events from an element
	remove: function(elem, types, handler) {
		// don't do events on text and comment nodes
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		var events = jQuery.data(elem, "events"), ret, index;

		if ( events ) {
			// Unbind all events for the element
			if ( types === undefined || (typeof types === "string" && types.charAt(0) == ".") )
				for ( var type in events )
					this.remove( elem, type + (types || "") );
			else {
				// types is actually an event object here
				if ( types.type ) {
					handler = types.handler;
					types = types.type;
				}

				// Handle multiple events seperated by a space
				// jQuery(...).unbind("mouseover mouseout", fn);
				jQuery.each(types.split(/\s+/), function(index, type){
					// Namespaced event handlers
					var namespaces = type.split(".");
					type = namespaces.shift();
					var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

					if ( events[type] ) {
						// remove the given handler for the given type
						if ( handler )
							delete events[type][handler.guid];

						// remove all handlers for the given type
						else
							for ( var handle in events[type] )
								// Handle the removal of namespaced events
								if ( namespace.test(events[type][handle].type) )
									delete events[type][handle];
									
						if ( jQuery.event.specialAll[type] )
							jQuery.event.specialAll[type].teardown.call(elem, namespaces);

						// remove generic event handler if no more handlers exist
						for ( ret in events[type] ) break;
						if ( !ret ) {
							if ( !jQuery.event.special[type] || jQuery.event.special[type].teardown.call(elem, namespaces) === false ) {
								if (elem.removeEventListener)
									elem.removeEventListener(type, jQuery.data(elem, "handle"), false);
								else if (elem.detachEvent)
									elem.detachEvent("on" + type, jQuery.data(elem, "handle"));
							}
							ret = null;
							delete events[type];
						}
					}
				});
			}

			// Remove the expando if it's no longer used
			for ( ret in events ) break;
			if ( !ret ) {
				var handle = jQuery.data( elem, "handle" );
				if ( handle ) handle.elem = null;
				jQuery.removeData( elem, "events" );
				jQuery.removeData( elem, "handle" );
			}
		}
	},

	// bubbling is internal
	trigger: function( event, data, elem, bubbling ) {
		// Event object or event type
		var type = event.type || event;

		if( !bubbling ){
			event = typeof event === "object" ?
				// jQuery.Event object
				event[expando] ? event :
				// Object literal
				jQuery.extend( jQuery.Event(type), event ) :
				// Just the event type (string)
				jQuery.Event(type);

			if ( type.indexOf("!") >= 0 ) {
				event.type = type = type.slice(0, -1);
				event.exclusive = true;
			}

			// Handle a global trigger
			if ( !elem ) {
				// Don't bubble custom events when global (to avoid too much overhead)
				event.stopPropagation();
				// Only trigger if we've ever bound an event for it
				if ( this.global[type] )
					jQuery.each( jQuery.cache, function(){
						if ( this.events && this.events[type] )
							jQuery.event.trigger( event, data, this.handle.elem );
					});
			}

			// Handle triggering a single element

			// don't do events on text and comment nodes
			if ( !elem || elem.nodeType == 3 || elem.nodeType == 8 )
				return undefined;
			
			// Clean up in case it is reused
			event.result = undefined;
			event.target = elem;
			
			// Clone the incoming data, if any
			data = jQuery.makeArray(data);
			data.unshift( event );
		}

		event.currentTarget = elem;

		// Trigger the event, it is assumed that "handle" is a function
		var handle = jQuery.data(elem, "handle");
		if ( handle )
			handle.apply( elem, data );

		// Handle triggering native .onfoo handlers (and on links since we don't call .click() for links)
		if ( (!elem[type] || (jQuery.nodeName(elem, 'a') && type == "click")) && elem["on"+type] && elem["on"+type].apply( elem, data ) === false )
			event.result = false;

		// Trigger the native events (except for clicks on links)
		if ( !bubbling && elem[type] && !event.isDefaultPrevented() && !(jQuery.nodeName(elem, 'a') && type == "click") ) {
			this.triggered = true;
			try {
				elem[ type ]();
			// prevent IE from throwing an error for some hidden elements
			} catch (e) {}
		}

		this.triggered = false;

		if ( !event.isPropagationStopped() ) {
			var parent = elem.parentNode || elem.ownerDocument;
			if ( parent )
				jQuery.event.trigger(event, data, parent, true);
		}
	},

	handle: function(event) {
		// returned undefined or false
		var all, handlers;

		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;
		
		// Namespaced event handlers
		var namespaces = event.type.split(".");
		event.type = namespaces.shift();

		// Cache this now, all = true means, any handler
		all = !namespaces.length && !event.exclusive;
		
		var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

		handlers = ( jQuery.data(this, "events") || {} )[event.type];

		for ( var j in handlers ) {
			var handler = handlers[j];

			// Filter the functions by class
			if ( all || namespace.test(handler.type) ) {
				// Pass in a reference to the handler function itself
				// So that we can later remove it
				event.handler = handler;
				event.data = handler.data;

				var ret = handler.apply(this, arguments);

				if( ret !== undefined ){
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}

				if( event.isImmediatePropagationStopped() )
					break;

			}
		}
	},

	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

	fix: function(event) {
		if ( event[expando] )
			return event;

		// store a copy of the original event object
		// and "clone" to set read-only properties
		var originalEvent = event;
		event = jQuery.Event( originalEvent );

		for ( var i = this.props.length, prop; i; ){
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary
		if ( !event.target )
			event.target = event.srcElement || document; // Fixes #1925 where srcElement might not be defined either

		// check if target is a textnode (safari)
		if ( event.target.nodeType == 3 )
			event.target = event.target.parentNode;

		// Add relatedTarget, if necessary
		if ( !event.relatedTarget && event.fromElement )
			event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;

		// Calculate pageX/Y if missing and clientX/Y available
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
		}

		// Add which for key events
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) )
			event.which = event.charCode || event.keyCode;

		// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
		if ( !event.metaKey && event.ctrlKey )
			event.metaKey = event.ctrlKey;

		// Add which for click: 1 == left; 2 == middle; 3 == right
		// Note: button is not normalized, so don't use it
		if ( !event.which && event.button )
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));

		return event;
	},

	proxy: function( fn, proxy ){
		proxy = proxy || function(){ return fn.apply(this, arguments); };
		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
		// So proxy can be declared as an argument
		return proxy;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: bindReady,
			teardown: function() {}
		}
	},
	
	specialAll: {
		live: {
			setup: function( selector, namespaces ){
				jQuery.event.add( this, namespaces[0], liveHandler );
			},
			teardown:  function( namespaces ){
				if ( namespaces.length ) {
					var remove = 0, name = RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");
					
					jQuery.each( (jQuery.data(this, "events").live || {}), function(){
						if ( name.test(this.type) )
							remove++;
					});
					
					if ( remove < 1 )
						jQuery.event.remove( this, namespaces[0], liveHandler );
				}
			}
		}
	}
};

jQuery.Event = function( src ){
	// Allow instantiation without the 'new' keyword
	if( !this.preventDefault )
		return new jQuery.Event(src);
	
	// Event object
	if( src && src.type ){
		this.originalEvent = src;
		this.type = src.type;
	// Event type
	}else
		this.type = src;

	// timeStamp is buggy for some events on Firefox(#3843)
	// So we won't rely on the native value
	this.timeStamp = now();
	
	// Mark it as fixed
	this[expando] = true;
};

function returnFalse(){
	return false;
}
function returnTrue(){
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if preventDefault exists run it on the original event
		if (e.preventDefault)
			e.preventDefault();
		// otherwise set the returnValue property of the original event to false (IE)
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if stopPropagation exists run it on the original event
		if (e.stopPropagation)
			e.stopPropagation();
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation:function(){
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
// Checks if an event happened on an element within another element
// Used in jQuery.event.special.mouseenter and mouseleave handlers
var withinElement = function(event) {
	// Check if mouse(over|out) are still within the same parent element
	var parent = event.relatedTarget;
	// Traverse up the tree
	while ( parent && parent != this )
		try { parent = parent.parentNode; }
		catch(e) { parent = this; }
	
	if( parent != this ){
		// set the correct event type
		event.type = event.data;
		// handle event if we actually just moused on to a non sub-element
		jQuery.event.handle.apply( this, arguments );
	}
};
	
jQuery.each({ 
	mouseover: 'mouseenter', 
	mouseout: 'mouseleave'
}, function( orig, fix ){
	jQuery.event.special[ fix ] = {
		setup: function(){
			jQuery.event.add( this, orig, withinElement, fix );
		},
		teardown: function(){
			jQuery.event.remove( this, orig, withinElement );
		}
	};			   
});

jQuery.fn.extend({
	bind: function( type, data, fn ) {
		return type == "unload" ? this.one(type, data, fn) : this.each(function(){
			jQuery.event.add( this, type, fn || data, fn && data );
		});
	},

	one: function( type, data, fn ) {
		var one = jQuery.event.proxy( fn || data, function(event) {
			jQuery(this).unbind(event, one);
			return (fn || data).apply( this, arguments );
		});
		return this.each(function(){
			jQuery.event.add( this, type, one, fn && data);
		});
	},

	unbind: function( type, fn ) {
		return this.each(function(){
			jQuery.event.remove( this, type, fn );
		});
	},

	trigger: function( type, data ) {
		return this.each(function(){
			jQuery.event.trigger( type, data, this );
		});
	},

	triggerHandler: function( type, data ) {
		if( this[0] ){
			var event = jQuery.Event(type);
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}		
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments, i = 1;

		// link all the functions, so any of them can unbind this click handler
		while( i < args.length )
			jQuery.event.proxy( fn, args[i++] );

		return this.click( jQuery.event.proxy( fn, function(event) {
			// Figure out which function to execute
			this.lastToggle = ( this.lastToggle || 0 ) % i;

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ this.lastToggle++ ].apply( this, arguments ) || false;
		}));
	},

	hover: function(fnOver, fnOut) {
		return this.mouseenter(fnOver).mouseleave(fnOut);
	},

	ready: function(fn) {
		// Attach the listeners
		bindReady();

		// If the DOM is already ready
		if ( jQuery.isReady )
			// Execute the function immediately
			fn.call( document, jQuery );

		// Otherwise, remember the function for later
		else
			// Add the function to the wait list
			jQuery.readyList.push( fn );

		return this;
	},
	
	live: function( type, fn ){
		var proxy = jQuery.event.proxy( fn );
		proxy.guid += this.selector + type;

		jQuery(document).bind( liveConvert(type, this.selector), this.selector, proxy );

		return this;
	},
	
	die: function( type, fn ){
		jQuery(document).unbind( liveConvert(type, this.selector), fn ? { guid: fn.guid + this.selector + type } : null );
		return this;
	}
});

function liveHandler( event ){
	var check = RegExp("(^|\\.)" + event.type + "(\\.|$)"),
		stop = true,
		elems = [];

	jQuery.each(jQuery.data(this, "events").live || [], function(i, fn){
		if ( check.test(fn.type) ) {
			var elem = jQuery(event.target).closest(fn.data)[0];
			if ( elem )
				elems.push({ elem: elem, fn: fn });
		}
	});

	elems.sort(function(a,b) {
		return jQuery.data(a.elem, "closest") - jQuery.data(b.elem, "closest");
	});
	
	jQuery.each(elems, function(){
		if ( this.fn.call(this.elem, event, this.fn.data) === false )
			return (stop = false);
	});

	return stop;
}

function liveConvert(type, selector){
	return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "|")].join(".");
}

jQuery.extend({
	isReady: false,
	readyList: [],
	// Handle when the DOM is ready
	ready: function() {
		// Make sure that the DOM is not already loaded
		if ( !jQuery.isReady ) {
			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If there are functions bound, to execute
			if ( jQuery.readyList ) {
				// Execute all of them
				jQuery.each( jQuery.readyList, function(){
					this.call( document, jQuery );
				});

				// Reset the list of functions
				jQuery.readyList = null;
			}

			// Trigger any bound ready events
			jQuery(document).triggerHandler("ready");
		}
	}
});

var readyBound = false;

function bindReady(){
	if ( readyBound ) return;
	readyBound = true;

	// Mozilla, Opera and webkit nightlies currently support this event
	if ( document.addEventListener ) {
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", function(){
			document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
			jQuery.ready();
		}, false );

	// If IE event model is used
	} else if ( document.attachEvent ) {
		// ensure firing before onload,
		// maybe late but safe also for iframes
		document.attachEvent("onreadystatechange", function(){
			if ( document.readyState === "complete" ) {
				document.detachEvent( "onreadystatechange", arguments.callee );
				jQuery.ready();
			}
		});

		// If IE and not an iframe
		// continually check to see if the document is ready
		if ( document.documentElement.doScroll && window == window.top ) (function(){
			if ( jQuery.isReady ) return;

			try {
				// If IE is used, use the trick by Diego Perini
				// http://javascript.nwbox.com/IEContentLoaded/
				document.documentElement.doScroll("left");
			} catch( error ) {
				setTimeout( arguments.callee, 0 );
				return;
			}

			// and execute any waiting functions
			jQuery.ready();
		})();
	}

	// A fallback to window.onload, that will always work
	jQuery.event.add( window, "load", jQuery.ready );
}

jQuery.each( ("blur,focus,load,resize,scroll,unload,click,dblclick," +
	"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave," +
	"change,select,submit,keydown,keypress,keyup,error").split(","), function(i, name){

	// Handle event binding
	jQuery.fn[name] = function(fn){
		return fn ? this.bind(name, fn) : this.trigger(name);
	};
});

// Prevent memory leaks in IE
// And prevent errors on refresh with events like mouseover in other browsers
// Window isn't included so as not to unbind existing unload events
jQuery( window ).bind( 'unload', function(){ 
	for ( var id in jQuery.cache )
		// Skip the window
		if ( id != 1 && jQuery.cache[ id ].handle )
			jQuery.event.remove( jQuery.cache[ id ].handle.elem );
}); 
(function(){

	jQuery.support = {};

	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + (new Date).getTime();

	div.style.display = "none";
	div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';

	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return;
	}

	jQuery.support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType == 3,
		
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,
		
		// Make sure that you can get all elements in an <object> element
		// IE 7 always returns no results
		objectAll: !!div.getElementsByTagName("object")[0]
			.getElementsByTagName("*").length,
		
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,
		
		// Get the style information from getAttribute
		// (IE uses .cssText insted)
		style: /red/.test( a.getAttribute("style") ),
		
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",
		
		// Make sure that element opacity exists
		// (IE uses filter instead)
		opacity: a.style.opacity === "0.5",
		
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Will be defined later
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};
	
	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e){}

	root.insertBefore( script, root.firstChild );
	
	// Make sure that the execution of code works by injecting a script
	// tag with appendChild/createTextNode
	// (IE doesn't support this, fails, and uses .text instead)
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}

	root.removeChild( script );

	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function(){
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", arguments.callee);
		});
		div.cloneNode(true).fireEvent("onclick");
	}

	// Figure out if the W3C box model works as expected
	// document.body must exist before we can do this
	jQuery(function(){
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";

		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
	});
})();

var styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat";

jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	"float": styleFloat,
	cssFloat: styleFloat,
	styleFloat: styleFloat,
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	tabindex: "tabIndex"
};
jQuery.fn.extend({
	// Keep a copy of the old load
	_load: jQuery.fn.load,

	load: function( url, params, callback ) {
		if ( typeof url !== "string" )
			return this._load( url );

		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params )
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = null;

			// Otherwise, build a param string
			} else if( typeof params === "object" ) {
				params = jQuery.param( params );
				type = "POST";
			}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			complete: function(res, status){
				// If successful, inject the HTML into all the matched elements
				if ( status == "success" || status == "notmodified" )
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div/>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(/<script(.|\s)*?\/script>/g, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						res.responseText );

				if( callback )
					self.each( callback, [res.responseText, status, res] );
			}
		});
		return this;
	},

	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				(this.checked || /select|textarea/i.test(this.nodeName) ||
					/text|hidden|password|search/i.test(this.type));
		})
		.map(function(i, elem){
			var val = jQuery(this).val();
			return val == null ? null :
				jQuery.isArray(val) ?
					jQuery.map( val, function(val, i){
						return {name: elem.name, value: val};
					}) :
					{name: elem.name, value: val};
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(i,o){
	jQuery.fn[o] = function(f){
		return this.bind(o, f);
	};
});

var jsc = now();

jQuery.extend({
  
	get: function( url, data, callback, type ) {
		// shift arguments if data argument was ommited
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = null;
		}

		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	getScript: function( url, callback ) {
		return jQuery.get(url, null, callback, "script");
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get(url, data, callback, "json");
	},

	post: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = {};
		}

		return jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	ajaxSetup: function( settings ) {
		jQuery.extend( jQuery.ajaxSettings, settings );
	},

	ajaxSettings: {
		url: location.href,
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		username: null,
		password: null,
		*/
		// Create the request object; Microsoft failed to properly
		// implement the XMLHttpRequest in IE7, so we use the ActiveXObject when it is available
		// This function can be overriden by calling jQuery.ajaxSetup
		xhr:function(){
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		},
		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			script: "text/javascript, application/javascript",
			json: "application/json, text/javascript",
			text: "text/plain",
			_default: "*/*"
		}
	},

	// Last-Modified header cache for next request
	lastModified: {},

	ajax: function( s ) {
		// Extend the settings, but re-extend 's' so that it can be
		// checked again later (in the test suite, specifically)
		s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.ajaxSettings, s));

		var jsonp, jsre = /=\?(&|$)/g, status, data,
			type = s.type.toUpperCase();

		// convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" )
			s.data = jQuery.param(s.data);

		// Handle JSONP Parameter Callbacks
		if ( s.dataType == "jsonp" ) {
			if ( type == "GET" ) {
				if ( !s.url.match(jsre) )
					s.url += (s.url.match(/\?/) ? "&" : "?") + (s.jsonp || "callback") + "=?";
			} else if ( !s.data || !s.data.match(jsre) )
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			s.dataType = "json";
		}

		// Build temporary JSONP function
		if ( s.dataType == "json" && (s.data && s.data.match(jsre) || s.url.match(jsre)) ) {
			jsonp = "jsonp" + jsc++;

			// Replace the =? sequence both in the query string and the data
			if ( s.data )
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			s.url = s.url.replace(jsre, "=" + jsonp + "$1");

			// We need to make sure
			// that a JSONP style response is executed properly
			s.dataType = "script";

			// Handle JSONP-style loading
			window[ jsonp ] = function(tmp){
				data = tmp;
				success();
				complete();
				// Garbage collect
				window[ jsonp ] = undefined;
				try{ delete window[ jsonp ]; } catch(e){}
				if ( head )
					head.removeChild( script );
			};
		}

		if ( s.dataType == "script" && s.cache == null )
			s.cache = false;

		if ( s.cache === false && type == "GET" ) {
			var ts = now();
			// try replacing _= if it is there
			var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts + "$2");
			// if nothing was replaced, add timestamp to the end
			s.url = ret + ((ret == s.url) ? (s.url.match(/\?/) ? "&" : "?") + "_=" + ts : "");
		}

		// If data is available, append data to url for get requests
		if ( s.data && type == "GET" ) {
			s.url += (s.url.match(/\?/) ? "&" : "?") + s.data;

			// IE likes to send both get and post data, prevent this
			s.data = null;
		}

		// Watch for a new set of requests
		if ( s.global && ! jQuery.active++ )
			jQuery.event.trigger( "ajaxStart" );

		// Matches an absolute URL, and saves the domain
		var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec( s.url );

		// If we're requesting a remote document
		// and trying to load JSON or Script with a GET
		if ( s.dataType == "script" && type == "GET" && parts
			&& ( parts[1] && parts[1] != location.protocol || parts[2] != location.host )){

			var head = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = s.url;
			if (s.scriptCharset)
				script.charset = s.scriptCharset;

			// Handle Script loading
			if ( !jsonp ) {
				var done = false;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function(){
					if ( !done && (!this.readyState ||
							this.readyState == "loaded" || this.readyState == "complete") ) {
						done = true;
						success();
						complete();

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;
						head.removeChild( script );
					}
				};
			}

			head.appendChild(script);

			// We handle everything using the script element injection
			return undefined;
		}

		var requestDone = false;

		// Create the request object
		var xhr = s.xhr();

		// Open the socket
		// Passing null username, generates a login popup on Opera (#2865)
		if( s.username )
			xhr.open(type, s.url, s.async, s.username, s.password);
		else
			xhr.open(type, s.url, s.async);

		// Need an extra try/catch for cross domain requests in Firefox 3
		try {
			// Set the correct header, if data is being sent
			if ( s.data )
				xhr.setRequestHeader("Content-Type", s.contentType);

			// Set the If-Modified-Since header, if ifModified mode.
			if ( s.ifModified )
				xhr.setRequestHeader("If-Modified-Since",
					jQuery.lastModified[s.url] || "Thu, 01 Jan 1970 00:00:00 GMT" );

			// Set header so the called script knows that it's an XMLHttpRequest
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			// Set the Accepts header for the server, depending on the dataType
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e){}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && s.beforeSend(xhr, s) === false ) {
			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
			// close opended socket
			xhr.abort();
			return false;
		}

		if ( s.global )
			jQuery.event.trigger("ajaxSend", [xhr, s]);

		// Wait for a response to come back
		var onreadystatechange = function(isTimeout){
			// The request was aborted, clear the interval and decrement jQuery.active
			if (xhr.readyState == 0) {
				if (ival) {
					// clear poll interval
					clearInterval(ival);
					ival = null;
					// Handle the global AJAX counter
					if ( s.global && ! --jQuery.active )
						jQuery.event.trigger( "ajaxStop" );
				}
			// The transfer is complete and the data is available, or the request timed out
			} else if ( !requestDone && xhr && (xhr.readyState == 4 || isTimeout == "timeout") ) {
				requestDone = true;

				// clear poll interval
				if (ival) {
					clearInterval(ival);
					ival = null;
				}

				status = isTimeout == "timeout" ? "timeout" :
					!jQuery.httpSuccess( xhr ) ? "error" :
					s.ifModified && jQuery.httpNotModified( xhr, s.url ) ? "notmodified" :
					"success";

				if ( status == "success" ) {
					// Watch for, and catch, XML document parse errors
					try {
						// process the data (runs the xml through httpData regardless of callback)
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(e) {
						status = "parsererror";
					}
				}

				// Make sure that the request was successful or notmodified
				if ( status == "success" ) {
					// Cache Last-Modified header, if ifModified mode.
					var modRes;
					try {
						modRes = xhr.getResponseHeader("Last-Modified");
					} catch(e) {} // swallow exception thrown by FF if header is not available

					if ( s.ifModified && modRes )
						jQuery.lastModified[s.url] = modRes;

					// JSONP handles its own success callback
					if ( !jsonp )
						success();
				} else
					jQuery.handleError(s, xhr, status);

				// Fire the complete handlers
				complete();

				if ( isTimeout )
					xhr.abort();

				// Stop memory leaks
				if ( s.async )
					xhr = null;
			}
		};

		if ( s.async ) {
			// don't attach the handler to the request, just poll it instead
			var ival = setInterval(onreadystatechange, 13);

			// Timeout checker
			if ( s.timeout > 0 )
				setTimeout(function(){
					// Check to see if the request is still happening
					if ( xhr && !requestDone )
						onreadystatechange( "timeout" );
				}, s.timeout);
		}

		// Send the data
		try {
			xhr.send(s.data);
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
		}

		// firefox 1.5 doesn't fire statechange for sync requests
		if ( !s.async )
			onreadystatechange();

		function success(){
			// If a local callback was specified, fire it and pass it the data
			if ( s.success )
				s.success( data, status );

			// Fire the global callback
			if ( s.global )
				jQuery.event.trigger( "ajaxSuccess", [xhr, s] );
		}

		function complete(){
			// Process result
			if ( s.complete )
				s.complete(xhr, status);

			// The request was completed
			if ( s.global )
				jQuery.event.trigger( "ajaxComplete", [xhr, s] );

			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
		}

		// return XMLHttpRequest to allow aborting the request etc.
		return xhr;
	},

	handleError: function( s, xhr, status, e ) {
		// If a local callback was specified, fire it
		if ( s.error ) s.error( xhr, status, e );

		// Fire the global callback
		if ( s.global )
			jQuery.event.trigger( "ajaxError", [xhr, s, e] );
	},

	// Counter for holding the number of active queries
	active: 0,

	// Determines if an XMLHttpRequest was successful or not
	httpSuccess: function( xhr ) {
		try {
			// IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450
			return !xhr.status && location.protocol == "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 || xhr.status == 1223;
		} catch(e){}
		return false;
	},

	// Determines if an XMLHttpRequest returns NotModified
	httpNotModified: function( xhr, url ) {
		try {
			var xhrRes = xhr.getResponseHeader("Last-Modified");

			// Firefox always returns 200. check Last-Modified date
			return xhr.status == 304 || xhrRes == jQuery.lastModified[url];
		} catch(e){}
		return false;
	},

	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type"),
			xml = type == "xml" || !type && ct && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;

		if ( xml && data.documentElement.tagName == "parsererror" )
			throw "parsererror";
			
		// Allow a pre-filtering function to sanitize the response
		// s != null is checked to keep backwards compatibility
		if( s && s.dataFilter )
			data = s.dataFilter( data, type );

		// The filter can actually parse the response
		if( typeof data === "string" ){

			// If the type is "script", eval it in global context
			if ( type == "script" )
				jQuery.globalEval( data );

			// Get the JavaScript object, if JSON is used.
			if ( type == "json" )
				data = window["eval"]("(" + data + ")");
		}
		
		return data;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a ) {
		var s = [ ];

		function add( key, value ){
			s[ s.length ] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
		};

		// If an array was passed in, assume that it is an array
		// of form elements
		if ( jQuery.isArray(a) || a.jquery )
			// Serialize the form elements
			jQuery.each( a, function(){
				add( this.name, this.value );
			});

		// Otherwise, assume that it's an object of key/value pairs
		else
			// Serialize the key/values
			for ( var j in a )
				// If the value is an array then the key names need to be repeated
				if ( jQuery.isArray(a[j]) )
					jQuery.each( a[j], function(){
						add( j, this );
					});
				else
					add( j, jQuery.isFunction(a[j]) ? a[j]() : a[j] );

		// Return the resulting serialization
		return s.join("&").replace(/%20/g, "+");
	}

});
var elemdisplay = {},
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	];

function genFx( type, num ){
	var obj = {};
	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function(){
		obj[ this ] = type;
	});
	return obj;
}

jQuery.fn.extend({
	show: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("show", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				
				this[i].style.display = old || "";
				
				if ( jQuery.css(this[i], "display") === "none" ) {
					var tagName = this[i].tagName, display;
					
					if ( elemdisplay[ tagName ] ) {
						display = elemdisplay[ tagName ];
					} else {
						var elem = jQuery("<" + tagName + " />").appendTo("body");
						
						display = elem.css("display");
						if ( display === "none" )
							display = "block";
						
						elem.remove();
						
						elemdisplay[ tagName ] = display;
					}
					
					jQuery.data(this[i], "olddisplay", display);
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = jQuery.data(this[i], "olddisplay") || "";
			}
			
			return this;
		}
	},

	hide: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("hide", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" )
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = "none";
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2 ){
		var bool = typeof fn === "boolean";

		return jQuery.isFunction(fn) && jQuery.isFunction(fn2) ?
			this._toggle.apply( this, arguments ) :
			fn == null || bool ?
				this.each(function(){
					var state = bool ? fn : jQuery(this).is(":hidden");
					jQuery(this)[ state ? "show" : "hide" ]();
				}) :
				this.animate(genFx("toggle", 3), fn, fn2);
	},

	fadeTo: function(speed,to,callback){
		return this.animate({opacity: to}, speed, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);

		return this[ optall.queue === false ? "each" : "queue" ](function(){
		
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType == 1 && jQuery(this).is(":hidden"),
				self = this;
	
			for ( p in prop ) {
				if ( prop[p] == "hide" && hidden || prop[p] == "show" && !hidden )
					return opt.complete.call(this);

				if ( ( p == "height" || p == "width" ) && this.style ) {
					// Store display property
					opt.display = jQuery.css(this, "display");

					// Make sure that nothing sneaks out
					opt.overflow = this.style.overflow;
				}
			}

			if ( opt.overflow != null )
				this.style.overflow = "hidden";

			opt.curAnim = jQuery.extend({}, prop);

			jQuery.each( prop, function(name, val){
				var e = new jQuery.fx( self, opt, name );

				if ( /toggle|show|hide/.test(val) )
					e[ val == "toggle" ? hidden ? "show" : "hide" : val ]( prop );
				else {
					var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
						start = e.cur(true) || 0;

					if ( parts ) {
						var end = parseFloat(parts[2]),
							unit = parts[3] || "px";

						// We need to compute starting value
						if ( unit != "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] )
							end = ((parts[1] == "-=" ? -1 : 1) * end) + start;

						e.custom( start, end, unit );
					} else
						e.custom( start, val, "" );
				}
			});

			// For JS strict compliance
			return true;
		});
	},

	stop: function(clearQueue, gotoEnd){
		var timers = jQuery.timers;

		if (clearQueue)
			this.queue([]);

		this.each(function(){
			// go in reverse order so anything added to the queue during the loop is ignored
			for ( var i = timers.length - 1; i >= 0; i-- )
				if ( timers[i].elem == this ) {
					if (gotoEnd)
						// force the next step to be the last
						timers[i](true);
					timers.splice(i, 1);
				}
		});

		// start the next in the queue if the last step wasn't forced
		if (!gotoEnd)
			this.dequeue();

		return this;
	}

});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ){
	jQuery.fn[ name ] = function( speed, callback ){
		return this.animate( props, speed, callback );
	};
});

jQuery.extend({

	speed: function(speed, easing, fn) {
		var opt = typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;

		// Queueing
		opt.old = opt.complete;
		opt.complete = function(){
			if ( opt.queue !== false )
				jQuery(this).dequeue();
			if ( jQuery.isFunction( opt.old ) )
				opt.old.call( this );
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ){
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		if ( !options.orig )
			options.orig = {};
	}

});

jQuery.fx.prototype = {

	// Simple function for setting a style value
	update: function(){
		if ( this.options.step )
			this.options.step.call( this.elem, this.now, this );

		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );

		// Set display property to block for height/width animations
		if ( ( this.prop == "height" || this.prop == "width" ) && this.elem.style )
			this.elem.style.display = "block";
	},

	// Get the current size
	cur: function(force){
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) )
			return this.elem[ this.prop ];

		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},

	// Start an animation from one number to another
	custom: function(from, to, unit){
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;

		var self = this;
		function t(gotoEnd){
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(function(){
				var timers = jQuery.timers;

				for ( var i = 0; i < timers.length; i++ )
					if ( !timers[i]() )
						timers.splice(i--, 1);

				if ( !timers.length ) {
					clearInterval( timerId );
					timerId = undefined;
				}
			}, 13);
		}
	},

	// Simple 'show' function
	show: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any
		// flash of content
		this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());

		// Start by showing the element
		jQuery(this.elem).show();
	},

	// Simple 'hide' function
	hide: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom(this.cur(), 0);
	},

	// Each step of an animation
	step: function(gotoEnd){
		var t = now();

		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			this.options.curAnim[ this.prop ] = true;

			var done = true;
			for ( var i in this.options.curAnim )
				if ( this.options.curAnim[i] !== true )
					done = false;

			if ( done ) {
				if ( this.options.display != null ) {
					// Reset the overflow
					this.elem.style.overflow = this.options.overflow;

					// Reset the display
					this.elem.style.display = this.options.display;
					if ( jQuery.css(this.elem, "display") == "none" )
						this.elem.style.display = "block";
				}

				// Hide the element if the "hide" operation was done
				if ( this.options.hide )
					jQuery(this.elem).hide();

				// Reset the properties, if the item has been hidden or shown
				if ( this.options.hide || this.options.show )
					for ( var p in this.options.curAnim )
						jQuery.attr(this.elem.style, p, this.options.orig[p]);
					
				// Execute the complete function
				this.options.complete.call( this.elem );
			}

			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;

			// Perform the easing function, defaults to swing
			this.pos = jQuery.easing[this.options.easing || (jQuery.easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);

			// Perform the next step of the animation
			this.update();
		}

		return true;
	}

};

jQuery.extend( jQuery.fx, {
	speeds:{
		slow: 600,
 		fast: 200,
 		// Default speed
 		_default: 400
	},
	step: {

		opacity: function(fx){
			jQuery.attr(fx.elem.style, "opacity", fx.now);
		},

		_default: function(fx){
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null )
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			else
				fx.elem[ fx.prop ] = fx.now;
		}
	}
});
if ( document.documentElement["getBoundingClientRect"] )
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		var box  = this[0].getBoundingClientRect(), doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
		return { top: top, left: left };
	};
else 
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		jQuery.offset.initialized || jQuery.offset.initialize();

		var elem = this[0], offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView.getComputedStyle(elem, null),
			top = elem.offsetTop, left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			computedStyle = defaultView.getComputedStyle(elem, null);
			top -= elem.scrollTop, left -= elem.scrollLeft;
			if ( elem === offsetParent ) {
				top += elem.offsetTop, left += elem.offsetLeft;
				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName)) )
					top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
					left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}
			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" )
				top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
				left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" )
			top  += body.offsetTop,
			left += body.offsetLeft;

		if ( prevComputedStyle.position === "fixed" )
			top  += Math.max(docElem.scrollTop, body.scrollTop),
			left += Math.max(docElem.scrollLeft, body.scrollLeft);

		return { top: top, left: left };
	};

jQuery.offset = {
	initialize: function() {
		if ( this.initialized ) return;
		var body = document.body, container = document.createElement('div'), innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop,
			html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';

		rules = { position: 'absolute', top: 0, left: 0, margin: 0, border: 0, width: '1px', height: '1px', visibility: 'hidden' };
		for ( prop in rules ) container.style[prop] = rules[prop];

		container.innerHTML = html;
		body.insertBefore(container, body.firstChild);
		innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;

		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

		innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

		body.style.marginTop = '1px';
		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop === 0);
		body.style.marginTop = bodyMarginTop;

		body.removeChild(container);
		this.initialized = true;
	},

	bodyOffset: function(body) {
		jQuery.offset.initialized || jQuery.offset.initialize();
		var top = body.offsetTop, left = body.offsetLeft;
		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset )
			top  += parseInt( jQuery.curCSS(body, 'marginTop',  true), 10 ) || 0,
			left += parseInt( jQuery.curCSS(body, 'marginLeft', true), 10 ) || 0;
		return { top: top, left: left };
	}
};


jQuery.fn.extend({
	position: function() {
		var left = 0, top = 0, results;

		if ( this[0] ) {
			// Get *real* offsetParent
			var offsetParent = this.offsetParent(),

			// Get correct offsets
			offset       = this.offset(),
			parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? { top: 0, left: 0 } : offsetParent.offset();

			// Subtract element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft 
			// are the same in Safari causing offset.left to incorrectly be 0
			offset.top  -= num( this, 'marginTop'  );
			offset.left -= num( this, 'marginLeft' );

			// Add offsetParent borders
			parentOffset.top  += num( offsetParent, 'borderTopWidth'  );
			parentOffset.left += num( offsetParent, 'borderLeftWidth' );

			// Subtract the two offsets
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}

		return results;
	},

	offsetParent: function() {
		var offsetParent = this[0].offsetParent || document.body;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQuery.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return jQuery(offsetParent);
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ['Left', 'Top'], function(i, name) {
	var method = 'scroll' + name;
	
	jQuery.fn[ method ] = function(val) {
		if (!this[0]) return null;

		return val !== undefined ?

			// Set the scroll offset
			this.each(function() {
				this == window || this == document ?
					window.scrollTo(
						!i ? val : jQuery(window).scrollLeft(),
						 i ? val : jQuery(window).scrollTop()
					) :
					this[ method ] = val;
			}) :

			// Return the scroll offset
			this[0] == window || this[0] == document ?
				self[ i ? 'pageYOffset' : 'pageXOffset' ] ||
					jQuery.boxModel && document.documentElement[ method ] ||
					document.body[ method ] :
				this[0][ method ];
	};
});
// Create innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function(i, name){

	var tl = i ? "Left"  : "Top",  // top or left
		br = i ? "Right" : "Bottom", // bottom or right
		lower = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn["inner" + name] = function(){
		return this[0] ?
			jQuery.css( this[0], lower, false, "padding" ) :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn["outer" + name] = function(margin) {
		return this[0] ?
			jQuery.css( this[0], lower, false, margin ? "margin" : "border" ) :
			null;
	};
	
	var type = name.toLowerCase();

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		return this[0] == window ?
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			document.compatMode == "CSS1Compat" && document.documentElement[ "client" + name ] ||
			document.body[ "client" + name ] :

			// Get document width or height
			this[0] == document ?
				// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
				Math.max(
					document.documentElement["client" + name],
					document.body["scroll" + name], document.documentElement["scroll" + name],
					document.body["offset" + name], document.documentElement["offset" + name]
				) :

				// Get or set width or height on the element
				size === undefined ?
					// Get width or height on the element
					(this.length ? jQuery.css( this[0], type ) : null) :

					// Set the width or height on the element (default to pixels if value is unitless)
					this.css( type, typeof size === "string" ? size : size + "px" );
	};

});
})();
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Accordion 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);;/*
 * jQuery UI Tabs 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(b,c){if(b=="selected"){if(this.options.collapsible&&c==this.options.selected){return}this.select(c)}else{this.options[b]=c;if(b=="deselectable"){this.options.collapsible=c}this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+a.data(b)},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(c,b){return{tab:c,panel:b,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){this.list=this.element.children("ul:first");this.lis=a("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);var p=this,d=this.options;var c=/^#.+/;this.anchors.each(function(r,o){var q=a(o).attr("href");var s=q.split("#")[0],u;if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){q=o.hash;o.href=q}if(c.test(q)){p.panels=p.panels.add(p._sanitizeSelector(q))}else{if(q!="#"){a.data(o,"href.tabs",q);a.data(o,"load.tabs",q.replace(/#.*$/,""));var w=p._tabId(o);o.href="#"+w;var v=a("#"+w);if(!v.length){v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);v.data("destroy.tabs",true)}p.panels=p.panels.add(v)}else{d.disabled.push(r)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(d.selected===undefined){if(location.hash){this.anchors.each(function(q,o){if(o.hash==location.hash){d.selected=q;return false}})}if(typeof d.selected!="number"&&d.cookie){d.selected=parseInt(p._cookie(),10)}if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}d.selected=d.selected||0}else{if(d.selected===null){d.selected=-1}}d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){return p.lis.index(q)}))).sort();if(a.inArray(d.selected,d.disabled)!=-1){d.disabled.splice(a.inArray(d.selected,d.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(d.selected>=0&&this.anchors.length){this.panels.eq(d.selected).removeClass("ui-tabs-hide");this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");p.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]))});this.load(d.selected)}a(window).bind("unload",function(){p.lis.add(p.anchors).unbind(".tabs");p.lis=p.anchors=p.panels=null})}else{d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(d.cookie){this._cookie(d.selected,d.cookie)}for(var g=0,m;(m=this.lis[g]);g++){a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(d.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(d.event!="mouseover"){var f=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var j=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){f("hover",a(this))});this.lis.bind("mouseout.tabs",function(){j("hover",a(this))});this.anchors.bind("focus.tabs",function(){f("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var b,h;if(d.fx){if(a.isArray(d.fx)){b=d.fx[0];h=d.fx[1]}else{b=h=d.fx}}function e(i,o){i.css({display:""});if(a.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var k=h?function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){e(o,h);p._trigger("show",null,p._ui(i,o[0]))})}:function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");p._trigger("show",null,p._ui(i,o[0]))};var l=b?function(o,i){i.animate(b,b.duration||"normal",function(){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");e(i,b);p.element.dequeue("tabs")})}:function(o,i,q){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");p.element.dequeue("tabs")};this.anchors.bind(d.event+".tabs",function(){var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){this.blur();return false}d.selected=p.anchors.index(this);p.abort();if(d.collapsible){if(r.hasClass("ui-tabs-selected")){d.selected=-1;if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){l(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this));this.blur();return false}}}if(d.cookie){p._cookie(d.selected,d.cookie)}if(q.length){if(i.length){p.element.queue("tabs",function(){l(o,i)})}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(a.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var c=a.data(this,"href.tabs");if(c){this.href=c}var d=a(this).unbind(".tabs");a.each(["href","load","cache"],function(e,f){d.removeData(f+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(a.data(this,"destroy.tabs")){a(this).remove()}else{a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(b.cookie){this._cookie(null,b.cookie)}},add:function(e,d,c){if(c===undefined){c=this.anchors.length}var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var f=a("#"+h);if(!f.length){f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true)}f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(c>=this.lis.length){i.appendTo(this.list);f.appendTo(this.list[0].parentNode)}else{i.insertBefore(this.lis[c]);f.insertBefore(this.panels[c])}g.disabled=a.map(g.disabled,function(k,j){return k>=c?++k:k});this._tabify();if(this.anchors.length==1){i.addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]))},remove:function(b){var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(b+(b+1<this.anchors.length?1:-1))}d.disabled=a.map(a.grep(d.disabled,function(g,f){return g!=b}),function(g,f){return g>=b?--g:g});this._tabify();this._trigger("remove",null,this._ui(e.find("a")[0],c[0]))},enable:function(b){var c=this.options;if(a.inArray(b,c.disabled)==-1){return}this.lis.eq(b).removeClass("ui-state-disabled");c.disabled=a.grep(c.disabled,function(e,d){return e!=b});this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(c){var b=this,d=this.options;if(c!=d.selected){this.lis.eq(c).addClass("ui-state-disabled");d.disabled.push(c);d.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}},select:function(b){if(typeof b=="string"){b=this.anchors.index(this.anchors.filter("[href$="+b+"]"))}else{if(b===null){b=-1}}if(b==-1&&this.options.collapsible){b=this.options.selected}this.anchors.eq(b).trigger(this.options.event+".tabs")},load:function(e){var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");this.abort();if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(e).addClass("ui-state-processing");if(g.spinner){var f=a("span",b);f.data("label.tabs",f.html()).html(g.spinner)}this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){a(c._sanitizeSelector(b.hash)).html(i);c._cleanup();if(g.cache){a.data(b,"cache.tabs",true)}c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));try{g.ajaxOptions.success(i,h)}catch(j){}c.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(c,b){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b)},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){var b=this,g=this.options;var c=b._rotate||(b._rotate=function(h){clearTimeout(b.rotation);b.rotation=setTimeout(function(){var i=g.selected;b.select(++i<b.anchors.length?i:0)},d);if(h){h.stopPropagation()}});var e=b._unrotate||(b._unrotate=!f?function(h){if(h.clientX){b.rotate(null)}}:function(h){t=g.selected;c()});if(d){this.element.bind("tabsshow",c);this.anchors.bind(g.event+".tabs",e);c()}else{clearTimeout(b.rotation);this.element.unbind("tabsshow",c);this.anchors.unbind(g.event+".tabs",e);delete this._rotate;delete this._unrotate}}})})(jQuery);;/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
Copyright (c) 2008, http://seyfertdesign.com/jquery/ui-tabs-paging.html

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var initialized = false;
$.extend($.ui.tabs.prototype, {
	paging: function(options) {
		var opts = {
			tabsPerPage: 0,
			nextButton: '&#187;',
			prevButton: '&#171;',
			follow: false,
			cycle: false
		};
		
		opts = jQuery.extend(opts, options);

		var self = this, initialized = false, currentPage, 
			buttonWidth, containerWidth, allTabsWidth, tabWidths, 
			maxPageWidth, pages, resizeTimer = null, 
			windowHeight = $(window).height(), windowWidth = $(window).width();
				
		function init() {
			allTabsWidth = 0, currentPage = 0, maxPageWidth = 0, buttonWidth = 0,
				pages = new Array(), tabWidths = new Array(), selectedTabWidths = new Array();
			
			containerWidth = $(self.element).width();
			
			// create next button			
			$li = $('<li></li>')
				.addClass('ui-tabs-paging-next');
			$a = $('<a href="#"></a>')
				.click(function() { page('next'); return false; })
				.html(opts.nextButton);
			$li.append($a);
			
			self.lis.eq(self.length()-1).after($li);
			buttonWidth = $li.outerWidth({ margin: true });
			
			// create prev button
			$li = $('<li></li>')
				.addClass('ui-tabs-paging-prev');
			$a = $('<a href="#"></a>')
				.click(function() { page('prev'); return false; })
				.html(opts.prevButton);
			$li.append($a);
			self.lis.eq(0).before($li);
			buttonWidth += $li.outerWidth({ margin: true });
			
			// loops through LIs, get width of each tab when selected and unselected.
			self.lis.each(function(i) {			
				if (i == self.options.selected) {
					selectedTabWidths[i] = $(this).outerWidth({ margin: true });
					tabWidths[i] = self.lis.eq(i).removeClass('ui-tabs-selected').outerWidth({ margin: true });
					self.lis.eq(i).addClass('ui-tabs-selected');
					allTabsWidth += selectedTabWidths[i];					
				} else {
					tabWidths[i] = $(this).outerWidth({ margin: true });
					selectedTabWidths[i] = self.lis.eq(i).addClass('ui-tabs-selected').outerWidth({ margin: true });
					self.lis.eq(i).removeClass('ui-tabs-selected');
					allTabsWidth += tabWidths[i];
				}
			});
			
			// if the width of all tables is greater than the container's width, calculate the pages
			if (allTabsWidth > containerWidth) {
				var pageIndex = 0, pageWidth = 0, maxTabPadding = 0;
				
				// start calculating pageWidths
				for (var i = 0; i < tabWidths.length; i++) {
					// if first tab of page or selected tab's padding larger than the current max, set the maxTabPadding
					if (pageWidth == 0 || selectedTabWidths[i] - tabWidths[i] > maxTabPadding)
						maxTabPadding = (selectedTabWidths[i] - tabWidths[i]);
					
					// if first tab of page, initialize pages variable for page 
					if (pages[pageIndex] == null) {
						pages[pageIndex] = { start: i };
					
					} else if ((i > 0 && (i % opts.tabsPerPage) == 0) || (tabWidths[i] + pageWidth + buttonWidth + 12) > containerWidth) {
						if ((pageWidth + maxTabPadding) > maxPageWidth)	
							maxPageWidth = (pageWidth + maxTabPadding);
						pageIndex++;
						pages[pageIndex] = { start: i };			
						pageWidth = 0;
					}
					pages[pageIndex].end = i+1;
					pageWidth += tabWidths[i];
					if (i == self.options.selected) currentPage = pageIndex;
				}
				if ((pageWidth + maxTabPadding) > maxPageWidth)	
					maxPageWidth = (pageWidth + maxTabPadding);				

			    // hide all tabs then show tabs for current page
				self.lis.hide().slice(pages[currentPage].start, pages[currentPage].end).show();
				if (currentPage == (pages.length - 1) && !opts.cycle) 
					disableButton('next');			
				if (currentPage == 0 && !opts.cycle) 
					disableButton('prev');
				
				// calculate the right padding for the next button
				buttonPadding = containerWidth - maxPageWidth - buttonWidth - ($.browser.msie?8:0) -10;
				if (buttonPadding > 0) 
					$('.ui-tabs-paging-next', self.element).css({ paddingRight: buttonPadding + 'px' });
				
				initialized = true;
			} else {
				destroy();
			}
			
			$(window).bind('resize', handleResize);
		}
		
		function page(direction) {					
			currentPage = currentPage + (direction == 'prev'?-1:1);
			
			if (direction == 'prev' && currentPage < 0 && opts.cycle)
				currentPage = pages.length - 1;
			else if ((direction == 'prev' && currentPage < 0) || 
			         (direction == 'next' && currentPage >= pages.length))
				currentPage = 0;
			
			var start = pages[currentPage].start;
			var end = pages[currentPage].end;
			self.lis.hide().slice(pages[currentPage].start, pages[currentPage].end).show();
			
			if (direction == 'prev') {
				enableButton('next');
				if (opts.follow && (self.options.selected < start || self.options.selected > (end-1))) self.select(end-1);
				if (!opts.cycle && start <= 0) disableButton('prev');
			} else {
				enableButton('prev');
				if (opts.follow && (self.options.selected < start || self.options.selected > (end-1))) self.select(start);
				if (!opts.cycle && end >= self.length()) disableButton('next');
			}
		}
		
		function disableButton(direction) {
			$('.ui-tabs-paging-'+direction, self.element).addClass('ui-tabs-paging-disabled');
		}
		
		function enableButton(direction) {
			$('.ui-tabs-paging-'+direction, self.element).removeClass('ui-tabs-paging-disabled');
		}
		
		// special function defined to handle IE6 and IE7 resize issues
		function handleResize() {
			if (resizeTimer) clearTimeout(resizeTimer);
			
			if (windowHeight != $(window).height() || windowWidth != $(window).width()) 
				resizeTimer = setTimeout(reinit, 100);
		}
		
		function reinit() {	
			windowHeight = $(window).height();
			windowWidth = $(window).width();
			destroy();
			init();
		}
		
		function destroy() {	
			// remove buttons
			$('.ui-tabs-paging-next', self.element).remove();
			$('.ui-tabs-paging-prev', self.element).remove();
			
			// show all tabs
			self.lis.show();
			
			initialized = false;

			$(window).unbind('resize', handleResize);
		}
		
		init();
		
		// add, remove, and destroy functions specific for paging 
		$.extend($.ui.tabs.prototype, {	
			pagingAdd: function(url, label, index) {
				if (initialized) {
					destroy();
					this.add(url, label, index);
					init();
				} else {
					this.add(url, label, index);
				}
			},
			pagingRemove: function(index) {
				if (initialized) {
					destroy();
					this.remove(index);
					init();
				} else 
					this.remove(index);
			},
			pagingDestroy: function() {
				destroy();
			}
		});

	}
});
jQuery.autocomplete = function (input, options) {
        // Create a link to self
        var me = this;

        // Create jQuery object for input element
        var $input = $(input).attr("autocomplete", "off");

        // Apply inputClass if necessary
        if (options.inputClass) {
            $input.addClass(options.inputClass);
        }

        // Create results
        var results = document.createElement("div");
        // Create jQuery object for results
        var $results = $(results);

        var timeout = null;
        var prev = "";
        var active = -1;
        var cache = {};
        var keyb = false;
        var hasFocus = false;
        var lastKeyPressCode = null;

        function hideResultsNow() {
            if (timeout) {
                clearTimeout(timeout);
            }
            $input.removeClass(options.loadingClass);
            if ($results.is(":visible")) {
                $results.hide();
            }
            if (options.mustMatch) {
                var v = $input.val();
                if (v !== input.lastSelected) {
                    selectItem(null);
                }
            }
        }

        function hideResults() {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(hideResultsNow, 200);
        }


        $results.hide().addClass(options.resultsClass).css("position", "absolute");
        $results.focus(function () {
            hasFocus = true;
        });
        $results.blur(function () {
            hasFocus = false;
            hideResults();
        });
        if (options.width > 0) {
            $results.css("width", options.width);
        }

        // Add to body element
        $("body").append(results);

        input.autocompleter = me;


        // flush cache
        function flushCache() {
            cache = {};
            cache.data = {};
            cache.length = 0;
        }

        function addToCache(q, data) {
            if (!data || !q || !options.cacheLength) {
                return;
            }
            if (!cache.length || cache.length > options.cacheLength) {
                flushCache();
                cache.length = cache.length + 1;
            } else if (!cache[q]) {
                cache.length = cache.length + 1;
            }
            cache.data[q] = data;
        }


        // flush cache
        flushCache();

        // if there is a data array supplied
        if (options.data !== null) {
            var stMatchSets = {},  stMatchFirstCharSets = {}, row = [];

            // no url was specified, we need to adjust the cache length to make sure it fits the local data store
            if (typeof options.url !== "string") {
                options.cacheLength = 1;
            }

            // loop through the array and create a lookup structure
            for (var i = 0; i < options.data.length; i = i + 1) {
            // if row is a string, make an array otherwise just reference the array
                row = ((typeof options.data[i] === "string") ? [options.data[i]] : options.data[i]);

                // if the length is zero, don't add to list
                if (row[0].length > 0) {
                    // get the first character
                    // search data - only first char, or whole string
                    // depending on options.matchContains
                    var stToIndex = row[0].split("", 1);
                    if (options.matchContains) {
                        stToIndex = row[0].split("");
                    }
                    for (var j in stToIndex) {
                        var sChar = stToIndex[j].toLowerCase();
                        if (!stMatchSets[sChar]) {
                            stMatchSets[sChar] = [];
                        }
                        if (j === "0") {
                            // if no lookup array for this character exists, look it up now
                            if (!stMatchFirstCharSets[sChar]) {
                                stMatchFirstCharSets[sChar] = [];
                            }
                            // if the match is a string
                            stMatchFirstCharSets[sChar].push(row);
                        } else {
                            stMatchSets[sChar].push(row);
                        }
                    }
                }
            }
            // add the data items to the cache
            for (var k in stMatchSets) {
                // increase the cache size
                options.cacheLength = options.cacheLength + 1;
                // add to the cache
                var data = stMatchSets[k];
                // put strings that start with the said character first
                if (stMatchFirstCharSets[k]) {
                    data = stMatchFirstCharSets[k].concat(stMatchSets[k]);
                }
                addToCache(k, data);
            }

        }

        $input
        .keydown(function (e) {
            // track last key pressed
            lastKeyPressCode = e.keyCode;
            switch (e.keyCode) {
            case 38: // up
                e.preventDefault();
                moveSelect(-1);
                break;
            case 40: // down
                e.preventDefault();
                moveSelect(1);
                break;
            case 9:  // tab
            case 13: // return
                if (selectCurrent()) {
                    // make sure to blur off the current field
                    $input.get(0).blur();
                    e.preventDefault();
                }
                break;
            default:
                active = -1;
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function () {
                    onChange();
                }, options.delay);
                break;
            }
        })
        .focus(function () {
            // track whether the field has focus, we shouldn't process any results if the field no longer has focus
            hasFocus = true;
        })
        .blur(function () {
            // track whether the field has focus
            hasFocus = false;
        });

        hideResultsNow();

        function onChange() {
            // ignore if the following keys are pressed: [del] [shift] [capslock]
            if (lastKeyPressCode === 46 || (lastKeyPressCode > 8 && lastKeyPressCode < 32)) {
                return $results.hide();
            }
            var v = $input.val();
            if (v === prev) {
                return;
            }
            prev = v;
            if (v.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                requestData(v);
            } else {
                $input.removeClass(options.loadingClass);
                $results.hide();
            }
        }

        function moveSelect(step) {
            var lis = $("li", results);
            if (!lis) {
                return;
            }

            active += step;

            if (active < 0) {
                active = 0;
            } else if (active >= lis.size()) {
                active = lis.size() - 1;
            }

            lis.removeClass("ac_over");

            $(lis[active]).addClass("ac_over");

            // Weird behaviour in IE
            // if (lis[active] && lis[active].scrollIntoView) {
            //      lis[active].scrollIntoView(false);
            // }
        }

        function selectCurrent() {
            var li = $("li.ac_over", results)[0];
            if (!li) {
                var $li = $("li", results);
                if (options.selectOnly) {
                    if ($li.length === 1) {
                        li = $li[0];
                    }
                } else if (options.selectFirst) {
                    li = $li[0];
                }
            }
            if (li) {
                selectItem(li);
                return true;
            } else {
                return false;
            }
        }

        function selectItem(li) {
            if (!li) {
                li = document.createElement("li");
                li.extra = [];
                li.selectValue = "";
            }
            var v = $.trim(li.selectValue ? li.selectValue : li.innerHTML);
            input.lastSelected = v;
            prev = v;
            $results.html("");
            $input.val(v);
            hideResultsNow();
            if (options.onItemSelect) {
                setTimeout(function () {
                    options.onItemSelect(li);
                }, 1);
            }
        }

        // selects a portion of the input string
        function createSelection(start, end) {
            // get a reference to the input element
            var field = $input.get(0);
            if (field.createTextRange) {
                var selRange = field.createTextRange();
                selRange.collapse(true);
                selRange.moveStart("character", start);
                selRange.moveEnd("character", end);
                selRange.select();
            } else if (field.setSelectionRange) {
                field.setSelectionRange(start, end);
            } else {
                if (field.selectionStart) {
                    field.selectionStart = start;
                    field.selectionEnd = end;
                }
            }
            field.focus();
        }

        // fills in the input box w/the first match (assumed to be the best match)
        function autoFill(sValue) {
            // if the last user key pressed was backspace, don't autofill
            if (lastKeyPressCode !== 8) {
                // fill in the value (keep the case the user has typed)
                $input.val($input.val() + sValue.substring(prev.length));
                // select the portion of the value not typed by the user (so the next character will erase)
                createSelection(prev.length, sValue.length);
            }
        }

        function showResults() {
            // get the position of the input field right now (in case the DOM is shifted)
            var pos = findPos(input);
            // either use the specified width, or autocalculate based on form element
            var iWidth = (options.width > 0) ? options.width : $input.width();
            // reposition
            $results.css({
                width: parseInt(iWidth, 10) + "px",
                top: (pos.y + input.offsetHeight) + "px",
                left: pos.x + "px"
            }).show();
        }



        function receiveData(q, data) {
            if (data) {
                $input.removeClass(options.loadingClass);
                results.innerHTML = "";

                // if the field no longer has focus or if there are no matches, do not display the drop down
                if (!hasFocus || data.length === 0) {
                    return hideResultsNow();
                }

                if ($.browser.msie) {
                    // we put a styled iframe behind the calendar so HTML SELECT elements don't show through
                    $results.append(document.createElement('iframe'));
                }
                results.appendChild(dataToDom(data, q));
                // autofill in the complete box w/the first match as long as the user hasn't entered in more data
                if (options.autoFill && ($input.val().toLowerCase() === q.toLowerCase())) {
                    autoFill(data[0][0]);
                }
                showResults();
            } else {
                hideResultsNow();
            }
        }

        function parseData(data) {
            if (!data) {
                return null;
            }
            var parsed = [];
            var rows = data.split(options.lineSeparator);
            for (var i = 0; i < rows.length; i = i + 1) {
                var row = $.trim(rows[i]);
                if (row) {
                    parsed[parsed.length] = row.split(options.cellSeparator);
                }
            }
            return parsed;
        }

        function dataToDom(data, q) {
            var ul = document.createElement("ul");
            var num = data.length;

            // limited results to a max number
            if ((options.maxItemsToShow > 0) && (options.maxItemsToShow < num)) {
                num = options.maxItemsToShow;
            }

            for (var i = 0; i < num; i = i + 1) {
                var row = data[i];
                if (!row) {
                    continue;
                }
                var li = document.createElement("li");
                if (options.formatItem) {
                    li.innerHTML = options.formatItem(row, i, num);
                    li.selectValue = row[0];
                } else {
                    var line = row[0];
                    var highlightIdx = line.toLowerCase().indexOf(q);
                    line = line.substring(0, highlightIdx) + "<strong>" + line.substring(highlightIdx, highlightIdx + q.length) + "</strong>" + line.substring(highlightIdx + q.length);
                    li.innerHTML = line;
                    li.selectValue = row[0];
                }
                var extra = null;
                if (row.length > 1) {
                    extra = [];
                    for (var j = 1; j < row.length; j = j + 1) {
                        extra[extra.length] = row[j];
                    }
                }
                li.extra = extra;
                ul.appendChild(li);
            }
            $(ul).children("li").hover(function () {
                $("li", ul).removeClass("ac_over");
                $(this).addClass("ac_over");
                active = $("li", ul).indexOf($(this).get(0));
            }, function () {
                $(this).removeClass("ac_over");
            }).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                selectItem(this);
            });
            return ul;
        }

        function requestData(q) {
            if (!options.matchCase) {
                q = q.toLowerCase();
            }
            var data = options.cacheLength ? loadFromCache(q) : null;
            // recieve the cached data
            if (data) {
                receiveData(q, data);
            // if an AJAX url has been supplied, try loading the data now
            } else if ((typeof options.url === "string") && (options.url.length > 0)) {
                $.get(makeUrl(q), function (data) {
                    data = parseData(data);
                    addToCache(q, data);
                    receiveData(q, data);
                });
                // if there's been no data found, remove the loading class
            } else {
                $input.removeClass(options.loadingClass);
            }
        }

        function makeUrl(q) {
            var url = options.url + "?q=" + encodeURI(q);
            for (var i in options.extraParams) {
                url += "&" + i + "=" + encodeURI(options.extraParams[i]);
            }
            return url;
        }

        function loadFromCache(q) {
            if (!q) {
                return null;
            }
            if (cache.data[q]) {
                return cache.data[q];
            }
            if (options.matchSubset) {
                for (var i = q.length - 1; i >= options.minChars; i -= 1) {
                    var qs = q.substr(0, i);
                    var c = cache.data[qs];
                    if (c) {
                        var csub_start = [];
                        var csub_other = [];
                        for (var j = 0; j < c.length; j = j + 1) {
                            var x = c[j];
                            var x0 = x[0];
                            if (matchStart(x0, q)) {
                                csub_start[csub_start.length] = x;
                            } else if (options.matchContains && matchSubset(x0, q)) {
                                csub_other[csub_other.length] = x;
                            }
                        }
                        return csub_start.concat(csub_other);
                    }
                }
            }
            return null;
        }

        function matchStart(s, sub) {
            return matchSubset(s, sub, true);
        }

        function matchSubset(s, sub, startOnly) {
            if (startOnly === null) {
                startOnly = !options.matchContains;
            }
            if (!options.matchCase) {
                s = s.toLowerCase();
            }
            var i = s.indexOf(sub);
            if (i === -1) {
                return false;
            }
            return i === 0 || !startOnly;
        }

        this.flushCache = function () {
            flushCache();
        };

        this.setExtraParams = function (p) {
            options.extraParams = p;
        };

        this.findValue = function () {
            var q = $input.val();

            if (!options.matchCase) {
                q = q.toLowerCase();
            }
            var data = options.cacheLength ? loadFromCache(q) : null;
            if (data) {
                findValueCallback(q, data);
            } else if ((typeof options.url === "string") && (options.url.length > 0)) {
                $.get(makeUrl(q), function (data) {
                    data = parseData(data);
                    addToCache(q, data);
                    findValueCallback(q, data);
                });
            } else {
                // no matches
                findValueCallback(q, null);
            }
        };

        function findValueCallback(q, data) {
            if (data) {
                $input.removeClass(options.loadingClass);
            }

            var num = (data) ? data.length : 0;
            var li = null;

            for (var i = 0; i < num; i = i + 1) {
                var row = data[i];

                if (row[0].toLowerCase() === q.toLowerCase()) {
                    li = document.createElement("li");
                    if (options.formatItem) {
                        li.innerHTML = options.formatItem(row, i, num);
                        li.selectValue = row[0];
                    } else {
                        li.innerHTML = row[0];
                        li.selectValue = row[0];
                    }
                    var extra = null;
                    if (row.length > 1) {
                        extra = [];
                        for (var j = 1; j < row.length; j = j + 1) {
                            extra[extra.length] = row[j];
                        }
                    }
                    li.extra = extra;
                }
            }

            if (options.onFindValue) {
                setTimeout(function () {
                    options.onFindValue(li);
                }, 1);
            }
        }

        function findPos(obj) {
            var curleft = obj.offsetLeft || 0;
            var curtop = obj.offsetTop || 0;
            while ((obj = obj.offsetParent)) {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            }
            return {x: curleft, y: curtop};
        }
};

jQuery.fn.autocomplete = function (url, options, data) {
    // Make sure options exists
    options = options || {};
    // Set url as option
    options.url = url;
    // set some bulk local data
    options.data = ((typeof data === "object") && (data.constructor === Array)) ? data : null;

    // Set default values for required options
    options.inputClass = options.inputClass || "ac_input";
    options.resultsClass = options.resultsClass || "ac_results";
    options.lineSeparator = options.lineSeparator || "\n";
    options.cellSeparator = options.cellSeparator || "|";
    options.minChars = options.minChars || 1;
    options.delay = options.delay || 400;
    options.matchCase = options.matchCase || 0;
    options.matchSubset = options.matchSubset || 1;
    options.matchContains = options.matchContains || 0;
    options.cacheLength = options.cacheLength || 1;
    options.mustMatch = options.mustMatch || 0;
    options.extraParams = options.extraParams || {};
    options.loadingClass = options.loadingClass || "ac_loading";
    options.selectFirst = options.selectFirst || false;
    options.selectOnly = options.selectOnly || false;
    options.maxItemsToShow = options.maxItemsToShow || -1;
    options.autoFill = options.autoFill || false;
    options.width = parseInt(options.width, 10) || 0;

    this.each(function () {
        var input = this;
        new jQuery.autocomplete(input, options);
    });

    // Don't break the chain
    return this;
};

jQuery.fn.autocompleteArray = function(data, options) {
    return this.autocomplete(null, options, data);
};

jQuery.fn.indexOf = function(e) {
    for (var i = 0; i < this.length; i = i + 1) {
        if (this[i] === e) {
            return i;
        }
    }
    return -1;
};
var startWithDonate = false;// encapsulates a semi-random set of functions that used to be in global scope
// @@@ needs cleaning up
var Cheatsheet = function () {
    /* to keep track of views the user click through
     * e.g. when clicking on "href" attribute in element "a"
     */
    this.hashHistory = [];

    /* Putting names on the various items we know about
     * Could/should probably come from data directly
     */
    this.keywordSources = {
        "css": {"p": "CSS Property",
            "se": "CSS Selector",
            "ar": "CSS At-rules"},
        "html": {"e": "HTML Element",
             "a": "HTML Attribute"},
        "svg": {"a": "SVG Attribute",
            "p": "SVG Property",
            "e": "SVG Element"},
        "xpath": {"f": "XPath function"}
    };
};

/*
 * Makes a JQuery accordeon with the properties we want
 */
Cheatsheet.prototype.makeReplacingAccordion = function (accordion) {
    accordion.css("position", "relative");
    // update the hash when hitting an element with an id
    accordion.accordion('option', 'navigation', true);
    // take as much/as little vertical space as needed
    accordion.accordion('option', 'autoHeight', 'false');
    // allows all lines to be closed (by clicking on the open line)
    accordion.accordion('option', 'collapsible', true);
};

/*
 * Takes the collected data and displays them in an accordion view
 */
Cheatsheet.prototype.show_keyword = function (keyword_data, infoset, propertytype) {
    // Make sure we actually have data
    if (keyword_data[infoset][propertytype] === null) {
        return false;
    }
    // for each matching keyword
    for (var keyword in keyword_data[infoset][propertytype]) {
        // e.g "HTML element"
        var infosetname = this.keywordSources[infoset][propertytype];
        var div = $("<div></div>").addClass("context");
        // e.g. <h2>HTML element <code>a</code></h2>
        $("<code></code>").text(keyword).appendTo($("<h2></h2>").text(infosetname + " ").appendTo(div));
        var div2 = $("<div></div>").appendTo(div);
        // For each known context of the item
        // (examples of context: the width attribute in HTML
        // varies in model/description depending on the containing element
        for (var contextidx in keyword_data[infoset][propertytype][keyword]["d"]) { // I think the ["d"] part can be get ridden of, provided xmltojson.xsl is updated
            var context = keyword_data[infoset][propertytype][keyword]["d"][contextidx];
            var dl = $("<dl></dl>");
            for (var property in context) {
                var dt = $("<dt></dt>").appendTo(dl);
                var container = dt;
                if (context[property].u) { // u for URI
                    var propurl = context[property].u;
                    // On domain-less URIs, we assume www.w3.org as the base
                    if (propurl.substring(0, 1) === "/") {
                        propurl = "http://www.w3.org" + propurl;
                    }
                    container = $("<a></a>").attr("href", propurl).appendTo(dt);
                }
                container.text(dictionary[property]);
                // p for properties (i.e. all the detailed data about the item)
                if (context[property]["p"] && context[property]["p"].length > 0) {
                    var displayAsList = true;
                    if (context[property]["p"].length === 1 || context[property].l === "inline") { // l for list, i.e. list mode
                        displayAsList = false;
                    }
                    var listcontainer = $("<dd></dd>");
                    if (displayAsList) {
                        if (context[property].l === "block") {
                            listcontainer = $("<ul></ul>").appendTo(listcontainer);
                        }
                    }
                    for (var propcontentidx in context[property]["p"]) {
                        var hasLink = false;
                        var itemcontainer = listcontainer;
                        var propcontent = context[property]["p"][propcontentidx];
                        if (displayAsList) {
                            itemcontainer = $("<li></li>").appendTo(itemcontainer);
                        } else {
                            itemcontainer = $("<span></span>").appendTo(itemcontainer);
                        }
                        if (propcontent.u) {
                            var url = propcontent.u;
                            if (url.substring(0, 1) === "/") {
                                url = "http://www.w3.org" + url;
                            }
                            itemcontainer = $("<a></a>").attr("href", url).appendTo(itemcontainer);
                            hasLink = true;
                        } else if (context[property].i && context[property].y) {
                            itemcontainer = $("<a class='internal'></a>").attr("href", "#inf," + escape(context[property].i) + "," + escape(context[property].y) + "," + escape(propcontent.t))
                                .appendTo(itemcontainer);
                            hasLink = true;
                        }
                        if (propcontent.t instanceof Array) { // t for text
                            if (!hasLink) {
                                for (var textOrSpanIdx in propcontent.t) {
                                    var textOrSpan = propcontent.t[textOrSpanIdx];
                                    if (textOrSpan.y && textOrSpan.i && textOrSpan.t) { // span
                                        $("<a class='internal'></a>").attr("href", "#inf," + escape(textOrSpan.i) + "," + escape(textOrSpan.y) + "," + escape(textOrSpan.t)).text(textOrSpan.t).appendTo(itemcontainer);
                                    } else {
                                        // JQuery seems to lack a method to append pure text; doing manual DOM operations
                                        var t = document.createTextNode(textOrSpan);
                                        itemcontainer.get(0).appendChild(t);
                                    }
                                }
                            } else {
                                itemcontainer.text(propcontent.t.join(""));
                            }
                        } else {
                            itemcontainer.text(propcontent.t);
                        }
                        if (!displayAsList && propcontentidx < context[property]["p"].length - 1) {
                            listcontainer.append(", ");
                        }
                    }
                    listcontainer.appendTo(dl);
                }
            }
            dl.appendTo(div2);
        }
        div.appendTo($("#details"));
    }
    return true;
};

/*
 * wraps up the per keyword html and puts it into a proper accordion
 */
Cheatsheet.prototype.display_keyword_data = function (keyword_data, infoset, propertytype) {
    if (infoset && propertytype) {
        var restricted_keyword_data = {};
        restricted_keyword_data[infoset] = {};
        restricted_keyword_data[infoset][propertytype] = keyword_data[infoset][propertytype];
        keyword_data = restricted_keyword_data;
    }
    var multiple = -1;
    for (var i in keyword_data) {
        for (var p in keyword_data[i]) {
            this.show_keyword(keyword_data, i, p);
            multiple = multiple + 1;
        }
    }
    if (multiple < 1) {
        $("#details").accordion({header: 'div>h2', autoHeight: false});
    } else {
        $("#details").accordion({header: 'div>h2', autoHeight: false, active: false});
    }
    this.makeReplacingAccordion($("#details"));
};

/*
 * Gets the data from memory if available, or through JSON calls otherwise
 * and get it displayed
 */
Cheatsheet.prototype.load_keyword_data = function (keyword, infoset, propertytype) {
    if (inMemory && keywordsMatch[keyword] && (!infoset || (keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]))) {
        this.display_keyword_data(keywordsMatch[keyword], infoset, propertytype);
    } else {
        $.getJSON("data/json/" + escape(keyword).toLowerCase() + ".js", function (keyword_data) {
            this.display_keyword_data(keyword_data, infoset, propertytype);
        });
    }
};

/*
 * Clear the search box and search results
 */
Cheatsheet.prototype.clearLookUp = function () {
    if ($("#details").accordion) {
        $("#details").accordion("destroy");
    }
    $("#details").html("");
};

/*
 * Loads the view bound to a search anchor
 */
Cheatsheet.prototype.load_anchor = function (anchor) {
    if (anchor === null) {
        return false;
    }
    if (anchor.substring(0, 7) === "search,") {
        $("#search").val(anchor.substring(7));
        $("#search").get(0).autocompleter.findValue();
        return true;
    }
    // Search anchors look like "#search,inf,html,e,area"
    // (e standing for element in this case)
    var selector_path = anchor.split(',');
    var infoset = unescape(selector_path[1]);
    var propertytype = unescape(selector_path[2]);
    var keyword = unescape(selector_path.slice(3).join(","));
    if (keyword && infoset && propertytype && this.keywordSources[infoset] && this.keywordSources[infoset][propertytype] && keywordsMatch[keyword] && keywordsMatch[keyword][infoset] && keywordsMatch[keyword][infoset][propertytype]) {
        this.clearLookUp();
        $("#search").val("");
        if (this.load_keyword_data(keyword, infoset, propertytype)) {
            return true;
        }
    }
    return false;
};

/*
 * Simple wrapper for setting cookies
 */
Cheatsheet.prototype.setCookie = function (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString());
};

/*
 * Simple wrapper for reading cookies
 */
Cheatsheet.prototype.getCookie = function (c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};

var cheatsheet = new Cheatsheet();

/*
 * This defines what happens when the page has finished loading
 */
jQuery(document).ready(function ($) {
    // We create the tabs
    $('#content').tabs();
    $('#content').tabs('paging');
    $('#content').bind("tabsshow", function (event, ui) {
        window.location.hash = ui.tab.hash;
    });

    // The elements with class 'accordion' are turned into an accordion
    $(".accordion").accordion({header: 'div >h3', active: false, autoHeight: false});
    cheatsheet.makeReplacingAccordion($(".accordion"));

    $("body").css("display", "block");

    // When/if we support external keywords sources
    // this is where to load them up
    // $("#search").setOptions({"data":keywords});


    // show/hide the "about" screen
    function toggle_about() {
        if ($("#about").css("display") === "block") {
            // when already opened, we hide it
            $("#about").css("display", "none");
        } else {
            $("#about").css("display", "block");
        }
        return false;
    }

    // for the first launch, we show the about screen, with the donation form
    if (cheatsheet.getCookie("alreadyLaunched") === "" && startWithDonate) {
        toggle_about();
        cheatsheet.setCookie("alreadyLaunched", "true", 2000);
    }
    $("#openabout").click(toggle_about);
    $("#closeabout").click(toggle_about);
    $("#closeabout2").click(toggle_about);

    // Add a back link when navigating through keyword views
    function addBackLink() {
        if (cheatsheet.hashHistory.length > 0) {
            $("<a class='internal back' onclick='cheatsheet.hashHistory.pop();return true;'></a>")
                .attr("href", cheatsheet.hashHistory[cheatsheet.hashHistory.length - 1])
                .text("back")
                .appendTo($("<p></p>"))
                .appendTo($("#details"));
        }

    }

    // Function called when an item is seleted in search box/autocompletion list
    function show_result(item) {
        if (item === null) {
            return;
        }
        var keyword = item.selectValue;
        window.location.hash = "#search," + escape(keyword);
        cheatsheet.clearLookUp();
        cheatsheet.load_keyword_data(keyword);
    }

    // We keep track of internal links for managing back link
    $("a.internal").live("click",
        function ()  {
        if (cheatsheet.load_anchor($(this).attr("href").split("#")[1]) && !$(this).hasClass('back')) {
            cheatsheet.hashHistory.push(window.location.hash);
            addBackLink();
        }
    }
    );

    // Completing the search box with autocompletion
    $("#search").autocompleteArray(keywords,
        {onItemSelect: show_result, // what to do when finding a match
         onFindValue: show_result,
         autoFill: false, // don't try to auto-fill the box as this fails on mobile with virtual keyboard
         selectFirst: true, // pre-select first item
         delay: 40,
         maxItemsToShow: 10,
         matchContains: true,
         matchSubset: true // also matches when matching only a substring
         }
    );

    // When a search term is entered/selected
    // add a "clear" button
    $("#search").change(function () {
        cheatsheet.clearLookUp();
        if ($("#search").val()) {
            if (!$("#details_clear").length) {
                $("#search").after("<a href='#' class='ui-icon-close' id='details_clear' title='Clear search'>x</a>");
                $("#details_clear").click(function () {
                    cheatsheet.clearLookUp();
                    $("#search").val("").change();
                });
            }
        } else {
            $("#details_clear").replaceWith("");
        }
    });

    // if an anchor is set, loads the relevant view
    if (window.location.hash) {
        if (window.location.hash.substring(0, 5) === '#inf,' || window.location.hash.substring(0, 8) === '#search,') {
            cheatsheet.load_anchor(window.location.hash.substring(1));
        }
    }
});
