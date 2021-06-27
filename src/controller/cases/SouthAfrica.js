const SouthAfrica = (dataJson) => {
  // South Africa

  const totalConfirmedSouthAfrica = dataJson.Countries[160].TotalConfirmed;
  const totalDeathsSouthAfrica = dataJson.Countries[160].TotalDeaths;
  const totalRecoveredSouthAfrica = dataJson.Countries[160].TotalRecovered;
  const newConfirmedSouthAfrica = dataJson.Countries[160].NewConfirmed;
  const newDeathsSouthAfrica = dataJson.Countries[160].NewDeaths;
  const newRecoveredSouthAfrica = dataJson.Countries[160].NewRecovered;

  document.getElementById("totalConfirmedSouthAfrica").innerHTML =
    totalConfirmedSouthAfrica;
  document.getElementById("totalDeathsSouthAfrica").innerHTML =
    totalDeathsSouthAfrica;
  document.getElementById("totalRecoveredSouthAfrica").innerHTML =
    totalRecoveredSouthAfrica;
  document.getElementById("newConfirmedSouthAfrica").innerHTML =
    newConfirmedSouthAfrica;
  document.getElementById("newDeathsSouthAfrica").innerHTML =
    newDeathsSouthAfrica;
  document.getElementById("newRecoveredSouthAfrica").innerHTML =
    newRecoveredSouthAfrica;
};
export default SouthAfrica;
