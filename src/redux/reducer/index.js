import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export const types = {
  BOOK_APPOINTMENT_SUCCESS: 'BOOK_APPOINTMENT_SUCCESS',
  BOOK_APPOINTMENT_FAILED: 'BOOK_APPOINTMENT_FAILED',
  BOOK_APPOINTMENT: 'BOOK_APPOINTMENT',
  CONFIRM_DETAIL: 'CONFIRM_DETAIL',
  UPDATE_ISSUE: 'UPDATE_ISSUE',
}

const { BOOK_APPOINTMENT, UPDATE_ISSUE, CONFIRM_DETAIL } = types;


// TODO add proper colors for each device
const colors = [
  { content: "Gold", url: "gold", id: "gold" },
  { content: "Silver", url: "silver", id: "silver" },
  { content: "Space Gray", url: "space-gray", id: "space-gray" },
];

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  zipCodes: [
    94002,
    94003,
    94005,
    94010,
    94011,
    94012,
    94014,
    94015,
    94016,
    94017,
    94018,
    94019,
    94020,
    94021,
    94025,
    94026,
    94027,
    94028,
    94029,
    94030,
    94031,
    94037,
    94038,
    94044,
    94045,
    94059,
    94060,
    94061,
    94062,
    94063,
    94064,
    94065,
    94066,
    94067,
    94070,
    94071,
    94074,
    94080,
    94083,
    94096,
    94098,
    94099,
    94128,
    94307,
    94308,
    94401,
    94402,
    94403,
    94404,
    94405,
    94406,
    94407,
    94408,
    94409,
  ],
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
  },
  info: {
    address:  "",
    email: "",
    name: "",
    device: "",
    model: "",
    issue: "",
    color: "",
    phone: "",
    zipCode: '',
    city: 'FakeSanJose',
    state: 'CA',
    instructions:""
  },
};

const rootReducer = (state = initialState, payload) => {
  const {type, info} = payload;
  switch (type) {
    case BOOK_APPOINTMENT: {
      return {
        ...state,
      };
    }
    case CONFIRM_DETAIL: {
      console.log('info', state.info)
      return {
        ...state,
        info: {
          ...state.info, ...info,
        },
      };
    }
    case UPDATE_ISSUE: {
      return {
        ...state,
        info: {...state.info, issue: info},
      };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  root: rootReducer,
  router: routerReducer
});



export const actions = {
  confirmDetail: info => ({type: CONFIRM_DETAIL, info}),
  updateIssue: info => ({type: UPDATE_ISSUE, info}),
  bookAppointment: info => ({type: BOOK_APPOINTMENT, info}),
};


export default reducer;