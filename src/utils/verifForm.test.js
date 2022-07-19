import { isText, isTel, isEmail, isPostal } from "./verifForm";

describe("Basic functions to test the fields individually", () => {
  describe("Is text function", () => {
    it("should be a text", () => {
      const result = isText("This is a text");
      expect(result).toBeTruthy;
    });
    it("shouldn't be a text", () => {
      const result = isText("  ");
      expect(result).toBeFalsy;
    });
    it("shouldn't be a text", () => {
      const result = isText("");
      expect(result).toBeFalsy;
    });
  });
  describe("Is phone number function", () => {
    it("should be a phone number", () => {
      const result = isTel("+33 6 29 34 21 85");
      expect(result).toBeTruthy;
    });
    it("should be a phone number", () => {
      const result = isTel("06 29 34 21 85");
      expect(result).toBeTruthy;
    });
    it("should be a phone number", () => {
      const result = isTel("6 29 34 21 85");
      expect(result).toBeTruthy;
    });
    it("should be a phone number", () => {
      const result = isTel("06-29-34-21-85");
      expect(result).toBeTruthy;
    });
    it("should be a phone number", () => {
      const result = isTel("0629342185");
      expect(result).toBeTruthy;
    });
    it("shouldn't be a phone number", () => {
      const result = isTel("+33 6 29 34 21");
      expect(result).toBeFalsy;
    });
    it("shouldn't be a phone number", () => {
      const result = isTel("06 29 34 21 0");
      expect(result).toBeFalsy;
    });
  });
  describe("Is e-mail function", () => {
    it("should be an email adress", () => {
      const result = isEmail("test@example.com");
      expect(result).toBeTruthy;
    });
    it("shouldn't be an email adress", () => {
      const result = isEmail("test@example");
      expect(result).toBeFalsy;
    });
    it("should be an email adress", () => {
      const result = isEmail("testexample");
      expect(result).toBeFalsy;
    });
  });
  describe("Is Postal function", () => {
    it("should be a postal code", () => {
      const result = isPostal(93440);
      expect(result).toBeTruthy;
    });
    it("shouldn't be a postal code", () => {
      const result = isPostal(parseInt("00000"));
      expect(result).toBeFalsy;
    });
    it("shouldn't be a postal code", () => {
      const result = isPostal(123456);
      expect(result).toBeFalsy;
    });
  });
});
