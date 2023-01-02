import Axios from "./axios";

class UserApi {
  static getInfoFromID = (userID) => {
    const params = { id: userID };
    return Axios.get("/users", { params });
  };

  static registerNewAccount = (accountInfo) => {
    return Axios.post("​/api​/v1​/auth​/register", accountInfo);
  };

  static loginToServer = (account) => {
    return Axios.post("/api/v1/auth/access-token/", account);
  };

  static updateUserInfo = (id, info) => {
    return Axios.put(`/users/${id}`, info);
  };
}

export default UserApi;
