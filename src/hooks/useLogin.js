// @ts-nocheck
import React from 'react';
import { useHistory } from 'react-router-dom';

import { LoginUrl } from '../api/LoginUrl';
import { getReturnedParamsFromSpotifyAuth } from '../utils';

export const useLogin = () => {
  const history = useHistory();
  //** store the token inside local storage  */
  React.useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      history.push("/artist")
    }
  });

  const handleLogin = () => {
    window.location = LoginUrl;
  }

  return { handleLogin };
}
