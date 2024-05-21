import './App.css';

import Home from './components/home';
import About from './pages/About/about'
import Contantinhos from './pages/contactos/contantinhos';
import {BrowserRouter as Router,  
  Route,
  Routes, 
   } from 'react-router-dom';


function App() {
  

  return (
    <Router>
     <Routes>
       

      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<About/>}/>
      <Route path="/contact" element={<Contantinhos/>}/>

     </Routes>
    </Router>
    
    
        
  );
}

export default App;
