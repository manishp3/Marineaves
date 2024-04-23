import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ShipScheduling() {
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
    shipName: "",
    departurePort: "",
    arrivalPort: "",
    departureTime: "",
    arrivalTime: "",
    estimatedDuration:"",
    shipFrequency: "",
    availability: "",
    status: "",
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
      shipName: shipInfo.shipName,
      departurePort: shipInfo.departurePort,
      arrivalPort: shipInfo.arrivalPort,
      departureTime: shipInfo.departureTime,
      arrivalTime: shipInfo.arrivalTime,
      shipFrequency: shipInfo.shipFrequency,
      estimatedDuration:shipInfo.estimatedDuration,
      availability: shipInfo.availability,
      status: shipInfo.status,
    };
    try {
      const res = await axios.post(
        "http://localhost/MarineWaves/ShipScheduling.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Ship has been Scheduled Successfully!");
      navigate("/dashboard/ship-information");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/**------------- CARGO INFORMATION--------- */}
          <section className="px-md-5">
            <h2 className="py-3 text-center">Ship information </h2>
            <div className="row">
              <h5 className="py-3">Ship Schedual :</h5>
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
                <select
                className="form-select"
                aria-label="Default select example"
                id="arrivalPort"
                name="arrivalPort"
                onChange={handleInput}
            >
                      <option defaultValue="">Select Arrival Port</option>
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
                    name="departurePort"
                    onChange={handleInput}
                  >
                      <option defaultValue="">Select Departure Port</option>
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
            </div>
            <div className="row my-md-4">
              <div className="col-md-3">
                <label htmlFor="departureTime">Ship Frequency</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="shipFrequency"
                    name="shipFrequency"
                    onChange={handleInput}
                  >
                    <option defaultValue="Weekly">Select Ship Frequency</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Seasonal">Seasonal</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="departureTime">Departure Time</label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="departureTime"
                    name="departureTime"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-calendar root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="arrivalTime">Arrivale Time</label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="arrivalTime"
                    name="arrivalTime"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-calendar root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="estimatedDuration">Estimated Duration</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="estimatedDuration"
                    placeholder="Ex. 65 Days"
                    name="estimatedDuration"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row my-md-4">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="availability">Availability:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="available"
                        value="available"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlFor="available">
                        Available
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="notAvailable"
                        value="notAvailable"
                        onChange={handleInput}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="notAvailable"
                      >
                        Not Available
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="scheduled"
                        value="scheduled"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlFor="scheduled">
                        Scheduled
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="delayed"
                        value="delayed"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlFor="delayed">
                        Delayed
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="canceled"
                        value="canceled"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlFor="canceled">
                        Canceled
                      </label>
                    </div>
                  </div>
                
                </div>
                <div className="col-md-1">
                <button
                    type="submit"
                    className="btn btn-success my-5 text-white px-3">
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

export default ShipScheduling;
