import React from "react";
function About() {
  React.useEffect(() => {
    document.title = "MarineWaves | About";
  }, []);
  return (
    <>
      <div className="container-fluid about-container">
        <div className="row row-1"></div>
        <div className="row row-2 py-5 p-xl-5 m-lg-4">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={require("../../Img/AboutMap.webp")}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p>
              Additionally, Shipwaves offers SaaS solutions to global enterprise
              customers, automating their end-to-end shipping processes. It
              leverages the latest technologies, automation tools, and
              predictive analytics to provide customers with visibility and
              control throughout the entire shipment lifecycle
            </p>
          </div>
        </div>
        <div className="row row-3 py-5">
          <h1 className="text-center text-white">Our Values</h1>
          <p className="text-center text-white px-lg-5">
            Our values form the foundation of who we are, what we believe, and
            how we approach our work. They are a critical presence in every
            interaction and every action we take at Shipwaves. We share our
            values with our customers and partners because they say as much
            about Shipwaves as our products and services do..
          </p>
          <div className="col-md-4 border-right p-md-5 d-flex justify-content-center align-items-center">
            <h4 className="text-white">Innovation</h4>
          </div>
          <div className="col-md-4 py-md-5 d-flex justify-content-center align-items-center">
            <h4 className="text-white">Inclusivity</h4>
          </div>
          <div className="col-md-4 border-left d-flex justify-content-center align-items-center">
            <h4 className="text-white">Agility</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
