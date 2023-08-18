import { useParams } from 'react-router-dom'
import BasicCowDetails from '../components/basic-cow-details/BasicCowDetails'

function CowDetails() {
  const id: string = useParams<{ id: string }>().id!
  return (
    <>
      <BasicCowDetails cowId={id} />
    </>
  )
}

export default CowDetails
