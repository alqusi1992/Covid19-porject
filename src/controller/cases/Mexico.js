const Mexico = (dataJson) => {
  // Mexico

  const totalConfirmedMexico = dataJson.Countries[111].TotalConfirmed;
  const totalDeathsMexico = dataJson.Countries[111].TotalDeaths;
  const totalRecoveredMexico = dataJson.Countries[111].TotalRecovered;
  const newConfirmedMexico = dataJson.Countries[111].NewConfirmed;
  const newDeathsMexico = dataJson.Countries[111].NewDeaths;
  const newRecoveredMexico = dataJson.Countries[111].NewRecovered;

  document.getElementById("totalConfirmedMexico").innerHTML =
    totalConfirmedMexico;
  document.getElementById("totalDeathsMexico").innerHTML = totalDeathsMexico;
  document.getElementById("totalRecoveredMexico").innerHTML =
    totalRecoveredMexico;
  document.getElementById("newConfirmedMexico").innerHTML = newConfirmedMexico;
  document.getElementById("newDeathsMexico").innerHTML = newDeathsMexico;
  document.getElementById("newRecoveredMexico").innerHTML = newRecoveredMexico;
};
export default Mexico;
