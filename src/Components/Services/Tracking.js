import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const TrackingPanel = () => {
  React.useEffect(() => {
    document.title = "MarineWaves | Tracking";
  }, []);
  const [shipData, setShipData] = useState(null);
  const [formvalue, setFormValue] = useState({
    shippingId: "",
    shipId: "",
  });
  const handleInput = (e) => {
    setFormValue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      shippingId: formvalue.shippingId,
      shipId: formvalue.shipId,
    };

    try {
      const res = await axios.post(
        "http://localhost/marinewaves/Tracking.php",
        formData
      );
      setShipData(res.data);
    } catch (error) {
      console.error("Error fetching tracking data:", error);
    }
    console.log(shipData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cargo Tracking</h2>
      <div className="row justify-content-center py-2">
        <div className="col-md-5 py-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="UserId">Ship ID</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="UserId"
                  name="shipId"
                  placeholder="Enter Ship ID"
                  value={formvalue.shipId}
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="ShippingId">Shipping ID</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="ShippingId"
                  name="shippingId"
                  placeholder="Enter Shipping ID"
                  value={formvalue.shippingId}
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-barcode-reader root-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary btn-md px-5">
                Track
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-7 border border-primary rounded py-4">
          {/* Display the tracking information */}
          {shipData !== null ? (
            <>
              <p>
                Ship ID : <span className="ship-info">{shipData.shipId}</span>
              </p>
              <p>
                Ship Name :{" "}
                <span className="ship-info">{shipData.shipName}</span>
              </p>
              <p>
                Current Location :{" "}
                <span className="ship-info">{shipData.currentLocation}</span>
              </p>
              <p>
                Destination :{" "}
                <span className="ship-info">{shipData.destination}</span>
              </p>
              <p>
                Estimated Time of Arrival :{" "}
                <span className="ship-info">
                  {shipData.estimatedTimeOfArrival}
                </span>
              </p>
              <p>
                Status : <span className="ship-info">{shipData.status}</span>
              </p>
              <p>
                Last Updated Time :{" "}
                <span className="ship-info">{shipData.lastUpdatedTime}</span>
              </p>
            </>
          ) : (
            <p className="text-center text-danger" style={{ fontSize: "20px" }}>
  No tracking information found.
</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default TrackingPanel;
