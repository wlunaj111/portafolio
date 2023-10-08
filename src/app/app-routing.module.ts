import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { CurriculumComponent } from './shared/pages/curriculum/curriculum.component';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
