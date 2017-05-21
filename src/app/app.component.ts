import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initializes the Sticky Notes app.
  public note: any;
  public data: any;
  public notes: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) {
     this.notes = db.list('/item');
     this.data = {};
  }

  // Saves a new sticky note on firebase.
  saveNote() {
    this.data.date = Date.now();
    this.data.notes = this.note;
    this.notes.push(this.data).then((note) => { console.log(note.key); });
    this.note = '';
  }

  // Creates/updates/deletes a note in the UI.
  displayNote(key, message) {

  };

  // Enables or disables the submit button depending on the values of the input field.
  toggleButton() {

  }
}

