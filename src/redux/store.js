import {createStore} from 'redux';
import reducers from './reducers/index';
const store = createStore(reducers);
//*This store contain the state that will be sent using provider to all app */
export default store;