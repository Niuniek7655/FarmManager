import "./BasicCowDetails.css";
import getMockCows from "../../services/mockDateService";
import { Cow } from "../../models/cow";

interface Props {
  cowId: string | null;
}

function BasicCowDetails({ cowId }: Props) {
  //logika pobierania danych zwierzecia i modyfikacji wyglądu formularza

  let readonlyForm: boolean = true;
  let cow: Cow | undefined;

  if (cowId === null) {
    readonlyForm = false;
  } else {
    cow = getMockCows().find((x) => x.id === cowId);
  }

  return (
    <>
      <div className="cowDetailsContainer">
        <div className="cowDetailsBox">
          <div className="basicCowContainer">
            <h2>Dane podstawowe</h2>

            <label htmlFor="cowName">Nazwa zwierzęcia: </label>
            <input
              type="text"
              id="cowName"
              name="cowName"
              value={cow?.name}
              readOnly={readonlyForm}
            ></input>
            <br />
            <br />

            <label htmlFor="cowNumber">Numer krowy: </label>
            <input
              type="text"
              id="cowNumber"
              name="cowNumber"
              value={cow?.id}
              readOnly={readonlyForm}
            ></input>
            <br />
            <br />

            <label htmlFor="fname">Data ostatniego wycielenia: </label>
            <input
              type="date"
              id="fname"
              name="fname"
              value={cow?.calvingLastDate.toISOString().split("T")[0]}
              readOnly={readonlyForm}
            ></input>
            <br />
            <br />

            <label htmlFor="fname">Data ostatnie inseminacji: </label>
            <input
              type="date"
              id="fname"
              name="fname"
              value={cow?.inseminationLastDate.toISOString().split("T")[0]}
              readOnly={readonlyForm}
            ></input>
            <br />
            <br />
          </div>
        </div>

        <div className="cowDetailsBox">
          <div className="basicCowContainer">
            <h2>Historia zabiegów</h2>
          </div>
        </div>

        <div className="cowDetailsBox">
          <div className="basicCowContainer">
            <h2>Historia leczenia</h2>
          </div>
        </div>

        <div className="cowDetailsBox">
          <div className="basicCowContainer"></div>
        </div>
      </div>
    </>
  );
}

export default BasicCowDetails;
