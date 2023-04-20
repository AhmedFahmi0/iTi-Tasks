import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { DemoService } from 'src/app/Services/demo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService:DemoService,private router:Router){  }
  validationForm=new FormGroup({
    name:new FormControl(null,[Validators.minLength(3)]),
    age:new FormControl(null,[Validators.min(20),Validators.max(40)]),
    email:new FormControl(null,Validators.required),
  })
  get NameValid(){
    return this.validationForm.controls["name"].valid;
  }
  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }


  Add(name:any,age:any, email:any, phone:any){
    let newStudent = {name, age, email, phone};
    this.myService.AddNewStudent(newStudent).subscribe();
    alert("added successfully");
    this.router.navigateByUrl('/students');
  }

}
