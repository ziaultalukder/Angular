import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboarComponent } from './dashboar/dashboar.component';

const routes: Routes = [
  {path: 'heroes', component: HerosComponent},
  {path: 'dashboard', component: DashboarComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
 exports: [RouterModule],
 imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
