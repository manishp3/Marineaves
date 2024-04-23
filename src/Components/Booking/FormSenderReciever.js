import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormSenderReciever() {
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
  /*-----useState to update form data-----*/
  const [formValue, setFormValue] = React.useState({
    /**----------FOR SENDER----------- */
    senderName: "",
    senderCompanyName: "",
    senderEmail: "",
    senderPhoneNumber: "",
    senderAddress1: "",
    senderAddress2: "",
    senderCity: "",
    senderState: "",
    senderCountry: "",
    senderPostalCode: "",

    /**----------FOR RECEIVER----------- */
    recieverName: "",
    recieverCompanyName: "",
    recieverEmail: "",
    recieverPhoneNumber: "",
    recieverAddress1: "",
    recieverAddress2: "",
    recieverCity: "",
    recieverState: "",
    recieverCountry: "",
    recieverPostalCode: "",
  });

  //------Function to handle onChange event of input fields-------//
  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  //-------Function to Submit for in database-------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      /**-------------FOR SENDER----------------- */
      senderName: formValue.senderName,
      senderCompanyName: formValue.senderCompanyName,
      senderEmail: formValue.senderEmail,
      senderPhoneNumber: formValue.senderPhoneNumber,
      // senderAddress1: formValue.senderAddress1,
      // senderAddress2: formValue.senderAddress2,
      // senderCity: formValue.senderCity,
      // senderState: formValue.senderState,
      // senderCountry: formValue.senderCountry,
      // senderPostalCode: formValue.senderPostalCode,

      /**-------------FOR RECEIVER----------------- */
      recieverName: formValue.recieverName,
      recieverCompanyName: formValue.recieverCompanyName,
      recieverEmail: formValue.recieverEmail,
      recieverPhoneNumber: formValue.recieverPhoneNumber,
      
      // recieverAddress1: formValue.recieverAddress1,
      // recieverAddress2: formValue.recieverAddress2,
      // recieverCity: formValue.recieverCity,
      // recieverState: formValue.recieverState,
      // recieverCountry: formValue.recieverCountry,
      // recieverPostalCode: formValue.recieverPostalCode,
    };

      const res = await axios.post(
        "http://localhost/MarineWaves/Sender.php",
        formData
      );
    console.log("Form submitted:", formData);
    alert('Your Form has been Submitted Successfully!');
    navigate('/booking/cargo-details');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <section>
          <h2 className="py-3 text-center">Sender information </h2>
          <div className="row">
            <h5>Personal information :</h5>
            <div className="form-group col-md-5">
              <label htmlFor="InputFullName">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="senderName"
                  className="form-control"
                  id="InputFullName"
                  value={formValue.senderName}
                  onChange={handleInput}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="InputCompanyName">Company Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-building root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="InputCompanyName"
                  name="senderCompanyName"
                  className="form-control"
                  value={formValue.senderCompanyName}
                  onChange={handleInput}
                  placeholder="Enter Company Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-5">
              <label htmlFor="InputEmail1">Email address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-envelope root-icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="senderEmail"
                  value={formValue.senderEmail}
                  onChange={handleInput}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group col-md-5 mb-5 ">
              <label htmlFor="InputContact">Contact No.</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-phone root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputContact"
                  name="senderPhoneNumber"
                  value={formValue.senderPhoneNumber}
                  onChange={handleInput}
                  placeholder="Enter Contact No."
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

        {/**--------------------2.	Recipient Information:-------------------------- */}
        <section>
          <h2 className="py-3 mt-5 text-center">Recipient information </h2>
          <div className="row">
            <h5>Personal information :</h5>
            <div className="form-group col-md-5">
              <label htmlFor="InputRecipientName">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputRecipientName"
                  name="recieverName"
                  placeholder="Enter Recipient Name"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="InputRecipientCompany">Company Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-building root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputRecipientCompany"
                  name="recieverCompanyName"
                  placeholder="Enter Recipient Company"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-5">
              <label htmlFor="InputRecipientEmail">Email address</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-envelope root-icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="InputRecipientEmail"
                  name="recieverEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Recipient email"
                  onChange={handleInput}
                  required
                />
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="InputRecipientContact">Contact No.</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-phone root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputRecipientContact"
                  name="recieverPhoneNumber"
                  placeholder="Enter Contact No."
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

export default FormSenderReciever;
