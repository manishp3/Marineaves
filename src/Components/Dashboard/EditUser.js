import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  /*-----useState to update form data-----*/
  const [formValue, setFormValue] = React.useState({
    /**----------FOR USER----------- */
    name:"",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
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
      /**-------------FOR USER----------------- */
      name: formValue.name,
      username: formValue.username,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      password: formValue.password,
    };

      const res = await axios.put(
        "http://localhost/MarineWaves/NewUser.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert('Your Form has been Updated Successfully!');
      navigate('/dashboard/new-user');
  };

  useEffect(()=>{
    const userRowData = async () =>{
        const getUserData = await fetch(`http://localhost/marinewaves/NewUser.php/${id}`);
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
          <h2 className="py-3 text-center">Edit User information </h2>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="InputFullName">Full Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="InputFullName"
                  value={formValue.name}
                  onChange={handleInput}
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="InputFullName">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="InputFullName"
                  value={formValue.username}
                  onChange={handleInput}
                  placeholder="Enter Your Username"
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="InputCompanyName">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-building root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="InputCompanyName"
                  name="password"
                  className="form-control"
                  value={formValue.password}
                  onChange={handleInput}
                  placeholder="Enter Your New Password"
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
                  name="email"
                  value={formValue.email}
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
                  name="phoneNumber"
                  value={formValue.phoneNumber}
                  onChange={handleInput}
                  placeholder="Enter Contact No."
                />
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-success my-5 text-white px-5">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
