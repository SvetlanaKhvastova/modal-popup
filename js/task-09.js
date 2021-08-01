const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dateString = "Aug 03 - Aug 05";

function formatDateStr(date) {
  return date.split(" ").filter((el) => el !== "-");
}

const a = formatDateStr(dateString);
let first = months.indexOf(a[0]);
let two = months.indexOf(a[2]);

console.log(a);
console.log(`first`, first);
console.log(`two`, two);

const currentDate = new Date();
const getCurrentDate = currentDate.getDate();
const getCurrentMonth = currentDate.getMonth();
const getCurrentYear = currentDate.getFullYear();

console.log(`currentDate :`, currentDate);
console.log(`getCurrentDate :`, getCurrentDate);
console.log(`getCurrentMonth :`, getCurrentMonth);
console.log(`getCurrentYear :`, getCurrentYear);

let dateOne = new Date(getCurrentYear, first, +a[1]);
let dateTwo = new Date(getCurrentYear, first, +a[3]);
let timeDiff = Math.abs(dateOne.getTime() - currentDate.getTime());
let timeDiff2 = Math.abs(dateTwo.getTime() - currentDate.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
let diffDays2 = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
console.log(diffDays);
console.log(diffDays2);

console.log(`Difference in Days: ${diffDays}-${diffDays2} days`);
console.log(
  `currentDate: ${months[getCurrentMonth]} ${getCurrentDate}, ${getCurrentYear}`
);
console.log(`${dateString}, ${getCurrentYear}`);
