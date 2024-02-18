import * as actionTypes from "./constant";
const initialState = {
  roomList: [],
  totalCount: 0,
  currentPage: 0,
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case actionTypes.CHANGE_ENTIRE_LIST:
      return { ...state, roomList: action.roomList };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.CHANGE_ISLODING_ACTION:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
