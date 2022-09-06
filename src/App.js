import React from 'react';
import { useState } from 'react';

//Routes
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/routes';

//Styled Components
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes/Themes';
import { GlobalStyles } from './styles/GlobalStyles/GlobalStyles';


function App() {
  const [theme, setTheme] = useState("dark");
  
    function themeToggler() {
      if(theme === "light"){
        setTheme("dark");
      }else{
        setTheme("light");
      }
  }

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme ={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <AppRoutes themeToggler={themeToggler} theme={theme} />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
