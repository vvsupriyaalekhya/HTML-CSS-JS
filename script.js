// // document.addEventListener('DOMContentLoaded', () => {
// //   // Function to show the message box and redirect
// //   function showMessageBox(message, callback) {
// //     const messageBox = document.getElementById('message-box');
// //     messageBox.textContent = message;
// //     messageBox.classList.add('show');
// //     messageBox.addEventListener('click', () => {
// //       messageBox.classList.remove('show');
// //       if (callback) callback();
// //     });
// //     setTimeout(() => {
// //       messageBox.classList.remove('show');
// //       if (callback) callback();
// //     }, 3000);
// //   }

// //   // Handle login form
// //   const loginForm = document.getElementById('login-form');
// //   const loginMessage = document.getElementById('login-message');
// //   const users = JSON.parse(localStorage.getItem('users')) || [];

// //   if (loginForm) {
// //     loginForm.addEventListener('submit', (event) => {
// //       event.preventDefault();

// //       const username = document.getElementById('username').value.trim();
// //       const password = document.getElementById('password').value.trim();

// //       if (!username || !password) {
// //         loginMessage.textContent = 'Both fields are required!';
// //         loginMessage.style.color = 'red';
// //         return;
// //       }

// //       const user = users.find(user => user.username === username && user.password === password);
// //       if (user) {
// //         localStorage.setItem('currentUser', JSON.stringify(user));
// //         loginMessage.textContent = 'Login successful! Redirecting to homepage...';
// //         loginMessage.style.color = 'green';
// //         setTimeout(() => {
// //           window.location.href = 'index.html';
// //         }, 2000);
// //       } else {
// //         loginMessage.textContent = 'Invalid username or password!';
// //         loginMessage.style.color = 'red';
// //       }
// //     });
// //   }

// //   // Handle signup form
// //   const signupForm = document.getElementById('signup-form');
// //   const signupMessage = document.getElementById('signup-message');

// //   if (signupForm) {
// //     signupForm.addEventListener('submit', (event) => {
// //       event.preventDefault();

// //       const username = document.getElementById('username').value.trim();
// //       const phone = document.getElementById('phone').value.trim();
// //       const email = document.getElementById('email').value.trim();
// //       const department = document.getElementById('department').value.trim();
// //       const password = document.getElementById('password').value.trim();
// //       const confirmPassword = document.getElementById('confirm-password').value.trim();

// //       if (!username || !phone || !email || !department || !password || !confirmPassword) {
// //         signupMessage.textContent = 'All fields are required!';
// //         signupMessage.style.color = 'red';
// //         return;
// //       }

// //       if (password !== confirmPassword) {
// //         signupMessage.textContent = 'Passwords do not match!';
// //         signupMessage.style.color = 'red';
// //         return;
// //       }

// //       const existingUser = users.find(user => user.username === username);
// //       if (existingUser) {
// //         signupMessage.textContent = 'Username already exists. Please choose another.';
// //         signupMessage.style.color = 'red';
// //         return;
// //       }

// //       const newUser = { username, phone, email, department, password };
// //       users.push(newUser);
// //       localStorage.setItem('users', JSON.stringify(users));

// //       localStorage.setItem('currentUser', JSON.stringify(newUser));

// //       signupMessage.textContent = 'Sign-up successful! Redirecting to homepage...';
// //       signupMessage.style.color = 'green';
// //       setTimeout(() => {
// //         window.location.href = 'index.html';
// //       }, 2000);
// //     });
// //   }

// //   // Handle forgot password
// //   const forgotPasswordLink = document.getElementById('forgot-password-link');
// //   if (forgotPasswordLink) {
// //     forgotPasswordLink.addEventListener('click', () => {
// //       const email = prompt('Please enter your email:');
// //       if (email) {
// //         const user = users.find(user => user.email === email);
// //         if (user) {
// //           // In real implementation, you would send a reset link to the email
// //           alert('Password reset link has been sent to your email.');
// //         } else {
// //           alert('Email not found!');
// //         }
// //       }
// //     });
// //   }

// //   // Access restriction for protected sections
// //   const protectedLinks = document.querySelectorAll('a.protected-link');
// //   protectedLinks.forEach(link => {
// //     link.addEventListener('click', (event) => {
// //       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// //       if (!currentUser) {
// //         event.preventDefault();
// //         showMessageBox('You need to log in first!', () => {
// //           window.location.href = 'login.html';
// //         });
// //       }
// //     });
// //   });

// //   // Handle profile display and logout
// //   const authSection = document.getElementById('auth-section');
// //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// //   if (authSection && currentUser) {
// //     authSection.innerHTML = `
// //       <div class="profile">
// //         <h2>Profile</h2>
// //         <p>${currentUser.username}</p>
// //         <button id="logout-button">Logout</button>
// //       </div>
// //     `;

