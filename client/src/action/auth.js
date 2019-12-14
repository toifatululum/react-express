import axios from "axios";

import {
  REGISTER_BERHASIL,
  LOGIN__BERHASIL,
  ERROR,
  AUTH_ERROR,
  USER_LOADED,
  REGISTER_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";

const linkAddress = "https://simalakama.herokuapp.com";
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${linkAddress}/users/me`);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const register = ({ nama, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/JSON"
    }
  };
  try {
    const role = "User";
    const body = JSON.stringify({ nama, email, password, role });
    console.log(body);
    const res = await axios.post(`${linkAddress}/users/register`, body, config);
    console.log(res);
    dispatch({
      type: REGISTER_BERHASIL,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR
    });
  }
};
