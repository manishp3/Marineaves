import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Authentication.css";
import LoginFailModal from "../Modals/LoginFailModal";
import Preloader from "../Utility/Preloader";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); // State to track login failure
  const [loading, setLoading] = useState(false);

  // Rest of the code remains unchanged

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);

      const response = await fetch("http://localhost/MarineWaves/Admin.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.result === "admin") {
        // Admin login successful
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("userData", JSON.stringify(data.userdata));
        // alert("Welcome Admin!");
        navigate("/dashboard");
        window.location.reload();
      } else if (data.result === "general") {
        // General user login successful
        localStorage.setItem("isGeneral", "true");
        localStorage.setItem("userData", JSON.stringify(data.userdata));
        // alert("Welcome User!");
        navigate("/home");
        window.location.reload();
      } else {
        // Login failed
        setLoginFailed(true); // Set loginFailed state to true
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
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
            <Link to="/sign-up" className="login-btn">
              Sign up
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
                <h3 className="register-heading">Login to MarineWaves</h3>
                <form onSubmit={handleLogin} className="register-form">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-envelope root-icon"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your username or email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 my-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="bx bx-lock root-icon"></i>
                          </span>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"} // Dynamic type based on showPassword state
                          id="form3Example4c"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
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
                    <div className="col-md-12">
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-md px-5"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                      <div className="text-center">
                        New to MarineWaves?{" "}
                        <Link to="/sign-up">Sign up here</Link>
                      </div>
                    </div>
                  </div>
                  {/* Display message when login fails */}
                 {loginFailed && (
                   <div className="alert alert-danger col-9" role="alert">
                     Invalid email or password. Please try again.
                   </div>
                 )}
                  </form>
              </div>
            </div>
          </div>
        </div>
        {loginFailed && <LoginFailModal />} {/* Conditional rendering of preloader */}
        {loading && ( 
          <Preloader/>
        )}
        </div>
    </>
  );
};

export default Login;
