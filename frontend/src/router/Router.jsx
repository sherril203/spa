import { Routes, Route } from "react-router-dom";
import Service from "../pages/Services/Service";
import Contact from "../Conatct/Contact";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Massage from "../pages/Services/Massage";
import Medicure from "../pages/Services/Medicure";
import Makeup from "../pages/Services/Makeup";
import Waxing from "../pages/Services/Waxing";
import Haircut from "../pages/Services/Haircut";
import HomePage from "../pages/Homepage/HomePage";
import About from "../pages/About/About";
import TestinomialPage from "../pages/Testinomial/TestinomialPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Service />}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/testinomial" element={<TestinomialPage />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/massage" element={<Massage />} />
      <Route path="/medicure" element={<Medicure/>}/>
       <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/waxing" element={<Waxing/>}/>
        <Route path="/haircut" element={<Haircut/>}/>

       
        
    </Routes>
  );
};

export default Router;
