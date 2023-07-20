import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/about.component';
import { MedicalServicesComponent } from './medical-services/medical-services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppontmentComponent } from './appointment/appontment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path:'Home',
  component:HomeComponent
},
{
  path:'About',
  component:AboutComponent
},
{
  path:'Medical',
  component:MedicalServicesComponent
},
{
  path:'Login',
  component:LoginComponent
},
{
  path:'Register',
  component:RegisterComponent
},
{
  path:'Contactus',
  component:ContactUsComponent
},
{
  path:'Appointment',
  component:AppontmentComponent
},
{
  
  path:'',
  redirectTo:'Home',
  pathMatch:'full'

},
{
  path:'**',
  component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

  logout(){
    sessionStorage.clear()
  
  }
 }
