import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/search/location/:location' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}


export default App;
