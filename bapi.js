function calculateMoney(ticketNumber) {
  if (ticketNumber < 0) {
    return "Invalid Number";
  }
  const ticketIncome = ticketNumber * 120;
  const guardCost = 500;
  const lunchMembers = 8;
  const lunchCost = 50;
  const cost = guardCost + lunchMembers * lunchCost;
  const netIncome = ticketIncome - cost;
  return netIncome;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const goodLetters = ["a", "y", "i", "e", "o", "u", "w"];
  const goodChecker = name[name.length - 1].toLowerCase();
  for (const letter of goodLetters) {
    if (goodChecker === letter) {
      return "Good Name";
    }
  }
  return "Bad Name";
}

function deleteInvalids(simpleArray) {
  if (!Array.isArray(simpleArray)) {
    return "Invalid Array";
  }
  const newArray = [];
  for (const num of simpleArray) {
    if (typeof num === "number" && !isNaN(num)) {
      newArray.push(num);
    }
  }
  return newArray;
}

function password(passwordObject) {
  if (
    !passwordObject.name ||
    !passwordObject.birthYear ||
    !passwordObject.siteName ||
    passwordObject.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }
  const updatedSite =
    passwordObject.siteName[0].toUpperCase() + passwordObject.siteName.slice(1);
  const newPassword =
    updatedSite + "#" + passwordObject.name + "@" + passwordObject.birthYear;
  return newPassword;
}

function monthlySavings(totalIncome, expenses) {
  let incomeSum = 0;
  if (!Array.isArray(totalIncome) || typeof expenses !== "number") {
    return "invalid input";
  }
  for (const income of totalIncome) {
    if (income >= 3000) {
      const taxedIncome = income - (income * 20) / 100;
      incomeSum = taxedIncome + incomeSum;
    } else {
      incomeSum = income + incomeSum;
    }
  }
  const savings = incomeSum - expenses;
  if (savings < 0) {
    return "earn more";
  } else {
    return savings;
  }
}
