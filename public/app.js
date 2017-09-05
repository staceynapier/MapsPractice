var initialize = function() {
  var center = {lat: 51.507351, lng: -0.127758};
  var bridge = {lat: 51.507879, lng: -0.087732};
  var mapDiv = document.getElementById('main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);
  var bounceButton = document.querySelector('#button-bounce-markers');
  var takeMeToButton = document.querySelector('#take-me-to');

  mainMap.addMarker(center);
  mainMap.addMarker(bridge);
  mainMap.addClickEvent();
  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap));
  takeMeToButton.addEventListener('click', mainMap.takeMeToButton.bind(mainMap));


}

window.addEventListener('load', initialize);
