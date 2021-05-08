import { combineReducers } from "redux";
import { listOfPosts } from "./listPostReducer";
import { listofUsers } from "./usersReducers";

export default combineReducers({
  posts: listOfPosts,
  users: listofUsers
});
