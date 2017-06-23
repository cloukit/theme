/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CloukitThemeService } from './theme.service';

@NgModule({
  imports: [ CommonModule, BrowserModule ],
  exports: [ CloukitThemeService ],
  declarations: [ CloukitThemeService ]
})
export class ThemeModule {}
