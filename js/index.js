	function toggleFar(){
		$("#tempcel").hide();
	  	$("#tempfar").show();
	};

	function toggleCel(){
		$("#tempfar").hide();
	  	$("#tempcel").show();
	};

$(document).ready(function () {
	let IpApi = 'http://ip-api.com/json';
	
	$.getJSON(IpApi, function(location) {
		let openWeatherApi = 'http://api.openweathermap.org/data/2.5/weather?lat=' 
			+ location.lat + '&lon=' + location.lon 
			+ '&APPID=e102cfacacc4a70631a9c349e37678ab&units=metric';

          $.getJSON(openWeatherApi, function(weather) {
          $("#location").text(" " + weather.name + ", " + weather.sys.country);
            $("#sky").text(weather.weather[0].main);
          var cel = weather.main.temp;
            var fah = cel * (9 / 5.0) + 32;
            $("#tempcel").text(cel + '   °C');
            $("#tempfar").text(fah + ' °F');
            $("#tempfar").hide();

            switch(weather.weather[0].main.toLowerCase()) 
            	{
				    case "clouds":
				       $("#tempimg").html("<i id='timg' class='wi wi-cloudy'></i>")
				       break;
				    case "rain":
				       $("#tempimg").html("<i id='timg' class='wi wi-rain'></i>")
				       break;
				    case "snow":
				       $("#tempimg").html("<i id='timg' class='wi wi-snow'></i>")
				       break;
				    case "dizzle":
				       $("#tempimg").html("<i id='timg' class='wi wi-sprinkle'></i>")
				       break;
				    case "clear":
				       $("#tempimg").html("<i id='timg' class='wi wi-cloud'></i>")
				       break;
				    case "thunderstorm":
				       $("#tempimg").html("<i id='timg' class='wi wi-thunderstorm'></i>")
				       break;
				    case "atmosphere":
				       $("#tempimg").html("<i id='timg' class='wi wi-thunderstorm'></i>")
				       break;
				    case "extreme":
				       $("#tempimg").html("<i id='timg' class='wi wi-thunderstorm'></i>")
				       break;
				    default:
				        $("#tempimg").html("<i id='timg' class='wi wi-na'></i>")
				       break;
				}
			
		});
	});

	$("#tempfar").on("click", function(){
      toggleCel();
    });

 	$("#tempcel").on("click", function(){
      toggleFar();
    });

});