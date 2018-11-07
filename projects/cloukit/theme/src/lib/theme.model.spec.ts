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
  icon: { }
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
  icon: { }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

// Karma/Jasmine Unit Test
describe('CloukitComponentTheme', () => {

  it('merge() should merge two well formed styles', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(comp.merge(style1, style2))
      .toEqual(expectedMergedStyle1and2);
  });

  it('merge() should merge two unusual formed styles', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(comp.merge(style3, style4))
      .toEqual(expectedMergedStyle3and4);
  });

  it('merge() should merge two styles without icon', () => {
    const comp = new CloukitComponentThemeForTest();
    expect(comp.merge(style5, style6))
      .toEqual(expectedMergedStyle5and6);
  });


  it('should be possible to inherit from an existing style', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1');

    expect(comp.getStyle('myel', 'state2', 'mod1')).toEqual(style1);
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
    expect(comp.getStyle('myel', 'state2', 'mod1')).toEqual(expected);
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
    expect(comp.getStyle('myel', 'state2', 'mod1')).toEqual(expected);
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
    expect(comp.getStyle('myel', 'state2', 'mod1')).toEqual(expected);
  });

  it('should be possible to inherit from an existing style and overwrite icon and iconStyle', () => {
    const comp = new CloukitComponentThemeForTest();
    comp.createStyle('myel', 'state1', 'mod1', style1);

    comp.buildStyle('myel', 'state2', 'mod1')
      .inheritFrom('myel', 'state1', 'mod1')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        stroke: 'cyan',
      })
      .withIcon(<CloukitIconDefinition>{
        svgPathD: 'foo'
      });

    const expected = Object.assign({}, style1);
    expected.icon.svgPathD = 'foo';
    expected.icon.svgStyle.stroke = 'cyan';
    expect(comp.getStyle('myel', 'state2', 'mod1')).toEqual(expected);
  });
});
