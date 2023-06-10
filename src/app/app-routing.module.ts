import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: '', redirectTo: '/container', pathMatch: 'full' },
  { path: 'container', component: HomepageComponent },
  { path: 'database', component: DatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
