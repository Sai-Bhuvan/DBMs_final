import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Addvehicle() {
  const [vehiclename, setvehicleName] = useState("");
  const [name, Setname] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [seat, setseats] = useState("0");
  const [price, setPrice] = useState("0");
  const [link, setLink] = useState("");
  const [vehicletype, setvehicletype] = useState("");
  const [redirect, setRedirect] = useState(false);

  const ownerId = window.localStorage.getItem('id');
  console.log(ownerId); 

  async function addPhotoByLink(event) {
    event.preventDefault();

    setAddPhotos((prev) => [...prev, link]);
    console.log(addPhotos);
    setLink("");
  }

  function handleVehicleTypeChange(e) {
    setvehicletype(e.target.value);
    console.log(vehicletype)
  }

  async function AddVehicle(event) {
    console.log({vehiclename});
    event.preventDefault();
      await axios.post("http://localhost:4000/save-vehicles", {
        owner: ownerId,
        driverName: name, 
        vehicleName: vehiclename,
        addPhotos: addPhotos,
        description: description,
        seats: seat, 
        vehicleType: vehicletype, 
        price: price,
    },
    ).then(function (response) {  
        setRedirect(true);
    console.log(response.data);
  }); 
  }


  if (redirect) {
    return <Navigate to={"/vehicles"} />
  }
  return (
    <div className=" grid grid-cols-2 bg-slate-100">
      <div className="cols-span-3 p-4 mx-auto items-center">
        <form onSubmit={AddVehicle} className="bg-slate-100 px-4">
          <div className=" m-4 ">
            <div className=" text-pink-400 text-3xl m-5 font-bold my-2 justify-center">
              Traveligo
            </div>
            <div className="  rounded-2xl shadow-2xl justify-center flex flex-col w-full   items-center  transition duration-1000 ease-in">
              <h2 className="p-3 text-3xl font-bold text-blue-400">
                Add Vehicle
              </h2>

              <h3 className="text-xl font-semibold text-blue-400 pt-2">
                Enter the details of new Vehicle
              </h3>

              {/* Inputs */}
              <div className="items-center justify-center mt-2">

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Enter Driver name:
                  </h3>
                  <input
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Driver name"
                    value={name}
                    onChange={(event) => Setname(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-4">
                  <h3 className="text-2xl justify-center">Name of Vehicle:</h3>
                  <input
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Name of vehicle"
                    value={vehiclename}
                    onChange={(event) => setvehicleName(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h1 className="text-2xl justify-center m-3">
                    Select Type of your Vehicle
                  </h1>
                  <select
                    name=""
                    id=""
                    className="border  rounded-md p-2  border-cyan-700 m-1 text-blue-400"
                    value={vehicletype}
                    onChange={handleVehicleTypeChange}
                  >
                    <option className="text-blue-400" selectedvalue='Bike' onSelect={()=>(setvehicletype('Bike'))}>Bike</option>
                    <option className="text-blue-400" selectedvalue='Car' onSelect={()=>(setvehicletype('Car'))}>Car</option>
                    <option className="text-blue-400" selectedvalue='Tempo Traveller' onSelect={()=>(setvehicletype('Tempo Traveller'))}>Tempo Traveller</option>
                    <option className="text-blue-400" selectedvalue='Bus' onSelect={()=>(setvehicletype('Bus'))}>Bus</option>
                  </select>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Enter no of seats:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter no of seats"
                    max={100}
                    min={1}
                    value={seat}
                    onChange={(event) => setseats(event.target.value)}
                  ></input>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Description about condition of vehicle:
                  </h3>
                  <textarea
                    type="text"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="Brief description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>

                <div className="columns-2 gap-8 justify-center m-3">
                  <h3 className="text-2xl justify-center ml-2">
                    Enter price per KM:
                  </h3>
                  <input
                    type="number"
                    className="rounded-md p-2 border  border-cyan-700 m-2"
                    placeholder="enter price"
                    value={price}
                    min={1}
                    max={50}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 m-3">
                  <h3 className="text-2xl justify-center ml-8">Add Photos:</h3>
                 <div className="flex gap-2">
                  <input
                      type="url"
                      className="rounded-md p-2 border  border-cyan-700 m-2"
                      placeholder="add url image of vehicle"
                      value={link}
                      onChange={(event) => setLink(event.target.value)}
                    />
                    <button onClick={addPhotoByLink}>Add</button>
                 </div>
                </div>

              </div>
                <button type="submit" className="text-2xl font-bold text-blue-600 bg-blue-400 bg-opacity-40 rounded-xl">Add Vehicle</button>
              <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
            </div>
          </div>
        </form>
      </div>
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

export default Addvehicle;