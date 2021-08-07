import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { ParentloginComponent } from './login/parentlogin/parentlogin.component';
import { StudentloginComponent } from './login/studentlogin/studentlogin.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { StdContactComponent } from './studentmodule/std-contact/std-contact.component';

const routes: Routes = [
  {path: '', component: PagenotfoundComponent },
  {path: 'student-login', component: StudentloginComponent},
  {path: 'admin-login', component: AdminloginComponent},
  {path: 'parent-login', component: ParentloginComponent},
  {path: 'studentns', component:StdContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
