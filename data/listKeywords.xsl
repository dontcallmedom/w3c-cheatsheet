<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="urn:foo">

<xsl:output method="text" 
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>Infoset-XML to JSON Keywords</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>Infoset-XML to JSON Keywords</h1>

    <p>Turns the data collected in Infoset-XML (<a href="schema.rnc">schema</a>) into the list of matching keywords in a JSON array, for use in the cheat sheet open search suggestions.</p>


    <p class="copyright">Copyright &#169; 2009 <a href="http://www.w3.org/">World Wide Web Consortium</a>, (<a
href="http://www.csail.mit.edu/"><acronym title="Massachusetts Institute of
Technology">M.I.T.</acronym></a>, <a
href="http://www.ercim.org/"><acronym
title="European Research Consortium for Informatics and Mathematics">ERCIM</acronym></a>, <a
href="http://www.keio.ac.jp/">Keio University</a>). All Rights
    Reserved. http://www.w3.org/Consortium/Legal/. W3C <a href="http://www.w3.org/Consortium/Legal/copyright-software">software licensing</a> rules apply.</p>
    <address><a href="http://www.w3.org/People/Dom/">Dominique Haza&#235;l-Massieux</a> - $Id$</address>
    </body>
</html>

<xsl:variable name="xmlSources" select="('html.xml','svg.xml','css.xml','xpath.xml')"/>
<xsl:variable name="sources">
  <xsl:for-each select="$xmlSources">
    <xsl:copy-of select="document(.)/infosets"/>
  </xsl:for-each>
</xsl:variable>


  <xsl:template match="/">
    <xsl:text>{</xsl:text>
    <xsl:for-each-group select="$sources//item" group-by="@name">
      <xsl:text>"</xsl:text><xsl:value-of select="replace(@name,'&quot;','\\&quot;')"/><xsl:text>": </xsl:text><xsl:value-of select="count(current-group())"/>
      <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
    </xsl:for-each-group>
    <xsl:text>}</xsl:text>
  </xsl:template>

</xsl:stylesheet>