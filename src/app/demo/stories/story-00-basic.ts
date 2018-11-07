import { Component } from '@angular/core';
import {
  CloukitThemeService,
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitBaseCssDefinitions,
  CloukitIconDefinition,
  CloukitSvgCssDefinitions,
} from '../../../../projects/cloukit/theme/src/public_api';

/* import and use a real CSS prefixer here */
const prefixAll = (x) => x;

@Component({
  selector: 'cloukit-story-00-basic',
  templateUrl: './story-00-basic.html',
  styleUrls: [ '../demo.styles.css' ]
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
    //
    // MYELEMENT (buildStyle was introduced with v7.1.0)
    //
    this.buildStyle('myelement', 'unclicked', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #555',
        borderRadius: '30px',
        position: 'relative',
        padding: '12px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        width: '80px',
        height: '30px',
        backgroundColor: '#710ECC',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: `background-color 300ms linear, border-radius 300ms linear`,
      });
    this.buildStyle('myelement', 'unclicked', 'hover')
      .inheritFrom('myelement', 'unclicked', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#c12fd7'
      });


    this.buildStyle('myelement', 'clicked', 'base')
      .inheritFrom('myelement', 'unclicked', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#d72f5b',
        borderRadius: '1px',
      });
    this.buildStyle('myelement', 'clicked', 'hover')
      .inheritFrom('myelement', 'clicked', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#ff3a96',
      });

    //
    // MYSVG (buildStyle was introduced with v7.1.0)
    //
    this.buildStyle('mysvg', 'unclicked', 'base')
      .withIcon(<CloukitIconDefinition>{
        // cube
        svgPathD: 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 ' +
                  '256-256 256zM134 134v245h245V134H134z',
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#fff'
      });

    this.buildStyle('mysvg', 'clicked', 'base')
      .inheritFrom('mysvg', 'unclicked', 'base')
      .withIcon(<CloukitIconDefinition>{
        // star
        svgPathD: 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 ' +
                  '256-256 256zm0-163.5l108.74 57.168-20.767-121.084 87.972-85.752-121.575-17.666L256 ' +
                  '71l-54.37 110.166-121.575 17.666 87.972 85.752-20.767 121.084L256 348.5z',
      });

    this.buildStyle('mysvg', 'unclicked', 'hover')
      .inheritFrom('mysvg', 'unclicked', 'base');

    this.buildStyle('mysvg', 'clicked', 'hover')
      .inheritFrom('mysvg', 'clicked', 'base')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#fefefe',
      });
  }
}
