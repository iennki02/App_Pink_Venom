import React from 'react';
import { Login } from './src/screens/user/screens/Login';
import { Navigation } from './src/screens/navigation/Navigaiton';
import { UserContextProvider } from './src/screens/user/UserContext';
import { ProductContextProvider } from './src/screens/product/ProductContext';
import { Welcome } from './src/screens/user/screens/Welcome';
import { Register } from './src/screens/user/screens/Register';
import { Home } from './src/screens/product/screens/Home';
import { ProductNavigation } from './src/screens/product/ProductNavigation';



export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Navigation />
      </ProductContextProvider>
    </UserContextProvider>
    // <ProductNavigation/>
    // <Navigation /> 
  );
}

