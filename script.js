//your JS code here. If required.
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('first').value;
    var lastName = document.getElementById('last').value;
    var phoneNumber = document.getElementById('number').value;
    var email = document.getElementById('email').value;

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`);
});