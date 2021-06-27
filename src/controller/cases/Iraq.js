const Iraq = (dataJson) => {
  // Iraq cases

  const totalConfirmedIraq = dataJson.Countries[79].TotalConfirmed;
  const totalDeathsIraq = dataJson.Countries[79].TotalDeaths;
  const totalRecoveredIraq = dataJson.Countries[79].TotalRecovered;
  const newConfirmedIraq = dataJson.Countries[79].NewConfirmed;
  const newDeathsIraq = dataJson.Countries[79].NewDeaths;
  const newRecoveredIraq = dataJson.Countries[79].NewRecovered;

  document.getElementById("totalConfirmedIraq").innerHTML = totalConfirmedIraq;
  document.getElementById("totalDeathsIraq").innerHTML = totalDeathsIraq;
  document.getElementById("totalRecoveredIraq").innerHTML = totalRecoveredIraq;
  document.getElementById("newConfirmedIraq").innerHTML = newConfirmedIraq;
  document.getElementById("newDeathsIraq").innerHTML = newDeathsIraq;
  document.getElementById("newRecoveredIraq").innerHTML = newRecoveredIraq;
};
export default Iraq;
