import { AppService } from '../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.userData.subscribe(
      (data: any) => {
        console.log(data);
        // debugger
        this.user = data;
      }
    );
  }

}
