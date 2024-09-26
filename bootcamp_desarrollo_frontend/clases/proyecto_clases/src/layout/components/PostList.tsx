import { useEffect, useState } from "react";
import { IPost } from "../../page/PostPage";
import { Post } from "./Post";

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts").then((response) => {
      response.json().then((data: IPost[]) => {
        setPosts(data);
      });
    });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
