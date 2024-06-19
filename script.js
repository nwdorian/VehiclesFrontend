const seedData = [
  {
    manufacturer: "BMW",
    model: "530d",
    color: "Black",
    year: 2012,
    forSale: true,
  },
  {
    manufacturer: "Mercedes",
    model: "GLS",
    color: "Grey",
    year: 2018,
    forSale: false,
  },
  {
    manufacturer: "Fiat",
    model: "Punto",
    color: "Red",
    year: 2008,
    forSale: true,
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf VII",
    color: "Blue",
    year: 2020,
    forSale: false,
  },
];

const vehicleData = JSON.parse(localStorage.getItem("vehicles"));

function seedLocalStorage(seedData) {
  localStorage.setItem("vehicles", JSON.stringify(seedData));
}

if (vehicleData == null) {
  seedLocalStorage(seedData);
}

function displayData() {
  const table = document.getElementById("vehicles-body");

  vehicleData.forEach((v) => {
    const row = document.createElement("tr");
    table.appendChild(row);

    const manufacturer = document.createElement("td");
    const model = document.createElement("td");
    const color = document.createElement("td");
    const year = document.createElement("td");
    const forSale = document.createElement("td");
    const actions = document.createElement("th");

    row.appendChild(manufacturer);
    row.appendChild(model);
    row.appendChild(color);
    row.appendChild(year);
    row.appendChild(forSale);
    row.appendChild(actions);

    manufacturer.innerHTML = v.manufacturer;
    model.innerHTML = v.model;
    color.innerHTML = v.color;
    year.innerHTML = v.year;
    forSale.innerHTML = v.forSale ? "Yes" : "No";
  });
}

document.addEventListener(
  window.location.href.endsWith("vehicles.html"),
  displayData()
);
