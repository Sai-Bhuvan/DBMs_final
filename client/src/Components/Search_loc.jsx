import React from "react";

const Search_loc = () => {
  return (
    <div>
      <div className="absalute  top-0 w-full h-full flex flex-col justify-center text-center p-4 m-4">
        <h1>First class travel</h1>
        <h2>Top 1% locations in the world</h2>
        <form
          action=""
          className="flex justify-between items-center max-v-[700] mx-auto  w-full border rounded-full p-1 text-black bg-gray-200/90"
        >
          <div className="m-5 border-solid rounded-full border-indigo-500/75">
            <input
              type="text"
              placeholder="search destinations"
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
            />
          </div>
          <div>
            <button>
              
              Hi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search_loc;
