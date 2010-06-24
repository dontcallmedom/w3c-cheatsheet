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
    <title>HTML Infoset extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>HTML5 Infoset extractor</h1>

    <p>Gathers various data on elements and attributes defined in the <a href="http://dev.w3.org/html5/markup/spec.html">HTML5 Markup specification</a>.</p>

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

    <xsl:variable name="html5" select="document('http://www.w3.org/services/tidy?docAddr=http://dev.w3.org/html5/markup/spec.html')/html:html/html:body"/>


  <xsl:template match="/">
    <xsl:variable name="mobileTechniques" select="document('mobilebp.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="wcagTechniques" select="document('http://www.w3.org/WAI/GL/WCAG20/sources/html-tech-src.xml')/spec/body//technique"/>
    <xsl:variable name="qaTips" select="document('qa.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="i18n" select="document('i18n.html')/html:html/html:body/html:dl"/>
  <infosets>
  <infoset technology="html">
    <xsl:for-each select="$html5//html:div[@id='elements']/html:div[html:h2[@class='element-head']]">
      <item type="element" name="{@id}"><context>
	<property type="attribute" name="Attributes" list="inline" infoset="html">
	  <xsl:for-each select=".//html:dl[@class='attr-defs']/html:dt">
	    <!-- @@@ mark obsolete/new/changed status -->
	    <content><xsl:value-of select="html:a"/></content>
	  </xsl:for-each>
	  <!-- @@@ add common attributes -->
	</property>
	<property type="element" name="content" list="inline" infoset="html">
	  <xsl:apply-templates select=".//html:p[@class='elem-mdl']" mode="textOrSpan"/>
	</property>
	<property name="description">
	  <content><xsl:value-of select="normalize-space(.//html:div[@class='longdesc']/html:p[1])"/></content>
	</property>

      <xsl:if test="$wcagTechniques/description//el[normalize-space(.)=current()/@id]">
	<xsl:variable name="el" select="normalize-space(@id)"/>
	<property name="Accessibility techniques" list="block">
	  <xsl:for-each select="$wcagTechniques/self::technique[description/descendant::el[normalize-space()=$el]]">
	  <xsl:sort select="count(description//descendant::el[normalize-space()=$el])" order="descending"/>
	    <content xml:lang="en" link="{concat('/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
        </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='element'][normalize-space(.)=current()/@id]">
	<property name="Mobile considerations" list="block">
	  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='element'][normalize-space()=current()/@id]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$qaTips/html:dd/html:code[@class='element'][normalize-space(.)=current()/@id]">
	<property name="QA Tip" list="block">
	  <xsl:for-each select="$qaTips/html:dd[html:code[@class='element'][normalize-space()=current()/@id]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1]//html:a)"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$i18n/html:dd/html:code[@class='html element'][normalize-space(.)=current()/@id]">
	<property name="Internationalization" list="block">
	  <xsl:for-each select="$i18n/html:dd[html:code[@class='html element'][normalize-space()=current()/@id]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1])"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
	<property name="Specification" link="{concat('http://dev.w3.org/html5/markup/',@id,'.html')}" />

      </context></item>
    </xsl:for-each>

    <xsl:for-each-group select="$html5//html:div[@id='elements']//html:dl[@class='attr-defs']/html:dt/html:a[@class='attribute-name']" group-by="normalize-space(.)"><!-- @@@ doesn't deal with common attributes -->
      <item type="attribute" name="{normalize-space(.)}">
	<xsl:for-each select="current-group()">
	  <xsl:variable name="el" select="current()/ancestor::html:div[@class='section'][html:h2[@class='element-head']]/@id"/>
	  <context>
	    <xsl:if test="count(current-group()) &gt; 1">
	      <xsl:attribute name="type">element</xsl:attribute>
	      <items>
		<item name="{$el}"/>
	      </items>
	    </xsl:if>
	    <property name="Elements" list="inline" infoset="html" type="element">
	      <!-- @@@ need adaptation for common attributes -->
	      <content><xsl:value-of select="$el"/></content>
	    </property>
	    <property name="content"><content><xsl:value-of select="normalize-space(following-sibling::html:a[@class='attr-values'])"/></content></property>
	    <property name="description"><content><xsl:value-of select="normalize-space(parent::html:dt/following-sibling::html:dd[1])"/></content></property>
	    <!-- @@@ standardization status -->
	    <xsl:if test="position()=1">
	      <!-- attributing the accessibility/mobility component to first attribute is purely conventional until I manage to make the distinction -->
	      <xsl:if test="$wcagTechniques/description/descendant::att[normalize-space(.)=current()]">
	      <xsl:variable name="attr" select="normalize-space(.)"/>
		<property name="Accessibility techniques" list="block">
		  <xsl:for-each select="$wcagTechniques/self::technique[description/descendant::att[normalize-space()=$attr]]">
		    <xsl:sort select="count(description/descendant::att[normalize-space()=$attr])" order="descending"/>
		    <content link="{concat('/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='attribute'][normalize-space(.)=current()]">
		<property name="Mobile considerations" list="block">
		  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='attribute'][normalize-space()=current()]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$qaTips/html:dd/html:code[@class='attribute'][normalize-space(.)=current()]">
		<property name="QA Tip" list="block">
		  <xsl:for-each select="$qaTips/html:dd[html:code[@class='attribute'][normalize-space()=current()]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1]//html:a)"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$i18n/html:dd/html:code[@class='html attribute'][normalize-space(.)=current()]">
		<property name="Internationalization" list="block">
		  <xsl:for-each select="$i18n/html:dd[html:code[@class='html attribute'][normalize-space()=current()]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1])"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>

	    </xsl:if>

	    <!-- @@@ needs adaptation for common attributes -->
	    <property name="Specification" link="{concat('http://dev.w3.org/html5/markup/',$el,'.html#',$el,'.attrs.',normalize-space(.))}"/>
	  </context>
	</xsl:for-each>
      </item>
    </xsl:for-each-group>
  </infoset>
  </infosets>
  </xsl:template>


  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

  <xsl:template match="text()" mode="textOrSpan">
    <xsl:copy/>
  </xsl:template>

  <xsl:template match="html:a[@class='ref']" mode="textOrSpan">
    <span type='element' infoset='html'><xsl:value-of select='normalize-space(lower-case(.))'/></span>
  </xsl:template>


  <xsl:template match="*" mode="textOrSpan">
    <xsl:apply-templates select="*|text()" mode="textOrSpan"/>
  </xsl:template>


</xsl:stylesheet>