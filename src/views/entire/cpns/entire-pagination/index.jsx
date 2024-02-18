import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchTotalRoomListAction,
} from "@/stores/modules/entire/actionCreator";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function paginationChangeHandle(event, value) {
    window.scrollTo(0, 0)
    dispatch(fetchTotalRoomListAction(value - 1));
  }
  return (
    <PaginationWrapper>
      <Pagination
        count={Math.ceil(totalCount / 20)}
        onChange={paginationChangeHandle}
      />
      <div className="text">
        第 {currentPage * 20 + 1} - {(currentPage + 1) * 20}个房源，共超过
        {totalCount} 个
      </div>
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
