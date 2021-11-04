import React from 'react';
import './App.css';
import cat from './assets/cat.jpeg';
import monkey from './assets/monkey.jpeg';
import otter from './assets/otter.jpeg';
import { EmojiWithTooltip } from './EmojiWithTooltip';

function App() {
  const list = [cat, monkey, otter];
  return (
    <div className="App">
      {list.map(image => (
        <EmojiWithTooltip image={image} />
      ))}
    </div>
  );
}

export default App;
