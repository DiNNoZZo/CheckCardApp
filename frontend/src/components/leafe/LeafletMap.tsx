import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { IPIDPlace } from '@/types/index.types';

interface ILeafletMap {
  places: Array<IPIDPlace>;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LeafletMap: React.FC<ILeafletMap> = ({ places }) => {
  return (
    <MapContainer
      center={[50.074596418213645, 14.435878325276974]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place) => (
        <Marker key={place.id} position={[place.lat, place.lon]}>
          <Popup>
            <p>{`Name: ${place.name}`}</p>
            <p>{`Address: ${place.address}`}</p>
            <p>{`Opening hours: ${place.openingHours?.[0]?.hours}`}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
