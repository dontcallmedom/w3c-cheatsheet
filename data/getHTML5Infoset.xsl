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

<xsl:param name="spec" select="'http://www.w3.org/services/tidy?docAddr=http://dev.w3.org/cvsweb/~checkout~/html5/markup/spec.html?rev=1.339'"/>
    <xsl:variable name="html5" select="document($spec)/html:html/html:body"/>


  <xsl:template match="/">
    <xsl:variable name="mobileTechniques" select="document('mobilebp.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="wcagTechniques" select="document('http://www.w3.org/WAI/GL/WCAG20/sources/html-tech-src.xml')/spec/body//technique"/>
    <xsl:variable name="qaTips" select="document('qa.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="i18n" select="document('i18n.html')/html:html/html:body/html:dl"/>
    <xsl:variable name="htmlRec" select="document('http://www.w3.org/services/tidy?forceXML=on&amp;docAddr=http://www.w3.org/TR/html5/')/html:html/html:body"/>
    <xsl:variable name="htmlIndex" select="document('http://www.w3.org/services/tidy?forceXML=on&amp;docAddr=http://www.w3.org/TR/html5/index.html')/html:html/html:body"/>
  <infosets>
  <infoset technology="html">
    <xsl:for-each-group select="$html5//html:div[@id='elements']/html:div[html:h2[@class='element-head'] and html:div[@class='longdesc'] and not(html:div[@class='toc'])]" group-by="substring-before(concat(@id,'.'),'.')">
      <!-- only take elements in HTML5 Rec -->
      <xsl:variable name="el" select="substring-before(concat(@id,'.'),'.')"/>
      <xsl:if test="$htmlIndex//html:table[1]/html:tbody/html:tr/html:th/html:code[normalize-space()=$el]">
        <xsl:variable name="link" select="concat('http://www.w3.org/services/tidy?forceXML=on&amp;docAddr=http://www.w3.org/TR/html5/',$htmlIndex//html:table[1]/html:tbody/html:tr/html:th/html:code[normalize-space()=$el]/html:a/@href)"/>
        <xsl:variable name="fragment" select="substring-after($link, '#')"/>
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
	      <content>global HTML attributes</content>
	      <xsl:for-each-group select=".//html:div[@class='attr-content-models']//html:a[@class='ref']" group-by=".">
		<content><xsl:value-of select="normalize-space(.)"/></content>
	      </xsl:for-each-group>
	    </property>
            <xsl:if test=".//html:p[@class='elem-mdl']">
              <property name="content" list="inline">
                <xsl:for-each select=".//html:p[@class='elem-mdl']">
                  <content xml:lang="en"><xsl:apply-templates select="." mode="textOrSpan"/></content>
                </xsl:for-each>
              </property>
            </xsl:if>
	    <property name="description">
	      <content xml:lang="en">
          <xsl:for-each select="document(substring-before($link, '#'))//*[@id=$fragment]/following-sibling::html:p[not(@class) or @class='rep'][preceding-sibling::html:*[starts-with(local-name(),'h')][1][@id=$fragment]]">
            <xsl:value-of select="normalize-space(.)"/>
          </xsl:for-each>
          </content>
	    </property>
	    <property name="DOM interface" infoset="js" type="interface">
              <content><xsl:value-of select="$htmlIndex//html:h3[@id='element-interfaces']/following-sibling::html:table[1]/html:tbody/html:tr/html:td[1][normalize-space(.)=$el]/following-sibling::html:td[1]/html:code[1]"/></content>
	    </property>
	    <!-- status in html5 -->
	      <xsl:if test="html:h2[@class='element-head']/html:span[@class=('new-feature','obsoleted-feature','changed-feature')]">
		<property name="html5">
		  <content><xsl:value-of select="substring-before(html:h2[@class='element-head']/html:span[@class=('new-feature','obsoleted-feature','changed-feature')]/@class,'-')"/></content>
		</property>
	      </xsl:if>
	    <xsl:if test="$wcagTechniques/description//el[normalize-space(.)=$el]">
	      <property name="Accessibility techniques" list="block">
		<xsl:for-each select="$wcagTechniques/self::technique[description/descendant::el[normalize-space()=$el]]">
		  <xsl:sort select="count(description//descendant::el[normalize-space()=$el])" order="descending"/>
		  <content xml:lang="en" link="{concat('/TR/WCAG20-TECHS/',@id,'.html')}"><xsl:value-of select="normalize-space(short-name)"/></content>
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
	    <property name="Specification" link="/TR/html5/{$htmlRec//html:li[html:a/@href='semantics.html#semantics']//html:a[matches(., concat('The ', $el, ' element$'))]/@href}" />

	  </context>
	</xsl:for-each>
	</item>
      </xsl:if>
    </xsl:for-each-group>
	<item name="sarcasm" type="element">
	  <context>
	    <property name="description">
	      <content>A mark of sarcasm</content>
	    </property>
	    <property name="html5">
	      <content>not yet</content>
	    </property>
	    <property name="Specification" link="https://twitter.com/#!/w3c/statuses/2027402192"/>
	  </context>
	</item>
    <xsl:comment>elements that were in HTML4 but have been removed from HTML5</xsl:comment>
    <xsl:for-each select="document('html4.xml')/infosets/infoset/item[@type='element']">
      <xsl:if test="not($html5//html:div[@id='elements']/html:div[substring-before(concat(@id,'.'),'.')=current()/@name and html:h2[@class='element-head'] and html:div[@class='longdesc']])">
	<xsl:copy>
	  <xsl:copy-of select="@*" />
	  <xsl:for-each select="context">
	    <xsl:copy>
	      <xsl:apply-templates select="@*|*"/>
	      <property name="html5">
		<content>removed</content>
	      </property>
	    </xsl:copy>
	  </xsl:for-each>
	</xsl:copy>
      </xsl:if>
    </xsl:for-each>

    <xsl:variable name="attributesLists" select="$htmlIndex//html:h3[@id='attributes-1']/following-sibling::html:table[position() &lt; 3]/html:tbody"/>
    <xsl:for-each-group select="$attributesLists//html:th" group-by="normalize-space(.)">
      <item type="attribute" name="{normalize-space(.)}">
	<xsl:variable name="contextsNumber" select="count(current-group())"/>
	<xsl:for-each select="current-group()">
	  <context>
	    <xsl:if test="$contextsNumber &gt; 1">
	      <xsl:attribute name="type">element</xsl:attribute>
	      <items>
                <xsl:for-each select="current()/following-sibling::html:td[1]//html:code">
                  <item name="{.}"/>
                </xsl:for-each>
	      </items>
	    </xsl:if>
	    <property name="Elements">
              <xsl:choose>
                <xsl:when test="current()/following-sibling::html:td[1]//html:a='HTML elements'">
                  <content>All HTML elements</content>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:attribute name="infoset">html</xsl:attribute>
                  <xsl:attribute name="type">element</xsl:attribute>
                  <xsl:attribute name="list">inline</xsl:attribute>
                  <xsl:for-each select="current()/following-sibling::html:td[1]/html:code">
                    <content><xsl:value-of select="."/></content>
                  </xsl:for-each>
                </xsl:otherwise>
              </xsl:choose>
	    </property>
	    <property name="content">
              <content><xsl:value-of select="current()/following-sibling::html:td[3]"/></content>
            </property>
            <property name="description"><content><xsl:value-of select="current()/following-sibling::html:td[2]"/></content></property>
	    <!-- status in html5 -->
	    <xsl:choose>
	      <xsl:when test="following-sibling::html:span[@class=('new-feature','obsoleted-feature','changed-feature')]">
	      </xsl:when>
	    </xsl:choose>
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
                <xsl:value-of select="concat('/TR/html5/', (current()/following-sibling::html:td[1]//html:a)[1]/@href)"/>
	      </xsl:attribute>
	    </property>
	  </context>
	</xsl:for-each>
      </item>
    </xsl:for-each-group>
    <xsl:comment>attributes that were in HTML4 but have been removed from HTML5</xsl:comment>
    <xsl:for-each select="document('html4.xml')/infosets/infoset/item[@type='attribute']">
      <xsl:if test="not($attributesLists//html:th[normalize-space(.)=current()/@name])">

	<xsl:copy>
	  <xsl:copy-of select="@*" />
	  <xsl:for-each select="context">
	    <xsl:copy>
	      <xsl:apply-templates select="@*|*"/>
	      <property name="html5">
		<content>removed</content>
	      </property>
	    </xsl:copy>
	  </xsl:for-each>
	</xsl:copy>
      </xsl:if>
    </xsl:for-each>


  <list type="attribute" name="global HTML attributes">
    <context>
    <property name="description">
      <content>Attributes permitted globally in the HTML language.</content>
    </property>
    <property type="attribute" name="Attributes" list="inline" infoset="html">
      <xsl:for-each select="$html5//html:div[@id='global-attributes']//html:dl[@class='attr-defs']/html:dt/html:*[@class='attribute-name']">
	<content><xsl:value-of select="normalize-space(.)"/></content>
      </xsl:for-each>
    </property>
    </context>
  </list>
  </infoset>
  </infosets>
  </xsl:template>


  <xsl:template match="text()">
    <xsl:value-of select="normalize-space(.)"/>
  </xsl:template>

  <xsl:template match="*|@*">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()"/>
    </xsl:copy>
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
