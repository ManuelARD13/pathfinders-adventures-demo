import React, { useContext } from "react";
import "./MainMenu.css"
import pathfinderLogo from "../../img/pathfinderLogo.png"
import { GameDataContext } from "../../context/GameDataContext";

function MainMenu() {

    const { setScreen } = useContext(GameDataContext)

    return(
        <section className="mainMenu">
            <div className="mainMenuDiv">
                <img src={pathfinderLogo} alt="pathfinderLogo" />
                <h1 className="mainMenuSubtitle">Cosmo's Quests</h1>
                <form className="mainMenuForm">
                    <input 
                        type="button" 
                        value="New Game" 
                        onClick={() => setScreen("StatsGenerator")}  
                    />
                    <input 
                        type="button" 
                        value="Load Game" 
                        // onClick={() => setScreen("LoadGameScreen")} 
                    />
                </form>
                {/* Copyright text and message. */}
                <p>This app was built for educationals purposes only. All media resources rights are properties of their owners. Power by React.js.</p>
            </div>
        </section>
    )
}

export default MainMenu

//Apply changes with useReducer parameters on screen's changes