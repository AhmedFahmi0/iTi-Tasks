import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';



const routes: Routes = [
  {path:"", component:StudentsComponent},
  {path:"addstudent", component:AddNewStudentComponent},
  {path:"students/:id/edit", component:UpdateStudentComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
