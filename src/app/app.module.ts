import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { NavlinkComponent } from './common/navlink/navlink.component';
import { ButtonComponent } from './common/elements/button/button.component';
import { TitlesComponent } from './index/titles/titles.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    NavlinkComponent,
    ButtonComponent,
    TitlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
