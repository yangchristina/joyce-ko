import { styled } from "./stitches.config";

export const GridCellText = styled('p', {
    "white-space": "pre-line",
    height: 'stretch',
    width: 'stretch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    variants: {
        border: {
            true: {
                border: '1px solid lightgray',
                borderRadius: '10px',
                padding: '10px',
            }
        }
    }
})