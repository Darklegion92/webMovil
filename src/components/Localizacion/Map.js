import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Moment from "moment";
import "leaflet/dist/leaflet.css";

const myIcon = L.icon({
  iconUrl: "loc.png",
  iconSize: [30, 30],
  iconAnchor: [10, 10],
  popupAnchor: [-1, -10],
  shadowUrl: "my-icon-shadow.png",
  shadowSize: [0, 0],
  shadowAnchor: [10, 10],
});
function Map({ localizacionUsuario }) {
  Moment.locale("en");

  return (
    <MapContainer
      center={[7.869940353376568, -72.50701904296875]}
      zoom={12}
      
      style={{ width: "100%", height: "70vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {localizacionUsuario &&
        localizacionUsuario.map((item) => {
          return (
            <Marker position={[item.latitude, item.longitude]} icon={myIcon}>
              <Popup>
                {item.nombre}
                <br />
                {item.direccion}
                <br />
                {Moment(item.fecha).format("DD/MM/YYYY HH:mm")}
                <br />

                {item.tipo}
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}

export default Map;
