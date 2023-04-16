import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName="";
  userAge="";
  @Output() myEvent= new EventEmitter();
  //Students:{name:string, age:string}[] = [];
  fireNow(){
    if(this.userName.length > 3 && +this.userAge <= 40 && +this.userAge > 20 ){

      this.myEvent.emit({name: this.userName, age: this.userAge})
      this.userName = this.userAge = ""
  }
  }
 /* Add(){
    let newStudent = {name:this.usrName, age:this.usrAge};
    if(+this.usrAge<=40)
      this.Students.push(newStudent);
    // console.log(this.Students)
    this.usrAge = "";
    this.usrName = "";
  }*/

}
