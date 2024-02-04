// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling:", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const input = "meow";
      const expected = false;
      const actual = substitution(input);

      expect(expected).to.equal(actual);
    });

    it("should return false if the new alphabet isn't 26 characters", () => {
      const input = "meow";
      const alpha = "abc";
      const expected = false;
      const actual = substitution(input, alpha);

      expect(expected).to.equal(actual);
    });

    it("should return false if the new alphabet repeats letters", () => {
      const input = "meow";
      const alpha = "abcabcabcabcabcabcabcabcyz";
      const expected = false;
      const actual = substitution(input, alpha);

      expect(expected).to.equal(actual);
    });
  });

  describe("encoding messages:", () => {
    it("should encode messages using the new given alphabet", () => {
      const input = "thinkful";
      const alpha = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "jrufscpw";
      const actual = substitution(input, alpha);

      expect(expected).to.equal(actual);
    });

    it("should work with special characters", () => {
      const input = "message";
      const alpha = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "y&ii$r&";
      const actual = substitution(input, alpha);

      expect(expected).to.equal(actual);
    });

    it("should preserve spaces", () => {
      const input = "You are an excellent spy";
      const alpha = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(input, alpha);

      expect(expected).to.equal(actual);
    });
  });

  describe("decoding messages:", () => {
    it("should decode a message by using the new alphabet", () => {
      const input = "jrufscpw";
      const alpha = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "thinkful";
      const actual = substitution(input, alpha, false);

      expect(expected).to.equal(actual);
    });

    it("should work with special characters", () => {
      const input = "y&ii$r&";
      const alpha = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "message";
      const actual = substitution(input, alpha, false);

      expect(expected).to.equal(actual);
    });

    it("should keep spaces", () => {
      const input = "y&i i$r&";
      const alpha = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "mes sage";
      const actual = substitution(input, alpha, false);

      expect(expected).to.equal(actual);
    });
  });
});
