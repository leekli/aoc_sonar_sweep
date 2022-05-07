function sonarCalc(data) {
  try {
    let numbersArr = data.split("\n").map(Number);
    let prevNum = 0;
    let count = 0;

    for (let i = 0; i < numbersArr.length; i++) {
      if (i === 0) {
        prevNum = numbersArr[i];
      } else {
        if (numbersArr[i] > prevNum) {
          count++;
        }
        prevNum = numbersArr[i];
      }
    }
    return count;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { sonarCalc };
