import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroCompComponent } from './hero-comp/hero-comp.component';
import { IntroComponent } from './intro/intro.component';
import { Gallery01Component } from './gallery01/gallery01.component';
import { CoursesComponent } from './courses/courses.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ContactComponent } from './contact/contact.component';
import { MessageWidgetComponent } from './message-widget/message-widget.component';
import { FooterComponent } from './footer/footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroCompComponent,
    IntroComponent,
    Gallery01Component,
    CoursesComponent,
    SuppliesComponent,
    ContactComponent,
    MessageWidgetComponent,
    FooterComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
