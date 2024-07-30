import axios from "axios";
import { LOGIN_NOT, LOGIN_SUCCESS } from "./actionTypes";

export const loginUser = (credentials) => async (dispatch) => {
  const API_URL = "http://localhost:3000/user/login";
  try {
    const resp = await axios.post(API_URL, credentials);

    dispatch({ type: LOGIN_SUCCESS, payload: resp.data.token });

    return { success: true, message: "Login successful" };
  } catch (error) {
    dispatch({ type: LOGIN_NOT });

    return { success: false, message: error.message || "Login failed" };
  }
};