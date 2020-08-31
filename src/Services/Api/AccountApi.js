import ApiRequests from './Base/BaseApi';
import ApiErrorResponse from './Base/ApiErrorResponse';
const AccountApi = {
  login: async (username, pwd) => {
    let url = '/SignIn';
    let loginRequest = {login: username, password: pwd};
    try {
      return await ApiRequests.anonymous().post(url, loginRequest);
    } catch (e) {
      return new ApiErrorResponse(e.response.status, e.response.data);
    }
  },
};
export default AccountApi;
