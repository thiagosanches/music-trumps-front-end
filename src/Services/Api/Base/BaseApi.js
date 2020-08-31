import axios from 'axios';
import {anonymous, authenticated} from './useConfig';

const _handleError = (error) => {
  if (error && error.response && error.response.status === 401) {
    //redirect to 401
  } else if (error && error.response && error.response.status === 403) {
    // redirect to 403
  } else {
    throw error;
  }
};

const _post = async (url, data, axiosConfig) => {
  try {
    const response = await axios.post(url, data, axiosConfig);
    return response.data;
  } catch (error) {
    return _handleError(error);
  }
};
const _get = async (url, axiosConfig) => {
  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    _handleError(error);
  }
};
const ApiRequests = {
  anonymous: () => {
    return {
      get: async (url) => {
        return await _get(url, anonymous());
      },
      post: async (url, data) => {
        return await _post(url, data, anonymous());
      },
    };
  },
  authenticated: () => {
    return {
      get: async (url) => {
        return await _get(url, authenticated());
      },
      post: async (url, data) => {
        return await _post(url, data, authenticated());
      },
    };
  },
};
export default ApiRequests;
