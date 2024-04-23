import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormTransportationDetails() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const isGeneral = localStorage.getItem("isGeneral") === "true";
    
    // Check if either isAdmin or isGeneral is true
    if (isAdmin || isGeneral) {
      // User is logged in, do nothing
    } else {
      // User is not logged in, redirect to login page
      navigate("/login");
    }
  }, []);

  // State to store the transportation details.
  const [transportValue, setTransportValue] = React.useState({
    /**----------FOR PICK UP----------- */
    pickUpName: "",
    pickUpEmail: "",
    pickUpPhoneNumber: "",
    pickUpAddressLine1: "",
    pickUpAddressLine2: "",
    pickUpCity: "",
    pickUpState: "",
    pickUpCountry: "",
    pickUpPostalCode: "",

    /**----------FOR SHIPPPNG----------- */
    deliveryName: "",
    deliveryEmail: "",
    deliveryPhoneNumber: "",
    deliveryAddressLine1: "",
    deliveryAddressLine2: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryCountry: "",
    deliveryPostalCode: "",
  });

  const handleInput = (e) => {
    setTransportValue({ ...transportValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      /**----SETTING VALUE FOR PICK UP------ */
      pickUpName: transportValue.pickUpName,
      pickUpEmail: transportValue.pickUpEmail,
      pickUpPhoneNumber: transportValue.pickUpPhoneNumber,
      pickUpAddressLine1: transportValue.pickUpAddressLine1,
      pickUpAddressLine2: transportValue.pickUpAddressLine2,
      pickUpCity: transportValue.pickUpCity,
      pickUpState: transportValue.pickUpState,
      pickUpCountry: transportValue.pickUpCountry,
      pickUpPostalCode: transportValue.pickUpPostalCode,

      /**-----SETTING VALUE FOR SHIPPPNG----- */
      deliveryName: transportValue.deliveryName,
      deliveryEmail: transportValue.deliveryEmail,
      deliveryPhoneNumber: transportValue.deliveryPhoneNumber,
      deliveryAddressLine1: transportValue.deliveryAddressLine1,
      deliveryAddressLine2: transportValue.deliveryAddressLine2,
      deliveryCity: transportValue.deliveryCity,
      deliveryState: transportValue.deliveryState,
      deliveryCountry: transportValue.deliveryCountry,
      deliveryPostalCode: transportValue.deliveryPostalCode,
    };
    try {
      const res = await axios.post(
        "http://localhost/MarineWaves/TransportInformation.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Form has been Submitted Successfully!");
      navigate('/booking/special-requirements')
    } 
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <section>
          <h2 className="py-3 text-center mb-5">Transportation information </h2>
          <div className="row">
            <h4 className="text-center mb-5">For Pick up</h4>
            <div className="form-group col-md-4">
              <label htmlFor="InputFullNamePickup">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputFullNamePickup"
                  name="pickUpName"
                  onChange={handleInput}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="InputEmailPickup">Email address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-envelope root-icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmailPickup"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="pickUpEmail"
                  onChange={handleInput}
                  required
                />
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group col-md-3 mb-5 ">
              <label htmlFor="InputContactPickup">Contact No.</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-phone root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputContactPickup"
                  placeholder="Enter Contact No."
                  name="pickUpPhoneNumber"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row"></div>

          {/**-------------SENDER ADDRESS INFORMATION--------------- */}
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="InputLine1Pickup">Line 1</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputLine1Pickup"
                  placeholder="Address Line 1"
                  name="pickUpAddressLine1"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4 mb-4 ">
              <label htmlFor="InputLine2Pickup">Line 2</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputLine2Pickup"
                  placeholder="Address Line 2"
                  name="pickUpAddressLine2"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-4 ">
              <label htmlFor="InputCityPickup">City</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bxs-edit-location root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputCityPickup"
                  placeholder="Enter Sender's City"
                  name="pickUpCity"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-3">
              <label htmlFor="InputStatePickup">State</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputStatePickup"
                  placeholder="Enter State"
                  name="pickUpState"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="InputCountryPickup">Country</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputCountryPickup"
                  placeholder="Enter Country"
                  name="pickUpCountry"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="InputPostalCodePickup">Postal Code</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-map-pin root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputPostalCodePickup"
                  placeholder="Enter Postal Code"
                  name="pickUpPostalCode"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <hr
          style={{
            color: "red",
            width: "100%",
            backgroundColor: "black",
            height: 2,
            margin: "30px 0",
          }}
        />
        <section className="my-5">
          <div className="row">
            <h4 className="text-center mb-5">For Shipping</h4>
            <div className="form-group col-md-4">
              <label htmlFor="InputFullNameShipping">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputFullNameShipping"
                  placeholder="Enter Your Name"
                  name="deliveryName"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="InputEmailShipping">Email address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-envelope root-icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmailShipping"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="deliveryEmail"
                  onChange={handleInput}
                  required
                />
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group col-md-3 mb-5 ">
              <label htmlFor="InputContactShipping">Contact No.</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-phone root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputContactShipping"
                  placeholder="Enter Contact No."
                  name="deliveryPhoneNumber"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>

          {/**-------------SENDER ADDRESS INFORMATION--------------- */}
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="InputLine1Shipping">Line 1</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputLine1Shipping"
                  placeholder="Address Line 1"
                  name="deliveryAddressLine1"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4 mb-4 ">
              <label htmlFor="InputLine2Shipping">Line 2</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputLine2Shipping"
                  placeholder="Address Line 2"
                  name="deliveryAddressLine2"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-4 ">
              <label htmlFor="InputCityShipping">City</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bxs-edit-location root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputCityShipping"
                  placeholder="Enter Sender's City"
                  name="deliveryCity"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-3">
              <label htmlFor="InputStateShipping">State</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputStateShipping"
                  placeholder="Enter State"
                  name="deliveryState"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="InputCountryShipping">Country</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputCountryShipping"
                  placeholder="Enter Country"
                  name="deliveryCountry"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="InputPostalCodeShipping">Postal Code</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-map-pin root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputPostalCodeShipping"
                  placeholder="Enter Postal Code"
                  name="deliveryPostalCode"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-primary my-5 text-white px-5 custom-btn">
          Save & Next
        </button>
      </form>
    </div>
  );
}

export default FormTransportationDetails;
