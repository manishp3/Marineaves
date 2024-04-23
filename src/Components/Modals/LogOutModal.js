import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/Modal.css";

function LogOutModal() {
    
  const navigate = useNavigate();
  // State to store the authentication status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isGeneralLoggedIn, setIsGeneralLoggedIn] = useState(false);
  // ------------------Handle logout action-----------------
  const handleLogout = () => {
    // Clear user-related data from local storage
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isGeneral");
    localStorage.removeItem("userData");

    // Update the state to reflect logout
    setIsAdminLoggedIn(false);
    setIsGeneralLoggedIn(false);

    // Redirect to home page after logout
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      {/* Modal */}
      <div className="text-center">
      {/* Button HTML (to Trigger Modal) */}
      <a href="#myModal" className="trigger-btn btn btn-primary mt-4 px-4" data-toggle="modal">Log Out</a>

      {/* Modal HTML */}
      <div id="myModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-confirm" role="document">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <div className="icon-box">
                <i className="material-icons">&#xE5CD;</i>
              </div>
              <h4 className="modal-title w-100">Are you sure?</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Do you really want to log out from Marinewaves ?</p>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger my-4 text-white px-5" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}

export default LogOutModal
