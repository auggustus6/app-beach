import {extendTheme} from 'native-base';

export const THEME = extendTheme({
  colors: {
    theme_primary: '#FB7E48',
    theme_secondary: '#C8ED06',
    theme_textLight: '#5d5c5a',
    theme_text: '#2d2d2b',
    theme_gray: '#ebebeb',
    theme_link: '#1E91FB',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      200: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      300: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      400: {
        normal: 'Poppins-Regular',
        italic: 'Poppins-Italic',
      },
      500: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      600: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      700: {
        normal: 'Poppins-Bold',
      },
      800: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
      900: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
    },
  },
});
