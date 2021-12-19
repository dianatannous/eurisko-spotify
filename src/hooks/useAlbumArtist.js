// @ts-nocheck
import Api from '../api/Api';
import {useDispatch} from 'react-redux';
import { fetchAlbums } from '../redux/actions/albumAction';

/** Get the album artist from api than we sent 
 * the response to store (redux) to be access in any component */

export const useAlbumArtist=(id)=>{
    const dispatch = useDispatch();
    const getAlbums=()=>{
        Api.get(`/artists/${id}/albums`,{
            headers:{
                Authorization :"Bearer " +localStorage.getItem("accessToken")  
             }
        }).then(response =>{
           response.data && dispatch(fetchAlbums(response.data.items))
       
        }).catch(error=>{
            console.log(JSON.stringify(error));
        })
     
    }

return {getAlbums}

}