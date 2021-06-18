import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../app/pages/home-page/home-page.component';
import { UsersPageComponent } from '../app/pages/users-page/users-page.component';
import { UserPageComponent } from '../app/pages/user-page/user-page.component';
import { ServersPageComponent } from '../app/pages/servers-page/servers-page.component';
import { EditServerComponent } from '../app/pages/edit-server/edit-server.component';

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
    path: 'users/:id',
    component: UserPageComponent,
  },
  {
    path: 'servers',
    component: ServersPageComponent,
  },
  {
    path: 'servers/:id/edit',
    component: EditServerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
