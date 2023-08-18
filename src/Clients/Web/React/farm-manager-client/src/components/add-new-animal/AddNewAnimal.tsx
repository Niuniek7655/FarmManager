import './AddNewAnimal.css'
import { useNavigate } from 'react-router-dom'
import { newAnimalPath } from '../../app/router/routerPaths'

function AddNewAnimal() {
  const navigate = useNavigate()

  const newAnimalPage = () => {
    navigate(newAnimalPath)
  }

  return (
    <>
      <button onClick={newAnimalPage}>Dodaj zwierze do stada</button>
    </>
  )
}

export default AddNewAnimal
