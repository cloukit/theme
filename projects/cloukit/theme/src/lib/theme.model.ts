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

  constructor(elementName: string, uiState: string, uiModifier: string, styleDef:
    CloukitStatefulAndModifierAwareElementThemeStyleDefinition) {
    this.elementName = elementName;
    this.uiState = uiState;
    this.uiModifier = uiModifier;
    this.styleDef = styleDef;
  }

  public static from(uiElement: UiElement, styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition):
    CloukitStatefulAndModifierAwareElementTheme {
    return new CloukitStatefulAndModifierAwareElementTheme(uiElement.element, uiElement.state, uiElement.modifier, styleDef);
  }
}

/*
 * CSS Definition Base Classes
 */

export class CloukitBaseCssDefinitions {
  public background?: any;
  public backgroundAttachment?: any;
  public backgroundColor?: any;
  public backgroundImage?: any;
  public backgroundPosition?: any;
  public backgroundRepeat?: any;
  public border?: any;
  public borderBottom?: any;
  public borderBottomColor?: any;
  public borderBottomStyle?: any;
  public borderBottomWidth?: any;
  public borderColor?: any;
  public borderLeft?: any;
  public borderLeftColor?: any;
  public borderLeftStyle?: any;
  public borderLeftWidth?: any;
  public borderRight?: any;
  public borderRightColor?: any;
  public borderRightStyle?: any;
  public borderRightWidth?: any;
  public borderStyle?: any;
  public borderTop?: any;
  public borderTopColor?: any;
  public borderTopStyle?: any;
  public borderTopWidth?: any;
  public borderWidth?: any;
  public clear?: any;
  public clip?: any;
  public color?: any;
  public cursor?: any;
  public display?: any;
  public filter?: any;
  public cssFloat?: any;
  public font?: any;
  public fontFamily?: any;
  fontSize?: any;
  public fontVariant?: any;
  public fontWeight?: any;
  public height?: any;
  public left?: any;
  public letterSpacing?: any;
  public lineHeight?: any;
  public listStyle?: any;
  public listStyleImage?: any;
  public listStylePosition?: any;
  public listStyleType?: any;
  public margin?: any;
  public marginBottom?: any;
  public marginLeft?: any;
  public marginRight?: any;
  public marginTop?: any;
  public overflow?: any;
  public padding?: any;
  public paddingBottom?: any;
  public paddingLeft?: any;
  public paddingRight?: any;
  public paddingTop?: any;
  public pageBreakAfter?: any;
  public pageBreakBefore?: any;
  public position?: any;
  public strokeDasharray?: any;
  public strokeDashoffset?: any;
  public strokeWidth?: any;
  public textAlign?: any;
  public textDecoration?: any;
  public textIndent?: any;
  public textTransform?: any;
  public top?: any;
  public verticalAlign?: any;
  public visibility?: any;
  public width?: any;
  public zIndex?: any;
  public flexDirection?: any;
  public flexFlow?: any;
  public flexWrap?: any;
  public justifyContent?: any;
  public alignItems?: any;
  public alignContent?: any;
  public order?: any;
  [other: string]: any;
}

export class CloukitSvgCssDefinitions extends CloukitBaseCssDefinitions {
  public fill?: any;
  public stroke?: any;
  public strokeWidth?: any;
  public x?: any;
  public y?: any;
  public cx?: any;
  public cy?: any;
  public r?: any;
}

export class CloukitIconDefinition {
  public svgPathD: string;
  public svgStyle?: CloukitSvgCssDefinitions;
}

/**
 * The class that holds the actual styles for a single element that is aware of the uiState and uiModifier
 */
export class CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
  public style: CloukitBaseCssDefinitions;
  public icon?: CloukitIconDefinition;
}

export class CloukitComponentThemeBuilder {

  constructor(private elementName: string,
              private uiState: string,
              private uiModifier: string,
              private updateStyleInThemeCallback: Function,
              private getStyleInThemeCallback: Function) {}

  public withStyles(elementStyles: CloukitBaseCssDefinitions): CloukitComponentThemeBuilder {
    const existingStyle: CloukitStatefulAndModifierAwareElementThemeStyleDefinition = this
      .getStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier);
    const mergedStyle = CloukitComponentThemeBuilder.merge(existingStyle, {
      style: elementStyles
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.updateStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier, mergedStyle);
    return this;
  }

  public withIcon(icon: CloukitIconDefinition): CloukitComponentThemeBuilder {
    const existingStyle: CloukitStatefulAndModifierAwareElementThemeStyleDefinition = this
      .getStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier);
    const mergedStyle = CloukitComponentThemeBuilder.merge(existingStyle, {
      icon: icon
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.updateStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier, mergedStyle);
    return this;
  }

