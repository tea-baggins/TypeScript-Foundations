/********************
 * ENUMS *
 ********************/

// Enums are a way to define a set of named constants. They are often used to represent a set of related values, such as the days of the week or the months of the year.
// TypeScript supports both numeric and string enums, providing a flexible way to define and work with sets of constants.
// Numeric Enums: Numeric enums are a way to define a set of named constants with numeric values. By default, the values of the constants start at 0 and increment by 1 for each subsequent constant.

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: Days = Days.Wednesday;
console.log(`Today is ${Days[today]}`); //Output: Today is Wednesday

//In this example, Day is a numeric enum that represents the days of the week. The constants Sunday, Monday, Tuesday, and so on are assigned numeric values starting from 0.

// 2. String Enums (Very popular in QA automation)
// I explicitly assign string values. This makes debugging tests easier.
enum TestStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Skipped = "SKIPPED",
}

function logTestResult(status: TestStatus) {
  console.log(`Test result is: ${status}`);
}

logTestResult(TestStatus.Success); // Output: Test result is: SUCCESS
