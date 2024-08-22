import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The entry point of the React application.
 *
 * This file renders the root component (`App`) into the DOM. It also includes Bootstrap's CSS for styling.
 */
ReactDOM.render(
    <React.StrictMode>
        {/* The root component of the application */}
        <App />
    </React.StrictMode>,
    // The DOM element where the React application will be mounted
    document.getElementById('root')
);
