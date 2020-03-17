import React from "react";
import routes from "../../routes";

import "./App.css";

function App({ children }) {
  return (
    <>
      {React.Children.toArray(children)}
      {routes}
    </>
  );
}

export default App;
