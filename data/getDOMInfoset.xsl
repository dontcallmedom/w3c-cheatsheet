<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?><?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- Output method XML -->
<xsl:output method="xml" indent="yes"
  encoding="utf-8" 
  />

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    <title>DOM API extractor</title>
  </head>
  <body>
    <div class='head'><a href="/"><img src="/Icons/w3c_home" alt="W3C"/></a></div>
    <h1>DOM API extractor</h1>

    <p>Gathers various data on the DOM API defined in the DOM specification.</p>

    <p class="copyright">Copyright &#169; 2013 <a href="http://www.w3.org/">World Wide Web Consortium</a>, (<a
href="http://www.csail.mit.edu/"><acronym title="Massachusetts Institute of
Technology">M.I.T.</acronym></a>, <a
href="http://www.ercim.org/"><acronym
title="European Research Consortium for Informatics and Mathematics">ERCIM</acronym></a>, <a
href="http://www.keio.ac.jp/">Keio University</a>, <a href="http://ev.buaa.edu.cn/">Beihang</a>). All Rights
    Reserved. http://www.w3.org/Consortium/Legal/. W3C <a href="http://www.w3.org/Consortium/Legal/copyright-software">software licensing</a> rules apply.</p>
    <address><a href="http://www.w3.org/People/Dom/">Dominique Haza&#235;l-Massieux</a></address>
    </body>
