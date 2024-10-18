const creatAccountBtn = document.querySelector('.create-account-btn');
const modal1 = document.getElementById('modal-1');
const modal1Close = document.getElementById('close-modal-1');
const nextBtn1 = document.getElementById('next-btn-1');
const modal2 = document.getElementById('modal-2');
const modal2Close = document.getElementById('close-modal-2');
const nextBtn2 = document.getElementById('next-btn-2');
const modal3 = document.getElementById('modal-3');
const modal3Close = document.getElementById('close-modal-3');
// variables for modal 1
const nameInput = document.getElementById('name-input');
const charCount = document.getElementById('char-count');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const toggleField = document.getElementById('toggle-field');
const emailLabel = document.getElementById('email-label');
const phonelLabel = document.getElementById('phone-label');
// variables for modal 3
const nameInputFill = document.getElementById('name-input-fill');
const emailInputFill = document.getElementById('email-input-fill');
const phoneInputFill = document.getElementById('phone-input-fill');

// Open Modal 1
creatAccountBtn.addEventListener('click', function() {
  modal1.style.display = 'flex';
  });
// Close Modal 1
modal1Close.addEventListener('click', function() {
  modal1.style.display = 'none';
  });


 // Open Modal 2 
  nextBtn1.addEventListener('click', function(){
    modal2.style.display = 'flex';
    modal1.style.display = 'none';
    
    // Populate modal 3 inputs
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(phoneInput.value);
    nameInputFill.value = nameInput.value;
    reviewContact.value = useEmail ? emailInput.value : phoneInput.value;

})
console.log(nameInput.value);
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

  // Toggle between email and phone input
  let useEmail = true;
function toggleInput() {
  
    if (useEmail) {
      emailInput.classList.add('hidden');
      emailInput.removeAttribute('required');
      emailLabel.classList.add('hidden');
      phoneInput.classList.remove('hidden');
      phoneInput.setAttribute('required', 'true');
      phonelLabel.classList.remove('hidden');
      toggleField.innerText = "Use email instead";
      
    } else {
      phoneInput.classList.add('hidden');
      phoneInput.removeAttribute('required');
      phonelLabel.classList.add('hidden');
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


