import { useState } from 'react'
import './Card.css'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className='card-container'>
      <div
        className={`card-content ${isFlipped ? 'is-flipped' : ''}`}
        onMouseEnter={() => {
          setIsFlipped(true)
        }}
        onMouseLeave={() => {
          setIsFlipped(false)
        }}>
        <article className={`card-face card-front`}>{props.children[0]}</article>
        <article className={`card-face card-back`}>{props.children[1]}</article>
      </div>
    </div>
  )
}

const CardFixed = (props) => {
  return (
    <div className='card-container'>
      <div className='card-content'>
        <article className='card-face'>{props.children}</article>
      </div>
    </div>
  )
}

export { Card, CardFixed }
