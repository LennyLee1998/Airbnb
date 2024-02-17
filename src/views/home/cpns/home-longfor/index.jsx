import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { sectionData } = props;
  return (
    <LongforWrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      <ScrollView>
          {sectionData.list.map((item) => {
            return <LongforItem itemInfo={item} key={item.city} />;
          })}
      </ScrollView>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  sectionData: PropTypes.object,
};

export default HomeLongfor;
