import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Emoji } from './Emoji';

export function EmojiWithTooltip(props: any) {
    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Emoji image={props.image} />
        </OverlayTrigger>
    )
}

const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Copy
    </Tooltip>
);


