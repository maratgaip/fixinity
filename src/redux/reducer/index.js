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
  APPLY_COUPON: 'APPLY_COUPON',
}

const { BOOK_APPOINTMENT, UPDATE_ISSUE, CONFIRM_DETAIL, SAVE_STORAGE, BOOK_APPOINTMENT_SUCCESS, APPLY_COUPON } = types;

const colors = {
  "gold": { content: "Gold", url: "gold", id: "gold" },
  "roseGold": { content: "Rose Gold", url: "rose-gold", id: "rose-gold" },
  "silver": { content: "Silver", url: "silver", id: "silver" },
  "spaceGray": { content: "Space Gray", url: "space-gray", id: "space-gray" },
  "black": { content: "Black", url: "black", id: "black" },
  "jetBlack": { content: "Jet Black", url: "jet-black", id: "jet-black" },
  "red": { content: "Red", url: "red", id: "red" },
};

const iPadColors = [{"default": { content: "default", url: "default", id: "default" }}];

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  appliedCoupon: 0,
  sendAppointment: false,
  notAvailableWeekDays: [],
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
    coupon: {
      'ulan': 10,
      'ulanulan': 15,
    },
    bmw: {
      title: "Select BWM Model",
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
          { content: "Screen Repair", url: "screen-repair/schedule", id: "screen-repair" },
          { content: "Battery", url: "battery/schedule", id: "battery" },
          { content: "Back Camera", url: "back-camera/schedule", id: "back-camera" },
          { content: "Front Camera", url: "front-camera/schedule", id: "front-camera" },
          { content: "Home Button", url: "home-button/schedule", id: "home-button" },
          { content: "Charging Port", url: "charging-port/schedule", id: "charging-port" },
          { content: "WiFi/Bluetooth", url: "wifi-bluetooth/schedule", id: "wifi-bluetooth" },
          { content: "Side Buttons", url: "side-buttons/schedule", id: "side-buttons" },
          { content: "Internal Speakers", url: "internal-speakers/schedule", id: "internal-speakers" },
          { content: "Power Button", url: "power-button/schedule", id: "power-button" },
          { content: "Headphone Plug", url: "headphone-plug/schedule", id: "headphone-plug" },
          { content: "Loud Speaker", url: "loud-speaker/schedule", id: "loud-speaker" },
          // { content: "Water Damage", url: "schedule", id: "water-damage" },
          // { content: "Won't Turn On", url: "schedule", id: "no-turn" },
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
            "screen-repair": 85,
            "back-camera": 159,
          },
        },
        "8": {
          issues: {
            "screen-repair": 85,
            "back-camera": 159,
            "front-camera": 69,
            "charging-port": 69,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
          },
        },
        "7-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 65,
            "back-camera": 159,
            "front-camera": 65,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
          },
        },
        "7": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 89,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
            "loud-speaker": 59,
          },
        },
        "6s-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 89,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6s": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 65,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "se": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 79,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "5": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
      },
    },
    mercedes: {
      title: "Select Mercedes Model",
      model:[
        { content: "iPad Air 2", url: "air-2/default", id: "air-2" },
        { content: "iPad Air", url: "air/default", id: "air" },
        { content: "iPad Mini 4", url: "mini-4/default", id: "mini-4" },
        { content: "iPad Mini 1, 2, 3", url: "mini-1-2-3/default", id: "mini-1-2-3" },
        { content: "iPad 2, 3, 4", url: "ipad-2-3-4/default", id: "ipad-2-3-4" },
        { content: "iPad 5", url: "ipad-5/default", id: "ipad-5" },
        { content: "iPad 6", url: "ipad-6/default", id: "ipad-6" },
      ],
      issue:{
        title: "Select Issue Type",
        data: [
          { content: "Screen Repair", url: "screen-repair/schedule", id: "screen-repair" },
        ]
      },
      color: {
        title: "Select iPad Color",
        "air-2": iPadColors,
        "air": iPadColors,
        "mini-4": iPadColors,
        "mini-1-2-3": iPadColors,
        "ipad-2-3-": iPadColors,
        "ipad-5": iPadColors,
        "ipad-6": iPadColors,
      },
      price: {
        "air-2": {
          issues: {
            "screen-repair": 325,
          },
        },
        "air": {
          issues: {
            "screen-repair": 105,
          },
        },
        "mini-4": {
          issues: {
            "screen-repair": 215,
          },
        },
        "mini-1-2-3": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-2-3-4": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-5": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-6": {
          issues: {
            "screen-repair": 145,
          },
        },
      },
    },
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
    zipCode: '10000',
    city: '  ',
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
    case APPLY_COUPON: {
      return {
        ...state,
        appliedCoupon: payload.coupon,
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
  applyCoupon: coupon => ({type: APPLY_COUPON, coupon}),
  bookAppointment: (info, resolve, reject) => ({type: BOOK_APPOINTMENT, info, resolve, reject}),
  saveToStorage: info => ({type: SAVE_STORAGE, info}),
};


export default reducer;