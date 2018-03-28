/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { expect } from 'chai';
import { CloukitStatefulAndModifierAwareElementThemeStyleDefinition, CloukitComponentTheme } from './theme.model';

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
  }
} as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;

// Mocha/Chai Unit Test -> run by "library-build-chain" with "npm run test"
describe("CloukitComponentTheme", () => {

  it("merge() should merge two well formed styles", () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style1, style2), null, 2)).to.be.equal(JSON.stringify(expectedMergedStyle1and2, null, 2));
  });

  it("merge() should merge two unusual formed styles", () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style3, style4), null, 2)).to.be.equal(JSON.stringify(expectedMergedStyle3and4, null, 2));
  });

  it("merge() should merge two styles without icon", () => {
    const comp = new CloukitComponentThemeForTest();
    expect(JSON.stringify(comp.merge(style5, style6), null, 2)).to.be.equal(JSON.stringify(expectedMergedStyle5and6, null, 2));
  });
});
