import { Cow } from "../models/cow";

const mockCows: Cow[] = [
    {
      name: 'Bona',
      id: '12345',
      inseminationLastDate: new Date(2018, 4, 3),
      calvingLastDate: new Date(2017, 5, 12),
    },
    {
      name: 'Mucka',
      id: '56876',
      inseminationLastDate: new Date(2017, 10, 22),
      calvingLastDate: new Date(2016, 2, 17),
    },
    {
      name: 'Klara',
      id: '34563',
      inseminationLastDate: new Date(2017, 7, 13),
      calvingLastDate: new Date(2018, 11, 16),
    },
    {
      name: 'Dorota',
      id: '56356',
      inseminationLastDate: new Date(2018, 11, 4),
      calvingLastDate: new Date(2019, 7, 12),
    },
    {
      name: 'Helga',
      id: '33463',
      inseminationLastDate: new Date(2020, 6, 9),
      calvingLastDate: new Date(2021, 4, 12),
    },
  ]
  
function getMockCows() {
    return mockCows;
}

export default getMockCows