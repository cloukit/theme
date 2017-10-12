import {
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '../index';

export class DummyTheme extends CloukitComponentTheme {
  constructor() {
    super();
    this.createStyle('myelement', 'unclicked', 'base', {
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
        transition: `background-color 300ms linear,
          border-radius 300ms linear`,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('myelement', 'clicked', 'base',
      this.merge(this.getStyle('myelement', 'unclicked', 'base'), {
        style: {
          backgroundColor: '#9650D7',
          borderRadius: '1px',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('myelement', 'unclicked', 'hover',
      this.merge(this.getStyle('myelement', 'unclicked', 'base'), {
        style: {
          backgroundColor: '#ccc',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('myelement', 'clicked', 'hover',
      this.merge(this.getStyle('myelement', 'clicked', 'base'), {
        style: {
          backgroundColor: '#C98EFF',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }
}
