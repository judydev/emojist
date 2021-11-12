import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Emoji } from './Emoji';

export function EmojiWithTooltip(props: any) {
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <div className='emoji-box'>
                <Emoji image={props.image} />
                <button onClick={() => {
                    console.log('TODO: add to clipboard')
                }}>Copy</button>
                <button onClick={() => props.onRemoveEmoji(props.image)}>Remove</button>
            </div>
        </OverlayTrigger>
    )
}

const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Copy
    </Tooltip>
);


