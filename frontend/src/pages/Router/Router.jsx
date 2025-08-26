import {Routes,Route} from "react-router-dom"
import ServicePage from "../ServicePage/ServicePage"
import ContactPage from "../Contact/ContactPage"
import TestinomialPage from "../Testinomial/TestinomialPage"
import BookAppointmentPage from "../BookAppointment/BookAppointmentPage"
const Routers = () => {
  return (
     <Routes>
           <Route path="/Service" element={<ServicePage />} />
           <Route path="/Contact" element={<ContactPage/>} />
           <Route path="/Testinomial" element={<TestinomialPage/>}/>
           <Route path="/BookAppointment" element={<BookAppointmentPage/>}/>
           {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
      </Routes>
  )
}
export default Routers
