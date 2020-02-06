import JsonPlaceHolder from "../apis/JsonPlaceHolder";
export const fetchPost = () => {
  return async dispatch => {
    const response = await JsonPlaceHolder.get("/get_memes");
    dispatch({ type: "FETCH_POST", payload: response.data });
  };
};
