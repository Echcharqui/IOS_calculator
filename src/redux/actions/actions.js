import {
  set_number,
  set_operation,
  get_result,
  type_number,
  clear,
  set_virgule
} from "./types";
import calclu from "../../../api/calculator_API";
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

        case "/":
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
