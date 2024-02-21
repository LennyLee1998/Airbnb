import React, { memo } from "react";
import { DetailWrapper } from "./style";
import AppHeader from "@/components/app-header";
import DetailPictures from "./cpns/detail-pictures";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <AppHeader isFixed={false} />
      <DetailPictures />
    </DetailWrapper>
  );
});

export default Detail;
