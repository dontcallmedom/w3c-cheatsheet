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

  <!-- default: Identity Transformation -->
  <xsl:template match="*|@*|comment()|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|comment()|text()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="/">
    cssProperties = [
    <xsl:for-each select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/CSS2/propidx.html')/html:html//html:table/html:tr/html:td[1]/html:a">
      <xsl:value-of select="."/>,
    </xsl:for-each>
    ];
    cssPropertiesDetails = {
    <xsl:for-each select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/CSS2/propidx.html')/html:html//html:table/html:tr/html:td[1]/html:a">
      <xsl:value-of select="."/>:[{
        "values":"<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[2])"/>",
	<xsl:if test="normalize-space(ancestor::html:tr/html:td[4])!='&#xA0;'">
	  "applies":"<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[4])"/>",
	</xsl:if>
	"inherited":"<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[5])"/>",
	<xsl:if test="normalize-space(ancestor::html:tr/html:td[6])!='&#xA0;'">
	  "percentage":"<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[6])"/>",
	</xsl:if>
	"media":"<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[7])"/>",
	"source":"http://www.w3.org/TR/CSS2/<xsl:value-of select="@href"/>"
      }],
    </xsl:for-each>
    };
  </xsl:template>

</xsl:stylesheet>