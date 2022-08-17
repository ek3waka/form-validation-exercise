function validatePassword() {
    const confirmPassword = document.getElementById("confirm-password")
    const password = document.getElementById("password")
    
    if (password.value == "") {
        password.setCustomValidity("Passwords must not be empty")
        password.reportValidity()
        
        
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match")
        confirmPassword.reportValidity()
    } else {
        password.setCustomValidity('')
        confirmPassword.setCustomValidity('')
    }   
}


const createAccount = document.getElementById('submit')
createAccount.addEventListener('click', () => {validatePassword()})


function setCursorPosition(pos, e) {
    
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      let range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }


function mask(e) {
    
    let matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }



document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector("#zip-code");
    input.addEventListener("input", mask, false);
    
    setCursorPosition(0, input);
  })

const form = document.querySelector('form')
const requiredInputs = document.querySelectorAll("[required]")

const emailInput = document.querySelector('#email')
emailInput.addEventListener('click', e => {
    form.requestSubmit()
}, { once: true })

/* requiredInputs.forEach(input => input.addEventListener('click', e => {
    form.addEventListener('click', e => {
            form.requestSubmit()
    }, { once: true })
    
    })
) */


