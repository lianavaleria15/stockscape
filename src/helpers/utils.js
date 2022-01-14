const logError = (type = "Server Error", message = "Something went wrong.") => {
  console.error(`[ERROR]: ${type} | ${message}`);
};

const logInfo = (type, message) => {
  console.log(`[INFO]: ${type} | ${message}`);
};

const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

// check if field is present in the object keys - passed from getPayloadWithValidFieldsOnly
const isAllRequiredFieldsPresent = (fields, payload) =>
  fields.every((field) => Object.keys(payload).includes(field));

module.exports = {
  logError,
  logInfo,
  getPayloadWithValidFieldsOnly,
  isAllRequiredFieldsPresent,
};
