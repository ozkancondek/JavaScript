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

// getCountryDataXHR("italy");
// getCountryDataXHR("turkey");
// getCountryDataXHR("france");

const renderCountry = (data, className = "") => {
  //data is a parameter and type is object
  //// function to add pulled data into html page
  const {
    name: { common: countryName }, //data.name.common
    region, //data.region
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

const showCountryProm = (countryName) => {
  //i am gonna get a response from network side but, not an exact form of desired object
  fetch("https://restcountries.com/v3.1/name/" + countryName)
    .then((x) => console.log(x)) //return me response
    .catch((err) => console.log(err)); // return me error if there a promblem is(e.g 404 (not found))

  //to get an object, i need to return it to json object

  fetch("https://restcountries.com/v3.1/name/" + countryName)
    .then((x) => {
      const resultObject = x.json();
      return resultObject;
    }) // first then returns a promisse
    .then((y) => {
      const [countryData] = y; // save it as an array variable
      renderCountry(countryData); //give this array as an argument to
    }) //second then catches object   // .then((y) => console.log(y[0].name.common))
    .catch((err) => console.log(err.message)); //return message element from err object

  //The main point here is, getting API file in an object shape
};

// showCountryProm("turkey");

//same code structure with async await

const getCountryData = async (countryName) => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/" + countryName
    );
    if (!response.ok) throw new Error("Something get wrong" + response.status); // this message works if something wrong with returned object
    const data = await response.json();
    const [countryDataObject] = data;
    return countryDataObject;
  } catch (error) {
    //this error works if fetch has a problem
    console.log(error.message);
  }
};

const showCountry = async (countryName) => {
  const countryDataObject = await getCountryData(countryName);
  renderCountry(countryDataObject);
};

showCountry("nederland");
