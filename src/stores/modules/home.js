import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
  getHotRecommendData,
  getLongforData,
  getPlusData,
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
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
    getPlusData().then((res) => {
      dispatch(changePlusDataAction(res));
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
    plusData: {},
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
    changePlusDataAction(state, { payload }) {
      state.plusData = payload;
    },
  },
});

export const {
  changeGoodPriceDataAction,
  changeHighScoreDataAction,
  changeDiscountDataAction,
  changeHotRecommendDataAction,
  changeLongforDataAction,
  changePlusDataAction,
} = homeSlicer.actions;

export default homeSlicer.reducer;
