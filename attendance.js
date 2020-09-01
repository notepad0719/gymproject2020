const tbl = document.createElement("table");

const addedRow = [];
const addedCell = [];
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

function createTbl(checkedYear) {
  const dateCount = checkedYear[month - 1];

  for (let r = 0; r < 3; r++) {
    addedRow[r] = document.createElement("tr");
    tbl.appendChild(addedRow[r]);
    for (let c = 0; c < dateCount; c++) {
      addedCell[c] = document.createElement("td");
      addedRow[r].appendChild(addedCell[c]);
    }
  }
  printTblHeader(dateCount);
}

function printTblHeader(dateCount) {
  for (let d = 0; d < dateCount; d++) {
    if (d == 0) {
      tbl.rows[0].cells[0].innerHTML = "이름";
    } else if (d == 1) {
      tbl.rows[0].cells[1].innerHTML = "나이";
    } else if (d == 2) {
      tbl.rows[0].cells[2].innerHTML = "납부 여부";
    } else {
      tbl.rows[0].cells[d].innerHTML = d + 1;
    }
  }
}
function init() {
  checkYear();
}

init();
