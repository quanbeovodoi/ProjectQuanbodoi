import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss'
import reportWebVitals from './reportWebVitals';
import SimpleSlider from './components/test';
import { Provider } from 'react-redux'
import { BrowserRouter as Routers } from 'react-router-dom';
import store from './store';
import { SnackbarProvider } from 'notistack';
ReactDOM.render(
  <React.StrictMode>
    <Routers>
      <Provider store={store}>
        <SnackbarProvider maxSnack={2}>
          <App />
        </SnackbarProvider>
      </Provider>
    </Routers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
