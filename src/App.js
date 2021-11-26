import { createTheme, ThemeProvider } from '@mui/material';
// import { dark } from '@mui/material/styles/createPalette';
import Root from './pages/Root'

const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#01579b',
      },
      secondary: {
        main: '#ff5694',
      },
      tertiary: {
        main: '#242d34'
      },
      success: {
        light: '#53d05e',
        main: '#009E2F'
      }
    },
  }
)

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Root/>
    </ThemeProvider>
  );
}

export default App;
