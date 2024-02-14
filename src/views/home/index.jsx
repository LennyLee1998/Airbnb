import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";
import HomeBanner from "./cpns/home-banner";
import { fetchHomeDataAction } from "@/stores/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

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
        <div className="discount">
          <SectionHeader
            title={discountData.title}
            subtitle={discountData.subtitle}
          />
          <SectionRooms listData={discountData?.dest_list?.["佛山"]} itemWidth="33.33%"/>
        </div>
        <HomeSectionV1 sectionData={highScoreData} />
        <HomeSectionV1 sectionData={goodPriceData} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
