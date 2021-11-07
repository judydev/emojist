import React, { SyntheticEvent, useEffect, useState } from 'react';
import { AddImage } from './AddImage';
import './App.css';
import cat from './assets/cat.jpeg';
import monkey from './assets/monkey.jpeg';
import otter from './assets/otter.jpeg';
import { EmojiWithTooltip } from './EmojiWithTooltip';
import { readImage } from './utils/readImage';

function App() {
  let list = [cat, monkey, otter];
  const storage = localStorage.getItem('emojis');
  if(storage){
    list = [...list,storage]
  }

  const [emojis,setEmojis] = useState(list);

  useEffect(()=>{
    console.log('onMounted',localStorage)
  },[])

  return (
    <div className="App">
      {
        emojis.map((image:string, index:number)=>(
          <div key={'emoji-'+index}>
            <EmojiWithTooltip image={image} />
          </div>
        ))
      }
      <AddImage onAddImage={onAddImage} />
    </div>
  );

  function onAddImage(event:SyntheticEvent) {
    const files = (event.target as HTMLInputElement).files;
    if(files){
      const file = files[0];

      console.log('onAddImage',file,typeof file);
      readImage(file, (img:any)=>{
        console.log('callback',img)
        // add as json?
        localStorage.setItem('emojis',img);
        setEmojis([...emojis,img]);
      })
    }
  }
}


export default App;
