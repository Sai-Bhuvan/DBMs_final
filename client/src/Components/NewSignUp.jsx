import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

function Newsignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("Male");
    const [redirect, setRedirect] = useState("");

    async function SignUpUser(event) {
        event.preventDefault();

       if (name && email && password) {
        try {
                if(password === confirmPassword){
                    await axios.post('http://localhost:4000/signup', {
            name,
            email,
            password
            })
            .then(function (response) {
                console.log(response);
            });
            alert("Signed up succesfully! Please login now.");
            setRedirect('/login');
        }
        else{
            alert("Password does not match!");
        }
            
        } catch (err) {
            console.log(err);
            alert("Sign up unsuccessful. Please check the credentials entered and try again later.");
        }
       }
       else{
        alert("Please do not leave any field empty!")
       }
    };

    function handleAddrTypeChange(e) {
        setGender(e.target.value);
        console.log(gender)
      }

      if (redirect) {
        return <Navigate to={redirect} />
        }

  return (
    <form className="bg-slate-200  mx-auto h-screen" onSubmit={SignUpUser}>
      <div className="cols-span-3 p-4 mx-auto">
        <div className=" text-pink-400 text-3xl m-2 font-bold text-center">Traveligo</div>
        <div className="rounded-2xl shadow-3xl pb-4 flex flex-col w-1/4 items-center max-w-4xl transition duration-1000 ease-in bg-white bg-opacity-40 self-center mx-auto">
          <h2 className="p-3 text-3xl font-bold text-blue-400">
            Welcome to TRAVELIGO
          </h2>

          <h3 className="text-xl font-semibold text-pink-400  pt-2">
            Create Account!
          </h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="icon">
              <FaFacebook className="text-black font-medium text-lg" />
            </div>
            <div className="icon">
              <FaGithub className="text-black font-medium text-lg" />
            </div>
            <div className="icon">
              <FaLinkedin className="text-black font-medium text-lg" />
            </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center mt-2">
            <input
              type="text"
              className="rounded-md p-2 border  border-cyan-700 m-2 w-60"
              placeholder="Name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
            ></input>

            <input
              type="email"
              className="rounded-md p-2 border  border-cyan-700 m-2 w-60"
              placeholder="Email"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            ></input>
            <input
              type="password"
              className="rounded-md p-2 border  border-cyan-700 m-2 w-60"
              placeholder="Password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            ></input>
            <input
              type="password"
              className="rounded-md p-2 border  border-cyan-700 m-2 w-60"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event)=>setConfirmPassword(event.target.value)}
            ></input>
            <div>
              <select
                name=""
                id=""
                className="border  rounded-md p-2  border-cyan-700 m-2 text-blue-400 w-60"
                onChange={handleAddrTypeChange}>
                <option className="text-blue-400" selectedvalue='Male' onSelect={()=>(setGender('Male'))}>Male</option>
                <option className="text-blue-400" value='Female' onSelect={()=>(setGender('Female'))}>Female</option>
                <option className="text-blue-400" value='others' onSelect={()=>(setGender('Others'))}>Others</option>
              </select>
            </div>
            <button type="submit" className="button m-2 bg-blue-400 bg-opacity-40 text-blue-600 font-bold text-xl rounded-lg px-4 py-2">Sign Up</button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <div className="flex gap-2">
          <p className="text-blue-400 mt-4 text-lg">Already have an account?</p>
          <Link to={'/login'}>
            <p className="text-blue-700 mt-4 text-lg font-medium cursor-pointer">
            Sign In
          </p>
          </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newsignup;