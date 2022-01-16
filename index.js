const _MS_PER_YEAR= 1000 * 60 * 60 * 24 * 30 * 12;

function dateDiff(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  const decimalYearsAgo = (Math.round(((utc2 - utc1) / _MS_PER_YEAR) * 10) / 10).toString();
  const decimalMonths = decimalYearsAgo.substring(2) * 1;
  let yearsAgo = decimalYearsAgo.substring(0,1) * 1;
  let monthsAgo = "";

  switch (decimalMonths) {
    case 4: case 5: case 6: case 7:
      monthsAgo = "and a half ";
      break;

    default:
      break;
  };

  if(decimalYearsAgo.includes("8") || decimalYearsAgo.includes("9")){
    yearsAgo = yearsAgo * 1 + 1;
  }

  return yearsAgo + (yearsAgo === 1 ? " year " : " years ") + monthsAgo + "ago";
};

window.onload = () => {
  const startProgrammingDate = new Date('2020/1/18');
  const today = new Date();
  const timeAgo = dateDiff(startProgrammingDate, today);
  document.getElementById("timeAgo").innerHTML = timeAgo;
};