const Brazil = (dataJson) => {
  // Brazil Cases

  const totalConfirmedBrazil = dataJson.Countries[23].TotalConfirmed;
  const totalDeathsBrazil = dataJson.Countries[23].TotalDeaths;
  const totalRecoveredBrazil = dataJson.Countries[23].TotalRecovered;
  const newConfirmedBrazil = dataJson.Countries[23].NewConfirmed;
  const newDeathsBrazil = dataJson.Countries[23].NewDeaths;
  const newRecoveredBrazil = dataJson.Countries[23].NewRecovered;

  document.getElementById("totalConfirmedBrazil").innerHTML =
    totalConfirmedBrazil;
  document.getElementById("totalDeathsBrazil").innerHTML = totalDeathsBrazil;
  document.getElementById("totalRecoveredBrazil").innerHTML =
    totalRecoveredBrazil;
  document.getElementById("newConfirmedBrazil").innerHTML = newConfirmedBrazil;
  document.getElementById("newDeathsBrazil").innerHTML = newDeathsBrazil;
  document.getElementById("newRecoveredBrazil").innerHTML = newRecoveredBrazil;
};
export default Brazil;
