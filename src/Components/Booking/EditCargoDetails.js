import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCargoDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  // console.log(id);
  /**----------------useStates to Update fields------------ */
  const [cargoInfo, setCargoInfo] = React.useState({
    cargoType: "",
    cargoQuantity: "",
    cargoWeightUnit: "",
    cargoWeight: "",
    cargoDimensionUnit: "",
    cargoLength: "",
    cargoHeight: "",
    cargoWidth: "",
    cargoPackagingType: "",
    cargoHandlingInstructions: "",
  });

  const [insuranceInfo, setInsuranceInfo] = React.useState({
    insuranceProviderName: "",
    insurancePolicyNumber: "",
    insuranceType: "",
    cargoValue: "",
    insuranceCoverageAmount: "",
    insuranceDeductibleAmount: "",
    insuranceEffectiveDate: "",
    insuranceExpiryDate: "",
    insuranceProviderPhoneNumber: "",
    insuranceProviderPhoneNumber: "",
    insuranceProviderEmail: "",
  });

  /**----------------handleInput to set Value------------ */
  const handleInput = (e) => {
    setCargoInfo({ ...cargoInfo, [e.target.name]: e.target.value });
    setInsuranceInfo({ ...insuranceInfo, [e.target.name]: e.target.value });
  };

  // FUNCTION TO CALCULATE COVERAGE / DEDUCTIBLE AMOUNT OF INSURANCE
  useEffect(() => {
    const cargoValue = parseFloat(insuranceInfo.cargoValue);
    const coveragePercentage = parseFloat(
      insuranceInfo.insuranceCoveragePercentage
    );

    if (!isNaN(cargoValue) && !isNaN(coveragePercentage)) {
      const coverageAmount = (cargoValue * coveragePercentage) / 100;
      const deductibleAmount = cargoValue - coverageAmount;

      setInsuranceInfo({
        ...insuranceInfo,
        insuranceCoverageAmount: coverageAmount.toFixed(2),
        insuranceDeductibleAmount: deductibleAmount.toFixed(2),
      });
    }
  }, [insuranceInfo.cargoValue, insuranceInfo.insuranceCoveragePercentage]);

  //-------------------FUNCTION TO SUBMIT DATA IN DATABASE-----------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id:id,
      //----------FOR CARGO INFORMATION--------//
      cargoType: cargoInfo.cargoType,
      cargoQuantity: cargoInfo.cargoQuantity,
      cargoWeightUnit: cargoInfo.cargoWeightUnit,
      cargoWeight: cargoInfo.cargoWeight,
      cargoDimensionUnit: cargoInfo.cargoDimensionUnit,
      cargoLength: cargoInfo.cargoLength,
      cargoHeight: cargoInfo.cargoHeight,
      cargoWidth: cargoInfo.cargoWidth,
      cargoPackagingType: cargoInfo.cargoPackagingType,
      cargoHandlingInstructions: cargoInfo.cargoHandlingInstructions,

      //-------FOR INSURANCE INFORMATION--------//
      insuranceProviderName: insuranceInfo.insuranceProviderName,
      insurancePolicyNumber: insuranceInfo.insurancePolicyNumber,
      insuranceType: insuranceInfo.insuranceType,
      cargoValue: insuranceInfo.cargoValue,
      insuranceCoverageAmount: insuranceInfo.insuranceCoverageAmount,
      insuranceDeductibleAmount: insuranceInfo.insuranceDeductibleAmount,
      insuranceEffectiveDate: insuranceInfo.insuranceEffectiveDate,
      insuranceExpiryDate: insuranceInfo.insuranceExpiryDate,
      insuranceProviderPhoneNumber: insuranceInfo.insuranceProviderPhoneNumber,
      insuranceProviderEmail: insuranceInfo.insuranceProviderEmail,
    };

    const res = await axios.put(
      "http://localhost/MarineWaves/CargoAndInsurance.php",
      formData
    );
    console.log("Form submitted:", formData);
    alert('Your Form has been Updated Successfully!');
    // navigate('/dashboard/sender');
};

