import { Component } from '@angular/core';
import {
  CloukitThemeService,
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '../index';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [ '.demo { font-family: sans-serif; }' ],
})
export class DemoComponent {
  uiState = 'unclicked';
  uiModifier = 'base';
  theme: CloukitComponentTheme;
  themeService: CloukitThemeService;

  constructor(themeService: CloukitThemeService) {
    this.themeService = themeService;
    this.theme = this.themeService.getComponentTheme('dummy');
  }

  private getStyle(element: string):
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.theme.getStyle(element, this.uiState, this.uiModifier);
    return this.themeService.prefixStyle(style);
  }

  private toggleUiState() {
    if (this.uiState === 'unclicked') {
      this.uiState = 'clicked';
    } else {
      this.uiState = 'unclicked';
    }
  }

  private toggleUiModifier() {
    if (this.uiModifier === 'base') {
      this.uiModifier = 'hover';
    } else {
      this.uiModifier = 'base';
    }
  }
}
