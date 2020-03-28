import {
  set_number,
  set_operation,
  get_result,
  type_number,
  clear,
  set_virgule
} from "../actions/types";
import calclu from "../../../api/calculator_API";

const initialState = {
  new: false,
  virgule: false,
  currentNB: 0
};

let calculer = new calclu();

export const typeNumber = number => {
  if (number === ",") {
    return {
      type: set_virgule
    };
  } else {
    return {
      type: type_number,
      payload: number
    };
  }
};

export function setOperation(number, operation) {
  return function(dispatch) {
    calculer.setNUmber(number, () => {
      switch (operation) {
        case "+":
          calculer.setOperation(calculer.Addition, res => {
            dispatch({
              type: set_operation,
              payload: res.result
            });
          });
          break;
        case "-":
          calculer.setOperation(calculer.Subtraction, res => {
            dispatch({
              type: set_operation,
              payload: res.result
            });
          });
          break;
        case "x":
          calculer.setOperation(calculer.Multiplication, res => {
            dispatch({
              type: set_operation,
              payload: res.result
            });
            console.log(res.result);
          });
          break;
        case "/" || "%":
          calculer.setOperation(calculer.Division, res => {
            dispatch({
              type: set_operation,
              payload: res.result
            });
            console.log(res.result);
          });
          break;
        case "%":
          calculer.setOperation(calculer.Division, res => {
            dispatch({
              type: set_operation,
              payload: res.result
            });
            console.log(res.result);
          });
          break;
        case "=":
          calculer.Result(res => {
            dispatch({
              type: get_result,
              payload: res.result
            });
            console.log(res.result);
          });
          break;
        case "AC":
          calculer.clear();
          dispatch({
            type: clear,
            payload: 0
          });
          break;
        case "C":
          calculer.clear();
          dispatch({
            type: clear,
            payload: 0
          });
          break;

        default:
          break;
      }
    });
  };
}

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

// export function getResult() {
//   return function(dispatch) {
//     calculer.Result(res => {
//       dispatch({
//         type: get_result,
//         payload: res.result
//       });
//     });
//   };
// }

// export function setNumber() {
//   return function(dispatch) {
//     calculer.setNUmber(res => {
//       dispatch({
//         type: get_result,
//         payload: res.result
//       });
//     });
//   };
// }
