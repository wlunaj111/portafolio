import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    CardsComponent,
    ContactsComponent,
    CurriculumComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule,  // Add ReactiveFormsModule here if you're using reactive forms
    LightgalleryModule
  ],
  exports: [
    NavbarComponent,
    ContactsComponent,
    CurriculumComponent,

  ]
})
export class SharedModule { }
