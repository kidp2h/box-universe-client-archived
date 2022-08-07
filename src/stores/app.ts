import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { createWrapper } from 'next-redux-wrapper';
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
export const state = store.getState();
export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export default store;
export const wrapper = createWrapper(() => store);
