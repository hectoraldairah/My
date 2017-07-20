$(document).ready(function(){
    var userPosition = 
    {
        lat: '',
        long: ''
    };
    var urlAPI = 'https://api.darksky.net/forecast/409d2ec2e2ba317c8037fc0eba1d97bd/';
    getPosition();

    function getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                userPosition.lat = position.coords.latitude;
                userPosition.long = position.coords.longitude;
                console.log(userPosition.lat); //This shows me the latitude
                showPosition(userPosition.lat,userPosition.long);
            });
        }
        else {
            alert("Geolocation not supported by your browser");
        }

    }

    function showPosition(lat,long)
    {
        urlAPI = urlAPI + lat + ',' + long;
        getJSON(urlAPI);
    }

    function getJSON(urlAPI)
    {
        $.ajax({
            dataType: "jsonp",
            url : urlAPI ,}).done(function(data){
           //Center Card//
            $('#temperature').html(Math.round(data.currently.temperature));
            
             $('#celcious').click(function(){
                 $('#temperature').html(Math.round((data.currently.temperature - 32) * (5 / 9)));
                  $(this).toggleClass('clicked');
                  $('#farenheit').removeClass('clicked');
             });

              $('#farenheit').click(function(){
                 $('#temperature').html(Math.round(data.currently.temperature));
                  $(this).toggleClass('clicked');
                  $('#celcious').removeClass('clicked');

             });
            
            //Left Card//

            $('#summary').html(data.currently.summary);
             
            var iconSelect = $('#icon-summary').html(data.currently.icon).text();
            
            switch(iconSelect) {
                case 'clear-day': $('#icon-summary').html('<i class = "wi wi-day-sunny"></i>');break;
                case 'rain': $('#icon-summary').html('<i class = "wi wi-rain"></i>');break;
                case 'snow': $('#icon-summary').html('<i class = "wi wi-snow"></i>');break;
                case 'sleet': $('#icon-summary').html('<i class = "wi wi-sleet"></i>');break;
                case 'wind': $('#icon-summary').html('<i class = "wi wi-windy"></i>');break;
                case 'fog': $('#icon-summary').html('<i class = "wi wi-fog"></i>');break;
                case 'fog': $('#icon-summary').html('<i class = "wi wi-fog"></i>');break;
                case 'cloudy': $('#icon-summary').html('<i class = "wi wi-cloudy"></i>');break;
                case 'partly-cloudy-day': $('#icon-summary').html('<i class = "wi wi-day-cloudy"></i>');break;
                case 'partly-cloudy-night': $('#icon-summary').html('<i class = "wi wi-night-cloudy "></i>');break;
            }
               

             
             
            



            });
        
    }
           $("#farenheit").toggleClass('clicked');
            $('#quote-card').addClass('animated fadeInUp');
     
});
