import MainViewList from '../components/main-view-list/MainViewList'
import { Cow } from '../models/cow'
import getMockCows from '../services/mockDateService'

const mockCows: Cow[] = getMockCows()

function HomePage() {
  return (
    <>
      <MainViewList cows={mockCows}></MainViewList>
    </>
  )
}

export default HomePage
