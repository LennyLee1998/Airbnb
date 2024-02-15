import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <div className="footer"></div>
    </div>
  );
});

export default App;
