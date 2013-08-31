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
		<property name="Attributes" infoset="js" type="property" list="inline">
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
      </infoset>
    </infosets>
  </xsl:template>

</xsl:stylesheet>