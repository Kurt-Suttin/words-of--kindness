// Get the form element by its ID
let form = document.getElementById("myForm");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display an alert message
    alert ("You Did It ! You're Amazing XD");
});
