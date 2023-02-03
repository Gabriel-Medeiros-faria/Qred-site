import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component'; 

import {MatToolbarModule} from "@angular/material/toolbar";
import { FooterComponent } from './components/footer/footer.component';
import { NavigateComponent } from './components/navigate/navigate.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

import {MatListModule} from'@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { DocumentsUserComponent } from './views/documents-user/documents-user.component';
import { VerifyUuidComponent } from './components/verify-uuid/verify-uuid.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigateComponent,
    HomeComponent,
    DocumentsUserComponent,
    VerifyUuidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
