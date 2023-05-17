import { Component } from "react";

class Registiration extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            age:""
        }
    }
    getKeyWord = (e)=>{
        e.preventDefault()
        this.setState({name:e.target.name.value});
        this.setState({age:e.target.age.value});
        this.props.onSubmit(e.target);

        // this.props.onSubmit(e.targe);
        // e.preventDefault()
        console.log(this.state.name)
        
    }
    render(){
        return(
            
            <form onSubmit={this.getKeyWord} class="mb-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" name="name" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" placeholder="Age">Age</label>
              <input type="text" name="age" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
           
        )
    }
 }
 export default Registiration;