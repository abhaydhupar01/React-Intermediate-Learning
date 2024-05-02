import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery{
    page: number;
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    return useQuery<Post[], Error>({
        // /users/1/posts
        queryKey: ['posts', query], // every time query changes, react will re render the page (same as dependencies in useEffect)
        queryFn: () => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _start: (query.page - 1) * query.pageSize,  // Tells axios from what index to fetch data for different pages
                _limit: query.pageSize,                      // The number of data to fetch from backend
            }
        })
        .then((res) => res.data),
        staleTime: 1 *60 * 1000, //1 min
        keepPreviousData: true
    })
}

export default usePosts;