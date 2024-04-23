import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTransportationDetailsy() {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  // State to store the transportation details.
  const [transportValue, setTransportValue] = React.useState({
    /**----------FOR PICK UP----------- */
    pickUpName: "",
    pickUpEmail: "",
    pickUpPhoneNumber: "",
    pickUpAddress: "",

    /**----------FOR SHIPPPNG----------- */
    deliveryName: "",
    deliveryEmail: "",
    deliveryPhoneNumber: "",
    deliveryAddress: "",
  });

  const handleInput = (e) => {
    setTransportValue({ ...transportValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id:id,
      /**----SETTING VALUE FOR PICK UP------ */
      pickUpName: transportValue.pickUpName,
      pickUpEmail: transportValue.pickUpEmail,
      pickUpPhoneNumber: transportValue.pickUpPhoneNumber,
      pickUpAddress: transportValue.pickUpAddress,

      /**-----SETTING VALUE FOR SHIPPPNG----- */
      deliveryName: transportValue.deliveryName,
      deliveryEmail: transportValue.deliveryEmail,
      deliveryPhoneNumber: transportValue.deliveryPhoneNumber,
      deliveryAddress: transportValue.deliveryAddress,
    };
    try {
      const res = await axios.put(
        "http://localhost/MarineWaves/TransportInformation.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Form has been Updated Successfully!");
      navigate('/dashboard/transport-information')
    } 
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(()=>{
    const userRowData = async () =>{
        const getUserData = await fetch(`http://localhost/marinewaves/TransportInformation.php/${id}`);
        const resUserData = await getUserData.json();
        setTransportValue(resUserData);
        // console.log(resUserData.pickUpName)
        
    }
    userRowData();
  },[]);
  // console.log(transportValue.pickUpName)
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
                  value={transportValue.pickUpName}
                  placeholder="Enter Your Name"
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
                  value={transportValue.pickUpEmail}
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
                  value={transportValue.pickUpPhoneNumber}
                />
              </div>
            </div>
          </div>
          <div className="row"></div>

          {/**-------------SENDER ADDRESS INFORMATION--------------- */}
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="InputLine1Pickup">Line 1</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <textarea
                  type="text"
                  className="form-control"
                  id="InputLine1Pickup"
                  placeholder="Address Line 1"
                  name="pickUpAddress"
                  onChange={handleInput}
                  value={transportValue.pickUpAddress}
                  rows={5}
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
                  value={transportValue.deliveryName}
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
                  value={transportValue.deliveryEmail}
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
                  value={transportValue.deliveryPhoneNumber}
                />
              </div>
            </div>
          </div>

          {/**-------------DELIVERY ADDRESS INFORMATION--------------- */}
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="InputLine1Shipping">Line 1</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <textarea
                  type="text"
                  className="form-control"
                  id="InputLine1Shipping"
                  placeholder="Address Line 1"
                  name="deliveryAddress"
                  onChange={handleInput}
                  value={transportValue.deliveryAddress}
                  rows={5}
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

export default EditTransportationDetailsy;
