import { expect } from "chai";
import { hexToRGB, RGBToHex } from "../controller/converter";

describe("Unit Testing: Color Code Converter", function () {
  describe("RGB to Hex conversion", function () {
    it("converts the basic colors", function () {
      var redHex = RGBToHex(255, 0, 0);
      var greenHex = RGBToHex(0, 255, 0);
      var blueHex = RGBToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function () {
    it("converts the basic colors", function () {
      var red = hexToRGB("ff0000");
      var green = hexToRGB("00ff00");
      var blue = hexToRGB("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
});