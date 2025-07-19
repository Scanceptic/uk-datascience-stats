// src/App.tsx

import ukFlag from "./assets/british-flag.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {

  return (
    <>
      <div>
        <img src={ukFlag} className="logo" alt="Union Jack Flag" />
      </div>
      <h1>UK Data Science Stats</h1>
      <div className="flex-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <footer>
        <div>Scanceptic</div>
        <div>Contains public sector information licensed under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>.</div>
        <div><a href="/">Data Sources</a></div>
      </footer>
    </>
  );
}

export default App;
