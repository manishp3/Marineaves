import React from "react";
//------------------------------INCOMPLETED-------------------------------------------
const HelpCenter = () => {
  React.useEffect(() => {
    document.title = "MarineWaves | Help Center";
  }, []);
  return (
    <>
      <section
        className="dark-mode position-relative pt-5"
        style={{ backgroundColor: "#151922" }}
      >
        <div className="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
          <div className="row justify-content-center pt-3 mt-3">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h1 className="mb-4 text-white">Help Center</h1>
              <p className="fs-lg pb-3 mb-3" style={{ color: "rgb(179 179 179)",fontSize:"18px" }}>
                To request a quote, contact us directly or fill out the form and
                let us know how we can help.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/marinewavesHQ/"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2"
                  target="_blank"
                  aria-label="Facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/marinewaves-com/"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary btn-linkedin rounded-circle mx-2"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/marinewavesonline"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary btn-twitter rounded-circle mx-2"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com/@marinewavesonline7950"
                  rel="noreferrer"
                  className="btn btn-icon btn-secondary btn-youtube rounded-circle mx-2"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
          style={{ color: "#151922" }}
        >
          <div
            className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
            style={{ width: "3788px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3788"
              height="144"
              viewBox="0 0 3788 144"
            >
              <path
                fill="currentColor"
                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
        <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
          <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2 pt-md-5">
            <div className="d-sm-flex justify-content-center">
              <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                <div className="card-body p-0">
                  <div className="d-inline-block text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-envelope" style={{fontSize:"35px"}}></i>
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3" style={{fontSize:"16px",color:"#2d4473"}}>
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                </div>
                <div className="border-0 p-0">
                  <a
                    href="mailto:marinewaves01@gmail.com"
                    className="btn btn-lg btn-primary"
                    aria-label="Email marinewaves01@gmail.com"
                    style={{fontSize:"16px"}}
                  >
                    Send email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section class="container">
        <div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0 mb-4">
          <h2 class="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2">
            Frequently Asked Questions
          </h2>
          <div class="row justify-content-center pb-lg-4 pb-xl-5">
            <div class="col-xl-8 col-lg-9 col-md-10 pb-md-2">
              <div class="accordion" id="faq">
                <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button shadow-none rounded-3 collapsed"
                      type="button"
                      aria-expanded="false"
                    >
                      What is marinewaves SCM Platform ?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse "
                    id="q-1"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm pt-0">
                      <p>
                        marinewaves SCM Platform gives you complete real-time
                        visibility and control over your entire multi modal
                        shipment process. Our technology solution has automated
                        and optimized the entire shipping processes to deliver
                        collaborative, real time, and powerful data driven
                        freight management in a cloud based, enterprise level
                        platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button shadow-none rounded-3 collapsed"
                      type="button"
                      aria-expanded="false"
                    >
                      What modules are available in Digital Freight Forwarding.
                      Can they be customizable to our needs?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse "
                    id="q-2"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm pt-0">
                      <p>
                        marinewaves Enterprise Edition Module consists of the
                        below features
                      </p>
                      <ul class="list">
                        <li>User Access Management</li>
                        <li>Real Time Container Tracking</li>
                        <li>Document Central</li>
                        <li>Ocean Schedules</li>
                        <li>User Dashboard</li>
                        <li>Reports and Data Analytics</li>
                        <li>Automated Alerts</li>
                      </ul>
                      <p>
                        Apart from the standard features, marinewaves would
                        customize some parts of the software to suit the needs
                        of each customer after the initial discussions and
                        requirement gathering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>*/}
    </>
  );
};

export default HelpCenter;
