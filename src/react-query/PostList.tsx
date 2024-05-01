import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import usePosts from "./hooks/usePosts";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const fetchPost = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {data?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
