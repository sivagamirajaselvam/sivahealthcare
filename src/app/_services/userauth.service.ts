import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private rou:Router,private Http:HttpClient) { }
  
  //to show navigation bar to authendicated users
 isAuthenticated():boolean{
    if(sessionStorage.getItem('userName')!=null){
        return true;
      }
      return false;
    }
  
//to redirect unauthendicated users to home page called in appointment component

    canAccess(){
      if(!this.isAuthenticated()){
        this.rou.navigateByUrl('/Home')
      }
    }

//api post for registration page

    register(fName:string|null,lName:string|null,email:string|null,password:string|null){
      //api 
      
return this.Http
.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnWU7lpRWwXjDDeiaE_tEeAQXQsof9cGk",
{displaylName:fName,displayName:lName,email,password:password})
    }


//login post api
 login(uName:string|null,pwd:string|null){
    //api 
    return this.Http
.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnWU7lpRWwXjDDeiaE_tEeAQXQsof9cGk",
{email:uName,password:pwd})

  }

}