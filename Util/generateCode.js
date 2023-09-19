const randomstring = require("randomstring");

exports.getStoreCode = () => {
  return randomstring.generate({
    length: 5,
    charset: "alphabetic",
    capitalization: "uppercase",
  });
};
