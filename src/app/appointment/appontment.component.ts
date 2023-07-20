import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { branch ,doctor} from '../Model/icountry';
import { FormControl, FormGroup, Validators,FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserauthService } from '../_services/userauth.service';
@Component({
  selector: 'app-appontment',
  templateUrl: './appontment.component.html',
  styleUrls: ['./appontment.component.css']
})
export class AppontmentComponent implements OnInit {
  constructor(private route:Router,private service:UserauthService,private toastr:ToastrService){}

//boolean variable to show differnet forms  
public submitted:boolean=false;

//select option array for branch list
  BranchList:branch[] = [
    {id:1,name: "Tambaram"},
    {id:2, name:'Velachery'},
    {id:3,name: 'Chengalpattu'}
    ];
    //select option array for specialist
    DoctorList:doctor[] = [
      {id:1,name: "General Physician"},
      {id:2, name:'Pediatrics'},
      {id:3,name: 'ENT Specialist'},
      {id:4,name: 'Eye Specialist'}
      ];
   


//creating formgroup and form control
      regForm=new FormGroup({
  pName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$') ]),
        dob:new FormControl('',[Validators.required,]),
        mIssue:new FormControl('',[Validators.required]),
        branch:new FormControl('',[Validators.required]),
        doctor:new FormControl('',[Validators.required]),
        visitdate:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        mnbr:new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.maxLength(10)]),
      }
      
     )
      
  
          
          onSubmit(){
           console.log((this.regForm.value))
            console.log(this.regForm.controls.pName.value)
            
            this.submitted=true;
            this.toastr.success('Appointment Confirmed','Confirmed')

          }
         
         
         //to navigate summary page to home page
          gotohome(){
          
          this.route.navigateByUrl('/Home')
         }
        

        //who can access appointment page

          ngOnInit(): void {
            this.service.canAccess()
            
          }
}
