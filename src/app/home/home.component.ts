import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../_services/userauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  constructor(private rou:Router,private service:UserauthService){}
  public img:string='../../assets/Medical3.jpg'

//navigating to reg page
  Reg(){
    this.rou.navigateByUrl('/Register')
  }

  ngOnInit(): void {
    //this.service.canAccess();
    
  }
  }
