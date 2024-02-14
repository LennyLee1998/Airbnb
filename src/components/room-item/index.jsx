import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rating } from "@mui/material";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      bottomStyle={itemData?.bottom_info}
      itemWidth={itemWidth}
    >
      <div className="top">
        <img src={itemData.picture_url} alt="" />
      </div>
      <div className="bottom">
        <div className="info">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format + "/晚"}</div>
        <div className="review">
          <Rating
            name="half-rating"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{
              fontSize: "12px",
              color: `${itemData.star_rating_color}`,
              marginRight: "-1px",
            }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info && (
            <span> · {itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
