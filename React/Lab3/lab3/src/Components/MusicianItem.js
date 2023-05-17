import { NavLink } from "react-router-dom";

let MusicianItem = (props)=>{
    let {oneMusician} = props;
    // console.log(oneStudent);
    return(
        <div>
            <div className="alert alert-info d-inline-flex flex-column justifiy-content-center align-items-center w-50" key={oneMusician.id}>
                <img class="mb-3" src={oneMusician.cover} alt=""/>
                <h5><NavLink to={`/musicians/${oneMusician.id}`}>{oneMusician.name}</NavLink></h5>
            </div>
        </div>
    )
}

export default MusicianItem;