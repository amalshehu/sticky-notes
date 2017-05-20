import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// Initializes the Sticky Notes app.
public notes: any;
  constructor() {

  }

  // Saves a new sticky note on localStorage.
  saveNote() {
   console.log(this.notes);
   this.notes = '';
  }

  // Creates/updates/deletes a note in the UI.
  displayNote(key, message) {

  };

  // Enables or disables the submit button depending on the values of the input field.
  toggleButton() {

  }
}
