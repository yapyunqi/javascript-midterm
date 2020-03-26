var downloadData = $.ajax("https://raw.githubusercontent.com/yapyunqi/javascript-midterm/master/crimedata.json?token=ALGWDFWM3RM4JJQ5WOJGZ626QY64K");
var parseData = function(data){return parsed=JSON.parse(data)};

var createMarkers = function(crime){
  var lat = crime.Latitude;
  var long = crime.Longitude;
  var marker = L.marker([lat,long]);
  return marker;
};

var makeMarkers = function(parsedData) {
  markers = _.map(parsedData, createMarkers);
  return markers;
};

var plotMarkers = function(markers) {
  _.map(markers, function(m){m.addTo(map)});
};

/* =====================
 Leaflet setup
===================== */

var map = L.map('map', {
  center: [52.205765, 0.122388],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */

downloadData.done(function(data) {
  var parsed = parseData(data);
  console.log(parsed);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
});
