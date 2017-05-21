import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotesComponent } from './notes/notes.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'sticky-notes'),
    AngularFireDatabaseModule,
    ServiceWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
