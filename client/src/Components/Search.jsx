import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
// import { MdUotlineTravelExplore } from "react-icons/md";
// import { IoEarthSharp } from "react-icons/io";
import { AiFillSecurityScan } from "react-icons/ai";

function Search() {
  return (
    <div className="max-w-[1400px] mx-10 grid lg:grid-cols-5 px-4 py-16">
      <div className="lg:col-span-3 flex flex-col justify-evenly">
        <h1>Luxuary trips at low price</h1>
        <p className="py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          similique at quam explicabo sunt obcaecati a voluptas, id ipsam sequi
          magni, dolore provident deleniti reprehenderit eius fuga. Temporibus,
          suscipit laborum?
        </p>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center m-4">
            <button>
              <RiCustomerService2Fill size={40} />
            </button>
            <div className="m-4">
              <h3 className="py-2">CUstomer Support</h3>
              <p>24 X 7 Service</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center m-4">
            <button>
              <AiFillSecurityScan size={40} />
            </button>
            <div className="m-4">
              <h3 className="py-2">Explore the world</h3>
              <p>Tour to your dream locations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:cols-span-2 flex flex-col justify-center w-full ">
        <div className="border text-center py-4 px-4">
          <p className="py-2">Book now to get aditonal</p>
          <p className="py-1">25% Discounts</p>
          <p className="bg-gray-800 text-gray-50 py-2 m-2">Confirm your seat</p>
        </div>
        <form action="" className="w-full ">
          <div className="flex flex-col m-2 w-full">
            <label htmlFor="">Destination</label>
            <select name="" id="" className="border  rounded-md p-2">
              <option>hello</option>
              <option>bye</option>
            </select>
          </div>
          <div className="flex flex-col m-2 w-full">
            <label htmlFor=""> CheckIn</label>
            <input type="date" className="border  rounded-md p-2 " />
          </div>
          <div className="flex flex-col m-2 w-full">
            <label htmlFor=""> CheckOut</label>
            <input type="date" className="border  rounded-md p-2 " />
          </div>
          <div>
            <button className="w-full m-4">Check Availability</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
