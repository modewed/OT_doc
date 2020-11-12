NS4 = (document.layers);
IE4 = (document.all);
ver4 = (NS4 || IE4);
isMac = (navigator.appVersion.indexOf("Mac") != -1);
if (!ver4){event=null;}

//
// Constructor for AdminHeaderTab
//
function AdminHeaderTab( whichTab, link )
{
	this.tabLabel = whichTab;
	this.tabLink = link;
}

//
// Constructor for AdminHeader
//
function AdminHeader( imagePath )
{
	if ( imagePath == null )
	{
		this.imagePath = '../images/';
	}
	else
	{
		this.imagePath = imagePath;
	}

	this.mastheadImage = 'icon_help.gif';
	this.title1 = '';
	this.title2 = '';
	this.tabs = new Array();
	this.tabCount = 0;
}

//
// addTab method for AdminHeader
//
function AdminHeader_addTab( whichTab, link )
{
	this.tabs[ this.tabCount++ ] = new AdminHeaderTab( whichTab, link );
}

//
// AdminHeader tabs (translate these strings for other languages)
//
AdminHeader.PROCEDURES = "Procedures";
AdminHeader.BACKGROUND = "Background Info";
AdminHeader.RELATED = "Related Topics";

//
// draw method for AdminHeader
//
function AdminHeader_draw()
{
	var		s = "";
	var		t = "";
	var vers = "";

	if ( document.layers )
		{
			vers = "NS";
		}

	// Figure out the tabs first

	for ( i = 0; i < this.tabs.length; i++ )
	{
		oneTab = this.tabs[ i ];

		if ( oneTab.tabLink == '' )
		{
			// This is the selected tab

			if ( this.title2.length == 0 )
			{
				this.title2 = oneTab.tabLabel;
			}

			fontStyle = 'TabFontSelected';

			tabLabel = '&nbsp;&nbsp;' + oneTab.tabLabel + '&nbsp;|&nbsp';
		}

		else if ( oneTab.tabLink == 'none' )
		{
			// This is an unavailable tab

			fontStyle = '';
			tabLabel = '';
		}

		else
		{
			// This is a linked tab

			fontStyle = 'TabFontNormal';
			tabLabel = '&nbsp;&nbsp;<A HREF="' + oneTab.tabLink + '" CLASS="'+vers +fontStyle+'">' + oneTab.tabLabel + '</A>&nbsp;|&nbsp';
		}

		t += '<TD NOWRAP CLASS="'+vers +fontStyle+'">' + tabLabel + '</TD>';

	}

	// Draw the masthead

	s += '<A NAME="top"></A>';
	s += '<TABLE CLASS="MastheadTable" BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%">';
	s += '<TR><TD>';
	s += '	<TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">';
	s += '	<TR>';
	s += '		<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><IMG SRC="' + this.imagePath + this.mastheadImage + '" ALIGN="TOP" WIDTH="29" HEIGHT="28" ALT="" BORDER="0"></TD>';
	s += '		<TD NOWRAP ALIGN="LEFT" VALIGN="MIDDLE"><SPAN CLASS="MastheadTitle1">&nbsp;' + this.title1 + '</SPAN>&nbsp;<SPAN CLASS="MastheadTitle2">' + this.title2 + '</SPAN></TD>';
	s += '	</TR>';
	s += '	</TABLE>';
	s += '</TD></TR>';
	s += '</TABLE>';

	// Draw tabs if necessary

	if ( t.length > 0 )
	{
		s += '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="1" BGCOLOR="#FFFFFF" ALIGN="RIGHT">';
		s += '	<TR>';

		s += t;

		s += '	</TR>';
		s += '</TABLE>';
	}

	s += '<P>&nbsp;</P>';

	document.write( s );
}

//
// Create a prototype for AdminHeader
//
new AdminHeader();
AdminHeader.prototype.draw = AdminHeader_draw;
AdminHeader.prototype.addTab = AdminHeader_addTab;

//
// Constructor for AdminFooter
//
function AdminFooter( imagePath )
{
	if ( imagePath == null )
	{
		this.imagePath = '../images/';
	}
	else
	{
		this.imagePath = imagePath;
	}
}

//
// draw method for AdminFooter
//
function AdminFooter_draw()
{
	var		s = "";

	// Translate these strings for other languages...
	var		copyrightLabel = '&nbsp;Livelink &reg; Version 9.5, <a href="../copyright.html">Copyright</a> &copy; Open Text Inc. All rights reserved.';
	var		topAltText = 'Top';


	s += '<P>';
	s += '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" CLASS="CopyrightTable" WIDTH="100%">';
	s += '	<TR>';
	s += '		<TD CLASS="CopyrightCell" ALIGN="LEFT" NOWRAP>' + copyrightLabel + '</TD>';
	s += '		<TD CLASS="CopyrightCell" ALIGN="RIGHT"><A HREF="#top"><IMG SRC="' + this.imagePath + 'arrowup2.gif" ALT="' + topAltText + '" WIDTH="16" HEIGHT="16" BORDER="0"></A></TD>';
	s += '	</TR>';
	s += '</TABLE>';

	document.write( s );
}

