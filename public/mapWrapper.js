var MapWrapper = function(container, coords, zoom) {
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = [];
  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';
  var infowindow = new google.maps.InfoWindow({
  content: contentString
  });
  var marker = new google.maps.Marker({
    position: marker,
    map: this.googleMap,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

MapWrapper.prototype.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
},

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
  // addMarker(event);
  var latitude = event.latLng.lat();
  var long = event.latLng.lng();
  coords = {lat: latitude, lng: long}
  this.addMarker(coords);
  }.bind(this));
}

MapWrapper.prototype.bounceMarker = function(){
  this.markers.forEach(function(marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.takeMeToButton = function() {
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 13.096010, lng: -59.617310},
    zoom: 11
  })
  this.addMarker(this.googleMap.center);
}
