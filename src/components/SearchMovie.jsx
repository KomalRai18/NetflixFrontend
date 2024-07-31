import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux' 
import { setSearchedMovie } from '../redux/searchMovieSlice'
import { setLoading } from '../redux/userSlice'
import MoiveList from './moiveList'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAzMGU1ZWFhYzBhNTEwNzk0ZmNjOTQxZGIxOGNkOSIsInN1YiI6IjY2Njg0ZDExZjMwZWRhMGM4YzNjNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYo7Vk0jk5Ho49F1LEco20H-o4urglKYQAG8ntQO6bY'
  }
};
const SearchMovie = () => {
    const [movie, setMovie] = useState("")
    const dispatch = useDispatch()
    const {movieName, searchedMovie} = useSelector(store=>store.search)
    const isLoading = useSelector(store=>store.app.isLoading)
    
    const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      try {
          const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options);
          const movies = res?.data?.results;
          console.log(movies)
          dispatch(setSearchedMovie({ movie, movies }));
      } catch (error) {
          console.log(error);
      } finally {
          dispatch(setLoading(false));
      }
      setMovie("");
  }
  return (
    <>
    <div className='flex justify-center pt-[20%] w-[100%]'>
      <form onSubmit={submitHandler} className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input value={movie} onChange={(e) => { setMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
          <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
        </div>
      </form>
    </div>
    {
      searchedMovie ? ( <MoiveList title={movieName} searchingMovie={true} sMovies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
    }
    </>
  )
}

export default SearchMovie
