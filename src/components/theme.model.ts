/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
export class CloukitStatefulAndModifierAwareComponentTheme {
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
  private styles: CloukitStatefulAndModifierAwareComponentTheme[];

  constructor() {
    this.styles = [];
  }

  protected _merge(x, y) {
    return Object.assign({}, x, y);
  }

  public createStyle(elementName: string, uiState: string, uiModifier: string, styles: any): any {
    this.styles.push(new CloukitStatefulAndModifierAwareComponentTheme(elementName, uiState, uiModifier, styles));
  }

  public getStyle(elementName: string, uiState: string, uiModifier: string): any {
    return this.styles.filter((theme => theme.elementName === elementName &&
      theme.uiState === uiState && theme.uiModifier === uiModifier))[0].styles;
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
