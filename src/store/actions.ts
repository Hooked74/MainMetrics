// tslint:disable:no-console
import { bindActionCreators } from "redux";
import DateList from "./date-list";
import Types from "./types";

const actions = {
  loadMetrics<T = DateList>(date: T) {
    return async dispatch => {
      dispatch({
        type: Types.START_LOADING_METRICS,
        date
      });

      try {
        // TODO: dispatch query
        // dispatch({
        //   type: Types.LOAD_NEW_MOVIES,
        //   payload: {
        //     movies: await (query
        //       ? MovieAPIManager.findMovies(page, query)
        //       : MovieAPIManager.getPopularMovies(page))
        //   }
        // });
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
