import { Cow } from '../../models/cow'
import './MainViewList.css'
import convertDateToDDMMYYYYString from '../../services/timeService'
import { useNavigate } from 'react-router-dom'
import { cowDetailsPath } from '../../app/router/routerPaths'

interface Props {
  cows: Cow[]
}

function MainViewList({ cows }: Props) {
  const navigate = useNavigate()

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Numer krowy</th>
            <th>Nazwa krowy</th>
            <th>Data ostatniej inseminacji</th>
            <th>Data ostatniego wycielenia</th>
          </tr>
          {cows.map((cow) => (
            <tr
              key={cow.id}
              onClick={() => {
                navigate(`${cowDetailsPath}/${cow.id}`)
              }}
            >
              <td>{cow.id}</td>
              <td>{cow.name}</td>
              <td>{convertDateToDDMMYYYYString(cow.inseminationLastDate)}</td>
              <td>{convertDateToDDMMYYYYString(cow.calvingLastDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MainViewList
