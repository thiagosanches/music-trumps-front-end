const baseUrl = process.env.REACT_APP_API_BASE_URL;

const anonymous = () => {
  return {baseURL: baseUrl};
};

const authenticated = () => {
  const token = 'from cookies';
  const header = {
    Authorization: `bearer ${token}`,
  };
  return {headers: header};
};

export {anonymous, authenticated};
