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
    xpathFunctions = [
    <xsl:for-each select="document('http://www.w3.org/TR/2007/REC-xpath-functions-20070123/')/html:html/html:body//html:*[contains(.,'fn:') and html:a[starts-with(@id,'func-')]]">
     '<xsl:value-of select="substring-after(normalize-space(.),'fn:')"/>',
    </xsl:for-each>
    ];
    xpathFunctionsDetails = {
    <xsl:for-each select="document('http://www.w3.org/TR/2007/REC-xpath-functions-20070123/')/html:html/html:body//html:*[contains(.,'fn:') and html:a[starts-with(@id,'func-')]]/following::html:div[@class='proto'][1]">

      '<xsl:value-of select="substring-after(.//html:code[@class='function'],'fn:')"/>':
        [{"parameters":"<xsl:value-of select="normalize-space(substring-after(substring-before(.,')&#160;as'),'('))"/>",
	   "returns":"<xsl:value-of select=".//html:code[@class='return-type']"/>",
	   "source":"http://www.w3.org/TR/2007/REC-xpath-functions-20070123/#<xsl:value-of select="preceding::html:*[@id][1]/@id"/>"
	   }
	],
         
    </xsl:for-each>
    };

  </xsl:template>


</xsl:stylesheet>