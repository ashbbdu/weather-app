import * as React from 'react'
import * as ReactDOM  from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
        
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
