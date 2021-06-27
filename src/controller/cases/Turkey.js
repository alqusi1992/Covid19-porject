const Turkey = (dataJson) => {
  // Turkey

  const totalConfirmedTurkey = dataJson.Countries[178].TotalConfirmed;
  const totalDeathsTurkey = dataJson.Countries[178].TotalDeaths;
  const totalRecoveredTurkey = dataJson.Countries[178].TotalRecovered;
  const newConfirmedTurkey = dataJson.Countries[178].NewConfirmed;
  const newDeathsTurkey = dataJson.Countries[178].NewDeaths;
  const newRecoveredTurkey = dataJson.Countries[178].NewRecovered;

  document.getElementById("totalConfirmedTurkey").innerHTML =
    totalConfirmedTurkey;
  document.getElementById("totalDeathsTurkey").innerHTML = totalDeathsTurkey;
  document.getElementById("totalRecoveredTurkey").innerHTML =
    totalRecoveredTurkey;
  document.getElementById("newConfirmedTurkey").innerHTML = newConfirmedTurkey;
  document.getElementById("newDeathsTurkey").innerHTML = newDeathsTurkey;
  document.getElementById("newRecoveredTurkey").innerHTML = newRecoveredTurkey;
};
export default Turkey;
