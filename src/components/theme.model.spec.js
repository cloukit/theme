"use strict";
// Ava with typescript: https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md
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
exports.__esModule = true;
var ava_1 = require("ava");
var theme_model_1 = require("./theme.model");
var CloukitComponentThemeForTest = (function (_super) {
    __extends(CloukitComponentThemeForTest, _super);
    function CloukitComponentThemeForTest() {
        return _super.call(this) || this;
    }
    return CloukitComponentThemeForTest;
}(theme_model_1.CloukitComponentTheme));
var style1 = {
    style: {
        color: 'green',
        border: '1px solid grey'
    },
    icon: {
        svgPathD: 'M123131',
        svgStyle: {
            fill: 'green',
            x: '4'
        }
    }
};
var style2 = {
    style: {
        color: 'red'
    },
    icon: {
        svgPathD: 'M123131',
        svgStyle: {
            fill: 'red'
        }
    }
};
var expectedMergedStyle = {
    style: {
        color: 'red',
        border: '1px solid grey'
    },
    icon: {
        svgPathD: 'M123131',
        svgStyle: {
            fill: 'red',
            x: '4'
        }
    }
};
ava_1["default"]('CloukitComponentTheme: merge', function (t) {
    var comp = new CloukitComponentThemeForTest();
    var mergedStyle = comp.merge(style1, style2);
    t.deepEqual(mergedStyle, expectedMergedStyle);
});
