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
    <title>CSS Properties extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>CSS Properties extractor</h1>

    <p>Gathers various data on elements and attributes defined in the CSS specifications.</p>

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
    <!-- Worth adding later on
    <xsl:variable name="mobileTechniques" select="document('mobilebp.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="wcagTechniques" select="document('http://www.w3.org/WAI/GL/WCAG20/sources/html-tech-src.xml')/spec/body//technique"/>
    -->
    <xsl:variable name="i18n" select="document('i18n.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="cssselectors" select="document('cssselectors.xml')/infosets/infoset"/>
    <xsl:variable name="cssflexbox" select="document('css-flexbox.xml')/infosets/infoset"/>
    <xsl:variable name="csswritingmodes" select="document('css-writing-modes.xml')/infosets/infoset"/>
    <xsl:variable name="cssmulticol" select="document('css-multicol.xml')/infosets/infoset"/>
    <xsl:variable name="cssbreak" select="document('css-break.xml')/infosets/infoset"/>
    <xsl:variable name="cssui" select="document('css-ui.xml')/infosets/infoset"/>
    <xsl:variable name="csscompositing" select="document('css-compositing.xml')/infosets/infoset"/>
    <xsl:variable name="cssshapes" select="document('css-shapes.xml')/infosets/infoset"/>
    <xsl:variable name="csstextdecor" select="document('css-text-decor.xml')/infosets/infoset"/>
    <xsl:variable name="cssimages" select="document('css-images.xml')/infosets/infoset"/>
    <xsl:variable name="cssbackgrounds" select="document('css-backgrounds.xml')/infosets/infoset"/>
    <xsl:variable name="cssanimations" select="document('css-animations.xml')/infosets/infoset"/>
    <xsl:variable name="csstransitions" select="document('css-transitions.xml')/infosets/infoset"/>
    <xsl:variable name="csscolor" select="document('css-color.xml')/infosets/infoset"/>
  <infosets>
  <infoset technology="css">
    <xsl:for-each select="document('https://services.w3.org/tidy/tidy?docAddr=http://www.w3.org/TR/CSS2/propidx.html')/html:html//html:table/html:tr/html:td[1]/html:a">
      <item type="property" name='{normalize-space(translate(.,"&apos;",""))}'><context>
	<property name="values">
	  <content>
	    <xsl:choose>
	      <xsl:when test="not(ancestor::html:tr/html:td[2]/descendant::html:span[starts-with(@class,'propinst-') or starts-with(@class,'value-inst-')])">
		<xsl:value-of select="normalize-space(ancestor::html:tr/html:td[2])"/>
	      </xsl:when>
	      <xsl:otherwise>
		<xsl:apply-templates select="ancestor::html:tr/html:td[2]/text()|ancestor::html:tr/html:td[2]/*" mode="textOrSpan" />
	      </xsl:otherwise>
	    </xsl:choose>
	  </content>
	</property>
	<xsl:if test="normalize-space(ancestor::html:tr/html:td[4])!='&#xA0;'">
	  <property name="applies">
	    <content><xsl:value-of select="normalize-space(ancestor::html:tr/html:td[4])"/></content>
	  </property>
	</xsl:if>
	<property name="inherited">
	  <content><xsl:value-of select="normalize-space(ancestor::html:tr/html:td[5])"/></content>
	</property>
	<xsl:if test="normalize-space(ancestor::html:tr/html:td[6])!='&#xA0;'">
	  <property name="percentage">
	    <content><xsl:value-of select="normalize-space(ancestor::html:tr/html:td[6])"/></content>
	  </property>
	</xsl:if>
	<property name="media">
	  <content><xsl:value-of select="normalize-space(ancestor::html:tr/html:td[7])"/></content>
	</property>
	<property name="Specification" link="{concat('/TR/CSS2/',@href)}"/>
	<xsl:if test="$i18n/html:dd/html:code[@class='css property'][normalize-space(.)=current()/html:td[1]]">
	  <property name="Internationalization" list="block">
	    <xsl:for-each select="$i18n/html:dd[html:code[@class='css property'][normalize-space()=current()/html:td[1]]]">
	      <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	    </xsl:for-each>
	  </property>
	</xsl:if>
      </context></item>
    </xsl:for-each>
    <xsl:apply-templates select="$cssselectors/*"/>
    <xsl:apply-templates select="$cssflexbox/*"/>
    <xsl:apply-templates select="$csswritingmodes/*"/>
    <xsl:apply-templates select="$cssmulticol/*"/>
    <xsl:apply-templates select="$cssbreak/*"/>
    <xsl:apply-templates select="$cssui/*"/>
    <xsl:apply-templates select="$csscompositing/*"/>
    <xsl:apply-templates select="$cssshapes/*"/>
    <xsl:apply-templates select="$csstextdecor/*"/>
    <xsl:apply-templates select="$cssimages/*"/>
    <xsl:apply-templates select="$cssbackgrounds/*"/>
    <xsl:apply-templates select="$cssanimations/*"/>
    <xsl:apply-templates select="$csstransitions/*"/>
    <xsl:apply-templates select="$csscolor/*"/>
  </infoset>
  </infosets>
  </xsl:template>

  <!-- Identity Transformation for copy of cssselectors.xml -->
  <xsl:template match="*|@*|comment()|text()">
    <xsl:copy><xsl:apply-templates select="*|@*|comment()|text()"/></xsl:copy>
  </xsl:template>

  <xsl:template match="text()" mode="textOrSpan">
    <xsl:copy/>
  </xsl:template>

  <xsl:template match="html:span[starts-with(@class,'propinst-')]" mode="textOrSpan">
    <span type='property' infoset='css'><xsl:value-of select='normalize-space(replace(.,"&apos;",""))'/></span>
  </xsl:template>

  <xsl:template match="html:span[starts-with(@class,'value-inst-')]" mode="textOrSpan">
    <xsl:choose>
      <xsl:when test="contains(.,'&lt;')">
        &lt;<span type='value space' infoset='css'><xsl:value-of select='normalize-space(replace(replace(replace(.,"uri","url"),"&lt;",""), "&gt;", ""))'/></span>&gt;
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select='normalize-space(.)'/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>


  <xsl:template match="*" mode="textOrSpan">
    <xsl:apply-templates select="*|text()" mode="textOrSpan"/>
  </xsl:template>

</xsl:stylesheet>
