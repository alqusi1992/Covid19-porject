const ItalyCases = (dataJson) => {
  // Italy cases
  const totalConfirmedItaly = dataJson.Countries[82].TotalConfirmed;
  const totalDeathsItaly = dataJson.Countries[82].TotalDeaths;
  const totalRecoveredItaly = dataJson.Countries[82].TotalRecovered;
  const newConfirmedItaly = dataJson.Countries[82].NewConfirmed;
  const newDeathsItaly = dataJson.Countries[82].NewDeaths;
  const newRecoveredItaly = dataJson.Countries[82].NewRecovered;

  document.getElementById("totalConfirmItaly").innerHTML = totalConfirmedItaly;
  document.getElementById("totalDeathsItaly").innerHTML = totalDeathsItaly;
  document.getElementById("totalRecoveredItaly").innerHTML =
    totalRecoveredItaly;
  document.getElementById("newConfirmedItaly").innerHTML = newConfirmedItaly;
  document.getElementById("newDeathsItaly").innerHTML = newDeathsItaly;
  document.getElementById("newRecoveredItaly").innerHTML = newRecoveredItaly;
};
export default ItalyCases;
