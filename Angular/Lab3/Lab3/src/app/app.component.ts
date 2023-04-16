import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab3';
  studentsData: {name: string , age: string}[] = []

  getData(data: any){
    console.log(data);
    this.studentsData.push(data);
    console.log(this.studentsData);
  }
}
