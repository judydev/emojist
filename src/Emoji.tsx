import React from 'react';
import './Emoji.css';

export function Emoji(props: any) {
    const image = props.image;
    console.log('img', image)
    return (
        <div className='emoji-box'>
            <img className="emoji-image" src={image} alt="" />
            {/* <button onClick={() => {
                console.log('TODO: add to clipboard')
            }}>Copy</button> */}
            <div className='emoji-box-remove' onClick={() => props.onRemoveEmoji(props.image)} hidden={!props.showSetting}>&#9746;</div>
        </div>
    )
}
