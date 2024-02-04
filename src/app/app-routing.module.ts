import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpsertComponent } from './component/user-upsert/user-upsert.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    component:UserUpsertComponent,
    path:"",

  },
  {
    component:UserListComponent,
    path:"user-list",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
