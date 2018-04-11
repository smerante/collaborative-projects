import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList/ProductList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductList />, document.getElementById('root'));
registerServiceWorker();