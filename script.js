const search = document.querySelector("input");
const but = document.querySelector("button");
const main = document.querySelector(".main");

function showData(data) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const weather = document.createElement("div");
  weather.innerHTML = `<p>Weather: ${data.weather[0].description}</p>
  <p>Temperature: ${data.main.temp} degrees</p>`;
  main.appendChild(weather);
}

function showErorr(code) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const errorMessage = document.createElement("p");
  main.appendChild(errorMessage);
  if (code == 400) {
    errorMessage.textContent = "Please input something";
  } else if (code == 404) {
    errorMessage.textContent = "City not found";
  }
}

but.addEventListener("click", async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=a1e16f83d0daf0c9165d9843eca05e9d&units=metric`
  );
  const data = await response.json();
  console.log(data);
  if (data.cod == 200) {
    showData(data);
  } else {
    showErorr(data.cod);
  }
});
