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
  "https://api.covalenthq.com/v1/1/events/address/0xc0da01a04c3f3e0be433606045bb7017a7323e38/?starting-block=12115107&ending-block=12240004&key=ckey_docs";

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
