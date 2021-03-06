function getHtml(title, mainContent) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="">
    <link rel="stylesheet" href="/style.css">
    <title>${title}</title>
  </head>
  <body class="flex_column"> 
  ${mainContent}
  <script src="/app.js" type="module"></script>
  <script src="/oldamy.js" type="module"></script>
  </body>
</html>
    `;
}

const signupForm = `  
  <h1>Sign up</h1>
  <form action="sign-up" method="POST">

  <div>
  <label for="username">Username
  <span aria-hidden="true">*</span></label>
  <input type="text" name="username" id="username" required />
  </div>

  <div>
  <label for="email">Email
      <span aria-hidden="true">*</span></label>
      <input type="email" name="email" id="email" required />
  </div>

  <div>
  <label for="password">Password
  <span aria-hidden="true">*</span></label>
  <div id="passwordRequirements">
Passwords must contain at least 8 characters.
</div>
  <input type="password" name="password" id="password" required 
  aria-describedby="passwordRequirements"
  minlength=8
/>
  </div>
    
      <input type="submit" value="Create user"  />
    </form>
`;

function createGameList(gamesArray) {
  const gameListHtml = "";
  gamesArray.forEach(
    (array) =>
      (gameListHtml += `<li><a href="${array[1]}">${array[0]}</a></li>`)
  );
  return gameListHtml;
}

const logInForm = `
<h1>Member Log In</h1>
<form action="log-in" method="POST">

<div>
  <label for="username">Username</label>
  <input type="text" name="username" id="username" required />
</div>

<div>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" required />
</div>

  <input type="submit" value="Log in" />
</form>`;

module.exports = { getHtml, signupForm, logInForm, createGameList };
