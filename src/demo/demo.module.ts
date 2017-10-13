import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitThemeModule, CloukitThemeService } from '../index';
import { DemoComponent } from './demo.component';
import { DummyTheme } from './demo.theme';

/* import and use a real CSS prefixer here */
const prefixAll = (x) => x;

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, CloukitThemeModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
  constructor(private cloukitThemeService: CloukitThemeService) {
    this.cloukitThemeService.registerPrefixer(prefixAll);
    this.cloukitThemeService.registerComponentTheme('dummy', new DummyTheme());
  }
}
