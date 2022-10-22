const input = document.querySelector("input");
const form = document.querySelector("form");

let map = L.map("map", {
  center: [51.505, -0.09],
  zoom: 13,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const ip = input.value;

const fetchData = async () => {
  console.log(input.value);
  const { data } = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_5V53eTwIBOE7I4MpzBBSh8PrnZ2Kq&ipAddress=${input.value}`
  );
  map.panTo([data.location.lat, data.location.lng]);
  //   map = L.map("map", {
  //     center: [data.location.lat, data.location.lng],
  //     zoom: 13,
  //   });
  L.marker([data.location.lat, data.location.lng]).addTo(map);

  console.log(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData();
});
