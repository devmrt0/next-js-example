import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import counterReducer from "./slices/counterSlice";
import countryReducer from "./slices/countriesSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  country: countryReducer
});



const initialState = {};


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers], 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;