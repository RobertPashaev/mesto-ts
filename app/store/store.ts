import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/UserService';
import { cardsApi } from '../services/CardServices';
import { authApi } from '../services/AuthServices';

const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware, userApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
