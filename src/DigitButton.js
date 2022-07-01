import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="Button"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
