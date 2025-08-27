import React from "react";
import spaImage from "../assets/spato.jpg"; 
import Card from "./Card";
import Card2 from "./Cardmain";
import { Link } from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'

const HomePage = () => {
  return (
    
    <section className="bg-[#7EDC90]">
        <Nav/>
        <div>
            
        </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <p className="text-sm text-gray-700 italic mb-2">
            • Step into a world of calm and care
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Experience the ultimate <br />
            escape into <span className="italic font-serif text-gray-800">relaxation</span> <br />
            and expert care
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Every detail is thoughtfully designed to help you unwind—from the
            tranquil ambiance to our skilled therapists and holistic treatments.
            Whether you seek deep relaxation, skin rejuvenation, or stress
            relief, we offer a personalized experience.
          </p>

          {/* Button */}
          <Link to="/book-appointment">
          <button className="mt-6 px-6 py-3 bg-orange-900 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            Book Now
          </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={spaImage}
            alt="Spa Woman"
            className="w-full md:w-[420px] lg:w-[480px] rounded-lg object-cover"
          />
        </div>
      </div>
      <Card/>
      <Card2/>
      <Footer/>
    </section>
  );
};

export default HomePage;
