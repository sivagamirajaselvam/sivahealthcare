import { Component } from '@angular/core';
import { faStethoscope , faPhoneVolume, faUserDoctor,faHospitalUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  //for design
  fa1=faStethoscope;
fa3=faUserDoctor;
fa2=faPhoneVolume;
fa4=faHospitalUser;

}

