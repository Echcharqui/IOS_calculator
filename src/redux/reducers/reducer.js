import {
  set_number,
  set_operation,
  get_result,
  type_number,
  clear,
  set_virgule
} from "../actions/types";

const initialState = {
  new: false,
  virgule: false,
  currentNB: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type_number:
      if (state.new) {
        return {
          ...state,
          new: false,
          currentNB: parseInt(action.payload)
        };
      } else {
        if (state.virgule) {
          return {
            ...state,
            virgule: false,
            currentNB: parseFloat(state.currentNB + "." + action.payload)
          };
        } else {
          return {
            ...state,
            currentNB: parseFloat(state.currentNB + action.payload)
          };
        }
      }

    case set_number:
      return {
        ...state,
        currentNB: action.payload
      };
    case set_operation:
      return {
        ...state,
        new: true,
        currentNB: parseInt(action.payload)
      };
    case get_result:
      return {
        ...state,
        new: true,
        currentNB: action.payload
      };
    case clear:
      return {
        ...state,
        new: true,
        currentNB: action.payload
      };
    case set_virgule:
      return {
        ...state,
        virgule: true
      };
    default:
      return state;
  }
};
