import moment from "moment";
import { DATE_FORMAT, MONTHS } from "../constants";

const Moment = {
  getNow: () => moment().toDate(),
  getDateFromNowWithDays: (days) => moment().add(days, "d").toDate(),
  addDays: (date, amount) => {
    return moment(date).add(amount, "d").toDate();
  },
  getDay: (date) => moment(date).get("date"),
  getMonth: (date) => MONTHS[moment(date).get("month")],
  getYear: (date) => moment(date).get("year"),
  diffDays: (date1, date2) => moment(date1).diff(moment(date2), "days"),
};

export default Moment;
