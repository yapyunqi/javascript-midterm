var dataset = "https://raw.githubusercontent.com/yapyunqi/javascript-midterm/master/data.geojson?token=ALGWDFWD7Z574MOBYWAQHQK6QYX34";
console.log(dataset);

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);
  });
});
