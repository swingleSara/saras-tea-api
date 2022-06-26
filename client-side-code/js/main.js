document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const teaType = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://saras-tea-api.herokuapp.com/api/${teaType}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText =
      data.decaf === true ? "It's tea time!" : "Spill it...";
  } catch (error) {
    console.log(error);
  }
}
