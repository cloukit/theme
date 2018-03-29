<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitThemeModule } from '@cloukit/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
    CloukitThemeModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Use the theme service

Extend `CloukitComponentTheme` and create your styles inside the constructor.

Then you can use your styles via the `CloukitThemeService` inside your components.

The theme component is usually hidden from the enduser. So do not care too much about it.

If you really want to create a custom style see the [Themeing Guide](https://cloukit.github.io/#/guide/themeing).

&nbsp;

### Angular >=4.0.0

If you still run Angular 4 then use the last Angular 4 compatible version

```bash
yarn add @cloukit/theme@1.6.1
```

For Angular >=5.0.0 use the latest release
