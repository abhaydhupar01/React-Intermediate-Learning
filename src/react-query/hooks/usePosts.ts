import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => {
    if (!userId) userId = undefined
    return useQuery<Post[], Error>({
        // /users/1/posts
        queryKey: userId ? ['users', userId , 'posts'] : ['posts'],
        queryFn: () => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
            params: {
                userId
            }
        })
        .then((res) => res.data)
    })
}

export default usePosts;