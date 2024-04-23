import React from 'react'
import '../../index.css';
import '../Styles/Animation.css';
function Partners() {
  return (
    <div className="container-fluid py-5" style={{backgroundColor:"#f3f6ff"}}>
    <h1 className='d-block text-center py-4 my-3'>Your Ideal Logistics Partner</h1>
        <div className="row partner-row">
                <div className="card partner-card" style={{width: "19rem"}}>
                    <img src={require("../../Img/HomeMultiModel.webp")} className="card-img-top rounded" alt="..."/>
                    <div className="card-body  text-center px-2">
                        <h5 className="card-title">Multimodal Logistics</h5>
                        <p className="card-text">Reduce the time, money and effort spent in coordinating the complexities of trade using the most advanced technology</p>
                    </div>
                </div>
                <div className="card partner-card" style={{width: "19rem"}}>
                    <img src={require("../../Img/HomeTechnology.webp")} className="card-img-top rounded" alt="..."/>
                    <div className="card-body  text-center px-2">
                        <h5 className="card-title">Technology Enabled</h5>
                        <p className="card-text">Know your costs, with a detailed break-up, even before you make an inquiry. No hidden charges, whatsoever</p>
                    </div>
                </div>
                <div className="card partner-card" style={{width: "19rem"}}>
                    <img src={require("../../Img/HomeIntegrate.webp")} className="card-img-top rounded" alt="..."/>
                    <div className="card-body  text-center px-2">
                        <h5 className="card-title">Deeply Integrated</h5>
                        <p className="card-text">Navigate through the freight forwarding process smoothly on a simple and thoughtfully-designed interface</p>
                    </div>
                </div>
                <div className="card partner-card" style={{width: "19rem"}}>
                    <img src={require("../../Img/HomeCostEfficient.webp")} className="card-img-top rounded" alt="..."/>
                    <div className="card-body  text-center px-2">
                        <h5 className="card-title">Cost Efficient</h5>
                        <p className="card-text">Steer clear of potential snags on your shipments with the help of expert guidance and tactical recommendations</p>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default Partners
