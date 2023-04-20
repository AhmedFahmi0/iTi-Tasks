import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  id:number|undefined;
  student:any;
  constructor(private myService:DemoService,myRoute:ActivatedRoute,private router:Router){
    this.id=+myRoute.snapshot.params["id"];
  }
  ngOnInit(){
    this.student=this.myService.GetUserByID(this.id).subscribe({
      next:(data)=>{this.student=data},
      error:(err)=>{console.log(err)}
    });
  }
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


  Update(name:any,age:any, email:any, phone:any){
    let updatedStudent = {name, age, email, phone};
    console.log(updatedStudent);
    console.log(this.student);
    this.myService.UpdateStudent(this.id,updatedStudent).subscribe(data=>console.log(data));
    alert("updated successfully");
    this.router.navigateByUrl('/students');

  }
}
