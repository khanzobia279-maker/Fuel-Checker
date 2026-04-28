function fuelChecker() {
  let fuel = document.getElementById("fuelInput").value;
  let message = document.getElementById("message");

  if (fuel === "" || fuel === null) {
    message.innerHTML = "Please enter value in litre";
  } 
  else if (fuel < 0.25) {
    message.innerHTML = "Please refill the fuel";
  } 
  else {
    message.innerHTML = "Don't need to refill";
  }
}
