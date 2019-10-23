import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader.jsx';
import TodoList from './components/TodoList.jsx';
import TodoFooter from './components/TodoFooter.jsx';
import { Provider } from 'react-redux';
import store from './store';

function Index(props) {
    return <div>
        <Provider store={store}>
            <TodoHeader />
            <TodoList />
            <TodoFooter />
        </Provider>
    </div>;
}

ReactDOM.render(<Index />, document.querySelector('#root'));