import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
  <Auth0Provider domain='dev-wne64baelstygk4g.us.auth0.com' clientId='itOotTn2oIuQs9c6DdMi1zTfGtBTJlIY'   authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App/>
  </Auth0Provider>
    
  </>,
)

