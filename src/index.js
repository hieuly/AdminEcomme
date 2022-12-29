import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from "redux-persist/es/integration/react";
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  root
);