import React, { useEffect, useState } from 'react';
import { AddImage } from './AddImage';
import './App.css';
import { Emoji } from './Emoji';

function App() {
  const [emojis, setEmojis] = useState([] as string[]);
  const [showSetting, setShowSetting] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem('emojis');
    if (storage) {
      setEmojis(JSON.parse(storage));
    }
  }, []);

  return (
    <div className="App">
      <div className='emoji-grid-box'>
        {emojis.map((image: string, index: number) => (
          <div className='emoji-grid' key={'emoji-' + index}>
            <Emoji
              key={index}
              image={image}
              onRemoveEmoji={(img: string) => {
                const index = emojis.indexOf(img);
                let list = emojis;
                list.splice(index, 1);
                setEmojis([...list]);
                localStorage.setItem('emojis', JSON.stringify(list))
              }}
              showSetting={showSetting}
            />
          </div>
        ))}
        <AddImage onAddImage={onAddImage} setShowSetting={setShowSetting} />
      </div>
      <button onClick={() => { window.location.reload() }}>&#8634;</button>
      <button onClick={() => setShowSetting(!showSetting)}>&#9881;</button>
    </div>
  );

  function onAddImage(img: string) {
    let list: string[] = [...emojis, img];
    localStorage.setItem('emojis', JSON.stringify(list));
    setEmojis(list);
  }
}

export default App;