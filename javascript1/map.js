// JavaScript Document
function initialize() {
  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(26.12,30.27)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  google.maps.event.addListener(map, 'click', function(e) {
    placeMarker(e.latLng, map);
  });
}

function placeMarker(position, map) {
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
  map.panTo(position);
}

google.maps.event.addDomListener(window, 'load', initialize);