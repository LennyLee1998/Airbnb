import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { sectionData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      <div className="room-list">
        <ScrollView>
          {sectionData?.list?.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="Plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  sectionData: PropTypes.object,
};

export default HomeSectionV3;
