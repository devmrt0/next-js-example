import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
    countUp: (state) => {
      state.value += 1;
    },
    
    countDown: (state) => {
      state.value -= 1;
    },
    
    setTarget: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});


const { actions, reducer } = counterSlice;


export const { countUp, countDown, setTarget } = actions;

export default reducer;