/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { CloukitStatefulAndModifierAwareElementThemeStyleDefinition, CloukitComponentTheme,
  CloukitBaseCssDefinitions, CloukitSvgCssDefinitions, CloukitIconDefinition } from './theme.model';

class CloukitComponentThemeForTest extends CloukitComponentTheme {
  constructor() {
    super();
  }
}

const style1 = {
  style: {
    color: 'green',
    border: '1px solid grey',
  },
  icon: {
    svgPathD: 'M123131',
    svgStyle: {
      fill: 'green',
      x: '4',
    },
  },
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const style2 = {
  style: {
    color: 'red',
  },
  icon: {
    svgPathD: 'M123131',
    svgStyle: {
      fill: 'red',
    },
  },
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const expectedMergedStyle1and2 = {
  style: {
    color: 'red',
    border: '1px solid grey',
  },
  icon: {
    svgPathD: 'M123131',
    svgStyle: {
      fill: 'red',
      x: '4',
    },
  },
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const style3 = {
  style: {
    color: 'green',
    border: '1px solid grey',
  },
  icon: {
    svgPathD: 'M123131',
    svgStyle: {
      fill: 'green',
      x: '4',
    },
  },
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const style4 = {
  style: {
    color: 'red',
  },
  icon: {
    svgStyle: {}
  }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const expectedMergedStyle3and4 = {
  style: {
    color: 'red',
    border: '1px solid grey',
  },
  icon: {
    svgPathD: 'M123131',
    svgStyle: {
      fill: 'green',
      x: '4',
    },
  },
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;


const style5 = {
  style: {
    color: 'green',
    border: '1px solid grey',
  }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const style6 = {
  style: {
    color: 'red',
    textDecoration: 'underline',
  }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

const expectedMergedStyle5and6 = {
  style: {
    color: 'red',
    border: '1px solid grey',
    textDecoration: 'underline',
  },
  icon: {
    svgStyle: {}
  }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

// Karma/Jasmine Unit Test
describe('CloukitComponentTheme', () => {

  it('merge() should merge two well formed styles', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style1, style2), null, 2))
      .toBe(JSON.stringify(expectedMergedStyle1and2, null, 2));
  });

  it('merge() should merge two unusual formed styles', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style3, style4), null, 2))
      .toBe(JSON.stringify(expectedMergedStyle3and4, null, 2));
  });

  it('merge() should merge two styles without icon', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style5, style6), null, 2))
      .toBe(JSON.stringify(expectedMergedStyle5and6, null, 2));
  });


  it('should be possible to inherit from an existing style', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1');

    expect(JSON.stringify(comp.getStyle('myel', 'state2', 'mod1'), null, 2))
      .toBe(JSON.stringify(style1, null, 2));
  });

  it('should be possible to inherit from an existing style and overwrite elementStyles', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: 'blue'
      });

    const expected = Object.assign({}, style1);
    expected.style.color = 'blue';
    expect(JSON.stringify(comp.getStyle('myel', 'state2', 'mod1'), null, 2))
      .toBe(JSON.stringify(expected, null, 2));
  });

  it('should be possible to inherit from an existing style and overwrite iconStyles', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: 'magenta'
      });

    const expected = Object.assign({}, style1);
    expected.icon.svgStyle.fill = 'magenta';
    expect(JSON.stringify(comp.getStyle('myel', 'state2', 'mod1'), null, 2))
      .toBe(JSON.stringify(expected, null, 2));
  });

  it('should be possible to inherit from an existing style and overwrite icon', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1')
      .withIcon(<CloukitIconDefinition>{
        svgPathD: 'foo'
      });

    const expected = Object.assign({}, style1);
    expected.icon.svgPathD = 'foo';
    expect(JSON.stringify(comp.getStyle('myel', 'state2', 'mod1'), null, 2))
      .toBe(JSON.stringify(expected, null, 2));
  });
});
