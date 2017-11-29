import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { EGGHEAD_MATERIAL_ROUTES } from './app.routes';
import { AppMaterialModule } from './app-material.module';
import { LessonConfigService } from './shared/lesson-config.service';
import { AppComponent } from './app.component';

import { ListLessonModule } from './lessons/lists/list-lesson.module';
import { IconsLessonModule } from './lessons/icons/icons-lesson.module';
import { InputsLessonModule } from './lessons/inputs/inputs-lesson.module';
import { ToolbarLessonModule } from './lessons/toolbars/toolbar-lesson.module';
import { LoadingLessonModule } from './lessons/loading/loading-lesson.module';
import { TabsLessonModule } from './lessons/tabs/tabs-lesson.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(EGGHEAD_MATERIAL_ROUTES),
    AppMaterialModule,
    IconsLessonModule,
    ListLessonModule,
    InputsLessonModule,
    ToolbarLessonModule,
    LoadingLessonModule,
    TabsLessonModule
  ],
  providers: [LessonConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
