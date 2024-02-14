import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";
import HomeBanner from "./cpns/home-banner";
import { fetchHomeDataAction } from "@/stores/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";


const Home = memo(() => {
  const { goodPriceData, highScoreData } = useSelector(
    (state) => ({
      goodPriceData: state.home.goodPriceData,
      highScoreData: state.home.highScoreData,
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
        <HomeSectionV1 sectionData={highScoreData} />
        <HomeSectionV1 sectionData={goodPriceData} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
