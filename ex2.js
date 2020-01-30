var myMap = L.map("map").setView([41.386953, 2.170089], 13);
var myMarker; 

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoiYWx6Y2ExIiwiYSI6ImNrNXhxdGx2cDFjcDUzZW8wNjhpOGptejEifQ.FfoqLVhSigNQB_K5Blcq0A"
  }
).addTo(myMap);



myMap.on("click", onMapClick);

// Functions

function onMapClick(event) {

    var lat = event.latlng.lat;
    var long = event.latlng.lng;
      var popupContent = `
      <p>My coordinates are:</p>
      <b><p>Lat: ${lat} Long ${long} </p> </b>
      `
  
  markerRemove(myMarker)
  markerAdd(lat,long)
  markerBind(myMarker,popupContent)
  flyToMarker(event)
   
  }

function markerRemove(customMarker){
    if (customMarker) {
        customMarker.remove();
      }
}

function markerAdd(latitude,longitude){
    myMarker = L.marker([latitude, longitude]).addTo(myMap);
}

function markerBind(customMarker,content){
    customMarker.bindPopup(content).openPopup();
}

function flyToMarker(e){
    myMap.flyTo(e.latlng, 18)
}