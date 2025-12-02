import { it, describe } from "node:test";
import assert from "node:assert";
import isPallindrome from "./isPalindrome.ts";

describe("test happy path", () => {
  it("should return true for 'a', a single alphanumeric characters", () => {
    assert.equal(isPallindrome("a"), true);
  });

  it("should return true for 'aa'", () => {
    assert.equal(isPallindrome("aa"), true);
  });

  it("should return true for 'aaa'", () => {
    assert.equal(isPallindrome("aaa"), true);
  });

  it("should return true for 'ana'", () => {
    assert.equal(isPallindrome("ana"), true);
  });

  it("should return true for 'anna'", () => {
    assert.equal(isPallindrome("anna"), true);
  });

  it("should return true for 'anina' with odd letter in middle", () => {
    assert.equal(isPallindrome("anina"), true);
  });
});
