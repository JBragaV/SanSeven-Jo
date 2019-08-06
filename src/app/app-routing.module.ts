import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginanaoencontradaComponent } from './paginanaoencontrada/paginanaoencontrada.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: PaginanaoencontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
