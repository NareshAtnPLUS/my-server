import { expect } from 'chai';
import appConfig from '../config/appConfig';
import request from 'request'

describe("API Testing: Color Code Converter API", function () {

  describe("RGB to Hex conversion", function () {

    var url = `${appConfig.BASE_URL}/api/rgbToHex?red=255&green=255&blue=255`;

    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", function (done) {
      request(url, function (error, response, body) {
        body = JSON.parse(body)
        expect(body.message).to.equal("ffffff");
        done();
      });
    });

  });

  describe("Hex to RGB conversion", function () {
    var url = `${appConfig.BASE_URL}/api/hexToRgb?hex=00ff00`;

    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", function (done) {
      request(url, function (error, response, body) {
        body = JSON.parse(body)
        expect(body.message).to.equal("[0,255,0]");
        done();
      });
    });
  });

});
