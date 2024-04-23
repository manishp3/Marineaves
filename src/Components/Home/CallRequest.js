import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function CallRequest() {
  //------USESTATE TO INTIALIZE DATA----
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });
  //-------FUNCTION TO HANDLE DATA----------
  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  //-------FUNCTION TO SUBMIT DATA----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: formValue.name,
      companyName: formValue.companyName,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      message: formValue.message,
    };
    const res = await axios.post(
      "http://localhost/MarineWaves/CallRequest.php",
      formData
    );
    // console.log("Form submitted:", formData);
    // alert("Thank you for contacting Marinewaves!");
  };

  return (
    <>
      <section
        className="container position-relative"
        id="request-demo"
        style={{ marginTop: "80px" }}
      >
        <div
          className="position-relative zindex-5 py-5 py-md-4 py-lg-5 rounded"
          style={{ backgroundColor: "#f3f6ff" }}
        >
          <div className="row justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
              <h2 className="mb-4">Request for demo</h2>
              <p className="text-muted mb-0 px-3">
                Like what you have seen? Let’s get started. Just fill in a few
                details, and we will get in touch as soon as possible.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 px-5 p-md-0">
              <form className="row needs-validation" onSubmit={handleSubmit}>
                {/** Name Field */}
                <div className="col-sm-6 mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text root-icon">
                        <i className="bx bx-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                      placeholder="Your Name"
                      onChange={handleInput}
                    />
                    <div className="invalid-feedback">
                      Please, enter your name!
                    </div>
                  </div>
                </div>

                {/** Email Field */}
                <div className="col-sm-6 mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text root-icon">
                        <i className="bx bx-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      placeholder="Email address"
                      onChange={handleInput}
                    />
                    <div className="invalid-feedback">
                      Please, provide a valid email address!
                    </div>
                  </div>
                </div>

                {/** Phone Field */}
                <div className="col-sm-6 mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text root-icon">
                        <i className="bx bx-phone"></i>
                      </span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      className="form-control"
                      required
                      placeholder="Phone Number"
                      onChange={handleInput}
                    />
                    <div className="invalid-feedback">
                      Please, provide a valid phone number!
                    </div>
                  </div>
                </div>

                {/** Organization Field */}
                <div className="col-sm-6 mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text root-icon">
                        <i className="bx bx-building"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="organization"
                      name="companyName"
                      className="form-control"
                      placeholder="Your company"
                      onChange={handleInput}
                    />
                    <div className="invalid-feedback">
                      Please, enter your company name!
                    </div>
                  </div>
                </div>

                {/** Message Field */}
                <div className="col-12 mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text root-icon">
                        <i className="bx bx-envelope"></i>
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      required
                      placeholder="Message"
                      onChange={handleInput}
                    ></textarea>
                    <div className="invalid-feedback">
                      Please, enter your message!
                    </div>
                  </div>
                </div>

                {/** Submit Button */}
                <div className="col-12 text-center pt-2 pt-md-3 pt-lg-4">
                  <button
                    type="submit"
                    className="btn btn-primary shadow-primary btn-lg"
                    style={{
                      width: "100%",
                      maxWidth: "250px",
                      margin: "0px auto",
                    }}
                  >
                    Send a request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default CallRequest;