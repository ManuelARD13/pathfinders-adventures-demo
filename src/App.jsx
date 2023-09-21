import React from 'react';
import AppUI from './components/AppUI/AppUI';
import { SelectorsCtx } from './context/SelectorsCtx';

export default function App() {
  return (
    <SelectorsCtx>
      <AppUI />
    </SelectorsCtx>
  );
}
