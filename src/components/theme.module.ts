/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeService } from './theme.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ ],
  declarations: [ ],
  providers: [ CloukitThemeService ],
})
export class CloukitThemeModule {}
