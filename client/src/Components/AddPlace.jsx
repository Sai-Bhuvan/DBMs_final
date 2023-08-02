import axios from "axios";
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Addplace({ place }) {
  var id = useParams();
  id = JSON.stringify(id);

  const ownerId = window.localStorage.getItem("id");
  console.log(ownerId);

  const [title, setTitle] = useState(place?.title);
  const [address, setAddress] = useState(place?.address);
  const [addPhotos, setAddPhotos] = useState(place?.photos);
  const [description, setDescription] = useState(place?.description);
  const [checkIn, setCheckIn] = useState(place?.checkIn);
  const [checkOut, setCheckOut] = useState(place?.checkOut);
  const [price, setPrice] = useState(place?.price);
  const [link, setLink] = useState("");

  const [redirect, setRedirect] = useState(false);

  async function addPhotoByLink(event) {
    event.preventDefault();

    setAddPhotos((prev) => [...prev, link]);
    console.log(addPhotos);
    setLink("");
  }
  if (ownerId === null) {
    alert("Please login to register a place!");
    return <Navigate to={"/"} />;
  }

  async function Addplace(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:4000/save-places", {
        owner: ownerId,
        title: title,
        address: address,
        addPhotos: addPhotos,
        description: description,
        checkIn: checkIn,
        checkOut: checkOut,
        price: price,
      })
      .then(function (response) {
        setRedirect(true);
        console.log(response.data);
      });
  }

  if (redirect) {
    return <Navigate to={"/places"} />;
  }

  return (
    <div className=" grid grid-cols-2 bg-slate-100">
      <form onSubmit={Addplace} className="bg-slate-100 px-4">
        <div className="cols-span-3 p-4 mx-auto items-center">
          <div className=" text-pink-400 text-3xl mb-5 font-bold mx-auto w-full justify-center">
            Traveligo
          </div>
          <div className="  rounded-2xl shadow-2xl justify-center flex flex-col  items-center  transition duration-1000 ease-in">
            <h2 className="p-3 text-3xl font-bold text-blue-400">Add Place</h2>

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

              <div className="grid grid-cols-2 gap-5">
                <h3 className="text-2xl justify-center ml-8">Photos:</h3>
                <div>
                  <input
                    type="url"
                    className="rounded-md p-2 border  border-cyan-700 mr-2"
                    placeholder="add url for the image"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                  />
                  <button onClick={addPhotoByLink}>Add</button>
                </div>
              </div>

              <button
                type="submit"
                className="button m-2 w-1/3 rounded-full text-blue-600 bg-blue-400 bg-opacity-40 text-xl font-bold"
              >
                Add Place
              </button>
            </div>
            <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          </div>
        </div>
      </form>
      <div>
        <div className="grid grid-cols-2 mt-14">
          {addPhotos.length > 0 &&
            addPhotos.map((photo) => (
              <img src={photo} className="w-72 h-48 rounded-lg my-4" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Addplace;
