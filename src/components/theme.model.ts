/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * The wrapper class for a single element that is aware of the uiState and uiModifier
 */
export class CloukitStatefulAndModifierAwareElementTheme {
  public elementName: string;
  public uiState: string;
  public uiModifier: string;
  public styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

  constructor(elementName: string, uiState: string, uiModifier: string, styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition) {
    this.elementName = elementName;
    this.uiState = uiState;
    this.uiModifier = uiModifier;
    this.styleDef = styleDef;
  }
}

/**
 * The class that holds the actual styles for a single element that is aware of the uiState and uiModifier
 */
export class CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
  public style: any;
  public icon : {
    svgPathD: string;
    svgStyle: any;
  };
}

/**
 * The base class of any theme.
 * It provides convenience functions to create, merge and get styles for elements.
 */
export class CloukitComponentTheme {
  public styles: CloukitStatefulAndModifierAwareElementTheme[];

  constructor() {
    this.styles = [];
  }

  /**
   * Deep merge style y into style x
   * @param x
   * @param y
   * @returns {CloukitStatefulAndModifierAwareElementThemeStyleDefinition}
   */
  public merge(x: CloukitStatefulAndModifierAwareElementThemeStyleDefinition, y: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const theme = { };
    theme['style'] = Object.assign({}, x.style, y.style);
    if (x.icon !== undefined && x.icon !== null) {
      theme['icon'] = Object.assign({}, x.icon, y.icon);
      if (y.icon !== undefined && y.icon !== null) {
        theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle, y.icon.svgStyle);
      } else {
        theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle);
      }
    }
    return theme as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  /**
   * Create a style for an element inside the component.
   *
   * @param elementName
   * @param uiState
   * @param uiModifier
   * @param styleDef
   */
  public createStyle(elementName: string, uiState: string, uiModifier: string, styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): any {
    let existingStyle = this.getElementTheme(elementName, uiState, uiModifier);
    if (existingStyle !== undefined && existingStyle !== null) {
      // UPDATE
      existingStyle.styleDef = styleDef;
      return;
    }
    // NEW
    this.styles.push(new CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styleDef));
  }

  /**
   * Returns the elementTheme with reference! If you manipulate the return value it will have effect on the registered theme!
   * If you want an independent copy instead use `getStyle()`.
   *
   * @param elementName
   * @param uiState
   * @param uiModifier
   * @returns {any}
   */
  public getElementTheme(elementName: string, uiState: string, uiModifier: string): CloukitStatefulAndModifierAwareElementTheme {
    const style = this.styles.filter((theme => theme.elementName === elementName &&
      theme.uiState === uiState && theme.uiModifier === uiModifier));
    if (style !== undefined && style !== null && style[0] !== undefined) {
      return style[0];
    }
    return null;
  }

  /**
   * Will return an independent copy of the style.
   *
   * @param elementName
   * @param uiState
   * @param uiModifier
   * @returns {any}
   */
  public getStyle(elementName: string, uiState: string, uiModifier: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.getElementTheme(elementName, uiState, uiModifier);
    if (style !== undefined && style !== null) {
      /* immutable copy */
      return JSON.parse(JSON.stringify(style.styleDef)) as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
    }
    return null;
  }

}

/**
 * Simple wrapper for registered themes
 */
export class RegisteredTheme {
  constructor(
    public componentName: string,
    public componentTheme: CloukitComponentTheme
  ) {}
}