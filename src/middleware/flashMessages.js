function getFleshMessage(request) {
  const flashMessages = Object.values(request.flash());
  const flashMessage = flashMessages[0] ? flashMessages[0] : "";

  return flashMessage;
}

const loginMessage = `
<h2 class="flash-message-green">You are now logged in</h2>
`;

const signupMessage = `
<h2 class="flash-message-green">You are now signed up</h2>
`;

const loginErrorMessage = `
<h2 class="flash-message-red">Login error</h2>
`;

const signupErrorMessage = `
<h2 class="flash-message-red">Sign error</h2>
`;

const alreadyLogin = `
<h2 class="flash-message-red">You are already login</h2>
`;

module.exports = {
  loginMessage,
  signupMessage,
  getFleshMessage,
  loginErrorMessage,
  signupErrorMessage,
  alreadyLogin,
};
