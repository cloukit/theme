/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
export class CloukitComponentThemeUiState {
  public states: CloukitComponentThemeUiStateModifier[] = [];
}

export class CloukitComponentThemeUiStateModifier {
  public id: string;
  public styles: any;
  constructor(id: string, styles) {
    this.id = id;
    this.styles = styles;
  }
}

export abstract class CloukitComponentTheme {
  protected _style: CloukitComponentThemeUiState = new CloukitComponentThemeUiState();

  private _merge(x, y) {
    return Object.assign({}, x, y);
  }

  public getStyle(componentName: string, uiState: string, uiModifier: string, prefixer?: Function) {
    if (prefixer === undefined) {
      prefixer = x => x;
    }
    return this._style.states.filter((state => state.id === uiState))[0].styles[componentName][uiModifier];
  }
}

export class RegisteredTheme {
  constructor(
    public componentName: string,
    public componentTheme: CloukitComponentTheme
  ) {}
}
