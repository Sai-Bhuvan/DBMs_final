import { Navigate } from "react-router-dom";
import Destinations from "./Destinations";
import Features from "./Features";
import Footer from "./Footer";
import Gallary from "./Gallary";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
// import Search_loc from "./Search_loc";

export default function HomePage() {
    if(window.localStorage.getItem('email') === "undefined"){
        return <Navigate to={"/"} />
      }
    return (
        <div>
            <Navbar />
            <Hero />
          <Destinations />
          <Features />
       {/* <Search_loc /> */}
          <Search />
          <Gallary />
          <Footer />
        </div>
    )
   
}