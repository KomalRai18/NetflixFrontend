import axios from "axios";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAzMGU1ZWFhYzBhNTEwNzk0ZmNjOTQxZGIxOGNkOSIsInN1YiI6IjY2Njg0ZDExZjMwZWRhMGM4YzNjNjc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYo7Vk0jk5Ho49F1LEco20H-o4urglKYQAG8ntQO6bY'
    }
  };
const useTopRatedMovies = async()=>{
    const dispatch = useDispatch();
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated',options);
        console.log(res.data.results)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
    
}
export default useTopRatedMovies