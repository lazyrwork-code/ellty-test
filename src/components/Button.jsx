import { useState } from 'react'

const Button = ({ onClick, children }) => {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      className={`done-btn${pressed ? ' active' : ''}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button