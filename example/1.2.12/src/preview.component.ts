import { Component } from '@angular/core';
import { CloukitThemeService, CloukitComponentTheme } from '@cloukit/theme';

@Component({
  selector: 'preview',
  templateUrl: './src/preview.component.html',
  styles: [
    '.preview { font-family:sans-serif' ,
    '.demotable td { vertical-align:top; padding:10px; }',
  ],
})
export class PreviewComponent {
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
