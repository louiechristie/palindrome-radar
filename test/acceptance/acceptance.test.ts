import { describe, it } from "node:test";
import assert from "node:assert";

import isPallindrome from "../../isPalindrome.ts";

// From examples at https://www.codurance.com/katas/palindrome-radar

describe("acceptance tests", () => {
  it("should return true for 'anna'", () => {
    assert.strictEqual(true, isPallindrome("anna"));
  });

  it("should return true for 'anna!'", () => {
    assert.strictEqual(true, isPallindrome("anna!"));
  });

  it("should return true for 'race car'", () => {
    assert.strictEqual(true, isPallindrome("race car"));
  });

  it("should return false for 'race car1'", () => {
    assert.strictEqual(false, isPallindrome("race car1"));
  });

  it("should return true for 'Race car'", () => {
    assert.strictEqual(true, isPallindrome("Race car"));
  });

  it("should return true for 'A man, a plan, a canal, Panama!'", () => {
    assert.strictEqual(true, isPallindrome("A man, a plan, a canal, Panama!"));
  });

  it("should return false for 'axDbTbd6'", () => {
    assert.strictEqual(false, isPallindrome("axDbTbd6"));
  });

  it("should return false for '6axDbTbd6'", () => {
    assert.strictEqual(true, isPallindrome("6axDbTbd6"));
  });

  it("should return true for 'Hello, World!'", () => {
    assert.strictEqual(false, isPallindrome("Hello, World!"));
  });
});
