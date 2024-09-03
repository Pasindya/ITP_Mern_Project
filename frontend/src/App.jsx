import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Packages from './Pages/Packages';
import Staff from './Pages/Staff';
import Events from './Pages/Events';
import Payment from './Pages/Payment';
import Equipments from './Pages/Equipments';
import Supplier from './Pages/Supplier';
import Signin from './Pages/Signin';
import Beginner from './Pages/Beginner';
import Intermidiate from './Pages/Intermidiate';
import Advanced from './Pages/Advanced';
import Bookpackage from './Pages/Bookpackage';
import AdminHome from './Dashboard/Adminhome';
import Bookingdetails from './Booking/Bookingdetails';
import Viewbooking from './Booking/Viewbooking';
import Booking from './Booking/Booking';
import Updatebooking from './Booking/Updatebooking';
import Bookingdescription from './Booking/Bookingdescription';




export default function App() {
  return <BrowserRouter>
  
 
  <Routes>
  <Route path="/" element={< Home/>} />
  <Route path="/aboutus" element={< Aboutus/>} />
  <Route path="/packages" element={< Packages/>} />
  <Route path="/staff" element={< Staff/>} />
  <Route path="/events" element={< Events/>} />
  <Route path="/payment" element={< Payment/>} />
  <Route path="/equipments" element={< Equipments/>} />
  <Route path="/supplier" element={< Supplier/>} />
  <Route path="/signin" element={< Signin/>} />
  <Route path="/beginner" element={< Beginner/>} />
  <Route path="/intermidiate" element={< Intermidiate/>} />
  <Route path="/advanced" element={< Advanced/>} />
  <Route path="/bookpackage" element={< Bookpackage/>} />






  <Route path="/adminhome" element={< AdminHome/>} />
  <Route path="/bookingdetails" element={< Bookingdetails/>} />
  <Route path="/viewbooking" element={< Viewbooking/>} />
  <Route path="/booking" element={< Booking/>} />
  <Route path="/bookingdetails/:id" element={< Updatebooking/>} />
  <Route path="/bookingdescription" element={< Bookingdescription/>} />
  

  
 
 
    

  </Routes>


 



  </BrowserRouter>;
}
