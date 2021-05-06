const templates = require("../components/templates")


function getHLPage(request, response){
    const mainContent = `
    <h1> Welcome to Higher or Lower </h1>
    <div class="card-container">
          <div class=hlbuttons>
            <button id="higher">Higher</button>
            <button id="lower">Lower</button>
          </div>

          <div class="row4">
            <button class="new-game" onclick=higherLower()>New Game</button>
          </div>

          <div class="row3">
            <div class="cards" id="card1"></div>
            <div class="cards" id="card2"></div>
            <div class="cards" id="card3"></div>
          </div>

          <div class="row2">
            <div class="cards" id="card4"></div>
            <div class="cards" id="card5"></div>
          </div>

          <div class="row1">
            <div class="cards" id="card6"></div>
          </div>
        </div>
        </div>
    `
    response.send(templates.getHtml('Higher or Lower', mainContent))

}

module.exports = {getHLPage}