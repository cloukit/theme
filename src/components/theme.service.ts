/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';
import { CloukitComponentTheme, RegisteredTheme } from './theme.model';
import { CloukitStatefulAndModifierAwareElementThemeStyleDefinition } from './theme.model';
import { isNullOrUndefined } from 'util';

/**
 * With the CloukitThemeService you can register component themes globally
 * throughout your application. You can also have multiple themes for the same
 * component with different theme-ids.
 *
 * See the [Themeing Guide]{@link https://cloukit.github.io/#/guide/themeing} for more Details.
 */
@Injectable()
export class CloukitThemeService {

  private themes: RegisteredTheme[] = [];
  private prefixer: Function = (x => x);

  constructor() { }

  /**
   * Register a prefixer Function that can add vendor prefixes to the CSS code.
   * Example: `userSelect` will be expanded to `WebkitUserSelect` and `MozUserSelect`
   *
   * If no prefixer is registered the identity function is used.
   *
   * @param prefixer
   */
  public registerPrefixer(prefixer: Function) {
    this.prefixer = prefixer;
  }

  /**
   * Register a theme for a component.
   * It is common sense to register the default theme for a component under the component name.
   * E.g. "toggle" for toggle component a.s.o
   * If you register a custom theme, at best use "toggle--fancy" or similar.
   *
   * @param componentName
   * @param componentTheme
   */
  public registerComponentTheme(componentName: string, componentTheme: CloukitComponentTheme): void {
    this.themes.push(new RegisteredTheme(componentName, componentTheme));
  }

  /**
   * Get a registered component theme by the component name (or whatever name you used to register your theme).
   * If no registered theme is found, null is returned.
   *
   * @param componentName
   * @returns {any}
   */
  public getComponentTheme(componentName: string): CloukitComponentTheme {
    const theme = this.themes.filter(registeredTheme => registeredTheme.componentName === componentName);
    if (theme === undefined || theme === null ||
      theme[0] === undefined || theme[0] === null) {
      return null;
    }
    return theme[0].componentTheme;
  }

  /**
   * Transform a style with the prefixer function.
   *
   * If no prefixer is registered the identity function is used.
   *
   * @param style
   * @returns {CloukitStatefulAndModifierAwareElementThemeStyleDefinition}
   */
  public prefixStyle(style: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (isNullOrUndefined(style)) { return style; }
    style.style = this.prefixer(style.style);
    return style;
  }

}
