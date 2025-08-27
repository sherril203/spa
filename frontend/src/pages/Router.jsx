import { Routes, Route } from "react-router-dom";
import Testinomial from "./Testinomial";
import Service from "./Services/Service";
import Contact from "./Contact";
import BookAppointment from "./BookAppointment";
import Massage from "./Services/Massage";
import ServiceHome from "./ServiceHome";
import Medicure from "./Services/Medicure";
import Makeup from "./Services/Makeup";
import Waxing from "./Waxing";
import Haircut from "./Services/Haircut";
import HomePage from "./HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/services" element={<Service />}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/testinomial" element={<Testinomial />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/massage" element={<Massage />} />
      <Route path="/serhome" element={<ServiceHome/>}/>
      <Route path="/medicure" element={<Medicure/>}/>
       <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/waxing" element={<Waxing/>}/>
        <Route path="/haircut" element={<Haircut/>}/>

       
        
    </Routes>
  );
};

export default Router;
