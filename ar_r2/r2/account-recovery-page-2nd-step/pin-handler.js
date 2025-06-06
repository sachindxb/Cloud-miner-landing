document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const pinInput = document.getElementById("form-field-recovery_pin");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real submission

    const pin = pinInput.value.trim();

    // ✅ Example: if correct PIN is "123456"
    if (pin === "123456") {
      window.location.href = "https://cloud-miner.vercel.app/members/MyDashboard";
    } else {
      // Redirect to wrong pin page (or show alert if preferred)
      window.location.href = "https://cloud-miner-landing.vercel.app/ar_wp/wp/wp2/wp/WrongPin.html";
    }
  });
});
