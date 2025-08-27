import React from "react";
import doImage from "../../assets/do.jpg";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-gray-100 p-10 flex flex-col justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
            🏷️
          </div>
          <h3 className="text-xl font-semibold">Special Promo</h3>
        </div>
        <p className="text-gray-600 mt-4">
          Our commitment to quality and services ensure our clients happy. With
          years of experiences and continuing education, our dedicated staff is
          ready to serve your beauty needs. We're happy to help you decide the
          best look.
        </p>
      </div>

      {/* Card 2 (Background Image with opacity) */}
      <div className="relative flex flex-col justify-center">
        {/* Background with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${doImage})` }}
        ></div>

        {/* Content */}
        <div className="relative bg-black/40 p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl">
              🏷️
            </div>
            <h3 className="text-xl font-semibold text-white">Get Discount 50%</h3>
          </div>
          <p className="text-white mt-4">
            Our commitment to quality and services ensure our clients happy. With
            years of experiences and continuing education, our dedicated staff is
            ready to serve your beauty needs. We're happy to help you decide the
            best look.
          </p>
        </div>
      </div>

      {/* Card 3 (Paragraph instead of button) */}
      <div className="bg-gray-100 p-10 flex flex-col justify-center">
        
        <p className="text-gray-600 text-lg leading-relaxed">
         Our commitment to quality and relaxation ensures our clients leave refreshed and happy. 
With years of experience in spa therapies and continuous training, our dedicated team 
is ready to serve your wellness needs. We are here to help you choose the best 
treatments for your body, mind, and soul.
.
        </p>
      </div>
    </div>
    
  );
};

export default Card;
