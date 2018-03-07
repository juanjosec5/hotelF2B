var marker;

function myMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 10.422129, lng: -75.544679}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 10.422129, lng: -75.544679}
    });
    marker.addListener('click', toggleBounce);
    
    var infoWindow = new google.maps.InfoWindow({
        content:'<a href="https://goo.gl/UJm9TW" target="_blank" style="color:blue;"><h5>Cómo llegar</h5></a>'
    });
    
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
