const isPallindrome = (input: string) => {
  console.log("function isPallindrome");
  const inputLowerCase = input.toLocaleLowerCase();
  const array = inputLowerCase.split("");
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join("");

  if (inputLowerCase !== reversedString) {
    return false;
  }
  return true;
};

export default isPallindrome;
