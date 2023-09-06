document.addEventListener("DOMContentLoaded", function () {
  const numberStep = document.querySelector('.number-step')
  const form = document.getElementById("form");
  const steps = document.querySelectorAll(".step-form");
  const IconSteps = document.querySelectorAll(".step");
  const prevButtons = document.querySelectorAll("button[id^='prev']");
  const nextButtons = document.querySelectorAll("button[id^='next']");
  const submitButton = document.getElementById("submit");
  const successDiv = document.getElementById("success");

  let currentStep = 0;

  // Handle Next button click
  nextButtons.forEach((button, index) => {
      button.addEventListener("click", function (e) {
          e.preventDefault();
          if (validateStep(currentStep)) {
            IconSteps[parseInt(currentStep+1)].classList.add("active");

            steps[currentStep].style.display = "none";
            currentStep++;
            steps[currentStep].style.display = "block";
            numberStep.innerHTML = 'Etapa ' + parseInt(currentStep+1) +'/5';
          }
      });
  });

  // Handle Previous button click
  prevButtons.forEach((button, index) => {
      button.addEventListener("click", function (e) {
          e.preventDefault();
          IconSteps[parseInt(currentStep)].classList.remove("active");
          steps[currentStep].style.display = "none";
          currentStep--;
          steps[currentStep].style.display = "block";
          numberStep.innerHTML = 'Etapa ' + parseInt(currentStep+1) +'/5';
      });
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateStep(currentStep)) {
          // Perform form submission (you can send data to the server here)
          // For demonstration purposes, just show a success message
          form.style.display = "none";
          successDiv.style.display = "block";
      }
  });

  // Function to validate the current step
  function validateStep(step) {
      if (step === 0) {
          // Step 1 validation (name and email)
          const name = document.getElementById("name").value.trim();
          const date = document.getElementById("date").value.trim();

          if (name === "" || date === "") {
              alert("Please fill in all required fields.");
              return false;
          }

      } else if (step === 1) {
          // Step 3 validation (address and city)
          const address = document.getElementById("address").value.trim();
          const city = document.getElementById("city").value.trim();
          if (address === "" || city === "") {
              alert("Please fill in all required fields.");
              return false;
          }

      } else if (step === 2) {
          // Step 3 validation (address and city)
          const address = document.getElementById("address").value.trim();
          const city = document.getElementById("city").value.trim();
          if (address === "" || city === "") {
              alert("Please fill in all required fields.");
              return false;
          }

      }
      return true;
  }
});
