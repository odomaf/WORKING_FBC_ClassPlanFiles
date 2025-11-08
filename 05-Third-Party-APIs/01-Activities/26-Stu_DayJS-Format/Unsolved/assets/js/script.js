// 26-Stu_DayJS-Format
// Use Day.js to answer each question, then display the result
// in the matching <p> with the given id (e.g. #1a, #2a, etc).

// Enable Unix plugin for questions that use Unix timestamps
dayjs.extend(window.dayjs_plugin_unix);

// 1. What is your graduation date in the following format: Jan 1, 1999?
// - Choose any graduation date you like.
// - Use dayjs('YYYY-MM-DD').format('MMM D, YYYY')
// - Assign the result to #1a

// 2. What day of the week will 1/1/2027 be?
// - Parse 1/1/2027 using Day.js
// - Format it with 'dddd' (full weekday name)
// - Assign the result to #2a

// 3. What is the current time in the format: hours:minutes:seconds (12-hour clock)?
// - Use the current time: dayjs()
// - Use format 'hh:mm:ss'
// - Assign the result to #3a

// 4. What is the current Unix timestamp?
// - Use Day.js to get the current Unix time
// - Assign the result to #4a

// 5. Parse Unix timestamp 1318781876 and convert into any readable format.
// - Use dayjs.unix(1318781876)
// - Format however you like (e.g. 'MMM D, YYYY, h:mm:ss a')
// - Assign the result to #5a

// 6. What is the difference in days between May 4, 2027 and today?
// - Create a Day.js object for '2027-05-04'
// - Create a Day.js object for today
// - Use .diff(otherDate, 'day') to get whole days difference
// - Assign the result to #6a

// Write your code below this line 👇
