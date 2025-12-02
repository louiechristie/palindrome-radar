import { describe, it } from "node:test";
import assert from "node:assert";

import isPallindrome from "../../isPalindrome.ts";

type Test = {
  input: string;
  output: boolean;
};

// From examples at https://www.codurance.com/katas/palindrome-radar
const tests: Test[] = [
  { input: "anna", output: true },
  { input: "anna!", output: true },
  { input: "race car", output: true },
  { input: "race car1", output: false },
  { input: "Race car", output: true },
  { input: "A man, a plan, a canal, Panama!", output: true },
  { input: "axDbTbd6", output: false },
  { input: "6axDbTbd6", output: true },
  { input: "Hello, World!", output: false },
];

describe("acceptance tests", () => {
  tests.forEach((test) => {
    const { input, output } = test;
    const result = isPallindrome(input);
    const description = `${input} should return ${output}`;

    it(description, () => {
      assert.equal(result, output);
    });
  });
});