//
// Create a prototype for AdminFooter
//
new AdminFooter();
AdminFooter.prototype.draw = AdminFooter_draw;

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
	document.write( '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" CLASS="CopyrightTable" WIDTH="100%">' );
	document.write( '<TR>' );
	document.write( '<TD CLASS="CopyrightCell" ALIGN="RIGHT"><A HREF="#top"><IMG SRC="' + this.imagePath + 'arrowup2.gif" ALT="' + topAltText + '" WIDTH="16" HEIGHT="16" BORDER="0"></A></TD>' );
	document.write( '</TR>' );
	document.write( '</TABLE>' );
}

//THIS IS THE FUNCTION FOR OPENING THE NOTES WINDOW

function noteWin()
{
	var noteDataShow = '<FONT FACE="Arial, Helvetica, sans-serif" size="2">'+noteData+'</FONT>';
	var w;
	w = window.open( "","notes","width=200,height=200,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
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
	w = window.open( "","notes","width=200,height=200,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
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
	w = window.open( "","notes","width=200,height=200,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
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
	w = window.open( "","notes","width=200,height=200,resizable=yes,menubar=no,scrollbars=auto,toolbar=no");
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


//THIS IS THE STRING FOR THE TOP HALF OF THE NOTE WINDOW
noteTop ='<HTML><HEAD><TITLE>Note</TITLE></HEAD>';
noteTop+='<BODY BGCOLOR="#FFFFCC" TOPMARGIN="0" LEFTMARGIN="0" MARGINWIDTH="0" MARGINHEIGHT="0" RIGHTMARGIN="0" link="#003366" alink="#3300FF" vlink="#660033">';
noteTop+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0" HEIGHT="100%">';
noteTop+='<TR><TD VALIGN="top">';
noteTop+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2"><TR>';
noteTop+='<TD ALIGN="CENTER"><B><FONT FACE="Arial, Helvetica, sans-serif" COLOR="#333300"><IMG SRC="../images/note.gif" ALT="" WIDTH="18" HEIGHT="16">&nbsp;NOTE:</FONT></B></TD>';
noteTop+='</TR><TR><TD>';

//THIS IS THE STRING FOR THE BOTTOM HALF OF THE NOTE WINDOW
noteBot ='<BR><BR></TD></TR></TABLE></TD></TR><TR VALIGN="BOTTOM"><TD>';
noteBot+='<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2"><TR VALIGN="TOP">';
noteBot+='<TD ALIGN="CENTER"><FONT SIZE="2" FACE="Arial, Helvetica, sans-serif"><A HREF="javascript:window.close()">close</A></FONT></TD>';
noteBot+='</TR></TABLE></TD></TR></TABLE></BODY></HTML>';

//navigation aids

// NO NEED TO CHANGE ANYTHING BELOW HERE

if (document.images)
{
	arImLoadB = new Array ("left_over","right_over");
	arImListB = new Array ();
	for (counter in arImLoadB)
	{
		arImListB[counter] = new Image();
		arImListB[counter].src = "../images/" + arImLoadB[counter] + ".gif";
	}
}

function movr(){this.img.src = this.img.overSrc;}
function mout(){this.img.src = this.img.outSrc;}
function makeButs()
{
	lr = "left";
//	document.write("<P ALIGN=RIGHT>")
	for (i=0;i<arPages.length;i++)
	{
		if (i==curPage)
		{
			lr = "center";
		}
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

//
// Constructor for SearchUser
//
function SearchUser()
{
}

//draw search user

function SearchUser_draw()
	{
		var s = "";

		s += '<li class="body">';
		s += 'Click one of the following search areas in the <span class="gui">Search</span> drop-down list:</p>';
		s += '<ul type="square">';
		s += '</p><li class="body"><span class="gui">User Last Name</span></p>';
		s += '<li class="body"><span class="gui">User First Name</span></p>';
		s += '<li class="body"><span class="gui">User Log-in</span></p>';
		s += '<li class="body"><span class="gui">User E-mail</span></p>';
		s += '<li class="body"><span class="gui">Group Name</span></li></p>';
		s += '</ul>';
		s += '<li class="body">';
		s += 'Type your search term in the <span class="gui">for</span> field.<br>';
		s += '<BR>Livelink performs a case-insensitive <i>starts with</i> search.&nbsp;';
		s += 'For example, typing <span class="code">van</span> for <span class="gui">User Last Name</span> displays information about Livelink users whose last name begins with <span class="code">van </span> or <span class="code">Van</span>.&nbsp;';
		s += '</p>Leave the field blank to retrieve all records of the type specified.';
		s += '</p><li class="body">Click the <span class="gui">Find</span> button.';
		s += '</p><li class="body">Click the <span class="gui">Select</span> link of the user or group you want to choose.';

	document.write( s );
}

//prototype it
new SearchUser();
SearchUser.prototype.draw = SearchUser_draw;


