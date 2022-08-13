/*********************************************************************************
 *
 * WEB222 – Assignment #5
 *
 * I declare that this assignment is my own work in accordance with Seneca
 * Academic Policy. No part of this assignment has been copied manually or
 * electronically from any other source (including web sites) or distributed to
 * other students.
 *
 * Name: Carmen Lau Student ID: 166689216 Date: August 1, 2022
 *
 ********************************************************************************/

function formValidation() {
  //debugger;
  clearerrors();
//   let result = validateAddressStreet() && result;
  let result = validatePhoneNumber();
//   result = validatePostalCode() && result;
//   result = validateCity() && result;

  return result;
}

//Validate if the street address has no numbers
function validateAddressStreet() {
  // debugger;
  let errors = document.querySelector('#errors');
  let street = document.querySelector('#address-street');
  let input = street.value.trim();
  let pass = true;
  let numberString = '0123456789';

  for (let i = 0; i < input.length; i++) {
    if (numberString.indexOf(input[i]) !== -1) {
      // if the input contains a number
      pass = false;
      break;
    }
  }

  if (pass === false) {
    errors.innerHTML += '<p>NOTE: Street address cannot contain numbers!</p>';
    street.focus();
    return false;
  }
  return true;
}

//Validate if the phone number is in the correct format
function validatePhoneNumber() {
    debugger;
  let errors = document.querySelector('#errors');
  let phone = document.querySelector('#phone');
  let input = document.registration.phone.value.trim();
  console.log(input.length);

  if (
    input !== '' ||
    input !== null ||
    input.charAt(0) !== '(' || 
    input.charAt(4) !== ')' || 
    input.charAt(5) !== ' ' ||
    input.charAt(9) !== '-'
  ) {
    errors.innerHTML +=
      '<p>NOTE: Phone number must be 10 digits long with the following format: (999) 999-9999</p>';
    phone.focus();
    return false;
  }

//   //function
//     if (input.length === 10) {
//         return true;
//     } else {
//         errors.innerHTML +=

//         '<p>NOTE: Phone number must be 10 digits long with the following format: (999) 999-9999</p>';
//         phone.focus();
//         return false;
//     }
// }



//Validate if the postal code is in the correct format
function validatePostalCode() {
  //debugger;
  let errors = document.querySelector('#errors');
  let postalCode = document.querySelector('#postal-code');
  let input = postalCode.value.trim();
  let numberString = '1234567890';
  let alphaString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let pass = false;

  if (input.length !== 6) {
    errors.innerHTML += '<p>NOTE: Postal code must be in Canadian format!</p>';
    postalCode.focus();
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    //debugger;
    if (i % 2 == 0) {
      if (alphaString.indexOf(input.substr(i, 1)) !== -1) {
        //if the character is in the alphaString
        pass = true;
      } else {
        pass = false;
        break;
      }
    } else {
      if (numberString.indexOf(input.substr(i, 1)) !== -1) {
        //if the character is in the numberString
        pass = true;
      } else {
        pass = false;
        break;
      }
    }
  }
  if (pass === false) {
    errors.innerHTML +=
      '<p>NOTE: Postal code must be in Canadian format! Example: A1A1A1 </p>';
    postalCode.focus();
    return false;
  }
  return true;
}

//Validate if the city only contains letters
function validateCity() {
  // debugger;
  let errors = document.querySelector('#errors');
  let city = document.querySelector('#city');
  let input = city.value.trim();
  let allAlpha = true;

  input = input.toUpperCase();
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) < 'A' || input.charAt(i) > 'Z') {
      allAlpha = false;
      break;
    }
  }

  if (allAlpha === false) {
    errors.innerHTML += '<p>NOTE: City must be all letters!</p>';
    city.focus();
    return false;
  }
  return true;
}

//Clear the error messages
function clearerrors() {
  document.querySelector('#errors').innerHTML = '';
}
