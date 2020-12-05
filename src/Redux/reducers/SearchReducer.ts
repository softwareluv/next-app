import {
    Record,
    SearchDispatchTypes,
    SEARCHING_FAILED,
    SEARCHING_RECORDS,
    SEARCHING_SUCCESS,
    SEARCH_RESET,
  } from "../actions/SearchActionTypes";
  
  interface DefaultStateI {
    loading: boolean;
    records: Record[];
  }
  
  const defaultState: DefaultStateI = {
    loading: false,
    records: [],
  };
  
  const searchReducer = (
    state: DefaultStateI = defaultState,
    action: SearchDispatchTypes
  ): DefaultStateI => {
    switch (action.type) {
      case SEARCHING_FAILED:
        return {
          loading: false,
          records: state.records,
        };
      case SEARCHING_RECORDS:
        return {
          loading: true,
          records: state.records,
        };
      case SEARCHING_SUCCESS:
        // let newList = [...state.records, action.payload];
        // console.log('search results: ', action.payload);
        return {
          loading: false,
          records: state.records.concat(action.payload),
        };
      case SEARCH_RESET:
        return {
          loading: false,
          records: []
        }
    }
    return state;
  };
  
  export default searchReducer;
  