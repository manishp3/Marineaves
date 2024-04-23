import React, { useEffect, useState } from "react";
import "../../index.css";

const Footer = () => {
  const [count, setCount] = useState(0);
  // count total visitors
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = storedCount ? Number(storedCount) : 0;
    setCount(initialCount + 1);
    localStorage.setItem("pageVisits", initialCount + 1 / 2);
  }, []);
  return (
    <div className="mt-4">
      {/* Footer */}
      <footer className="text-lg-start text-white footer">
        {/* Grid container */}
        <div className="container p-3 pb-0">
          {/* Section: Links */}
          <section className="">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h3 className="mb-3 font-weight-bold">MarineWaves</h3>
                <span>India | UAE | Oman</span>
                <p></p>
                <span>@2024 MarineWaves</span>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <p>
                  <a className="text-white" href="https://example.com">
                    Home
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Digital Frieght Forwarding
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Enterprise SaaS Solutions
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Terms and Condition
                  </a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p>
                  <a className="text-white" href="https://example.com">
                    Company
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    About Us
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Careers
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Press & Media
                  </a>
                </p>
                <p>
                  <a className="text-white" href="https://example.com">
                    Privacy Policy
                  </a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home"></i> &nbsp;704, Star Hub, Andheri
                  East, Mumbai - 400059,
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  &nbsp;marinewaves01@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> &nbsp;+91 22 6288 2000
                </p>
                <p>
                  <i className="fas fa-print"></i> &nbsp;+971 42 99 66 76
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}
          {/* Section: Copyright */}
          <section className="pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  <div className="d-inline-block mr-5">
                  Site Visited : {parseInt(count)}
                  </div>
                  <div className="mx-5 d-inline-block">
                    All rights reserved by MarineWaves © 2024
                  </div>
                </div>
                {/* Copyright */}
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Social Media Links */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://example.com"
                  role="button"
                >
                  <i className="bx bxl-facebook root-icon "></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://example.com"
                  role="button"
                >
                  <i className="bx bxl-twitter root-icon "></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://example.com"
                  role="button"
                >
                  <i className="bx bxl-google root-icon "></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://example.com"
                  role="button"
                >
                  <i className="bx bxl-instagram root-icon "></i>
                </a>

                {/* Social Media Links */}
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
    /* End of .container */
  );
};

export default Footer;
