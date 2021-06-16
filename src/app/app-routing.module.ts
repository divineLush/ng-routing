import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../app/pages/home-page/home-page.component';
import { UsersPageComponent } from '../app/pages/users-page/users-page.component';
import { ServersPageComponent } from '../app/pages/servers-page/servers-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'servers',
    component: ServersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
