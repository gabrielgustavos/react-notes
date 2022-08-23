// assync req

const URL_API = "https://ranekapi.origamid.dev/wp-json/api/produto";

fetch(URL_API)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

