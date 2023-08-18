import moment from "moment";

const dateFormat = 'DD-MM-YYYY'

function convertDateToDDMMYYYYString(date: Date) {
    const result = moment(date).format(dateFormat).toString();
    return result;
}

export default convertDateToDDMMYYYYString