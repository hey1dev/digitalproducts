function initMap() {
  var map, marker,
    mapDiv = document.getElementById('map'),
    center = {
      lat: -7.931016,
      lng: 112.633220
  }
  var markers = [{
    position : { lat: -7.925451, lng: 112.646809},
    icon : 'img/marker.png'
    }]

    map = new google.maps.Map(mapDiv, {
      center: center,
      zoom: 15
    });

  markers.forEach(function(marker){
    new google.maps.Marker({
      position: marker.position,
      map:map,
      icon: 'img/marker.png'
      })  
  })
}