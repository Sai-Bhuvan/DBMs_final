import axios from "axios";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import Addplace from "./AddPlace";
// import { Addplace } from "./AddPlace";

export default function PlaceCard({ place }) {
  const sliderdata = place?.photos;
  const length = sliderdata?.length;
  const name = place?.title;
  const price = place?.price;
  const checkIn = place?.checkIn;
  const checkOut = place?.checkOut;
  const [slide, setslide] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const customer = window.localStorage.getItem("email");
  const cust_id = window.localStorage.getItem("id");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [edit, setEdit] = useState(false);
  const isOwner = cust_id === place.owner;
  console.log(isOwner);

  async function bookPlace(event) {
    console.log({ id: place?._id });
    if (startDate !== "" && endDate !== "") {
      axios
        .post("http://localhost:4000/bookings", {
          customer: customer,
          what: "place",
          VehicleId: null,
          PlaceId: place._id,
          PackageId: null,
          startDate: startDate,
          endDate: endDate,
        })
        .then((res) => {
          console.log(res);
          setRedirect(true);
        });
    } else {
      alert("Please elect start date and end date!");
    }
  }

  function deletePlace(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/delete-place", {
        _id: place?._id,
      })
      .then((res) => {
        console.log(res);
      });
  }

  const previmg = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextimg = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };
  const discription = place?.description;

  if (redirect) {
    return <Navigate to={"/bookings"} />;
  }
  return (
    <div>
      {!edit && (
        <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg w-screen mx-4 my-6">
          <div className="px-4 py-2 relative grid grid-flow-row w-96">
            <div className=" grid grid-flow-col ">
              <h1 className=" font-bold text-5xl">{name}</h1>
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
                Check-in time : {checkIn}
              </div>
              <div className="text-2xl text-blue-800 font-bold">
                Check-in time : {checkOut}
              </div>
              <div className=" items-center justify-center">
                <h1 className="font-bold text-pink-400 text-2xl">
                  Price: Rs {price} /night
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2">
              <div className="flex gap-4 justify-center">
                <label className="text-2xl">Check-in date:</label>
                <input
                  type="date"
                  className="text-2xl"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </div>
              <div className="flex gap-4 justify-center">
                <label className="text-2xl">Check-in date:</label>
                <input
                  type="date"
                  className="text-2xl"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <div>
                <button
                  className="button m-3 font-extrabold text-2xl"
                  onClick={bookPlace}
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
                    // to={"/places/new"}
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
      )}
      {edit && (
        <div className="ml-20 w-full mx-1/2">
          <Addplace place={place} />
        </div>
      )}
    </div>
  );
}
