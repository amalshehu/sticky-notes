import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
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
import { MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotesComponent } from './notes/notes.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'sticky-notes'),
    AngularFireDatabaseModule,
    ServiceWorkerModule
  ],
  providers: [AppService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
