import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import '@mantine/core/styles.css';
import './index.css'

import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
      <Provider store={store}>
      <BrowserRouter>
  <StrictMode>
    <MantineProvider>
    <App />
    </MantineProvider>
  </StrictMode>
  </BrowserRouter>
    </Provider>

  
)
