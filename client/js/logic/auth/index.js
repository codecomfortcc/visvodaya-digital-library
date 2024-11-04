import { loginValidator, registerValidator } from "../../validators/auth/validator.js";
import {  loginFetch,signupFetch,logoutFetch  } from "../../services/auth/fetch.js";
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', login);
signupForm.addEventListener('submit', register);
export async function login(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value
  console.log(email,password)
  const data = { email, password };
  if (loginValidator(email, password)) {
  const response = await loginFetch(data);
  console.log(response)
  }
  console.log({ error: "Invalid email or password" });
}
export async function register(e){
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  console.log(email,password,confirmPassword)
  if(registerValidator(email, password, confirmPassword)){
    return await signupFetch({ email, password, confirmPassword });
  }
  return {error: "Invalid credentials"}
}
export async function logout(e){
  e.preventDefault();
 return await logoutFetch();
}
