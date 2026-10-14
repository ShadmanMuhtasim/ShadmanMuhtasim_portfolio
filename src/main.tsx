import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/interactive.css'
import App from './App.tsx'

hydrateRoot(document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
