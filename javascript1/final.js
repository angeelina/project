// JavaScript Document

var images=document.getElementsByClassName("bannerimage");
var clock=document.getElementsByClassName("clockImage");
var slogan=document.getElementsByClassName("slideSlogan");
var slidePara=document.getElementsByClassName("slidePara");
var leftSlider = document.getElementById("leftSlider");
var rightSlider = document.getElementById("rightSlider");
var imageDisplay = document.getElementById("imageDisplay");
var sloganDiv=document.getElementById("sloganDesc");
var paraDisplay=document.getElementById("paraDesc");
var clockDisplay=document.getElementById("clockDisplay");
var email=document.getElementById("email");


imageDisplay.setAttribute("index","0");
clockDisplay.setAttribute("index1","0");
sloganDiv.setAttribute("index2","0");
paraDisplay.setAttribute("index3","0");


//on mouse over
download.onmouseover = function()
{
	download.src ="images/download2.png";
}

//on mouse out
download.onmouseout = function()
{
	download.src = "images/sign.png";
}

//on left silde click
leftSlider.onclick = function()
{	
//image slider
	var index = parseInt(imageDisplay.getAttribute("index")) -1;
	if(index < 0)
	{
		index = images.length-1;
	}
	imageDisplay.src = images[index].src;	
	imageDisplay.setAttribute("index",index);
	
	//slide clock
	var index1= parseInt(clockDisplay.getAttribute("index1")) -1;
	if(index1 < 0)
	{
		index1= clock.length-1;
	}
	clockDisplay.src = clock[index1].src;	
	clockDisplay.setAttribute("index1",index1);
	
	//slide header
	var index2= parseInt(sloganDiv.getAttribute("index2")) -1;
	if(index2 < 0)
	{
		index2= slogan.length-1;
	}
	sloganDiv.innerHTML = slogan[index2].innerHTML;	
	sloganDiv.setAttribute("index2",index2);
	
	//slide para
	var index3= parseInt(paraDisplay.getAttribute("index3")) -1;
	if(index3 < 0)
	{
		index3= slidePara.length-1;
	}
	paraDisplay.innerHTML = slidePara[index3].innerHTML;	
	paraDisplay.setAttribute("index3",index3);	
	
}

//on right side click
rightSlider.onclick = function()
{	
	//slide image right
	var index = parseInt(imageDisplay.getAttribute("index")) +1;
	if(index > images.length-1)
	{
		index = 0;
	}
	imageDisplay.src = images[index].src;
	imageDisplay.setAttribute("index",index);
	
	//clock
	var index1= parseInt(clockDisplay.getAttribute("index1")) +1;
	if(index1 > clock.length-1)
	{
		index1= 0;
	}
	clockDisplay.src = clock[index1].src;	
	clockDisplay.setAttribute("index1",index1);
	
	//slide header
	var index2= parseInt(sloganDiv.getAttribute("index2")) -1;
	if(index2 > slogan.length-1)
	{
		index2=0 ;
	}
	sloganDiv.innerHTML = slogan[index2].innerHTML;	
	sloganDiv.setAttribute("index2",index2);
	
	//slide para
	var index3= parseInt(paraDisplay.getAttribute("index3")) -1;
	if(index3 < slidePara.length-1)
	{
		index3=0 ;
	}
	paraDisplay.innerHTML = slidePara[index3].innerHTML;	
	paraDisplay.setAttribute("index3",index3);	
}


//on email button click
email.onclick=function()
{
	email.value="";
}