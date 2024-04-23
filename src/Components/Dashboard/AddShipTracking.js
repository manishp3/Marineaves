import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ShipTrackingPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    // console.log(isAdmin);
    // Check if user is admin; if not, redirect to login page
    if (isAdmin !== "true") {
      navigate("/login");
    }
  }, []);

  /**----------------useStates to declare fields------------ */
  const [shipInfo, setShipInfo] = React.useState({
    shipId: "",
    shippingId: "",
    shipName: "",
    currentLocation: "",
    destination: "",
    estimatedTimeOfArriaval: "",
    status: "",
    lastUpdatedTime: "",
  });
  /**----------------handleInput to set Value------------ */
  const handleInput = (e) => {
    setShipInfo({ ...shipInfo, [e.target.name]: e.target.value });
  };
  console.log(shipInfo);
  //-------------------FUNCTION TO SUBMIT DATA IN DATABASE-----------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      //----------FOR CARGO INFORMATION--------//
      shipId: shipInfo.shipId,
      shippingId: shipInfo.shippingId,
      shipName: shipInfo.shipName,
      currentLocation: shipInfo.currentLocation,
      destination: shipInfo.destination,
      estimatedTimeOfArriaval: shipInfo.estimatedTimeOfArriaval,
      lastUpdatedTime: shipInfo.lastUpdatedTime,
      status: shipInfo.status,
    };
    try {
      const res = await axios.post(
        "http://localhost/MarineWaves/TrackingInsert.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Ship has been Updated Successfully!");
      navigate("/dashboard/tracking-information");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/**------------- CARGO INFORMATION--------- */}
          <section className="p-md-5 m-4">
            <h2 className="py-3 text-center">Track information </h2>
            <div className="row">
              <h5 className="py-3">Ship Schedual :</h5>
              <div className="form-group col-md-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="shipName"
                    placeholder="Ship ID"
                    name="shipId"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="shipName"
                    placeholder="Ship Name"
                    name="shipName"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="shipName"
                    placeholder="Shipping ID"
                    name="shippingId"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-md-4">
              <div className="form-group col-md-4">
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="arrivalPort"
                    name="currentLocation"
                    onChange={handleInput}
                  >
                      <option defaultValue="">Select Current Location</option>
                      <option value="Mumbai, India">Mumbai, India</option>
                      <option value="Nhava Sheva, India">Nhava Sheva, India</option>
                      <option value="Kolkata, India">Kolkata, India</option>
                      <option value="Chennai, India">Chennai, India</option>
                      <option value="Jawaharlal Nehru Port, India">Jawaharlal Nehru Port, India</option>
                      <option value="Dubai, UAE">Dubai, UAE</option>
                      <option value="Singapore, Singapore">Singapore, Singapore</option>
                      <option value="Rotterdam, Netherlands">Rotterdam, Netherlands</option>
                      <option value="Antwerp, Belgium">Antwerp, Belgium</option>
                      <option value="Hamburg, Germany">Hamburg, Germany</option>
                      <option value="Los Angeles, USA">Los Angeles, USA</option>
                      <option value="Long Beach, USA">Long Beach, USA</option>
                      <option value="Jeddah, Saudi Arabia">Jeddah, Saudi Arabia</option>
                      <option value="Dammam, Saudi Arabia">Dammam, Saudi Arabia</option>
                      <option value="Fujairah, UAE">Fujairah, UAE</option>
                      <option value="Abu Dhabi, UAE">Abu Dhabi, UAE</option>
                      <option value="Hamad, Qatar">Hamad, Qatar</option>
                      <option value="Salalah, Oman">Salalah, Oman</option>
                      <option value="Kuwait City, Kuwait">Kuwait City, Kuwait</option>
                      <option value="Bahrain, Bahrain">Bahrain, Bahrain</option>
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-unite root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-4">
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="departurePort"
                    name="destination"
                    onChange={handleInput}
                  >
                      <option defaultValue="">Select Destination</option>
                      <option value="Mumbai, India">Mumbai, India</option>
                      <option value="Nhava Sheva, India">Nhava Sheva, India</option>
                      <option value="Kolkata, India">Kolkata, India</option>
                      <option value="Chennai, India">Chennai, India</option>
                      <option value="Jawaharlal Nehru Port, India">Jawaharlal Nehru Port, India</option>
                      <option value="Dubai, UAE">Dubai, UAE</option>
                      <option value="Singapore, Singapore">Singapore, Singapore</option>
                      <option value="Rotterdam, Netherlands">Rotterdam, Netherlands</option>
                      <option value="Antwerp, Belgium">Antwerp, Belgium</option>
                      <option value="Hamburg, Germany">Hamburg, Germany</option>
                      <option value="Los Angeles, USA">Los Angeles, USA</option>
                      <option value="Long Beach, USA">Long Beach, USA</option>
                      <option value="Jeddah, Saudi Arabia">Jeddah, Saudi Arabia</option>
                      <option value="Dammam, Saudi Arabia">Dammam, Saudi Arabia</option>
                      <option value="Fujairah, UAE">Fujairah, UAE</option>
                      <option value="Abu Dhabi, UAE">Abu Dhabi, UAE</option>
                      <option value="Hamad, Qatar">Hamad, Qatar</option>
                      <option value="Salalah, Oman">Salalah, Oman</option>
                      <option value="Kuwait City, Kuwait">Kuwait City, Kuwait</option>
                      <option value="Bahrain, Bahrain">Bahrain, Bahrain</option>
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-unite root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="shipSatus"
                    name="status"
                    onChange={handleInput}
                  >
                    <option defaultValue="Weekly">Select Ship Status</option>
                    <option value="On Hold">On Hold</option>
                    <option value="In Transition">In Transition</option>
                    <option value="Delayed">Delayed</option>
                    <option value="Returned">Returned</option>
                    <option value="Anchored">Anchored</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="estimatedTimeOfArriaval">
                  Etimated Arrival Time
                </label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="estimatedTimeOfArriaval"
                    name="estimatedTimeOfArriaval"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-calendar root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row my-md-4">
                <div className="col-md-1">
                  <button
                    type="submit"
                    className="btn btn-success my-5 text-white px-3"
                  >
                    Add Ship
                  </button>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default ShipTrackingPanel;
