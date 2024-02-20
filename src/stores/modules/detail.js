import { createSlice } from "@reduxjs/toolkit";
import localCache from "@/utils/cache";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: localCache.getCache("item-data") ?? {},
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
