import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store/store';

// Ensure the root element exists
const rootElement = document?.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

// // Set the app element for accessibility purposes
// Modal.setAppElement('#root');

// Create the root and render the application
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