useEffect(()=>{
  const userRowData = async () =>{
      const getUserData = await fetch(`http://localhost/marinewaves/CargoAndInsurance.php/${id}`);
      const resUserData = await getUserData.json();
      setCargoInfo(resUserData);
      setInsuranceInfo(resUserData);
      // setInsuranceInfo(prevInsuranceInfo => ({ ...prevInsuranceInfo, ...resUserData }));
      // console.log(resUserData);
      console.log(resUserData)
    }
    userRowData();
  },[]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/**------------- CARGO INFORMATION--------- */}
          <section className="p-md-5 m-4">
            <h2 className="py-3 text-center">Cargo information </h2>
            <div className="row">
              <h5 className="py-3">Physical Appearance :</h5>
              <div className="col-md-3">
                <label htmlFor="CargoType">Cargo type</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="CargoType"
                    name="cargoType"
                    value={cargoInfo.cargoType}
                    onChange={handleInput}
                  >
                    <option defaultValue="General Cargo">
                      Select Cargo type
                    </option>
                    <option value="General Cargo">General Cargo</option>
                    <option value="Perishable goods">Perishable goods</option>
                    <option value="Hazardous materials">
                      Hazardous materials
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Quantity">Quantity</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Quantity"
                    placeholder="No. of Material"
                    name="cargoQuantity"
                    onChange={handleInput}
                    value={cargoInfo.cargoQuantity}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <label htmlFor="Weight">Weight Unit</label>
                  <div className="form-group col-md-6">
                    <div className="input-group">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="WeightUnit"
                        name="cargoWeightUnit"
                        onChange={handleInput}
                      >
                        <option defaultValue="">Select Unit</option>
                        <option value="Tons">Tons</option>
                        <option value="Kilograms">Kilograms</option>
                        <option value="Pound">Pounds</option>
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="bx bx-unite root-icon"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="Weight"
                        placeholder="Weight"
                        name="cargoWeight"
                        value={cargoInfo.cargoWeight}
                        onChange={handleInput}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="bx bx-objects-vertical-bottom root-icon"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <h6 className="py-3">Dimensions:</h6>
              <div className="col-md-3">
                <label htmlFor="DimensionUnit">Dimension Unit</label>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="DimensionUnit"
                    name="cargoDimensionUnit"
                    value={cargoInfo.cargoDimensionUnit}
                    onChange={handleInput}
                  >
                    <option defaultValue="Meter">Select Unit</option>
                    <option value="Meter">Meter</option>
                    <option value="Inch">Inch</option>
                    <option value="Foot">Foot</option>
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-ruler root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="Length">Length</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Length"
                    placeholder="Length"
                    name="cargoLength"
                    onChange={handleInput}
                    value={cargoInfo.cargoLength}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-ruler root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="Height">Height</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Height"
                    placeholder="Height"
                    name="cargoHeight"
                    onChange={handleInput}
                    value={cargoInfo.cargoHeight}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-ruler root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="Width">Width</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Width"
                    placeholder="Width"
                    name="cargoWidth"
                    onChange={handleInput}
                    value={cargoInfo.cargoWidth}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-ruler root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="PackagingType">Packaging type</label>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="PackagingType"
                    name="cargoPackagingType"
                    value={cargoInfo.cargoPackagingType}
                    onChange={handleInput}
                  >
                    <option defaultValue="Cartons">
                      Select Packaging type
                    </option>
                    <option value="Cartons">Cartons</option>
                    <option value="Pallets">Pallets</option>
                    <option value="Container">Container</option>
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-package root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-7">
                <h6 className="">Special Handling Instructions :</h6>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    id="cargoHandlingInstructions"
                    rows="5"
                    placeholder="Describe any specific instructions for handling the cargo, such as fragility or sensitivity."
                    name="cargoHandlingInstructions"
                    onChange={handleInput}
                    value={cargoInfo.cargoHandlingInstructions}
                  ></textarea>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bx bx-home root-icon"></i>
                    </span>
                  </div>
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

          {/**------------- INSURANCE INFORMATION--------- */}
          <section className="pt-md-2 pb-md-4 px-md-4 m-24">
            <h2 className="py-3">Insurance information </h2>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="InsuranceProvider">Insurance Provider</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="InsuranceProvider"
                    placeholder="Enter Provider Name"
                    name="insuranceProviderName"
                    onChange={handleInput}
                    value={insuranceInfo.insuranceProviderName}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-building root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="PolicyNo">Policy No.</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="PolicyNo"
                    placeholder="Ex. 123-456-789"
                    name="insurancePolicyNumber"
                    onChange={handleInput}
                    value={insuranceInfo.insurancePolicyNumber}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-file root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="InsuranceType">Insurance Type</label>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="InsuranceType"
                    name="insuranceType"
                    value={insuranceInfo.insuranceType}
                    onChange={handleInput}
                  >
                    <option value="0">Select insurance type</option>
                    <option value="Liability Insurance">
                      Liability Insurance
                    </option>
                    <option value="Frieght Insurance">Frieght Insurance</option>
                    <option value="All Risk Insurance">
                      All Risk Insurance
                    </option>
                    <option value="Voyage Insurance">Voyage Insurance</option>
                    <option value="Hull Insurance">Hull Insurance</option>
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-shield root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="CargoValue">Value of Cargo</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="CargoValue"
                    placeholder="Ex. $50000"
                    name="cargoValue"
                    onChange={handleInput}
                    value={insuranceInfo.cargoValue}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-dollar-circle root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="form-group col-md-3">
                <label htmlFor="CoverageAmount">Coverage Percentage</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="CoverageAmount"
                    placeholder="Ex. 65%"
                    name="insuranceCoveragePercentage"
                    onChange={handleInput}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-chevrons-right root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="CoverageAmount">Coverage Amount</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="CoverageAmount"
                    placeholder="Ex. $42000"
                    name="insuranceCoverageAmount"
                    value={insuranceInfo.insuranceCoverageAmount}
                    onChange={handleInput}
                    disabled
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-dollar-circle root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Deductible">Deductible</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Deductible"
                    placeholder="Ex. $1000"
                    name="insuranceDeductibleAmount"
                    value={insuranceInfo.insuranceDeductibleAmount}
                    onChange={handleInput}
                    disabled
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-dollar-circle root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/*<div className="form-group col-md-3">
                    <label htmlFor="EffectiveDate">Effective Date</label>
                    <div className="input-group">
                      <input
                        type="date"
                        className="form-control"
                        id="EffectiveDate"
                        name="insuranceEffectiveDate"
                        onChange={handleInput}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="bx bx-calendar root-icon"></i>
                        </span>
                      </div>
                    </div>
              </div>*/}
              <div className="form-group col-md-3">
                <label htmlFor="ExpiryDate">Expiry Date</label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="ExpiryDate"
                    name="insuranceExpiryDate"
                    onChange={handleInput}
                    value={insuranceInfo.insuranceExpiryDate}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bx bx-calendar-check root-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/**-------------INSURANCE PROVIDER INFORMATION--------------- */}
            <div className="row my-5">
              <h5 className="my-4">Contact information for Claims</h5>
              <div className="col-md-9">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="ContactNumber">Contact no.</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="ContactNumber"
                        placeholder="Ex.+91 987654321"
                        name="insuranceProviderPhoneNumber"
                        onChange={handleInput}
                        value={insuranceInfo.insuranceProviderPhoneNumber}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="bx bx-phone root-icon"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="Email">Email address</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        aria-describedby="emailHelp"
                        placeholder="Ex. provider@example.com"
                        name="insuranceProviderEmail"
                        onChange={handleInput}
                        value={insuranceInfo.insuranceProviderEmail}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="bx bx-envelope root-icon"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="col-md-6">
                <h6 className="">Insurance Provider Address</h6>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    id="ProviderAddress"
                    rows="5"
                    placeholder="Enter Head office address of provider"
                    name="insuranceProviderAddress"
                    onChange={handleInput}
                  ></textarea>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bx bx-home root-icon"></i>
                    </span>
                  </div>
                </div>
            </div>*/}
            </div>

            <button
              type="submit"
              className="btn btn-primary my-5 text-white px-5"
            >
              Update
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default EditCargoDetails;
