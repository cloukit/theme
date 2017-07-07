System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  map: {
    app: "./src",
    '@angular/core': 'npm:@angular/core@4.0.0/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.0.0/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.0.0/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.0.0/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.0.0/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@4.0.0/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@4.0.0/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.0.0/bundles/forms.umd.js',
    '@angular/animations': 'npm:@angular/animations@4.0.0/bundles/animations.umd.js',
    '@angular/core/testing': 'npm:@angular/core@4.0.0/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles@4.0.0/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@4.0.0/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@4.0.0/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@4.0.0/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@4.0.0/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router@4.0.0/bundles/router-testing.umd.js',
    /* PREFIXER */
    'inline-style-prefixer/static': 'npm:inline-style-prefixer@3.0.1/dist/inline-style-prefix-all.min.js',

    '@cloukit/theme': 'npm:@cloukit/theme@1.4.0/theme.es5.js',

    'rxjs': 'npm:rxjs@5.1.0',
    'lodash': 'npm:lodash@4.17.4/'
  },
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    lodash: {
      defaultExtension: 'js'
    }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  }
});
