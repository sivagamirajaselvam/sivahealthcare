import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserauthService } from '../_services/userauth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router:Router,private auth:UserauthService,private toastr:ToastrService){}
  contactForm=new FormGroup({
    fName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$') ]),
    lName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{9,}')
    ]
 )
      });
    
      onSubmit(){
        console.log(this.contactForm.value)
        console.log(  this.contactForm['controls']['fName'].value);

//api response
      
    this.auth.register(this.contactForm['controls']['fName'].value,this.contactForm['controls']['lName'].value,this.contactForm['controls']['email'].value,this.contactForm['controls']['password'].value)
    .subscribe({next:data=>{
     console.log(data)
     this.toastr.success('success','Registered Succesfully')
     this.router.navigateByUrl('/Login')
       },
          error: (e) =>{ console.error(e)
            this.toastr.error('Registration Failed','try again')
          },
          complete: () => {console.info('complete')}
      })
      
      }
      
    
    
 ngOnInit(): void {
   
 }   
}
