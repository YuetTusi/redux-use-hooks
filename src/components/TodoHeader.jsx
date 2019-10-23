import React from 'react';
import { useSelector } from 'react-redux';

function TodoHeader(props) {

    let state = useSelector((state) => ({ todos: state.todos }));

    /**
     * 统计未完成数量
     */
    function getUncompleteCount(todos) {
        return todos.filter(item => !item.isComplete).length;
    }

    return <div>您有{getUncompleteCount(state.todos)}项TODO未完成</div>
}

export default TodoHeader;