import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/posts')
interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery{
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    return useInfiniteQuery<Post[], Error>({
        // /users/1/posts
        queryKey: ['posts', query], // every time query changes, react will re render the page (same as dependencies in useEffect)
        queryFn: ({pageParam=1}) => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _start: (pageParam - 1) * query.pageSize,  // Tells axios from what index to fetch data for different pages
                _limit: query.pageSize,                      // The number of data to fetch from backend
            }
        })
        .then((res) => res.data),
        staleTime: 1 *60 * 1000, //1 min
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            // if you are on page 1, we should return 2 here (if we are on page 1, all pages has length 1)
            // if last page has more than 0 posts, then jump to next page, otherwise undefined so we don't go to a new page
            return lastPage.length>0 ? allPages.length + 1 : undefined;
            // This will return this to queryFn
        }
    })
}

export default usePosts;