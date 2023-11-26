
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {About} from "./components/About.jsx";
import {Menu} from "./components/Menu.jsx";
import {Contact} from "./components/Contact.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Footer} from "./components/Footer.jsx";
// import {Navbar} from "./components/Navbar.jsx";

function App() {


  return (

 <div className="main-div">
   <Navbar></Navbar>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/menu" element={<Menu/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
   </Routes>
     <Footer></Footer>
 </div>



  )
}

export default App
