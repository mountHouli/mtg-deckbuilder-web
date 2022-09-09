import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './components/app';

const root = ReactDOMClient.createRoot(document.getElementById('react_root'))

root.render(<App />)
