import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
  getHotRecommendData,
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
    getHotRecommendData().then((res) => {
      dispatch(changeHotRecommendDataAction(res));
    });
  }
);

const homeSlicer = createSlice({
  name: "home",
  initialState: {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
    hotRecommendData: {},
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
    changeHotRecommendDataAction(state, { payload }) {
      state.hotRecommendData = payload;
    },
  },
});

export const {
  changeGoodPriceDataAction,
  changeHighScoreDataAction,
  changeDiscountDataAction,
  changeHotRecommendDataAction,
} = homeSlicer.actions;

export default homeSlicer.reducer;
