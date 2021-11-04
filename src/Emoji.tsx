import React from 'react';

export function Emoji(props: any) {
    const image = props.image;
    return (
        <img className="default-image" src={image} alt="" />
    )
}
