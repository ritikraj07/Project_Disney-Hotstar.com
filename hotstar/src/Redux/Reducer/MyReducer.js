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
    GET_WATCHLIST
} from "../Actions/actionType";
let intialState = {
  GET_LATEST_TRENDING: [],
  GET_SPORT: [],
  GET_LATEST_SHOW: [],
  GET_MOVIE: [],
  GET_FREEMOVIE: [],
  GET_LIST: [],
    WATCHLIST:[],
  SEARCH_RESULTS: [],
  movie_detail: {},
  key_id: "",
  isLoggedIn: false,
  isSubscribed: false,
};

function MyReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_LATEST_TRENDING":
      return { ...state, GET_LATEST_TRENDING: action.payload };
    case "GET_FREEMOVIE":
      return { ...state, GET_FREEMOVIE: action.payload };
    case "GET_LATEST_SHOW":
      return { ...state, GET_LATEST_SHOW: action.payload };
    case "GET_MOVIE":
      return { ...state, GET_MOVIE: action.payload };
    case "GET_DETAILS":
      return { ...state, movie_detail: action.payload };
    case "GET_LIST":
      return { ...state, GET_LIST: action.payload };
    case "GET_SPORT":
      return { ...state, GET_SPORT: action.payload };
      case "GET_WATCH_LIST":
        return{...state, WATCHLIST: [...state.WATCHLIST, action.payload] };

        case "REMOVE_LIST":
          return {
            ...state,
            WATCHLIST: state.WATCHLIST.filter((ele) => {
              if (ele.id !== action.payload) {
                return ele
              }
            }),
          };
    case GET_KEY:
      return { ...state, key_id: action.payload };
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    case SUBSCRIBE:
      return { ...state, isSubscribed: true };
    case 'SEARCH_RESULTS':
      return {
        ...state,
        SEARCH_RESULTS: action.payload,
      };
    default:
      return state;
  }
}

export default MyReducer;
