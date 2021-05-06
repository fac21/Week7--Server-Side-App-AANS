function getHtml(title, mainContent) {
  return  `
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
  <body> 
  ${mainContent}
  <script src="app.js"></script>
  </body>
</html>
    `;
}

const signupForm = `  
  <h1>Sign up</h1>
  <form action="sign-up" method="POST">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" required />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" required />
      <input type="submit" value="Create user" />
    </form>
`;

function createGameList(gamesArray){
  const gameListHtml = ''
  gamesArray.forEach((array) => gameListHtml += 
  `<li><a href="${array[1]}">${array[0]}</a></li>`)
  return gameListHtml
}

module.exports = { getHtml, signupForm, createGameList };
