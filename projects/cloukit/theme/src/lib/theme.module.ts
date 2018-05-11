import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeService } from './theme.service';

@NgModule({
  providers: [ CloukitThemeService ],
  imports: [ CommonModule ],
  declarations: [ ],
  exports: [ ]
})
export class CloukitThemeModule { }
