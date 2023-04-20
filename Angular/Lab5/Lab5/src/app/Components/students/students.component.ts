import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students:any;
  constructor(public myService:DemoService,private router:Router){
    // console.log(myService.GetAllUsers());
    // myService.GetAllUsers().subscribe(
    //   (data)=>{console.log(data)},
    //   (err)=>{console.log(err)}
    //   )

  }
  Delete(id:any){
    this.myService.DeleteStudent(id).subscribe();
    this.router.navigateByUrl('/students');
  }
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data:any)=>{
          this.Students = data;
        },
        error:(err:any)=>{console.log(err)}
      }
    )
  }

}
