// src/App.tsx
import React from 'react';
import AlbumsProvider from './src/context/AlbumsContext';
import AppNavigation from './src/navigation/AppNavigation';

function App() {
  return (
    <AlbumsProvider>
      <AppNavigation />
    </AlbumsProvider>
  );
}

export default App;
