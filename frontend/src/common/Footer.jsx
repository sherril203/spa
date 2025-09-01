import { FaFacebookF, FaTwitter, FaYoutube, FaGooglePlusG } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Links</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/home" className="hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="hover:text-orange-500">About us</a></li>
             <li><a href="/services" className="hover:text-orange-500">Services</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            <li><a href="/testinomial" className="hover:text-orange-500">Testinomial</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Services</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/massage" className="hover:text-orange-500">Massages</a></li>
            <li><a href="/haircut" className="hover:text-orange-500">Haircut</a></li>
            <li><a href="/makeup" className="hover:text-orange-500">Make up</a></li>
            <li><a href="/waxing" className="hover:text-orange-500">Waxing</a></li>
            <li><a href="/medicure" className="hover:text-orange-500">Medicure</a></li>
       
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Social</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-2  hover:text-blue-500">
              <FaFacebookF className="w-5 h-5" /> Facebook
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2  hover:text-cyan-500">
              <FaTwitter className="w-5 h-5" /> Twitter
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2  hover:text-yellow-300">
              <FaGooglePlusG className="w-5 h-5" /> Google Plus
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2  hover:text-red-500">
              <FaYoutube className="w-5 h-5" /> Youtube
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
       <h1 className="text-2xl font-bold text-gray-800">
            Spa<span className="text-[#9D7C5B]">well</span>
          </h1>
    </footer>
  );
};

export default Foot;
