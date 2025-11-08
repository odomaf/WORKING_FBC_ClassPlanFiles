// 25-Ins_DayJS-Format
// Instructor demo: using Day.js for formatting, parsing, and simple logic.

// Enable customParseFormat plugin for flexible parsing
dayjs.extend(window.dayjs_plugin_customParseFormat);

// 1. Today's date in "Jan 1, 1999" format
const today = dayjs();
$('#q1').text(today.format('MMM D, YYYY'));

// 2. Day of the week today
$('#q2').text(today.format('dddd'));

// 3. Parse "11/3/2020" and display as:
//    "Tuesday, November 3 2020, 12:00:00 am" (same style as example)
const parsed = dayjs('11/3/2020', 'M/D/YYYY');
$('#q3').text(parsed.format('dddd, MMMM D YYYY, h:mm:ss a'));

// 4. Recycling on every odd week of the year.
//    We'll compute the week number relative to Jan 1st of the current year.
const startOfYear = today.startOf('year');
// +1 so first week is week 1 (not 0)
const weekNum = today.diff(startOfYear, 'week') + 1;
const isOddWeek = weekNum % 2 === 1;

const recyclingMessage = isOddWeek
    ? `Yes — it's week ${weekNum}, an odd week. Put the bin out.`
    : `No — it's week ${weekNum}, an even week. Skip it this time.`;

$('#q4').text(recyclingMessage);
