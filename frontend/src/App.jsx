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
import Header from './Components/Header';
import Footer from './Components/Footer';



export default function App() {
  return <BrowserRouter>
  
 < Header/>
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
    
    

  </Routes>
 
< Footer/>
  </BrowserRouter>;
}
