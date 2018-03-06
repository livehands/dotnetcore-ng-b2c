import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './components/root/app.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MsalService } from './services/msal/msal.service';
import { HomeComponent } from './components/home/home.component';
import { SecureComponent } from './components/secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    YesNoPipe,
    HomeComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
