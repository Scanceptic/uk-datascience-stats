import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (
    <>
        <footer>
            <div><Link to="/about">About</Link></div>
            <div><a href="https://www.github.com/Scanceptic" target="_blank">Scanceptic</a></div>
            <div>Contains public sector information licensed under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank">Open Government Licence v3.0</a>.</div>
            <div><Link to="/datasources">Data Sources</Link></div>
        </footer>
    </>
    );
}

export default Footer;