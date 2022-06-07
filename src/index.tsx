import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducers from './reducers/index';

const store = createStore(
  reducers, // Reducers
  {} // Init state
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);

