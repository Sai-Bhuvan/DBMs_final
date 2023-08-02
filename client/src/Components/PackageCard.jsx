import axios from "axios";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import BookedPackage from "./BookedPackage";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import EditPackages from "./EditPackages";

export default function PackageCard({packagee}) {
  
    const sliderdata = packagee?.photos;
    const length = sliderdata?.length;
    const title = packagee?.title;
    const places = packagee?.places;
    const price = packagee?.price;
    const days = packagee?.days
    const [slide, setslide] = useState(0);
    const discription =packagee?.description;
    const customer = window.localStorage.getItem('email');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [edit, setEdit] = useState(false);

    const cust_id = window.localStorage.getItem("id");
    const isOwner = cust_id === packagee.owner;
    console.log(isOwner);


    async function bookPackage(event) {
      event.preventDefault();
      console.log({id: packagee?._id});
      if (startDate !== "" && endDate !== "") {
        axios.post('http://localhost:4000/bookings', {
        customer: customer,
        what: 'package',
        VehicleId: null,
        PlaceId: null,
        PackageId: packagee._id,
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

    function deletePlace(event) {
      event.preventDefault();
      axios
        .post("http://localhost:4000/delete-package", {
          _id: packagee?._id,
        })
        .then((res) => {
          console.log(res);
        });
    }

    
    function reloadd() {
      window.location.reload();
  }

  const previmg = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextimg = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };

  if (redirect) {
    return <Navigate to={"/bookings"} />
  }
    return (
        <div>
          <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg w-screen mx-4 my-6">
            <div className="px-4 py-2 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold text-5xl">{title}</h1>
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
            <div className="grid grid-cols-2">
            <div className="text-2xl text-blue-800 font-bold">
                Days : {days}&nbsp;days
            </div>
              <div className="">
                  <h2 className="font-bold text-pink-400 text-2xl grow w-full">Price: Rs {price} /person</h2>
            </div>
            </div>
            <div className="flex gap-4 justify-center">
                <p className="text-2xl font-bold text-blue-800 mt-3">Places:</p>
                {places.map((place)=>(
                    <li>{place}</li>
                ))}
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
           <div className="flex gap-4 justify-center">
              <div>
                <button
                  className="button m-3 font-extrabold text-2xl"
                  onClick={bookPackage}
                >
                  Book Now
                </button>
              </div>
              <div>
                {isOwner && (
                  <button
                    onClick={deletePlace}
                    className="button m-3 font-extrabold text-2xl"
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                )}
              </div>
              <div>
                {isOwner && (
                  <button
                    onClick={() => setEdit(true)}
                    className="button m-3 font-extrabold text-2xl"
                  >
                    <BiEdit></BiEdit>
                  </button>
                )}
              </div>
            </div>
            </div>
          </div>
          {edit && (
        <div className="ml-20 w-full ">
          <EditPackages packagee={packagee} reloadd={reloadd}/>
        </div>
      )}
        </div>
    )
}