var first = 0;
var second = 0;

function Start1()
{
	document.getElementById("start1").style.display = "none";
	document.getElementById("story1").style.display = "";
	first = 1;
}
function Restart1()
{
	first = 1;
	document.getElementById("text-1a").style.display = "";
	document.getElementById("text-1b").style.display = "none";
	document.getElementById("text-1c").style.display = "none";
	document.getElementById("text-1d").style.display = "none";
	document.getElementById("text-1e").style.display = "none";
	document.getElementById("text-1f").style.display = "none";
	document.getElementById("story-1a").style.display = "";
	document.getElementById("story-1b").style.display = "none";
	document.getElementById("next1").style.display = "";
}
function Next1()
{
	if (first == 1)
	{
		document.getElementById("text-1a").style.display = "none";
		document.getElementById("text-1b").style.display = "";
		first = 2;
	}
	else if (first == 2)
	{
		document.getElementById("text-1b").style.display = "none";
		document.getElementById("text-1c").style.display = "";
		first = 3;
	}
	else if (first == 3)
	{
		document.getElementById("text-1c").style.display = "none";
		document.getElementById("text-1d").style.display = "";
		document.getElementById("story-1b").style.display = "";
		first = 4;
	}
	else if (first == 4)
	{
		document.getElementById("text-1d").style.display = "none";
		document.getElementById("text-1e").style.display = "";
		first = 5;
	}
	else if (first == 5)
	{
		document.getElementById("text-1e").style.display = "none";
		document.getElementById("text-1f").style.display = "";
		document.getElementById("next1").style.display = "none";
	}
}

function Start2()
{
	document.getElementById("start2").style.display = "none";
	document.getElementById("story2").style.display = "";
	second = 1;
}
function Restart2()
{
	second = 1;
	document.getElementById("text-2a").style.display = "";
	document.getElementById("text-2b").style.display = "none";
	document.getElementById("text-2c").style.display = "none";
	document.getElementById("text-2d").style.display = "none";
	document.getElementById("text-2e").style.display = "none";
	document.getElementById("text-2f").style.display = "none";
	document.getElementById("text-2g").style.display = "none";
	document.getElementById("story-2a").style.display = "";
	document.getElementById("story-2b").style.display = "none";
	document.getElementById("story-2c").style.display = "none";
	document.getElementById("next2").style.display = "";
}
function Next2()
{
	if (second == 1)
	{
		document.getElementById("text-2a").style.display = "none";
		document.getElementById("text-2b").style.display = "";
		second = 2;
		document.getElementById("story-2b").style.display = "";
	}
	else if (second == 2)
	{
		document.getElementById("text-2b").style.display = "none";
		document.getElementById("text-2c").style.display = "";
		second = 3;
		document.getElementById("story-2b").style.display = "none";
		document.getElementById("story-2c").style.display = "";
	}
	else if (second == 3)
	{
		document.getElementById("text-2c").style.display = "none";
		document.getElementById("text-2d").style.display = "";
		second = 4;
	}
	else if (second == 4)
	{
		document.getElementById("text-2e").style.display = "";
		second = 5;
	}
	else if (second == 5)
	{
		document.getElementById("text-2d").style.display = "none";
		document.getElementById("text-2e").style.display = "none";
		document.getElementById("text-2f").style.display = "";
		document.getElementById("text-2g").style.display = "";
		document.getElementById("next2").style.display = "none";
	}
}



var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");
var song6 = document.getElementById("song6");
var song7 = document.getElementById("song7");
var song8 = document.getElementById("song8");
var song9 = document.getElementById("song9");
var song10 = document.getElementById("song10");
var song11 = document.getElementById("song11");
var song12 = document.getElementById("song12");
var song13 = document.getElementById("song13");
var song14 = document.getElementById("song14");

function Play1()
{
	song1.play();
}
function Stop1()
{
	song1.pause();
}

function Play2()
{
	song2.play();
}
function Stop2()
{
	song2.pause();
}

function Play3()
{
	song3.play();
}
function Stop3()
{
	song3.pause();
}

function Play4()
{
	song4.play();
}
function Stop4()
{
	song4.pause();
}

function Play5()
{
	song5.play();
}
function Stop5()
{
	song5.pause();
}

function Play6()
{
	song6.play();
}
function Stop6()
{
	song6.pause();
}

function Play7()
{
	song7.play();
}
function Stop7()
{
	song7.pause();
}

function Play8()
{
	song8.play();
}
function Stop8()
{
	song8.pause();
}

function Play9()
{
	song9.play();
}
function Stop9()
{
	song9.pause();
}

function Play10()
{
	song10.play();
}
function Stop10()
{
	song10.pause();
}

function Play11()
{
	song11.play();
}
function Stop11()
{
	song11.pause();
}

function Play12()
{
	song12.play();
}
function Stop12()
{
	song12.pause();
}

function Play13()
{
	song13.play();
}
function Stop13()
{
	song13.pause();
}

function Play14()
{
	song14.play();
}
function Stop14()
{
	song14.pause();
}