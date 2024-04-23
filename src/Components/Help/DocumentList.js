import React, { useState } from "react";

const DocumentList = () => {
    React.useEffect(() => {
        document.title = "MarineWaves | Document List";
      }, []);

  const documentList = [
    { name: "Bill of Lading (B/L)", icon: "bx bx-package", description: "A document acknowledging the receipt of goods on board a ship. It serves as a contract of carriage and a receipt of the shipped goods." },
    { name: "Commercial Invoice", icon: "bx bx-receipt", description: "An itemized list of goods shipped, specifying the price and terms of sale. It is used for customs clearance and payment purposes." },
    { name: "Packing List", icon: "bx bx-archive", description: "A detailed list of contents included in the shipment. It provides information about the quantity and packaging of each item." },
    { name: "Certificate of Origin", icon: "bx bx-badge-check", description: "A document declaring the country where the goods were produced. It is required for customs clearance and may be used to determine tariffs." },
    { name: "Insurance Certificate", icon: "bx bx-shield", description: "Proof of insurance coverage for the shipped goods. It provides protection against loss, damage, or theft during transit." },
    { name: "Letter of Credit (L/C)", icon: "bx bx-file", description: "A financial document providing payment guarantees from a bank to a seller. It ensures that the seller will be paid upon fulfilling the terms of the sales agreement." },
    { name: "Customs Declaration", icon: "bx bx-file-blank", description: "A formal statement specifying the contents of a shipment for customs purposes. It includes details such as the value, origin, and destination of the goods." },
    { name: "Transportation Document", icon: "bx bx-car", description: "Documentation related to the transportation of goods. It includes information about the carrier, route, and conditions of transportation." },
    { name: "Dangerous Goods Declaration", icon: "bx bx-error", description: "A document identifying hazardous materials in a shipment. It provides information on the nature, quantity, and handling instructions for dangerous goods." },
    { name: "Health and Phytosanitary Certificates", icon: "bx bx-health", description: "Certificates ensuring the health and safety of shipped agricultural products. They may include information about the inspection and treatment of products to prevent the spread of pests and diseases." },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const toggleDescription = (index) => {
    const newExpandedDescriptions = [...expandedDescriptions];
    newExpandedDescriptions[index] = !newExpandedDescriptions[index];
    setExpandedDescriptions(newExpandedDescriptions);
  };

  const getDescription = (description, limit) => {
    if (description.length <= limit) return description;
    return `${description.slice(0, limit)}...`;
  };

  const smallDeviceLimit = 80;
  const pcLimit = 130;
  const charLimit = window.innerWidth <= 768 ? smallDeviceLimit : pcLimit;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Required Documents for Shipping Cargo</h2>
      <ul className="list-group list-group-flush">
        {documentList.map((document, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className={`root-icon ${document.icon}`}></i>
              </div>
              <div>
                <h5>{document.name}</h5>
                <p>
                  {expandedDescriptions[index] || document.description.length <= charLimit
                    ? document.description
                    : getDescription(document.description, charLimit)}
                </p>
                {document.description.length > charLimit && (
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedDescriptions[index] ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
