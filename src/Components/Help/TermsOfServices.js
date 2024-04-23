import React, { useState } from "react";
import "../../index.css";
const TermsOfService = () => {
  return (
    <div className="container terms-container mt-5">
      <h2 className="text-center mb-4">Terms of Service</h2>
      <ol >
        <li>
          <strong>Acceptance of Terms</strong>: By accessing or using the Project, you agree to these Terms. If you do not agree to these Terms, you may not access or use the Project.
        </li>
        <li>
          <strong>Use of Project</strong>: You may use the Project solely for its intended purpose as described in the documentation provided. You may not use the Project for any illegal or unauthorized purpose.
        </li>
        <li>
          <strong>User Accounts</strong>: Some features of the Project may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </li>
        <li>
          <strong>Intellectual Property</strong>: The Project and all content and materials included therein are the property of [Your Company Name] or its licensors and are protected by intellectual property laws. You may not modify, reproduce, distribute, or create derivative works of the Project without our prior written consent.
        </li>
        <li>
          <strong>Privacy</strong>: Your privacy is important to us. Please review our Privacy Policy [link to privacy policy] to understand how we collect, use, and disclose your information in connection with the Project.
        </li>
        <li>
          <strong>Disclaimer of Warranties</strong>: The Project is provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. We make no warranties or representations about the accuracy or completeness of the Project or its content.
        </li>
        <li>
          <strong>Limitation of Liability</strong>: In no event shall [Your Company Name] be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Project, even if we have been advised of the possibility of such damages.
        </li>
        <li>
          <strong>Changes to Terms</strong>: We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the Project after any changes to these Terms constitutes your acceptance of the revised Terms.
        </li>
        <li>
          <strong>Governing Law</strong>: These Terms shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law principles.
        </li>
        <li>
          <strong>Contact Us</strong>: If you have any questions or concerns about these Terms, please contact us at [Contact Email].
        </li>
      </ol>
    </div>
  );
};

export default TermsOfService;
