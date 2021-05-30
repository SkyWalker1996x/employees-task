import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { employeesReducer } from 'store/reducers/employeesReducer';

export const store = createStore(employeesReducer, composeWithDevTools(applyMiddleware(thunk)));
