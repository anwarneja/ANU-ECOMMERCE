let cCardButton = document.getElementById('credit-card');
let paypalButton = document.getElementById('paypal');
let applePayButton = document.getElementById('apple-pay');
let googlePayButton = document.getElementById('google-pay');
let cancelButton = document.getElementById('cancel');
let confirmationMessage = document.getElementById('confirmation-message');


// Function to disable payment buttons
function disableButtons() {
    cCardButton.disabled = true;
    paypalButton.disabled = true;
    applePayButton.disabled = true;
    googlePayButton.disabled = true;
}

// Function to enable payment buttons
function enableButtons() {
    cCardButton.disabled = false;
    paypalButton.disabled = false;
    applePayButton.disabled = false;
    googlePayButton.disabled = false;
}


let c=document.getElementById("cance");
// Handle credit card payment
cCardButton.addEventListener('click', function() {
    confirmationMessage.textContent = 'Payment processed through Hijra Bank. Done deal!';
    confirmationMessage.style.display="block";
    disableButtons() 
});

// Handle PayPal payment
paypalButton.addEventListener('click', function() {
    confirmationMessage.textContent = 'Payment processed through PayPal. Done deal!';
    confirmationMessage.style.display="block";
    disableButtons() 
});

// Handle Apple Pay payment
applePayButton.addEventListener('click', function() {
    confirmationMessage.textContent = 'Payment processed through Tele Birr. Done deal!';
    confirmationMessage.style.display="block";
    disableButtons() 
});

// Handle Google Pay payment
googlePayButton.addEventListener('click', function() {
    confirmationMessage.textContent = 'Payment processed through CBE Birr. Done deal!';
    confirmationMessage.style.display="block";
    disableButtons() 
});
c.addEventListener("click",function(){
    confirmationMessage.style.display="";
    enableButtons() 
})
// Handle cancel action
cancelButton.addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});
