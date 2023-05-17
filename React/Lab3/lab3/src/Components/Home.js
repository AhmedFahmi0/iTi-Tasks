import { NavLink } from "react-router-dom";
let Home = ()=>{
    let imgSrc="./Images/cover.png"
    return(
        <div className="container text-center ">
      <div className="row justify-content-center">
        <div class="col-md-6">
          <h1>Welcome to our Music Website</h1>
          <a className="fs-1 fw-bold"><NavLink to="/musicians">MusicDB</NavLink></a>
            <img
              src={imgSrc}
              className="img-fluid"
              Style="max-width: 400px; max-height: 500px;"
              alt="Artists"
            />
        </div>
      </div>
    </div>
    )
}

export default Home;