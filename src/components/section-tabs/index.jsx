import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames, nameClickHandle } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabClickHandle = (index) => {
    setCurrentIndex(index)
    nameClickHandle(tabNames[index])
  }
  return (
    <TabsWrapper>
      {tabNames?.map((item, index) => {
        return (
          <div
            className={classNames("tabs", { active: currentIndex === index })}
            key={item}
            onClick={e => {
              tabClickHandle(index)
            }}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
