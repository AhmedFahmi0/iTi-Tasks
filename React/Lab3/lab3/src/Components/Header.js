import { NavLink } from "react-router-dom";

let Header = ()=>{
    return(
        <div>
            <NavLink className={"btn btn-outline-dark"} to={"/"}>Home</NavLink>
        </div>
    )
}

export default Header;