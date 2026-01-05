import { legacy_createStore as createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const legacy_createStore = createStore(rootReducer);

export default legacy_createStore;
