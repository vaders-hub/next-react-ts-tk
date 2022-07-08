import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import kanyeReducer from "../features/kanye/kanyeSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
  },
  // middleware: [sagaMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
