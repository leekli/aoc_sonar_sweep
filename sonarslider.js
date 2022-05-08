function sonarSlider(data) {
  try {
    let numbersArr = data.split("\n").map(Number);
    let currSlider = 0;
    let prevSlider = 0;
    let increasedCount = 0;

    for (let i = 2; i < numbersArr.length; i += 1) {
      currSlider = numbersArr[i - 2] + numbersArr[i - 1] + numbersArr[i];
      if (prevSlider !== 0 && currSlider > prevSlider) {
        increasedCount++;
      }
      prevSlider = currSlider;
    }

    return increasedCount;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { sonarSlider };
