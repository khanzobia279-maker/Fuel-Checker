function fuelChecker(){ let fuel = document.getElementById("fuelInput").value.toLowerCase(); let message = document.getElementById("message"); 
       if(fuel < 0.25)
              { message.innerHTML = "Please refill the fuel"; }else { message.innerHTML = "Don't need to refill" } }