import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { sectionData } = props;
  const tabNames = sectionData?.dest_address?.map((item) => item.name);
  // debugger
  const initialName = tabNames && tabNames.length > 0 ? tabNames[0] : "";
  const [name, setName] = useState(initialName);

  // const [name, setName] = useState(tabNames[0] ?? "");
  const nameClickHandle = useCallback((tabName) => {
    setName(tabName);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      />
      <SectionTabs tabNames={tabNames} nameClickHandle={nameClickHandle} />
      <SectionRooms
        listData={sectionData?.dest_list?.[name]}
        itemWidth="33.33%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  sectionData: PropTypes.object,
};

export default HomeSectionV2;
