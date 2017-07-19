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
            $('#temperature').html(Math.round(data.currently.temperature));
            
             $('#celcious').click(function(){
                 $('#temperature').html(Math.round((data.currently.temperature * 5) / 9));
             });

              $('#farenheit').click(function(){
                 $('#temperature').html(Math.round(data.currently.temperature));
             });

            });
        
    }
});
