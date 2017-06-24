"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
var core_1 = require("@angular/core");
var theme_model_1 = require("./theme.model");
var CloukitThemeService = (function () {
    function CloukitThemeService() {
        this.themes = [];
    }
    CloukitThemeService.prototype.registerComponentTheme = function (componentName, componentTheme) {
        this.themes.push(new theme_model_1.RegisteredTheme(componentName, componentTheme));
    };
    CloukitThemeService.prototype.getComponentTheme = function (componentName) {
        var theme = this.themes.filter(function (registeredTheme) { return registeredTheme.componentName === componentName; });
        if (theme === undefined || theme === null ||
            theme[0] === undefined || theme[0] === null) {
            return null;
        }
        return theme[0].componentTheme;
    };
    return CloukitThemeService;
}());
CloukitThemeService = __decorate([
    core_1.Injectable()
], CloukitThemeService);
exports.CloukitThemeService = CloukitThemeService;
