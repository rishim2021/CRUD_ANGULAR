import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './pages/admin/navbar/navbar.component';
import { DefaultComponent } from './pages/default/default.component';

const routes: Routes = [
  {
    path:'',component:DefaultComponent
  },
  {
    path:'admin',component:AdminComponent,
  },
  {
    path:'admin/nav',component:NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
