import axios from "axios";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";

export default function VehicleCard({vehicle}) {
  
    const sliderdata = vehicle?.photos;
    const length = sliderdata?.length;
    const vehicleName = vehicle?.VehicleName;
    const driverName = vehicle?.driverName;
    const price = vehicle?.price;
    const seats = vehicle?.seats
    const vehicleType = vehicle?.vehicleType
    const [slide, setslide] = useState(0);
    const discription =vehicle?.description;
    const customer = window.localStorage.getItem('email');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [redirect, setRedirect] = useState(false);
    
  const previmg = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextimg = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };

  async function bookVehicle(event) {
    console.log({id: vehicle?._id});
    if (startDate !== "" && endDate !== "") {
      axios.post('http://localhost:4000/bookings', {
      customer: customer,
      what: 'vehicle',
      VehicleId: vehicle?._id,
      PlaceId: null,
      PackageId: null,
      startDate: startDate,
      endDate: endDate,
    })
    .then((res)=>{
      console.log(res);
      setRedirect(true);
    })
    }
    else{
      alert("Please elect start date and end date!");
    }
  }

  if (redirect) {
    return <Navigate to={"/bookings"} />
  }

  console.log(vehicleName);
    return (
        <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg w-screen mx-4 my-6">
            <div className="px-4 py-2 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold text-5xl">{vehicleName}</h1>
              </div>
                
              {sliderdata.map((item, index) => (
                <div className={index === slide ? "opacity-100" : "opacity-0"}>
                  <BsArrowLeftSquareFill
                    onClick={previmg}
                    size={50}
                    className="absolute  top-[50%] text-2xl text-black cursor-pointer bg-white -left-4"
                  />
                  {index === slide && (
                    <img
                      className="rounded-md w-96 h-64 overflow-hidden"
                      src={item}
                      alt="sorry"
                    />
                  )}
                  <BsArrowRightSquareFill
                    onClick={nextimg}
                    size={50}
                    className="absolute  top-[50%] text-2xl text-black cursor-pointer left-96 bg-white"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-xl m-3">{discription}</div>
            <div className="grid grid-cols-3">
            <div className="text-2xl text-blue-800 font-bold">
                Vehicle type : {vehicleType}
            </div>
            <div className="text-2xl text-blue-800 font-bold">
                No. of seats : {seats}
            </div>
              <div className=" items-center justify-center">
                  <h1 className="font-bold text-pink-400 text-2xl">Price:   Rs {price} /km</h1>
            </div>
            </div>
           <div className="text-2xl text-blue-800 font-bold">
                Driver Name : {driverName}
            </div>
           <div className="grid grid-cols-3 mt-2 -ml-2">
           <div className="flex gap-2 justify-center">
                <label className="text-xl">From date:</label>
                <input type="date" className="text-xl" value={startDate} onChange={(event)=>setStartDate(event.target.value)}/>
            </div>
            <div className="flex gap-2 justify-center">
                <label className="text-xl">To date:</label>
                <input type="date" className="text-xl" value={endDate} onChange={(event)=>setEndDate(event.target.value)}/>
            </div>
           </div>
              <div>
                <button className="button m-3 font-extrabold text-2xl" onClick={bookVehicle}>Book Now</button>
              </div>
            </div>
          </div>
    )
}