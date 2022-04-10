// Set your API key here
const APIKEY = "ckey_docs";

// Set your crypto tickers here
const tickers = ["BTC", "WETH", "DAI", "AAVE"];

// Set the Covalent API
const covalentAPI = "https://api.covalenthq.com/v1";
const APIEndpoint = "/pricing/tickers";

// Token table reset
const tableRef = document
  .getElementById("tokenTable")
  .getElementsByTagName("tbody")[0];
tableRef.innerHTML = "";

// Covalent API request setup
/*
const url = new URL(`${covalentAPI}${APIEndpoint}/`);
url.search = new URLSearchParams({
    key: APIKEY,
    tickers: tickers
})
*/

const url =
  "https://api.covalenthq.com/v1/80001/events/address/0xe4E18276D50955aEfa23713A6B3950Cdd2B48092/?starting-block=25115107&ending-block=latest&key=ckey_docs";

// Use Fetch API to get Covalent data and display in token table
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let tokens = data.data.items;
    return tokens.map(function (token) {
      // Map through the results and for each run the code below
      tableRef.insertRow().innerHTML =
        `<td> ${token.block_signed_at} </td>` +
        `<td> ${token.decoded.name} </td>` +
        `<td> ${token.sender_address} </td>`;
    });
  });
