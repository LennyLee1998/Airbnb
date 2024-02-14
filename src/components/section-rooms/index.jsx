import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";

const SectionRooms = memo((props) => {
  const { listData = [] } = props;
  return (
    <RoomsWrapper>
      <div className="section-room">
        {listData.map((item) => {
          return <RoomItem itemData={item} key={item.id} />;
        })}
      </div>
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  listData: PropTypes.array
};

export default SectionRooms;
