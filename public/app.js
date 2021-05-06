function updateScore(gameName){
    const body = {
        gameName: `${gameName}`,
        user_id: 1
    }
    fetch("/update-score", {
      method: "POST",
      body,
      headers: {
        "content-type": "x-www-form-urlencoded",
      }
    });  
}

function updateLastPlayed(){

}


export {updateScore, updateLastPlayed}
