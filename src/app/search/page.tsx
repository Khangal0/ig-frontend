"use client";

import { useState } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const value = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = async (country) => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const countryData = await data.json();
    setSelectedCountry(countryData[0]);
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const filter = countries.filter((country) => {
    const lowerCaseCountries = country.toLowerCase();
    const lowerCaseInput = inputValue.toLowerCase();
    return lowerCaseCountries.includes(lowerCaseInput);
  });
  return (
    <div className="body">
      <div className="searchBar">
        <input
          className="input"
          placeholder="Search"
          value={inputValue}
          onChange={(event) => value(event)}
        />
        {filter.map((country, index) => {
          return (
            <div
              className="country"
              key={index}
              onClick={() => fetchData(country)}
            >
              {country}
            </div>
          );
        })}
      </div>

      {selectedCountry && (
        <div className="infosStyle">
          <div className="word">
            <h1>{selectedCountry.name.common}</h1>
          </div>
          <div className="flags">
            <img src={selectedCountry.flags.png} />
          </div>
          <div className="word">
            <div> Official Name: {selectedCountry.name.common}</div>
          </div>
          <div className="word">
            <div> Capital: {selectedCountry.capital}</div>
          </div>
          <div className="word">
            <div> Region: {selectedCountry.region}</div>
          </div>
          <div className="word">
            <div> Population: {selectedCountry.population}</div>
          </div>
          <div className="word">
            <div> Area: {selectedCountry.area} km</div>
          </div>
          <div className="word">
            <div> Coic: {selectedCountry.cioc}</div>
          </div>

          <div className="word">
            <h2>Maps</h2>
            <div>
              <div>{selectedCountry.maps.googleMaps}</div>
            </div>
            <div>
              <div>{selectedCountry.maps.openStreetMaps}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
