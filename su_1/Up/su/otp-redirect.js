document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("otpRedirectBtn");
  const emailInput = document.getElementById("form-field-recover_email");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); // ✅ prevents page reload

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      window.location.href = "https://cloud-miner-landing.vercel.app/su_2/Sign/Up/SignUp2.html";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
