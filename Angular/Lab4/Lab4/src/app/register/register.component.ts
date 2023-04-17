import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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


}
