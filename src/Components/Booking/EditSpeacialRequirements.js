import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditSpeacialRequirements() {
  const navigate = useNavigate();
  const {id} = useParams();
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
  
  const [specialRequirements, setSpecialRequirements] = React.useState({
    bookingReferenceKey: '',
    customerReferenceKey: '',
    storageType: '',
    warehouse: '',
    clearCustoms: '',
    regulations: '',
  });

  // Generate a random booking reference key when the component mounts
  useEffect(() => {
    const BookingReferenceKey = generateBookingReferenceKey(12);

    // Update the state with the generated key
    setSpecialRequirements({...specialRequirements,bookingReferenceKey: BookingReferenceKey,
    
    });
  }, []);

  const handleInput = (e) => {
    setSpecialRequirements({...specialRequirements, [e.target.name]: e.target.value,})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id:id,
      bookingReferenceKey: specialRequirements.bookingReferenceKey,
      customerReferenceKey: specialRequirements.customerReferenceKey,
      storageType: specialRequirements.storageType,
      warehouse: specialRequirements.warehouse,
      clearCustoms: specialRequirements.clearCustoms,
      regulations: specialRequirements.regulations,
    };
    try {
      const res = await axios.put(
        "http://localhost/MarineWaves/SpecialRequirements.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Form has been Submitted Successfully!");
      navigate('/dashboard/special')
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(()=>{
    const userRowData = async () =>{
        const getUserData = await fetch(`http://localhost/marinewaves/SpecialRequirements.php/${id}`);
        const resUserData = await getUserData.json();
        setSpecialRequirements(resUserData);
        // console.log(resUserData.warehouse)
        // console.log(resUserData.storageType)
        console.log(resUserData.clearCustoms)
    }
    userRowData();
  },[]);
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
                onChange={handleInput}
                value={specialRequirements.customerReferenceKey}
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
                    checked= {specialRequirements.storageType === 'Normal'}
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
                    checked= {specialRequirements.storageType === 'Cold'}
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
                checked={specialRequirements.warehouse === 'YES'}
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
                checked={specialRequirements.clearCustoms === 'YES'}
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
                checked={specialRequirements.regulations === 'YES'}
              />
              <label className="form-check-label" htmlFor="cargoCompliance">
                Ensure that the cargo complies with international and local
                shipping regulations.
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success my-5">
        Update
          {/*<Link to="/booking/cargo-details" className="text-white px-5">
            Confirm Order
          </Link>*/}
        </button>
      </form>
    </div>
  );
}

export default EditSpeacialRequirements;
