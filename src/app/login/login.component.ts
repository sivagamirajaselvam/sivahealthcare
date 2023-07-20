import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserauthService } from '../_services/userauth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private rou:Router,private service:UserauthService,private toastr:ToastrService){}

  loginForm=new FormGroup({
    uName:new FormControl('',[Validators.required,Validators.email]),
    pwd:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{9,}')])
    
})

login(){
console.log(this.loginForm.value)

  if(this.loginForm.valid){
    if(this.loginForm.controls['uName'].value!=null){
      let userName=this.loginForm.controls['uName'].value;
      sessionStorage.setItem('userName',userName)
    }
  }

  //api response
  this.service.login(this.loginForm['controls']['uName'].value,this.loginForm['controls']['pwd'].value)
  .subscribe({
      next:data=>{
          console.log(data);
          this.toastr.success("Success message",'Login Successfully')
          this.rou.navigateByUrl('/Appointment')
                 },
      error:data=>{
          console.error(data);
         
          this.toastr.error('Failed','Login Failed')
          this.rou.navigateByUrl('/Register')
                  },
      complete:() =>{
          console.info('complete')
                    },
             })



      //  sessionStorage.getItem('userName')
     // if(userName==sessionStorage.getItem('userName')){
      
      //  this.toastr.success("Success message",'Login Successfully') 
//this.rou.navigateByUrl('/Appointment')
  //    }
    //  else {
      //  this.toastr.error('Login Failed','Register Again')
        //this.rou.navigateByUrl('/Register')
     //}
    
   // this.rou.navigateByUrl('/Appointment')
    
    }



    ngOnInit(): void {
    
       }
    
    }
  
 
