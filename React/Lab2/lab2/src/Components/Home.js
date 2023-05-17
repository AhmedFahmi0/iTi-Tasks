import { Component } from "react";
import Registiration from "./Registiration";
import Students from "./Students";

class App extends Component{
        constructor(){
            super();
            this.state = {
                AllStudents :[]
            }
        }
    //     ReceiveKeyWord = (data)=>{
    //         console.log(data);
    //         // console.log(data.name.value)
            
    //         this.setState((prevState) => ({students: [...prevState.students, student]
    // }));
            ReceiveKeyWord = (data) => {
            const { name, age } = data;
            let student={"name":name.value,"age":age.value};
            this.setState((prevState) => ({
                AllStudents: [...prevState.AllStudents, student]
                }));
            }
        
            
        render(){
            return(
                <div class="px-5">
                    <h1>APP</h1>
                    <Registiration onSubmit={this.ReceiveKeyWord}/>
                    <Students list={this.state.AllStudents}/>
                    {/* <p>{this.state.name}</p> */}
                </div>
            )
        }
    }
    export default App;