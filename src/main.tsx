import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ElementDefault } from './screens/elementDefault/elementDefault.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ElementDefault />
  </StrictMode>,
)
