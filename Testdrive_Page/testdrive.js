document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent page reload if in a form

    // Get all values
    const carModel = document.getElementById('car-model').value;
    const date = document.getElementById('drive-date').value;
    const time = document.getElementById('drive-time').value;
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validation
    if (!carModel || !date || !time || !firstName || !lastName || !mobile || !email) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Optional: Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Optional: Mobile number check
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    // If passed, show confirmation
    alert(`Thank you, ${firstName}! Your test drive is scheduled.\nModel: ${carModel}\nDate: ${date}\nTime: ${time}`);

    window.location.href = "../Home_Page/homepage.html";
});