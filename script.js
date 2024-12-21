function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phone = document.getElementById('phone').value;
  const terms = document.getElementById('terms').checked;

  if (!name || !email || !password || !confirmPassword || !phone) {
      alert('Please fill in all fields.');
      return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
  }
  
  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  const phoneNumber = /^[0-9]{10}/;
  if(!phoneNumber.test(phone)){
    alert('Please enter a valid Phone Number.');
  }

  if (!terms) {
      alert('You must agree to the terms and conditions.');
      return;
  }

  alert(`Registration successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
}