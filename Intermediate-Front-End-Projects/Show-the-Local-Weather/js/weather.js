$(document).ready(function(){
    var userPosition = 
    {
        lat: '',
        lon: ''
    };

    getLocation();

    function getLocation()
    {
        if(navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function(position){
                    userPosition.lat = position.coords.latitude;
                    userPosition.lon = position.coords.longitude;
                    console.log(userPosition.lat);
                });
            }
            else
            {
                alert("Geolocation not supported by your browser");
            }
    }

    console.log(userPosition.lat);
  
});
