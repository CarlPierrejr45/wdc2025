function initializePage() {
  const form = document.getElementById("userForm");
  const resetBtn = document.getElementById("resetButton");
  const alertBtn = document.getElementById("alertButton");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("userName").value;
    const sex = document.getElementById("userSex").value;
    const team = document.getElementById("teamSelect").value;

    const outputDiv = document.getElementById("formOutput");
    outputDiv.innerHTML = `
      <div class="alert alert-info mt-3">
        <strong>Submission Received:</strong><br>
        Name: ${name}<br>
        Sex: ${sex}<br>
        Favorite Team: ${team}
      </div>
    `;
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("userForm").reset();
    document.getElementById("formOutput").innerHTML = "";
  });

  alertBtn.addEventListener("click", function() {
    alert("Thanks for checking out the NBA Playoffs site!");
  });
}