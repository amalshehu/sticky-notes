import { AppService } from '../app.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  user: any;
  @Input() notes: any;
  constructor(public service: AppService) {
    this.user = {};
  }

  ngOnInit() {
     this.service.userData.subscribe(
      (data: any) => {
        console.log('from notes', data);
        this.user = data;
      }
    );
  }
}
