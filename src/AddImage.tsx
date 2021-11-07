import React, { useRef } from 'react';

export function AddImage(props:any){
    const ref = useRef<HTMLInputElement>(null);

    return(
        <div className='add-image'>
            <input type='file' accept='image/*' onChange={props.onAddImage} ref={ref} hidden />
            <button onClick={()=>{
                console.log('ref',ref);
                if(ref.current){
                    ref.current.click();
                }
            }}>+</button>
        </div>
    )
}