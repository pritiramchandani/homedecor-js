
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";


function App(){
  return (
    <BrowserRouter>
          <Routes>
              <Route exact path='/' element={< Layout />}>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about-us' element={< AboutUs />}></Route>
              <Route exact path='/contact-us' element={< ContactUs />}></Route>
              <Route exact path='/gallery' element={< Gallery />}></Route>
              </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
