document.addEventListener('DOMContentLoaded', function() {
  const loginContainer = document.getElementById('login-container');
  const signupContainer = document.querySelector('.signup-container');
  const switchForms = document.querySelectorAll('.switch-form');

  switchForms.forEach(switchBtn => {
      switchBtn.addEventListener('click', function() {
          signupContainer.classList.toggle('active');
          loginContainer.classList.toggle('inactive');
      });
  });


});



