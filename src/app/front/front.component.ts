import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../_services/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

constructor(public service:UserauthService,private rou:Router){
  
}
//clear sessionstorage and navigate to home page
logout(){
  sessionStorage.clear();
  this.rou.navigateByUrl('/Home');
}
  ngOnInit(): void {
    
    
  }

}
