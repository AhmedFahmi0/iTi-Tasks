import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  ID:any;
  Student:any;
  constructor(myRoute:ActivatedRoute,public myService: DemoService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          //console.log(data);
          this.Student = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
