import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureComponent } from './components/adventure/adventure.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'adventure', component : AdventureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
