var NS4 = document.layers;
var IE = document.all;
var IE4 = navigator.appVersion.indexOf( "MSIE 4." ) != -1;
var isMac = navigator.appVersion.indexOf( "Mac" ) != -1;
var NSMac = (isMac && NS4);

function openURL( theURL, theTarget )
{
	// Netscape
	if ( NS4 || theTarget == "" )
	{
		top.location.href = theURL;
	}
	else
	{
		var targetWindow = window.open( theURL, theTarget, "width=600,height=400,resizable,toolbar" );

		if ( targetWindow.focus )
		{
			targetWindow.focus();
		}
	}
}

//
// Dashboard
//

    function menu_callback( theURL, theTarget )
    {
		if ( __LeavePage == "" || ( eval( __LeavePage + "( '" + theURL + "', '" + theTarget + "')" ) ) )
		{
        	openURL( theURL, theTarget );
        }
    }

//

function IncludeHeader( context, packageName, className )
{
	topPath = TopPath( context );
	imagePath = topPath + 'images/';

	document.write( '<A NAME="top"></A>' );
	document.write( '<FORM NAME="NavPopup">' );
	document.write( '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%" class="sdk_headerbar">' );
	document.write( '<TR>' );
	document.write( '<TD NOWRAP ALIGN="CENTER" VALIGN="MIDDLE" WIDTH="55">&nbsp;<IMG SRC="' + imagePath + 'logo.png" ALIGN="TOP" WIDTH="29" HEIGHT="28" BORDER="0" style="margin-right: 10px"></TD>' );
	if ( context == 'index' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE">Content Server SDK Documentation</TD>' );
	}

	if ( context == 'copyright' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE">Copyright Information</TD>' );
	}
	else if ( context == 'technotes' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">&nbsp;Content Server Technical Notes</SPAN></TD>' );
	}
	else if ( context == 'cside' )
	{
		document.write( '<td nowrap align="left" valign="middle"><span class="MastheadTitle">Content Server IDE Plug-in for Eclipse Quick Start Guide</span></td>' );
	}
	else if ( context == 'packages' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE">Content Server Version 9.5 Packages</TD>' );
	}
	else if ( context == 'dropins' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">&nbsp;Content Server Drop-in Packages</SPAN></TD>' );
	}
	else if ( context == 'package' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Package:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + packageName + '</SPAN></TD>' );
	}
	else if ( context == 'class' )
	{
		if ( className == null )
		{
			document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Class:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + packageName + '</SPAN></TD>' );
		}
		else
		{
			document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Class:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + className + '</SPAN></TD>' );
		}
	}
	else if ( context == 'datatype' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Datatype:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + className + '</SPAN></TD>' );
	}
	else if ( context == 'lapidoc' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Content Server API Developer\'s Reference Guide:&nbsp;</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + packageName + '</SPAN></TD>' );
	}
	else if ( context == 'moddevguide' )
	{
		if ( packageName == null )
		{
			document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">&nbsp;Module Developer\'s Guide&nbsp;</SPAN></TD>' );
		}
		else
		{
			document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Module Developer\'s Guide:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + packageName + '</SPAN></TD>' );
		}
	}
	else if ( context == 'olang' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">OScript Language Reference&nbsp;</span></TD>' );
	}
	else if ( context == 'olang2' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">OScript Language Reference</SPAN></TD>' );
	}
	else if ( context == 'blddev' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">&nbsp;Content Server Builder Developer\'s Guide&nbsp;</SPAN></TD>' );
	}
	else if ( context == 'modules' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle">&nbsp;Content Server Modules</SPAN></TD>' );
	}
	else if ( context == 'module' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Module:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + packageName + '</SPAN></TD>' );
	}
	else if ( context == 'module-class' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;Class:</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + className + '</SPAN></TD>' );
	}
	else if ( context == 'wfbuilder' )
	{
		document.write( '<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE">Workflow Developer\'s Guide:&nbsp' + packageName + '</TD>' );
	}

	document.write( '</TR></TABLE>' );
	
	includeContentContainer( context, packageName);
}

