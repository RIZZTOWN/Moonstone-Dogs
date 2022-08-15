import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicGalleryComponent } from './pic-gallery/pic-gallery.component';
import { BreedDetailsComponent } from './breed-details/breed-details.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './pic-gallery/modal/modal.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'breed-details/:breed/:sub', component: BreedDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PicGalleryComponent,
    BreedDetailsComponent,
    HeaderComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
