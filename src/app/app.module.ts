import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ResultboxComponent } from './resultbox/resultbox.component';
import { DatabaseComponent } from './database/database.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { DatacouponComponent } from './datacoupon/datacoupon.component';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { DatapageComponent } from './datapage/datapage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderbarComponent } from './headerbar/headerbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ContentboxComponent,
    FooterComponent,
    ContainerComponent,
    ResultboxComponent,
    DatabaseComponent,
    HomepageComponent,
    DatacouponComponent,
    DatafilterComponent,
    DatapageComponent,
    HeaderbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
