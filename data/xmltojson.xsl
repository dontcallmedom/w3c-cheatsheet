<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="text" 
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>Infoset-XML to JSON</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>Infoset-XML to JSON</h1>

    <p>Turns the data collected in Infoset-XML (<a href="schema.rnc">schema</a>) into a JSON format for use in the cheat sheet.</p>


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




  <xsl:template match="/">
    <xsl:for-each select="/infosets/infoset">
      <xsl:text>sources["</xsl:text>
      <xsl:value-of select="replace(@technology,'&quot;','\\&quot;')"/>
      <xsl:text>"] = {</xsl:text>
      <xsl:for-each-group select="item" group-by="@type">
	<xsl:text>&#xA;    "</xsl:text>
	<xsl:value-of select="replace(@type,'&quot;','\\&quot;')"/>
	<xsl:text>": {</xsl:text>
	 <xsl:for-each select="current-group()"> <!-- looping on <item> -->
	   <xsl:text>&#xA;        "</xsl:text><xsl:value-of select="replace(@name,'&quot;','\\&quot;')"/><xsl:text>": [</xsl:text>
	   <xsl:for-each select="context">
	     <xsl:text>{</xsl:text>
	     <xsl:for-each select="property">
	       <xsl:text>"</xsl:text><xsl:value-of select="replace(@type,'&quot;','\\&quot;')"/><xsl:text>": {</xsl:text> <!-- e.g. "attributes": { -->
	       <xsl:if test="@link">
		 <xsl:text>"url": "</xsl:text><xsl:value-of select="replace(@link,'&quot;','\\&quot;')"/><xsl:text>"</xsl:text>
	       </xsl:if>
	       <xsl:if test="count(content)">
		 <xsl:if test="@link">
		   <xsl:text>, </xsl:text>
		 </xsl:if>
		 <xsl:if test="@list">
		   <xsl:text>"list": "</xsl:text><xsl:value-of select="replace(@list,'&quot;','\\&quot;')"/><xsl:text>", </xsl:text>
		 </xsl:if>
		 <xsl:text>properties: [</xsl:text>
		 <xsl:for-each select="content">
		   <xsl:text>{</xsl:text>
		   <xsl:if test="@link">
		     <xsl:text>"url": "</xsl:text><xsl:value-of select="replace(@link,'&quot;','\\&quot;')"/><xsl:text>", </xsl:text>
		   </xsl:if>
		   <xsl:text>"title": "</xsl:text><xsl:value-of select="replace(.,'&quot;','\\&quot;')"/><xsl:text>"</xsl:text>
		   <xsl:text>}</xsl:text> <!-- end of {link,title} t-uple -->
		   <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
		 </xsl:for-each>
		 <xsl:text>]</xsl:text> <!-- enf of properties: [ -->
	       </xsl:if>
	       <xsl:text>}</xsl:text> <!-- end of "attributes": { -->
	       <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
	     </xsl:for-each>
	     <xsl:text>}</xsl:text>
	     <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
	   </xsl:for-each>
	   <xsl:text>&#xA;        ]</xsl:text> <!-- end of e.g. input: [] -->
	   <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
	 </xsl:for-each>
	 <xsl:text>&#xA;    }</xsl:text> <!-- end of e.g. html elements: -->
	 <xsl:if test="position()!=last()"><xsl:text>, </xsl:text></xsl:if>
      </xsl:for-each-group>
      <xsl:text>&#xA;};&#xA;</xsl:text> <!-- end of e.g. html infoset -->
    </xsl:for-each>
  </xsl:template>


</xsl:stylesheet>