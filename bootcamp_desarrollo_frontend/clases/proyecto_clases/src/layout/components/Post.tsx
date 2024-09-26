import { IPost } from "../../page/PostPage";

interface IProps {
  post: IPost;
}
export const Post = ({ post }: IProps) => {
  return (
    <div>
      <h1>{post.id}</h1>
      {post.imagen && <img src={post.imagen} alt={post.title} />}
    </div>
  );
};
