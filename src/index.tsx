import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './globalStore/store/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <CookiesProvider>
               <App />
            </CookiesProvider>
         </Router>
      </Provider>
   </React.StrictMode>
);