function includeContentContainer( context, contentFrameContainer )
{
	// Default is only content_container
	contentFrameContainer = typeof contentFrameContainer !== 'undefined' ? contentFrameContainer : false;
	if ( contentFrameContainer )
	{
		document.write('<div class="contentFrameContainer">');
	}
	
	document.write('<div class="content_container">');
	
	// Additional navigation links
	if ( context == 'technotes' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : Content Server Technical Notes</div><hr>' );
	}
	else if ( context == 'packages' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : All Packages</div>' );
	}
	else if ( context == 'dropins' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : All Drop-ins</div><hr>' );
	}
	else if ( context == 'package' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : <a class="location_link" href="packages.html">All Packages</a> : Package ' + contentFrameContainer+ '</div><hr>' );
	}
	else if ( context == 'class' )
	{
		if ( className == null )
		{
			document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : <a class="location_link" href="packages.html">All Packages</a> : <a class="location_link" href="package-' + contentFrameContainer.toLowerCase() + '.html">Package ' + contentFrameContainer + '</a> : Class ' + packageName + '</div><hr>' );
		}
		else
		{
			document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : <a class="location_link" href="packages.html">All Packages</a> : <a class="location_link" href="package-' + contentFrameContainer.toLowerCase() + '.html">Package ' + contentFrameContainer + '</a> : Class ' + className + '</div><hr>' );
		}
	}
	else if ( context == 'datatype' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html">Home</a> : <a class="location_link" href="packages.html">All Packages</a> : <a class="location_link" href="package-' + contentFrameContainer.toLowerCase() + '.html">Package ' + contentFrameContainer + '</a> : Datatype ' + className + '</div><hr>' );
	}
	else if ( context == 'copyright' )
	{
		document.write( '<div class="breadcrumb"><a class="" href="index.html">Home</a> : Copyright Information</div>' );
	}

	else if ( context == 'olang' )
	{
		document.write( '<div class="breadcrumb"><a class="" href="../index.html">Home</a> : OScript Language Reference</div>' );
	}
	else if ( context == 'olang2' )
	{
		document.write( '<div class="breadcrumb"><a class="" href="../index.html">Home</a> : <a class="" href="languageref.html">OScript Language Reference</a> : ' + contentFrameContainer + '</div>' );
	}
	else if ( context == 'cside' )
	{
		document.write( '<div class="breadcrumb"><a class="" href="../index.html">Home</a> : Content Server IDE Plug-in for Eclipse Quck Start Guide</div>' );
	}
	else if ( context == 'blddev' )
	{
		document.write( '<div class="location_link"><a class="location_link" href="../index.html">Home</a> : Content Server Builder Developer\'s Guide</div><hr>' );
	}
	else if ( context == 'modules' )
	{
		document.write( '<div class="location_link"><a class="location_link" href="../index.html">Home</a> : All Modules</div><hr>' );
	}
	else if ( context == 'module' )
	{
		document.write( '<div class="location_link"><a class="location_link" href="../../index.html">Home</a> : <a class="location_link" href="../index.html">All Modules</a> : Module ' + contentFrameContainer + '</div><hr>' );
	}
	else if ( context == 'module-class' )
	{
		document.write( '<div class="location_link"><a class="location_link" href="../../index.html">Home</a> : <a class="location_link" href="../index.html">All Modules</a> : <a class="location_link" href="index.html">Module ' + contentFrameContainer + '</a> : Class ' + className + '</div><hr>' );
	}
	else if ( context == 'wfbuilder' )
	{
		document.write( '<div class="breadcrumb"><a class="location_link" href="../index.html" target="_parent">Home</a> : <a class="" href="index.html">Content Server Workflow Developer\'s Guide</a></div>' );
	}
}

