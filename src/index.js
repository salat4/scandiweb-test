import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { client } from './App';
import {
  ApolloProvider
} from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import store, { persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>

    <ApolloProvider client={client}>
    <BrowserRouter >
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

      <App />
          </PersistGate>

      </Provider>
      </BrowserRouter>
    </ApolloProvider>
</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
