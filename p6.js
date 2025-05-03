function initializePage() {
    console.log("Page loaded.");
  
    document.getElementById("submitButton").addEventListener("click", handleSubmit);
    document.getElementById("resetButton").addEventListener("click", handleReset);
    document.getElementById("alertButton").addEventListener("click", showAlert);
  }
  
  function handleSubmit(event) {
    event.preventDefault(); 
    const name = document.getElementById("userName").value;
    const sex = document.getElementById("userSex").value;
    const team = document.getElementById("teamSelect").value;
    alert(`Submitted! Name: ${name}, Sex: ${team}`);
  }
  
  function handleReset() {
    document.getElementById("userForm").reset();
    console.log("Reset");
  }
  
  function showAlert() {
    alert("Thanks for interacting with the NBA Playoffs page!");
  }

 