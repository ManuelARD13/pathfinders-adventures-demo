import React, { useContext } from "react";
import "./Intro.css"
import { SelectorsContext } from "../../context/SelectorsCtx";

function Intro(){

     const { setScreen } = useContext(SelectorsContext)
    
    /*Animated Transition*/
     setTimeout(() => setScreen("MainMenu"), 14000)

    return(
    <section className="branding fade-out">
        <div>
            <h3><span>Cosmic</span> Games</h3>
        </div>
    </section>
    )
}

export default Intro

//Refactor screen's states into a useReducer format.