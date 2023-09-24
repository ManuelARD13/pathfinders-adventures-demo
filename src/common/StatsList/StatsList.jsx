import React, { useContext } from "react"
import "./StatsList.css"
import { GameDataContext } from "Context/GameDataContext"

function StatsList () {

  const  { characterStats, raze } = useContext(GameDataContext)

  return(
    <div className="modifiersTable">
      <table className="statsTable">
        <tbody>    
          <tr>
            <th>Stats</th>
            <th>Score</th>
            <th>Modifiers</th>
            <th>Totals</th>
          </tr>
          <tr>
            <td> CON</td>
            <td><span id="CONScore" className="statsScores">{characterStats.CON}</span></td>
            <td><span id="CONMod" className="modScores">{raze !== "" ? raze.razeModifiers.CON : +0}</span></td>
            <td>
							<span id="CONTotal" className="totalScores">
								{raze !== "" ? characterStats.CON + raze.razeModifiers.CON : characterStats.CON }
							</span>
						</td>
          </tr>
          <tr>
            <td>STR</td>
            <td><span id="STRScore" className="statsScores">{characterStats.STR}</span></td>
            <td><span id="STRMod" className="modScores">{raze !== "" ? raze.razeModifiers.STR : +0}</span></td>
            <td>
							<span id="STRTotal" className="totalScores">
								{raze !== "" ? characterStats.STR + raze.razeModifiers.STR : characterStats.STR }
							</span>
						</td>
          </tr>
          <tr>
            <td>DEX</td>
            <td><span id="DEXScore" className="statsScores">{characterStats.DEX}</span></td>
            <td><span id="DEXMod" className="modScores">{raze !== "" ? raze.razeModifiers.DEX : +0}</span></td>
            <td>
							<span id="DEXTotal" className="totalScores">
								{raze !== "" ? characterStats.DEX + raze.razeModifiers.DEX : characterStats.DEX }
							</span>
						</td>
          </tr>
        	<tr>
          	<td>INT</td>
            <td><span id="INTScore" className="statsScores">{characterStats.INT}</span></td>
            <td><span id="INTMod" className="modScores">{raze !== "" ? raze.razeModifiers.INT : +0}</span></td>
            <td>
							<span id="INTTotal" className="totalScores">
								{raze !== "" ? characterStats.INT + raze.razeModifiers.INT : characterStats.INT }
							</span>
						</td>
          </tr>
          <tr>
            <td>WIS</td>
            <td><span id="WISScore" className="statsScores">{characterStats.WIS}</span></td>
            <td><span id="WISMod" className="modScores">{raze !== "" ? raze.razeModifiers.WIS : +0}</span></td>
            <td>
							<span id="WISTotal" className="totalScores">
								{raze !== "" ? characterStats.WIS + raze.razeModifiers.WIS : characterStats.WIS }
							</span>
						</td>
          </tr>
          <tr>
            <td>CHA</td>
            <td><span id="CHAScore" className="statsScores">{characterStats.CHA}</span></td>
            <td><span id="CHAMod" className="modScores">{raze !== "" ? raze.razeModifiers.CHA : +0}</span></td>
            <td>
							<span id="CHATotal" className="totalScores">
									{ raze !== "" ? characterStats.CHA + raze.razeModifiers.CHA : characterStats.CHA }
							</span>
						</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatsList