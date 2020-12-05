import { Dispatch } from "redux";
import searchiTunes from "../../api/index";
import {
  SearchDispatchTypes,
  SEARCHING_RECORDS,
  SEARCHING_FAILED,
  SEARCHING_SUCCESS,
  SEARCH_RESET,
} from "./SearchActionTypes";

export const SearchiTunes = (
  term: string,
  limit: number,
  offset: number
) => async (dispatch: Dispatch<SearchDispatchTypes>) => {
  try {
    dispatch({
      type: SEARCHING_RECORDS,
    });

    const res = await searchiTunes(term, limit, offset);
    // console.log('res: ', res);
    dispatch({
      type: SEARCHING_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: SEARCHING_FAILED,
    });
  }
};
export const ClearSearch = () => (dispatch: Dispatch<SearchDispatchTypes>) => {
  dispatch({
    type: SEARCH_RESET,
  });
};
