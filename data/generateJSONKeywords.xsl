<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="urn:foo">
<xsl:import href="xmltojson.xsl"/>

<xsl:output method="text" 
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>Infoset-XML to JSON description of Keywords</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>Infoset-XML to JSON description of Keywords</h1>

    <p>Turns the data collected in Infoset-XML (<a href="schema.rnc">schema</a>) into a series of JSON files, one per matching keyword, for use in the cheat sheet open search suggestions.</p>


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
    <xsl:for-each-group select="$sources//infoset/item|$sources//infoset/list" group-by="lower-case(@name)">
      <xsl:choose>
	<xsl:when test="@name">
	  <xsl:variable name="filename" select="lower-case(encode-for-uri(encode-for-uri(@name)))"/>
	  <xsl:result-document href="{concat('data/json/', $filename, '.js')}">
	    <xsl:text>{</xsl:text>
	    <xsl:for-each-group select="current-group()" group-by="ancestor::infoset/@technology">
	      <xsl:text>"</xsl:text><xsl:value-of select="ancestor::infoset/@technology"/><xsl:text>": {</xsl:text>
	      <xsl:for-each-group select="current-group()" group-by="@type">
		<xsl:call-template name="itemToJson"/>
	      </xsl:for-each-group>
	      <xsl:text>}</xsl:text>
	      <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
	    </xsl:for-each-group>
	    <xsl:text>}</xsl:text>
	  </xsl:result-document>
	</xsl:when>
	<xsl:otherwise>
	  <xsl:message>Skipped item with empty name in <xsl:value-of select="ancestor::infoset/@technology"/></xsl:message>
	</xsl:otherwise>
      </xsl:choose>
      </xsl:for-each-group>
  </xsl:template>

</xsl:stylesheet>