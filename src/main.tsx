import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {CookiesProvider} from 'react-cookie';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
  <GoogleOAuthProvider clientId="238311480550-h817jf3f33c74k6ko2k9aml7t8prgdv9.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  </CookiesProvider>
)
