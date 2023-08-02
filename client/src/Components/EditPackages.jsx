import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function EditPackages({packagee}) {

    const [packagename, setpackageName] = useState(packagee?.title);
  const [description, setDescription] = useState(packagee?.description);
  const [days, setdays] = useState(packagee?.days);
  const [price, setPrice] = useState(packagee?.price);
  const [places, setplaces] = useState(packagee?.places);
  const [place, setplace] = useState('');
  
  async function addplace(event) {
    event.preventDefault();
    setplaces((prevPlaces) => [...prevPlaces, place]);
    setplace("");
  }

  function editPackage(event) {
    event.preventDefault();
    axios.put('http://localhost:4000/packages', {
            _id: packagee?._id,
            packagename, 
            days,
            description,
            places,
            price,
        })
        .then((res)=>{
            console.log(res);
            alert('Edited successfully!');
            window.location.reload();
        })
  }
  
    return (
        <div className=" bg-slate-100">
      <div className="cols-span-3 p-4 mx-auto items-center">
        <form onSubmit={editPackage} className="bg-slate-100 px-4">
          <div className="m-4 ">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <div className="  rounded-2xl shadow-2xl justify-center flex flex-col w-full   items-center  transition duration-1000 ease-in">
              <h2 className="p-3 text-3xl font-bold text-blue-400">
                Edit Package
              </h2>

              <h3 className="text-xl font-semibold text-blue-400 pt-2">
                Enter the details of new Package
              </h3>

              {/* Inputs */}
              <div className="items-center justify-center mt-2">
                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-8">Name of Package:</h3>
                  <input
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Name of package"
                    value={packagename}
                    onChange={(event) => setpackageName(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-8">
                    Enter no of days:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter no of seats"
                    max={100}
                    min={0}
                    value={days}
                    onChange={(event) => setdays(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-8">
                    Description about the package:
                  </h3>
                  <textarea
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="brief description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-8">
                    Enter price per Person:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter price"
                    value={price}
                    min={0}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 m-3">
                  <h3 className="text-2xl justify-center ml-8">Add Places:</h3>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className="rounded-md p-2 border  border-cyan-700 m-2"
                      placeholder="add places of package"
                      value={place}
                      onChange={(event) => setplace(event.target.value)}
                    />
                    <button onClick={addplace}>Add</button>
                  </div>
                </div>

              </div>
              <button type="submit" className="text-2xl font-bold text-blue-600 bg-blue-400 bg-opacity-40 rounded-xl mb-4">Edit</button>
              <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
    )
}