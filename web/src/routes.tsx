import Home from './Home'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
