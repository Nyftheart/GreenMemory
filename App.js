import React from 'react';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {store} from './src/config/store';
import { AuthProvider } from './src/config/authProvider';

const App = () => {
  return (
    // provider englobe l'app,
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
