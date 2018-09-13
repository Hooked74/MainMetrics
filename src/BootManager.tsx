import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { Store } from "redux";
import MainMetricsApp from "./components/MainMetricsApp/MainMetricsApp";
import createStore from "./store";
import { isIE } from "./utils";

import IState = MainMetrics.store.IState;
import IAction = MainMetrics.store.IAction;

class BootManager {
  private static readonly ROOT_ID: string = "root";
  private static readonly ROOT_COMPONENT_PATH: string =
    "./components/MainMetricsApp/MainMetricsApp";

  public async setup(): Promise<void> {
    await this.applyPolyfills();

    const root: HTMLElement = this.createRootElement();
    const store: Store<IState, IAction> = createStore({});
    const providerComponent: JSX.Element = this.createProviderComponent(store);

    document.body.appendChild(root);

    ReactDOM.render(providerComponent, root);
    this.applyHotReload(providerComponent, root);
  }

  private createRootElement(): HTMLElement {
    const element: HTMLElement = document.createElement("div");
    element.id = BootManager.ROOT_ID;

    return element;
  }

  private createProviderComponent(store: Store<IState, IAction>): JSX.Element {
    return (
      <Provider store={store}>
        <MainMetricsApp />
      </Provider>
    );
  }

  private applyHotReload(providerComponent: JSX.Element, node: HTMLElement) {
    if (module.hot) {
      module.hot.accept(BootManager.ROOT_COMPONENT_PATH, () => {
        ReactDOM.render(<AppContainer>{providerComponent}</AppContainer>, node);
      });
    }
  }

  private async applyPolyfills(): Promise<void> {
    if (isIE) await import("./polyfills");
  }
}

export default new BootManager();
