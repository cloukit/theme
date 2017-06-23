/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import merge from 'lodash.merge';

export class CloukitStatefulAndModifierAwareElementTheme {
  public elementName: string;
  public uiState: string;
  public uiModifier: string;
  public styles: any;

  constructor(elementName: string, uiState: string, uiModifier: string, styles: any) {
    this.elementName = elementName;
    this.uiState = uiState;
    this.uiModifier = uiModifier;
    this.styles = styles;
  }
}

export abstract class CloukitComponentTheme {
  private styles: CloukitStatefulAndModifierAwareElementTheme[];

  constructor() {
    this.styles = [];
  }

  // Deep merge two styles
  public merge(target, source) {
    return merge(target, source);
  }

  public createStyle(elementName: string, uiState: string, uiModifier: string, styles: any): any {
    let existingStyle = this.getElementTheme(elementName, uiState, uiModifier);
    if (existingStyle !== undefined && existingStyle !== null) {
      // UPDATE
      existingStyle.styles = styles;
      return;
    }
    // NEW
    this.styles.push(new CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styles));
  }

  private getElementTheme(elementName: string, uiState: string, uiModifier: string): CloukitStatefulAndModifierAwareElementTheme {
    const style = this.styles.filter((theme => theme.elementName === elementName &&
      theme.uiState === uiState && theme.uiModifier === uiModifier));
    if (style !== undefined && style !== null && style[0] !== undefined) {
      return style[0];
    }
    return null;
  }

  public getStyle(elementName: string, uiState: string, uiModifier: string): any {
    const style = this.getElementTheme(elementName, uiState, uiModifier);
    if (style !== undefined && style !== null) {
      /* immutable copy */
      return JSON.parse(JSON.stringify(style.styles));
    }
    return null;
  }

  public getStyleForView(elementName: string, uiState: string, uiModifier: string, prefixer: Function): any {
    if (prefixer === undefined) {
      prefixer = x => x;
    }
    // FIXME: INJECT PREFIXER HERE
  }
}

export class RegisteredTheme {
  constructor(
    public componentName: string,
    public componentTheme: CloukitComponentTheme
  ) {}
}
