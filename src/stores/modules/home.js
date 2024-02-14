import { getGoodPriceData, getHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceDataAction(res));
    });
    getHighScoreData().then((res) => {
      dispatch(changeHighScoreDataAction(res));
    });
  }
);

const homeSlicer = createSlice({
  name: "home",
  initialState: {
    goodPriceData: {},
    highScoreData: {},
  },
  reducers: {
    changeGoodPriceDataAction(state, { payload }) {
      state.goodPriceData = payload;
    },
    changeHighScoreDataAction(state, { payload }) {
      state.highScoreData = payload;
    },
  },
});

export const { changeGoodPriceDataAction, changeHighScoreDataAction } =
  homeSlicer.actions;

export default homeSlicer.reducer;
