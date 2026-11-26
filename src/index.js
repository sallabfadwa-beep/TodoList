// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

// import { store } from './redux205/store';
// import App from './redux205/App';

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );

// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import { Provider } from 'react-redux';
// import { store } from './redux205/store';

import Pare from './preparation/Pare';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <App />
);