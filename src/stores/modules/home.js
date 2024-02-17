import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
  getHotRecommendData,
  getLongforData,
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
    getLongforData().then((res) => {
      dispatch(changeLongforDataAction(res));
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
    longforData: {},
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
    changeLongforDataAction(state, { payload }) {
      state.longforData = payload;
    },
  },
});

export const {
  changeGoodPriceDataAction,
  changeHighScoreDataAction,
  changeDiscountDataAction,
  changeHotRecommendDataAction,
  changeLongforDataAction,
} = homeSlicer.actions;

export default homeSlicer.reducer;
