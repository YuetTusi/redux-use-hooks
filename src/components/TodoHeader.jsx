import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../store/action/types';

function TodoHeader(props) {

    let state = useSelector((state) => ({ todos: state.todos }));
    let newTodoInput = useRef(null);
    let dispatch = useDispatch();

    /**
     * 添加按钮事件
     */
    function addClick(e) {
        //current即真实的input结点，value即输入域的值
        let title = newTodoInput.current.value;
        dispatch({
            type: ADD_TODO, payload: {
                id: ~~(Math.random() * 1000000),
                title,
                isComplete: false
            }
        });
    }

    /**
     * 统计未完成数量
     */
    function getUncompleteCount(todos) {
        return todos.filter(item => !item.isComplete).length;
    }

    return <div>
        <div>您有{getUncompleteCount(state.todos)}项TODO未完成</div>
        <div>
            <input type="text" ref={newTodoInput} />
            <button type="button" onClick={addClick}>添加</button>
        </div>
    </div>
}

export default TodoHeader;