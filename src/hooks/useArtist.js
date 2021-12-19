import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Api from "../api/Api";
import { fetchArtists } from "../redux/actions/artistAction";

export const useArtist = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = React.useState("");
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const getArtists = () => {
    Api.get(`/search?q=${search}&type=artist`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        response.data.artists.items &&
          dispatch(fetchArtists(response.data.artists.items));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  /**When the user press enter in search box the getArtists function we be call */
  const SubmitSearch = (e) => {
    e.preventDefault();
    getArtists();
  };
  /**When the user press  to the artist  will go to album page */
  const navigateToAlbumArtist = (id, name) => {
    history.push({
      pathname: "/artist-album",
      state: { id: id, name: name },
    });
  };

  return { search, handleSearchChange, SubmitSearch, navigateToAlbumArtist };
};
