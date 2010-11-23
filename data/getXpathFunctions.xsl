<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="xml" indent="yes"
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>XPath Functions extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>XPath Functions extractor</h1>

    <p>Gathers various data on XPath functions defined in the XPath specification.</p>

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
  <infosets>
  <infoset technology="xpath">
    <xsl:for-each select="document('http://www.w3.org/TR/2007/REC-xpath-functions-20070123/')/html:html/html:body//html:*[contains(.,'fn:') and html:a[starts-with(@id,'func-')]]/parent::html:div">
      <item type="function" name="{substring-after((.//html:div[@class='proto'])[1]//html:code[@class='function'],'fn:')}">
      <xsl:for-each select=".//html:div[@class='proto']">
	<context>
	  <!-- could link up to XML Schema Datatypes some how, if it was in the cheat sheet ; it isn't though @@@ -->
	  <xsl:if test="position()=1">
	    <xsl:if test="parent::html:div/following-sibling::html:p[1][starts-with(.,'Summary:')]">
	      <property name="description">
		<content><xsl:value-of select="normalize-space(substring-after(parent::html:div/following-sibling::html:p[1][starts-with(.,'Summary:')],'Summary: '))"/></content>
	      </property>
	    </xsl:if>
	    <property name="Specification" link="{concat('/TR/xpath-functions/#',preceding::html:*[@id][1]/@id)}" />
	  </xsl:if>
	  <property name="parameters">
	    <content>
	      <xsl:choose>
		<xsl:when test="replace(normalize-space(substring-after(substring-before(.,')&#160;as'),'(')),'&#160;',' ')">
		  <xsl:value-of select="replace(normalize-space(substring-after(substring-before(.,')&#160;as'),'(')),'&#160;',' ')"/>
		</xsl:when>
		<xsl:otherwise>
		  <xsl:text>(None)</xsl:text>
		</xsl:otherwise>
	      </xsl:choose>
	    </content>
	  </property>
	  <property name="returns">
	    <content><xsl:value-of select=".//html:code[@class='return-type' or @class='return-varies']"/></content>
	  </property>
	</context>
      </xsl:for-each>
      </item>
    </xsl:for-each>
  </infoset>
  </infosets>
  </xsl:template>

</xsl:stylesheet>