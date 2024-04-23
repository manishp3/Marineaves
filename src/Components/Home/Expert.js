import React from "react";
import '../../index.css';
import { Link } from "react-router-dom";
import Contact from "../Utility/Contact";

function Expert() {
  return (
    <>
      {/*------------------EXPERT SECTION--------------*/}
      <div className="container-fluid expert-containter" style={{backgroundColor: "rgb(11, 3, 34)"}}>
        <div className="row p-5">
          <div className="col-md-12 col-12 text-center py-4 px-1">
            <p style={{ color: "grey",fontSize:"24px" }} className="py-2mt-5">
              Simplify your Shipment Journey
            </p>
            <h1 className="text-white">
              Gain full control of your supply chain
              <br />
              by leveraging our freight solutions
            </h1>
            <Link  className="btn btn-primary my-5 py-2 px-4" to="/contact" element={<Contact/>}>Speak with our experts</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expert;
