import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
} from "@/services";
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
    getDiscountData().then((res) => {
      dispatch(changeDiscountDataAction(res));
    });
  }
);

const homeSlicer = createSlice({
  name: "home",
  initialState: {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
  },
  reducers: {
    changeGoodPriceDataAction(state, { payload }) {
      state.goodPriceData = payload;
    },
    changeHighScoreDataAction(state, { payload }) {
      state.highScoreData = payload;
    },
    changeDiscountDataAction(state, { payload }) {
      state.discountData = payload;
    },
  },
});

export const {
  changeGoodPriceDataAction,
  changeHighScoreDataAction,
  changeDiscountDataAction,
} = homeSlicer.actions;

export default homeSlicer.reducer;
