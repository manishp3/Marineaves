import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Authentication.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  React.useEffect(() => {
    document.title = "MarineWaves | Sign Up";
  }, []);

  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
    passwordError: "",
  });

  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation: Check if the user has agreed to terms
    if (!formValue.agreeTerms) {
      setFormValue({
        ...formValue,
        passwordError: "Please agree to the terms and conditions.",
      });
      return;
    }
  
    // Validation: Check if passwords match
    if (formValue.password !== formValue.repeatPassword) {
      setFormValue({ ...formValue, passwordError: "Passwords do not match." });
      return;
    }
  
    // Validation: Check password length
    if (formValue.password.length < 8) {
      setFormValue({
        ...formValue,
        passwordError: "Password must be at least 8 characters long.",
      });
      return;
    }
  
    // Form submission logic
    const formData = {
      name: formValue.name,
      username: formValue.username,
      phoneNumber: formValue.phoneNumber,
      email: formValue.email,
      password: formValue.password,
      repeatPassword: formValue.repeatPassword,
    };
  
    try {
      // Send registration data to backend
      const response = await axios.post(
        "http://localhost/MarineWaves/NewUser.php",
        formData
      );
      console.log("Form submitted:", formData);
  
      // Check login credentials against backend
      const loginResponse = await axios.post(
        "http://localhost/MarineWaves/Admin.php",
        {
          email: formData.email,
          password: formData.password,
        }
      );
  
      // Handle login response
      const loginData = loginResponse.data;
      if (loginData.result === "general") {
        localStorage.setItem("isGeneral", "true");
        localStorage.setItem("userData", JSON.stringify(loginData.userdata));
        alert("Welcome User!");
        navigate("/home");
        window.location.reload();
      }
      else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during registration or login:", error);
    }
  };
  

  return (
    <>
      <div className="container-fluid register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from the Marinewaves!</p>
            <Link to="/login" className="login-btn">
              Log in
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            ></ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Sign up to MarineWaves</h3>
                <form onSubmit={handleSubmit} className="register-form">
                  <div className="row">
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-user root-icon"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formValue.name}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Enter your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-user-pin root-icon"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="username"
                          value={formValue.username}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Enter Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-mobile-alt root-icon"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={formValue.phoneNumber}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Your Contact no."
                        />
                      </div>
                    </div>
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-envelope root-icon"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formValue.email}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Your Email"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-lock root-icon"></i>
                          </span>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formValue.password}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i
                              className={
                                showPassword
                                  ? "bx bx-hide root-icon"
                                  : "bx bx-show root-icon"
                              }
                            ></i>{" "}
                            {/* Eye icon toggles password visibility */}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-lock root-icon"></i>
                          </span>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="repeatPassword"
                          value={formValue.repeatPassword}
                          onChange={handleInput}
                          className="form-control"
                          placeholder="Repeat Password"
                          autoComplete="new-password"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i
                              className={
                                showPassword
                                  ? "bx bx-hide root-icon"
                                  : "bx bx-show root-icon"
                              }
                            ></i>{" "}
                            {/* Eye icon toggles password visibility */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 my-3">
                      <div className="form-check d-flex justify-content-start mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          name="agreeTerms"
                          id="form2Example3c"
                          checked={formValue.agreeTerms}
                          onChange={(e) =>
                            setFormValue({
                              ...formValue,
                              agreeTerms: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <Link
                            to="/terms-of-services"
                            className="text-decoration-none"
                          >
                            Terms of Services
                          </Link>
                        </label>
                      </div>
                    </div>
                    {/* Display password error message */}
                    {formValue.passwordError && (
                      <div style={{ color: "red", margin: "-20px 0 15px 0" }}>
                        {formValue.passwordError}
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-center mx-4 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-md px-5"
                        >
                          Register
                        </button>
                      </div>
                      <div className="text-center">
                        Already have an account?{" "}
                        <Link to="/login">Log in here</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
