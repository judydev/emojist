import React, { SyntheticEvent, useRef } from 'react';
import './AddImage.css';
import { readImage } from './utils/readImage';

export function AddImage(props:any){
    const ref = useRef<HTMLInputElement>(null);

    return(
        <div className='emoji-grid'>
            <input type='file' accept='image/*' onChange={onAddImage} ref={ref} hidden />
            <div className='emoji-box' onClick={() => {
                props.setShowSetting(false);
                if (ref.current) {
                    ref.current.click();
                }
            }}>
                <div className='add-image-button'>+</div>
            </div>
        </div>
    )

    function onAddImage(event: SyntheticEvent) {
        const files = (event.target as HTMLInputElement).files;
        if (files) {
            const file = files[0];

            readImage(file, (img: string) => {
                props.onAddImage(img)
            })
        }
    }
}