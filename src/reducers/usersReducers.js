export const listofUsers = (listUsers = [], action) => {
  if (action.type === "FETCH_USER") {
    return [...listUsers, action.payload];
  }
  return listUsers;
};
