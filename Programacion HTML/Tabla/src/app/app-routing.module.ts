import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"tabla",component:DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
