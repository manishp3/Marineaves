import React from 'react'

function DemoModal() {
  return (
    <div>
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Leaving Marinewaves 
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure want to log out ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-logout"
                data-dismiss="modal"
              >
                Cancle
              </button>
              <button type="button" className="btn btn-danger my-4 text-white px-5" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DemoModal
