import React, { memo } from "react";
import { EntireWrapper } from "./style";
import AppHeader from "@/components/app-header";
import EntireFilter from "./cpns/entire-filter";
import EntireRooms from "./cpns/entire-rooms";
import EntirePagination from "./cpns/entire-pagination";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="header">
        <AppHeader />
      </div>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
