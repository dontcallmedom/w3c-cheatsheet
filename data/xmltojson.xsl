<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="urn:foo">

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


<dictionary xmlns="urn:foo">
<term><full>Pattern</full><short>pt</short></term>
<term><full>name</full><short>n</short></term>
<term><full>description</full><short>d</short></term>
<term><full>Internationalization</full><short>i</short></term>
<term><full>Accessibility techniques</full><short>ac</short></term>
<term><full>QA Tip</full><short>q</short></term>
<term><full>Mobile considerations</full><short>m</short></term>
<term><full>Elements</full><short>el</short></term>
<term><full>content</full><short>c</short></term>
<term><full>Allowed properties</full><short>pr</short></term>
<term><full>Allowed children</full><short>k</short></term>
<term><full>parameters</full><short>pa</short></term>
<term><full>returns</full><short>r</short></term>
<term><full>Example</full><short>ex</short></term>
<term><full>Syntax</full><short>s</short></term>
<term><full>values</full><short>v</short></term>
<term><full>inherited</full><short>in</short></term>
<term><full>media</full><short>me</short></term>
<term><full>animatable</full><short>an</short></term>
<term><full>Specification</full><short>sp</short></term>
<term><full>Attributes</full><short>at</short></term>
<term><full>percentage</full><short>pe</short></term>
<term><full>applies</full><short>ap</short></term>
<term><full>element</full><short>e</short></term>
<term><full>attribute</full><short>a</short></term>
<term><full>property</full><short>p</short></term>
<term><full>selector</full><short>se</short></term>
<term><full>at-rule</full><short>ar</short></term>
<term><full>function</full><short>f</short></term>
</dictionary>


  <xsl:template match="/">
    <xsl:for-each select="/infosets/infoset">
      <xsl:text>sources["</xsl:text>
      <xsl:value-of select="replace(@technology,'&quot;','\\&quot;')"/>
      <xsl:text>"] = {</xsl:text>
      <xsl:for-each-group select="item" group-by="@type">
	<xsl:text>&#xA;    "</xsl:text>
	<xsl:value-of select="document('')/xsl:stylesheet/foo:dictionary/foo:term[foo:full=current()/@type]/foo:short"/>
	<xsl:text>": {</xsl:text>
	 <xsl:for-each select="current-group()"> <!-- looping on <item> -->
	   <xsl:text>&#xA;        "</xsl:text><xsl:value-of select="replace(@name,'&quot;','\\&quot;')"/><xsl:text>": [</xsl:text>
	   <xsl:for-each select="context">
	     <xsl:text>{</xsl:text>
	     <xsl:for-each select="property">
	       <xsl:text>"</xsl:text><xsl:value-of select="document('')/xsl:stylesheet/foo:dictionary/foo:term[foo:full=current()/@name]/foo:short"/><xsl:text>": {</xsl:text> <!-- e.g. "attributes": { -->
	       <xsl:if test="@type">
		 <xsl:text>y: "</xsl:text><xsl:value-of select="replace(@type,'&quot;','\\&quot;')"/><xsl:text>"</xsl:text>
	       </xsl:if>
	       <xsl:if test="@link">
		 <xsl:if test="@type"><xsl:text>, </xsl:text></xsl:if>
		 <xsl:text>u: "</xsl:text><xsl:value-of select="replace(@link,'&quot;','\\&quot;')"/><xsl:text>"</xsl:text>
	       </xsl:if>
	       <xsl:if test="count(content)">
		 <xsl:if test="@link or @type">
		   <xsl:text>, </xsl:text>
		 </xsl:if>
		 <xsl:if test="@infoset">
		   <xsl:text>i: "</xsl:text><xsl:value-of select="@infoset"/><xsl:text>", </xsl:text>
		 </xsl:if>
		 <xsl:if test="@list">
		   <xsl:text>l: "</xsl:text><xsl:value-of select="replace(@list,'&quot;','\\&quot;')"/><xsl:text>", </xsl:text>
		 </xsl:if>
		 <xsl:text>p: [</xsl:text>
		 <xsl:for-each select="content">
		   <xsl:text>{</xsl:text>
		   <xsl:if test="@link">
		     <xsl:text>u: "</xsl:text><xsl:value-of select="replace(@link,'&quot;','\\&quot;')"/><xsl:text>", </xsl:text>
		   </xsl:if>
		   <xsl:text>t: "</xsl:text><xsl:value-of select="replace(.,'&quot;','\\&quot;')"/><xsl:text>"</xsl:text>
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