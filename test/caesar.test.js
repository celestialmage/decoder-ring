// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling:", () => {
    it("should return false if the shift value is 0", () => {
      const input = "This message is perfect.";
      const shift = 0;

      const expected = false;
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should return false if the shift value is greater than 25", () => {
      const input = "This message is perfect.";
      const shift = 26;

      const expected = false;
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should return false if the shift value is less that -25", () => {
      const input = "This message is perfect.";
      const shift = -26;

      const expected = false;
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });
  });

  describe("encoding messages:", () => {
    it("should properly shift letters", () => {
      const input = "message";
      const shift = 3;

      const expected = "phvvdjh";
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should maintain spaces and other symbols", () => {
      const input = "this message is perfect.";
      const shift = 3;

      const expected = "wklv phvvdjh lv shuihfw.";
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should ignore capital letters", () => {
      const input = "This Message Is Perfect.";
      const shift = 3;

      const expected = "wklv phvvdjh lv shuihfw.";
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should loop letters around if they go 'off' the alphabet", () => {
      const input = "z";
      const shift = 3;

      const expected = "c";
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });

    it("should allow for negative shifting", () => {
      const input = "a";
      const shift = -2;

      const expected = "y";
      const actual = caesar(input, shift);

      expect(expected).to.equal(actual);
    });
  });

  describe("decoding messages:", () => {
    it("should decode messages by shifting in the opposite direction", () => {
      const input = "op";
      const shift = 1;

      const expected = "no";
      const actual = caesar(input, shift, false);

      expect(expected).to.equal(actual);
    });

    it("should maintain spaces and other symbols", () => {
      const input = "qr wkdqnv.";
      const shift = 3;

      const expected = "no thanks.";
      const actual = caesar(input, shift, false);

      expect(expected).to.equal(actual);
    });

    it("should ignore capital letters", () => {
      const input = "Qr Wkdqnv.";
      const shift = 3;

      const expected = "no thanks.";
      const actual = caesar(input, shift, false);

      expect(expected).to.equal(actual);
    });

    it("should loop around if it 'falls' off the alphabet", () => {
      const input = "ab";
      const shift = 1;

      const expected = "za";
      const actual = caesar(input, shift, false);

      expect(expected).to.equal(actual);
    });

    it("should allow for negative shifts", () => {
      const input = "kl qexkhp";
      const shift = -3;

      const expected = "no thanks";
      const actual = caesar(input, shift, false);

      expect(expected).to.equal(actual);
    });
  });
});
