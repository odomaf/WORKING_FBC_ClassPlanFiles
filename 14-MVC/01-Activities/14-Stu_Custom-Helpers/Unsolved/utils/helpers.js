module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  /*
  ? TODO: Create a custom helper 'format_date' that takes in a timestamp,
  ? adds five years to the date, and formats it as M/D/YYYY
 */
  format_date: (date) => {
    //console.log(date);
    let endDate = new Date(date);
    endDate.setFullYear(date.getFullYear() + 5);
    return endDate.toLocaleDateString();
  },
};
