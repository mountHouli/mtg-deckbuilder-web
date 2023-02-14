import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from 'components/App'

import 'styles/styles-root.scss'

const root = ReactDOMClient.createRoot(document.getElementById('react_root'))

root.render(<App />)
