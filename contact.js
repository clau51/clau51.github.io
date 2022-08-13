/*********************************************************************************
*
* WEB222 – Final Assessment
*
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) except for the
* information supplied by the WEB222 instructors and / or made available in 
* this assessment for my use. I also declare that no part of this assignment
* has been distributed to other students.
*
* Name: Carmen Lau Student ID: 166689216 Date: August 15, 2022
*
********************************************************************************/

function formValidation() {
  //debugger;
  let result = validatePhoneNumber();
  result = validateAddressStreet() && result;
  result = validatePostalCode() && result;
  result = validateCity() && result;

  let isFormValid = result;
  return isFormValid;
}

function errorMessage(input, errorMessage) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');

  const error = formControl.querySelector('small');
  error.innerText = errorMessage;
  error.style.color = 'red';
  input.style.borderColor = 'red';
}

function successMessage(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');

  const error = formControl.querySelector('small');
  error.innerText = '';
  input.style.borderColor = 'lightgray';
}

//Validate if the street address has no numbers (only if input is entered)
function validateAddressStreet() {
  // debugger;
  let street = document.querySelector('#address-street');
  let input = street.value.trim();
  let valid = true;
  let numberString = '0123456789';

  if (input.length === 0) {
    successMessage(street);
  }

  for (let i = 0; i < input.length; i++) {
    if (numberString.indexOf(input[i]) !== -1) {
      // if the input contains a number
      errorMessage(street, 'Street address cannot contain numbers');
      valid = false;
      break;
    } else {
      successMessage(street);
      valid = true;
    }
  }
  return valid;
}

//Validate if the phone number is in the correct format (only if input is entered)
function validatePhoneNumber() {
  //debugger;
  let phone = document.querySelector('#phone');
  let input = document.registration.phone.value.trim();
  let valid = true;

  if (input.length !== 0 && input.length !== 14) {
    errorMessage(phone, 'Invalid phone number');
    valid = false;
  } else if (
    input.length === 14 &&
    (input.charAt(0) !== '(' ||
      input.charAt(4) !== ')' ||
      input.charAt(5) !== ' ' ||
      input.charAt(9) !== '-')
  ) {
    errorMessage(phone, 'Invalid phone number');
    valid = false;
  } else {
    successMessage(phone);
  }
  return valid;
}

//Validate if the postal code is in the correct format (only if input is entered)
function validatePostalCode() {
  //debugger;
  let postalCode = document.querySelector('#postal-code');
  let input = postalCode.value.trim();
  let numberString = '1234567890';
  let alphaString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let valid = true;

  if (input.length !== 6 && input.length !== 0) {
    errorMessage(postalCode, 'Invalid postal code');
    valid = false;
  } else {
    for (let i = 0; i < input.length; i++) {
      //debugger;
      if (i % 2 == 0) {
        if (alphaString.indexOf(input.substr(i, 1)) !== -1) {
          //if the character is in the alphaString
          valid = true;
        } else {
          valid = false;
          break;
        }
      } else {
        if (numberString.indexOf(input.substr(i, 1)) !== -1) {
          //if the character is in the numberString
          valid = true;
        } else {
          valid = false;
          break;
        }
      }
    }
  }
  if (valid === false) {
    errorMessage(postalCode, 'Invalid postal code');
  } else {
    successMessage(postalCode);
  }
  return valid;
}

//Validate if the city only contains letters (only if input is entered)
function validateCity() {
  //debugger;
  let city = document.querySelector('#city');
  let input = city.value.trim();
  let valid = true;

  input = input.toUpperCase();
  if (input.length !== 0) {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) < 'A' || input.charAt(i) > 'Z') {
        valid = false;
        break;
      }
    }
  }

  if (valid === false) {
    errorMessage(city, 'Invalid city');
  } else {
    successMessage(city);
  }
  return valid;
}
