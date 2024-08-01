import axios from "axios";
import { CARTITEMS } from "./actionTypes";
import { IS_LOADING, NO_LOADING } from "../Loading/actionTypes";

export const getCartItems = async (dispatch) => {
  const API_URL = "http://localhost:3000/cart";
  dispatch({ type: IS_LOADING });


  try {
    const {token} = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      console.error("Token not found");
      return;
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
    dispatch({ type: CARTITEMS, payload: response.data.items });
    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: NO_LOADING });
  }
};