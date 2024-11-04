 function validateEmail(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}
 function validatePassword(password) {
  // password must be 8 characters long and contain at least one number and one letter one special character and one uppercase letter one lower case letter
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
}
  function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
  }
export function loginValidator(email, password) {
  return validateEmail(email) && validatePassword(password);
}
export function registerValidator(email, password, confirmPassword) {
  return validateEmail(email) && validatePassword(password) && validateConfirmPassword(password, confirmPassword);
}

