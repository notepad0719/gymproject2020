const tbl = document.createElement("table");

const addedRow = [];
const addedCell = [];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

// 날짜는 +1 해줘야 한다. 왜? 나중에 mdn에서 정의 다시 살펴보자

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  year = leapYear;
} else {
  year = notLeapYear;
}

const dayCount = year[month - 1];

for (let r = 0; r < 3; r++) {
  addedRow[r] = document.createElement("tr");
  tbl.appendChild(addedRow[r]);
  for (let c = 0; c < dayCount; c++) {
    addedCell[c] = document.createElement("td");
    addedRow[r].appendChild(addedCell[c]);
  }
}
