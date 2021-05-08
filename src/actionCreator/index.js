import jsonPlaceHolder from "../axios/jsonPlaceHolder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value()
  
}


export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const res = await jsonPlaceHolder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: res.data
    });
  };
};


export const fetchUser = (userId) => async dispatch =>
  _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async function (userId, dispatch) {
  const res = await jsonPlaceHolder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
});