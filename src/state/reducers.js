import { combineReducers } from "redux";
import types from "./types";
import { createReducer } from "../utils";

/* State shape
{
    colors: { colors }
    quote: { quote },
    invert: false
}
*/

const colors = createReducer( '' )({
  [ types.TOGGLE_COLORS ]: (state, action) => action.payload,
});

const quote = createReducer( {} )({
  [ types.TOGGLE_QUOTE ]: (state, action) => ({
    text: action.payload.quote[0],
    author: action.payload.quote[1]
  })
});

const invert = createReducer( false )({
  [ types.TOGGLE_INVERT ]: (state, action) => !state
})

export default combineReducers( {
  colors,
  quote,
  invert
} );
