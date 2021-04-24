import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskListReducer from './TaskList/TaskList.reducer';
import userRegisterReducer from './UserRegister/UserRegister.reducer';
import sessionReducer from './Session/Session.reducer';

const rootReducer = combineReducers({
    tasks: taskListReducer,
    users: userRegisterReducer,
    session: sessionReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };