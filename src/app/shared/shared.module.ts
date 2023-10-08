import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    CardsComponent,
    ContactsComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ContactsComponent,
    CurriculumComponent,
  ]
})
export class SharedModule { }