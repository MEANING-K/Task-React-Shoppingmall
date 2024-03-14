// store/index.js
import { createStore } from 'redux';
import rootReducer from './reducers/cartReducer'; // 수정된 부분

const store = createStore(rootReducer);

export default store;