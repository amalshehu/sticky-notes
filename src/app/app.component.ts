import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NgServiceWorker } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initializes the Sticky Notes app.
  public note: any;
  public data: any;
  public notes: any;
  constructor(public db: AngularFireDatabase, public sw: NgServiceWorker) {
     this.notes = db.list('/item').map( (arr) => { return arr.reverse(); } );
     this.data = {};
     window.addEventListener('load', function() {
      setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});
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

