// tslint:disable:no-console
import { bindActionCreators } from "redux";
import Types from "./types";

const actions = {
  loadMetrics() {
    return async dispatch => {
      dispatch({
        type: Types.START_LOADING_METRICS
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
