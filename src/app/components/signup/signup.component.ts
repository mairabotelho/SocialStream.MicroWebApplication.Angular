import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserPayload} from './user-payload';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  userPayload: UserPayload;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
     private router: Router) {

    this.signupForm = this.formBuilder.group({
      username: '',
      firstName: '',
      lastName:'',
      emailAddress: '',
      password: '',
      confirmPassword: ''
    });

    this.userPayload = {
      username: '',
      firstName: '',
      lastName:'',
      emailAddress: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.userPayload.username = this.signupForm.get('username').value;
    this.userPayload.firstName = this.signupForm.get('firstName').value;
    this.userPayload.lastName = this.signupForm.get('lastName').value;
    this.userPayload.emailAddress = this.signupForm.get('emailAddress').value;
    this.userPayload.password = this.signupForm.get('password').value;

    this.userService.singup(this.userPayload).subscribe(data => {
      console.log('User created');
      alert("User created successfully.");
      this.router.navigateByUrl('/login');
    }, error => {
      console.log('register failed'); 
    });
  }


}
