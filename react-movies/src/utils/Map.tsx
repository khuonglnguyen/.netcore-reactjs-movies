import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import coordinateDTO from "./doordinates.model";
import { useState } from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

  return (
    <MapContainer
      center={[10.042880099928833, 105.76653169072291]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
        }}
      ></MapClick>
      {coordinates.map((coordinate, index) => {
        return (
          <Marker
            position={[coordinate.lat, coordinate.lng]}
            key={index}
          ></Marker>
        );
      })}
    </MapContainer>
  );
}
interface mapProps {
  height: string;
}

Map.defaultProps = {
  height: "500px",
};

function MapClick(props: mapClickProps) {
  useMapEvent("click", (eventArgs) => {
    props.setCoordinates({
      lat: eventArgs.latlng.lat,
      lng: eventArgs.latlng.lng,
    });
  });
  return null;
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}