  public withIconStyles(iconStyles: CloukitSvgCssDefinitions): CloukitComponentThemeBuilder {
    const existingStyle: CloukitStatefulAndModifierAwareElementThemeStyleDefinition = this
      .getStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier);
    const mergedStyle = CloukitComponentThemeBuilder.merge(existingStyle, {
      icon: {
        svgStyle: iconStyles
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.updateStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier, mergedStyle);
    return this;
  }

  public inheritFrom(fromElementName: string, fromUiState: string, fromUiModifier: string): CloukitComponentThemeBuilder {
    const existingStyle: CloukitStatefulAndModifierAwareElementThemeStyleDefinition = this
      .getStyleInThemeCallback(fromElementName, fromUiState, fromUiModifier);
    this.updateStyleInThemeCallback(this.elementName, this.uiState, this.uiModifier, existingStyle);
    return this;
  }

  public static merge(x: CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
                      y: CloukitStatefulAndModifierAwareElementThemeStyleDefinition):
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const theme = { style: {}, icon: { } } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
    //
    // Make x nullsafe
    //
    let xNullSafe = { style: {}, icon: { } } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
    if (x !== undefined && x !== null) {
      if (x.style !== undefined && x.style !== null) {
        xNullSafe.style = x.style;
      }
      if (x.icon !== undefined && x.icon !== null) {
        xNullSafe.icon = x.icon;
      }
    }
    //
    // Merge style
    //
    theme.style = Object.assign({}, xNullSafe.style, y.style);
    //
    // Merge icon
    //
    if (xNullSafe.icon !== undefined && xNullSafe.icon !== null && xNullSafe.icon.svgStyle !== undefined && xNullSafe.icon.svgStyle !== null && Object.keys(xNullSafe.icon.svgStyle).length !== 0) {
      // first merge x
      theme.icon.svgStyle = Object.assign({}, xNullSafe.icon.svgStyle);
    }
    if (y.icon !== undefined && y.icon !== null && y.icon.svgStyle !== undefined && y.icon.svgStyle !== null && Object.keys(y.icon.svgStyle).length !== 0) {
      // if y then merge x and ontop y
      theme.icon.svgStyle = Object.assign({}, xNullSafe.icon.svgStyle, y.icon.svgStyle);
    }
    if (xNullSafe.icon !== undefined && xNullSafe.icon !== null && xNullSafe.icon.svgPathD !== undefined && xNullSafe.icon.svgPathD !== null) {
      // first merge x
      theme.icon.svgPathD = xNullSafe.icon.svgPathD;
    }
    if (y.icon !== undefined && y.icon !== null && y.icon.svgPathD !== undefined && y.icon.svgPathD !== null) {
      // if y then merge y
      theme.icon.svgPathD = y.icon.svgPathD;
    }
    return theme as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }
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

  //
  // BUILDER
  //
  public buildStyle(elementName: string, uiState: string, uiModifier: string): CloukitComponentThemeBuilder {
    return new CloukitComponentThemeBuilder(
      elementName, uiState, uiModifier,
      this.createStyle.bind(this),
      this.getStyle.bind(this),
    );
  }

  //
  // ////////
  //

  /**
   * Deep merge style y into style x
   */
  public merge(x: CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
    y: CloukitStatefulAndModifierAwareElementThemeStyleDefinition):
    CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    return CloukitComponentThemeBuilder.merge(x, y);
  }

  /**
   * Create a style for an element inside the component.
   */
  public createStyle(elementName: string, uiState: string, uiModifier: string,
    styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): any {
    const existingStyle = this.getElementTheme(elementName, uiState, uiModifier);
    if (existingStyle !== undefined && existingStyle !== null) {
      // UPDATE
      existingStyle.styleDef = styleDef;
      return;
    }
    // NEW
    this.styles.push(new CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styleDef));
  }

  public createUiStyle(uiElement: UiElement, styleDef: CloukitStatefulAndModifierAwareElementThemeStyleDefinition): any {
    return this.createStyle(uiElement.element, uiElement.state, uiElement.modifier, styleDef);
  }

  /**
   * Returns the elementTheme with reference! If you manipulate the return value it will have effect on the registered theme!
   * If you want an independent copy instead use `getStyle()`.
   */
  public getElementTheme(elementName: string, uiState: string, uiModifier: string): CloukitStatefulAndModifierAwareElementTheme {
    const style = this.styles.filter((theme => theme.elementName === elementName &&
      theme.uiState === uiState && theme.uiModifier === uiModifier));
    if (style !== undefined && style !== null && style[0] !== undefined) {
      return style[0];
    }
    return null;
  }

  public getUiElementTheme(uiElement: UiElement): CloukitStatefulAndModifierAwareElementTheme {
    return this.getElementTheme(uiElement.element, uiElement.state, uiElement.modifier);
  }

  /**
   * Will return an independent copy of the style.
   */
  public getStyle(elementName: string, uiState: string, uiModifier: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    const style = this.getElementTheme(elementName, uiState, uiModifier);
    if (style !== undefined && style !== null) {
      /* immutable copy */
      return JSON.parse(JSON.stringify(style.styleDef)) as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
    }
    return null;
  }

  public getUiStyle(uiElement: UiElement): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    return this.getStyle(uiElement.element, uiElement.state, uiElement.modifier);
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

/**
 * Used to describe a single UI Element
 */
export class UiElement {
  constructor(
    public element: string,
    public state: string,
    public modifier: string) { }
}
