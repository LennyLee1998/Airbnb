import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { PicturesWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const [showBrowser, setShowBrowser] = useState(false);
  return (
    <PicturesWrapper>
      <div className="pictures" onClick={(e) => setShowBrowser(true)}>
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="showBtn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          setShowBrowser={setShowBrowser}
        />
      )}
    </PicturesWrapper>
  );
});

DetailPictures.propTypes = {};

export default DetailPictures;
