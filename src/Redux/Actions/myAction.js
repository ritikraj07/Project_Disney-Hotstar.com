import {
  GET_DETAILS,
  GET_KEY,
  GET_LATEST_TRENDING,
  GET_FREEMOVIE,
  GET_LATEST_SHOW,
  GET_LIST,
  GET_MOVIE,
  GET_SPORT,
  LOGIN,
  LOGOUT,
  SUBSCRIBE,
  SEARCH_RESULTS,
} from "../Actions/actionType";

export function getData(type, url, setLoading, dispatch) {
  console.log(url, type);
  fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
      // setData(data.results);
      // console.log(data.results);
      setLoading(false);
      dispatch({
        type: type,
        payload: data.results,
      });
    });
}

export function getResults(props, dispatch) {
  console.log("inside getresults");

  dispatch({
    type: "SEARCH_RESULTS",
    payload: props,
  });
}
export const login = () => {
    return{
      type: 'LOGIN',
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };

  export const AddWatchList = (e) => {
    return{
      type: 'GET_WATCH_LIST',
      payload:e,
    };
  };

export const removeList = (elementId) => {
  return{
    type: 'REMOVE_LIST',
    payload: elementId,
  }
   
  };

