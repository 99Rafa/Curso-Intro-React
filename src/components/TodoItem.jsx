import React from 'react'

function TodoItem({ text, completed }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
        ✔
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span className='Icon Icon-delete'>
        ✖
      </span>
    </li>
  )
}

export { TodoItem }
