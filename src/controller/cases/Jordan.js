const Jordan = (dataJson) => {
  // Jordan cases

  const totalConfirmedJordan = dataJson.Countries[85].TotalConfirmed;
  const totalDeathsJordan = dataJson.Countries[85].TotalDeaths;
  const totalRecoveredJordan = dataJson.Countries[85].TotalRecovered;
  const newConfirmedJordan = dataJson.Countries[85].NewConfirmed;
  const newDeathsJordan = dataJson.Countries[85].NewDeaths;
  const newRecoveredJordan = dataJson.Countries[85].NewRecovered;

  document.getElementById("totalConfirmedJordan").innerHTML =
    totalConfirmedJordan;
  document.getElementById("totalDeathsJordan").innerHTML = totalDeathsJordan;
  document.getElementById("totalRecoveredJordan").innerHTML =
    totalRecoveredJordan;
  document.getElementById("newConfirmedJordan").innerHTML = newConfirmedJordan;
  document.getElementById("newDeathsJordan").innerHTML = newDeathsJordan;
  document.getElementById("newRecoveredJordan").innerHTML = newRecoveredJordan;
};
export default Jordan;
