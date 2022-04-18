import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'progress',component: ProgressComponent},
  {path:'grafical',component: GraficalComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopagesfoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
