import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect } from "react";

function UserLocation({ coordinates }) {
  useEffect(() => console.log("coordinates", coordinates), []);

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "400px",
        width: "400px",
        marginLeft: "20px",
        marginTop: "50px",
        borderRadius: "0.5em"
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}></Marker>
    </MapContainer>
  );
}

export default UserLocation;
