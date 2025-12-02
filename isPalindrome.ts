const isPallindrome = (input: string) => {
  console.log("function isPallindrome");
  const array = input.split("");
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join("");

  if (input !== reversedString) {
    return false;
  }
  return true;
};

export default isPallindrome;
