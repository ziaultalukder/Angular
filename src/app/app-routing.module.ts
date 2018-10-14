import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboarComponent},
  {path: 'details/id', component: HeroDetailsComponent},
  {path: 'heroes', component: HerosComponent}
];

@NgModule({ 
 imports: [ RouterModule.forRoot(routes) ],
 exports: [RouterModule]
})

export class AppRoutingModule {}
