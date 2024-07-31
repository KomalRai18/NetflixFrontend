import { useDispatch } from "react-redux"
import { getNowPlayingMovies } from "../redux/movieSlice"
import axios from "axios"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAzMGU1ZWFhYzBhNTEwNzk0ZmNjOTQxZGIxOGNkOSIsInN1YiI6IjY2Njg0ZDExZjMwZWRhMGM4YzNjNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYo7Vk0jk5Ho49F1LEco20H-o4urglKYQAG8ntQO6bY'
  }
};
const useNowPlayingMovie = async()=>{
    const dispatch = useDispatch()
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)
      console.log(res.data.results)
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }
export default useNowPlayingMovie