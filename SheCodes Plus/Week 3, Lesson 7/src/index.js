let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

//JS Challenge 1
console.log(paris.temperature);

// JS Challenge 2

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temparature: 12,
  capitalCity: true,
};

console.log(sydney.temparature);

//JS Challenge 3

let australianCities = ["Perth", "Darwin", "Canberra"];
console.log(australianCities[0]);
console.log(australianCities[1]);
console.log(australianCities[2]);

//JS Challenge 4

let cities = {
  perth: {
    name: "Perth",
    country: "Australia",
    language: "English",
    temparature: 12,
    capitalCity: true,
  },

  darwin: {
    name: "Darwin",
    country: "Australia",
    language: "English",
    temparature: 22,
    capitalCity: false,
  },

  canberra: {
    name: "Canberra",
    country: "Australia",
    language: "English",
    temparature: 20,
    capitalCity: false,
  },
};

console.log(cities.perth.name);
console.log(cities.perth.temparature);

console.log(cities.darwin.name);
console.log(cities.darwin.temparature);

console.log(cities.canberra.name);
console.log(cities.canberra.temparature);
