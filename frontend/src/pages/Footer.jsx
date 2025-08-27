import { FaFacebookF, FaTwitter, FaYoutube, FaGooglePlusG } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Links</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About us</a></li>
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">Gallery</a></li>
            <li><a href="#" className="hover:text-orange-500">Location</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Services</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Massages</li>
            <li>Beauty Barlour</li>
            <li>Make up kits</li>
            <li>Waxing</li>
              <li>Medicure</li>
       
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Social</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebookF className="w-5 h-5" /> Facebook
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaTwitter className="w-5 h-5" /> Twitter
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaGooglePlusG className="w-5 h-5" /> Google Plus
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
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
