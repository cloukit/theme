webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/theme.icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CloukitIcons */
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
/**
 * @deprecated see https://github.com/cloukit/icon
 *
 * Cloukit Icons
 *
 * An icon consists of exactly one path inside a 512x512 pixel viewbox.
 * If you want to inject your own icons keep that in mind.
 * Draw you icons in a way and use "combine-path" or "convert to outlines" tools
 * to create a single path.
 *
 * Your icons svg code should look like this:
 *
 * ```html
 * <svg viewBox="0 0 512 512">
 *     <path d="M23233....." ></path>
 * </svg>
 * ```
 */
var CloukitIcons = /** @class */ (function () {
    function CloukitIcons() {
    }
    CloukitIcons.success = 'M379.363 141.12l-173.19 173.19-73.538-73.54-28.284 28.286 73.54 73.54 28.284 28.283 201.474-201.475';
    CloukitIcons.failure = 'M370.88 169.405l-28.286-28.284L256 227.716l-86.594-86.594-28.285 28.285L227.716 256l-86.594 86.595 28.285 28.284L256 284.283l86.596 86.595 28.283-28.285L284.283 256';
    return CloukitIcons;
}());



/***/ }),

/***/ "./src/components/theme.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CloukitStatefulAndModifierAwareElementTheme */
/* unused harmony export CloukitStatefulAndModifierAwareElementThemeStyleDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitComponentTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegisteredTheme; });
/* unused harmony export UiElement */
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
/**
 * The wrapper class for a single element that is aware of the uiState and uiModifier
 */
var CloukitStatefulAndModifierAwareElementTheme = /** @class */ (function () {
    function CloukitStatefulAndModifierAwareElementTheme(elementName, uiState, uiModifier, styleDef) {
        this.elementName = elementName;
        this.uiState = uiState;
        this.uiModifier = uiModifier;
        this.styleDef = styleDef;
    }
    CloukitStatefulAndModifierAwareElementTheme.from = function (uiElement, styleDef) {
        return new CloukitStatefulAndModifierAwareElementTheme(uiElement.element, uiElement.state, uiElement.modifier, styleDef);
    };
    return CloukitStatefulAndModifierAwareElementTheme;
}());

/**
 * The class that holds the actual styles for a single element that is aware of the uiState and uiModifier
 */
var CloukitStatefulAndModifierAwareElementThemeStyleDefinition = /** @class */ (function () {
    function CloukitStatefulAndModifierAwareElementThemeStyleDefinition() {
    }
    return CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
}());

/**
 * The base class of any theme.
 * It provides convenience functions to create, merge and get styles for elements.
 */
var CloukitComponentTheme = /** @class */ (function () {
    function CloukitComponentTheme() {
        this.styles = [];
    }
    /**
     * Deep merge style y into style x
     */
    CloukitComponentTheme.prototype.merge = function (x, y) {
        var theme = {};
        theme['style'] = Object.assign({}, x.style, y.style);
        if (x.icon !== undefined && x.icon !== null) {
            theme['icon'] = Object.assign({}, x.icon, y.icon);
            if (y.icon !== undefined && y.icon !== null) {
                theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle, y.icon.svgStyle);
            }
            else {
                theme['icon']['svgStyle'] = Object.assign({}, x.icon.svgStyle);
            }
        }
        return theme;
    };
    /**
     * Create a style for an element inside the component.
     */
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
    CloukitComponentTheme.prototype.createUiStyle = function (uiElement, styleDef) {
        return this.createStyle(uiElement.element, uiElement.state, uiElement.modifier, styleDef);
    };
    /**
     * Returns the elementTheme with reference! If you manipulate the return value it will have effect on the registered theme!
     * If you want an independent copy instead use `getStyle()`.
     */
    CloukitComponentTheme.prototype.getElementTheme = function (elementName, uiState, uiModifier) {
        var style = this.styles.filter((function (theme) { return theme.elementName === elementName &&
            theme.uiState === uiState && theme.uiModifier === uiModifier; }));
        if (style !== undefined && style !== null && style[0] !== undefined) {
            return style[0];
        }
        return null;
    };
    CloukitComponentTheme.prototype.getUiElementTheme = function (uiElement) {
        return this.getElementTheme(uiElement.element, uiElement.state, uiElement.modifier);
    };
    /**
     * Will return an independent copy of the style.
     */
    CloukitComponentTheme.prototype.getStyle = function (elementName, uiState, uiModifier) {
        var style = this.getElementTheme(elementName, uiState, uiModifier);
        if (style !== undefined && style !== null) {
            /* immutable copy */
            return JSON.parse(JSON.stringify(style.styleDef));
        }
        return null;
    };
    CloukitComponentTheme.prototype.getUiStyle = function (uiElement) {
        return this.getStyle(uiElement.element, uiElement.state, uiElement.modifier);
    };
    return CloukitComponentTheme;
}());

