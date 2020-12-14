import { useState } from 'react'
import './Card.css'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className={`${isFlipped ? 'is-active' : ''}`}>
      {!isFlipped && props.children[0]}
      {isFlipped && props.children[1]}
    </div>
  )
}

const CardContent = (props) => {
  return (
    <article className='card'>
      {props.children}
    </article>
  )
}

export { Card, CardContent }
