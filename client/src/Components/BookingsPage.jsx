import axios from "axios"
import { useEffect, useState } from "react"
import PlaceBooked from "./PlaceBooked";
import VehicleBooked from "./VehicleBooked";
import BookedPackage from "./BookedPackage";

export default function BookingsPage() {

    const [places, setPlaces] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [packages, setPackages] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/bookings')
        .then((res)=>{
            setPlaces(res?.data?.places);
            setVehicles(res?.data?.vehicles);
            setPackages(res?.data?.packages);
        })
    }, [])

    console.log(places[0])
    return (
        <div>
            <div className="bg-gray-400 bg-opacity-20">
           {places.length > 0 && (
           <div>
                <h1 className="text-pink-600 font-bold text-6xl mx-auto self-center items-center ml-6">Places</h1>
                {places.map((place)=>(
                    <PlaceBooked place={place}/>
                ))}
            </div>)}
            </div>
            <div className="bg-gray-400 bg-opacity-20">
           {vehicles.length > 0 && (
           <div>
                <h1 className="text-pink-600 font-bold text-6xl mx-auto self-center items-center ml-6">Vehicles</h1>
                {vehicles.map((vehicle)=>(
                    <VehicleBooked vehicle={vehicle}/>
                ))}
            </div>)}
            </div>
            <div className="bg-gray-400 bg-opacity-20">
           {packages.length > 0 && (
           <div>
                <h1 className="text-pink-600 font-bold text-6xl mx-auto w-full self-center items-center ml-8">Packages</h1>
                {packages.map((packagee)=>(
                    <BookedPackage packagee={packagee}/>
                ))}
            </div>)}
            </div>
        </div>
    )
}