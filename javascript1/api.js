// JavaScript Document

var searchBtn=document.getElementById("search");
var resultBox=document.getElementById("result");
var listUlBox=document.getElementById("listUl");
var descriptionBox=document.getElementById("descriptionBox");
var descBox=document.getElementById("description");
var descriptions=document.getElementById("descriptions");
var imgDiv=document.getElementById("imgDiv");
var prices=document.getElementById("prices");
var priceBox=document.getElementById("price");
var forexBox=document.getElementById("forex");
var nepaliBox=document.getElementById("nepaliPrice");
var nameDiv = document.getElementById("nameDiv");
var searchBoxDiv=document.getElementById("searchBoxDiv");

var currentForexRequest = new XMLHttpRequest;
			  currentForexRequest.open('get','http://openexchangerates.org/api/latest.json?app_id=f46e5af7052149ad8c1af011d5015310');
			  currentForexRequest.send();
			  currentForexRequest.onloadend=function()
			  {
				currentForexInfo = (eval('('+currentForexRequest.responseText+')'));
				
				console.log(currentForexInfo);
			  }




searchBtn.onclick=function(){
	
	
	var searchKeyword=document.form1.searchBox.value;
	var searchByKeyword = new XMLHttpRequest;
			  searchByKeyword.open('get','http://sandbox.api.ebaycommercenetwork.com/publisher/3.0/json/GeneralSearch?apiKey=78b0db8a-0ee1-4939-a2f9-d3cd95ec0fcc&trackingId=7000610&visitorUserAgent&visitorIPAddress&keyword='+searchKeyword);

			  searchByKeyword.send();
			  searchByKeyword.onloadend=function()
			  {
				  listUlBox.innerHTML = "";
				  searchedItem = (eval('('+searchByKeyword.responseText+')'));
				  for(i=0;i<5;i++)
				  {
					  	list=document.createElement('li');
					  
				  		list.innerHTML +=searchedItem.categories.category[0].items.item[i].product.name;
					
						var description=document.createElement("button");
						description.innerHTML="description";
						description.setAttribute("index",i);
						
						
						
						description.onclick=function()
						{
							
							var indexDesc=this.getAttribute("index");
							//name
							var name=searchedItem.categories.category[0].items.item[indexDesc].product.name;
							nameDiv.innerHTML="<strong>NAME:</strong><br />"+name+"<br />";
							
							//description
							descriptions.onclick=function()
							{							
							var desc=searchedItem.categories.category[0].items.item[indexDesc].product.fullDescription;
							descBox.innerHTML ="DESCRIPTION : <br/>"+desc;
														}
							//image
							imgDiv.onclick=function()
							{
								descBox.innerHTML = "<img src='"+searchedItem.categories.category[0].items.item[indexDesc].product.images.image[0].sourceURL+"' height='200px' width='200px'/>";
							}
						
						

						
						//price
						prices.onclick=function()
						{
						var p=searchedItem.categories.category[0].items.item[indexDesc].product.minPrice.value;
						descBox.innerHTML = "<p>Price in Dollar: $"+p+"</br>";
																
						var a =currentForexInfo.rates.NPR;
					    descBox.innerHTML +="1$=Rs."+a+"</br>";
						
						 var btnPrice=document.createElement('button');						
						 descBox.appendChild(btnPrice);
						 btnPrice.innerHTML+="change to Nepali Currency</br>";
						 btnPrice.onclick=function()
							 {
								 descBox.innerHTML+="Rs."+p*a+"</p>";
							 }
						}
						}
						
						
						list.appendChild(description);
				 		
						listUlBox.appendChild(list);
						
						
				  }
				 console.log(searchedItem);
			  }
}
//active state of tabs
var tab = document.getElementsByClassName("tabs");
	for(var i = 0; i < tab.length;i++)
		{
		tab[i].onclick = function()
			{
				for(var j = 0; j < tab.length;j++)
				{
					tab[j].style.border = "none";
				}
					this.style.border = "2px solid red";
				}
}


