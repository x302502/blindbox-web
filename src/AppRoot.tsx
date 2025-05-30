import { FC } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
const composeProviders =
  (...providers: any[]) =>
  (Child: any) =>
  (props: any) =>
    providers.reduce(
      (acc, Provider) => <Provider>{acc}</Provider>,
      <Child {...props} />
    );
const WrappedApp = composeProviders()(App);

const AppRoot: FC = () => {
  return (
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
  );
};

export default AppRoot;
