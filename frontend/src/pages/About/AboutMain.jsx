import React from "react";
import massageGirl from "../../assets/massage3.jpg"; 
import { FaHeart, FaGem } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <section className="bg-[#f7f1e7] py-16 px-6 md:px-16">
      <h1 className="text-2xl font-bold text-center mb-10 text-[#9D7C5B]">
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* Left Side Content */}
        <div>
          <p className="text-sm text-gray-600 italic mb-2">• Why choose us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Why our clients trust us for their{" "}
            <span className="italic text-[#7EDC90]">wellness and care</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Trust is built through our unwavering commitment to your health and
            well-being. We combine expert knowledge with personalized care.
          </p>

          {/* Points */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#7EDC90] text-white w-10 h-10 flex items-center justify-center rounded-full">
                <FaHeart size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Holistic Approach to Wellness
                </h3>
                <p className="text-gray-600">
                  We treat the whole you—mind, body, and spirit—through
                  sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#7EDC90] text-white w-10 h-10 flex items-center justify-center rounded-full">
                <FaGem size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Experienced & Caring Team
                </h3>
                <p className="text-gray-600">
                  Our certified therapists are not only skilled but genuinely
                  committed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src={massageGirl}
            alt="Massage"
            className="rounded-[40px] object-cover w-full h-[450px]"
          />
        </div>
      </div>

      {/* Center Button */}
      <div className="flex justify-center mt-10">
        <Link to="/about" 
    
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium cursor-pointer 
                           hover:bg-white hover:shadow-xl hover:scale-105 hover:text-green-500 duration-500 border-2 border-green-400 transition">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default AboutMain