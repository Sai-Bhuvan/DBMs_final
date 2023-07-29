import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function PlaceBooked({place}) {
    
    const sliderdata = place?.PlaceId?.photos;
    const [slide, setslide] = useState(0);
    const length = sliderdata?.length;
    
    const previmg = () => {
        setslide(slide === length - 1 ? 0 : slide + 1);
      };
      const nextimg = () => {
        setslide(slide === 0 ? length - 1 : slide - 1);
      };

      console.log(place?.PlaceId?.startDate)
    
    return (<div className="bg-slate-500 bg-opacity-20 rounded-lg m-5">
                <div className="flex gap-4 text-2xl font-bold ml-6">
                    Booking id:
                    <p className="text-pink-400 text-2xl">{place?._id}</p>
                </div>
              <div className=" grid grid-flow-col ml-6">
                <h1 className=" font-bold text-5xl">{place?.PlaceId?.title}</h1>
              </div>
        <div className="grid-flow-col shadow-lg w-screen mx-4 my-6 flex gap-8">
            <div className="px-4 py-2 relative grid grid-flow-row w-96">
                
              {sliderdata?.map((item, index) => (
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
            <div>
              <div className="text-xl m-3">{place?.PlaceId?.discription}</div>
            <div className="grid grid-cols-2">
            <div className="text-2xl font-bold flex gap-4">
                Check-in time : <p className="text-green-600 font-bold text-2xl">{place?.PlaceId?.checkIn}</p>
            </div>
            <div className="text-2xl font-bold flex gap-4">
                Check-out time : <p className="text-green-600 font-bold text-2xl">{place?.PlaceId?.checkOut}</p>
            </div>
              
            </div>
           <div className="grid grid-cols-2 mt-2 gap-8 font-bold">
           <div className="flex gap-4 justify-center">
                <label className="text-2xl">Check-in date:</label>
                <p className="text-green-600 font-bold text-2xl">{place?.startDate}</p>
            </div>
            <div className="flex gap-4 justify-center">
                <label className="text-2xl">Check-in date:</label>
                <p className="text-green-600 font-bold text-2xl">{place?.endDate}</p>
            </div>
           </div>
           <div className=" items-center justify-center">
                  <h1 className="font-bold text-pink-400 text-2xl mt-2">Price:   Rs {place?.PlaceId?.price} /night</h1>
            </div>
            <div className="text-6xl text-pink-600 mx-auto align-bottom items-center self-center ml-40">
                Happy Staying!
            </div>
            </div>
          </div>
          </div>
    )
}