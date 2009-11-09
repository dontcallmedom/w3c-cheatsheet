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
    <!-- @@@ can this be extracted automatically from the spec? -->
    <xsl:variable name='mediaProperties' select="('audio-level', 'buffered-rendering', 'display', 'image-rendering', 'pointer-events', 'shape-rendering', 'text-rendering', 'viewport-fill', 'viewport-fill-opacity', 'visibility')"/>

    svgElementsDetails = {
    <xsl:for-each select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/elementTable.html')/html:html//html:table/html:tbody/html:tr">
      <xsl:value-of select="html:td[1]"/>:
        [{"attributes":"<xsl:value-of select="html:td[2]"/>",
	  "Allowed properties":<xsl:choose>
	  <xsl:when test="html:td[3]/@class='true'">
	    <xsl:text>"all"</xsl:text>
	  </xsl:when>
	  <xsl:when test="html:td[3]/@class='media'">
	    <xsl:text>"media properties"</xsl:text>
	  </xsl:when>
	  <xsl:otherwise>
	    <xsl:text>"unknown"</xsl:text>
	  </xsl:otherwise>
	</xsl:choose>,
	  "allowed children":"<xsl:value-of select="html:td[4]"/>",
	  "source":"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/<xsl:value-of select="html:td[1]/html:a/@href"/>"}]
        <xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if>
    </xsl:for-each>
    };
    svgAttributesDetails = {
    <!-- dealing with properties first -->
    <xsl:for-each-group select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/attributeTable.html')/html:html//html:table[1]/html:tbody/html:tr" group-by="normalize-space(html:td[1])">
           <xsl:value-of select="html:td[1]"/>:[
	   <xsl:variable name="elementClass">
	     <xsl:choose>
	       <xsl:when test="html:td[1]=$mediaProperties">
		 <xsl:value-of select="('true','media')"/>
	       </xsl:when>
	       <xsl:otherwise>
		 <xsl:value-of select="('true')"/>
	       </xsl:otherwise>
	     </xsl:choose>
	   </xsl:variable>
	   <xsl:for-each select="current-group()">{	  
	   "elements":
	   "<xsl:for-each select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/elementTable.html')/html:html//html:table/html:tbody/html:tr[html:td[3][@class=$elementClass]]">
	     <xsl:value-of select='replace(html:td[1],"&apos;","")'/><xsl:text>, </xsl:text>
	   </xsl:for-each>",
	   "content":"<xsl:value-of select="normalize-space(html:td[4])"/>",
	   "animatable":"<xsl:value-of select="normalize-space(html:td[2]/@class)"/>",
	   "inherited":"<xsl:value-of select="normalize-space(html:td[3]/@class)"/>",
	   "source":"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/<xsl:value-of select="html:td[1]/html:a/@href"/>"
	   },
	   </xsl:for-each>]
           <xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if>
    </xsl:for-each-group>
    <!-- then other attributes -->
    <xsl:for-each-group select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/attributeTable.html')/html:html//html:table[2]/html:tbody/html:tr" group-by="normalize-space(html:td[1])">
      <xsl:variable name="attr" select="html:td[1]"/>
           '<xsl:value-of select="$attr"/>':[
	   <xsl:for-each select="current-group()">{	  
	   "elements":"<xsl:value-of select="html:td[5]"/>",
	   "content":"<xsl:value-of select="html:td[4]"/>",
	   "animatable":"<xsl:value-of select="normalize-space(html:td[2]/@class)"/>",
	   "inherited":"<xsl:value-of select="normalize-space(html:td[3]/@class)"/>",
	   "source":"http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html#<xsl:value-of select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html')/html:html/html:body//html:*[ends-with(@id,concat('-',upper-case(substring($attr,1,1)),substring($attr,2),'Attribute'))]/@id"/>"
	   },
	   </xsl:for-each>]
	   <xsl:if test="position()!=last()"><xsl:text>,</xsl:text></xsl:if>
    </xsl:for-each-group>
    };

  </xsl:template>


</xsl:stylesheet>