import './App.css';
import Home from "./Components/Home.js";
import Details from "./Components/Details.js";
import Header from "./Components/Header.js";
import Registiration from "./Components/Registiration";
import Students from "./Components/Students";
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Route path="/Home" element={<Home/>}>
                    <Route path="Register" element={<Registiration />}/>
                    <Route path="Students" element={<Students/>}/>
                </Route>
                <Route path="/Students/:id" element={<Details/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </div>

 
  );
}

export default App;
