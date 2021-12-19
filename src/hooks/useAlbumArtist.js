import { useDispatch } from "react-redux";

import { fetchAlbums } from "../redux/actions/albumAction";
import Api from "../api/Api";

/** Get the album artist from api than we sent
 * the response to store (redux) to be access in any component */
export const useAlbumArtist = (id) => {
  const dispatch = useDispatch();
  const getAlbums = () => {
    Api.get(`/artists/${id}/albums`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        response.data && dispatch(fetchAlbums(response.data.items));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return { getAlbums };
};
