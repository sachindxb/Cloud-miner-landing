document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("otpRedirectBtn");
  const emailInput = document.getElementById("form-field-recover_email");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); // ✅ prevents page reload

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      window.location.href = "https://cloud-miner-landing.vercel.app/SignIn/si/sign-in/SignIn.html";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
