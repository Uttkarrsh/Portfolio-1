import {BrowserRouter, Route, Routes, Switch} from "react-router-dom"
import Homepage from "./Homepage";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";




const App=()=> {
  return (
  <BrowserRouter>
  <Menu />
  <Routes>
  
  <Route path="/" element={<Homepage />} />
  
  <Route path="/projects" element={<Projects />} />

  <Route path="/contact" element={<Contact />} />

  

  <Route path="*" element={<Error />}/>
   
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
