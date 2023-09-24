import React from 'react';
import AppUI from 'Components/AppUI/AppUI';
import { GameDataCtx } from 'Context/GameDataContext';

export default function App() {
  return (
    <GameDataCtx>
      <AppUI />
    </GameDataCtx>
  );
}
