import { GridCellText } from '@/styles'
import React, { ReactNode, useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const CardFlip = ({ front, back }: { front: ReactNode, back: ReactNode }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <GridCellText border onClick={() => setIsFlipped(true)} >
                {front}
            </GridCellText>

            <GridCellText border onClick={() => setIsFlipped(false)} >
                {back}
            </GridCellText>
        </ReactCardFlip>
    )
}

export default CardFlip