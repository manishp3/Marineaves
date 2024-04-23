import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';

import Layout from './Components/Utility/Layout';
import Home from './Components/Home/Home';
import About from './Components/Utility/About';
import Contact from './Components/Utility/Contact';
import HelpCenter from './Components/Help/HelpCenter';
import IndexBooking from './Components/Booking/IndexBooking';
import FormSenderReciever from './Components/Booking/FormSenderReciever';
import FormCargoDetails from './Components/Booking/FormCargoDetails';
import FormTransportationDetails from './Components/Booking/FormTransportationDetails';
import FormSpeacialRequirements from './Components/Booking/FormSpeacialRequirements';
import SignUp from './Components/Authentication/SignUp';
import Login from './Components/Authentication/Login';
import ShippingRefundPolicy from './Components/Services/ShippingRefundPolicy';
import DocumentList from './Components/Help/DocumentList';
import Tracking from './Components/Services/Tracking';
import ShipInformationUser from './Components/Services/ShipInformationUser';
import Preloader from './Components/Utility/Preloader';

import TableUser from './Components/Dashboard/TableUser';
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import TableTracking from './Components/Dashboard/TableTracking';
import TableShipScheduling from './Components/Dashboard/TableShipScheduling';
import TableSenderReciever from './Components/Dashboard/TableSenderReciever';
import TableCargo from './Components/Dashboard/TableCargo';
import TableInsurance from './Components/Dashboard/TableInsurance';
import TableTransport from './Components/Dashboard/TableTransport';
import TableSpecialRequirements from './Components/Dashboard/TableSpecialRequirements';
import TableCargoBooking from './Components/Dashboard/TableCargoBooking';
import TableCallRequest from './Components/Dashboard/TableCallRequest';
import DashboardHome from './Components/Dashboard/DashboardHome';
import EditPersonalInfo from './Components/Booking/EditPersonalInformation';
import EditCargoDetails from './Components/Booking/EditCargoDetails';
import EditTransportationDetailsy from './Components/Booking/EditTransportationDetailsy';
import EditSpeacialRequirements from './Components/Booking/EditSpeacialRequirements';
import EditTrackingPanel from './Components/Dashboard/EditTrackingPanel';
import EditEmployee from './Components/Dashboard/EditEmployee';
import EditUser from './Components/Dashboard/EditUser';
import EditShipScheduling from './Components/Dashboard/EditShipScheduling';
import UserProfile from './Components/Authentication/UserProfile';
import AddShipTracking from './Components/Dashboard/AddShipTracking';
import AddEmployee from './Components/Dashboard/AddEmployee';
import TableEmployee from './Components/Dashboard/TableEmployee';

// weather by manish
import Weather from './Components/Utility/Weather';
import ShipTrackingPanel from './Components/Dashboard/AddShipTracking';
import TermsOfService from './Components/Help/TermsOfServices';
import ShipScheduling from './Components/Dashboard/ShipScheduling';




//-----Routing Method-02----------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/booking' element={<IndexBooking/>}/>
      {/* by manish */}
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/help-center' element={<HelpCenter/>}/>
      <Route path='/booking/personal-info' element={<FormSenderReciever/>}/>
      <Route path='/booking/cargo-details' element={<FormCargoDetails/>}/>
      <Route path='/booking/transportation-details' element={<FormTransportationDetails/>}/>
      <Route path='/booking/special-requirements' element={<FormSpeacialRequirements/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user-profile' element={<UserProfile/>}/>
      <Route path='/shipping-refund-policy' element={<ShippingRefundPolicy/>}/>
      <Route path='/document-list' element={<DocumentList/>}/>
      <Route path='/terms-of-services' element={<TermsOfService/>}/>
      <Route path='/tracking' element={<Tracking/>}/>
      <Route path='/ship-information-user' element={<ShipInformationUser/>}/>
      <Route path='/edit-personal-info/:id' element={<EditPersonalInfo/>}/>
      <Route path='/edit-cargo-details/:id' element={<EditCargoDetails/>}/>
      <Route path='/edit-transport-details/:id' element={<EditTransportationDetailsy/>}/>
      <Route path='/edit-special-requirements/:id' element={<EditSpeacialRequirements/>}/>
      
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='' element={<DashboardHome/>}/>
        <Route path='new-user' element={<TableUser/>}/>
        <Route path='edit-user/:id' element={<EditUser/>}/>
        <Route path='call-request' element={<TableCallRequest/>}/>
        <Route path='add-employee' element={<AddEmployee/>}/>
        <Route path='edit-employee/:id' element={<EditEmployee/>}/>
        <Route path='staff-information' element={<TableEmployee/>}/>
        <Route path='add-ship-tracking' element={<AddShipTracking/>}/>
        <Route path='add-ship-scheduling' element={<ShipScheduling/>}/>
        <Route path='edit-ship-scheduling/:id' element={<EditShipScheduling/>}/>
        <Route path='tracking-form' element={<ShipTrackingPanel/>}/>
        <Route path='tracking-information' element={<TableTracking/>}/>
        <Route path='update-tracking/:id' element={<EditTrackingPanel/>}/>
        <Route path='ship-information' element={<TableShipScheduling/>}/>
        <Route path='sender' element={<TableSenderReciever/>}/>
        <Route path='cargo-information' element={<TableCargo/>}/>
        <Route path='insurance-information' element={<TableInsurance/>}/>
        <Route path='transport-information' element={<TableTransport/>}/>
        <Route path='special' element={<TableSpecialRequirements/>}/>
        <Route path='cargo-booking' element={<TableCargoBooking/>}/>
        
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Preloader />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
