import { Component } from "react";
import MusicianItem from "./MusicianItem";

class Musicians extends Component{
    constructor(){
        super();
        this.state = {
            AllMusicians:[]
        }
    }
    RenderMusicians = ()=>{
        if(this.state.AllMusicians){
        return this.state.AllMusicians.map((musician)=>{
            return (
                <MusicianItem oneMusician={musician} key={musician.id}/>
            )
        })
    }
    }
    render(){
        return(
            <div class="d-flex flex-column justify-content-spacing-around align-items-center">
                {this.RenderMusicians()}
            </div>
        )
    }
    componentDidMount(){
        fetch("http://localhost:3500/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({AllMusicians:data});
        })
        .catch((err)=>{console.log(err)});
    }
}

export default Musicians;