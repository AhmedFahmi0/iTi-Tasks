import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home.js";
import Musicians from "./Components/Musicians.js";
import MusicianDetails from "./Components/MusicianDetails";
import Header from "./Components/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="allComp">
        <BrowserRouter>
             <div className="header mb-2">
                 <Header/>
             </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/musicians" element={<Musicians/>}/>
                <Route path="/musicians/:id" element={<MusicianDetails/>}/>
            </Routes>
        </BrowserRouter>
    </div>

 
  );
}

export default App;