/**
 * Simple wrapper for registered themes
 */
var RegisteredTheme = /** @class */ (function () {
    function RegisteredTheme(componentName, componentTheme) {
        this.componentName = componentName;
        this.componentTheme = componentTheme;
    }
    return RegisteredTheme;
}());

/**
 * Used to describe a single UI Element
 */
var UiElement = /** @class */ (function () {
    function UiElement(element, state, modifier) {
        this.element = element;
        this.state = state;
        this.modifier = modifier;
    }
    return UiElement;
}());



/***/ }),

/***/ "./src/components/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_service__ = __webpack_require__("./src/components/theme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



var CloukitThemeModule = /** @class */ (function () {
    function CloukitThemeModule() {
    }
    CloukitThemeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__theme_service__["a" /* CloukitThemeService */]],
        })
    ], CloukitThemeModule);
    return CloukitThemeModule;
}());



/***/ }),

/***/ "./src/components/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_model__ = __webpack_require__("./src/components/theme.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



/**
 * With the CloukitThemeService you can register component themes globally
 * throughout your application. You can also have multiple themes for the same
 * component with different theme-ids.
 *
 * See the [Themeing Guide]{@link https://cloukit.github.io/#/guide/themeing} for more Details.
 */
var CloukitThemeService = /** @class */ (function () {
    function CloukitThemeService() {
        this.themes = [];
        this.prefixer = (function (x) { return x; });
    }
    /**
     * Register a prefixer Function that can add vendor prefixes to the CSS code.
     * Example: `userSelect` will be expanded to `WebkitUserSelect` and `MozUserSelect`
     *
     * If no prefixer is registered the identity function is used.
     */
    CloukitThemeService.prototype.registerPrefixer = function (prefixer) {
        this.prefixer = prefixer;
    };
    /**
     * Register a theme for a component.
     * It is common sense to register the default theme for a component under the component name.
     * E.g. "toggle" for toggle component a.s.o
     * If you register a custom theme, at best use "toggle--fancy" or similar.
     *
     */
    CloukitThemeService.prototype.registerComponentTheme = function (componentName, componentTheme) {
        this.themes.push(new __WEBPACK_IMPORTED_MODULE_1__theme_model__["b" /* RegisteredTheme */](componentName, componentTheme));
    };
    /**
     * Get a registered component theme by the component name (or whatever name you used to register your theme).
     * If no registered theme is found, null is returned.
     */
    CloukitThemeService.prototype.getComponentTheme = function (componentName) {
        var theme = this.themes.filter(function (registeredTheme) { return registeredTheme.componentName === componentName; });
        if (theme === undefined || theme === null ||
            theme[0] === undefined || theme[0] === null) {
            return null;
        }
        return theme[0].componentTheme;
    };
    /**
     * Transform a style with the prefixer function.
     *
     * If no prefixer is registered the identity function is used.
     */
    CloukitThemeService.prototype.prefixStyle = function (style) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(style)) {
            return style;
        }
        style.style = this.prefixer(style.style);
        return style;
    };
    CloukitThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CloukitThemeService);
    return CloukitThemeService;
}());



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Basic Usage\" story=\"story-00-basic\">\n    <story-00-basic></story-00-basic>\n  </cloukit-story>\n\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: ['.demo { font-family: sans-serif; }'],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stories_story_00_basic__ = __webpack_require__("./src/demo/stories/story-00-basic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stories_story_00_basic__["a" /* Story00Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__index__["b" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-basic.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n  <h3>Custom Theme</h3>\n\n  <p>\n    Hover the element to see the changing <strong>uiModifer</strong>\n    and/or Click the element to see the changing <strong>uiState</strong>:\n  </p>\n\n  <div\n    [ngStyle]=\"getStyle('myelement').style\"\n    (click)=\"toggleUiState()\"\n    (mouseenter)=\"toggleUiModifier()\"\n    (mouseleave)=\"toggleUiModifier()\"\n  >\n    click me\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* unused harmony export DummyTheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./src/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import and use a real CSS prefixer here */
var prefixAll = function (x) { return x; };
var Story00Component = /** @class */ (function () {
    function Story00Component(themeService) {
        this.uiState = 'unclicked';
        this.uiModifier = 'base';
        //
        // REGISTER CUSTOM THEME (Usually done once in main NgModule)
        //
        themeService.registerPrefixer(prefixAll);
        themeService.registerComponentTheme('dummy', new DummyTheme());
        //
        // GET THEME
        //
        this.themeService = themeService;
        this.theme = this.themeService.getComponentTheme('dummy');
    }
    Story00Component.prototype.getStyle = function (element) {
        var style = this.theme.getStyle(element, this.uiState, this.uiModifier);
        return this.themeService.prefixStyle(style);
    };
    Story00Component.prototype.toggleUiState = function () {
        if (this.uiState === 'unclicked') {
            this.uiState = 'clicked';
        }
        else {
            this.uiState = 'unclicked';
        }
    };
    Story00Component.prototype.toggleUiModifier = function () {
        if (this.uiModifier === 'base') {
            this.uiModifier = 'hover';
        }
        else {
            this.uiModifier = 'base';
        }
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-basic',
            template: __webpack_require__("./src/demo/stories/story-00-basic.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__index__["c" /* CloukitThemeService */]])
    ], Story00Component);
    return Story00Component;
}());

var DummyTheme = /** @class */ (function (_super) {
    __extends(DummyTheme, _super);
    function DummyTheme() {
        var _this = _super.call(this) || this;
        _this.createStyle('myelement', 'unclicked', 'base', {
            style: {
                border: '1px solid #555',
                borderRadius: '30px',
                position: 'relative',
                padding: '12px',
                textAlign: 'center',
                userSelect: 'none',
                cursor: 'pointer',
                width: '80px',
                height: '30px',
                display: 'inline-block',
                backgroundColor: '#383838',
                color: '#fff',
                transition: "background-color 300ms linear,\n          border-radius 300ms linear",
            }
        });
        _this.createStyle('myelement', 'clicked', 'base', _this.merge(_this.getStyle('myelement', 'unclicked', 'base'), {
            style: {
                backgroundColor: '#9650D7',
                borderRadius: '1px',
            }
        }));
        _this.createStyle('myelement', 'unclicked', 'hover', _this.merge(_this.getStyle('myelement', 'unclicked', 'base'), {
            style: {
                backgroundColor: '#ccc',
            }
        }));
        _this.createStyle('myelement', 'clicked', 'hover', _this.merge(_this.getStyle('myelement', 'clicked', 'base'), {
            style: {
                backgroundColor: '#C98EFF',
            }
        }));
        return _this;
    }
    return DummyTheme;
}(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitComponentTheme */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_theme_module__ = __webpack_require__("./src/components/theme.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_theme_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_theme_model__ = __webpack_require__("./src/components/theme.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_theme_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_theme_service__ = __webpack_require__("./src/components/theme.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__components_theme_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_theme_icons__ = __webpack_require__("./src/components/theme.icons.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map