import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_COMPLETE, ADD_TODO, DEL_TODO, FILTER_DISPLAY } from '../store/action/types';

function TodoList(props) {

    let state = useSelector((state) => state);
    let newTodoInput = useRef(null);
    let dispatch = useDispatch();

    /**
     * Todo勾选事件
     */
    function itemChange(e) {
        const { target } = e;
        dispatch({
            type: TOGGLE_COMPLETE, payload: {
                id: target.dataset.id,
                isComplete: target.checked
            }
        });
    }

    /**
     * 添加按钮事件
     */
    function addClick(e) {
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
     * 删除事件
     */
    function delClick(e) {
        const { id } = e.target.dataset;
        dispatch({ type: DEL_TODO, payload: id });
    }

    /**
     * 渲染Todo列表
     */
    function renderList(todos, display) {
        return todos.filter(item => {
            switch (display) {
                case 'complete':
                    return !item.isComplete;
                case 'uncomplete':
                    return item.isComplete;
                default:
                    return true;
            }
        }).map((item, index) => {
            if (item.isComplete) {
                return <li key={index}>
                    <input type="checkbox" data-id={item.id} checked={true} onChange={itemChange} />
                    <del>{item.title}</del>
                    <a data-id={item.id} onClick={delClick}>删除</a>
                </li>;
            } else {
                return <li key={index} data-id={item.id}>
                    <input type="checkbox" data-id={item.id} checked={false} onChange={itemChange} />
                    <span>{item.title}</span>
                    <a data-id={item.id} onClick={delClick}>删除</a>
                </li>;
            }
        });
    }

    return <div>
        <div>
            <input type="text" ref={newTodoInput} />
            <button type="button" onClick={addClick}>添加</button>
        </div>
        <hr />
        <ul>
            {renderList(state.todos, state.display)}
        </ul>
    </div>
}

export default TodoList;
