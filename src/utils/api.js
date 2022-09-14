import axios from "axios";
import { store } from "redux";

export default class API {
  static request(
    payload,
    hasAuth = false,
    shouldEncode = false,
    signToken = null
  ) {
    const apiToken = store.getState().auth.accessToken;
    const headerAuthBearer = hasAuth
      ? { Authorization: `Bearer ${signToken || apiToken}` }
      : null;

    const headerTypeEncoded = shouldEncode
      ? { "content-type": "application/x-www-form-urlencoded" }
      : null;

    return axios.request({
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      headers: {
        "Content-Type": "application/json",
        ...headerAuthBearer,
        ...headerTypeEncoded,
      },
      ...payload,
    });
  }
}
