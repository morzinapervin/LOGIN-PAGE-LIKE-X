
const forms = document.querySelectorAll('.form');
const creatAccountBtn = document.querySelector('.create-account-btn');
const modal1 = document.getElementById('modal-1');
const modal1Close = document.getElementById('close-modal-1');
const nextBtn1 = document.getElementById('next-btn-1');
const modal2 = document.getElementById('modal-2');
const modal2Close = document.getElementById('close-modal-2');
const nextBtn2 = document.getElementById('next-btn-2');
const modal3 = document.getElementById('modal-3');
const modal3Close = document.getElementById('close-modal-3');
const error_message = document.getElementById('error-message');
// variables for modal 1
const nameInput = document.getElementById('name-input');
const charCount = document.getElementById('char-count');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const toggleField = document.getElementById('toggle-field');
const emailLabel = document.getElementById('email-label');
const phoneLabel = document.getElementById('phone-label');
// variables for modal 3
const nameInputFill = document.getElementById('name-input-fill');
const emailInputFill = document.getElementById('email-input-fill');
const emailLabelFill = document.getElementById('email-label-fill');
const phoneInputFill = document.getElementById('phone-input-fill');
const phoneLabelFill = document.getElementById('phone-label-fill');
const dateInputFill = document.getElementById('date-input-fill');
// for DOB
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const yearSelect = document.getElementById('year');




// Iterate over each form and attach the submit event listener
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    toggleInput();
    validateVerificationCode();
  });
});

// Open Modal 1
creatAccountBtn.addEventListener('click', function() {
  modal1.style.display = 'flex';
  });
// Close Modal 1
modal1Close.addEventListener('click', function() {
  modal1.style.display = 'none';
  });




// Open Modal 2 function
function openModal2(){
modal2.style.display = 'flex';
modal1.style.display = 'none';  
populateModal3(); 
}

// Close Modal 2
modal2Close.addEventListener('click', function() {
  modal2.style.display = 'none';
  });

 // Open Modal 3 
 nextBtn2.addEventListener('click', function(){
  modal3.style.display = 'flex';
  modal2.style.display = 'none';
})
// Close Modal 3
modal3Close.addEventListener('click', function() {
modal3.style.display = 'none';
modal1.style.display = 'flex';
});


 // Open Modal 4 
 const modal4 = document.getElementById('modal-4');
 const nextBtn3 = document.getElementById('next-btn-3');
 nextBtn3.addEventListener('click', function(e){
  e.preventDefault();
    modal4.style.display = 'flex';
    modal3.style.display = 'none';  
})

//Close Modal 4 
const modal4Close = document.getElementById('close-modal-4');
modal4Close.addEventListener('click', function() {
  modal4.style.display = 'none';
  });

 // Open Modal 5 
 const modal5 = document.getElementById('modal-5');
 const nextBtn4 = document.getElementById('next-btn-4');
 nextBtn4.addEventListener('click', function(e){
  e.preventDefault();
    modal5.style.display = 'flex';
    modal4.style.display = 'none';  
})

// Close/go back Modal 5 
const closeBtnModal5 = document.getElementById('close-modal-5');
const backBtn = document.getElementById('button-back');

function handleButtonClick(e) {
  e.preventDefault();
  modal1.style.display = 'flex';
  modal5.style.display = 'none';
}
// Add the same event listener to both buttons
closeBtnModal5.addEventListener('click', handleButtonClick);
backBtn.addEventListener('click', handleButtonClick);

// Open Modal 6 function
const modal6 = document.getElementById('modal-6');
const nextBtn5 = document.getElementById('next-btn-5');
function openModal6(){
  modal6.style.display = 'flex';
  modal5.style.display = 'none';  
  }



  // Toggle between email and phone input
  let useEmail = true;
  function toggleInput() {
  
    const emailInput = document.getElementById('email-input');
    const emailLabel = document.getElementById('email-label');
    const phoneInput = document.getElementById('phone-input');
    const phoneLabel = document.getElementById('phone-label');
    const toggleField = document.getElementById('toggle-field');
    
    if (useEmail) {
      emailInput.classList.add('hidden');
      emailInput.removeAttribute('required');
      emailLabel.classList.add('hidden');
      
      phoneInput.classList.remove('hidden');
      phoneInput.setAttribute('required', 'true');
      phoneLabel.classList.remove('hidden');
      
      toggleField.innerText = "Use email instead";
    } else {
      phoneInput.classList.add('hidden');
      phoneInput.removeAttribute('required');
      phoneLabel.classList.add('hidden');
      
      emailInput.classList.remove('hidden');
      emailInput.setAttribute('required', 'true');
      emailLabel.classList.remove('hidden');
      
      toggleField.innerText = "Use phone instead";
    }
  
    useEmail = !useEmail; // Toggle the state
  }
  


// Update character counter =======================================


nameInput.addEventListener('input', function () {
  const currentLength = nameInput.value.length;
  const maxLength = nameInput.getAttribute('maxlength');
  charCount.textContent = `${currentLength}/${maxLength}`;
});

