// @ts-nocheck
import React from 'react';
import { LoginUrl } from '../api/LoginUrl';
import { useHistory } from 'react-router-dom';
import { getReturnedParamsFromSpotifyAuth } from '../utils/getReturnedParams';
export const useLogin = () => {
  const history = useHistory();


  //** store the token inside local   */
  React.useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);
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
