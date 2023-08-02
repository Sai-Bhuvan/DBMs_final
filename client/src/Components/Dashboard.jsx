import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard() {
    
    const id = window.localStorage.getItem("id");

    const [totalPlaces, setTotalPlaces] = useState(0);
    const [totalVehicles, setTotalVehicles] = useState(0);
    const [totalPackages, setTotalPackages] = useState(0);
    const [myPlaces, setmyPlaces] = useState(0);
    const [myVehicles, setmyVehicles] = useState(0);
    const [myPackages, setmyPackages] = useState(0);
    const [myBookings, setMyBookings] = useState(0);

    useEffect(()=>{
        axios.post('http://localhost:4000/dashboard', {
            id
        })
        .then((res)=>{
            setTotalPlaces(res.data.totalPlaces);
            setTotalVehicles(res.data.totalVehicles);
            setTotalPackages(res.data.totalPackages);
            setmyPlaces(res.data.myPlaces);
            setmyVehicles(res.data.myVehicles);
            setmyPackages(res.data.myPackages);
            setMyBookings(res.data.myBookings);
        })
    }, [])


    return(
        <div className="bg-slate-200 w-screen h-screen grow m">
            <div>
                <h1 className="text-6xl font-bold text-pink-400 text-center">Dashboard</h1>
            </div>
            <h1 className="text-pink-400 font-bold text-2xl mx-8">Total numbers hosted on website</h1>
            <div className="grid grid-cols-3 px-8 py-4 gap-4">
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">Total Places </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{totalPlaces}</p>
                </div>
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">Total Vehicles </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{totalVehicles}</p>
                </div>
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">Total Packages </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{totalPackages}</p>
                </div>
            </div>
            <h1 className="text-pink-400 font-bold text-2xl mx-8">Total numbers hosted by me</h1>
            <div className="grid grid-cols-3 px-8 py-4 gap-4">
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">My Places </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{myPlaces}</p>
                </div>
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">My Vehicles </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{myVehicles}</p>
                </div>
                <div className="bg-white rounded-xl items-center px-2 py-4">
                    <h1 className="text-center">My Packages </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{myPackages}</p>
                </div>
            </div>
            <h1 className="text-pink-400 font-bold text-2xl mx-8">Total bookings made by me</h1>
            <div className="bg-white rounded-xl items-center px-2 py-4 mx-8 my-2">
                    <h1 className="text-center">My Bookings </h1>
                    <p className="text-center text-4xl text-pink-400 font-bold">{myBookings}</p>
                </div>
        </div>
    )
}