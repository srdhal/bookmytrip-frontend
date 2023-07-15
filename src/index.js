import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './contexts/SearchProvider';
import { AuthProvider } from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider>
      <SearchProvider>
          <App />
      </SearchProvider>
   </AuthProvider>
  </React.StrictMode>
);
