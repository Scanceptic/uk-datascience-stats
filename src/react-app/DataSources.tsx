import ukFlag from "./assets/british-flag.svg";
import "./App.css";

function DataSources() {
  return (
    <>
      <div>
        <img src={ukFlag} className="logo" alt="Union Jack Flag" />
      </div>
      <h1>UK Data Science Stats</h1>
      <div className="flex-container">
        <p>OpenStreetMap</p>
        <p>OS NGD Open Data</p>
        <p>ONS Data</p>
        <p>Local Authority Data</p>
        <p>Rowmaps.com</p>
      </div>
    </>
  );
}

export default DataSources;
