import React from "react";

const ShippingRefundPolicyPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        <i className="bx bx-refresh root-icon" style={{fontSize:"30px"}}></i> Shipping & Refund Policy
      </h2>

      <section>
        <h5>
          <i className="bx bx-info-circle root-icon"></i> Shipping Information
        </h5>
        <p>
          We offer shipping services both domestically and internationally.
          Shipping costs and delivery times vary depending on the destination.
          Please refer to the checkout page for specific shipping details.
        </p>
      </section>

      <div className="mt-4  py-1"></div>

      <section>
        <h5>
          <i className="bx bx-receipt root-icon"></i> Order Processing Time
        </h5>
        <p>
          All orders are processed within 1-2 business days. Orders are not shipped
          or delivered on weekends or holidays. If there will be a significant delay
          in the shipment of your order, we will contact you via email or telephone.
        </p>
      </section>

      <div className="mt-4  py-1"></div>

      <section>
        <h5>
          <i className="bx bx-error root-icon"></i> Returns & Refunds
        </h5>
        <p>
          We accept returns for damaged or defective products. If you receive a damaged
          or defective item, please contact us immediately with details of the product
          and the issue. We will process a refund or replacement based on your preference.
        </p>
      </section>

      <div className="mt-4  py-1"></div>

      <section className="pb-5">
        <h5>
          <i className="bx bx-time-five root-icon"></i> Refund Time Frame
        </h5>
        <p>
          Refunds are processed within 7-10 business days after the returned item is received.
          Please note that it may take additional time for your bank or credit card company
          to process the refund and post it to your account.
        </p>
      </section>

      {/* Additional sections (Terms, Conditions, Contact, etc.) go here */}
    </div>
  );
};

export default ShippingRefundPolicyPage;
