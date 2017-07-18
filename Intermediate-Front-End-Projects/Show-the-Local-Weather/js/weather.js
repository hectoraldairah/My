$(document).ready(function(){
    var userPosition = 
    {
        lat: '',
        lon: ''
    };

    var key = '409d2ec2e2ba317c8037fc0eba1d97bd';

        if(navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function(position){
                    userPosition.lat = position.coords.latitude;
                    userPosition.lon = position.coords.longitude;
                    console.log(userPosition.lat); //This shows me the latitude
                });
            }
            else
            {
                alert("Geolocation not supported by your browser");
            }
    
    console.log(userPosition.lat);      // This not works

});
