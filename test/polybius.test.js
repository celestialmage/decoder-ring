// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding messages:", () => {
    it("should properly encode a message by translating letters to two digit numbers", () => {
      const input = "ab";

      const expected = "1121";
      const actual = polybius(input);

      expect(expected).to.equal(actual);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const input = "ij";
      const expected = "4242";
      const actual = polybius(input);

      expect(expected).to.equal(actual);
    });

    it("should leave spaces", () => {
      const input = "a a";
      const expected = "11 11";
      const actual = polybius(input);

      expect(expected).to.equal(actual);
    });
  });

  describe("decoding messages:", () => {
    it("should decode a message by translating two digit numbers into letters", () => {
      const input = "1121";
      const expected = "ab";
      const actual = polybius(input, false);

      expect(expected).to.equal(actual);
    });

    it("should translate 42 to both i and j", () => {
      const input = "42";
      const expected = "(i/j)";
      const actual = polybius(input, false);

      expect(expected).to.equal(actual);
    });

    it("should leave spaces as is", () => {
      const input = "11 21";
      const expected = "a b";
      const actual = polybius(input, false);

      expect(expected).to.equal(actual);
    });

    it("should return false if the number of numbers is odd", () => {
      const input = "11211";
      const expected = false;
      const actual = polybius(input, false);

      expect(expected).to.equal(actual);
    });
  });
});
