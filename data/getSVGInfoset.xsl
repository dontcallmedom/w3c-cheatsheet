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
    <title>SVG Infoset extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>SVG Infoset extractor</h1>

    <p>Gathers various data on elements and attributes defined in the SVG specifications.</p>

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
  <xsl:variable name='mediaProperties' select="('audio-level', 'buffered-rendering', 'display', 'image-rendering', 'pointer-events', 'shape-rendering', 'text-rendering', 'viewport-fill', 'viewport-fill-opacity', 'visibility')"/>
  <xsl:variable name="svg" select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/single-page.html')/html:html/html:body"/>
  <xsl:variable name="svgDesc" select="document('svg-descriptions.html')/html:html/html:body"/>
  <xsl:variable name="i18n" select="document('i18n.html')/html:html/html:body/html:dl"/>
  <infosets>
  <infoset technology="svg">
    <xsl:for-each select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/elementTable.html')/html:html//html:table/html:tbody/html:tr">
      <item type="element" name='{translate(html:td[1],"&apos;","")}'><context>
	<property type="attribute" name="Attributes" list="inline" infoset="svg">
	  <!-- "opacity" is the only property mixed in with attributes in the elements table (for "image" element" -->
	  <xsl:for-each select="html:td[2]//html:a[not(.='opacity')]">
	    <content><xsl:value-of select="normalize-space(.)"/></content>
	  </xsl:for-each>
	</property>
	<xsl:if test="$svgDesc//html:dl[1]/html:dt[normalize-space()=current()/html:td[1]]">
	  <property name="description">
	    <content><xsl:value-of select="normalize-space($svgDesc//html:dl[1]/html:dt[normalize-space()=current()/html:td[1]]/following-sibling::html:dd[1])"/></content>
	  </property>
	</xsl:if>
	<property name="Allowed properties">
	  <xsl:choose>
	    <xsl:when test="html:td[3]/@class='true'">
	      <content>all</content>
	    </xsl:when>
	    <xsl:when test="html:td[3]/@class='media'">
	      <xsl:attribute name="type">property</xsl:attribute>
	      <xsl:attribute name="infoset">svg</xsl:attribute>
	      <xsl:attribute name="list">inline</xsl:attribute>
	      <xsl:for-each select="$mediaProperties">
		<content><xsl:value-of select="."/></content>
	      </xsl:for-each>
	      <!-- "opacity" is the only property mixed in with attributes in the elements table (for "image" element" -->
	      <xsl:if test="html:td[2]//html:a[.='opacity']">
		<content>opacity</content>
	      </xsl:if>
	    </xsl:when>
	    <xsl:otherwise>
	      <content>None</content>
	    </xsl:otherwise>
	  </xsl:choose>
	</property>
	<property name="Allowed children" list="inline">
	  <content><xsl:apply-templates select="html:td[4]" mode="textOrSpan"><xsl:with-param name="self" select="html:td[1]"/></xsl:apply-templates></content>
	</property>
	<property name="Specification" link="{concat('/TR/2008/REC-SVGTiny12-20081222/',html:td[1]/html:a/@href)}" />
      </context></item>
    </xsl:for-each>
    <!-- dealing with properties first -->
    <xsl:for-each-group select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/attributeTable.html')/html:html//html:table[1]/html:tbody/html:tr" group-by="normalize-space(html:td[1])">
      <item type="property" name='{replace(html:td[1],"&apos;","")}'>
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
	<context>
	  <xsl:if test="$svgDesc//html:dl[2]/html:dt[normalize-space()=current()/html:td[1]]">
	    <property name="description">
	      <content><xsl:value-of select="normalize-space($svgDesc//html:dl[2]/html:dt[normalize-space()=current()/html:td[1]]/following-sibling::html:dd[1])"/></content>
	    </property>
	  </xsl:if>
	  <xsl:for-each select="current-group()">
	    <property type="element" name="Elements" list="inline" infoset="svg">
	      <xsl:for-each select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/elementTable.html')/html:html//html:table/html:tbody/html:tr[html:td[3][@class=$elementClass]]">
		<content><xsl:value-of select='replace(html:td[1],"&apos;","")'/></content>
	      </xsl:for-each>
	    </property>
	    <property name="content">
	      <content><xsl:value-of select="normalize-space(html:td[4])"/></content>
	    </property>
	    <property name="animatable">
	      <content><xsl:value-of select="normalize-space(html:td[2]/@class)"/></content>
	    </property>
	    <property name="inherited">
	      <content><xsl:value-of select="normalize-space(html:td[3]/@class)"/></content>
	    </property>
	    <property name="Specification" link="{concat('/TR/SVGTiny12/',html:td[1]/html:a/@href)}"/>
	  </xsl:for-each>
	</context>
      </item>
    </xsl:for-each-group>
    <!-- then other attributes -->
    <xsl:for-each-group select="document('http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/attributeTable.html')/html:html//html:table[2]/html:tbody/html:tr" group-by="normalize-space(html:td[1])">
      <xsl:variable name="attr" select="html:td[1]"/>
      <item type="attribute" name="{$attr}">
	<xsl:for-each select="current-group()">
	  <context type="element">
	    <items>
	      <xsl:for-each select="html:td[5]/html:a">
		<item name="{normalize-space(.)}"/>
	      </xsl:for-each>
	    </items>
	    <property type="element" name="Elements" list="inline" infoset="svg">
	      <xsl:for-each select="html:td[5]/html:a">
		<content><xsl:value-of select="."/></content>
	      </xsl:for-each>
	    </property>
	    <property name= "content">
	      <content><xsl:value-of select="html:td[4]"/></content>
	    </property>
	    <property name="animatable">
	      <content><xsl:value-of select="normalize-space(html:td[2]/@class)"/></content>
	    </property>
	    <property name="inherited">
	      <content><xsl:value-of select="normalize-space(html:td[3]/@class)"/></content>
	  </property>
	  <xsl:if test="$i18n/html:dd/html:code[@class='svg attribute'][normalize-space(.)=current()/html:td[1]]">
	    <property name="Internationalization" list="block">
	      <xsl:for-each select="$i18n/html:dd[html:code[@class='svg attribute'][normalize-space()=current()/html:td[1]]]">
		<content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	      </xsl:for-each>
	    </property>
	  </xsl:if>

	    <!-- when there is more than one set of elements per attribute
	    we can't find a unique attribute id per set of elements
	    (@@@ unless for sets that are singleton which would match
	    -FooElementBarAttribute ? ) -->
	    <xsl:choose>
	      <xsl:when test="count(current-group)=1">
		<property name="Specification" link="{concat('/TR/SVGTiny12/single-page.html#',$svg//html:*[ends-with(@id,concat('-',upper-case(substring($attr,1,1)),substring($attr,2),'Attribute'))]/@id)}"/>
	      </xsl:when>
	      <xsl:when test="count(html:td[5]/html:a)=1">
		<xsl:variable name="el" select="html:td[5]/html:a[1]"/>
		<property name="Specification" link="{concat('/TR/SVGTiny12/single-page.html#',$svg//html:*[ends-with(@id,concat('-',upper-case(substring($el,1,1)),substring($el,2),'Element',upper-case(substring($attr,1,1)),substring($attr,2),'Attribute'))]/@id)}"/>
	      </xsl:when>
	    </xsl:choose>
		
	  </context>
	  </xsl:for-each>
      </item>
    </xsl:for-each-group>
  </infoset>
  </infosets>
  </xsl:template>

  <xsl:template match="text()" mode="textOrSpan">
    <xsl:copy/>
  </xsl:template>

  <xsl:template match="html:a" mode="textOrSpan">
    <xsl:param name="self"/>
    <xsl:choose>
      <xsl:when test="not($self=.)">
	<span type='element' infoset='svg'><xsl:value-of select='normalize-space(.)'/></span>
      </xsl:when>
      <xsl:otherwise><xsl:value-of select="."/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>


</xsl:stylesheet>