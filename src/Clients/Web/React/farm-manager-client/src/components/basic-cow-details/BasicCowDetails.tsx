import { isReadable } from 'stream';
import './BasicCowDetails.css'
import getMockCows from '../../services/mockDateService';
import { Cow } from '../../models/cow';

interface Props {
  cowId: string | null
}

function BasicCowDetails({ cowId }: Props) {
  //logika pobierania danych zwierzecia i modyfikacji wyglądu formularza

  let readonlyForm: boolean = true;
  let cow: Cow | undefined;
  if(cowId === null)
  {
    readonlyForm = false;
  }
  else
  {
    cow = getMockCows().find(x => x.id === cowId);
  }

  return (
    <>
      <div className="basicCowContainer">
        <h2>New Animal</h2>
        <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" name="fname"></input>
        <br />
        <br />
        {/* <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" name="fname"></input>
        <br />
        <br /> */}
      </div>
    </>
  )
}

export default BasicCowDetails
