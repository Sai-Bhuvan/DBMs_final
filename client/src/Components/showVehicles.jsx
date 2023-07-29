import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ShowVehicles(vehicle) {

    const [vehicles, setVehicles] = useState([]);
  
    useEffect(()=>{
        axios.get('http://localhost:4000/vehicles')
        .then((res)=>{
            setVehicles(res.data);
        })
    }, []);

    console.log(vehicles);

    return (
        <div className="items-center justify-center">
      <div className=" grid grid-cols-2 bg-slate-100 w-screen h-screen">
        <div className="cols-span-3 m-4 ">
          <div className="grid grid-flow-col  sticky top-0 m-5">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <Link to={"/vehicles/new"} className="button m-5 text-4xl bg-gradient-to-br from-violet-600 bg-opacity-20 to-violet-200 text-white rounded-2xl hover:scale-110 py-4 px-8">Add new vehicle</Link>
          </div>
          {vehicles.map((vehicle)=>(
            <VehicleCard vehicle={vehicle}/>
          ))}
          
        </div>
      </div>
    </div>
    )
}