import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Modal.css';

const IncorrectLoginModal = () => {
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    // Clear user-related data from local storage
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isGeneral');
    localStorage.removeItem('userData');

    // Redirect to login page after logout
    navigate('/login');
    // Reload the page
    window.location.reload();
  };

  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="incorrectLoginModal" tabIndex="-1" role="dialog" aria-labelledby="incorrectLoginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="incorrectLoginModalLabel">Incorrect Login Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>The email or password you entered is incorrect. Please try again.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncorrectLoginModal;
