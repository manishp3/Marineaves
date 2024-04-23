import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPersonalInfo() {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  /*-----useState to update form data-----*/
  const [formValue, setFormValue] = React.useState({
    /**----------FOR SENDER----------- */
    senderName: "",
    senderCompanyName: "",
    senderEmail: "",
    senderPhoneNumber: "",

    /**----------FOR RECEIVER----------- */
    recieverName: "",
    recieverCompanyName: "",
    recieverEmail: "",
    recieverPhoneNumber: "",
  });

  //------Function to handle onChange event of input fields-------//
  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  //-------Function to Submit for in database-------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      /**-------------FOR SENDER----------------- */
      senderName: formValue.senderName,
      senderCompanyName: formValue.senderCompanyName,
      senderEmail: formValue.senderEmail,
      senderPhoneNumber: formValue.senderPhoneNumber,

      /**-------------FOR RECEIVER----------------- */
      recieverName: formValue.recieverName,
      recieverCompanyName: formValue.recieverCompanyName,
      recieverEmail: formValue.recieverEmail,
      recieverPhoneNumber: formValue.recieverPhoneNumber,
    };

      const res = await axios.put(
        "http://localhost/MarineWaves/Sender.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert('Your Form has been Updated Successfully!');
      navigate('/dashboard/sender');
  };

  useEffect(()=>{
    const userRowData = async () =>{
        const getUserData = await fetch(`http://localhost/marinewaves/Sender.php/${id}`);
        const resUserData = await getUserData.json();
        setFormValue(resUserData);
        console.log(resUserData);
        // console.log(resUserData.senderCompanyName)
    }
    userRowData();
  },[]);

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
                  value={formValue.recieverName}
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
                  value={formValue.recieverCompanyName}
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
                  value={formValue.recieverEmail}
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
                  value={formValue.recieverPhoneNumber}
                />
              </div>
            </div>
          </div>
        </section>

        <button type="submit" className="btn btn-primary my-5 text-white px-5">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPersonalInfo;
