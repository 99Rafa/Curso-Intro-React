import React from 'react'

function TodoItem({ text, completed }) {

  const onComplete = () => {
    alert(`Todo completado: ${text}`);
  }

  const onDelete = () => {
    alert(`Borraste: ${text}`);
  }

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        ✖
      </span>
    </li>
  )
}

export { TodoItem }
