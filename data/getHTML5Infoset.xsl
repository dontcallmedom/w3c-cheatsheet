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
    <xsl:for-each-group select="$html5//html:div[@id='elements']/html:div[html:h2[@class='element-head'] and html:div[@class='longdesc']]" group-by="substring-before(concat(@id,'.'),'.')">
      <xsl:variable name="el" select="substring-before(concat(@id,'.'),'.')"/>
      <item type="element" name="{$el}">
	<xsl:for-each select="current-group()">
	  <context>
	    <xsl:if test="count(current-group()) &gt; 1">
	      <xsl:attribute name="type">attribute</xsl:attribute>
	      <items>
		<item name="{html:h2[@class='element-head']/html:span[@class='elem-qualifier']}"/>
	      </items>
	    </xsl:if>

	    <property type="attribute" name="Attributes" list="inline" infoset="html">
	      <xsl:for-each-group select=".//html:div[@class='attr-content-models']//html:a[@class='ref']" group-by=".">
		<!-- @@@ mark obsolete/new/changed status -->
		<content><xsl:value-of select="."/></content>
	      </xsl:for-each-group>
	      <!-- @@@ add common attributes -->
	    </property>
	    <property name="content" list="inline">
	      <xsl:for-each select=".//html:p[@class='elem-mdl']">
		<content xml:lang="en"><xsl:apply-templates select="." mode="textOrSpan"/></content>
	      </xsl:for-each>
	    </property>
	    <property name="description">
	      <content xml:lang="en"><xsl:value-of select="normalize-space(.//html:div[@class='longdesc']/html:p[1])"/></content>
	    </property>
	    
	    <xsl:if test="$wcagTechniques/description//el[normalize-space(.)=$el]">
	      <property name="Accessibility techniques" list="block">
		<xsl:for-each select="$wcagTechniques/self::technique[description/descendant::el[normalize-space()=$el]]">
		  <xsl:sort select="count(description//descendant::el[normalize-space()=$el])" order="descending"/>
		  <content xml:lang="en" link="{concat('/TR/WCAG20-TECHS/',$el,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
		</xsl:for-each>
	      </property>
	    </xsl:if>
	    <xsl:if test="$mobileTechniques/html:dd/html:code[@class='element'][normalize-space(.)=$el]">
	      <property name="Mobile considerations" list="block">
		<xsl:for-each select="$mobileTechniques/html:dd[html:code[@class='element'][normalize-space()=$el]]">
		  <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(substring-after(preceding::html:dt[1],']'))"/></content>
		</xsl:for-each>
	      </property>
	    </xsl:if>
	    <xsl:if test="$qaTips/html:dd/html:code[@class='element'][normalize-space(.)=$el]">
	      <property name="QA Tip" list="block">
		<xsl:for-each select="$qaTips/html:dd[html:code[@class='element'][normalize-space()=$el]]">
		  <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1]//html:a)"/></content>
		</xsl:for-each>
	      </property>
	    </xsl:if>
	    <xsl:if test="$i18n/html:dd/html:code[@class='html element'][normalize-space(.)=$el]">
	      <property name="Internationalization" list="block">
		<xsl:for-each select="$i18n/html:dd[html:code[@class='html element'][normalize-space()=$el]]">
		  <content xml:lang="en" link="{preceding::html:dt[1]//html:a/@href}"><xsl:value-of select="normalize-space(preceding::html:dt[1])"/></content>
		</xsl:for-each>
	      </property>
	    </xsl:if>
	    <property name="Specification" link="{concat('http://dev.w3.org/html5/markup/',@id,'.html')}" />

	  </context>
	</xsl:for-each>
	</item>
    </xsl:for-each-group>

    <xsl:variable name="attributesLists" select="$html5//html:div[@id='elements']//html:dl[@class='attr-defs']|$html5//html:div[@id='common-attributes']//html:dl[@class='attr-defs']|$html5//html:div[@id='forms-attributes']//html:dl[@class='attr-defs']"/>
    <xsl:for-each-group select="$attributesLists/html:dt/html:*[@class='attribute-name']" group-by="normalize-space(.)">	    
      <item type="attribute" name="{normalize-space(.)}">
	<xsl:variable name="contextsNumber" select="count(current-group())"/>
	<xsl:for-each-group select="current-group()" group-by="substring-before(concat(current()/ancestor::html:div[@class='section'][html:h2[@class='element-head']]/@id,'.'),'.')">
	  <xsl:variable name="el" select="substring-before(concat(current()/ancestor::html:div[@class='section'][html:h2[@class='element-head']]/@id,'.'),'.')"/>
	  <context>
	    <xsl:if test="$contextsNumber &gt; 1">
	      <xsl:attribute name="type">element</xsl:attribute>
	      <items>
		<xsl:choose>
		  <xsl:when test="$el">
		    <item name="{$el}"/>
		  </xsl:when>
		  <xsl:otherwise>
		    <xsl:for-each-group select="$html5//html:div[@id='elements']/html:div[@class='section'][.//html:div[@class='attr-content-models']//html:a[substring-after(@href,'#')=current()/@id]]" group-by="substring-before(concat(@id,'.'),'.')">
		      <item name="{substring-before(concat(@id,'.'),'.')}"/>
		    </xsl:for-each-group>
		  </xsl:otherwise>
		</xsl:choose>
	      </items>
	    </xsl:if>
	    <property name="Elements" list="inline">
	      <xsl:choose>
		<xsl:when test="ancestor::html:div[@id='common-attributes']">
		  <content>All HTML elements</content><!-- @@@ link to element list? -->
		</xsl:when>
		<xsl:otherwise>
		  <xsl:attribute name="infoset">html</xsl:attribute>
		  <xsl:attribute name="type">element</xsl:attribute>
		  <xsl:choose>
		    <xsl:when test="$el">
		      <content><xsl:value-of select="$el"/></content>
		    </xsl:when>
		    <xsl:otherwise>
		      <xsl:for-each-group select="$html5//html:div[@id='elements']/html:div[@class='section'][.//html:div[@class='attr-content-models']//html:a[substring-after(@href,'#')=current()/@id]]" group-by="substring-before(concat(@id,'.'),'.')">
			<content><xsl:value-of select="substring-before(concat(@id,'.'),'.')"/></content>
		      </xsl:for-each-group>
		    </xsl:otherwise>
		  </xsl:choose>
		</xsl:otherwise>
	      </xsl:choose>
	    </property>
	    <property name="content" list="inline">
	      <xsl:for-each select="following-sibling::html:span[@class='attr-values']">
		<content><xsl:value-of select="normalize-space(.)"/></content>
	      </xsl:for-each>
	      </property>
	      <xsl:if test="local-name(parent::html:dt/following-sibling::html:*[1])='dd'">
		<property name="description"><content><xsl:value-of select="normalize-space(parent::html:dt/following-sibling::html:dd[1])"/></content></property>
	      </xsl:if>
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

	    <property name="Specification">
	      <xsl:attribute name="link">
		<xsl:choose>
		  <xsl:when test="ancestor::html:div[@id='common-attributes']">
		    <xsl:value-of select="concat('http://dev.w3.org/html5/markup/common-attributes.html#',current()/@id)"/>
		  </xsl:when>
		  <xsl:when test="ancestor::html:div[@id='forms-attributes']">
		    <xsl:value-of select="concat('http://dev.w3.org/html5/markup/forms-attributes.html#',current()/@id)"/>
		  </xsl:when>
		  <xsl:otherwise>
		    <xsl:value-of select="concat('http://dev.w3.org/html5/markup/',$el,'.html#',$el,'.attrs.',normalize-space(.))"/>
		  </xsl:otherwise>
		  </xsl:choose>
	      </xsl:attribute>
	    </property>
	  </context>
	</xsl:for-each-group>
      </item>
    </xsl:for-each-group>
  </infoset>
  </infosets>
  </xsl:template>


  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

  <xsl:template match="text()" mode="textOrSpan">
    <xsl:value-of select="replace(.,'&#x0A;',' ')"/>
  </xsl:template>

  <xsl:template match="html:a[@class='ref']" mode="textOrSpan">
    <span type='element' infoset='html'><xsl:value-of select="substring-before(concat(normalize-space(lower-case(.)),' '),' ')"/></span>
  </xsl:template>


  <xsl:template match="*" mode="textOrSpan">
    <xsl:apply-templates select="*|text()" mode="textOrSpan"/>
  </xsl:template>


</xsl:stylesheet>