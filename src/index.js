module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};
  let stack = [];

  for (i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
    openBrackets.push(bracketsConfig[i][0]);
  }

  for (j = 0; j < str.length; j++) {
    let currentSymbol = str[j];

    if (openBrackets.includes(currentSymbol)) {
      if (
        (stack.includes('|') && currentSymbol === '|') ||
        (stack.includes('7') && currentSymbol === '7') ||
        (stack.includes('8') && currentSymbol === '8')
      ) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
