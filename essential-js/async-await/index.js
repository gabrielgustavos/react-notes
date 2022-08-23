/*const URL_API = "https://ranekapi.origamid.dev/wp-json/api/produto";

fetch(URL_API)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });*/

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json)
  return json;
}

const produtos = fetchProdutos(
  "https://ranekapi.origamid.dev/wp-json/api/produto"
);

