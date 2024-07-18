import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container!); // Create root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
