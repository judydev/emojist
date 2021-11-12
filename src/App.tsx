import React, { SyntheticEvent, useEffect, useState } from 'react';
import { AddImage } from './AddImage';
import './App.css';
import { EmojiWithTooltip } from './EmojiWithTooltip';
import { readImage } from './utils/readImage';

function App() {
  const [emojis, setEmojis] = useState([] as string[]);

  useEffect(() => {
    const storage = localStorage.getItem('emojis');
    if (storage) {
      console.log('stor', storage)

      setEmojis(JSON.parse(storage));
    }
  }, []);

  return (
    <div className="App">
      {emojis.map((image: string, index: number) => (
          <div key={'emoji-'+index}>
          <EmojiWithTooltip
            key={index}
            image={image}
            onRemoveEmoji={(img: string) => {
              const index = emojis.indexOf(img);
              let list = emojis;
              list.splice(index, 1);
              console.log('li', emojis, img, index, list)
              setEmojis([...list]);
              localStorage.setItem('emojis', JSON.stringify(list))
            }}
          />
          </div>
      ))}
      <AddImage onAddImage={onAddImage} />
      <button onClick={() => { window.location.reload() }}>&#8634;</button>
    </div>
  );

  function onAddImage(event:SyntheticEvent) {
    const files = (event.target as HTMLInputElement).files;
    if(files){
      const file = files[0];

      console.log('onAddImage',file,typeof file);
      readImage(file, (img: string) => {
        console.log('callback',img)
        // add as json?
        let list: string[] = [...emojis, img];
        localStorage.setItem('emojis', JSON.stringify(list));
        setEmojis(list);
      })
    }
  }
}


export default App;
