import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { NgImageSliderModule } from 'ng-image-slider';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { GalleryComponent } from './gallery/gallery.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncomingblogComponent } from './incomingblog/incomingblog.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    IncomingblogComponent,
    ContactComponent,
    GalleryComponent,
    UiModalComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    IncomingblogComponent,
    ContactComponent,
    NgbModule
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgImageSliderModule,
    IvyCarouselModule,
    NgbModule
  ]
})
export class SectionsModule { }
