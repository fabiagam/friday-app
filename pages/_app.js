import "../styles/style.css";
import { useState } from "react";
import GlobalContext from "../util/global-context";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    model: "",
    make: "",
    update,
  });

  function update(data) {
    setState(Object.assign({}, state, data));
  }
  return (
    <GlobalContext.Provider value={state}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