// //     document.getElementById('logout-button').addEventListener('click', () => {
// //       localStorage.removeItem('currentUser');
// //       showMessageBox('Logged out successfully!', () => {
// //         window.location.href = 'login.html';
// //       });
// //     });
// //   } else {
// //     authSection.innerHTML = `
// //       <div class="auth-links">
// //         <a href="login.html">Login</a>
// //         <a href="signup.html">Sign Up</a>
// //       </div>
// //     `;
// //   }

// //   // Carousel functionality for info boxes (if any)
// //   const infoBoxes = document.querySelectorAll('.info-box');
// //   let activeIndex = 0;

// //   setInterval(() => {
// //     infoBoxes.forEach((box, index) => {
// //       if (index === activeIndex) {
// //         box.style.transform = 'translateX(0)';
// //         box.style.zIndex = '2';
// //         box.style.opacity = '1';
// //       } else if (index < activeIndex) {
// //         box.style.transform = 'translateX(-100%)';
// //         box.style.zIndex = '1';
// //         box.style.opacity = '0';
// //       } else {
// //         box.style.transform = 'translateX(100%)';
// //         box.style.zIndex = '1';
// //         box.style.opacity = '0';
// //       }
// //     });

// //     activeIndex = (activeIndex + 1) % infoBoxes.length;
// //   }, 5000);
// // });


// document.addEventListener('DOMContentLoaded', () => {
//   // Function to show the message box and redirect
//   function showMessageBox(message, callback) {
//     const messageBox = document.getElementById('message-box');
//     messageBox.textContent = message;
//     messageBox.classList.add('show');
//     messageBox.addEventListener('click', () => {
//       messageBox.classList.remove('show');
//       if (callback) callback();
//     });
//     setTimeout(() => {
//       messageBox.classList.remove('show');
//       if (callback) callback();
//     }, 3000);
//   }

