import {
  combineReducers
} from "redux";
import phReducer from "./phReducer";
import nutriReducer from "./nutriReducer";
import watertempReducer from "./watertempReducer";
import heightReducer from "./heightReducer";
import tempReducer from "./tempReducer";

export default combineReducers({
  ph_sensor: phReducer,
  nutrition_sensor: nutriReducer,
  water_temp_sensor: watertempReducer,
  water_height_sensor: heightReducer,
  temp_sensor: tempReducer
});