
 const loginForm = document.querySelector('.login-form');

 loginForm.addEventListener('submit', function(event) {
   event.preventDefault(); 

   const emailInput = this.elements['email'];
   const passwordInput = this.elements['password'];

   if (!emailInput.value || !passwordInput.value) {
     alert('Please fill in all fields.');
     return;
   }

   const formData = {
     email: emailInput.value,
     password: passwordInput.value
   };

   console.log('Form Data:', formData);

   // Reset the form fields
   this.reset();
 });
