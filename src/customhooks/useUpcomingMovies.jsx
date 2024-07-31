import axios from "axios";
import { getUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAzMGU1ZWFhYzBhNTEwNzk0ZmNjOTQxZGIxOGNkOSIsInN1YiI6IjY2Njg0ZDExZjMwZWRhMGM4YzNjNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYo7Vk0jk5Ho49F1LEco20H-o4urglKYQAG8ntQO6bY'
    }
  };
const useUpcomingMovies = async()=>{
    const dispatch = useDispatch()
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming',options)
        console.log(res.data.results)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
export default useUpcomingMovies