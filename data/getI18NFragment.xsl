<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="xml" 
  indent="yes"
  omit-xml-declaration="yes" 
  encoding="utf-8" />


  <!-- default: Identity Transformation -->
  <xsl:template match="*">
    <xsl:element name='{local-name()}'>
      <xsl:apply-templates select="*|@*|comment()|text()"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="@*|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|comment()|text()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="/">
  <div class='accordion'>
    <h2>Internationalization Quicktips</h2>
    <xsl:for-each select="/html:html/html:body//html:dt[@class='tipdl']">
      <div>
      <xsl:choose>
	<xsl:when test="html:a/@id">
	  <h3><a href='#{html:a/@id}'><xsl:apply-templates select="html:span/*"/></a></h3>
	  <div id="{html:a/@id}">
	    <xsl:apply-templates select="following-sibling::html:dd[1]/*" />
	  </div>
	</xsl:when>
	<xsl:otherwise>
	  <h3><span><xsl:apply-templates select="html:span/*"/></span></h3>
	</xsl:otherwise>
      </xsl:choose>
      </div>
    </xsl:for-each>
  </div>
  </xsl:template>

</xsl:stylesheet>