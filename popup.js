function enterFunc(event) {
 if (event.keyCode == 13 || event.which == 13){
                    //alert("You are clicked");
					loadXMLDoc();
                }
  
}
function loadXMLDoc() {	
	 			let form = document.forms.citySearch; 
  				let elem1 = form.elements.cityName; 
  				var city = elem1.value;

  				var xmlhttp = new XMLHttpRequest();
  				xmlhttp.onreadystatechange = function() {
    				if (this.readyState == 4 && this.status == 200) {
      					myFunction(this);
    					}
					};

 				xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+
 					city+"&APPID=6ae4c156e590b860617fa4b1b7e72fbc&&mode=xml", true);
  					xmlhttp.send();
			}

			function myFunction(xml) {
  				var i;
  				var xmlDoc = xml.responseXML;
				
				//========================================================================================
  				var y = xmlDoc.getElementsByTagName("forecast");
  				var temp = Math.round(y[0].getElementsByTagName("time")[0].getElementsByTagName("temperature")[0].getAttribute('max') - 
  							273.15);
  				var loc = xmlDoc.getElementsByTagName("location");
  				var symbolName = y[0].getElementsByTagName("time")[0].getElementsByTagName("symbol")[0].getAttribute('name');
 				var tab = "<p>"+temp+" &#8451;"+"</p>"+loc[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +"<br>"+
 							loc[0].getElementsByTagName("country")[0].childNodes[0].nodeValue+"<br>"+symbolName;
 				var icon = "http://openweathermap.org/img/w/"+
 							y[0].getElementsByTagName("time")[0].getElementsByTagName("symbol")[0].getAttribute('var')+".png";
  				
  				document.getElementById("demo").innerHTML = tab;
  				document.getElementById('myImage').src=icon;
  				
			}