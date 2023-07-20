import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  public img:string='../../assets/address.png'
  public img1:string='../../assets/call.png'
  public img2:string='../../assets/email.png'


  queryForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    msg:new FormControl('',[Validators.required]),
    sub:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required])


  })

  onSubmit(){
    console.log(this.queryForm.value)

  }
}
