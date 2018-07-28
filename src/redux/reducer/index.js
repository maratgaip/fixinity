import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authorize = (login, password) => ({
  type: AUTH_REQUEST,
  payload: { login, password }
});

// TODO add proper colors for each device
const colors = [
  { content: "Gold", url: "gold", id: "gold" },
  { content: "Silver", url: "silver", id: "silver" },
  { content: "Space Gray", url: "space-gray", id: "space-gray" },
];

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  device: {
    iphone: {
      title: "Select iPhone Model",
      model:[
        { content: "8 Plus", url: "8-plus", id: "8-plus" },
        { content: "8", url: "8", id: "8" },
        { content: "7 Plus", url: "7-plus", id: "7-plus" },
        { content: "7", url: "7", id: "7" },
        { content: "6s Plus", url: "6s-plus", id: "6s-plus" },
        { content: "6s", url: "6s", id: "6s" },
        { content: "SE", url: "se", id: "se" },
        { content: "5s", url: "5s", id: "5s" },
        { content: "5", url: "5", id: "5" },
      ],
      issue:{
        title: "Select Issue Type",
        data: [
          { content: "Broken Screen", url: "zip-code", id: "broken-screen" },
          { content: "Battery", url: "zip-code", id: "battery" },
          { content: "Water Damage", url: "zip-code", id: "water-damage" },
          { content: "Won't Turn On", url: "zip-code", id: "no-turn" },
        ]
      },
      color: {
        title: "Select iPhone Color",
        "8-plus": colors,
        "8": colors,
        "7-plus": colors,
        "7": colors,
        "6s": colors,
        "6s-plus": colors,
        "se": colors,
        "5s": colors,
        "5": colors,
      },
    }
  }
};
/*
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload }
    }
    default:
      return state;
  }
};*/

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state };
    }
    case AUTH_FAILURE: {
      return { ...state }
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  root: rootReducer,
  router: routerReducer
});

export default reducer;