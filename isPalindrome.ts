const isPallindrome = (input: string) => {
  console.log("function isPallindrome");
  const lowercase = input.toLocaleLowerCase();
  const cleaned = lowercase.replace(/[^a-z0-9\s]/g, "");
  const array = cleaned.split("");
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join("");

  if (cleaned === reversedString) {
    return true;
  }
  return false;
};

export default isPallindrome;
