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

    <xsl:variable name="xhtmlStrict" select="document('http://www.w3.org/2010/04/xhtml10-strict.html')/html:html/html:body"/>


  <xsl:template match="/">
    <xsl:variable name="html4Descriptions" select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/elements.html')/html:html/html:body/html:table"/>
    <!-- we work on attributes based on the HTML4 list of attributes
    but that doesn't include xml:lang - we add it manually by copying the data for the lang attribute -->
    <xsl:variable name="attributesTable">
      <xsl:variable name="specTable" select="document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/attributes.html')/html:html//html:table"/>
      <table xmlns="http://www.w3.org/1999/xhtml">
	<xsl:copy-of select="$specTable/html:tr"/>
	<tr><td><a href="http://www.w3.org/TR/2002/REC-xhtml1-20020801/#C_7">xml:lang</a></td><xsl:copy-of select="$specTable/html:tr[normalize-space(html:td[1]/html:a)='lang']/html:td[position() &gt; 1]"/></tr>
      </table>
    </xsl:variable>
    <xsl:variable name="mobileTechniques" select="document('mobilebp.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="wcagTechniques" select="document('http://www.w3.org/WAI/GL/WCAG20/sources/html-tech-src.xml')/spec/body//technique"/>
    <xsl:variable name="qaTips" select="document('qa.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="i18n" select="document('i18n.html')/html:html/html:body/html:dl"/>
  <infosets>
  <infoset technology="html">
    <xsl:for-each select="$xhtmlStrict//html:table[1]/html:tbody/html:tr/html:th[1]">
      <item type="element" name="{.}"><context>
	<property type="attribute" name="Attributes" list="inline" infoset="html">
	  <xsl:apply-templates select="ancestor::html:tr/html:td[1]" mode="dereferenceAttributeGroups"/>
	</property>
	<xsl:if test="parent::html:tr/html:td[2]//html:a[not(parent::strong)]">
	  <property type="element" name="Allowed children" list="inline" infoset="html">
	    <xsl:for-each-group select="parent::html:tr/html:td[2]//html:a[not(parent::strong)]" group-by=".">
	      <xsl:sort select="."/>
	      <content><xsl:value-of select="."/></content>
	    </xsl:for-each-group>
	  </property>
	</xsl:if>
	<xsl:if test="normalize-space($html4Descriptions//html:tr[normalize-space(lower-case(html:td[1]))=current()]/html:td[7])">
	  <property name="description">
	    <content><xsl:value-of select="normalize-space($html4Descriptions//html:tr[normalize-space(lower-case(html:td[1]))=current()]/html:td[7])"/></content>
	  </property>
	</xsl:if>
      <xsl:if test="$wcagTechniques/description//el[normalize-space(.)=current()]">
	<xsl:variable name="el" select="normalize-space(.)"/>
	<property name="Accessibility techniques" list="block">
	  <xsl:for-each select="$wcagTechniques/self::technique[description/descendant::el[normalize-space()=$el]]">
	  <xsl:sort select="count(description//descendant::el[normalize-space()=$el])" order="descending"/>
	    <content xml:lang="en" link="{concat('/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
        </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='element'][normalize-space(.)=current()]">
	<property name="Mobile considerations" list="block">
	  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='element'][normalize-space()=current()]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$qaTips/html:dd/html:code[@class='element'][normalize-space(.)=current()]">
	<property name="QA Tip" list="block">
	  <xsl:for-each select="$qaTips/html:dd[html:code[@class='element'][normalize-space()=current()]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1]//html:a)"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
      <xsl:if test="$i18n/html:dd/html:code[@class='html element'][normalize-space(.)=current()]">
	<property name="Internationalization" list="block">
	  <xsl:for-each select="$i18n/html:dd[html:code[@class='html element'][normalize-space()=current()]]">
	    <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1])"/></content>
	  </xsl:for-each>
	</property>
      </xsl:if>
	<property name="Specification" link="{concat('/TR/html401/index/',document('http://cgi.w3.org/cgi-bin/tidy?docAddr=http://www.w3.org/TR/1999/REC-html401-19991224/index/elements.html')/html:html//html:table/html:tr/html:td[1][normalize-space(.)=upper-case(current())]/html:a/@href)}" />

      </context></item>
    </xsl:for-each>
    <xsl:for-each-group select="$attributesTable/html:table/html:tr[position()&gt;1][normalize-space(html:td[6])='&#xA0;']" group-by="normalize-space(html:td[1])">
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
	    <property name="Elements" list="inline">
	      <xsl:choose>
		<xsl:when test="not(html:td[2]/html:a[normalize-space()='All elements'])">
		  <xsl:attribute name="infoset">html</xsl:attribute>
		  <xsl:attribute name="type">element</xsl:attribute>
		  <xsl:for-each select="html:td[2]/html:a">
		    <xsl:if test="$xhtmlStrict//html:table[1]/html:tbody/html:tr/html:th[normalize-space()=lower-case(current())]">
		      <content><xsl:value-of select="lower-case(.)"/></content>
		    </xsl:if>
		  </xsl:for-each>
		</xsl:when>
		<xsl:otherwise>
		  <content><xsl:apply-templates select="html:td[2]/*|html:td[2]/text()" mode="textOrSpan"/></content>
		</xsl:otherwise>
	      </xsl:choose>
	    </property>
	    <property name="content"><content><xsl:value-of select="normalize-space(html:td[3])"/></content></property>
	    <property name="description"><content><xsl:value-of select="normalize-space(html:td[7])"/></content></property>
	    <xsl:if test="position()=1">
	      <!-- attributing the accessibility/mobility component to first attribute is purely conventional until I manage to make the distinction -->
	      <xsl:if test="$wcagTechniques/description/descendant::att[normalize-space(.)=current()/html:td[1]]">
	      <xsl:variable name="attr" select="normalize-space(html:td[1])"/>
		<property name="Accessibility techniques" list="block">
		  <xsl:for-each select="$wcagTechniques/self::technique[description/descendant::att[normalize-space()=$attr]]">
		    <xsl:sort select="count(description/descendant::att[normalize-space()=$attr])" order="descending"/>
		    <content link="{concat('/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$mobileTechniques/html:dd/html:code[@class='attribute'][normalize-space(.)=current()/html:td[1]]">
		<property name="Mobile considerations" list="block">
		  <xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='attribute'][normalize-space()=current()/html:td[1]]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$qaTips/html:dd/html:code[@class='attribute'][normalize-space(.)=current()/html:td[1]]">
		<property name="QA Tip" list="block">
		  <xsl:for-each select="$qaTips/html:dd[html:code[@class='attribute'][normalize-space()=current()/html:td[1]]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1]//html:a)"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="$i18n/html:dd/html:code[@class='html attribute'][normalize-space(.)=current()/html:td[1]]">
		<property name="Internationalization" list="block">
		  <xsl:for-each select="$i18n/html:dd[html:code[@class='html attribute'][normalize-space()=current()/html:td[1]]]">
		    <content link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1])"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>

	    </xsl:if>

	    <property name="Specification">
	      <xsl:attribute name="link">
		<xsl:if test="starts-with(html:td[1]/html:a/@href,'../')">
		  <xsl:text>/TR/html401/index/</xsl:text>
		</xsl:if>
		<xsl:value-of select="html:td[1]/html:a/@href"/>
	      </xsl:attribute>
	    </property>
	  </context>
	</xsl:for-each>
      </item>
    </xsl:for-each-group>
  </infoset>
  </infosets>
  </xsl:template>

  <xsl:template match="html:td" mode="dereferenceAttributeGroups">
    <xsl:for-each select="html:a[not(normalize-space()='xmlns' or normalize-space()='xml:space')]">
      <xsl:sort select="."/>
      <content><xsl:value-of select="."/></content>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

  <xsl:template match="text()" mode="textOrSpan">
    <xsl:copy/>
  </xsl:template>

  <xsl:template match="html:a[not(normalize-space()='All elements')]" mode="textOrSpan">
    <xsl:if test="$xhtmlStrict//html:table[1]/html:tbody/html:tr/html:th[normalize-space()=lower-case(current())]">
      <span type='element' infoset='html'><xsl:value-of select='normalize-space(lower-case(.))'/></span>
    </xsl:if>
  </xsl:template>


  <xsl:template match="*" mode="textOrSpan">
    <xsl:apply-templates select="*|text()" mode="textOrSpan"/>
  </xsl:template>


</xsl:stylesheet>