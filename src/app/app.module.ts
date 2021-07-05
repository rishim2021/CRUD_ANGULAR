import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './pages/default/default.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
