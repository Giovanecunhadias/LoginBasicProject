function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      document.getElementById('togglePassword').innerHTML = '<img src="https://cdn.icon-icons.com/icons2/569/PNG/512/eye-hidden-design-black-interface-symbol_icon-icons.com_54536.png" width="20"  height="20" alt="">';
    } else {
      passwordInput.type = 'password';
      document.getElementById('togglePassword').innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/6803/6803345.png" width="20"  height="20" alt="">';
    }
  }