</html>


  <xsl:template match="/">
    <infosets>
      <infoset technology="js">
	<xsl:for-each-group select="//Interface[not(.//ExtendedAttribute/@name='NoInterfaceObject')]" group-by="@name">
	  <item type="interface" name="{@name}">
	    <context>
	      <!--	    <property name="Specification" link="{concat('/TR/xpath-functions/#',preceding::html:*[@id][1]/@id)}" /> -->
	      <xsl:if test="InterfaceInheritance">
		<property name="inherit" infoset="js" type="interface"><content><xsl:value-of select="InterfaceInheritance/Name/@name"/></content></property>
	      </xsl:if>
	      <xsl:if test="matches(@name,'HTML(.*)Element') and document('html.xml')//item[@type='element'][.//property[@name='DOM interface']/content=current()/@name]">
		<property name="HTML element" infoset="html" type="element" list="inline">
		  <xsl:for-each  select="document('html.xml')//item[@type='element'][.//property[@name='DOM interface']/content=current()/@name]">
		    <content><xsl:value-of select="@name"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="Operation[@name] or //Interface[Operation[@name]][@name=(//Implements[@name1=current()/@name]/@name2)]">
		<property name="operations" infoset="js" type="function" list="inline">
		  <xsl:for-each-group select="Operation[@name] | //Interface[@name=(//Implements[@name1=current()/@name]/@name2)]/Operation[@name]" group-by="@name">
		    <content>
		      <xsl:value-of select="concat(@name,'()')"/>
		    </content>
		  </xsl:for-each-group>
		</property>
	      </xsl:if>
	      <xsl:if test="Operation[not(@name)]">
		<property name="specialoperations">
		  <xsl:for-each select="Operation[not(@name)]">		    
		    <xsl:if test="@getter and ArgumentList/Argument[1]/Type/@type='DOMString'"><content>Named getter</content></xsl:if>
		    <xsl:if test="@getter and ArgumentList/Argument[1]/Type/@type='unsigned long'"><content>Indexed getter</content></xsl:if>
		    <xsl:if test="@creator and ArgumentList/Argument[1]/Type/@type='DOMString'"><content>Named creator</content></xsl:if>
		    <xsl:if test="@creator and ArgumentList/Argument[1]/Type/@type='unsigned long'"><content>Indexed creator</content></xsl:if>
		    <xsl:if test="@deleter and ArgumentList/Argument[1]/Type/@type='DOMString'"><content>Named deleter</content></xsl:if>
		    <xsl:if test="@deleter and ArgumentList/Argument[1]/Type/@type='unsigned long'"><content>Indexed deleter</content></xsl:if>
		    <xsl:if test="@setter and ArgumentList/Argument[1]/Type/@type='DOMString'"><content>Named setter</content></xsl:if>
		    <xsl:if test="@setter and ArgumentList/Argument[1]/Type/@type='unsigned long'"><content>Indexed setter</content></xsl:if>
		    <xsl:if test="@stringifier"><content>Stringifier</content></xsl:if>
		    <xsl:if test="@legacycaller"><content>Caller</content></xsl:if>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="Attribute or  //Interface[Attribute][@name=(//Implements[@name1=current()/@name]/@name2)]">
		<property name="Attributes" infoset="js" type="attribute" list="inline">
		  <xsl:for-each select="Attribute | //Interface[@name=(//Implements[@name1=current()/@name]/@name2)]/Attribute">
		    <xsl:sort select="@name"/>
		    <content>
		      <xsl:value-of select="@name"/>
		    </content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	      <xsl:if test="//Implements[@name1=current()/@name] and //Interface[@name=//Implements[@name1=current()/@name]/@name2][not(.//ExtendedAttribute/@name='NoInterfaceObject')]">
		<property name="implements" infoset="js" type="interface">
		  <xsl:for-each select="//Implements[@name1=current()/@name][//Interface[@name=//Implements[@name1=current()/@name]/@name2][not(.//ExtendedAttribute/@name='NoInterfaceObject')]]">
		    <content><xsl:value-of select="@name2"/></content>
		  </xsl:for-each>
		</property>
	      </xsl:if>
	    </context>
	  </item>
	</xsl:for-each-group>
	<!-- ignoring WindowModal attributes — too hard to represent in our model -->
	<xsl:for-each-group select="//Interface[not(@name='WindowModal')]/Attribute" group-by="@name">
	  <item type="attribute" name="{@name}">
	    <xsl:for-each-group select="current-group()" group-by="ancestor::Interface/@name">
	      <context type="interface">
		<items>
		  <xsl:for-each-group select="ancestor::Interface[not(.//ExtendedAttribute[@name='NoInterfaceObject'])] | //Interface[@name=//Implements[@name2=current()/ancestor::Interface/@name]/@name1]" group-by="@name">
		    <item name="{@name}"/>
		  </xsl:for-each-group>
		</items>
		<property name="Member of" infoset="js" type="interface" list="inline">
		  <xsl:for-each-group select="ancestor::Interface[not(.//ExtendedAttribute[@name='NoInterfaceObject'])] | //Interface[@name=//Implements[@name2=current()/ancestor::Interface/@name]/@name1]" group-by="@name">
		    <content><xsl:value-of select="@name"/></content>
		  </xsl:for-each-group>
		</property>
		<property name="Read/Write">
		  <content>
		  <xsl:choose>
		    <xsl:when test="@readonly">
		      <xsl:text>Read-only</xsl:text>
		    </xsl:when>
		    <xsl:otherwise>
		      <xsl:text>Read and write allowed</xsl:text>
		    </xsl:otherwise>
		  </xsl:choose>
		  </content>
		</property>
		<property name="Type"><content><xsl:apply-templates select="Type" mode="describeType"/></content></property>
	      </context>
	    </xsl:for-each-group>
	  </item>
	</xsl:for-each-group>
	<xsl:for-each-group select="//Interface/Operation[@name]" group-by="@name">
	  <item type="function" name="{@name}()">
	    <xsl:for-each-group select="current-group()" group-by="ancestor::Interface/@name">
	      <context type="interface">
		<items>
		  <xsl:for-each-group select="ancestor::Interface[not(.//ExtendedAttribute[@name='NoInterfaceObject'])] | //Interface[@name=//Implements[@name2=current()/ancestor::Interface/@name]/@name1]" group-by="@name">
		    <item name="{@name}"/>
		  </xsl:for-each-group>
		</items>
		<property name="Member of" infoset="js" type="interface" list="inline">
		  <xsl:for-each-group select="ancestor::Interface[not(.//ExtendedAttribute[@name='NoInterfaceObject'])] | //Interface[@name=//Implements[@name2=current()/ancestor::Interface/@name]/@name1]" group-by="@name">
		    <content><xsl:value-of select="@name"/></content>
		  </xsl:for-each-group>
		</property>
		<property name="Usage">
		  <content>
		  <xsl:choose>
		    <xsl:when test="Type/@type='void'"/>
		    <xsl:when test="Type/@type='array' or Type/@type='sequence'">
		      <xsl:text>var array = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@type='boolean'">
		      <xsl:text>var cond = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@type='float' or Type/@type='double'">
		      <xsl:text>var x = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@type='DOMString'">
		      <xsl:text>var str = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@type='any'">
		      <xsl:text>var foo = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@type">
		      <xsl:text>var n = </xsl:text>
		    </xsl:when>
		    <xsl:when test="Type/@name='Promise'">
		      <xsl:text>var p = </xsl:text>
		    </xsl:when>
		    <xsl:otherwise>
		      <xsl:text>var obj = </xsl:text>
		    </xsl:otherwise>
		  </xsl:choose>
		  <xsl:value-of select="@name"/><xsl:text>(</xsl:text>
		  <xsl:for-each select="ArgumentList/Argument">
		    <xsl:value-of select="@name"/>
		    <xsl:if test="position()!=last()">, </xsl:if>
		  </xsl:for-each>
		  <xsl:text>);</xsl:text>
		  </content>
		</property>
		<property name="parameters">
		  <xsl:choose>
		    <xsl:when test="not(ArgumentList/Argument)">
		      <content>None</content>
		    </xsl:when>
		    <xsl:otherwise>
		      <xsl:for-each select="ArgumentList/Argument">
			<content><xsl:value-of select="@name"/><xsl:text>: </xsl:text><xsl:apply-templates select="Type" mode="describeType"/><xsl:if test="@optional or preceding-sibling::Argument/@optional"> (optional)</xsl:if><xsl:if test="@ellipsis"> (repeated any number of times)</xsl:if><xsl:if test="@value or @stringvalue"> with default value of <xsl:if test="@stringvalue">"</xsl:if><xsl:value-of select="concat(@value,@stringvalue)"/><xsl:if test="@stringvalue">"</xsl:if></xsl:if></content>
		      </xsl:for-each>
		    </xsl:otherwise>
		  </xsl:choose>
		  <!-- TODO: special operation handling -->
		</property>
		<property name="returns">
		  <xsl:choose>
		    <xsl:when test="Type/@type='void'">
		      <content>Nothing</content>
		    </xsl:when>
		    <xsl:otherwise>
		      <content><xsl:apply-templates select="Type" mode="describeType"/></content>
		    </xsl:otherwise>
		  </xsl:choose>
		</property>
	      </context>
	    </xsl:for-each-group>
	  </item>
	</xsl:for-each-group>
      </infoset>
    </infosets>
  </xsl:template>

  <xsl:template match="Type[@type='array' or @type='sequence']" mode="describeType">
    <xsl:if test="@nullable"><xsl:text>nullable </xsl:text></xsl:if>
    <xsl:text>array of </xsl:text><xsl:apply-templates select="Type" mode="describeType"/>
  </xsl:template>

  <xsl:template match="Type[@type='union']" mode='describeType'>
    <xsl:for-each select="Type">
      <xsl:apply-templates select="." mode="describeType"/>
      <xsl:choose>
	<xsl:when test="position()=last()"/>
	<xsl:when test="position()=last() - 1 and not(parent::Type/@nullable)">
	  <xsl:text> or </xsl:text>
	</xsl:when>
	<xsl:otherwise><xsl:text>, </xsl:text></xsl:otherwise>
      </xsl:choose>
      <xsl:if test="@nullable">
	<xsl:text> or null</xsl:text>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  
  <xsl:template match="Type[@type='DOMString']"  mode="describeType">
    <xsl:text>string</xsl:text>
    <xsl:if test="@nullable">
      <xsl:text> or null</xsl:text>
    </xsl:if>

  </xsl:template>

  <xsl:template match="Type[@type]" mode="describeType" priority='-1'>
    <xsl:value-of select="@type"/>
    <xsl:if test="@nullable">
      <xsl:text> or null</xsl:text>
    </xsl:if>
  </xsl:template>
 

  <xsl:template match="Type[@name]" mode="describeType">
    <xsl:choose>
      <xsl:when test="//Typedef[@name=current()/@name]">
	<xsl:apply-templates select="//Typedef[@name=current()/@name]/Type" mode="describeType"/>
      </xsl:when>
      <xsl:when test="//Enum[@name=current()/@name]">
	<xsl:text>one of "</xsl:text><xsl:value-of select="string-join(//Enum[@name=current()/@name]/EnumValue/@stringvalue, '&quot;,&quot; ')"/><xsl:text>"</xsl:text>
      </xsl:when>
      <xsl:otherwise>
	<span type="interface" infoset="js"><xsl:value-of select="@name"/></span><xsl:text> object</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="@nullable">
      <xsl:text> or null</xsl:text>
    </xsl:if>    
  </xsl:template>

</xsl:stylesheet>