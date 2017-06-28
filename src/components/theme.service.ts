/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';
import { CloukitComponentTheme, RegisteredTheme } from './theme.model';
import { CloukitStatefulAndModifierAwareElementThemeStyleDefinition } from './theme.model';

@Injectable()
export class CloukitThemeService {

  private themes: RegisteredTheme[] = [];
  private prefixer: Function = (x => x);

  constructor() { }

  public registerPrefixer(prefixer: Function) {
    this.prefixer = prefixer;
  }

  public registerComponentTheme(componentName: string, componentTheme: CloukitComponentTheme): void {
    this.themes.push(new RegisteredTheme(componentName, componentTheme));
  }

  public getComponentTheme(componentName: string): CloukitComponentTheme {
    const theme = this.themes.filter(registeredTheme => registeredTheme.componentName === componentName);
    if (theme === undefined || theme === null ||
      theme[0] === undefined || theme[0] === null) {
      return null;
    }
    return theme[0].componentTheme;
  }

  public prefixStyle(style: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    style.style = this.prefixer(style.style);
    return style;
  }

}
