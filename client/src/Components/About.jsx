import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className=" bg-slate-100  h-full w-full   ">
        <div className="grid grid-cols-2">
          <div className=" text-pink-400 text-3xl m-5 font-bold ">
            Traveligo
          </div>
          <div className="flex space-x-2 m-4 items-center justify-center right-0">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaGithub />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="bg-slate-100 m-5 rounded-2xl shadow-2xl flex flex-col w-full h-full  items-center justify-center max-w-6xl max-h-8xl transition duration-1000 ease-out mx-auto">
          <h2 className="p-3 text-3xl m-3 font-bold text-red-600">
            About our app
          </h2>
          <h2 className="p-3 text-3xl m-3 font-bold text-red-400">
            Welcome to Traveligo - Your Ultimate Travel Management App!
          </h2>
          <div className="m-5 text-blue-400 text-2xl ">
            At Traveligo, we bring you a seamless travel booking experience like
            never before. Whether you're planning a weekend getaway or a
            month-long adventure, we've got you covered with a wide array of
            options to choose from. Our user-friendly platform allows you to
            book hotels, homestays, vehicles, and exciting packages at your
            convenience.
          </div>
          <div className="m-5 text-blue-400 text-2xl">
            Discover Your Dream Destinations: 
            Traveligo offers an extensive list
            of destinations, from exotic beaches to breathtaking mountains,
            charming countryside to bustling cities. With our diverse collection
            of places, you can explore the world with just a few taps.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Transparent and Competitive Prices: We believe in fair pricing and
            transparency, which is why we provide prices that are relative to
            the services offered. Compare different options and select the one
            that best fits your budget and preferences. No hidden fees or
            surprises - just honest, upfront pricing. User-Curated
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Places: At Traveligo, we encourage our users to share their favorite
            travel destinations. If you stumble upon a hidden gem or an
            off-the-beaten-path location, you can easily add it to our database.
            Your contributions help build a vibrant and diverse community of
            travelers.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Homestays with Personal Touch: We understand the allure of homely
            accommodations during your travels. Homestay owners can list their
            properties and packages, complete with personal touches that make
            your stay memorable. Experience the warmth of local hospitality with
            our handpicked homestays.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Effortless Vehicle Rental: Need a reliable ride to explore your
            destination? Traveligo connects you with local drivers who offer a
            range of vehicles, from compact cars to spacious vans. Renting a
            vehicle has never been easier, ensuring you have the freedom to go
            wherever your heart desires.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Customizable Travel Packages: Tailor your travel experience with our
            customizable packages. Homestay owners can create unique packages
            that include accommodation, activities, and local tours, providing
            you with an immersive experience of the culture and traditions of
            your chosen destination.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Travel with Confidence: Traveligo is committed to ensuring your
            safety and satisfaction. We only partner with trusted hosts,
            drivers, and service providers who meet our quality standards. Your
            comfort and security are our top priorities.
          </div>
          <div className="m-5 text-blue-400 text-2xl ">
            Begin Your Journey with Traveligo Whether you're a wanderlust-driven
            solo traveler or a family seeking the perfect vacation, Traveligo is
            here to make your travel dreams come true. Download our app today
            and embark on unforgettable journeys filled with wonderful memories.
            Start exploring with Traveligo, your trusted travel companion!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;