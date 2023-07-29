import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlaceCard from "./placeCard";

function ShowPlaces() {

  const [places, setPlaces] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/places')
        .then((res)=>{
            setPlaces(res.data);
        })
    }, []);

    console.log(places);

  return (
    <div className="items-center justify-center">
      <div className=" grid grid-cols-2 bg-slate-100 w-screen h-screen">
        <div className="cols-span-3 m-4 ">
          <div className="grid grid-flow-col top-0 m-5">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <Link to={"/places/new"} className="button m-5 text-4xl bg-gradient-to-br from-violet-600 bg-opacity-20 to-violet-200 text-white rounded-2xl hover:scale-110 py-4 px-8">Add new place</Link>
          </div>
          {places.map((place)=>(
            <PlaceCard place={place}/>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default ShowPlaces;