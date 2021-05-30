import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// utils
import { loadFromLocalStorage, saveToLocalStorage } from 'utils/localStorage';
// reducer
import { employeesReducer } from 'store/reducers/employeesReducer';

const persistedState = loadFromLocalStorage();

export const store = createStore(
  employeesReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