//   // Handle login form
//   const loginForm = document.getElementById('login-form');
//   const loginMessage = document.getElementById('login-message');
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   if (loginForm) {
//     loginForm.addEventListener('submit', (event) => {
//       event.preventDefault();

//       const username = document.getElementById('username').value.trim();
//       const password = document.getElementById('password').value.trim();

//       if (!username || !password) {
//         loginMessage.textContent = 'Both fields are required!';
//         loginMessage.style.color = 'red';
//         return;
//       }

//       const user = users.find(user => user.username === username && user.password === password);
//       if (user) {
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         loginMessage.textContent = 'Login successful! Redirecting to homepage...';
//         loginMessage.style.color = 'green';
//         setTimeout(() => {
//           window.location.href = 'index.html';
//         }, 2000);
//       } else {
//         loginMessage.textContent = 'Invalid username or password!';
//         loginMessage.style.color = 'red';
//       }
//     });
//   }

//   // Handle signup form
//   const signupForm = document.getElementById('signup-form');
//   const signupMessage = document.getElementById('signup-message');

//   if (signupForm) {
//     signupForm.addEventListener('submit', (event) => {
//       event.preventDefault();

//       const username = document.getElementById('username').value.trim();
//       const phone = document.getElementById('phone').value.trim();
//       const email = document.getElementById('email').value.trim();
//       const department = document.getElementById('department').value.trim();
//       const password = document.getElementById('password').value.trim();
//       const confirmPassword = document.getElementById('confirm-password').value.trim();

//       if (!username || !phone || !email || !department || !password || !confirmPassword) {
//         signupMessage.textContent = 'All fields are required!';
//         signupMessage.style.color = 'red';
//         return;
//       }

//       if (password !== confirmPassword) {
//         signupMessage.textContent = 'Passwords do not match!';
//         signupMessage.style.color = 'red';
//         return;
//       }

//       const existingUser = users.find(user => user.username === username);
//       if (existingUser) {
//         signupMessage.textContent = 'Username already exists. Please choose another.';
//         signupMessage.style.color = 'red';
//         return;
//       }

//       const newUser = { username, phone, email, department, password };
//       users.push(newUser);
//       localStorage.setItem('users', JSON.stringify(users));

//       localStorage.setItem('currentUser', JSON.stringify(newUser));

//       signupMessage.textContent = 'Sign-up successful! Redirecting to homepage...';
//       signupMessage.style.color = 'green';
//       setTimeout(() => {
//         window.location.href = 'index.html';
//       }, 2000);
//     });
//   }

//   // Handle forgot password
//   const forgotPasswordLink = document.getElementById('forgot-password-link');
//   if (forgotPasswordLink) {
//     forgotPasswordLink.addEventListener('click', () => {
//       const email = prompt('Please enter your email:');
//       if (email) {
//         const user = users.find(user => user.email === email);
//         if (user) {
//           // In real implementation, you would send a reset link to the email
//           alert('Password reset link has been sent to your email.');
//         } else {
//           alert('Email not found!');
//         }
//       }
//     });
//   }

//   // Access restriction for protected sections
//   const protectedLinks = document.querySelectorAll('a.protected-link');
//   protectedLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//       if (!currentUser) {
//         event.preventDefault();
//         showMessageBox('You need to log in first!', () => {
//           window.location.href = 'login.html';
//         });
//       }
//     });
//   });

//   // Remove profile display and logout section
//   const authSection = document.getElementById('auth-section');
//   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

//   if (authSection) {
//     if (currentUser) {
//       authSection.innerHTML = `
//         <div class="profile">
//           <h2>Profile</h2>
//           <p>${currentUser.username}</p>
//         </div>
//       `;
//     } else {
//       authSection.innerHTML = `
//         <div class="auth-links">
//           <a href="login.html">Login</a>
//           <a href="signup.html">Sign Up</a>
//         </div>
//       `;
//     }
//   }

//   // Carousel functionality for info boxes (if any)
//   const infoBoxes = document.querySelectorAll('.info-box');
//   let activeIndex = 0;

//   setInterval(() => {
//     infoBoxes.forEach((box, index) => {
//       if (index === activeIndex) {
//         box.style.transform = 'translateX(0)';
//         box.style.zIndex = '2';
//         box.style.opacity = '1';
//       } else if (index < activeIndex) {
//         box.style.transform = 'translateX(-100%)';
//         box.style.zIndex = '1';
//         box.style.opacity = '0';
//       } else {
//         box.style.transform = 'translateX(100%)';
//         box.style.zIndex = '1';
//         box.style.opacity = '0';
//       }
//     });

//     activeIndex = (activeIndex + 1) % infoBoxes.length;
//   }, 5000);
// });


document.addEventListener('DOMContentLoaded', () => {
  // Function to show the message box and redirect
  function showMessageBox(message, callback) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.classList.add('show');
    messageBox.addEventListener('click', () => {
      messageBox.classList.remove('show');
      if (callback) callback();
    });
    setTimeout(() => {
      messageBox.classList.remove('show');
      if (callback) callback();
    }, 3000);
  }

  // Handle login form
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!username || !password) {
        loginMessage.textContent = 'Both fields are required!';
        loginMessage.style.color = 'red';
        return;
      }

      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        loginMessage.textContent = 'Login successful! Redirecting to homepage...';
        loginMessage.style.color = 'green';
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 2000);
      } else {
        loginMessage.textContent = 'Invalid username or password!';
        loginMessage.style.color = 'red';
      }
    });
  }

  // Handle signup form
  const signupForm = document.getElementById('signup-form');
  const signupMessage = document.getElementById('signup-message');

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const department = document.getElementById('department').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirm-password').value.trim();

      if (!username || !phone || !email || !department || !password || !confirmPassword) {
        signupMessage.textContent = 'All fields are required!';
        signupMessage.style.color = 'red';
        return;
      }

      if (password !== confirmPassword) {
        signupMessage.textContent = 'Passwords do not match!';
        signupMessage.style.color = 'red';
        return;
      }

      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        signupMessage.textContent = 'Username already exists. Please choose another.';
        signupMessage.style.color = 'red';
        return;
      }

      const newUser = { username, phone, email, department, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('currentUser', JSON.stringify(newUser));

      signupMessage.textContent = 'Sign-up successful! Redirecting to homepage...';
      signupMessage.style.color = 'green';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    });
  }

  // Handle forgot password
  const forgotPasswordLink = document.getElementById('forgot-password-link');
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', () => {
      const email = prompt('Please enter your email:');
      if (email) {
        const user = users.find(user => user.email === email);
        if (user) {
          // In real implementation, you would send a reset link to the email
          alert('Password reset link has been sent to your email.');
        } else {
          alert('Email not found!');
        }
      }
    });
  }

  // Access restriction for protected sections
  const protectedLinks = document.querySelectorAll('a.protected-link');
  protectedLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        event.preventDefault();
        showMessageBox('You need to log in first!', () => {
          window.location.href = 'login.html';
        });
      }
    });
  });

  // Remove profile display and logout section
  const authSection = document.getElementById('auth-section');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (authSection) {
    if (currentUser) {
      authSection.innerHTML = `
        <div class="profile">
          <h2>Welcome, ${currentUser.username}!</h2>
        </div>
      `;
    } else {
      authSection.innerHTML = `
        <div class="auth-links">
          <a href="login.html">Login</a>
          <a href="signup.html">Sign Up</a>
        </div>
      `;
    }
  }

  // Carousel functionality for info boxes (if any)
  const infoBoxes = document.querySelectorAll('.info-box');
  let activeIndex = 0;

  setInterval(() => {
    infoBoxes.forEach((box, index) => {
      if (index === activeIndex) {
        box.style.transform = 'translateX(0)';
        box.style.zIndex = '2';
        box.style.opacity = '1';
      } else if (index < activeIndex) {
        box.style.transform = 'translateX(-100%)';
        box.style.zIndex = '1';
        box.style.opacity = '0';
      } else {
        box.style.transform = 'translateX(100%)';
        box.style.zIndex = '1';
        box.style.opacity = '0';
      }
    });

    activeIndex = (activeIndex + 1) % infoBoxes.length;
  }, 5000);
});
