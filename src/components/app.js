import React from "react";
import { Provider } from "react-redux";
import {store} from '../redux/store/store'
import Screen from "./components/scren";
import CleBoard from "./components/cleBoard";

const app = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Screen />
        <CleBoard />
      </div>
    </Provider>
  );
};

export default app;
