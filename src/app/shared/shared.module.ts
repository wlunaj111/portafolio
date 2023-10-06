import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    CardsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ContactsComponent
  ]
})
export class SharedModule { }
