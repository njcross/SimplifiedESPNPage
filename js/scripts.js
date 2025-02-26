// #1 Form Validation - Email Address
// regex to validate email parts
function formValidationEmail(email) {
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(email);
}
// #2 Form Validation - Phone number
// regex to validate phone number parts
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    return phoneRegex.test(phoneNumber);
}
// #3 Feedback storage 
// adds submited feedback global feedback variable 
var feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}

// #4 Alert user feedback was submitted

function feedbackRecieved() {
    alert("Thanks for your feedback");
}