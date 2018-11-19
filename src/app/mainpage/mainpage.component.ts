import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  name='Arpitha';
  customerdata;
  stateCtrl: FormControl;
  firstname;
  lastname;
  phoneno;
  address;

  constructor(private http:Http) { }

  ngOnInit() {
    this.customerdata=new FormGroup({
      firstname: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      lastname: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      phoneno:new FormControl(""),
      address:new FormControl("")
    });
  }

  onSubmit(_data){
    console.log(_data.firstname)
    alert("customer details added")
    {this.firstname=_data.firstname}
    {this.lastname=_data.lastname}
    {this.phoneno=_data.phoneno}
    {this.address=_data.address}
  }

}
