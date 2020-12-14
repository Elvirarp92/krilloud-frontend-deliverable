import { useState } from 'react'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      {!isFlipped && props.children[0]}
      {isFlipped && props.children[1]}
    </div>
  )
}

export { Card }
