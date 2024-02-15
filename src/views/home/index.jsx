import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";
import HomeBanner from "./cpns/home-banner";
import { fetchHomeDataAction } from "@/stores/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";
import HomeSectionV2 from "./cpns/home-section-v2";
import { isEmptyO } from "@/utils/is-empty-object";

const Home = memo(() => {
  const { goodPriceData, highScoreData, discountData } = useSelector(
    (state) => ({
      goodPriceData: state.home.goodPriceData,
      highScoreData: state.home.highScoreData,
      discountData: state.home.discountData,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <div className="app-header">
        <AppHeader />
      </div>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountData) && <HomeSectionV2 sectionData={discountData} />}
        {isEmptyO(highScoreData) && (
          <HomeSectionV1 sectionData={highScoreData} />
        )}
        {isEmptyO(goodPriceData) && (
          <HomeSectionV1 sectionData={goodPriceData} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
