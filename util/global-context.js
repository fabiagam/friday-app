import React from "react";

const GlobalContext = React.createContext({
  make: "",
  model: "",
  update: (data) => {},
});

export default GlobalContext;
