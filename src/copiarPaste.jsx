import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
  backgroundColor: '#f5f5f5',
  textColor: '#333',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* Resto de la aplicación */}
      </>
    </ThemeProvider>
  );
}
