const VALIDATE_PHONE_NUMBER_RULES = [
  {
    phoneNumberLength: 11,
    phoneNumberStartWith: "84",
  },
  {
    phoneNumberLength: 10,
    phoneNumberStartWith: "0",
  },
];

export const generateListFromObject = (object) => {
  return Object.values(object);
};

export const isEmpty = (value) => {
  return value === "" || value === null || value === undefined;
};

export function isValidInteger(value) {
  return !isEmpty(value) && !isNaN(value);
}

export const isValidEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const isValidPhone = (phoneNumber) => {
  if (!isEmpty(phoneNumber) && phoneNumber[0] === "+")
    phoneNumber = phoneNumber.slice(1);
  for (let rule of VALIDATE_PHONE_NUMBER_RULES) {
    if (
      phoneNumber.length === rule.phoneNumberLength &&
      phoneNumber.indexOf(rule.phoneNumberStartWith) === 0
    )
      return true;
  }

  return false;
};

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const renderPriceText = (price) => {
  return `${price}$/PER NIGHT`;
};
