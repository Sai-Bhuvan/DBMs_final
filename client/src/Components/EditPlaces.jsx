import axios from "axios";
import { useState } from "react";

export default function EditPlaces({place}) {

    const [title, setTitle] = useState(place?.title);
    const [address, setAddress] = useState(place?.address);
    const [description, setDescription] = useState(place?.description);
    const [checkIn, setCheckIn] = useState(place?.checkIn);
    const [checkOut, setCheckOut] = useState(place?.checkOut);
    const [price, setPrice] = useState(place?.price);

    function EditPlace(event) {
        event.preventDefault();
        axios.put('http://localhost:4000/places', {
            _id: place?._id,
            title, 
            address,
            description,
            checkIn,
            checkOut,
            price,
        })
        .then((res)=>{
            console.log(res);
            alert('Edited successfully!');
            window.location.reload();
        })
    }

    return (
        <div className="bg-slate-100">
      <form onSubmit={EditPlace} className="bg-slate-100 px-4">
        <div className="cols-span-3 p-4 mx-auto items-center">
          <div className=" text-pink-400 text-3xl mb-5 font-bold mx-auto w-full justify-center">
            Traveligo
          </div>
          <div className="  rounded-2xl shadow-2xl justify-center flex flex-col  items-center  transition duration-1000 ease-in">
            <h2 className="p-3 text-3xl font-bold text-blue-400">Edit Place</h2>

            <h3 className="text-xl font-semibold text-blue-400 pt-2">
              Enter the details of new place
            </h3>

            {/* Inputs */}
            <div className="flex flex-col items-center mt-2">
              <div className="columns-2 gap-8 justify-center">
                <h3 className="text-2xl justify-center">Name:</h3>
                <input
                  type="text"
                  className="rounded-md p-2 border justify-center border-cyan-700 m-2"
                  placeholder="Name of place"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                ></input>
              </div>
              <div className="columns-2 gap-8 justify-between">
                <h3 className="text-2xl">Address:</h3>
                <input
                  type="text"
                  className="rounded-md p-2 border  border-cyan-700 m-2"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                ></input>
              </div>

              <div className="columns-2 gap-8 justify-center">
                <h3 className="text-2xl justify-center ml-2">Description:</h3>
                <textarea
                  type="text"
                  className="rounded-md p-2 border  border-cyan-700 m-2"
                  placeholder="Brief description about your place"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>

              <div className="columns-2 gap-8 justify-center">
                <h3 className="text-2xl justify-center">Check-In:</h3>
                <input
                  type="text"
                  className="rounded-md p-2 border  border-cyan-700 m-2"
                  placeholder="Enter check-in time"
                  value={checkIn}
                  onChange={(event) => setCheckIn(event.target.value)}
                ></input>
              </div>

              <div className="columns-2 gap-8 justify-center">
                <h3 className="text-2xl justify-center">Check-Out:</h3>
                <input
                  type="text"
                  className="rounded-md p-2 border  border-cyan-700 m-2"
                  placeholder="Enter check-out time"
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                ></input>
              </div>

              <div className="columns-2 gap-8">
                <h3 className="text-2xl -ml-28">Price:</h3>
                <input
                  type="number"
                  className="rounded-md p-2 border  border-cyan-700 m-2"
                  placeholder="Price"
                  min={0}
                  max={100000}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>


              <button
                type="submit"
                className="button m-2 w-1/3 rounded-full text-blue-600 bg-blue-400 bg-opacity-40 text-xl font-bold"
              >
                Edit
              </button>
            </div>
            <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          </div>
        </div>
      </form>
      <div>
      </div>
    </div>
    )
}