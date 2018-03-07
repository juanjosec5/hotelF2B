var marker;

function myMapMde() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 6.209228, lng: -75.565922}
    });
    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {lat: 6.209228, lng: -75.565922}
    });
    marker.addListener('click', toggleBounce);
    
    var infoWindow = new google.maps.InfoWindow({
        content:'<a href="https://goo.gl/K15AyZ" target="_blank" style="color:blue;"><h5>Cómo llegar</h5></a>'
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
