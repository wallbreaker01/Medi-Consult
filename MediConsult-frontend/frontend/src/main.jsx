import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import { Provider } from 'react-redux'
import store from './pages/State/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AppContextProvider>
  </BrowserRouter>,
)
