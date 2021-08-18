import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
// custom themes in chakra UI
// https://chakra-ui.com/docs/theming/customize-theme
// https://www.easyreact.com/articles/chakra-ui-customisations

export const htcTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }),
  },
  colors: {
    primary: '#E54242',
    secondary: '#303030',
    highlight: '#00C9A7',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
  components: {
    Button, // Has to match to the name of the component
  },
});
