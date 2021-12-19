// @ts-nocheck
import React from 'react'
import { Search } from '../../components/search'
import './artist-search.style.css'
import { useArtist } from '../../hooks/useArtist'
import {useSelector} from 'react-redux';
import { Artist } from '../../components/artist';
import { calculateRating } from '../../utils/CalculateRating';

export const ArtistSearchPage = () => {
    const { search, handleSearchChange ,SubmitSearch,navigateToAlbumArtist} = useArtist();
    const {artists} = useSelector(state => state.artist);
    console.log(artists);
    return (
        <div className="artist-page">
            <div className="container">
                <div className= {artists.length===0 ? "search-wrap-v2":"search-wrap"}>
                    <Search
                        value={search}
                        handleChange={handleSearchChange}
                        onSubmit={SubmitSearch}

                        />
                </div>

              <div className="artist-warp">
                <div className='row justify-content-center'>
                    {
                        artists.length>0 && artists.map((artist,index)=>{
                            return(
                                <Artist
                                key={index+""}
                                img={artist.images[1].url}
                                name={artist.name }
                                followers={artist.followers.total}
                                popularity={calculateRating(artist.popularity)}
                                navigate={()=>navigateToAlbumArtist(artist.id,artist.name)}  
                                /> 
                          
                            )
                        })
                    }
                    </div>
                </div> 

            </div>
        </div>
    )
}
