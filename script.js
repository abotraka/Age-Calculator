const inputElements = document.querySelectorAll(".card__input");
const submitbutton = document.querySelector(".card__button");

const validateDay = (day) => {
  // if (day && day >= 1 && day <= 31 && !isNaN(day)) {
  //   return true;
  // }
  // return false;
  return day && !isNaN(day) && day >= 1 && day <= 31;
};
const validateMonth = (month) => {
  // if (month && month >= 1 && month <= 12) {
  //   return true;
  // }
  // return false;
  return month && !isNaN(month) && month >= 1 && month <= 12;
};
const validateYear = (year) => {
  // if (year && year >= 1900 && year <= new Date().getFullYear()) {
  //   return true;
  // }
  // return false;
  const currentYear = new Date().getFullYear();
  return year && !isNaN(year) && year >= 1900 && year <= currentYear;
};

const IsvalidateInputs = (dayElement, monthElement, yearElement) => {
  // let isValid = (false, false, false);
  let isValid = [false, false, false];
  if (!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    dayElement.classList.remove("card__input--error");
    isValid[0] = true;
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    monthElement.classList.remove("card__input--error");
    isValid[1] = true;
  }
  // if (!validateYear(yearElement.value)) {
  //   yearElement.classList.add("card__input--error");
  // } else {
  //   yearElement.classList.remove("card__input--error");
  //   isValid[2] = true;
  // }
  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    yearElement.classList.remove("card__input--error");
    isValid[2] = true;
  }

  return isValid.every((item) => item === true);
};

const calculateAge = (year, month, day) => {
  const date = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = date.getFullYear() - birthDate.getFullYear();
  const m = date.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && date.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
};
const onClickHandler = () => {
  const DayElement = document.querySelector('.card__input[name="day"]');
  const monthElement = document.querySelector('.card__input[name="month"]');
  const yearElement = document.querySelector('.card__input[name="year"]');
  const resultElement = document.querySelector(".card__resultValue");

  if (!IsvalidateInputs(DayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    return;
  }

  resultElement.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    DayElement.value
  );
};

const inputElement = document.querySelector(".input-class");

// inputElements.forEach((item) => {
//   item.addEventListener(
//     "keydown",
//     (event) => event.key === "Enter" && onClickHandler()
//   );
// });
inputElements.forEach((item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") onClickHandler();
  });
});

submitbutton.addEventListener("click", onClickHandler);
