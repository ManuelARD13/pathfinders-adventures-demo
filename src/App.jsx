import React from 'react';
import AppUI from './components/AppUI/AppUI';
import { GameDataCtx } from './context/GameDataContext';

export default function App() {
  return (
    <GameDataCtx>
      <AppUI />
    </GameDataCtx>
  );
}
