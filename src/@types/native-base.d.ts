import {THEME} from '../theme/theme';

type Theme = typeof THEME;

declare module 'native-base' {
  export interface ICustomTheme extends Theme {}
}
