import { NavLink } from "react-router-dom";


let Header = ()=>{
    return(
        <nav class="nav flex-column flex-sm-row nav-tabs">
            <li class="flex-sm-fill text-sm-center nav-link"><NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to={"/"}>Home</NavLink></li>
            <li class="flex-sm-fill text-sm-center nav-link"><NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to={"/Home"}>Home</NavLink></li>
            <li class="flex-sm-fill text-sm-center nav-link"><NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to={"/Students/5"}>User Details</NavLink></li>
            <li class="flex-sm-fill text-sm-center nav-link"><NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to={"/profile"}>Profile</NavLink></li>
            <li class="flex-sm-fill text-sm-center nav-link"><NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to={"/aaaaa"}>Error</NavLink></li>
        </nav>
    //     <nav class="nav nav-pills flex-column flex-sm-row">
    //     <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
    //     <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
    //     <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
    //     <a class="flex-sm-fill text-sm-center nav-link disabled">Disabled</a>
    //   </nav>
    )
}
export default Header;