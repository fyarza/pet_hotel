import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AUTH_LOGOUT } from "./auth/authTypes";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const appReducer = combineReducers();

const rootReducer = (state, action) => {
  // state should be immutable
  let newState = state;
  if (action.type === AUTH_LOGOUT) {
    storage.removeItem("persist:root");
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default persistReducer(persistConfig, rootReducer);
