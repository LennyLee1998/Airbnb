import { getEntireListData } from "@/services/modules/entire";
import * as actionTypes from "./constant";
export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});
export const changeEntireListAction = (roomList) => ({
  type: actionTypes.CHANGE_ENTIRE_LIST,
  roomList,
});
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});
export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_ISLODING_ACTION,
  isLoading,
});

export const fetchTotalRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoadingAction(true));
    // const currentPage = getState().entire.currentPage;
    const res = await getEntireListData(page * 20);
    dispatch(changeIsLoadingAction(false));
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeEntireListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
