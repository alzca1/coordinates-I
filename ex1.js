var myMap = L.map("map").setView([41.386953, 2.170089], 18);
var marker;

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

function onMapClick(e) {
  var messager = document.getElementById("h3");
  messager.innerHTML = `You clicked on latitude ${e.latlng.lat} longitude ${e.latlng.lng}`;
  console.log(e);
}

myMap.on("click", onMapClick);
myMap.on("dblclick", onDoubleMapClick);

function onDoubleMapClick(e) {
  var latitude = e.latlng.lat;
  var longitude = e.latlng.lng;
  var alt = `lat${latitude}long${longitude}`;

  var newMarker = L.marker([e.latlng.lat, e.latlng.lng], {
    alt: alt
  }).addTo(myMap);

  fillPopupText(newMarker);

  createHoverableMarker(newMarker);
}

function fillPopupText(marker) {
  marker.addEventListener("dblclick", function() {
    var name = prompt("add place name");
    var type = prompt("add cuisine type");
    var address = prompt("add address");
    var popupContent = `
    <b> <p> ${name} </p> </b>
    <i> <p> ${type} </p> </i>
    <p> ${address} </p>
    `;
    marker.bindPopup(popupContent);
  });
}

function createHoverableMarker(marker) {
  marker.addEventListener("mouseover", function() {
    marker.openPopup();
  });
}

