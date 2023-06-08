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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ContentboxComponent,
    FooterComponent,
    ContainerComponent,
    ResultboxComponent
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
