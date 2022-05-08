function sonarCalc(data) {
  try {
    let numbersArr = data.split("\n").map(Number);
    let prevNum = 0;
    let increasedCount = 0;

    for (let i = 0; i < numbersArr.length; i++) {
      if (i === 0) {
        prevNum = numbersArr[i];
      } else {
        if (numbersArr[i] > prevNum) {
          increasedCount++;
        }
        prevNum = numbersArr[i];
      }
    }
    return increasedCount;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { sonarCalc };
