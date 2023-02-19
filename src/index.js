import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import {Provider} from "react-redux"
import {store} from "./redux/authslice"
 axios.defaults.baseURL = "https://tavelll.onrender.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
