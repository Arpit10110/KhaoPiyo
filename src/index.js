import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/Store"
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fwulh6r8i0r0xpmr.us.auth0.com"
    clientId="kqKyQEwARlvkYyHdDq1FZNX0kCHKc0ES"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store} >
    <App />
  </Provider>
  </Auth0Provider>
);
