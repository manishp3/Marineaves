import React from "react";
import "../../index.css";
const Contact = () => {

  React.useEffect(() => {
    document.title = "MarineWaves | Contact";
  }, []);
  return (
    <>
      <section className="position-relative pt-5 contact-form-container">
        <div className="container position-relative zindex-2 pt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0 contact-form">
              <div className="pe-lg-4 pe-xl-0">
                <h1 className="pb-2 pb-md-2 mb-lg-2">Contact Us</h1>
                <p className="pb-3 mb-4">
                  Try our Digital Solutions and see how they can help you ship
                  what you need quickly and easily!.
                </p>
                <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Email us</h2>
                    <p className="mb-2">
                      Please feel free to drop us a line. We will respond as
                      soon as possible.
                    </p>
                    <a
                      href="mailto:info@shipwaves.com"
                      className="btn btn-link btn-lg px-0"
                      aria-label="Email info@shipwaves.com"
                    >
                      Leave a message
                      <i className="bx bx-right-arrow-alt lead ms-2"></i>
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                    <i className="bx bx-group"></i>
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Careers</h2>
                    <p className="mb-2">
                      Join Shipwaves to innovate the future of logistics and
                      grow with us.
                    </p>
                    <a
                      href="/careers"
                      className="btn btn-link btn-lg px-0"
                      aria-label="careers"
                    >
                      Send an application
                      <i className="bx bx-right-arrow-alt lead ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-2">
              <div className="card border-light shadow-lg py-0 px-0 m-0">
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
                <div className="card-body position-relative py-0 px-0 m-0 img-div">
                  <img
                    alt="Contact Us"
                    src={require('../../Img/ContactSideBG.webp')}
                    width="634"
                    height="634"
                    decoding="async"
                    data-nimg="1"
                    className="img-fluid rounded-3"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute bottom-0 start-0 w-100"
          style={{ height: "8rem" }}
        ></div>
      </section>
      <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
        <div className="row py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe
                title="Unique Title"
                className="d-block h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65543.54114626492!2d72.18624569238617!3d21.606298525568018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be1ee415def93bd%3A0x1ad84e31e0150766!2sAlang%20SBY%20Sub%20Post%20Office!5e0!3m2!1sen!2sin!4v1704859519239!5m2!1sen!2sin"
                style={{ border: "0", minHeight: "300px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 contact-address">
            <h2 className="h4 mb-4">Mumbai</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-map text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                704, Star Hub, Building No.1, International Airport Road, Sahar,
                Andheri East, Mumbai - 400059, India
              </li>
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-phone-call text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                +91 22 6288 2000
              </li>
            </ul>
            <h2 className="h4 mb-4">Mangalore</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-map text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                Mukka Corporate House 3rd Floor, 1st Cross NG Road, Attavar,
                Landmark - Opp Sky Court, Mangalore, Karnataka - 575001
              </li>
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-phone-call text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                +971 42 99 66 76
              </li>
            </ul>
            <h2 className="h4 mb-4">Muscat</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-map text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                407, Ghala Height, Express Highway, Bousher, Ghala Industry
                Area, Oman
              </li>
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-phone-call text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                +968 91 916 349
              </li>
            </ul>
            <h2 className="h4 mb-4">Sohar</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-map text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                426G, Near Hamdan Exchange, Al Suroor Street, Falaj, Sohar, Oman
              </li>
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-phone-call text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                +968 91 916 349
              </li>
            </ul>

            {/* Repeat the similar structure for other locations */}

            <div className="d-flex pt-1 pt-md-3 pt-xl-4">
              <a
                href="https://www.facebook.com/shipwavesHQ/"
                className="btn btn-icon btn-secondary btn-facebook me-3"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/shipwaves-com/"
                className="btn btn-icon btn-secondary btn-linkedin me-3"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/shipwavesonline"
                className="btn btn-icon btn-secondary btn-twitter me-3"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/@shipwavesonline7950"
                className="btn btn-icon btn-secondary btn-youtube"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
