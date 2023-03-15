import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppUseEffect } from './AppUseEffect'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppUseEffect />
  </React.StrictMode>,
)
