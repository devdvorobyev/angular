import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconRegistry } from "@angular/material/icon";
/* Кастомные компоненты */
import { LayoutComponent } from './layout/layout.component';
import { AuthorizationComponent } from './layout/pages/authorization/authorization.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { SettingComponent } from './layout/pages/setting/setting.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthorizationComponent,
    HomeComponent,
    AboutComponent,
    SettingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry){
    this.matIconRegistry.addSvgIcon(
      `icon-cloudy-weather`,
      `../../assets/icon/icon-cloudy-weather.svg`
    );
  }
 }
