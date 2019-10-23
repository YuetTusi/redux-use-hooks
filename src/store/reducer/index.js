import { TOGGLE_COMPLETE, ADD_TODO, DEL_TODO, FILTER_DISPLAY } from '../action/types';

let initState = {
    display: 'all',
    todos: [
        {
            id: ~~(Math.random() * 1000000),
            title: 'React',
            isComplete: true
        },
        {
            id: ~~(Math.random() * 1000000),
            title: 'Node',
            isComplete: false
        },
        {
            id: ~~(Math.random() * 1000000),
            title: 'Hooks',
            isComplete: false
        }
    ]
}

function reducer(state = initState, action) {
    let nextState = null;
    switch (action.type) {
        case TOGGLE_COMPLETE:
            nextState = {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id == action.payload.id) {
                        return { ...item, isComplete: action.payload.isComplete };
                    } else {
                        return item;
                    }
                })
            };
            break;
        case ADD_TODO:
            nextState = {
                ...state,
                todos: [...state.todos, action.payload]
            };
            break;
        case DEL_TODO:
            nextState = {
                ...state,
                todos: state.todos.filter(item => item.id != action.payload)
            };
            break;
        case FILTER_DISPLAY:
            nextState = {
                ...state,
                display: action.payload
            };
            break;
        default:
            nextState = state;
            break;
    }
    return nextState;
}
export default reducer;