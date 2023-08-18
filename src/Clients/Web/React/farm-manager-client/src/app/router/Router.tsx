import { createBrowserRouter } from 'react-router-dom'
import CowDetails from '../../pages/CowDetails'
import HomePage from '../../pages/HomePage'
import NewAnimal from '../../pages/new-animal/NewAnimal'
import App from '../layout/App'
import { cowDetailsPath, newAnimalPath } from './routerPaths'

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: newAnimalPath, element: <NewAnimal /> },
      { path: `${cowDetailsPath}/:id`, element: <CowDetails /> },
    ],
  },
])
