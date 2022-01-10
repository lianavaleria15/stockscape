// const colors = require("colors");

// colors.setTheme({
//   success: ["bgGreen", "black"],
//   warning: ["bgBrightYellow", "black", "bold"],
//   fail: ["bgRed", "white", "bold"],
//   message: ["bgWhite", "black"],
// });

const logError = (type = "Server Error", message = "Something went wrong") => {
  console.error(`[ERROR]: ${type} | ${message}`.fail);
};

const logInfo = (type, message) => {
  console.log(`[INFO]: ${type} | ${message}`.message);
};

const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

module.exports = {
  logError,
  logInfo,
  getPayloadWithValidFieldsOnly,
};
