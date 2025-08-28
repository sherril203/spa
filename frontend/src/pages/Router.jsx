import { Routes, Route } from "react-router-dom";
import Service from "./Services/Service";
import Contact from "./Contact";
import BookAppointment from "./BookAppointment/BookAppointment";
import Massage from "./Services/Massage";
import Medicure from "./Services/Medicure";
import Makeup from "./Services/Makeup";
import Waxing from "./Services/Waxing";
import Haircut from "./Services/Haircut";
import HomePage from "./Homepage/HomePage";
import About from "./About/About";
import TestinomialPage from "./Testinomial/TestinomialPage";

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
