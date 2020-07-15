import { GET_ERRORS, SET_AUTH_USER } from "./dispatchTypes";
import axios from "axios";

export const registerUser = (userData, history) => (dispatch) => {
  console.log("entered register user auth action");
  axios
    .post("https://jsonplaceholder.typicode.com/posts", userData)
    .then((res) => {
      console.log("invoking set auth user after API resp success");
      // axios.defaults.headers.common[]
      localStorage.setItem("userData", JSON.stringify(res.data));
      dispatch({
        type: SET_AUTH_USER,
        payload: res.data,
      });
      // history.push("/login");
    })
    .catch((err) => {
      console.log("invoking get errors user after API resp fail");
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
