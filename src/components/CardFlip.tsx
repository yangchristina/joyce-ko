import { GridCellText } from '@/styles'
import React, { ReactNode, useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const CardFlip = ({ front, back, color }: { front: ReactNode, back: ReactNode, color: string }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <GridCellText style={{background: color}} border onClick={() => {setIsFlipped(true);}} >
                    {front}
                </GridCellText>

                <GridCellText style={{background: color}} border onClick={() => setIsFlipped(false)} >
                    {back}
                </GridCellText>
            </ReactCardFlip>
        </>
    )
}

export default CardFlip