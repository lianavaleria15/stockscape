module.exports = {
  eq: (val1, val2) => {
    return val1 === val2;
  },
  favCompany: (val1, val2) => {
    console.log(val1, val2.name);
    return val1 === val2.name;
  },
};
