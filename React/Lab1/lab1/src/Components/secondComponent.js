import { Component } from "react";
class SecondComponent extends Component{

    constructor(){
        super();
        this.interval=0;
        
        this.state = {
            imgSrc:1
        }
        this.path="./Images/"+this.state.imgSrc+".jpg"
    }

     next=()=>{
      if(this.state.imgSrc<5){
        this.setState({imgSrc:this.state.imgSrc+1});
        console.log(this.state.imgSrc)
        this.path="./Images/"+this.state.imgSrc+".jpg"
     }else{
        this.setState({imgSrc:5});
        this.path="./Images/"+this.state.imgSrc+".jpg"
      }
    }
     previous= ()=>{
      if(this.state.imgSrc>1){
        this.setState({imgSrc:this.state.imgSrc-1});
        this.path="./Images/"+this.state.imgSrc+".jpg"
      }else{
        this.setState({imgSrc:1});
        this.path="./Images/"+this.state.imgSrc+".jpg"
      }
      
    }
  
     slide= ()=>{
      this.interval=setInterval(()=>{
        if(this.state.imgSrc<5){
          this.setState({imgSrc:this.state.imgSrc+1});
          this.path="./Images/"+this.state.imgSrc+".jpg"
        }else{
          this.setState({imgSrc:1});
          this.path="./Images/"+this.state.imgSrc+".jpg"
        }
      },500);
    }
     stop=()=>{
      clearInterval(this.interval);
  }
   
  render(){
    return(
            <div>
                <img src={this.path} alt="" />
                <div id="buttons">
                    <input type="button" value="previous" onClick={this.previous}/>
                    <input type="button" value="next" onClick={this.next}/>
                    <input type="button" value="slide" onClick={this.slide}/>
                    <input type="button" value="stop" onClick={this.stop}/>
                </div>
                
                </div>
            )
    }
}

export default SecondComponent;
