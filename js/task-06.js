
 const inputField = document.getElementById('validation-input');

 inputField.addEventListener('blur', function() {
   const expectedLength = parseInt(this.getAttribute('data-length'), 10); 
   const enteredValue = this.value.trim(); 
   
   if (enteredValue.length === expectedLength) {
     this.classList.remove('invalid');
     this.classList.add('valid');
   } else {
     this.classList.remove('valid');
     this.classList.add('invalid');
   }
 });