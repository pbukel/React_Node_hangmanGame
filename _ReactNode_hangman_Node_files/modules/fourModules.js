const emailValidate = require("is-email");

module.exports = {
  lastSymbol: (str) => {
    console.log(str[str.length - 1]);
  },
  multiNumber: (num, str) => {
    for (let i = 0; i < num; i++) {
      console.log(str);
    }
  },
  removeUpper: (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i].toUpperCase()) result += str[i];
    }
    console.log(result);
  },
  upperLower: (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) result += str[i].toLowerCase();
      if (str[i] === str[i].toLowerCase()) result += str[i].toUpperCase();
    }
    console.log(result);
  },
  removeNumbers: (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "0") {
        if (!parseInt(str[i])) result += str[i];
      }
    }

    console.log(result);
  },
  emailValtest: (arr) => {
    let rasult = "";
    for (let i = 0; i < arr.length; i++) {
      if (emailValidate(arr[i])) {
        rasult += true;
        rasult += " ";
      } else {
        rasult += false;
      }
    }
    console.log(rasult);
    rasult += " ";
  },
};
