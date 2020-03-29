// leaflet setup
var map = L.map('map', {
  center: [52.446255, -0.047214],
  zoom: 9
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// plotting on leaflet
var markerClusters = L.markerClusterGroup();

for (var i = 0; i < markers.length; i++ ) {
  var popup = '<b>Crime Type:</b> ' + markers[i].Category +
              '<br/><b>Month:</b> ' + markers[i].Month +
              '<br/><b>Outcome Status:</b> ' + markers[i]['Outcome status'] +
              '<br/><b>Neighborhood:</b> ' + markers[i].Neighborhood;

  var m = L.marker([markers[i].Latitude, markers[i].Longitude])
                  .bindPopup(popup);

  markerClusters.addLayer(m);
}

map.addLayer(markerClusters);

//creating slides
var slides = [
      { title: "Crime Map (All)",
        description: "This is a geographical visualization of all crimes committed in the English county of Cambridgeshire, as recorded by the local constabulary between December 2019 and February 2020.",
        instructions: "Click on numbered clusters to zoom in - blue polygons that appear represent bounds of markers within the cluster. At the highest zoom level, clusters are spiderfied such that each arm represents one crime. Clicking on each arm will reveal information about Crime Type, Month, Outcome Status, and Neighborhood.",
        latitude: 52.446255,
        longitude: -0.047214,
        zoom: 9},
      { title: "Crime Map (Cambridge)",
        description: "the second description",
        instructions: "instructions here",
        latitude: 52.206659,
        longitude: 0.121788,
        zoom: 13},
      { title: "Crime Map (Cambridge City Center)",
        description: "the third description",
        instructions: "instructions here",
        latitude: 52.205272,
        longitude: 0.121788,
        zoom: 16},
      { title: "Crime Map (Peterborough)",
        description: "the fourth description",
        instructions: "instructions here",
        latitude: 52.579009,
        longitude: -0.235229,
        zoom: 12.5},
      { title: "Crime Map (Peterborough City Center)",
        description: "the fifth description",
        instructions: "instructions here",
        latitude: 52.574436,
        longitude: -0.241257,
        zoom: 16},
      ];

var currentSlide = 0;

var loadSlide = function(slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
  $('#instructions').text(slide.instructions);
  map.flyTo([slide.latitude, slide.longitude], slide.zoom);
  if (currentSlide == 0) {
    $('#nextButton').show();
    $('#prevButton').hide();
  } else if (currentSlide == slides.length -1) {
    $('#prevButton').show();
    $('#nextButton').hide();
  } else {
    $('#nextButton').show();
    $('#prevButton').show();
  }
};

//defining the 'next' button
var next = function() {
  if (currentSlide == slides.length - 1) { }
  else {
    currentSlide = currentSlide + 1;
    loadSlide(slides[currentSlide]);
    console.log("current slide no.:" + currentSlide);
  }
};

$('#nextButton').click(function(e) {
  next();
});

//defining the 'previous' button
var prev = function() {
  if (currentSlide == 0) { }
  else {
    currentSlide = currentSlide - 1;
    loadSlide(slides[currentSlide]);
    console.log("current slide no.:" + currentSlide);
  }
};

$('#prevButton').click(function(e) {
  prev();
});
