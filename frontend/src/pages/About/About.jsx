import React from "react";
import massage1 from "../../assets/massage1.jpg"
import massage2 from "../../assets/spa.jpg"
import { FaBullseye, FaInfinity, FaCube } from "react-icons/fa";
import Us from "./About2";
import Nav from '../Nav'
import Footer from '../Footer'
const About = () => {
  return (
    <div>
      <Nav/>
    <section className="bg-[#7EDC90] py-16 px-6 md:px-16">
      {/* Top Text */}
      <div className="max-w-5xl mx-auto text-center md:text-left mb-12">
        <p className="text-green-700 font-medium mb-2">• Our approach</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Inspiring wellness, shaping a{" "}
          <span className="italic text-green-700">healthier tomorrow</span>
        </h2>
        <p className="text-gray-600 mt-6">
          Trust is built through our unwavering commitment to your health and
          well-being. We combine expert knowledge with personalized care to
          deliver treatments that are not only effective but also deeply
          relaxing.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-6">
          <img
            src={massage1}
            alt="Massage therapy"
            className="rounded-2xl shadow-md object-cover w-full h-64"
          />
          <img
            src={massage2}
            alt="Spa relaxation"
            className="rounded-2xl shadow-md object-cover w-full h-64"
          />
        </div>

        {/* Right Side - Mission/Vision/Goal */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FaBullseye className="text-green-700 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our mission
              </h3>
              <p className="text-gray-600">
                To provide a sanctuary where holistic wellness meets mindful
                relaxation. Through personalized care, natural therapies, and a
                tranquil.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaInfinity className="text-green-700 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our vision
              </h3>
              <p className="text-gray-600">
                To provide a sanctuary where holistic wellness meets mindful
                relaxation. Through personalized care, natural therapies, and a
                tranquil.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCube className="text-green-700 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our goal</h3>
              <p className="text-gray-600">
                To provide a sanctuary where holistic wellness meets mindful
                relaxation. Through personalized care, natural therapies, and a
                tranquil.
              </p>
            </div>
          </div>
        </div>
       

      </div>
      
    </section>
   <Us/>
   <Footer/>
   </div>
  );
};

export default About
