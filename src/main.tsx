import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './app'
import { Home } from './routes/home'
import { SignUpForm } from './routes/signup'
import './index.css'
import { LoginForm } from './routes/login'
import { RegisteredCompanies } from './routes/registered_companies'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUpForm />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'registeredCompanies',
        element: <RegisteredCompanies />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
