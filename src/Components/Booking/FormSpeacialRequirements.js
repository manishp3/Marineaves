import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormSpeacialRequirements() {
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

  //-------BOOKING REFERENCE KEY GENERATOR-------
  function generateBookingReferenceKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    } 
    return result;
  }
  //-------BOOKING CUSTOMER KEY GENERATOR-------
  function generateCustomerReferenceKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    } 
    return result;
  }
  
  const [specialRequirements, setSpecialRequirements] = React.useState({
    bookingReferenceKey: '',
    customerReferenceKey: '',
    storageType: '',
    warehouse: '',
    clearCustoms: '',
    regulations: '',
  });

  useEffect(() => {
    const BookingReferenceKey = generateBookingReferenceKey(12);
    const CustomerReferenceKey = generateCustomerReferenceKey(12);
  
    // Update the state with the generated keys
    setSpecialRequirements({
      ...specialRequirements,
      bookingReferenceKey: BookingReferenceKey,
      customerReferenceKey: CustomerReferenceKey
    });
  }, []);
  

  console.log(specialRequirements);
  const handleInput = (e) => {
    setSpecialRequirements({...specialRequirements, [e.target.name]: e.target.value,})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      bookingReferenceKey: specialRequirements.bookingReferenceKey,
      customerReferenceKey: specialRequirements.customerReferenceKey,
      storageType: specialRequirements.storageType,
      warehouse: specialRequirements.warehouse,
      clearCustoms: specialRequirements.clearCustoms,
      regulations: specialRequirements.regulations,
    };
    try {
      const res = await axios.post(
        "http://localhost/MarineWaves/SpecialRequirements.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Form has been Submitted Successfully!");
      // Redirect to the desired URL
      window.location.href = "https://book.stripe.com/test_8wMbLe7tC7Th29acMP";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <div className="container mt-3">
      <h2 className="text-center pb-2">Additional Requirements</h2>
      <form onSubmit={handleSubmit}>
        {/**----------REFERENCE INFORMATION-------- */}
        <div className="row my-4">
          <h5 className="my-3">References for Confirmation</h5>
          <div className="col-md-4">
            <label htmlFor="BookingReference">Booking Reference no.</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bx bx-bookmark root-icon"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="BookingReference"
                placeholder="Assign a unique reference no."
                name="bookingReferenceKey"
                value={specialRequirements.bookingReferenceKey}
                onChange={handleInput}
                disabled
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="CustomerReference">Customer Reference</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bx bx-id-card root-icon"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="CustomerReference"
                placeholder="Reference no. provided by the customer"
                name="customerReferenceKey"
                value={specialRequirements.customerReferenceKey}
                onChange={handleInput}
                disabled
              />
            </div>
          </div>
        </div>

        {/**----------STRORAGE REQUIREMENTS-------- */}
        <div className="row my-3">
          <div className="col-md-4">
            <h5>Storage Requirements:</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="storageType"
                    id="normalStorage"
                    value="Normal"
                    onChange={handleInput}
                  />
                  <label className="form-check-label" htmlFor="normalStorage">
                    Normal Storage
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="storageType"
                    id="coldStorage"
                    value="Cold"
                    onChange={handleInput}
                  />
                  <label className="form-check-label" htmlFor="coldStorage">
                    Cold Storage
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**----------EXTRA FACILITIES-------- */}
        <div className="row my-3">
          <div className="col-md-12 mt-3">
            <h5>Additional Services:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="YES"
                id="warehouseNeeded"
                name="warehouse"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="warehouseNeeded">
                Need Warehouse for cargo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="YES"
                id="customsClearance"
                name="clearCustoms"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="customsClearance">
                Clear customs that apply to cargo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="YES"
                id="cargoCompliance"
                name="regulations"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="cargoCompliance">
                Ensure that the cargo complies with international and local
                shipping regulations.
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-success" onSubmit={handleSubmit}>Place Order</button>
      </form>
    </div>
  );
}

export default FormSpeacialRequirements;
