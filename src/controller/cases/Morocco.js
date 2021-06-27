const Morocco = (dataJson) => {
  // Morocco

  const totalConfirmedMorocco = dataJson.Countries[117].TotalConfirmed;
  const totalDeathsMorocco = dataJson.Countries[117].TotalDeaths;
  const totalRecoveredMorocco = dataJson.Countries[117].TotalRecovered;
  const newConfirmedMorocco = dataJson.Countries[117].NewConfirmed;
  const newDeathsMorocco = dataJson.Countries[117].NewDeaths;
  const newRecoveredMorocco = dataJson.Countries[117].NewRecovered;

  document.getElementById("totalConfirmedMorocco").innerHTML =
    totalConfirmedMorocco;
  document.getElementById("totalDeathsMorocco").innerHTML = totalDeathsMorocco;
  document.getElementById("totalRecoveredMorocco").innerHTML =
    totalRecoveredMorocco;
  document.getElementById("newConfirmedMorocco").innerHTML =
    newConfirmedMorocco;
  document.getElementById("newDeathsMorocco").innerHTML = newDeathsMorocco;
  document.getElementById("newRecoveredMorocco").innerHTML =
    newRecoveredMorocco;
};
export default Morocco;