// Ensure the character count is hidden when input loses focus and empty
nameInput.addEventListener('blur', function () {
  if (nameInput.value === '') {
    charCount.style.display = 'none';
  }
});

nameInput.addEventListener('focus', function () {
  charCount.style.display = 'inline';
});

 // Populate modal 3 inputs
function populateModal3(){
      nameInputFill.value = nameInput.value;
      if(useEmail){
        emailInputFill.classList.remove('hidden');
        emailInputFill.value = emailInput.value;
        emailLabelFill.classList.remove('hidden');
        
        phoneInputFill.classList.add('hidden');
        phoneLabelFill.classList.add('hidden');
      } else {
        phoneInputFill.classList.remove('hidden');
        phoneInputFill.value = phoneInput.value;
        phoneLabelFill.classList.remove('hidden');
        
        emailInputFill.classList.add('hidden');
        emailLabelFill.classList.add('hidden');
      }
  
  // List of months to convert number to abbreviated month name
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Validate if all fields are selected
  if (monthSelect && daySelect && yearSelect) {
    // Convert month number to abbreviated name
    const monthName = months[monthSelect.value - 1];
  
    // Populate the input with the selected date in "Month Day, Year" format
    dateInputFill.value = `${monthName} ${daySelect.value}, ${yearSelect.value}`;
  } 
}


// Validation Modal 1 form 
function validateForm() { 
  // Clear any existing error messages
  error_message.innerText = '';

  // Name validation (not empty and <= 50 characters)
  if (nameInput.value.trim() === '' || nameInput.value.length > 50) {
    error_message.innerText = 'Name cannot be empty.';
    return;
  }

  // Email/Phone validation
  if (useEmail) {
    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
      error_message.innerText = 'Please enter a valid email with "@" symbol.';
      return;
    }
  } else {
    if (phoneInput.value.trim() === '' || phoneInput.value.length !== 11) {
      error_message.innerText = 'Phone number must be 11 digits.';
      return;
    }
  }

  // Date of Birth validation (none of the dropdowns can be empty)
  if (!monthSelect.value || !daySelect.value || !yearSelect.value) {
    error_message.innerText = 'Please select a valid date of birth.';
    return;
  }
  const verificationMessage = document.getElementById('verification-message');
  if (verificationMessage) {
    console.log("Found verification message element.");
    verificationMessage.innerText = useEmail
      ? `Enter it below to verify ${emailInput.value}`
      : `Enter it below to verify ${phoneInput.value}`;
  } else {
    console.log("Verification message element not found.");
  }


  // If validation passes, open modal2 or proceed with form submission
  openModal2(); // Replace with your actual logic to open modal2
}

// For dob focus color
const dobSelects = document.querySelectorAll('.dob-select');

// Add focus and blur event listeners to each select element
dobSelects.forEach(select => {
  const label = select.previousElementSibling; // Get the previous sibling (the label)
  
  select.addEventListener('focus', () => {
    label.style.color = '#1da1f2'; // Change label color on focus
  });
  
  select.addEventListener('blur', () => {
    label.style.color = ''; // Reset label color on blur
  });
});

// For verification code validation
let sentCode = '123456'; // This should be the code generated and sent to the user

function validateVerificationCode() {
  const enteredCode = document.getElementById('verification-code').value;
  const errorMessage = document.getElementById('verificaion-error-message');

  // Reset the error message before each validation attempt
  errorMessage.innerText = '';

  // Check if the input is empty
  if (enteredCode === '') {
    errorMessage.innerText = 'Verification code cannot be empty.';
    return;
  }

  // Check if the code matches
  if (enteredCode !== sentCode) {
    errorMessage.innerText = 'Incorrect verification code. Please try again.';
    return;
  }

  // If validation passes, clear error message and move to the next step
  errorMessage.innerText = ''; 
  openModal6();
}



// For password  validation
function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordErrorMessage = document.getElementById('password-error-message');

  // Reset the error message before each validation attempt
  passwordErrorMessage.innerText = '';

  // Check if the password is empty
  if (password === '') {
    passwordErrorMessage.innerText = 'Password cannot be empty.';
    return;
  }

  // Check if the password is less than 8 characters
  if (password.length < 8) {
    passwordErrorMessage.innerText = 'Password must be at least 8 characters long.';
    return;
  }

  // If validation passes, clear the error message and finish signup
  passwordErrorMessage.innerText = '';
  finishSignup(); // Proceed to the next action (e.g., redirect or close form)
}
function finishSignup() {
  window.location.href = 'profile.html'; 
}

// Get the password input and toggle icon
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

// Event listener to toggle password visibility
togglePassword.addEventListener('click', function () {
  // Toggle the type attribute between password and text
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Toggle the image source based on the type
  const newImage = type === 'password' ? 'show.jpg' : 'hide.png'; 
  togglePassword.setAttribute('src', newImage);
});

