import { useParams } from "react-router-dom";

let UserDetails = (props)=>{
    // console.log(props);//props.match.params.id
    //useParams() ==> Hooks
    // console.log(useParams());//{id:}
    // let id = useParams().id;
    let {id} = useParams();
    console.log(id);
    return(
        <div>
            UserDetails
            <p>ID: {id}</p>
        </div>
    )
}
export default UserDetails;