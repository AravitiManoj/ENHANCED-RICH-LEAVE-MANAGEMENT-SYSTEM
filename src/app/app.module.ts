import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CaruselComponent } from './home/carusel/carusel.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { FooterComponent } from './home/footer/footer.component';
import { DevelopersComponent } from './home/developers/developers.component';
import { DcaruselComponent } from './home/dcarusel/dcarusel.component';
import { StudentloginComponent } from './login/studentlogin/studentlogin.component';
import { ParentloginComponent } from './login/parentlogin/parentlogin.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParentregComponent } from './registration/parentreg/parentreg.component';
import { StudentregComponent } from './registration/studentreg/studentreg.component';
import { TracstatusComponent } from './home/tracstatus/tracstatus.component';
import { SandataComponent } from './home/sandata/sandata.component';
import { AdminsComponent } from './home/admins/admins.component';
import { PrtregistersuccessComponent } from './shared/prtregistersuccess/prtregistersuccess.component';
import { StdeegistersuccessComponent } from './shared/stdeegistersuccess/stdeegistersuccess.component';
import { StdDashboardComponent } from './studentmodule/std-dashboard/std-dashboard.component';
import { StdApplyleaveComponent } from './studentmodule/std-applyleave/std-applyleave.component';
import { StdStatusComponent } from './studentmodule/std-status/std-status.component';
import { StdAcceptComponent } from './studentmodule/std-accept/std-accept.component';
import { StdRejectComponent } from './studentmodule/std-reject/std-reject.component';
import { StdContactComponent } from './studentmodule/std-contact/std-contact.component';
import { StdNavbarComponent } from './studentmodule/components/std-navbar/std-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaruselComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    DevelopersComponent,
    DcaruselComponent,
    StudentloginComponent,
    ParentloginComponent,
    AdminloginComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegistrationComponent,
    ParentregComponent,
    StudentregComponent,
    TracstatusComponent,
    SandataComponent,
    AdminsComponent,
    PrtregistersuccessComponent,
    StdeegistersuccessComponent,
    StdDashboardComponent,
    StdApplyleaveComponent,
    StdStatusComponent,
    StdAcceptComponent,
    StdRejectComponent,
    StdContactComponent,
    StdNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
