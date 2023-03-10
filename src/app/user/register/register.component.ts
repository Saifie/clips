import { Component } from '@angular/core';
import { FormGroup ,FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm=new FormGroup({
name:new FormControl('',[
Validators.required,
Validators.minLength(3)
]),
email:new FormControl('',[
  Validators.required,
  Validators.email
]),
age:new FormControl('',[
  Validators.required,
  Validators.min(18)
]),
password:new FormControl('',[
  Validators.required,
  Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
]),
confirm_password:new FormControl('',[
  Validators.required,
]),
phoneNumber:new FormControl('',
[
  Validators.required,
  Validators.minLength(13),
  Validators.maxLength(13)
])
});
alertColor="blue"
showAlert=false
alertMsg="Please! wait you account being created"


register(){
this.showAlert=true
this.alertMsg="Please! wait you account being created"
this.alertColor="blue"


}
}
