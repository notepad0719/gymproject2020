const yearBox = document.querySelector(".select-year");
const monthBox = document.querySelector(".select-month");

const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

function checkYear() {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    createTbl(leapYear);
  } else {
    createTbl(notLeapYear);
  }
}

function selectYear() {
  for (let y = 2013; y <= year; y++) {
    const year = document.createElement("option");
    yearBox.appendChild(year);
    year.value = y;
    year.innerHTML = y;
  }
}

function selectMonth() {
  for (let m = 1; m < 13; m++) {
    const month = document.createElement("option");
    monthBox.appendChild(month);
    month.value = `${m}월`;
    month.innerHTML = `${m}월`;
  }
}

function init() {
  selectYear();
  selectMonth();
}

init();
