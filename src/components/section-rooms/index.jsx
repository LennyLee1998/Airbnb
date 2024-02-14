import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";

const SectionRooms = memo((props) => {
  const { listData = [], itemWidth } = props;
  return (
    <RoomsWrapper>
      <div className="section-room">
        {listData?.slice(0, 8)?.map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
          );
        })}
      </div>
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  listData: PropTypes.array,
};

export default SectionRooms;
