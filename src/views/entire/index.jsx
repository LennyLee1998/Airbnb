import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import AppHeader from "@/components/app-header";
import EntireFilter from "./cpns/entire-filter";
import EntireRooms from "./cpns/entire-rooms";
import EntirePagination from "./cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchTotalRoomListAction } from "@/stores/modules/entire/actionCreator";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotalRoomListAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <div className="header">
        <AppHeader isFixed={true} />
      </div>
      <div className="filter">
        <EntireFilter />
      </div>
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
