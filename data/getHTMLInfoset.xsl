<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  xmlns:html="http://www.w3.org/1999/xhtml" exclude-result-prefixes="html">

<!-- Output method XML -->
<xsl:output method="xml" indent="yes"
  encoding="utf-8" 
  />
 <!-- update the @@@ -->
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>HTML Infoset extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>HTML Infoset extractor</h1>

    <p>Gathers various data on elements and attributes defined in the (X)HTML specifications.</p>

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
    <xsl:variable name="mobileTechniques" select="document('mobilebp.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="wcagTechniques" select="document('http://www.w3.org/WAI/GL/WCAG20/sources/html-tech-src.xml')/spec/body//technique"/>
    <xsl:variable name="qaTips" select="document('qa.html')/html:html/html:body/html:dl"/>
  <infosets>
  <infoset technology="html">
    <xsl:for-each select="document('http://www.w3.org/2007/09/dtd-comparison.html')/html:html//html:table/html:tbody/html:tr/html:th[1]">
      <item type="element" name="{.}"><context>
	<property type="attributes" list="inline" infoset="html">
	  <xsl:apply-templates select="ancestor::html:tr/html:td[1]" mode="dereferenceAttributeGroups"/>
	</property>
	<property type="source" link="{concat('http://www.w3.org/TR/1999/REC-html401-19991224/index/',document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/elements.html')/html:html//html:table/html:tr/html:td[1][normalize-space(.)=upper-case(current())]/html:a/@href)}" />
      <xsl:if test="$wcagTechniques//el[normalize-space(.)=current()]">
	<property type="Accessibility techniques" link="http://www.w3.org/WAI/intro/wcag" list="block">
	  <xsl:for-each select="$wcagTechniques/self::technique[descendant::el[normalize-space()=current()]]">
	    <content xml:lang="en" link="{concat('http://www.w3.org/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
        </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='element'][normalize-space(.)=current()]">
	<property type="Mobile considerations" list="block">
	  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='element'][normalize-space()=current()]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='element'][normalize-space(.)=current()]">
	<property type="QA Tip" list="block">
	  <xsl:for-each select="$qaTips/html:dd[html:code[@class='element'][normalize-space()=current()]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>

      </context></item>
    </xsl:for-each>
    <xsl:for-each-group select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/attributes.html')/html:html//html:table/html:tr[position()&gt;1]" group-by="normalize-space(html:td[1])">
      <item type="attribute" name="{html:td[1]}">
	<xsl:for-each select="current-group()">
	  <context>
	    <xsl:if test="count(current-group()) &gt; 1">
	      <xsl:attribute name="type">element</xsl:attribute>
	      <items>
		<xsl:for-each select="html:td[2]/html:a">
		  <item name="{lower-case(.)}"/>
		</xsl:for-each>
	      </items>
	    </xsl:if>
	    <xsl:if test="position()=1">
	      <!-- attributing the accessibility/mobility component to first attribute is purely conventional until I manage to make the distinction -->
	      <xsl:if test="$wcagTechniques//att[normalize-space(.)=current()/html:td[1]]">
		<property type="Accessibility techniques" link="http://www.w3.org/WAI/intro/wcag">
		  <xsl:for-each select="$wcagTechniques/self::technique[descendant::att[normalize-space()=current()/html:td[1]]]">
		    <content link="{concat('http://www.w3.org/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='attribute'][normalize-space(.)=current()/html:td[1]]">
		<property type="Mobile considerations" list="block">
		  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='attribute'][normalize-space()=current()/html:td[1]]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='attribute'][normalize-space(.)=current()/html:td[1]]">
		<property type="QA Tip" list="block">
		  <xsl:for-each select="$qaTips/html:dd[html:code[@class='attribute'][normalize-space()=current()/html:td[1]]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>

	    </xsl:if>
	    <property type="elements" list="inline" infoset="html">
	      <xsl:for-each select="html:td[2]/html:a">
		<content ><xsl:value-of select="lower-case(.)"/></content>
	      </xsl:for-each>
	    </property>
	    <property type="content"><content><xsl:value-of select="normalize-space(html:td[3])"/></content></property>
	    <property type="description"><content><xsl:value-of select="normalize-space(html:td[7])"/></content></property>
	    <property type="source" link="{concat('http://www.w3.org/TR/1999/REC-html401-19991224/index/',html:td[1]/html:a/@href)}"/>
	  </context>
	</xsl:for-each>
      </item>
    </xsl:for-each-group>
  </infoset>
  </infosets>
  </xsl:template>

  <xsl:template match="html:td" mode="dereferenceAttributeGroups">
    <xsl:for-each select="html:a">
      <!-- We ignore XML attributes for now -->
      <xsl:if test="normalize-space()!='XML'">
	<xsl:for-each select="tokenize(normalize-space(/html:html/html:body//html:dl/html:dt[html:a[@id=substring-after(current()/@href,'#')]]/following-sibling::html:dd[1]),', ')">
	  <content><xsl:value-of select="."/></content>
	</xsl:for-each>
      </xsl:if>
    </xsl:for-each>
    <xsl:for-each select="tokenize(normalize-space(string-join(text(),'')),', ')">
      <xsl:if test="normalize-space(.) and normalize-space(.)!=','">
	<content><xsl:value-of select="."/></content>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

</xsl:stylesheet>