import { useState } from 'react'
import './Card.css'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      class={`card ${isFlipped ? 'isActive' : ''}`}>
      {!isFlipped && props.children[0]}
      {isFlipped && props.children[1]}
    </div>
  )
}

export { Card }
