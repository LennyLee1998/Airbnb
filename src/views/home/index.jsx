import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import request from "@/services";
import { HomeWrapper } from "./style";
import AppHeader from "@/components/app-header";

const Home = memo(() => {
  const { count, name } = useSelector(
    (state) => ({
      count: state.home.count,
      name: state.entire.name,
    }),
    shallowEqual
  );

  useEffect(() => {
    request.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <HomeWrapper>
      <AppHeader/>
    </HomeWrapper>
  );
});

export default Home;
