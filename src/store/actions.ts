// tslint:disable:no-console
import { bindActionCreators } from "redux";
import { sync } from "../utils";
import { DateEnum, DateList } from "./date-list";
import Types from "./types";

import IMetrics = MainMetrics.store.IMetrics;

const actions = {
  loadMetrics(date: string) {
    return async dispatch => {
      dispatch({
        type: Types.START_LOADING_METRICS,
        payload: { date }
      });

      try {
        const url: string = `/dashboard/${DateEnum[DateList.indexOf(date)]}`.toLowerCase();
        const response: Response = await sync(url, "Сouldn't access data");
        const result: { success: IMetrics; error: string } = await response.json();

        if (result.error) throw new Error(result.error);

        dispatch({
          type: Types.SUCCESS_LOADING_METRICS,
          payload: { metrics: result.success }
        });
      } catch (e) {
        console.warn(e);
        dispatch({
          type: Types.ERROR_LOADING_METRICS,
          error: e
        });
      }
    };
  }
};

export default dispatcher => bindActionCreators(actions, dispatcher);
