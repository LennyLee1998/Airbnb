import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";
import HomeBanner from "./cpns/home-banner";
import { fetchHomeDataAction } from "@/stores/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";
import HomeSectionV2 from "./cpns/home-section-v2";
import { isEmptyO } from "@/utils/is-empty-object";
import HomeLongfor from "./cpns/home-longfor";

const Home = memo(() => {
  const {
    goodPriceData,
    highScoreData,
    discountData,
    hotRecommendData,
    longforData,
  } = useSelector(
    (state) => ({
      goodPriceData: state.home.goodPriceData,
      highScoreData: state.home.highScoreData,
      discountData: state.home.discountData,
      hotRecommendData: state.home.hotRecommendData,
      longforData: state.home.longforData,
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
        {isEmptyO(hotRecommendData) && (
          <HomeSectionV2 sectionData={hotRecommendData} />
        )}
        {isEmptyO(longforData) && <HomeLongfor sectionData={longforData}/>}
        {isEmptyO(goodPriceData) && (
          <HomeSectionV1 sectionData={goodPriceData} />
        )}
        {isEmptyO(highScoreData) && (
          <HomeSectionV1 sectionData={highScoreData} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
