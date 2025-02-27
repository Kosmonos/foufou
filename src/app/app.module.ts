import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './home/views/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomepageComponent } from './home/views/welcomepage/welcomepage.component';
import { LoginComponent } from './home/views/login/login.component';
import { ProfileetudiantComponent } from './home/views/etudiant/profileetudiant/profileetudiant.component';
import { ProfileadminComponent } from './home/views/admin/profileadmin/profileadmin.component';
import { AjoutertuteurComponent } from './home/views/admin/ajoutertuteur/ajoutertuteur.component';
import { ListtuteurComponent } from './home/views/admin/listtuteur/listtuteur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReclamationformComponent } from './home/views/etudiant/reclamationform/reclamationform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListreclamationsComponent } from './home/views/etudiant/listreclamations/listreclamations.component';
import { ReclamationtechniquesComponent } from './home/views/admin/reclamationtechniques/reclamationtechniques.component';
import { ReclamationeducativesComponent } from './home/views/admin/reclamationeducatives/reclamationeducatives.component';
import { ProfiletuteurComponent } from './home/views/tuteur/profiletuteur/profiletuteur.component';
import { ReclamationtuteurComponent } from './home/views/tuteur/reclamationtuteur/reclamationtuteur.component';
import { NotFoundComponent } from './home/views/not-found/not-found.component';
import { BackModule } from './home/views/back/back.module';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './home/views/forgotpassword/forgotpassword.component';
import { ResetpasswordformComponent } from './home/view/resetpasswordform/resetpasswordform.component';
import { ResetpasswordComponent } from './home/views/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomepageComponent,
    LoginComponent,
    ProfileetudiantComponent,
    ProfileadminComponent,
    AjoutertuteurComponent,
    ListtuteurComponent,
    ReclamationformComponent,
    ListreclamationsComponent,
    ReclamationtechniquesComponent,
    ReclamationeducativesComponent,
    ProfiletuteurComponent,
    ReclamationtuteurComponent,
    ForgotpasswordComponent,
    ResetpasswordformComponent,
    ResetpasswordComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BackModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
