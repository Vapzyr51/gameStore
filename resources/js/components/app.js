import App from './index';
import ReactDOM from 'react-dom';
import './app.css';
import {
    Provider
} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider>, document.getElementById('app'));
