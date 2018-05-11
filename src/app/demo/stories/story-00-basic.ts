import { Component } from '@angular/core';
import { DemoComponent } from '../demo.component';
import {
  CloukitThemeService,
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '../../../../projects/cloukit/theme/src/public_api';

/* import and use a real CSS prefixer here */
const prefixAll = (x) => x;

@Component({
  selector: 'cloukit-story-00-basic',
  templateUrl: './story-00-basic.html',
  styles: [ ].concat(DemoComponent.sharedStyles),
})
export class Story00Component {

  uiState = 'unclicked';
  uiModifier = 'base';
  theme: CloukitComponentTheme;
  themeService: CloukitThemeService;

  constructor(themeService: CloukitThemeService) {
    //
    // REGISTER CUSTOM THEME (Usually done once in main NgModule)
    //
    themeService.registerPrefixer(prefixAll);
    themeService.registerComponentTheme('dummy', new DummyTheme());
    //
    // GET THEME
    //
    this.themeService = themeService;
    this.theme = this.themeService.getComponentTheme('dummy');
  }

  public getStyle(element: string):
    CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.theme.getStyle(element, this.uiState, this.uiModifier);
    return this.themeService.prefixStyle(style);
  }

  public toggleUiState() {
    if (this.uiState === 'unclicked') {
      this.uiState = 'clicked';
    } else {
      this.uiState = 'unclicked';
    }
  }

  public toggleUiModifier() {
    if (this.uiModifier === 'base') {
      this.uiModifier = 'hover';
    } else {
      this.uiModifier = 'base';
    }
  }
}


export class DummyTheme extends CloukitComponentTheme {
  constructor() {
    super();
    this.createStyle('myelement', 'unclicked', 'base', {
      style: {
        border: '1px solid #555',
        borderRadius: '30px',
        position: 'relative',
        padding: '12px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        width: '80px',
        height: '30px',
        display: 'inline-block',
        backgroundColor: '#383838',
        color: '#fff',
        transition: `background-color 300ms linear,
          border-radius 300ms linear`,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('myelement', 'clicked', 'base',
      this.merge(this.getStyle('myelement', 'unclicked', 'base'), {
        style: {
          backgroundColor: '#9650D7',
          borderRadius: '1px',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('myelement', 'unclicked', 'hover',
      this.merge(this.getStyle('myelement', 'unclicked', 'base'), {
        style: {
          backgroundColor: '#ccc',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('myelement', 'clicked', 'hover',
      this.merge(this.getStyle('myelement', 'clicked', 'base'), {
        style: {
          backgroundColor: '#C98EFF',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }
}
