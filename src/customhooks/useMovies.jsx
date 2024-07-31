import React, { useEffect } from 'react';
import axios from 'axios';
import { getTrailer } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAzMGU1ZWFhYzBhNTEwNzk0ZmNjOTQxZGIxOGNkOSIsInN1YiI6IjY2Njg0ZDExZjMwZWRhMGM4YzNjNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYo7Vk0jk5Ho49F1LEco20H-o4urglKYQAG8ntQO6bY'
    }
  };
const useMovies = async(movieId) => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
        console.log(res.data.results)
        const trailer = res?.data?.results?.filter((item)=>{
            return item.type==="Teaser"
        })
        dispatch(getTrailer(trailer[0]))
        console.log(trailer)
    } catch (error) {
        console.log(error)
    }
}

export default useMovies