function IncludeFooter( context, nestedFrames)
{
	document.write('<div style="width:100%;">');
	topPath = TopPath( context );
	imagePath = topPath + 'images/';
	targetLevel = "_self";

	// only in case of toplevel copyright html is in current folder
	var copyright = '../copyright.html';
	if ( context == 'index_toplevel' || context == 'copyright_toplevel' )
	{
		copyright = 'copyright.html';
	}

	if (nestedFrames) {
		targetLevel = "_parent"
	}
	
	// Copyright notice

	document.write( '<P><TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" CLASS="CopyrightTable" WIDTH="100%"><TR><TD CLASS="CopyrightCell" ALIGN="RIGHT" NOWRAP>' );
	document.write( '&nbsp;<a href="' + copyright + '" target="' + targetLevel + '">Copyright</a> &copy; 2018 OpenText Corporation.  All rights reserved.' );
	document.write( '</TD></TR></TABLE></P>' );
}

//
// Insert a separator
//
function insertSeparator( imagePath )
{
	if ( imagePath == null )
	{
		this.imagePath = '../images/';
	}
	else
	{
		this.imagePath = imagePath;
	}
	document.write( '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%">' );
	document.write( '<TR>' );
	document.write( '<TD VALIGN="bottom">&nbsp;</TD>' );
	document.write( '</TR>' );
	document.write( '<TR>' );
	document.write( '<TD BGCOLOR="#003399"><IMG alt="spacer gif" height="2" src="' + this.imagePath + 'spacer.gif" width="2"></TD>' );
	document.write( '</TR>' );
	document.write( '<TR>' );
	document.write( '<TD>&nbsp;</TD>' );
	document.write( '</TR>' );
	document.write( '</TABLE>' );
}

//
// Insert a top-of-page separator
//
function insertTopSeparator( imagePath )
{
	var		topAltText = 'Top';

	if ( imagePath == null )
	{
		this.imagePath = '../images/';
	}
	else
	{
		this.imagePath = imagePath;
	}
	document.write( '<table border="0" cellpadding="0"  width="100%" bgcolor="">' );
	document.write( '<tr>' );
	document.write( '<td width="99%" align="left" valign="top">' );
	document.write( '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%">' );
	document.write( '<TR>' );
	document.write( '<TD VALIGN="bottom">&nbsp;</TD>' );
	document.write( '</TR>' );
	document.write( '<TR>' );
	document.write( '<TD BGCOLOR="#003399"><IMG alt="spacer gif" height="2" src="' + this.imagePath + 'spacer.gif" width="2"></TD>' );
	document.write( '</TR>' );
	document.write( '<TR>' );
	document.write( '<TD>&nbsp;</TD>' );
	document.write( '</TR>' );
	document.write( '</TABLE>' );
	document.write( '<td><a href="#Top"><img src="../images/arrowup2.gif" width=15 height=16 alt="" border="0"></a></td>' );
	document.write( '</tr>' );
	document.write( '</table>' );
}




function TopPath(
	context )
{
	var	topPath = "../";


	switch ( context )
	{
		case "index":
			topPath = "";
			break;
		case "copyright":
			topPath = "";
			break;
		case "module":
		case "module-class":
			topPath = "../../";
			break;
		default:
			break;
	}

	return topPath;
}

//THIS IS THE FUNCTION FOR OPENING THE NOTES WINDOW

