import React, { useContext } from "react";
import "./MainMenu.css"
import pathfinderLogo from "Img/pathfinderLogo.png"
import { GameDataContext } from "Context/GameDataContext";

function MainMenu() {

    const { setScreen } = useContext(GameDataContext)

    return(
        <section className="main-menu-screen">
            <div className="main-menu-container">
                <img src={pathfinderLogo} alt="pathfinderLogo" />
                <h1 className="main-menu-subtitle">Cosmo's Quests</h1>
                <form className="main-menu-form">
                    <input 
                        type="button" 
                        value="New Game" 
                        onClick={() => setScreen("StatsGenerator")}  
                    />
                    <input 
                        type="button" 
                        value="Load Game" 
                        onClick={() => setScreen("LoadGame")} 
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