import { it, describe } from "node:test";
import assert from "node:assert";
import isPallindrome from "./isPalindrome.ts";

describe("test", () => {
    it("should return true for 'a', a single alphanumeric characters", () => {
        assert.equal(isPallindrome("a"), true);
    });
});
