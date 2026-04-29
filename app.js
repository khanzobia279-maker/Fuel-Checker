function fuelChecker() {
  let fuel = Number(document.getElementById("fuelInput").value);
  let message = document.getElementById("message");

  if (document.getElementById("fuelInput").value === "") {
    message.innerHTML = "Please enter a value in litres";
  } else if (fuel < 0.25) {
    message.innerHTML = "Please refill the fuel";
  } else {
    message.innerHTML = "Don't need to refill";
  }
}

function resetForm() {
  document.getElementById("fuelInput").value = "";
  document.getElementById("message").innerHTML = "";
}
