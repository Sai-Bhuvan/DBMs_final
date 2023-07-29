import React from "react";
import Newlogin from "./Components/NewLogin";
import Newsignup from "./Components/NewSignUp";
import {Navigate, Route, Routes}  from "react-router-dom";
import HomePage from "./Components/HomePage";
import Addplace from "./Components/AddPlace";
import Addvehicle from "./Components/AddVehicle";
import Addpackage from "./Components/AddPackage";
import ShowPlaces from "./Components/ShowPlaces";
import ShowVehicles from "./Components/showVehicles";
import ShowPackage from "./Components/showPackages";
import About from "./Components/About";
import BookingsPage from "./Components/BookingsPage";
import ContactUs from "./Components/ContactUs";
// import Search_loc from "./search_loc";

function App() {

  if(window.localStorage.getItem('email') === "undefined"){
    return <Navigate to={"/"} />
  }

  return (
      <>
        <Routes>
          <Route path='/login' element={<Newlogin />}/>
          <Route path='/signup' element={<Newsignup />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/places' element={<ShowPlaces />}/>
          <Route path='/places/new' element={<Addplace />}/>
          <Route path='/vehicles' element={<ShowVehicles />}/>
          <Route path='/packages' element={<ShowPackage />}/>
          <Route path='/bookings' element={<BookingsPage />}/>
          <Route path='/vehicles/new' element={<Addvehicle />}/>
          <Route path='/packages/new' element={<Addpackage />}/>
        <Route path='/' element={<HomePage />}>
        </Route>
      </Routes>      
    </>
  );
}

export default App;
