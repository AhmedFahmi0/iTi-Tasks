import { Component } from "react";
class FirstComponent extends Component{
    getData = (e)=>{
            this.setState({name:e.target.value})        
    }
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    render(){
        return(
            <div class="form">
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.getData}
                />
                <input type="text" placeholder="Name" readOnly value={this.state.name}  />
            </div>
        )
    }
}

export default FirstComponent;
