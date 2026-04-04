import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  };

  submitForm(){
    this.http.post(`http://localhost:3000/login`, this.loginForm.value).subscribe({
      next: (res: any) => {
        alert("Dang nhap thanh cong");
        localStorage.setItem('token', res.accessToken)
        this.loginForm.reset();
        localStorage.setItem('user', JSON.stringify(res.user));
        window.location.href = '/stories';
      },
      error: () => {
        alert("Dang nhap that bai");
      }
    })
  }
  ngOnInit(){
  const token = localStorage.getItem('token');

  if(token){
    this.router.navigate(['/stories']); 
  }
  }
  
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
