import React from "react";
import "./Acknowledgements.css"
import diceGoblin from "Img/diceGoblin.png";

function Acknoledgements () {
  return(
    <section className="GreetingsScreen">
      <div className="imageContainer">
        <img src={diceGoblin} alt="Dice Goblin" />
      </div>
      <div className="messageContainer">
        <h2>Thank You!</h2>
      	<div className="mainMessage">
          <p>
            Your Adventurer has been created and saved on your divice.
          </p>
          <p>
            When you coming back, press Load Game in the main menu to select an Adventurer from those awaiting in your tavern ready to battle!
          </p> 
    		</div>
      	<div className="linkMessage"> 
        	<p> 
          	You can see all the work behind this DEMO App on my <a href="https://github.com/ManuelARD13/pathfinders-adventures-cosmos-quest">Github Repository</a>
        	</p>
      		<p>
         	  Thank you so much for testing this App. Hope you like it! <br/>
          	Have a good day! or, perhaps, a good night!
      		</p> 
      	</div>
      	<a href="http://localhost:3000/"><input type={"button"} value="End Game" /></a>
    	</div>
    </section>
  )
}

export default Acknoledgements