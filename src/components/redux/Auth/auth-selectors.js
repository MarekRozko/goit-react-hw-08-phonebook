export const isUserLogin = (state) => state.auth.isLogin;

export const getAuth = (state) => {
  const { isLogin, token } = state.auth;
  return { isLogin, token };
};

export const getUser = (state) => state.auth.user;
