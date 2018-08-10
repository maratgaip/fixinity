import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export const types = {
  BOOK_APPOINTMENT_SUCCESS: 'BOOK_APPOINTMENT_SUCCESS',
  BOOK_APPOINTMENT_FAILED: 'BOOK_APPOINTMENT_FAILED',
  BOOK_APPOINTMENT: 'BOOK_APPOINTMENT',
  CONFIRM_DETAIL: 'CONFIRM_DETAIL',
  UPDATE_ISSUE: 'UPDATE_ISSUE',
  SAVE_STORAGE: 'SAVE_STORAGE',
  SAVE_STORAGE_SUCCESS: 'SAVE_STORAGE_SUCCESS',
}

const { BOOK_APPOINTMENT, UPDATE_ISSUE, CONFIRM_DETAIL, SAVE_STORAGE, BOOK_APPOINTMENT_SUCCESS } = types;

const colors = {
  "gold": { content: "Gold", url: "gold", id: "gold" },
  "roseGold": { content: "Rose Gold", url: "rose-gold", id: "rose-gold" },
  "silver": { content: "Silver", url: "silver", id: "silver" },
  "spaceGray": { content: "Space Gray", url: "space-gray", id: "space-gray" },
  "black": { content: "Black", url: "black", id: "black" },
  "jetBlack": { content: "Jet Black", url: "jet-black", id: "jet-black" },
  "red": { content: "Red", url: "red", id: "red" },
};

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  sendAppointment: false,
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
        { content: "6 Plus", url: "6-plus", id: "6-plus" },
        { content: "6", url: "6", id: "6" },
        { content: "SE", url: "se", id: "se" },
        { content: "5/5C/5S", url: "5", id: "5" },
      ],
      issue:{
        title: "Select Issue Type",
        data: [
          { content: "Screen Repair", url: "zip-code", id: "screen-repair" },
          { content: "Battery", url: "zip-code", id: "battery" },
          { content: "Back Camera", url: "zip-code", id: "back-camera" },
          { content: "Front Camera", url: "zip-code", id: "front-camera" },
          { content: "Home Button", url: "zip-code", id: "home-button" },
          { content: "Charging Port", url: "zip-code", id: "charging-port" },
          { content: "WiFi/Bluetooth", url: "zip-code", id: "wifi-bluetooth" },
          { content: "Side Buttons", url: "zip-code", id: "side-buttons" },
          { content: "Internal Speakers", url: "zip-code", id: "internal-speakers" },
          { content: "Power Button", url: "zip-code", id: "power-button" },
          { content: "Headphone Plug", url: "zip-code", id: "headphone-plug" },
          { content: "Loud Speaker", url: "zip-code", id: "loud-speaker" },
          // { content: "Water Damage", url: "zip-code", id: "water-damage" },
          // { content: "Won't Turn On", url: "zip-code", id: "no-turn" },
        ]
      },
      color: {
        title: "Select iPhone Color",
        "8-plus": [colors.spaceGray, colors.gold, colors.silver, colors.red],
        "8": [colors.spaceGray, colors.gold, colors.silver, colors.red],

        "7-plus": [colors.gold, colors.silver, colors.roseGold, colors.black, colors.jetBlack, colors.red],
        "7": [colors.gold, colors.silver, colors.roseGold, colors.black, colors.jetBlack, colors.red],

        "6s-plus": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],
        "6s": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],
        "se": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],

        "6-plus": [colors.spaceGray, colors.gold, colors.silver],
        "6": [colors.spaceGray, colors.gold, colors.silver],
        "5": [colors.spaceGray, colors.gold, colors.silver],
      },
      price: {
        "8-plus": {
          issues: {
            "screen-repair": 139,
            "back-camera": 169,
          },
        },
        "8": {
          issues: {
            "screen-repair": 129,
            "back-camera": 169,
            "front-camera": 79,
            "charging-port": 79,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
          },
        },
        "7-plus": {
          issues: {
            "screen-repair": 99,
            "battery": 75,
            "back-camera": 169,
            "front-camera": 75,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
          },
        },
        "7": {
          issues: {
            "screen-repair": 109,
            "battery": 69,
            "back-camera": 99,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
            "loud-speaker": 69,
          },
        },
        "6s-plus": {
          issues: {
            "screen-repair": 90,
            "battery": 69,
            "back-camera": 99,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
        "6s": {
          issues: {
            "screen-repair": 85,
            "battery": 69,
            "back-camera": 75,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
        "se": {
          issues: {
            "screen-repair": 69,
            "battery": 69,
            "back-camera": 89,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
        "6-plus": {
          issues: {
            "screen-repair": 80,
            "battery": 69,
            "back-camera": 69,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
        "6": {
          issues: {
            "screen-repair": 75,
            "battery": 69,
            "back-camera": 69,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
        "5": {
          issues: {
            "screen-repair": 69,
            "battery": 69,
            "back-camera": 69,
            "front-camera": 69,
            "home-button": 69,
            "charging-port": 69,
            "side-buttons": 69,
            "internal-speakers": 69,
            "power-button": 69,
            "headphone-plug": 69,
          },
        },
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
    price: 0,
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
    case BOOK_APPOINTMENT_SUCCESS: {
      return {
        ...state,
        sendAppointment: true,
      };
    }
    case CONFIRM_DETAIL: {
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
    case SAVE_STORAGE: {
      return {
        ...state,
        info,
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
  bookAppointment: (info, resolve, reject) => ({type: BOOK_APPOINTMENT, info, resolve, reject}),
  saveToStorage: info => ({type: SAVE_STORAGE, info}),
};


export default reducer;