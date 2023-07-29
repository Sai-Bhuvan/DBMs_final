import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function BookedPackage({packagee}) {

  const sliderdata = packagee?.PackageId?.photos;
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
                    <p className="text-pink-400 text-2xl">{packagee?._id}</p>
                </div>
            <div className="bg-slate-500 bg-opacity-20 rounded-lg m-5 grid grid-flow-col gap-3 shadow-lg w-screen mx-4 my-6">
            <div className="px-4 py-2 relative grid grid-flow-row">
              <div className=" grid grid-flow-col ">
                <h1 className=" font-bold text-5xl">{packagee?.PackageId?.title}</h1>
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
            <div>
              <div className="text-xl m-3">{packagee?.PackageId?.discription}</div>
            <div className="grid grid-cols-2">
            <div className="text-2xl text-blue-800 font-bold">
                Days : {packagee?.PackageId?.days}&nbsp;days
            </div>
              <div className="">
                  <h2 className="font-bold text-pink-400 text-2xl grow w-full">Price: Rs {packagee?.PackageId?.price} /person</h2>
            </div>
            </div>
            <div className="flex gap-4 justify-center -ml-40">
                <p className="text-2xl font-bold mt-3">Places:</p>
                {packagee?.PackageId?.places.map((place)=>(
                    <li className="text-green-600 text-xl">{place}</li>
                ))}
            </div>
           <div className="grid grid-cols-3 mt-2 -ml-2">
           <div className="flex gap-2 justify-center">
                <label className="text-2xl font-bold">From date:</label>
                <p className="text-2xl text-green-600">{packagee?.startDate}</p>
            </div>
            <div className="flex gap-2 justify-center">
                <label className="text-2xl font-bold">To date:</label>
                <p className="text-2xl text-green-600">{packagee?.endDate}</p>
            </div>
           </div>
           <div className="text-6xl text-pink-600 mx-auto align-bottom items-center self-center ml-40">
                Enjoy your trip!!
            </div>
            </div>
          </div>
        </div>
    )
}