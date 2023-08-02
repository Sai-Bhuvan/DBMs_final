import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

function ShowPackage() {

  const [packages, setPackages] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/packages')
        .then((res)=>{
            setPackages(res.data);
        })
    }, []);

    console.log(packages);

  return (
    <div className="items-center justify-center">
      <div className=" grid grid-cols-2 bg-slate-100 w-screen h-screen">
        <div className="cols-span-3 m-4 ">
          <div className="grid grid-flow-col top-0 m-5">
            <div className=" text-pink-400 text-3xl m-5 font-bold   my-6 justify-center">
              Traveligo
            </div>
            <Link to={"/packages/new"} className="button m-5 text-4xl bg-gradient-to-br from-violet-600 bg-opacity-20 to-violet-200 text-white rounded-2xl hover:scale-110 py-4 px-8">Add new package</Link>
          </div>
          {packages.map((packagee)=>(
            <PackageCard packagee={packagee}/>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default ShowPackage;