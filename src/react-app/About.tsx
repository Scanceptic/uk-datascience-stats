import ukFlag from "./assets/british-flag.svg";
import "./About.css";

function About() {
  return (
    <>
      <div>
        <img src={ukFlag} className="logo" alt="Union Jack Flag" />
      </div>
      <h1>UK Data Science Stats</h1>
      <div className="text-container">
        <p>This website is a personal portfolio of the kinds of data projects I often work on.</p>
        <p>It is not an official government site, but it uses publicly available data from various sources.</p>
        <p>Feel free to explore the data sources and the map visualizations.</p>
        <p>For more information, you can check the <a href="/datasources">Data Sources</a> page.</p>
        <p>If you have any questions or feedback, please reach out via email at <b>scanceptic@gmail.com</b></p>
        <p>Thank you for visiting!</p>
      </div>
      <div className="grid-container">
        <div>Top Local Crime Categories</div>
        <div>Public Rights of Way</div>
        <div>Successful Crime Investigation Rate by Police Force</div>
        <div>UK Waterways</div>
        <div>UK Geology</div>
        <div>UK Urban Classifications</div>
      </div>
    </>
  );
}

export default About;
