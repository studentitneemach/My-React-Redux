import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './New_Data/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './New_Data/Store/index';

createRoot(document.getElementById('root')).render(  <Provider store ={store}><App /></Provider>
    
) ;
serviceWorker.unregister();