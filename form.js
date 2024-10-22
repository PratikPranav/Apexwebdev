  // Function to show alert if form passes validation
  function showAlert() {
    alert("Good Job");
}

// Event listener for submit button click
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get input values
    let name = document.getElementById('name').value.trim();
    let contact = document.getElementById('contact').value.trim();
    let email = document.getElementById('email').value.trim();

    // Validation logic
    if (name === "") {
        alert("Please enter your name.");
        return; // Stop further processing
    }

    if (contact === "") {
        alert("Please enter your contact number.");
        return;
    }

    // Check if contact is a valid 10-digit number
    if (!/^\d{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
    }

    // Email validation using regex pattern
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all validations pass
    showAlert(); // Show "All the Best" alert
});


//for gallery
// let profilepic = document.getElementById("imagePreview");
// let inputfile = document.getElementById("imageInput");

// inputfile.onchange = function(){
//     profilepic.src = URL.createObjectURL(inputfile.files[0]);
// }