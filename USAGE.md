<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

Extend `CloukitComponentTheme` and create your styles inside the constructor.

Then you can use your styles via the `CloukitThemeService` inside your components.

The theme component is usually hidden from the enduser. So do not care too much about it.

If you really want to create a custom style see the [Themeing Guide](https://cloukit.github.io/#/guide/themeing).

The `app.module.ts` would look like this. With a dummy theme from [`demo.theme.ts`](https://github.com/cloukit/theme/blob/1.5.4/src/demo/demo.theme.ts)

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from '../demo/demo.component';
import { CloukitThemeService } from '@cloukit/theme';
import { DummyTheme } from '../demo/demo.theme';

// Use a real CSS Prefixer in real live
const prefixAll = (x) => x;

@Injectable()
export class MyThemeService extends CloukitThemeService {
  constructor() {
    super();
    const dummyTheme = new DummyTheme();
    this.registerPrefixer(prefixAll);
    this.registerComponentTheme('dummy', dummyTheme);
  }
};

@NgModule({
  declarations: [ AppComponent, DemoComponent ],
  imports: [ BrowserModule, ReactiveFormsModule, CloukitToggleModule ],
  providers: [{ provide: CloukitThemeService, useClass: MyThemeService }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
