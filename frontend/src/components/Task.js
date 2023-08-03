import React from 'react'

const Task = ({title, description, updateMode , deleteTask }) => {
    return (
        <div className="todo">
            <div className="Title">{title}</div>
            <div className="description">{description}</div>
            <div className='icons'>
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteTask} />
            </div>
        </div>
    )
}

export default Task