import React from 'react';

const TodoList = (props) => {
    const elements = props.data.map(item => <li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>)

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;