function noteWin()
{
	var noteDataShow = '<FONT FACE="Arial, Helvetica, sans-serif" size="2">'+noteData+'</FONT>';
	var w;
	w = window.open( "","notes","width=200,height=150,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
	w.document.open();
	with (w.document)
{
	write( noteTop + noteDataShow + noteBot );
}
	w.document.close();
	if ( w.focus )
	{
		w.focus();
	}
}

function noteWin2()
{
	var noteDataShow = '<FONT FACE="Arial, Helvetica, sans-serif" size="2">'+noteData2+'</FONT>';
	var w;
	w = window.open( "","notes","width=200,height=150,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
	w.document.open();
	with (w.document)
{
	write( noteTop + noteDataShow + noteBot );
}
	w.document.close();
	if ( w.focus )
	{
		w.focus();
	}
}

function noteWin3()
{
	var noteDataShow = '<FONT FACE="Arial, Helvetica, sans-serif" size="2">'+noteData3+'</FONT>';
	var w;
	w = window.open( "","notes","width=200,height=150,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
	w.document.open();
	with (w.document)
{
	write( noteTop + noteDataShow + noteBot );
}
	w.document.close();
	if ( w.focus )
	{
		w.focus();
	}
}

function noteWin4()
{
	var noteDataShow = '<FONT FACE="Arial, Helvetica, sans-serif" size="2">'+noteData4+'</FONT>';
	var w;
	w = window.open( "","notes","width=200,height=150,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
	w.document.open();
	with (w.document)
{
	write( noteTop + noteDataShow + noteBot );
}
	w.document.close();
	if ( w.focus )
	{
		w.focus();
	}
}

function updateParentHeader( header )
{
	if ( self != top )
	{
		var headerTitle = parent.document.getElementById('headerTitle');
		headerTitle.innerHTML = ": " + header;
	}
}

//THIS IS THE STRING FOR THE TOP HALF OF THE NOTE WINDOW
noteTop ='<HTML><HEAD><TITLE>Note</TITLE></HEAD>';
noteTop+='<BODY BGCOLOR="#FFFFCC" TOPMARGIN="0" LEFTMARGIN="0" MARGINWIDTH="0" MARGINHEIGHT="0" RIGHTMARGIN="0" link="#003366" alink="#3300FF" vlink="#660033">';
noteTop+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0" HEIGHT="100%">';
noteTop+='<TR><TD VALIGN="top">';
noteTop+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2"><TR>';
noteTop+='<TD ALIGN="CENTER"><B><FONT FACE="Arial, Helvetica, sans-serif" COLOR="#333300"><IMG SRC="../images/note.gif" WIDTH="18" HEIGHT="16">&nbsp;NOTE:</FONT></B></TD>';
noteTop+='</TR><TR><TD>';

//THIS IS THE STRING FOR THE BOTTOM HALF OF THE NOTE WINDOW
noteBot ='<BR><BR></TD></TR></TABLE></TD></TR><TR VALIGN="BOTTOM"><TD>';
noteBot+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2"><TR VALIGN="TOP">';
noteBot+='<TD ALIGN="CENTER"><FONT SIZE="2" FACE="Arial, Helvetica, sans-serif"><A HREF="javascript:window.close()">close</A></FONT></TD>';
noteBot+='</TR></TABLE></TD></TR></TABLE></BODY></HTML>';

//navigation aids

NS4 = document.layers;
IE = document.all;
IE4 = navigator.appVersion.indexOf( "MSIE 4." ) != -1;
isMac = navigator.appVersion.indexOf( "Mac" ) != -1;
NSMac = (isMac && NS4);

// NO NEED TO CHANGE ANYTHING BELOW HERE

if (document.images) {
arImLoadB = new Array ("left_over","right_over");
arImListB = new Array ();
for (counter in arImLoadB) {
arImListB[counter] = new Image();
arImListB[counter].src = "../images/" + arImLoadB[counter] + ".gif";
}}

function movr(){this.img.src = this.img.overSrc;}
function mout(){this.img.src = this.img.outSrc;}
function makeButs(){
	lr = "left";
//	document.write("<P ALIGN=RIGHT>")
	for (i=0;i<arPages.length;i++){
		if (i==curPage){lr = "center";}
		imstr = "<IMG SRC='../images/"+ lr + ".gif' WIDTH=18 HEIGHT=18 BORDER=0 ALT='"+ arAlts[i] + "'>";
		if (i==curPage) {document.write(imstr);lr="right";continue;}
		document.write(imstr.link(arPages[i]));
		if(!ver4){continue;}
		tLink =	document.links[document.links.length-1];
		tImg = tLink.img = document.images[document.images.length-1];
		tImg.outSrc = tImg.src;
		tImg.overSrc = "../images/" + lr + "_over.gif";
		tLink.onmouseover = movr;
		tLink.onmouseout = tLink.onmouseup = mout;
	}
//	document.write("</P>");
	document.write("<P>");
}

