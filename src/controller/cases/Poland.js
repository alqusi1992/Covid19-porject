const Poland = (dataJson) => {
  // Poland

  const totalConfirmedPoland = dataJson.Countries[137].TotalConfirmed;
  const totalDeathsPoland = dataJson.Countries[137].TotalDeaths;
  const totalRecoveredPoland = dataJson.Countries[137].TotalRecovered;
  const newConfirmedPoland = dataJson.Countries[137].NewConfirmed;
  const newDeathsPoland = dataJson.Countries[137].NewDeaths;
  const newRecoveredPoland = dataJson.Countries[137].NewRecovered;

  document.getElementById("totalConfirmedPoland").innerHTML =
    totalConfirmedPoland;
  document.getElementById("totalDeathsPoland").innerHTML = totalDeathsPoland;
  document.getElementById("totalRecoveredPoland").innerHTML =
    totalRecoveredPoland;
  document.getElementById("newConfirmedPoland").innerHTML = newConfirmedPoland;
  document.getElementById("newDeathsPoland").innerHTML = newDeathsPoland;
  document.getElementById("newRecoveredPoland").innerHTML = newRecoveredPoland;
};
export default Poland;
