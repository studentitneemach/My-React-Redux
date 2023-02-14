import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import  store from './Store/store';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(  
    <Provider store={store}>
        <App />
    </Provider>
) ;
serviceWorker.unregister();