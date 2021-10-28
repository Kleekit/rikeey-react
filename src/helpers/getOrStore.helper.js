export const getOrStoreId = function (id) {
  if (id) {
    localStorage.setItem("rikeeyWho", id);
    return true;
  } else {
    return localStorage.getItem("rikeeyWho");
  }
};
