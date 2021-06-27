const Germany = (dataJson) => {
  // Germany
  const totalConfirmedGermany = dataJson.Countries[63].TotalConfirmed;
  const totalDeathsGermany = dataJson.Countries[63].TotalDeaths;
  const totalRecoveredGermany = dataJson.Countries[63].TotalRecovered;
  const newConfirmedGermany = dataJson.Countries[63].NewConfirmed;
  const newDeathsGermany = dataJson.Countries[63].NewDeaths;
  const newRecoveredGermany = dataJson.Countries[63].NewRecovered;

  document.getElementById("totalConfirmedGermany").innerHTML =
    totalConfirmedGermany;
  document.getElementById("totalDeathsGermany").innerHTML = totalDeathsGermany;
  document.getElementById("totalRecoveredGermany").innerHTML =
    totalRecoveredGermany;
  document.getElementById("newConfirmedGermany").innerHTML =
    newConfirmedGermany;
  document.getElementById("newDeathsGermany").innerHTML = newDeathsGermany;
  document.getElementById("newRecoveredGermany").innerHTML =
    newRecoveredGermany;
};
export default Germany;
