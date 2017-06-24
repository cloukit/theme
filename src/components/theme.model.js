"use strict";
exports.__esModule = true;
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
var CloukitStatefulAndModifierAwareElementTheme = (function () {
    function CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styleDef) {
        this.elementName = elementName;
        this.uiState = uiState;
        this.uiModifier = uiModifier;
        this.styleDef = styleDef;
    }
    return CloukitStatefulAndModifierAwareElementTheme;
}());
exports.CloukitStatefulAndModifierAwareElementTheme = CloukitStatefulAndModifierAwareElementTheme;
var CloukitStatefulAndModifierAwareElementThemeStyleDefinition = (function () {
    function CloukitStatefulAndModifierAwareElementThemeStyleDefinition() {
    }
    return CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
}());
exports.CloukitStatefulAndModifierAwareElementThemeStyleDefinition = CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
var CloukitStatefulAndModifierAwareElementThemeStyleDefinitionSvgIcon = (function () {
    function CloukitStatefulAndModifierAwareElementThemeStyleDefinitionSvgIcon() {
    }
    return CloukitStatefulAndModifierAwareElementThemeStyleDefinitionSvgIcon;
}());
exports.CloukitStatefulAndModifierAwareElementThemeStyleDefinitionSvgIcon = CloukitStatefulAndModifierAwareElementThemeStyleDefinitionSvgIcon;
var CloukitComponentTheme = (function () {
    function CloukitComponentTheme() {
        this.styles = [];
    }
    // Deep merge y into x
    CloukitComponentTheme.prototype.merge = function (x, y) {
        var theme = {};
        theme['style'] = Object.assign({}, x.style, y.style);
        if (x.icon !== null) {
            theme['icon'] = Object.assign({}, x.icon, y.icon);
            if (y.icon !== null) {
                theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle, y.icon.svgStyle);
            }
            else {
                theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle);
            }
        }
        return theme;
    };
    CloukitComponentTheme.prototype.createStyle = function (elementName, uiState, uiModifier, styleDef) {
        var existingStyle = this.getElementTheme(elementName, uiState, uiModifier);
        if (existingStyle !== undefined && existingStyle !== null) {
            // UPDATE
            existingStyle.styleDef = styleDef;
            return;
        }
        // NEW
        this.styles.push(new CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styleDef));
    };
    CloukitComponentTheme.prototype.getElementTheme = function (elementName, uiState, uiModifier) {
        var style = this.styles.filter((function (theme) { return theme.elementName === elementName &&
            theme.uiState === uiState && theme.uiModifier === uiModifier; }));
        if (style !== undefined && style !== null && style[0] !== undefined) {
            return style[0];
        }
        return null;
    };
    CloukitComponentTheme.prototype.getStyle = function (elementName, uiState, uiModifier) {
        var style = this.getElementTheme(elementName, uiState, uiModifier);
        if (style !== undefined && style !== null) {
            /* immutable copy */
            return JSON.parse(JSON.stringify(style.styleDef));
        }
        return null;
    };
    CloukitComponentTheme.prototype.getStyleForView = function (elementName, uiState, uiModifier, prefixer) {
        if (prefixer === undefined) {
            prefixer = function (x) { return x; };
        }
        // FIXME: INJECT PREFIXER HERE
    };
    return CloukitComponentTheme;
}());
exports.CloukitComponentTheme = CloukitComponentTheme;
var RegisteredTheme = (function () {
    function RegisteredTheme(componentName, componentTheme) {
        this.componentName = componentName;
        this.componentTheme = componentTheme;
    }
    return RegisteredTheme;
}());
exports.RegisteredTheme = RegisteredTheme;
