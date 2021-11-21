// * XMLHttpRequest - XHR
// ! old way, not common anymore

const getCountryDataXHR = (country, className = "") => {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `
  https://restcountries.com/v3.1/name/${country}`
  );
  request.send();

  request.addEventListener("load", function () {
    console.log(JSON.parse(this.responseText));
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data, className);
  });
};

// getCountryDataXHR('turkey');

getCountryDataXHR("italy");
getCountryDataXHR("turkey");
getCountryDataXHR("france");

const renderCountry = (data, className = "") => {
  const {
    name: { common: countryName },
    region,
    capital,
    flags: { svg: countryFlag },
    population,
    languages,
    currencies,
  } = data;
  const countryElm = document.querySelector(".countries");
  const htmlContent = `
  <div class="country ${className}">
    <img class="country__img" src="${countryFlag}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row">
              <span><i class="fas fa-2x fa-landmark"></i></span>${capital}</p>
      <p class="country__row"> <span><i class="fas fa-lg fa-users"></i></span>${(
        +population / 1_000_000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
        Object.values(languages)[0]
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
        Object.values(currencies)[0].name
      } <strong>${Object.values(currencies)[0].symbol}</strong>
      </p>
    </div>
  </div>
  `;
  countryElm.insertAdjacentHTML("beforeend", htmlContent);
  countryElm.style.opacity = 1;
};
