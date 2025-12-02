import { it, describe } from "node:test";
import assert from "node:assert";
import isPallindrome from "../../isPalindrome.ts";

describe("test happy path", () => {
  it("should return true for 'a', a single alphanumeric characters", () => {
    assert.strictEqual(isPallindrome("a"), true);
  });

  it("should return true for 'aa'", () => {
    assert.strictEqual(isPallindrome("aa"), true);
  });

  it("should return true for 'aaa'", () => {
    assert.strictEqual(isPallindrome("aaa"), true);
  });

  it("should return true for 'ana'", () => {
    assert.strictEqual(isPallindrome("ana"), true);
  });

  it("should return true for 'anna'", () => {
    assert.strictEqual(isPallindrome("anna"), true);
  });

  it("should return true for 'anina' with odd letter in middle", () => {
    assert.strictEqual(isPallindrome("anina"), true);
  });

  describe("test with numbers", () => {
    it("should return true for '1'", () => {
      assert.strictEqual(isPallindrome("1"), true);
    });

    it("should return true for '11', multiple numbers", () => {
      assert.strictEqual(isPallindrome("11"), true);
    });
  });
});

describe("test un-happy path", () => {
  it("should return false for 'ab'", () => {
    assert.strictEqual(isPallindrome("ab"), false);
  });

  it("should return false for 'abbacus'", () => {
    assert.strictEqual(isPallindrome("abbacus"), false);
  });

  describe("test with numbers", () => {
    it("should return false for 'a1'", () => {
      assert.strictEqual(isPallindrome("a1"), false);
    });

    it("should return false for '12', , multiple numbers", () => {
      assert.strictEqual(isPallindrome("12"), false);
    });
  });
});

describe("ignore capital letters", () => {
  it("should return true for A", () => {
    assert.strictEqual(isPallindrome("A"), true);
  });

  it("should return true for Aa", () => {
    assert.strictEqual(isPallindrome("Aa"), true);
  });
});

describe("ignore punctuation", () => {
  it("should return true for a!", () => {
    assert.strictEqual(isPallindrome("a!"), true);
  });
});

describe("ignore word dividers", () => {
  it("should return true for 'a a'", () => {
    assert.strictEqual(isPallindrome("a a"), true);
  });

  it("should return true for 'aa a', space not in middle", () => {
    assert.strictEqual(isPallindrome("aa a"), true);
  });
});
