import { Component } from '@angular/core';
import { BasicPhone } from './BasicPhone';
import { SmartPhone } from './SmartPhone';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="LabAssignmentsAngular";
  selectedValue: boolean= true;  
BasicPhonedetails:BasicPhone[]=[new BasicPhone(1,"Nokia",500,"Basic Phone"),
new BasicPhone(2,"Lemon",700,"Basic Phone")];
SmartPhonedetails:SmartPhone[]=[new SmartPhone(1,"Redmi",10000,"Smart Phone"),
new SmartPhone(2,"Samsung",7000,"Smart Phone")];

}
