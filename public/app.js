function updateScore(gameName) {
  const body = {
    gameName: `${gameName}`,
    user_id: 1,
  };
  fetch("/update-score", {
    method: "POST",
    body,
    headers: {
      "content-type": "x-www-form-urlencoded",
    },
  });
}

function updateLastPlayed() {}

const flashMessage = document.querySelector("h2");

setTimeout(() => (flashMessage.style.display = "none"), 1000);

export { updateScore, updateLastPlayed };
