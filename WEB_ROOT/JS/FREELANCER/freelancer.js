import { RegisterAdvertiser } from '/WEB_ROOT/UTILITIES/FUNCTION_UTILIITIES/API/apiHelper.js';

document.getElementById('registrationForm').addEventListener('submit', async function (event) {
  event.preventDefault();

    //  values from the form inputs
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      showNotification('Passwords do not match', 'error');
      return;
    }

    // Call the API function with the captured values
    try {
      const response = await RegisterAdvertiser(
        firstname,
        lastname,
        username,
        phoneNumber,
        email,
        password,
        confirmPassword
      );

      console.log('Response from API:', response);
      if (response.status === 'success') {
        console.log('Registration successful!');
        showNotification('Registration successful', 'success');
      }
    } catch (error) {
      console.error('Error registering advertiser:', error);
    }
  });
