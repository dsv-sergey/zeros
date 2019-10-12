module.exports = function zeros(expression) {
  let elementsArray = expression.split("*"),
    semiFactorialsArray = [],
    factorialsArray = [],
    countZero = 0;

  if (
    elementsArray.every(el => {
      return parseInt(el) % 2 && el.includes("!!");
    })
  ) return 0;

  elementsArray.forEach(el => {
    if (el.slice(-2) == "!!") {
      semiFactorialsArray.push(parseInt(el));
    } else {
      factorialsArray.push(parseInt(el));
    }
  });

  if (factorialsArray.length > 0) {
    factorialsArray.forEach(el => {
      while (el >= 5) {
        let result = Math.floor(el / 5);
        countZero += result;
        el = result;
      }
    });
  }

  if (semiFactorialsArray.length > 0) {
    semiFactorialsArray.forEach(el => {
      for (let num = el; num > 0; num = num - 2) {
        if (num % 5 === 0) {
          countZero++;
        }
        if (num % 25 === 0) {
          countZero++;
        }
      }
    });
  }

  return countZero;
};
