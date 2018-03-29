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

### Version Compatibilty

You can read the [release comments](https://github.com/cloukit/theme/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.6.2 - current           |
| >=4.0.0         | 1.6.0 - 1.6.1             |

To install a specific version use:

```
yarn add @cloukit/theme@1.6.1
```
