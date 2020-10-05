import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DialogComponent } from './pages/features/modal/dialog/dialog.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  { path: '**', component: PagenotfoundComponent},
  {path:'dialog',component:DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
