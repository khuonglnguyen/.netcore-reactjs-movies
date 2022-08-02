import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import coordinateDTO from "./coordinates.model";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>(
    props.coordinates
  );

  return (
    <MapContainer
      center={[10.042880099928833, 105.76653169072291]}
      style={{ height: props.height }}
      zoom={14}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
          props.handleMapClick(coordinates);
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
  coordinates: coordinateDTO[];
  handleMapClick(coordinates: coordinateDTO): void;
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
