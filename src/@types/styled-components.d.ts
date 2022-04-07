import defaultTheme from '../assets/styles/themes/default';

type CustomTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
