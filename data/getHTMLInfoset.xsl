<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="text" 
  encoding="utf-8" 
  />
 <!-- update the @@@ -->
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>@@@</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>@@@</h1>

    <!-- Useful when used with the XSLT-online servlet -->
    <!-- Make sure to set the @@@ value to the URI of the published XSLT -->
    <form action="http://www.w3.org/2002/08/xslt4html" method="get">
      <!-- use http://www.w3.org/2000/06/webdata/xslt if not for (X)HTML content -->
      <div>
        <input type="hidden" name="xslfile" value="@@@" />
        <p><label>URI of the HTML page: <input type="text" name="xmlfile" value="http://www.w3.org/" /></label></p>
        <p><input type="submit" value="Process" /><input type="reset" /></p>
      </div>
    </form>


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

    htmlElementsDetails = {
    <xsl:for-each select="document('http://www.w3.org/2007/09/dtd-comparison.html')/html:html//html:table/html:tbody/html:tr/html:th[1]">
      <xsl:variable name="attributes">
	<xsl:apply-templates select="ancestor::html:tr/html:td[1]" mode="dereferenceAttributeGroups"/>
      </xsl:variable>
      '<xsl:value-of select="."/>':
        [{"attributes":"<xsl:value-of select="replace(replace(replace($attributes,', ,',','),',,*',','),',$','')"/>","source":"http://www.w3.org/TR/1999/REC-html401-19991224/index/<xsl:value-of select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/elements.html')/html:html//html:table/html:tr/html:td[1][normalize-space(.)=upper-case(current())]/html:a/@href"/>"}]
      <xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if>
    </xsl:for-each>
    };
    htmlAttributesDetails = {
    <xsl:for-each-group select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/attributes.html')/html:html//html:table/html:tr[position()&gt;1]" group-by="normalize-space(html:td[1])">
           '<xsl:value-of select="html:td[1]"/>':[
	   <xsl:for-each select="current-group()">{
	   "elements":"<xsl:value-of select="normalize-space(lower-case(html:td[2]))"/>",
	   "content":"<xsl:value-of select="normalize-space(html:td[3])"/>",
	   "description":"<xsl:value-of select="replace(normalize-space(html:td[7]),'&quot;','\\&quot;')"/>",
	   "source":"http://www.w3.org/TR/1999/REC-html401-19991224/index/<xsl:value-of select="html:td[1]/html:a/@href"/>"
	   },
	   </xsl:for-each>]
	   <xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if>
    </xsl:for-each-group>
    };

  </xsl:template>

  <xsl:template match="html:td" mode="dereferenceAttributeGroups">
    <xsl:for-each select="html:a">
      <xsl:value-of select="normalize-space(/html:html/html:body//html:dl/html:dt[html:a[@id=substring-after(current()/@href,'#')]]/following-sibling::html:dd[1])"/><xsl:text>, </xsl:text>
    </xsl:for-each>
    <xsl:apply-templates select="text()"/>
  </xsl:template>

  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

</xsl:stylesheet>