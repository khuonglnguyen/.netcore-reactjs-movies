import { useFormikContext } from "formik";
import coordinateDTO from "../utils/coordinates.model";
import Map from "../utils/Map";

export default function MapField(props: mapFieldProps) {
  const { values } = useFormikContext<any>();

  function hanldeMapClick(coordinates: coordinateDTO) {
    values[props.latField] = coordinates.lat;
    values[props.lngField] = coordinates.lng;
  }
  return (
    <Map coordinates={props.coordinates} handleMapClick={hanldeMapClick} readOnly={false}></Map>
  );
}

interface mapFieldProps {
  coordinates: coordinateDTO[];
  latField: string;
  lngField: string;
}

MapField.defaultProps = {
  coordinates: [],
};
