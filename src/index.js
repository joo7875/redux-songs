import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

// useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]); // count가 바뀔 때만 effect를 재실행합니다.