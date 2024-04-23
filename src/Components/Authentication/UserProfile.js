import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/UserProfile.css";
import LogOutModal from "../Modals/LogOutModal";

function UserProfile() {
  const navigate = useNavigate();

  // State to store the authentication status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isGeneralLoggedIn, setIsGeneralLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if the user is logged in as an admin or general user when the component mounts
  useEffect(() => {
    document.title = "MarineWaves | Profile";
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    setIsAdminLoggedIn(isAdmin);

    const isGeneral = localStorage.getItem("isGeneral") === "true";
    setIsGeneralLoggedIn(isGeneral);

    // ----------------Get user data from localStorage if available---------------
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    // console.log(userData);
  }, []);

  // Handle reload action
  const handleReload = () => {
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      {isAdminLoggedIn || isGeneralLoggedIn ? (
        <div
          className="page-content page-container container d-flex justify-content-center"
          id="page-content"
        >
          <div className="row container d-flex justify-content-center my-md-5 py-md-3">
            <div className="col-xl-9 col-md-12">
              <div className="card user-card-full">
                <div className="row m-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile py-5">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600">{user.name}</h6>
                      <p>Username : {user.username}</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">
                            {user.phone_number}
                          </h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Login Date</p>
                          <h6 className="text-muted f-w-400">
                            {user.login_date}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          {/*-------------------MODAL-----------------*/}
                          <LogOutModal/>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="page-content page-container container d-flex justify-content-center"
          id="page-content"
        >
          <div className="container d-flex justify-content-center align-items-center py-5 my-5">
            <div className="box text-center my-5">
              <h2 className="text-danger">Oops!</h2>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                Something went wrong. Please reload the page.
              </p>
              <button
                className="btn btn-primary btn-md px-4 mt-3"
                onClick={handleReload}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
