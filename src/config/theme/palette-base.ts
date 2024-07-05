import { PaletteOptions } from '@mui/material';

// Azul Marinho #01232f
// Azul Claro   #01dbfe
// Branco Gelo  #ffffff

const paletteBase: Partial<PaletteOptions> = {
  primary: {
    light: '#01232f',
    main: '#01232f',
    dark: '#292D32',
    contrastText: '#fbfbfb',
  },
  secondary: {
    light: '#01dbfe',
    main: '#01dbfe',
    dark: '#D0821C',
    contrastText: '#fbfbfb',
  },
};

export default paletteBase;
