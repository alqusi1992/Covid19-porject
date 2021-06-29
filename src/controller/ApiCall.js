import Italy from "./cases/Italy.js";
import Brazil from "./cases/Brazil.js";
import Iraq from "./cases/Iraq.js";
import Jordan from "./cases/Jordan.js";
import Germany from "./cases/Germany.js";
import Turkey from "./cases/Turkey.js";
import Poland from "./cases/Poland.js";
import Morocco from "./cases/Morocco.js";
import Mexico from "./cases/Mexico.js";
import SouthAfrica from "./cases/SouthAfrica.js";
const ApiCall = () => {
  async function getApi() {
    try {
      const fetchApi = await fetch("https://corona.lmao.ninja/v2/countries");
      const dataJson = await fetchApi.json();
      console.log(dataJson);
      //cases
      Italy(dataJson);
      Brazil(dataJson);
      Iraq(dataJson);
      Jordan(dataJson);
      Germany(dataJson);
      Turkey(dataJson);
      Morocco(dataJson);
      Poland(dataJson);
      Mexico(dataJson);
      SouthAfrica(dataJson);
      ///end of Cases
    } catch (error) {
      const heading = document.createElement("h1");
      heading.textContent = error;
      heading.style.color = "red";
      document.body.appendChild(heading);
    }
  }
  getApi();
};
export default ApiCall;
