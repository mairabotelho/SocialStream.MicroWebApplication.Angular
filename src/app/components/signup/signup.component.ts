import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;

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

    this.user = {
      username: '',
      firstName: '',
      lastName:'',
      emailAddress: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.user.username = this.signupForm.get('username').value;
    this.user.firstName = this.signupForm.get('firstName').value;
    this.user.lastName = this.signupForm.get('lastName').value;
    this.user.emailAddress = this.signupForm.get('emailAddress').value;
    this.user.password = this.signupForm.get('password').value;
    this.user.confirmPassword = this.signupForm.get('confirmPassword').value;

    this.userService.singup(this.user).subscribe(data => {
      console.log('User created');
      alert("User created successfully.");
      this.router.navigateByUrl('/login');
    }, error => {
      console.log('register failed'); 
    });
  }


}
