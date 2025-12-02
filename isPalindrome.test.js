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

  describe("test with numbers", () => {
    it("should return true for '1'", () => {
      assert.equal(isPallindrome("1"), true);
    });

    it("should return true for '11', multiple numbers", () => {
      assert.equal(isPallindrome("11"), true);
    });
  });
});

describe("test un-happy path", () => {
  it("should return false for 'ab'", () => {
    assert.equal(isPallindrome("ab"), false);
  });

  it("should return false for 'abbacus'", () => {
    assert.equal(isPallindrome("abbacus"), false);
  });

  describe("test with numbers", () => {
    it("should return false for 'a1'", () => {
      assert.equal(isPallindrome("a1"), false);
    });

    it("should return false for '12', , multiple numbers", () => {
      assert.equal(isPallindrome("12"), false);
    });
  });
});

describe("ignore capital letters", () => {
  it("should return true for A", () => {
    assert.equal(isPallindrome("A"), true);
  });

  it("should return true for Aa", () => {
    assert.equal(isPallindrome("Aa"), true);
  });
});

describe("ignore punctuation", () => {
  it("should return true for a!", () => {
    assert.equal(isPallindrome("a!"), true);
  });
});

describe("ignore word dividers", () => {
  it("should return true for 'a a'", () => {
    assert.equal(isPallindrome("a a"), true);
  });

  it("should return true for 'aa a', space not in middle", () => {
    assert.equal(isPallindrome("aa a"), true);
  });
});
