import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { EGGHEAD_MATERIAL_ROUTES } from './app.routes';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { NavHeaderModule } from './shared/navheader/nav-header.module';

import { ListLessonModule } from './lessons/lists/list-lesson.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(EGGHEAD_MATERIAL_ROUTES),
    AppMaterialModule,
    NavHeaderModule,
    ListLessonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
