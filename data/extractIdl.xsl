<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="text"
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>IDL fragment extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>IDL fragment extractor</h1>

    <p>Extract IDL fragments marked with &lt;pre class=idl&gt; or &lt;pre class=webidl&gt; from specifications.</p>

    <p class="copyright">Copyright &#169; 2013 <a href="http://www.w3.org/">World Wide Web Consortium</a>, (<a
href="http://www.csail.mit.edu/"><acronym title="Massachusetts Institute of
Technology">M.I.T.</acronym></a>, <a
href="http://www.ercim.org/"><acronym
title="European Research Consortium for Informatics and Mathematics">ERCIM</acronym></a>, <a
href="http://www.keio.ac.jp/">Keio University</a>, <a href="http://ev.buaa.edu.cn/">Beihang</a>). All Rights
    Reserved. http://www.w3.org/Consortium/Legal/. W3C <a href="http://www.w3.org/Consortium/Legal/copyright-software">software licensing</a> rules apply.</p>
    <address><a href="http://www.w3.org/People/Dom/">Dominique Haza&#235;l-Massieux</a></address>
    </body>
</html>


  <xsl:template match="/">
    <xsl:for-each select="//html:pre[@class='idl' or @class='webidl']">
      <xsl:apply-templates select="*|text()"/>
      <xsl:text>&#x0A;</xsl:text>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="text()">
    <xsl:copy/>
  </xsl:template>

  <xsl:template match="*">
      <xsl:apply-templates select="*|text()"/>
  </xsl:template>

</xsl:stylesheet>
