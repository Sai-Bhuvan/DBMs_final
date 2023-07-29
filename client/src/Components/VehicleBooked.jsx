import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function VehicleBooked({vehicle}) {
    const sliderdata = vehicle.VehicleId.photos;
    const [slide, setslide] = useState(0);
    const length = sliderdata?.length;
    
    const previmg = () => {
        setslide(slide === length - 1 ? 0 : slide + 1);
      };
      const nextimg = () => {
        setslide(slide === 0 ? length - 1 : slide - 1);
      };

    return (
        <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5">
            <div className="flex gap-4 text-2xl font-bold ml-6">
                    Booking id:
                    <p className="text-pink-400 text-2xl">{vehicle?._id}</p>
                </div>
            <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg w-screen mx-4 my-6">
            <div className="px-4 py-2 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold text-5xl">{vehicle.VehicleId.VehicleName}</h1>
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
            <div className="-ml-20">
              <div className="text-xl my-3">{vehicle.VehicleId.discription}</div>
            <div className="grid grid-cols-2 -ml-40">
            <div className="text-2xl font-bold flex gap-4">
                Vehicle type : <p className="text-2xl text-green-600">{vehicle.VehicleId.vehicleType}</p>
            </div>
            <div className="text-2xl font-bold flex gap-4">
                No. of seats : <p className="text-2xl text-green-600">{vehicle.VehicleId.seats}</p>
            </div>
              
           <div className="text-2xl text-blue-800 font-bold flex gap-4">
                Driver Name : <p className="text-2xl text-green-600">{vehicle.VehicleId.driverName}</p>
            </div>
            </div>
           
           <div className="grid grid-cols-2 mt-2 -ml-40">
           <div className="flex gap-2 justify-center font-bold text-2xl -ml-28">
                <label className="text-2xl">From date:</label>
                <p className="text-green-600 font-bold text-2xl">{vehicle?.endDate}</p>
            </div>
            <div className="flex gap-2 justify-center font-bold">
                <label className="text-2xl">To date:</label>
                <p className="text-green-600 font-bold text-2xl">{vehicle?.endDate}</p>
            </div>
           </div>
            </div>
           <div className=" items-center justify-center flex gap-4 w-full self-center mx-auto">
                  <h1 className="font-bold text-pink-400 text-2xl -ml-96">Price:     </h1>
                <p className="text-2xl text-pink-400">Rs {vehicle.VehicleId.price} /km</p>
            </div>
          </div>
        </div>
    )
}